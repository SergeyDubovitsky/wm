from __future__ import annotations

from datetime import UTC, datetime
from pathlib import Path

import pytest

from config_registry.application.errors import (
    AgentNotFoundError,
    ConfigPayloadValidationError,
    ConfigRenderError,
)
from config_registry.application.use_cases.agents import (
    CreateAgent,
    CreateAgentCommand,
)
from config_registry.application.use_cases.assets import (
    CreateAsset,
    CreateAssetCommand,
)
from config_registry.application.use_cases.points import (
    CreatePoint,
    CreatePointCommand,
)
from config_registry.application.use_cases.render_config import (
    RenderAgentConfig,
    RenderAgentConfigCommand,
)
from config_registry.application.use_cases.sources import (
    CreateSource,
    CreateSourceCommand,
)
from config_registry.application.use_cases.tenants import (
    CreateTenant,
    CreateTenantCommand,
)
from config_registry.domain.value_objects import SignalType, ValueType
from config_registry.infrastructure.json_schema_validator import (
    JsonSchemaConfigPayloadValidator,
)
from config_registry.infrastructure.memory.unit_of_work import (
    InMemoryUnitOfWorkFactory,
)

pytestmark = pytest.mark.asyncio

CONTRACT_DIR = Path("docs/contracts/edge-agent/schemas")


async def test_render_agent_config_builds_valid_runtime_and_source_payloads() -> None:
    unit_of_work_factory = InMemoryUnitOfWorkFactory()
    await _create_registry_graph(unit_of_work_factory)

    rendered = await RenderAgentConfig(
        unit_of_work_factory(),
        JsonSchemaConfigPayloadValidator.from_contract_dir(CONTRACT_DIR),
    ).execute(
        RenderAgentConfigCommand(
            tenant_id="tenant-a",
            asset_id="asset-a",
            agent_id="agent-a",
            config_revision="rev-2026-05-03-001",
            issued_at=datetime(2026, 5, 3, 10, 15, 0, tzinfo=UTC),
            source_config_revisions={"knx-main": "rev-2026-05-03-001-knx-main"},
        )
    )

    assert rendered.runtime_payload == {
        "message_type": "wm.edge.runtime-config.v1",
        "tenant_id": "tenant-a",
        "asset_id": "asset-a",
        "agent_id": "agent-a",
        "config_revision": "rev-2026-05-03-001",
        "issued_at": "2026-05-03T10:15:00Z",
        "sources": [
            {
                "source_id": "knx-main",
                "source_config_revision": "rev-2026-05-03-001-knx-main",
                "enabled": True,
            }
        ],
    }
    assert len(rendered.source_payloads) == 1

    source_payload = rendered.source_payloads[0].payload
    assert source_payload["message_type"] == "wm.edge.source-config.v1"
    assert source_payload["source_id"] == "knx-main"
    assert source_payload["source_config_revision"] == (
        "rev-2026-05-03-001-knx-main"
    )
    assert source_payload["connection"] == {"gateway_ip": "127.0.0.1"}
    assert [point["point_key"] for point in source_payload["points"]] == [
        "temperature"
    ]
    assert source_payload["points"][0]["acquisition"] == {
        "listen": True,
        "read_on_start": True,
        "periodic_interval_seconds": None,
    }
    assert source_payload["points"][0]["publish"] == {
        "enabled": True,
        "change_threshold": 1.0,
    }


async def test_render_agent_config_rejects_missing_agent() -> None:
    unit_of_work_factory = InMemoryUnitOfWorkFactory()

    with pytest.raises(AgentNotFoundError):
        await RenderAgentConfig(
            unit_of_work_factory(),
            JsonSchemaConfigPayloadValidator.from_contract_dir(CONTRACT_DIR),
        ).execute(
            RenderAgentConfigCommand(
                tenant_id="tenant-a",
                asset_id="asset-a",
                agent_id="agent-a",
                config_revision="rev-2026-05-03-001",
                issued_at=datetime(2026, 5, 3, tzinfo=UTC),
            )
        )


