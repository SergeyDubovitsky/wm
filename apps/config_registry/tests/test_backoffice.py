from __future__ import annotations

import json
from datetime import UTC, datetime, timedelta
from pathlib import Path
from types import SimpleNamespace
from typing import Any

import pytest
from fastapi.testclient import TestClient

from config_registry.infrastructure.backoffice import (
    BACKOFFICE_CUSTOM_VIEWS,
    BACKOFFICE_VIEWS,
    AgentBackofficeView,
    AssetBackofficeView,
    ConfigOutboxActionsBackofficeView,
    PointBackofficeView,
    RenderConfigBackofficeView,
    SourceBackofficeView,
    TenantBackofficeView,
)
from config_registry.main import create_app
from config_registry.settings import ConfigRegistrySettings

CONFIG_REGISTRY_SRC = Path(__file__).resolve().parents[1] / "src" / "config_registry"


def test_backoffice_mounts_in_internal_mode_with_postgres_uow() -> None:
    app = create_app(settings=_settings(internal_mode=True))

    with TestClient(app) as client:
        assert client.app.state.backoffice_enabled is True
        assert _has_route_prefix(client.app, "/backoffice")


def test_backoffice_is_not_mounted_outside_internal_mode() -> None:
    app = create_app(settings=_settings(internal_mode=False))

    with TestClient(app) as client:
        assert client.app.state.backoffice_enabled is False
        assert not _has_route_prefix(client.app, "/backoffice")


def test_backoffice_is_not_mounted_without_postgres_uow() -> None:
    app = create_app(settings=ConfigRegistrySettings(internal_mode=True))

    with TestClient(app) as client:
        assert client.app.state.backoffice_enabled is False
        assert not _has_route_prefix(client.app, "/backoffice")


def test_backoffice_model_views_enable_full_internal_crud() -> None:
    assert BACKOFFICE_VIEWS
    for view in BACKOFFICE_VIEWS:
        assert view.can_create is True
        assert view.can_edit is True
        assert view.can_delete is True
        assert view.can_view_details is True


def test_backoffice_registers_render_config_custom_view() -> None:
    assert RenderConfigBackofficeView in BACKOFFICE_CUSTOM_VIEWS
    assert ConfigOutboxActionsBackofficeView in BACKOFFICE_CUSTOM_VIEWS


def test_sqladmin_dependency_stays_out_of_domain_and_application_layers() -> None:
    guarded_roots = [
        CONFIG_REGISTRY_SRC / "domain",
        CONFIG_REGISTRY_SRC / "application",
    ]
    for root in guarded_roots:
        for path in root.rglob("*.py"):
            assert "sqladmin" not in path.read_text(encoding="utf-8")


@pytest.mark.asyncio
async def test_backoffice_create_tenant_uses_application_use_case() -> None:
    app = create_app()
    view = TenantBackofficeView()
    request = SimpleNamespace(app=app)

    created = await view.insert_model(
        request,
        {"tenant_id": "tenant-backoffice", "name": "Tenant Backoffice"},
    )

    with TestClient(app) as client:
        tenants = client.get("/tenants").json()

    assert created.tenant_id == "tenant-backoffice"
    assert created.status == "active"
    assert tenants[0]["tenant_id"] == "tenant-backoffice"
    assert tenants[0]["name"] == "Tenant Backoffice"
    assert tenants[0]["status"] == "active"
    assert tenants[0]["created_at"].endswith("Z")
    assert tenants[0]["updated_at"].endswith("Z")


@pytest.mark.asyncio
async def test_backoffice_create_asset_uses_application_use_case() -> None:
    app = create_app()
    request = SimpleNamespace(app=app)
    await TenantBackofficeView().insert_model(
        request,
        {"tenant_id": "tenant-backoffice", "name": "Tenant Backoffice"},
    )

    created = await AssetBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "name": "Asset Backoffice",
            "description": "Created through backoffice use case",
        },
    )

    with TestClient(app) as client:
        assets = client.get("/tenants/tenant-backoffice/assets").json()

    assert created.tenant_id == "tenant-backoffice"
    assert created.asset_id == "asset-backoffice"
    assert created.status == "active"
    assert assets[0]["asset_id"] == "asset-backoffice"
    assert assets[0]["description"] == "Created through backoffice use case"


