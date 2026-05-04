from __future__ import annotations

import json
from datetime import UTC, datetime, timedelta
from pathlib import Path
from types import SimpleNamespace
from typing import Any

import pytest
from fastapi.testclient import TestClient

from wm_config_registry.infrastructure.backoffice import (
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
from wm_config_registry.infrastructure.memory.unit_of_work import (
    InMemoryUnitOfWorkFactory,
)
from wm_config_registry.main import create_app
from wm_config_registry.settings import ConfigRegistrySettings

CONFIG_REGISTRY_SRC = Path(__file__).resolve().parents[1] / "src" / "wm_config_registry"


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


@pytest.mark.parametrize(
    ("path", "field_names"),
    [
        ("/backoffice/tenant-model/create", ["tenant_id", "name"]),
        (
            "/backoffice/asset-model/create",
            ["tenant_id", "asset_id", "name", "description"],
        ),
        (
            "/backoffice/agent-model/create",
            ["asset_id", "agent_id", "name"],
        ),
        (
            "/backoffice/source-model/create",
            ["agent_id", "source_id"],
        ),
        (
            "/backoffice/point-model/create",
            ["source_id", "point_id"],
        ),
    ],
)
def test_backoffice_create_forms_include_pk_and_fk_fields(
    path: str,
    field_names: list[str],
) -> None:
    app = create_app(settings=_settings(internal_mode=True))
    app.state.unit_of_work_factory = InMemoryUnitOfWorkFactory()

    with TestClient(app) as client:
        response = client.get(path)

    assert response.status_code == 200
    for field_name in field_names:
        assert f'name="{field_name}"' in response.text


@pytest.mark.asyncio
async def test_backoffice_render_config_form_shows_operator_button_and_hint() -> None:
    response = await RenderConfigBackofficeView().render_config_form(object())
    html = response.body.decode()

    assert response.status_code == 200
    assert "Обновить config state" in html
    assert "Без этого retained MQTT config для wm-edge-agent не изменится" in html
    assert "создает config_outbox records" in html


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


def test_backoffice_create_tenant_post_uses_root_app_state_when_mounted() -> None:
    app = create_app(settings=_settings(internal_mode=True))
    app.state.unit_of_work_factory = InMemoryUnitOfWorkFactory()

    with TestClient(app) as client:
        response = client.post(
            "/backoffice/tenant-model/create",
            data={
                "tenant_id": "tenant-mounted",
                "name": "Tenant Mounted",
                "save": "Save",
            },
            follow_redirects=False,
        )
        tenants = client.get("/tenants").json()

    assert response.status_code == 302
    assert response.headers["location"].endswith("/backoffice/tenant-model/list")
    assert tenants[0]["tenant_id"] == "tenant-mounted"
    assert tenants[0]["name"] == "Tenant Mounted"


def test_backoffice_asset_create_form_renders_tenant_dropdown() -> None:
    app = create_app(settings=_settings(internal_mode=True))
    app.state.unit_of_work_factory = InMemoryUnitOfWorkFactory()

    with TestClient(app) as client:
        tenant_response = client.post(
            "/backoffice/tenant-model/create",
            data={
                "tenant_id": "tenant-dropdown",
                "name": "Tenant Dropdown",
                "save": "Save",
            },
            follow_redirects=False,
        )
        response = client.get("/backoffice/asset-model/create")

    assert tenant_response.status_code == 302
    assert '<select class="form-control" id="tenant_id" name="tenant_id" required>' in (
        response.text
    )
    assert 'value="tenant-dropdown"' in response.text
    assert "Tenant Dropdown (tenant-dropdown)" in response.text
    assert 'textarea class="form-control" id="tenant_id"' not in response.text


def test_backoffice_create_asset_post_uses_selected_tenant_when_mounted() -> None:
    app = create_app(settings=_settings(internal_mode=True))
    app.state.unit_of_work_factory = InMemoryUnitOfWorkFactory()

    with TestClient(app) as client:
        tenant_response = client.post(
            "/backoffice/tenant-model/create",
            data={
                "tenant_id": "tenant-mounted",
                "name": "Tenant Mounted",
                "save": "Save",
            },
            follow_redirects=False,
        )
        response = client.post(
            "/backoffice/asset-model/create",
            data={
                "tenant_id": "tenant-mounted",
                "asset_id": "asset-mounted",
                "name": "Asset Mounted",
                "description": "Mounted asset",
                "save": "Save",
            },
            follow_redirects=False,
        )
        assets = client.get("/tenants/tenant-mounted/assets").json()

    assert tenant_response.status_code == 302
    assert response.status_code == 302
    assert response.headers["location"].endswith("/backoffice/asset-model/list")
    assert assets[0]["tenant_id"] == "tenant-mounted"
    assert assets[0]["asset_id"] == "asset-mounted"
    assert assets[0]["name"] == "Asset Mounted"


def test_backoffice_agent_create_form_renders_asset_dropdown_without_tenant_field() -> None:
    app = create_app(settings=_settings(internal_mode=True))
    app.state.unit_of_work_factory = InMemoryUnitOfWorkFactory()

    with TestClient(app) as client:
        tenant_response = client.post(
            "/backoffice/tenant-model/create",
            data={
                "tenant_id": "tenant-agent-form",
                "name": "Tenant Agent Form",
                "save": "Save",
            },
            follow_redirects=False,
        )
        asset_response = client.post(
            "/backoffice/asset-model/create",
            data={
                "tenant_id": "tenant-agent-form",
                "asset_id": "asset-agent-form",
                "name": "Asset Agent Form",
                "description": "Agent form asset",
                "save": "Save",
            },
            follow_redirects=False,
        )
        response = client.get("/backoffice/agent-model/create")

    assert tenant_response.status_code == 302
    assert asset_response.status_code == 302
    assert '<select class="form-control" id="asset_id" name="asset_id" required>' in (
        response.text
    )
    assert "Tenant Agent Form (tenant-agent-form) / Asset Agent Form (asset-agent-form)" in (
        response.text
    )
    assert 'name="tenant_id"' not in response.text
    assert 'textarea class="form-control" id="asset_id"' not in response.text


def test_backoffice_create_agent_post_uses_selected_asset_when_mounted() -> None:
    app = create_app(settings=_settings(internal_mode=True))
    app.state.unit_of_work_factory = InMemoryUnitOfWorkFactory()

    with TestClient(app) as client:
        tenant_response = client.post(
            "/backoffice/tenant-model/create",
            data={
                "tenant_id": "tenant-agent-mounted",
                "name": "Tenant Agent Mounted",
                "save": "Save",
            },
            follow_redirects=False,
        )
        asset_response = client.post(
            "/backoffice/asset-model/create",
            data={
                "tenant_id": "tenant-agent-mounted",
                "asset_id": "asset-agent-mounted",
                "name": "Asset Agent Mounted",
                "description": "Mounted agent asset",
                "save": "Save",
            },
            follow_redirects=False,
        )
        response = client.post(
            "/backoffice/agent-model/create",
            data={
                "asset_id": json.dumps(
                    {
                        "tenant_id": "tenant-agent-mounted",
                        "asset_id": "asset-agent-mounted",
                    },
                    separators=(",", ":"),
                    sort_keys=True,
                ),
                "agent_id": "agent-mounted",
                "name": "Agent Mounted",
                "save": "Save",
            },
            follow_redirects=False,
        )
        agents = client.get(
            "/tenants/tenant-agent-mounted/assets/asset-agent-mounted/agents"
        ).json()

    assert tenant_response.status_code == 302
    assert asset_response.status_code == 302
    assert response.status_code == 302
    assert response.headers["location"].endswith("/backoffice/agent-model/list")
    assert agents[0]["tenant_id"] == "tenant-agent-mounted"
    assert agents[0]["asset_id"] == "asset-agent-mounted"
    assert agents[0]["agent_id"] == "agent-mounted"
    assert agents[0]["name"] == "Agent Mounted"


def test_backoffice_source_create_form_renders_agent_dropdown_without_parent_fields() -> None:
    app = create_app(settings=_settings(internal_mode=True))
    app.state.unit_of_work_factory = InMemoryUnitOfWorkFactory()

    with TestClient(app) as client:
        tenant_response = client.post(
            "/backoffice/tenant-model/create",
            data={
                "tenant_id": "tenant-source-form",
                "name": "Tenant Source Form",
                "save": "Save",
            },
            follow_redirects=False,
        )
        asset_response = client.post(
            "/backoffice/asset-model/create",
            data={
                "tenant_id": "tenant-source-form",
                "asset_id": "asset-source-form",
                "name": "Asset Source Form",
                "description": "Source form asset",
                "save": "Save",
            },
            follow_redirects=False,
        )
        agent_response = client.post(
            "/backoffice/agent-model/create",
            data={
                "asset_id": json.dumps(
                    {
                        "tenant_id": "tenant-source-form",
                        "asset_id": "asset-source-form",
                    },
                    separators=(",", ":"),
                    sort_keys=True,
                ),
                "agent_id": "agent-source-form",
                "name": "Agent Source Form",
                "save": "Save",
            },
            follow_redirects=False,
        )
        response = client.get("/backoffice/source-model/create")

    assert tenant_response.status_code == 302
    assert asset_response.status_code == 302
    assert agent_response.status_code == 302
    assert '<select class="form-control" id="agent_id" name="agent_id" required>' in (
        response.text
    )
    assert (
        "Tenant Source Form (tenant-source-form) / "
        "Asset Source Form (asset-source-form) / "
        "Agent Source Form (agent-source-form)"
    ) in response.text
    assert 'name="tenant_id"' not in response.text
    assert 'name="asset_id"' not in response.text
    assert 'textarea class="form-control" id="agent_id"' not in response.text


def test_backoffice_create_source_post_uses_selected_agent_when_mounted() -> None:
    app = create_app(settings=_settings(internal_mode=True))
    app.state.unit_of_work_factory = InMemoryUnitOfWorkFactory()

    with TestClient(app) as client:
        tenant_response = client.post(
            "/backoffice/tenant-model/create",
            data={
                "tenant_id": "tenant-source-mounted",
                "name": "Tenant Source Mounted",
                "save": "Save",
            },
            follow_redirects=False,
        )
        asset_response = client.post(
            "/backoffice/asset-model/create",
            data={
                "tenant_id": "tenant-source-mounted",
                "asset_id": "asset-source-mounted",
                "name": "Asset Source Mounted",
                "description": "Mounted source asset",
                "save": "Save",
            },
            follow_redirects=False,
        )
        agent_response = client.post(
            "/backoffice/agent-model/create",
            data={
                "asset_id": json.dumps(
                    {
                        "tenant_id": "tenant-source-mounted",
                        "asset_id": "asset-source-mounted",
                    },
                    separators=(",", ":"),
                    sort_keys=True,
                ),
                "agent_id": "agent-source-mounted",
                "name": "Agent Source Mounted",
                "save": "Save",
            },
            follow_redirects=False,
        )
        response = client.post(
            "/backoffice/source-model/create",
            data={
                "agent_id": json.dumps(
                    {
                        "tenant_id": "tenant-source-mounted",
                        "asset_id": "asset-source-mounted",
                        "agent_id": "agent-source-mounted",
                    },
                    separators=(",", ":"),
                    sort_keys=True,
                ),
                "source_id": "source-mounted",
                "source_type": "knx",
                "enabled": "y",
                "name": "Source Mounted",
                "description": "Mounted source",
                "save": "Save",
            },
            follow_redirects=False,
        )
        sources = client.get(
            "/tenants/tenant-source-mounted/assets/asset-source-mounted"
            "/agents/agent-source-mounted/sources"
        ).json()

    assert tenant_response.status_code == 302
    assert asset_response.status_code == 302
    assert agent_response.status_code == 302
    assert response.status_code == 302
    assert response.headers["location"].endswith("/backoffice/source-model/list")
    assert sources[0]["tenant_id"] == "tenant-source-mounted"
    assert sources[0]["asset_id"] == "asset-source-mounted"
    assert sources[0]["agent_id"] == "agent-source-mounted"
    assert sources[0]["source_id"] == "source-mounted"
    assert sources[0]["name"] == "Source Mounted"


def test_backoffice_point_create_form_renders_source_dropdown_without_parent_fields() -> None:
    app = create_app(settings=_settings(internal_mode=True))
    app.state.unit_of_work_factory = InMemoryUnitOfWorkFactory()

    with TestClient(app) as client:
        tenant_response = client.post(
            "/backoffice/tenant-model/create",
            data={
                "tenant_id": "tenant-point-form",
                "name": "Tenant Point Form",
                "save": "Save",
            },
            follow_redirects=False,
        )
        asset_response = client.post(
            "/backoffice/asset-model/create",
            data={
                "tenant_id": "tenant-point-form",
                "asset_id": "asset-point-form",
                "name": "Asset Point Form",
                "description": "Point form asset",
                "save": "Save",
            },
            follow_redirects=False,
        )
        agent_response = client.post(
            "/backoffice/agent-model/create",
            data={
                "asset_id": json.dumps(
                    {
                        "tenant_id": "tenant-point-form",
                        "asset_id": "asset-point-form",
                    },
                    separators=(",", ":"),
                    sort_keys=True,
                ),
                "agent_id": "agent-point-form",
                "name": "Agent Point Form",
                "save": "Save",
            },
            follow_redirects=False,
        )
        source_response = client.post(
            "/backoffice/source-model/create",
            data={
                "agent_id": json.dumps(
                    {
                        "tenant_id": "tenant-point-form",
                        "asset_id": "asset-point-form",
                        "agent_id": "agent-point-form",
                    },
                    separators=(",", ":"),
                    sort_keys=True,
                ),
                "source_id": "source-point-form",
                "source_type": "knx",
                "enabled": "y",
                "name": "Source Point Form",
                "description": "Point form source",
                "save": "Save",
            },
            follow_redirects=False,
        )
        response = client.get("/backoffice/point-model/create")

    assert tenant_response.status_code == 302
    assert asset_response.status_code == 302
    assert agent_response.status_code == 302
    assert source_response.status_code == 302
    assert '<select class="form-control" id="source_id" name="source_id" required>' in (
        response.text
    )
    assert (
        "Tenant Point Form (tenant-point-form) / "
        "Asset Point Form (asset-point-form) / "
        "Agent Point Form (agent-point-form) / "
        "Source Point Form (source-point-form)"
    ) in response.text
    assert 'name="tenant_id"' not in response.text
    assert 'name="asset_id"' not in response.text
    assert 'name="agent_id"' not in response.text
    assert 'textarea class="form-control" id="source_id"' not in response.text


def test_backoffice_create_point_post_uses_selected_source_when_mounted() -> None:
    app = create_app(settings=_settings(internal_mode=True))
    app.state.unit_of_work_factory = InMemoryUnitOfWorkFactory()

    with TestClient(app) as client:
        tenant_response = client.post(
            "/backoffice/tenant-model/create",
            data={
                "tenant_id": "tenant-point-mounted",
                "name": "Tenant Point Mounted",
                "save": "Save",
            },
            follow_redirects=False,
        )
        asset_response = client.post(
            "/backoffice/asset-model/create",
            data={
                "tenant_id": "tenant-point-mounted",
                "asset_id": "asset-point-mounted",
                "name": "Asset Point Mounted",
                "description": "Mounted point asset",
                "save": "Save",
            },
            follow_redirects=False,
        )
        agent_response = client.post(
            "/backoffice/agent-model/create",
            data={
                "asset_id": json.dumps(
                    {
                        "tenant_id": "tenant-point-mounted",
                        "asset_id": "asset-point-mounted",
                    },
                    separators=(",", ":"),
                    sort_keys=True,
                ),
                "agent_id": "agent-point-mounted",
                "name": "Agent Point Mounted",
                "save": "Save",
            },
            follow_redirects=False,
        )
        source_response = client.post(
            "/backoffice/source-model/create",
            data={
                "agent_id": json.dumps(
                    {
                        "tenant_id": "tenant-point-mounted",
                        "asset_id": "asset-point-mounted",
                        "agent_id": "agent-point-mounted",
                    },
                    separators=(",", ":"),
                    sort_keys=True,
                ),
                "source_id": "source-point-mounted",
                "source_type": "knx",
                "enabled": "y",
                "name": "Source Point Mounted",
                "description": "Mounted point source",
                "save": "Save",
            },
            follow_redirects=False,
        )
        response = client.post(
            "/backoffice/point-model/create",
            data={
                "source_id": json.dumps(
                    {
                        "tenant_id": "tenant-point-mounted",
                        "asset_id": "asset-point-mounted",
                        "agent_id": "agent-point-mounted",
                        "source_id": "source-point-mounted",
                    },
                    separators=(",", ":"),
                    sort_keys=True,
                ),
                "point_id": "point-mounted",
                "point_key": "2%2F2%2F2",
                "point_ref": "2/2/2",
                "name": "Point Mounted",
                "value_type": "number",
                "value_model": "knx.dpt.9.001",
                "signal_type": "sensor",
                "unit": "C",
                "enabled": "y",
                "save": "Save",
            },
            follow_redirects=False,
        )
        points = client.get(
            "/tenants/tenant-point-mounted/assets/asset-point-mounted"
            "/agents/agent-point-mounted/sources/source-point-mounted/points"
        ).json()

    assert tenant_response.status_code == 302
    assert asset_response.status_code == 302
    assert agent_response.status_code == 302
    assert source_response.status_code == 302
    assert response.status_code == 302
    assert response.headers["location"].endswith("/backoffice/point-model/list")
    assert points[0]["tenant_id"] == "tenant-point-mounted"
    assert points[0]["asset_id"] == "asset-point-mounted"
    assert points[0]["agent_id"] == "agent-point-mounted"
    assert points[0]["source_id"] == "source-point-mounted"
    assert points[0]["point_id"] == "point-mounted"
    assert points[0]["name"] == "Point Mounted"


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
    form_response = await RenderConfigBackofficeView().render_config(
        FakeFormRequest(
            app,
            {
                "tenant_id": "tenant-backoffice",
                "asset_id": "asset-backoffice",
                "agent_id": "agent-backoffice",
                "config_revision": "rev-backoffice-form-001",
                "issued_at": "2026-05-03T12:01:00Z",
                "source_config_revisions": (
                    '{"source-backoffice":"rev-backoffice-form-001-source"}'
                ),
            },
        )
    )

    body = json.loads(response.body)
    form_html = form_response.body.decode()
    assert response.status_code == 201
    assert body["config_revision"] == "rev-backoffice-001"
    assert body["outbox_record_count"] == 2
    assert duplicate_response.status_code == 409
    assert form_response.status_code == 201
    assert "Config state обновлен" in form_html
    assert "rev-backoffice-form-001" in form_html


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


class FakeFormRequest:
    headers = {"content-type": "application/x-www-form-urlencoded"}

    def __init__(self, app: object, payload: dict[str, Any]) -> None:
        self.app = app
        self._payload = payload

    async def form(self) -> dict[str, Any]:
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
