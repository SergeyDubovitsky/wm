from __future__ import annotations

import json
from pathlib import Path

import pytest

from edge_agent.application.configuration import (
    build_runtime_config,
    load_runtime_config,
)
from edge_agent.domain.config import ConfigurationError


def _agent_data() -> dict[str, object]:
    return {
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
            "sqlite_path": "/tmp/edge-agent/outbox.db",
            "retention_days": 7,
            "dead_letter_after_attempts": 20,
        },
        "observability": {
            "log_level": "INFO",
            "emit_health_events": True,
            "metrics_bind": "0.0.0.0:9108",
        },
    }


def _source_documents() -> list[dict[str, object]]:
    return [
        {
            "sources": [
                {
                    "source_id": "knx_main",
                    "type": "knx",
                    "enabled": True,
                    "connection": {
                        "gateway_ip": "192.0.2.177",
                        "gateway_port": 3671,
                    },
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
    ]


def _point_documents() -> list[dict[str, object]]:
    return [
        {
            "source_id": "knx_main",
            "points": [
                {
                    "point_ref": "0/0/1",
                    "name": "switch_command",
                    "value_type": "boolean",
                    "value_model": "knx.dpt.1.001",
                    "signal_type": "command",
                    "tags": {"room": "demo"},
                },
                {
                    "point_ref": "2/0/0",
                    "name": "temperature",
                    "description": "Room temperature",
                    "value_type": "number",
                    "value_model": "knx.dpt.9.001",
                    "signal_type": "sensor",
                    "unit": "C",
                    "acquisition": {"read_on_start": True},
                    "publish": {"change_threshold": 1.0},
                    "tags": {"room": "demo", "equipment": "temp_1"},
                },
            ],
        }
    ]


def test_build_runtime_config_merges_defaults_and_command_publish_rule() -> None:
    runtime = build_runtime_config(
        agent_data=_agent_data(),
        source_documents=_source_documents(),
        point_documents=_point_documents(),
    )

    command_point = runtime.point("knx_main", "0/0/1")
    assert command_point.publish.enabled is False
    assert command_point.acquisition.listen is True
    assert command_point.acquisition.read_on_start is False

    temperature = runtime.point("knx_main", "2/0/0")
    assert temperature.acquisition.listen is True
    assert temperature.acquisition.read_on_start is True
    assert temperature.publish.change_threshold == 1.0
    assert temperature.tags == {"room": "demo", "equipment": "temp_1"}


def test_build_runtime_config_rejects_unknown_source_reference() -> None:
    point_documents = [{"source_id": "missing", "points": []}]

    with pytest.raises(ConfigurationError, match="unknown source_id"):
        build_runtime_config(
            agent_data=_agent_data(),
            source_documents=_source_documents(),
            point_documents=point_documents,
        )


def test_build_runtime_config_rejects_threshold_for_boolean_point() -> None:
    point_documents = [
        {
            "source_id": "knx_main",
            "points": [
                {
                    "point_ref": "0/0/7",
                    "name": "switch_feedback",
                    "value_type": "boolean",
                    "value_model": "knx.dpt.1.001",
                    "signal_type": "feedback",
                    "publish": {"change_threshold": 1.0},
                }
            ],
        }
    ]

    with pytest.raises(ConfigurationError, match="change_threshold"):
        build_runtime_config(
            agent_data=_agent_data(),
            source_documents=_source_documents(),
            point_documents=point_documents,
        )


def test_build_runtime_config_rejects_non_list_sources_via_configuration_error() -> None:
    source_documents = [{"sources": {}}]

    with pytest.raises(ConfigurationError, match="sources"):
        build_runtime_config(
            agent_data=_agent_data(),
            source_documents=source_documents,
            point_documents=[],
        )


def test_build_runtime_config_rejects_non_string_object_id() -> None:
    agent_data = _agent_data()
    agent_data["agent"]["object_id"] = 123

    with pytest.raises(ConfigurationError, match="object_id"):
        build_runtime_config(
            agent_data=agent_data,
            source_documents=_source_documents(),
            point_documents=[],
        )


def test_load_runtime_config_from_json_files(tmp_path) -> None:
    config_root = tmp_path / "config"
    (config_root / "sources.d").mkdir(parents=True)
    (config_root / "points.d").mkdir(parents=True)
    (config_root / "agent.json").write_text(
        json.dumps(_agent_data()),
        encoding="utf-8",
    )
    (config_root / "sources.d" / "knx.json").write_text(
        json.dumps(_source_documents()[0]),
        encoding="utf-8",
    )
    (config_root / "points.d" / "knx.json").write_text(
        json.dumps(_point_documents()[0]),
        encoding="utf-8",
    )

    runtime = load_runtime_config(config_root)

    assert runtime.agent.object_id == "demo-stand-01"
    assert runtime.delivery.mqtt is not None
    assert runtime.point("knx_main", "2/0/0").name == "temperature"


def test_load_runtime_config_from_example_yaml_files() -> None:
    runtime = load_runtime_config(Path(__file__).resolve().parents[1] / "config" / "examples")

    assert runtime.agent.object_id == "demo-stand-01"
    assert sorted(runtime.sources) == ["knx_main"]
    assert runtime.point("knx_main", "0/0/7").name == "switch_feedback"


def test_load_runtime_config_expands_env_placeholders(
    tmp_path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    config_root = tmp_path / "config"
    (config_root / "sources.d").mkdir(parents=True)
    (config_root / "points.d").mkdir(parents=True)
    monkeypatch.setenv("MQTT_BROKER", "mqtt://localhost:1883")
    monkeypatch.setenv("KNX_LOCAL_GATEWAY_IP", "192.0.2.177")
    monkeypatch.setenv("KNX_LOCAL_GATEWAY_PORT", "3671")
    (config_root / "agent.yaml").write_text(
        """
agent:
  object_id: "demo-stand-01"
  name: "main-panel"
  id_file: "/tmp/edge-agent/agent_id"
delivery:
  transport: "mqtt"
  mqtt:
    enabled: true
    version: "5.0"
    broker: "${MQTT_BROKER}"
    topic_root: "wm/v1"
    client_id_prefix: "edge-agent"
    username_env: "EDGE_AGENT_MQTT_USERNAME"
    password_env: "EDGE_AGENT_MQTT_PASSWORD"
    qos: 1
    clean_start: true
    session_expiry_seconds: 0
    telemetry_message_expiry_seconds: 86400
    publish_metadata: true
    retain_metadata: true
    publish_connection_status: true
    retain_connection_status: true
    connect_timeout_seconds: 5
    retry_backoff_seconds: [5, 15, 60]
storage:
  sqlite_path: "/tmp/edge-agent/outbox.db"
  retention_days: 7
  dead_letter_after_attempts: 20
observability:
  log_level: "INFO"
  emit_health_events: true
  metrics_bind: "127.0.0.1:9108"
""".strip(),
        encoding="utf-8",
    )
    (config_root / "sources.d" / "knx.yaml").write_text(
        """
sources:
  - source_id: "knx_main"
    type: "knx"
    enabled: true
    connection:
      gateway_ip: "${KNX_LOCAL_GATEWAY_IP}"
      gateway_port: "${KNX_LOCAL_GATEWAY_PORT}"
    acquisition_defaults:
      listen: true
      read_on_start: false
      periodic_interval_seconds: null
    publish_defaults:
      enabled: true
      change_threshold: null
""".strip(),
        encoding="utf-8",
    )
    (config_root / "points.d" / "knx.yaml").write_text(
        """
source_id: "knx_main"
points:
  - point_ref: "0/0/7"
    name: "switch_feedback"
    value_type: "boolean"
    value_model: "knx.dpt.1.001"
    signal_type: "feedback"
""".strip(),
        encoding="utf-8",
    )

    runtime = load_runtime_config(config_root)

    assert runtime.delivery.mqtt is not None
    assert runtime.delivery.mqtt.broker == "mqtt://localhost:1883"
    assert runtime.sources["knx_main"].connection == {
        "gateway_ip": "192.0.2.177",
        "gateway_port": 3671,
    }