@pytest.mark.asyncio
async def test_backoffice_create_agent_uses_application_use_case() -> None:
    app = create_app()
    request = SimpleNamespace(app=app)
    await TenantBackofficeView().insert_model(
        request,
        {"tenant_id": "tenant-backoffice", "name": "Tenant Backoffice"},
    )
    await AssetBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "name": "Asset Backoffice",
        },
    )

    created = await AgentBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "agent_id": "agent-backoffice",
            "name": "Agent Backoffice",
        },
    )

    with TestClient(app) as client:
        agents = client.get(
            "/tenants/tenant-backoffice/assets/asset-backoffice/agents"
        ).json()

    assert created.agent_id == "agent-backoffice"
    assert created.status == "active"
    assert agents[0]["agent_id"] == "agent-backoffice"
    assert agents[0]["bootstrap_hint_json"] == {}


@pytest.mark.asyncio
async def test_backoffice_create_source_uses_application_use_case() -> None:
    app = create_app()
    request = SimpleNamespace(app=app)
    await TenantBackofficeView().insert_model(
        request,
        {"tenant_id": "tenant-backoffice", "name": "Tenant Backoffice"},
    )
    await AssetBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "name": "Asset Backoffice",
        },
    )
    await AgentBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "agent_id": "agent-backoffice",
        },
    )

    created = await SourceBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "agent_id": "agent-backoffice",
            "source_id": "source-backoffice",
            "source_type": "knx",
            "enabled": True,
            "name": "Source Backoffice",
        },
    )

    with TestClient(app) as client:
        sources = client.get(
            "/tenants/tenant-backoffice/assets/asset-backoffice"
            "/agents/agent-backoffice/sources"
        ).json()

    assert created.source_id == "source-backoffice"
    assert created.enabled is True
    assert sources[0]["source_id"] == "source-backoffice"
    assert sources[0]["connection_json"] == {}


@pytest.mark.asyncio
async def test_backoffice_create_point_uses_application_use_case() -> None:
    app = create_app()
    request = SimpleNamespace(app=app)
    await TenantBackofficeView().insert_model(
        request,
        {"tenant_id": "tenant-backoffice", "name": "Tenant Backoffice"},
    )
    await AssetBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "name": "Asset Backoffice",
        },
    )
    await AgentBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "agent_id": "agent-backoffice",
        },
    )
    await SourceBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "agent_id": "agent-backoffice",
            "source_id": "source-backoffice",
            "source_type": "knx",
        },
    )

    created = await PointBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "agent_id": "agent-backoffice",
            "source_id": "source-backoffice",
            "point_id": "point-backoffice",
            "point_key": "1%2F2%2F3",
            "point_ref": "1/2/3",
            "name": "Point Backoffice",
            "value_type": "number",
            "value_model": "knx.dpt.9.001",
            "signal_type": "sensor",
            "unit": "C",
            "enabled": "true",
        },
    )

    with TestClient(app) as client:
        points = client.get(
            "/tenants/tenant-backoffice/assets/asset-backoffice"
            "/agents/agent-backoffice/sources/source-backoffice/points"
        ).json()

    assert created.point_id == "point-backoffice"
    assert created.value_type == "number"
    assert points[0]["point_key"] == "1%2F2%2F3"
    assert points[0]["acquisition_json"] == {}


@pytest.mark.asyncio
async def test_backoffice_render_config_action_uses_application_use_cases() -> None:
    app = create_app()
    request = SimpleNamespace(app=app)
    await TenantBackofficeView().insert_model(
        request,
        {"tenant_id": "tenant-backoffice", "name": "Tenant Backoffice"},
    )
    await AssetBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "name": "Asset Backoffice",
        },
    )
    await AgentBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "agent_id": "agent-backoffice",
        },
    )
    await SourceBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "agent_id": "agent-backoffice",
            "source_id": "source-backoffice",
            "source_type": "knx",
        },
    )
    await PointBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "agent_id": "agent-backoffice",
            "source_id": "source-backoffice",
            "point_id": "point-backoffice",
            "point_key": "1%2F2%2F3",
            "point_ref": "1/2/3",
            "name": "Point Backoffice",
            "value_type": "number",
            "value_model": "knx.dpt.9.001",
            "signal_type": "sensor",
            "enabled": True,
        },
    )

    response = await RenderConfigBackofficeView().render_config(
        FakeJsonRequest(
            app,
            {
                "tenant_id": "tenant-backoffice",
                "asset_id": "asset-backoffice",
                "agent_id": "agent-backoffice",
                "config_revision": "rev-backoffice-001",
                "issued_at": "2026-05-03T12:00:00Z",
                "source_config_revisions": {
                    "source-backoffice": "rev-backoffice-001-source"
                },
            },
        )
    )
    duplicate_response = await RenderConfigBackofficeView().render_config(
        FakeJsonRequest(
            app,
            {
                "tenant_id": "tenant-backoffice",
                "asset_id": "asset-backoffice",
                "agent_id": "agent-backoffice",
                "config_revision": "rev-backoffice-001",
                "issued_at": "2026-05-03T12:00:00Z",
                "source_config_revisions": {
                    "source-backoffice": "rev-backoffice-001-source"
                },
            },
        )
    )

    body = json.loads(response.body)
    assert response.status_code == 201
    assert body["config_revision"] == "rev-backoffice-001"
    assert body["outbox_record_count"] == 2
    assert duplicate_response.status_code == 409


