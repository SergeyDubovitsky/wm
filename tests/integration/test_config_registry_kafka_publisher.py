from __future__ import annotations

import json
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
DEMO_BUNDLE_PATH = (
    REPO_ROOT / "environments" / "demo-stand" / "edge_agent" / "config.bundle.yaml"
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


@pytest.mark.asyncio
async def test_config_outbox_worker_container_publishes_records_to_kafka_and_mqtt(
    local_config_delivery_stack,
) -> None:
    settings = ConfigRegistrySettings(
        database_url=local_config_delivery_stack.database_url
    )
    with TestClient(create_app(settings=settings)) as client:
        _create_renderable_agent_graph(client, tenant_id="tenant-worker")

    unit_of_work_factory = PostgresUnitOfWorkFactory.from_url(settings.database_url)
    validator = JsonSchemaConfigPayloadValidator.from_contract_dir(CONTRACT_DIR)
    try:
        rendered = await RenderAgentConfig(unit_of_work_factory(), validator).execute(
            RenderAgentConfigCommand(
                tenant_id="tenant-worker",
                asset_id="asset-a",
                agent_id="agent-a",
                config_revision="rev-worker-001",
                issued_at=datetime(2026, 5, 3, 10, 0, tzinfo=UTC),
                source_config_revisions={"knx-main": "rev-worker-001-knx-main"},
            )
        )
        await StoreRenderedAgentConfig(unit_of_work_factory(), validator).execute(
            rendered
        )
    finally:
        await unit_of_work_factory.dispose()

    runtime_key, runtime_payload = local_config_delivery_stack.consume_kafka_json(
        "wm.platform.edge.configs.v1",
        timeout=60,
    )
    runtime_message = local_config_delivery_stack.wait_for_mqtt_json(
        "wm/v1/agents/agent-a/config/runtime",
        timeout=60,
    )
    source_snapshot_key, source_snapshot = (
        local_config_delivery_stack.consume_kafka_json(
            "wm.platform.source.configs.v1",
            timeout=60,
        )
    )

    assert runtime_key == "tenant-worker|asset-a|agent-a|runtime"
    assert runtime_payload["message_type"] == "wm.platform.edge.config.delivery.v1"
    assert runtime_payload["config_scope"] == "runtime"
    assert runtime_payload["payload"]["message_type"] == "wm.edge.runtime-config.v1"
    assert runtime_message.payload["message_type"] == "wm.edge.runtime-config.v1"
    assert runtime_message.payload["tenant_id"] == "tenant-worker"
    assert runtime_message.payload["config_revision"] == "rev-worker-001"
    assert source_snapshot_key == "tenant-worker|asset-a|agent-a|knx-main"
    assert source_snapshot["message_type"] == "wm.platform.source.config.v1"
    assert source_snapshot["source_config_revision"] == "rev-worker-001-knx-main"


def test_config_registry_api_container_uses_local_postgres(
    local_config_delivery_stack,
) -> None:
    health = local_config_delivery_stack.config_registry_json("GET", "/health")
    created = local_config_delivery_stack.config_registry_json(
        "POST",
        "/tenants",
        {"tenant_id": "tenant-api-container", "name": "Tenant API Container"},
    )
    tenants = local_config_delivery_stack.config_registry_json("GET", "/tenants")

    assert health == {"status": "ok"}
    assert created["tenant_id"] == "tenant-api-container"
    assert any(
        tenant["tenant_id"] == "tenant-api-container"
        for tenant in tenants
        if isinstance(tenant, dict)
    )


def test_redpanda_connect_projects_config_delivery_records_to_retained_mqtt(
    local_platform_stack,
) -> None:
    runtime_record = {
        "message_type": "wm.platform.edge.config.delivery.v1",
        "tenant_id": "tenant-projection",
        "asset_id": "asset-a",
        "agent_id": "agent-a",
        "config_revision": "rev-projection-001",
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
            "tenant_id": "tenant-projection",
            "asset_id": "asset-a",
            "agent_id": "agent-a",
            "config_revision": "rev-projection-001",
            "issued_at": "2026-05-03T10:00:00Z",
            "sources": [
                {
                    "source_id": "knx-main",
                    "source_config_revision": "rev-projection-001-knx-main",
                    "enabled": True,
                }
            ],
        },
        "idempotency_key": "tenant-projection|asset-a|agent-a|rev-projection-001|runtime",
        "issued_at": "2026-05-03T10:00:00Z",
    }
    source_record = {
        "message_type": "wm.platform.edge.config.delivery.v1",
        "tenant_id": "tenant-projection",
        "asset_id": "asset-a",
        "agent_id": "agent-a",
        "config_revision": "rev-projection-001",
        "config_scope": "source:knx-main",
        "source_id": "knx-main",
        "source_config_revision": "rev-projection-001-knx-main",
        "target_mqtt_topic": "wm/v1/agents/agent-a/sources/knx-main/config",
        "mqtt_retain": True,
        "mqtt_qos": 1,
        "operation": "upsert",
        "payload_message_type": "wm.edge.source-config.v1",
        "payload": {
            "message_type": "wm.edge.source-config.v1",
            "tenant_id": "tenant-projection",
            "asset_id": "asset-a",
            "agent_id": "agent-a",
            "source_id": "knx-main",
            "source_type": "knx",
            "config_revision": "rev-projection-001",
            "source_config_revision": "rev-projection-001-knx-main",
            "enabled": True,
            "connection": {"gateway_ip": "127.0.0.1"},
            "acquisition_defaults": {
                "listen": True,
                "read_on_start": False,
                "periodic_interval_seconds": None,
            },
            "publish_defaults": {
                "enabled": True,
                "change_threshold": None,
            },
            "points": [
                {
                    "point_key": "temperature",
                    "point_ref": "2/0/0",
                    "name": "Temperature",
                    "value_type": "number",
                    "value_model": "knx.dpt.9.001",
                    "signal_type": "sensor",
                    "acquisition": {
                        "listen": True,
                        "read_on_start": True,
                        "periodic_interval_seconds": None,
                    },
                    "publish": {
                        "enabled": True,
                        "change_threshold": 1.0,
                    },
                    "tags": {"room": "demo"},
                }
            ],
        },
        "idempotency_key": "tenant-projection|asset-a|agent-a|rev-projection-001|source:knx-main",
        "issued_at": "2026-05-03T10:00:00Z",
    }

    local_platform_stack.produce_kafka_text(
        "wm.platform.edge.configs.v1",
        json.dumps(runtime_record),
        key="tenant-projection|asset-a|agent-a|runtime",
    )
    local_platform_stack.produce_kafka_text(
        "wm.platform.edge.configs.v1",
        json.dumps(source_record),
        key="tenant-projection|asset-a|agent-a|source:knx-main",
    )

    runtime_message = local_platform_stack.wait_for_mqtt_json(
        "wm/v1/agents/agent-a/config/runtime",
        timeout=45,
    )
    source_message = local_platform_stack.wait_for_mqtt_json(
        "wm/v1/agents/agent-a/sources/knx-main/config",
        timeout=45,
    )

    assert runtime_message.retained is True
    assert runtime_message.payload["message_type"] == "wm.edge.runtime-config.v1"
    assert runtime_message.payload["tenant_id"] == "tenant-projection"
    assert runtime_message.payload["config_revision"] == "rev-projection-001"
    assert source_message.retained is True
    assert source_message.payload["message_type"] == "wm.edge.source-config.v1"
    assert source_message.payload["source_id"] == "knx-main"
    assert (
        source_message.payload["source_config_revision"]
        == "rev-projection-001-knx-main"
    )

    source_snapshot_key, source_snapshot = local_platform_stack.consume_kafka_json(
        "wm.platform.source.configs.v1",
        timeout=45,
    )

    assert source_snapshot_key == "tenant-projection|asset-a|agent-a|knx-main"
    assert source_snapshot["message_type"] == "wm.platform.source.config.v1"
    assert source_snapshot["tenant_id"] == "tenant-projection"
    assert source_snapshot["source_config_revision"] == "rev-projection-001-knx-main"
    assert source_snapshot["points"][0]["point_id"] == (
        "tenant-projection|asset-a|knx-main|temperature"
    )


