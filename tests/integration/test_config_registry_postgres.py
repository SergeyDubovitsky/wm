from __future__ import annotations

from fastapi.testclient import TestClient

from config_registry.main import create_app
from config_registry.settings import ConfigRegistrySettings


def test_config_registry_persists_tenants_in_postgres(
    local_config_registry_postgres_stack,
) -> None:
    settings = ConfigRegistrySettings(
        database_url=local_config_registry_postgres_stack.database_url
    )

    with TestClient(create_app(settings=settings)) as client:
        create_response = client.post(
            "/tenants",
            json={"tenant_id": "tenant-a", "name": "Tenant A"},
        )
        duplicate_response = client.post(
            "/tenants",
            json={"tenant_id": "tenant-a", "name": "Tenant A"},
        )

    with TestClient(create_app(settings=settings)) as client:
        list_response = client.get("/tenants")

    assert create_response.status_code == 201
    assert duplicate_response.status_code == 409
    assert list_response.status_code == 200
    assert [tenant["tenant_id"] for tenant in list_response.json()] == ["tenant-a"]


def test_config_registry_persists_assets_in_postgres(
    local_config_registry_postgres_stack,
) -> None:
    settings = ConfigRegistrySettings(
        database_url=local_config_registry_postgres_stack.database_url
    )

    with TestClient(create_app(settings=settings)) as client:
        client.post(
            "/tenants",
            json={"tenant_id": "tenant-assets", "name": "Tenant Assets"},
        )
        create_response = client.post(
            "/tenants/tenant-assets/assets",
            json={
                "asset_id": "asset-a",
                "name": "Asset A",
                "description": "Primary monitored asset",
            },
        )
        duplicate_response = client.post(
            "/tenants/tenant-assets/assets",
            json={"asset_id": "asset-a", "name": "Asset A"},
        )

    with TestClient(create_app(settings=settings)) as client:
        list_response = client.get("/tenants/tenant-assets/assets")

    assert create_response.status_code == 201
    assert create_response.json()["asset_id"] == "asset-a"
    assert create_response.json()["description"] == "Primary monitored asset"
    assert duplicate_response.status_code == 409
    assert list_response.status_code == 200
    assert [asset["asset_id"] for asset in list_response.json()] == ["asset-a"]


def test_config_registry_persists_agents_in_postgres(
    local_config_registry_postgres_stack,
) -> None:
    settings = ConfigRegistrySettings(
        database_url=local_config_registry_postgres_stack.database_url
    )

    with TestClient(create_app(settings=settings)) as client:
        client.post(
            "/tenants",
            json={"tenant_id": "tenant-agents", "name": "Tenant Agents"},
        )
        client.post(
            "/tenants/tenant-agents/assets",
            json={"asset_id": "asset-a", "name": "Asset A"},
        )
        create_response = client.post(
            "/tenants/tenant-agents/assets/asset-a/agents",
            json={
                "agent_id": "agent-a",
                "name": "Agent A",
                "bootstrap_hint_json": {"mqtt_profile": "local"},
            },
        )
        duplicate_response = client.post(
            "/tenants/tenant-agents/assets/asset-a/agents",
            json={"agent_id": "agent-a"},
        )

    with TestClient(create_app(settings=settings)) as client:
        list_response = client.get("/tenants/tenant-agents/assets/asset-a/agents")

    assert create_response.status_code == 201
    assert create_response.json()["agent_id"] == "agent-a"
    assert create_response.json()["bootstrap_hint_json"] == {"mqtt_profile": "local"}
    assert duplicate_response.status_code == 409
    assert list_response.status_code == 200
    assert [agent["agent_id"] for agent in list_response.json()] == ["agent-a"]


def test_config_registry_persists_sources_in_postgres(
    local_config_registry_postgres_stack,
) -> None:
    settings = ConfigRegistrySettings(
        database_url=local_config_registry_postgres_stack.database_url
    )

    with TestClient(create_app(settings=settings)) as client:
        client.post(
            "/tenants",
            json={"tenant_id": "tenant-sources", "name": "Tenant Sources"},
        )
        client.post(
            "/tenants/tenant-sources/assets",
            json={"asset_id": "asset-a", "name": "Asset A"},
        )
        client.post(
            "/tenants/tenant-sources/assets/asset-a/agents",
            json={"agent_id": "agent-a"},
        )
        create_response = client.post(
            "/tenants/tenant-sources/assets/asset-a/agents/agent-a/sources",
            json={
                "source_id": "knx-main",
                "source_type": "knx",
                "connection_json": {"gateway": "127.0.0.1"},
            },
        )
        duplicate_response = client.post(
            "/tenants/tenant-sources/assets/asset-a/agents/agent-a/sources",
            json={"source_id": "knx-main", "source_type": "knx"},
        )

    with TestClient(create_app(settings=settings)) as client:
        list_response = client.get(
            "/tenants/tenant-sources/assets/asset-a/agents/agent-a/sources"
        )

    assert create_response.status_code == 201
    assert create_response.json()["source_id"] == "knx-main"
    assert create_response.json()["connection_json"] == {"gateway": "127.0.0.1"}
    assert duplicate_response.status_code == 409
    assert list_response.status_code == 200
    assert [source["source_id"] for source in list_response.json()] == ["knx-main"]


def test_config_registry_persists_points_in_postgres(
    local_config_registry_postgres_stack,
) -> None:
    settings = ConfigRegistrySettings(
        database_url=local_config_registry_postgres_stack.database_url
    )

    with TestClient(create_app(settings=settings)) as client:
        client.post(
            "/tenants",
            json={"tenant_id": "tenant-points", "name": "Tenant Points"},
        )
        client.post(
            "/tenants/tenant-points/assets",
            json={"asset_id": "asset-a", "name": "Asset A"},
        )
        client.post(
            "/tenants/tenant-points/assets/asset-a/agents",
            json={"agent_id": "agent-a"},
        )
        client.post(
            "/tenants/tenant-points/assets/asset-a/agents/agent-a/sources",
            json={"source_id": "knx-main", "source_type": "knx"},
        )
        create_response = client.post(
            "/tenants/tenant-points/assets/asset-a/agents/agent-a"
            "/sources/knx-main/points",
            json={
                "point_id": "tenant-points|asset-a|knx-main|lights.main",
                "point_key": "lights.main",
                "point_ref": "1/1/1",
                "name": "Main Light",
                "value_type": "boolean",
                "value_model": "1.001",
                "signal_type": "feedback",
                "tags_json": {"room": "hall"},
            },
        )
        duplicate_response = client.post(
            "/tenants/tenant-points/assets/asset-a/agents/agent-a"
            "/sources/knx-main/points",
            json={
                "point_id": "tenant-points|asset-a|knx-main|lights.main",
                "point_key": "lights.secondary",
                "point_ref": "1/1/2",
                "name": "Secondary Light",
                "value_type": "boolean",
                "value_model": "1.001",
                "signal_type": "feedback",
            },
        )

    with TestClient(create_app(settings=settings)) as client:
        list_response = client.get(
            "/tenants/tenant-points/assets/asset-a/agents/agent-a"
            "/sources/knx-main/points"
        )

    assert create_response.status_code == 201
    assert create_response.json()["point_key"] == "lights.main"
    assert create_response.json()["tags_json"] == {"room": "hall"}
    assert duplicate_response.status_code == 409
    assert list_response.status_code == 200
    assert [point["point_key"] for point in list_response.json()] == ["lights.main"]
