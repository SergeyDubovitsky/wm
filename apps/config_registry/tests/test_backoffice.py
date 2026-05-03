from __future__ import annotations

from types import SimpleNamespace

import pytest
from fastapi.testclient import TestClient

from config_registry.infrastructure.backoffice import (
    BACKOFFICE_VIEWS,
    AgentBackofficeView,
    AssetBackofficeView,
    PointBackofficeView,
    SourceBackofficeView,
    TenantBackofficeView,
)
from config_registry.main import create_app
from config_registry.settings import ConfigRegistrySettings


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


def test_backoffice_model_views_disable_edit_and_delete() -> None:
    assert BACKOFFICE_VIEWS
    for view in BACKOFFICE_VIEWS:
        assert view.can_edit is False
        assert view.can_delete is False
        assert view.can_view_details is True


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


def test_only_tenant_backoffice_view_is_create_enabled_for_now() -> None:
    for view in BACKOFFICE_VIEWS:
        assert view.can_create is (
            view
            in {
                TenantBackofficeView,
                AssetBackofficeView,
                AgentBackofficeView,
                SourceBackofficeView,
            }
        )


@pytest.mark.asyncio
async def test_backoffice_views_reject_unsupported_programmatic_writes() -> None:
    tenant_view = TenantBackofficeView()
    point_view = PointBackofficeView()

    with pytest.raises(PermissionError, match="read-only"):
        await point_view.insert_model(object(), {})
    with pytest.raises(PermissionError, match="read-only"):
        await tenant_view.update_model(object(), "tenant-a", {})
    with pytest.raises(PermissionError, match="read-only"):
        await tenant_view.delete_model(object(), "tenant-a")


def _settings(*, internal_mode: bool) -> ConfigRegistrySettings:
    return ConfigRegistrySettings(
        internal_mode=internal_mode,
        database_url="postgresql+asyncpg://wm:password@127.0.0.1:1/wm_config_registry",
    )


def _has_route_prefix(app: object, prefix: str) -> bool:
    routes = getattr(app, "routes")
    return any(str(getattr(route, "path", "")).startswith(prefix) for route in routes)
