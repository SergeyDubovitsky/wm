from __future__ import annotations

import json
import sqlite3
from pathlib import Path

from edge_agent.cli import main


class FakePublisher:
    def __init__(self) -> None:
        self.publications: list[object] = []
        self.closed = False

    def publish(self, publication: object) -> None:
        self.publications.append(publication)

    def close(self) -> None:
        self.closed = True


def test_check_config_command_uses_example_config(capsys) -> None:
    config_root = Path(__file__).resolve().parents[1] / "config" / "examples"

    exit_code = main(["check-config", "--config-root", str(config_root)])

    captured = capsys.readouterr()
    assert exit_code == 0
    assert "Configuration OK:" in captured.out
    assert "object_id=demo-stand-01" in captured.out
    assert captured.err == ""


def test_show_config_json_outputs_summary(capsys) -> None:
    config_root = Path(__file__).resolve().parents[1] / "config" / "examples"

    exit_code = main(["show-config", "--config-root", str(config_root), "--format", "json"])

    captured = capsys.readouterr()
    payload = json.loads(captured.out)
    assert exit_code == 0
    assert payload["object_id"] == "demo-stand-01"
    assert payload["source_count"] == 1
    assert payload["point_count"] == 3


def test_agent_id_command_creates_and_reuses_id(tmp_path, capsys) -> None:
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
                        "broker": "mqtt://127.0.0.1:1883",
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

    first_exit = main(["agent-id", "--config-root", str(config_root)])
    first = capsys.readouterr().out.strip()
    second_exit = main(["agent-id", "--config-root", str(config_root)])
    second = capsys.readouterr().out.strip()

    assert first_exit == 0
    assert second_exit == 0
    assert first == second
    assert first


def test_show_catalog_outputs_retained_publications(capsys) -> None:
    config_root = Path(__file__).resolve().parents[1] / "config" / "examples"

    exit_code = main(
        [
            "show-catalog",
            "--config-root",
            str(config_root),
            "--agent-id",
            "agent-1",
        ]
    )

    captured = capsys.readouterr()
    payload = json.loads(captured.out)
    assert exit_code == 0
    assert payload[0]["topic"].endswith("/sources/knx_main/meta/catalog")
    assert payload[0]["qos"] == 1
    assert payload[0]["retain"] is True
    assert payload[0]["payload"]["message_type"] == "wm.source.meta.catalog.v1"
    assert payload[0]["payload"]["catalog_revision"]


def test_publish_catalog_uses_configured_mqtt_publisher(monkeypatch, capsys) -> None:
    config_root = Path(__file__).resolve().parents[1] / "config" / "examples"
    fake_publisher = FakePublisher()
    calls: list[dict[str, object]] = []

    def fake_connect_mqtt_publisher(settings, *, agent_id: str) -> FakePublisher:
        calls.append({"settings": settings, "agent_id": agent_id})
        return fake_publisher

    monkeypatch.setattr(
        "edge_agent.cli.connect_mqtt_publisher",
        fake_connect_mqtt_publisher,
    )

    exit_code = main(
        [
            "publish-catalog",
            "--config-root",
            str(config_root),
            "--agent-id",
            "agent-1",
        ]
    )

    captured = capsys.readouterr()
    assert exit_code == 0
    assert calls[0]["agent_id"] == "agent-1"
    assert len(fake_publisher.publications) == 1
    assert fake_publisher.closed is True
    assert "Published source catalogs: count=1 agent_id=agent-1" in captured.out


def test_enqueue_demo_event_appends_publishable_event_to_sqlite_outbox(
    tmp_path,
    capsys,
) -> None:
    config_root = _write_demo_config(tmp_path)

    exit_code = main(
        [
            "enqueue-demo-event",
            "--config-root",
            str(config_root),
            "--agent-id",
            "agent-1",
            "--source-id",
            "demo_source",
            "--point-ref",
            "temperature",
            "--value",
            "25.5",
        ]
    )

    captured = capsys.readouterr()
    assert exit_code == 0
    assert "Enqueued demo event:" in captured.out
    with sqlite3.connect(tmp_path / "state" / "outbox.db") as connection:
        row = connection.execute(
            "SELECT event_type, payload_json, status FROM outbox"
        ).fetchone()
    assert row[0] == "telemetry.sample"
    assert row[2] == "pending"
    payload = json.loads(row[1])
    assert payload["agent_id"] == "agent-1"
    assert payload["source_id"] == "demo_source"
    assert payload["point_ref"] == "temperature"
    assert payload["value"] == 25.5


def test_deliver_once_publishes_pending_outbox_event_and_marks_sent(
    tmp_path,
    monkeypatch,
    capsys,
) -> None:
    config_root = _write_demo_config(tmp_path)
    fake_publisher = FakePublisher()

    def fake_connect_mqtt_publisher(settings, *, agent_id: str) -> FakePublisher:
        assert agent_id == "agent-1"
        return fake_publisher

    monkeypatch.setattr(
        "edge_agent.cli.connect_mqtt_publisher",
        fake_connect_mqtt_publisher,
    )
    assert (
        main(
            [
                "enqueue-demo-event",
                "--config-root",
                str(config_root),
                "--agent-id",
                "agent-1",
                "--source-id",
                "demo_source",
                "--point-ref",
                "temperature",
            ]
        )
        == 0
    )
    capsys.readouterr()

    exit_code = main(
        [
            "deliver-once",
            "--config-root",
            str(config_root),
            "--agent-id",
            "agent-1",
            "--limit",
            "10",
            "--lease-seconds",
            "30",
        ]
    )

    captured = capsys.readouterr()
    assert exit_code == 0
    assert "Delivery run: reserved=1 published=1 retry=0 dead_letter=0" in captured.out
    assert len(fake_publisher.publications) == 1
    publication = fake_publisher.publications[0]
    assert publication.topic == (
        "wm/v1/objects/demo-stand-01/agents/agent-1"
        "/sources/demo_source/points/temperature/event"
    )
    assert publication.message_expiry_seconds == 86400
    assert fake_publisher.closed is True
    with sqlite3.connect(tmp_path / "state" / "outbox.db") as connection:
        status = connection.execute("SELECT status FROM outbox").fetchone()[0]
    assert status == "sent"


def test_check_config_command_returns_error_for_invalid_config(tmp_path, capsys) -> None:
    config_root = tmp_path / "config"
    config_root.mkdir(parents=True)
    (config_root / "agent.json").write_text(
        json.dumps({"agent": {"object_id": 123}}),
        encoding="utf-8",
    )

    exit_code = main(["check-config", "--config-root", str(config_root)])

    captured = capsys.readouterr()
    assert exit_code == 1
    assert "ERROR:" in captured.err


def _write_demo_config(tmp_path: Path) -> Path:
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
                        "broker": "mqtt://127.0.0.1:1883",
                        "topic_root": "wm/v1",
                        "client_id_prefix": "edge-agent",
                        "username_env": None,
                        "password_env": None,
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
                        "point_ref": "command",
                        "name": "command",
                        "value_type": "boolean",
                        "value_model": "demo.boolean",
                        "signal_type": "command",
                        "publish": {"enabled": False},
                    },
                    {
                        "point_ref": "temperature",
                        "name": "temperature",
                        "value_type": "number",
                        "value_model": "demo.number",
                        "signal_type": "sensor",
                        "unit": "C",
                    },
                ],
            }
        ),
        encoding="utf-8",
    )
    return config_root