@pytest.mark.asyncio
async def test_backoffice_outbox_actions_use_application_use_cases() -> None:
    app = create_app()
    await _render_backoffice_config(app)
    async with app.state.unit_of_work_factory() as unit_of_work:
        records = await unit_of_work.config_outbox.reserve_available(
            limit=1,
            now=datetime.now(UTC),
            lease_duration=timedelta(seconds=30),
        )
        await unit_of_work.commit()
    outbox_id = records[0].outbox_id

    retry_response = await ConfigOutboxActionsBackofficeView().retry_outbox_record(
        FakeJsonRequest(
            app,
            {
                "outbox_id": str(outbox_id),
                "reason": "Manual retry from test",
                "next_attempt_at": "2026-05-03T12:00:01Z",
            },
        )
    )
    dead_letter_response = await (
        ConfigOutboxActionsBackofficeView().dead_letter_outbox_record(
            FakeJsonRequest(
                app,
                {
                    "outbox_id": str(outbox_id),
                    "reason": "Manual dead-letter from test",
                },
            )
        )
    )

    retry_body = json.loads(retry_response.body)
    dead_letter_body = json.loads(dead_letter_response.body)
    assert retry_response.status_code == 200
    assert retry_body["status"] == "retry"
    assert retry_body["last_error"] == "Manual retry from test"
    assert dead_letter_response.status_code == 200
    assert dead_letter_body["status"] == "dead_letter"
    assert dead_letter_body["last_error"] == "Manual dead-letter from test"


def _settings(*, internal_mode: bool) -> ConfigRegistrySettings:
    return ConfigRegistrySettings(
        internal_mode=internal_mode,
        database_url="postgresql+asyncpg://wm:password@127.0.0.1:1/wm_config_registry",
    )


def _has_route_prefix(app: object, prefix: str) -> bool:
    routes = getattr(app, "routes")
    return any(str(getattr(route, "path", "")).startswith(prefix) for route in routes)


class FakeJsonRequest:
    def __init__(self, app: object, payload: dict[str, Any]) -> None:
        self.app = app
        self._payload = payload

    async def json(self) -> dict[str, Any]:
        return self._payload


async def _render_backoffice_config(app: object) -> None:
    request = SimpleNamespace(app=app)
    await TenantBackofficeView().insert_model(
        request,
        {"tenant_id": "tenant-backoffice", "name": "Tenant Backoffice"},
    )
    await AssetBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "name": "Asset Backoffice",
        },
    )
    await AgentBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "agent_id": "agent-backoffice",
        },
    )
    await SourceBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "agent_id": "agent-backoffice",
            "source_id": "source-backoffice",
            "source_type": "knx",
        },
    )
    await PointBackofficeView().insert_model(
        request,
        {
            "tenant_id": "tenant-backoffice",
            "asset_id": "asset-backoffice",
            "agent_id": "agent-backoffice",
            "source_id": "source-backoffice",
            "point_id": "point-backoffice",
            "point_key": "1%2F2%2F3",
            "point_ref": "1/2/3",
            "name": "Point Backoffice",
            "value_type": "number",
            "value_model": "knx.dpt.9.001",
            "signal_type": "sensor",
            "enabled": True,
        },
    )
    await RenderConfigBackofficeView().render_config(
        FakeJsonRequest(
            app,
            {
                "tenant_id": "tenant-backoffice",
                "asset_id": "asset-backoffice",
                "agent_id": "agent-backoffice",
                "config_revision": "rev-backoffice-actions-001",
                "issued_at": "2026-05-03T12:00:00Z",
                "source_config_revisions": {
                    "source-backoffice": "rev-backoffice-actions-001-source"
                },
            },
        )
    )
