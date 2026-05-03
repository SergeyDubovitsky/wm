from __future__ import annotations

import os
import subprocess
from datetime import UTC, datetime
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

from config_registry.application.use_cases.render_config import (
    RenderAgentConfig,
    RenderAgentConfigCommand,
    StoreRenderedAgentConfig,
)
from config_registry.domain.entities import ConfigOutboxRecord
from config_registry.infrastructure.json_schema_validator import (
    JsonSchemaConfigPayloadValidator,
)
from config_registry.infrastructure.kafka.config_delivery import (
    ConfluentKafkaConfigRecordPublisher,
)
from config_registry.infrastructure.postgres.unit_of_work import (
    PostgresUnitOfWorkFactory,
)
from config_registry.main import create_app
from config_registry.settings import ConfigRegistrySettings

REPO_ROOT = Path(__file__).resolve().parents[2]
CONTRACT_DIR = REPO_ROOT / "docs" / "contracts" / "edge-agent" / "schemas"


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


@pytest.mark.asyncio
async def test_config_registry_cli_publishes_outbox_batch_to_kafka(
    local_platform_stack,
    local_config_registry_postgres_stack,
) -> None:
    settings = ConfigRegistrySettings(
        database_url=local_config_registry_postgres_stack.database_url
    )
    with TestClient(create_app(settings=settings)) as client:
        _create_renderable_agent_graph(client)

    unit_of_work_factory = PostgresUnitOfWorkFactory.from_url(settings.database_url)
    validator = JsonSchemaConfigPayloadValidator.from_contract_dir(CONTRACT_DIR)
    try:
        rendered = await RenderAgentConfig(unit_of_work_factory(), validator).execute(
            RenderAgentConfigCommand(
                tenant_id="tenant-cli",
                asset_id="asset-a",
                agent_id="agent-a",
                config_revision="rev-cli-001",
                issued_at=datetime(2026, 5, 3, 10, 0, tzinfo=UTC),
                source_config_revisions={"knx-main": "rev-cli-001-knx-main"},
            )
        )
        await StoreRenderedAgentConfig(unit_of_work_factory(), validator).execute(
            rendered
        )
    finally:
        await unit_of_work_factory.dispose()

    env = os.environ.copy()
    env.update(
        {
            "CONFIG_REGISTRY_DATABASE_URL": (
                local_config_registry_postgres_stack.database_url
            ),
            "KAFKA_BOOTSTRAP_SERVERS": f"127.0.0.1:{local_platform_stack.kafka_port}",
            "CONFIG_REGISTRY_KAFKA_CLIENT_ID": "config-registry-cli-it",
        }
    )
    result = subprocess.run(
        [
            "uv",
            "run",
            "--frozen",
            "--package",
            "config-registry",
            "config-registry",
            "publish-config-outbox-once",
            "--limit",
            "10",
        ],
        cwd=REPO_ROOT,
        env=env,
        capture_output=True,
        text=True,
        check=False,
        timeout=60,
    )

    assert result.returncode == 0, result.stderr
    assert "published=2" in result.stdout
    runtime_key, runtime_payload = local_platform_stack.consume_kafka_json(
        "wm.platform.edge.configs.v1",
        timeout=30,
    )

    assert runtime_key == "tenant-cli|asset-a|agent-a|runtime"
    assert runtime_payload["config_scope"] == "runtime"


def _create_renderable_agent_graph(client: TestClient) -> None:
    client.post(
        "/tenants",
        json={"tenant_id": "tenant-cli", "name": "Tenant CLI"},
    )
    client.post(
        "/tenants/tenant-cli/assets",
        json={"asset_id": "asset-a", "name": "Asset A"},
    )
    client.post(
        "/tenants/tenant-cli/assets/asset-a/agents",
        json={"agent_id": "agent-a"},
    )
    client.post(
        "/tenants/tenant-cli/assets/asset-a/agents/agent-a/sources",
        json={
            "source_id": "knx-main",
            "source_type": "knx",
            "connection_json": {"gateway_ip": "127.0.0.1"},
            "acquisition_defaults_json": {
                "listen": True,
                "read_on_start": False,
                "periodic_interval_seconds": None,
            },
            "publish_defaults_json": {
                "enabled": True,
                "change_threshold": None,
            },
        },
    )
    client.post(
        "/tenants/tenant-cli/assets/asset-a/agents/agent-a"
        "/sources/knx-main/points",
        json={
            "point_id": "tenant-cli|asset-a|knx-main|temperature",
            "point_key": "temperature",
            "point_ref": "2/0/0",
            "name": "Temperature",
            "value_type": "number",
            "value_model": "knx.dpt.9.001",
            "signal_type": "sensor",
            "acquisition_json": {"read_on_start": True},
            "publish_json": {"change_threshold": 1.0},
            "tags_json": {"room": "demo"},
        },
    )
