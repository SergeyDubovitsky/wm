from __future__ import annotations

import json
import threading
from pathlib import Path
from uuid import uuid4

import paho.mqtt.client as mqtt
import pytest

from edge_agent.cli import main
from edge_agent.domain.config import MqttSettings
from edge_agent.domain.events import MqttPublication
from edge_agent.infrastructure.mqtt_publisher import connect_mqtt_publisher

pytestmark = pytest.mark.integration


def test_edge_agent_mqtt_publisher_sends_publication_to_local_broker(
    local_stack,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    topic = f"wm/v1/edge-agent-smoke/{uuid4().hex}"
    received = threading.Event()
    subscribed = threading.Event()
    received_payloads: list[dict[str, object]] = []

    subscriber = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
    subscriber.username_pw_set(local_stack.mqtt_username, local_stack.mqtt_password)

    def on_message(
        client: mqtt.Client,
        userdata: object,
        message: mqtt.MQTTMessage,
    ) -> None:
        received_payloads.append(json.loads(message.payload.decode("utf-8")))
        received.set()

    def on_subscribe(
        client: mqtt.Client,
        userdata: object,
        mid: int,
        reason_code_list: object,
        properties: object,
    ) -> None:
        subscribed.set()

    subscriber.on_message = on_message
    subscriber.on_subscribe = on_subscribe
    subscriber.connect("127.0.0.1", local_stack.mqtt_port, keepalive=20)
    subscriber.loop_start()
    subscriber.subscribe(topic, qos=1)
    assert subscribed.wait(timeout=10), "MQTT subscriber did not subscribe in time"

    monkeypatch.setenv("EDGE_AGENT_MQTT_USERNAME", local_stack.mqtt_username)
    monkeypatch.setenv("EDGE_AGENT_MQTT_PASSWORD", local_stack.mqtt_password)
    publisher = connect_mqtt_publisher(
        MqttSettings(
            enabled=True,
            version="5.0",
            broker=f"mqtt://127.0.0.1:{local_stack.mqtt_port}",
            topic_root="wm/v1",
            client_id_prefix="edge-agent-it",
            username_env="EDGE_AGENT_MQTT_USERNAME",
            password_env="EDGE_AGENT_MQTT_PASSWORD",
            qos=1,
            clean_start=True,
            session_expiry_seconds=0,
            telemetry_message_expiry_seconds=60,
            publish_metadata=True,
            retain_metadata=True,
            publish_connection_status=True,
            retain_connection_status=True,
            connect_timeout_seconds=10,
            retry_backoff_seconds=(1, 2, 5),
        ),
        agent_id=f"agent-{uuid4().hex[:8]}",
    )

    try:
        publisher.publish(
            MqttPublication(
                topic=topic,
                payload={
                    "message_type": "wm.telemetry.event.v1",
                    "event_id": f"smoke-{uuid4().hex}",
                    "value": 24.2,
                },
                qos=1,
                retain=False,
                message_expiry_seconds=60,
            )
        )
        assert received.wait(timeout=10), "MQTT subscriber did not receive edge publication"
        assert received_payloads[0]["message_type"] == "wm.telemetry.event.v1"
        assert received_payloads[0]["value"] == 24.2
    finally:
        publisher.close()
        subscriber.disconnect()
        subscriber.loop_stop()


def test_edge_agent_deliver_once_sends_sqlite_outbox_event_to_local_broker(
    local_stack,
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
    capsys: pytest.CaptureFixture[str],
) -> None:
    agent_id = f"agent-{uuid4().hex[:8]}"
    config_root = _write_demo_config(
        tmp_path,
        broker=f"mqtt://127.0.0.1:{local_stack.mqtt_port}",
    )
    topic = (
        "wm/v1/objects/demo-stand-01/"
        f"agents/{agent_id}/sources/demo_source/points/temperature/event"
    )
    received = threading.Event()
    subscribed = threading.Event()
    received_payloads: list[dict[str, object]] = []
    subscriber = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
    subscriber.username_pw_set(local_stack.mqtt_username, local_stack.mqtt_password)

    def on_message(
        client: mqtt.Client,
        userdata: object,
        message: mqtt.MQTTMessage,
    ) -> None:
        received_payloads.append(json.loads(message.payload.decode("utf-8")))
        received.set()

    def on_subscribe(
        client: mqtt.Client,
        userdata: object,
        mid: int,
        reason_code_list: object,
        properties: object,
    ) -> None:
        subscribed.set()

    subscriber.on_message = on_message
    subscriber.on_subscribe = on_subscribe
    subscriber.connect("127.0.0.1", local_stack.mqtt_port, keepalive=20)
    subscriber.loop_start()
    subscriber.subscribe(topic, qos=1)
    assert subscribed.wait(timeout=10), "MQTT subscriber did not subscribe in time"

    monkeypatch.setenv("EDGE_AGENT_MQTT_USERNAME", local_stack.mqtt_username)
    monkeypatch.setenv("EDGE_AGENT_MQTT_PASSWORD", local_stack.mqtt_password)

    try:
        enqueue_exit = main(
            [
                "enqueue-demo-event",
                "--config-root",
                str(config_root),
                "--agent-id",
                agent_id,
                "--source-id",
                "demo_source",
                "--point-ref",
                "temperature",
                "--value",
                "26.75",
            ]
        )
        assert enqueue_exit == 0
        capsys.readouterr()

        deliver_exit = main(
            [
                "deliver-once",
                "--config-root",
                str(config_root),
                "--agent-id",
                agent_id,
            ]
        )

        captured = capsys.readouterr()
        assert deliver_exit == 0
        assert "Delivery run: reserved=1 published=1 retry=0 dead_letter=0" in captured.out
        assert received.wait(timeout=10), "MQTT subscriber did not receive outbox event"
        assert received_payloads[0]["message_type"] == "wm.telemetry.event.v1"
        assert received_payloads[0]["value"] == 26.75
        assert received_payloads[0]["catalog_revision"]
    finally:
        subscriber.disconnect()
        subscriber.loop_stop()


def _write_demo_config(tmp_path: Path, *, broker: str) -> Path:
    config_root = tmp_path / "config"
    (config_root / "sources.d").mkdir(parents=True)
    (config_root / "points.d").mkdir(parents=True)
    (config_root / "agent.json").write_text(
        json.dumps(
            {
                "agent": {
                    "object_id": "demo-stand-01",
                    "name": "test-agent",
                    "id_file": str(tmp_path / "state" / "agent_id"),
                },
                "delivery": {
                    "transport": "mqtt",
                    "mqtt": {
                        "enabled": True,
                        "version": "5.0",
                        "broker": broker,
                        "topic_root": "wm/v1",
                        "client_id_prefix": "edge-agent-it",
                        "username_env": "EDGE_AGENT_MQTT_USERNAME",
                        "password_env": "EDGE_AGENT_MQTT_PASSWORD",
                        "qos": 1,
                        "clean_start": True,
                        "session_expiry_seconds": 0,
                        "telemetry_message_expiry_seconds": 60,
                        "publish_metadata": True,
                        "retain_metadata": True,
                        "publish_connection_status": True,
                        "retain_connection_status": True,
                        "connect_timeout_seconds": 10,
                        "retry_backoff_seconds": [1, 2, 5],
                    },
                },
                "storage": {
                    "sqlite_path": str(tmp_path / "state" / "outbox.db"),
                    "retention_days": 7,
                    "dead_letter_after_attempts": 20,
                },
                "observability": {
                    "log_level": "INFO",
                    "emit_health_events": True,
                    "metrics_bind": "0.0.0.0:9108",
                },
            }
        ),
        encoding="utf-8",
    )
    (config_root / "sources.d" / "demo.json").write_text(
        json.dumps(
            {
                "sources": [
                    {
                        "source_id": "demo_source",
                        "type": "demo",
                        "enabled": True,
                        "connection": {},
                        "acquisition_defaults": {
                            "listen": True,
                            "read_on_start": False,
                            "periodic_interval_seconds": None,
                        },
                        "publish_defaults": {
                            "enabled": True,
                            "change_threshold": None,
                        },
                    }
                ]
            }
        ),
        encoding="utf-8",
    )
    (config_root / "points.d" / "demo.json").write_text(
        json.dumps(
            {
                "source_id": "demo_source",
                "points": [
                    {
                        "point_ref": "temperature",
                        "name": "temperature",
                        "value_type": "number",
                        "value_model": "demo.number",
                        "signal_type": "sensor",
                        "unit": "C",
                    }
                ],
            }
        ),
        encoding="utf-8",
    )
    return config_root
