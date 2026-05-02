from __future__ import annotations

from datetime import UTC, datetime

from edge_agent.application.catalog import build_source_catalog_publications
from edge_agent.application.configuration import build_runtime_config


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
                        "tags": {"room": "demo"},
                    },
                    {
                        "point_ref": "2/0/0",
                        "name": "temperature",
                        "value_type": "number",
                        "value_model": "knx.dpt.9.001",
                        "signal_type": "sensor",
                        "unit": "C",
                    },
                ],
            }
        ],
    )


def test_build_source_catalog_publications() -> None:
    publications = build_source_catalog_publications(
        _runtime_config(),
        agent_id="agent-1",
        ts=datetime(2026, 3, 28, 10, 0, tzinfo=UTC),
    )

    assert len(publications) == 1
    publication = publications[0]
    assert publication.topic == (
        "wm/v1/objects/demo-stand-01/agents/agent-1/sources/knx_main/meta/catalog"
    )
    assert publication.qos == 1
    assert publication.retain is True
    assert publication.payload["message_type"] == "wm.source.meta.catalog.v1"
    assert publication.payload["catalog_revision"]
    assert publication.payload["ts"] == "2026-03-28T10:00:00Z"
    assert publication.payload["points"] == [
        {
            "point_key": "0%2F0%2F7",
            "point_ref": "0/0/7",
            "name": "switch_feedback",
            "description": None,
            "signal_type": "feedback",
            "value_type": "boolean",
            "value_model": "knx.dpt.1.001",
            "unit": None,
            "tags": {"room": "demo"},
        },
        {
            "point_key": "2%2F0%2F0",
            "point_ref": "2/0/0",
            "name": "temperature",
            "description": None,
            "signal_type": "sensor",
            "value_type": "number",
            "value_model": "knx.dpt.9.001",
            "unit": "C",
            "tags": {},
        },
    ]


def test_catalog_publication_respects_publish_metadata_flag() -> None:
    runtime = _runtime_config().model_copy(
        update={
            "delivery": _runtime_config().delivery.model_copy(
                update={
                    "mqtt": _runtime_config().delivery.mqtt.model_copy(
                        update={"publish_metadata": False}
                    )
                }
            )
        }
    )

    publications = build_source_catalog_publications(runtime, agent_id="agent-1")

    assert publications == []
