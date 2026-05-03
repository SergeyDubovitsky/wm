from __future__ import annotations

import pytest

from config_registry.domain.entities import ConfigOutboxRecord
from config_registry.infrastructure.kafka.config_delivery import (
    ConfluentKafkaConfigRecordPublisher,
)


@pytest.mark.asyncio
async def test_config_registry_kafka_publisher_writes_config_delivery_record(
    local_platform_stack,
) -> None:
    record = ConfigOutboxRecord.new(
        tenant_id="tenant-a",
        idempotency_key="tenant-a|asset-a|agent-a|rev-001|runtime",
        asset_id="asset-a",
        agent_id="agent-a",
        config_revision="rev-001",
        config_scope="runtime",
        source_id=None,
        source_config_revision=None,
        kafka_key="tenant-a|asset-a|agent-a|runtime",
        payload_json={
            "message_type": "wm.platform.edge.config.delivery.v1",
            "tenant_id": "tenant-a",
            "asset_id": "asset-a",
            "agent_id": "agent-a",
            "config_revision": "rev-001",
            "config_scope": "runtime",
            "source_id": None,
            "source_config_revision": None,
            "target_mqtt_topic": "wm/v1/agents/agent-a/config/runtime",
            "mqtt_retain": True,
            "mqtt_qos": 1,
            "operation": "upsert",
            "payload_message_type": "wm.edge.runtime-config.v1",
            "payload": {
                "message_type": "wm.edge.runtime-config.v1",
                "tenant_id": "tenant-a",
                "asset_id": "asset-a",
                "agent_id": "agent-a",
                "config_revision": "rev-001",
                "issued_at": "2026-05-03T10:00:00Z",
                "sources": [
                    {
                        "source_id": "knx-main",
                        "source_config_revision": "rev-001-knx-main",
                        "enabled": True,
                    }
                ],
            },
            "idempotency_key": "tenant-a|asset-a|agent-a|rev-001|runtime",
            "issued_at": "2026-05-03T10:00:00Z",
        },
    )
    publisher = ConfluentKafkaConfigRecordPublisher.from_bootstrap_servers(
        f"127.0.0.1:{local_platform_stack.kafka_port}",
        client_id="config-registry-it",
    )

    await publisher.publish(record)

    key, payload = local_platform_stack.consume_kafka_json(
        "wm.platform.edge.configs.v1",
        timeout=30,
    )

    assert key == "tenant-a|asset-a|agent-a|runtime"
    assert payload["message_type"] == "wm.platform.edge.config.delivery.v1"
    assert payload["tenant_id"] == "tenant-a"
    assert payload["config_scope"] == "runtime"
    assert payload["target_mqtt_topic"] == "wm/v1/agents/agent-a/config/runtime"
    assert payload["payload"]["message_type"] == "wm.edge.runtime-config.v1"