async def test_render_agent_config_rejects_missing_source_revision() -> None:
    unit_of_work_factory = InMemoryUnitOfWorkFactory()
    await _create_registry_graph(unit_of_work_factory)

    with pytest.raises(ConfigRenderError, match="source_config_revision"):
        await RenderAgentConfig(
            unit_of_work_factory(),
            JsonSchemaConfigPayloadValidator.from_contract_dir(CONTRACT_DIR),
        ).execute(
            RenderAgentConfigCommand(
                tenant_id="tenant-a",
                asset_id="asset-a",
                agent_id="agent-a",
                config_revision="rev-2026-05-03-001",
                issued_at=datetime(2026, 5, 3, tzinfo=UTC),
                source_config_revisions={},
            )
        )


async def test_render_agent_config_rejects_contract_invalid_source_payload() -> None:
    unit_of_work_factory = InMemoryUnitOfWorkFactory()
    await _create_registry_graph(
        unit_of_work_factory,
        acquisition_defaults={"listen": True},
    )

    with pytest.raises(ConfigPayloadValidationError, match="read_on_start"):
        await RenderAgentConfig(
            unit_of_work_factory(),
            JsonSchemaConfigPayloadValidator.from_contract_dir(CONTRACT_DIR),
        ).execute(
            RenderAgentConfigCommand(
                tenant_id="tenant-a",
                asset_id="asset-a",
                agent_id="agent-a",
                config_revision="rev-2026-05-03-001",
                issued_at=datetime(2026, 5, 3, tzinfo=UTC),
            )
        )


async def _create_registry_graph(
    unit_of_work_factory: InMemoryUnitOfWorkFactory,
    *,
    acquisition_defaults: dict[str, object] | None = None,
) -> None:
    await CreateTenant(unit_of_work_factory()).execute(
        CreateTenantCommand(tenant_id="tenant-a", name="Tenant A")
    )
    await CreateAsset(unit_of_work_factory()).execute(
        CreateAssetCommand(
            tenant_id="tenant-a",
            asset_id="asset-a",
            name="Asset A",
        )
    )
    await CreateAgent(unit_of_work_factory()).execute(
        CreateAgentCommand(
            tenant_id="tenant-a",
            asset_id="asset-a",
            agent_id="agent-a",
        )
    )
    await CreateSource(unit_of_work_factory()).execute(
        CreateSourceCommand(
            tenant_id="tenant-a",
            asset_id="asset-a",
            agent_id="agent-a",
            source_id="knx-main",
            source_type="knx",
            connection_json={"gateway_ip": "127.0.0.1"},
            acquisition_defaults_json=acquisition_defaults
            or {
                "listen": True,
                "read_on_start": False,
                "periodic_interval_seconds": None,
            },
            publish_defaults_json={
                "enabled": True,
                "change_threshold": None,
            },
        )
    )
    await CreatePoint(unit_of_work_factory()).execute(
        CreatePointCommand(
            tenant_id="tenant-a",
            asset_id="asset-a",
            agent_id="agent-a",
            source_id="knx-main",
            point_id="tenant-a|asset-a|knx-main|temperature",
            point_key="temperature",
            point_ref="2/0/0",
            name="Temperature",
            value_type=ValueType.NUMBER,
            value_model="knx.dpt.9.001",
            signal_type=SignalType.SENSOR,
            unit="C",
            acquisition_json={"read_on_start": True},
            publish_json={"change_threshold": 1.0},
            tags_json={"room": "demo"},
        )
    )
    await CreatePoint(unit_of_work_factory()).execute(
        CreatePointCommand(
            tenant_id="tenant-a",
            asset_id="asset-a",
            agent_id="agent-a",
            source_id="knx-main",
            point_id="tenant-a|asset-a|knx-main|disabled",
            point_key="disabled",
            point_ref="2/0/1",
            name="Disabled",
            value_type=ValueType.BOOLEAN,
            value_model="knx.dpt.1.001",
            signal_type=SignalType.FEEDBACK,
            enabled=False,
        )
    )