def test_publish_edge_demo_cli_seeds_config_through_kafka_by_default(
    local_platform_stack,
) -> None:
    env = os.environ.copy()
    env.update(
        {
            "MQTT_BROKER": f"mqtt://127.0.0.1:{local_platform_stack.mqtt_port}",
            "MQTT_USERNAME": local_platform_stack.mqtt_username,
            "MQTT_PASSWORD": local_platform_stack.mqtt_password,
            "KAFKA_BOOTSTRAP_SERVERS": f"127.0.0.1:{local_platform_stack.kafka_port}",
            "KNX_LOCAL_GATEWAY_IP": "127.0.0.1",
            "KNX_LOCAL_GATEWAY_PORT": "3671",
            "KNX_LOCAL_ROUTE_BACK": "false",
        }
    )

    result = subprocess.run(
        [
            "uv",
            "run",
            "--frozen",
            "--package",
            "wm-demo-stack",
            "publish-edge-demo",
            "--bundle-config",
            str(DEMO_BUNDLE_PATH),
            "--count",
            "1",
            "--interval-seconds",
            "0",
            "--retained-refresh-seconds",
            "0",
            "--no-status",
        ],
        cwd=REPO_ROOT,
        env=env,
        capture_output=True,
        text=True,
        check=False,
        timeout=90,
    )

    assert result.returncode == 0, result.stderr
    assert "PUBLISHED_CONFIG_DELIVERY records=2" in result.stdout
    assert "RETAINED_CONFIG_READY topics=2" in result.stdout
    assert "PUBLISHED_KAFKA topic=wm.platform.edge.configs.v1" in result.stdout
    runtime_message = local_platform_stack.wait_for_mqtt_json(
        "wm/v1/agents/demo-stand-local/config/runtime",
        timeout=45,
    )
    source_message = local_platform_stack.wait_for_mqtt_json(
        "wm/v1/agents/demo-stand-local/sources/knx_main/config",
        timeout=45,
    )
    if not runtime_message.retained:
        runtime_message = local_platform_stack.wait_for_mqtt_json(
            "wm/v1/agents/demo-stand-local/config/runtime",
            timeout=10,
        )
    if not source_message.retained:
        source_message = local_platform_stack.wait_for_mqtt_json(
            "wm/v1/agents/demo-stand-local/sources/knx_main/config",
            timeout=10,
        )

    assert runtime_message.retained is True
    assert runtime_message.payload["message_type"] == "wm.edge.runtime-config.v1"
    assert runtime_message.payload["config_revision"] == "rev-demo-stand-001"
    assert source_message.retained is True
    assert source_message.payload["source_config_revision"] == (
        "rev-demo-stand-knx-main-001"
    )


def _create_renderable_agent_graph(
    client: TestClient,
    *,
    tenant_id: str = "tenant-cli",
) -> None:
    client.post(
        "/tenants",
        json={"tenant_id": tenant_id, "name": "Tenant CLI"},
    )
    client.post(
        f"/tenants/{tenant_id}/assets",
        json={"asset_id": "asset-a", "name": "Asset A"},
    )
    client.post(
        f"/tenants/{tenant_id}/assets/asset-a/agents",
        json={"agent_id": "agent-a"},
    )
    client.post(
        f"/tenants/{tenant_id}/assets/asset-a/agents/agent-a/sources",
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
        f"/tenants/{tenant_id}/assets/asset-a/agents/agent-a"
        "/sources/knx-main/points",
        json={
            "point_id": f"{tenant_id}|asset-a|knx-main|temperature",
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
