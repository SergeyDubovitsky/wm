from __future__ import annotations

from datetime import UTC, datetime

from edge_agent.application.configuration import build_runtime_config
from edge_agent.application.processing import ObservationProcessor
from edge_agent.domain.events import Observation


def _runtime_config():
    return build_runtime_config(
        agent_data={
            "agent": {
                "object_id": "demo-stand-01",
                "name": "main-panel",
                "id_file": "/tmp/edge-agent/agent_id",
            },
            "delivery": {
                "transport": "mqtt",
                "mqtt": {
                    "enabled": True,
                    "version": "5.0",
                    "broker": "mqtts://mqtt.example:8883",
                    "topic_root": "wm/v1",
                    "client_id_prefix": "edge-agent",
                    "username_env": "EDGE_AGENT_MQTT_USERNAME",
                    "password_env": "EDGE_AGENT_MQTT_PASSWORD",
                    "qos": 1,
                    "clean_start": True,
                    "session_expiry_seconds": 0,
                    "telemetry_message_expiry_seconds": 86400,
                    "publish_metadata": True,
                    "retain_metadata": True,
                    "publish_connection_status": True,
                    "retain_connection_status": True,
                    "connect_timeout_seconds": 5,
                    "retry_backoff_seconds": [5, 15, 60],
                },
            },
            "storage": {
                "sqlite_path": "/tmp/edge-agent/outbox.db",
                "retention_days": 7,
                "dead_letter_after_attempts": 20,
            },
            "observability": {
                "log_level": "INFO",
                "emit_health_events": True,
                "metrics_bind": "0.0.0.0:9108",
            },
        },
        source_documents=[
            {
                "sources": [
                    {
                        "source_id": "knx_main",
                        "type": "knx",
                        "enabled": True,
                        "connection": {"gateway_ip": "127.0.0.1", "gateway_port": 3671},
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
        ],
        point_documents=[
            {
                "source_id": "knx_main",
                "points": [
                    {
                        "point_ref": "0/0/7",
                        "name": "switch_feedback",
                        "value_type": "boolean",
                        "value_model": "knx.dpt.1.001",
                        "signal_type": "feedback",
                    },
                    {
                        "point_ref": "2/0/0",
                        "name": "temperature",
                        "value_type": "number",
                        "value_model": "knx.dpt.9.001",
                        "signal_type": "sensor",
                        "unit": "C",
                        "publish": {"change_threshold": 1.0},
                    },
                    {
                        "point_ref": "0/0/1",
                        "name": "switch_command",
                        "value_type": "boolean",
                        "value_model": "knx.dpt.1.001",
                        "signal_type": "command",
                    },
                ],
            }
        ],
    )


def test_processing_emits_boolean_event_and_suppresses_duplicate() -> None:
    runtime = _runtime_config()
    processor = ObservationProcessor(runtime, agent_id="agent-1")
    ts = datetime(2026, 3, 28, 10, 0, tzinfo=UTC)

    first = processor.process(
        Observation(
            source_id="knx_main",
            point_ref="0/0/7",
            observation_mode="listen",
            value=True,
            value_raw="01",
            observed_at=ts,
        )
    )
    second = processor.process(
        Observation(
            source_id="knx_main",
            point_ref="0/0/7",
            observation_mode="listen",
            value=True,
            value_raw="01",
            observed_at=ts,
        )
    )

    assert first.event is not None
    assert first.event.event_type == "telemetry.changed"
    assert first.event.sequence == 1
    assert (
        first.event.topic("wm/v1")
        == "wm/v1/objects/demo-stand-01/agents/agent-1/sources/knx_main/points/0%2F0%2F7/event"
    )
    assert second.event is None
    assert second.suppressed_reason == "not_significant"


def test_processing_uses_threshold_for_numeric_points() -> None:
    runtime = _runtime_config()
    processor = ObservationProcessor(runtime, agent_id="agent-1")
    ts = datetime(2026, 3, 28, 10, 0, tzinfo=UTC)

    first = processor.process(
        Observation(
            source_id="knx_main",
            point_ref="2/0/0",
            observation_mode="read_on_start",
            value=23.0,
            observed_at=ts,
        )
    )
    second = processor.process(
        Observation(
            source_id="knx_main",
            point_ref="2/0/0",
            observation_mode="listen",
            value=23.4,
            observed_at=ts,
        )
    )
    third = processor.process(
        Observation(
            source_id="knx_main",
            point_ref="2/0/0",
            observation_mode="listen",
            value=24.0,
            observed_at=ts,
        )
    )

    assert first.event is not None
    assert first.event.event_type == "telemetry.sample"
    assert second.event is None
    assert second.suppressed_reason == "not_significant"
    assert third.event is not None
    assert third.event.sequence == 2


def test_processing_suppresses_command_point_by_default() -> None:
    runtime = _runtime_config()
    processor = ObservationProcessor(runtime, agent_id="agent-1")

    result = processor.process(
        Observation(
            source_id="knx_main",
            point_ref="0/0/1",
            observation_mode="listen",
            value=True,
        )
    )

    assert result.event is None
    assert result.suppressed_reason == "publish_disabled"

