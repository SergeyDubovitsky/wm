from __future__ import annotations

import pytest
from fastapi.testclient import TestClient

from config_registry.infrastructure.backoffice import (
    BACKOFFICE_VIEWS,
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


def test_backoffice_model_views_are_read_only_until_use_case_adapters_exist() -> None:
    assert BACKOFFICE_VIEWS
    for view in BACKOFFICE_VIEWS:
        assert view.can_create is False
        assert view.can_edit is False
        assert view.can_delete is False
        assert view.can_view_details is True


@pytest.mark.asyncio
async def test_backoffice_read_only_base_rejects_programmatic_writes() -> None:
    view = TenantBackofficeView()

    with pytest.raises(PermissionError, match="read-only"):
        await view.insert_model(object(), {})
    with pytest.raises(PermissionError, match="read-only"):
        await view.update_model(object(), "tenant-a", {})
    with pytest.raises(PermissionError, match="read-only"):
        await view.delete_model(object(), "tenant-a")


def _settings(*, internal_mode: bool) -> ConfigRegistrySettings:
    return ConfigRegistrySettings(
        internal_mode=internal_mode,
        database_url="postgresql+asyncpg://wm:password@127.0.0.1:1/wm_config_registry",
    )


def _has_route_prefix(app: object, prefix: str) -> bool:
    routes = getattr(app, "routes")
    return any(str(getattr(route, "path", "")).startswith(prefix) for route in routes)
