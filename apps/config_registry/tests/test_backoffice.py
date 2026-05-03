from __future__ import annotations

from types import SimpleNamespace

import pytest
from fastapi.testclient import TestClient

from config_registry.infrastructure.backoffice import (
    BACKOFFICE_VIEWS,
    AssetBackofficeView,
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


def test_only_tenant_backoffice_view_is_create_enabled_for_now() -> None:
    for view in BACKOFFICE_VIEWS:
        assert view.can_create is (view is TenantBackofficeView)


@pytest.mark.asyncio
async def test_backoffice_views_reject_unsupported_programmatic_writes() -> None:
    tenant_view = TenantBackofficeView()
    asset_view = AssetBackofficeView()

    with pytest.raises(PermissionError, match="read-only"):
        await asset_view.insert_model(object(), {})
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
