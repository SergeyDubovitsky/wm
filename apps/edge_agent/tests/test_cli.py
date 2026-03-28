from __future__ import annotations

import json
from pathlib import Path

from edge_agent.cli import main


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
