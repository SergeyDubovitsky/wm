from __future__ import annotations

from fastapi.testclient import TestClient

from config_registry.main import create_app


def test_health_and_ready_endpoints() -> None:
    client = TestClient(create_app())

    assert client.get("/health").json() == {"status": "ok"}
    assert client.get("/ready").json() == {"status": "ready"}


def test_create_and_list_tenants() -> None:
    client = TestClient(create_app())

    create_response = client.post(
        "/tenants",
        json={"tenant_id": "tenant-a", "name": "Tenant A"},
    )
    list_response = client.get("/tenants")

    assert create_response.status_code == 201
    assert create_response.json()["tenant_id"] == "tenant-a"
    assert list_response.status_code == 200
    assert [tenant["tenant_id"] for tenant in list_response.json()] == ["tenant-a"]


def test_create_and_list_assets() -> None:
    client = TestClient(create_app())
    client.post("/tenants", json={"tenant_id": "tenant-a", "name": "Tenant A"})

    create_response = client.post(
        "/tenants/tenant-a/assets",
        json={
            "asset_id": "asset-a",
            "name": "Asset A",
            "description": "Primary monitored asset",
        },
    )
    list_response = client.get("/tenants/tenant-a/assets")

    assert create_response.status_code == 201
    assert create_response.json()["asset_id"] == "asset-a"
    assert create_response.json()["description"] == "Primary monitored asset"
    assert list_response.status_code == 200
    assert [asset["asset_id"] for asset in list_response.json()] == ["asset-a"]


def test_create_asset_rejects_missing_tenant() -> None:
    client = TestClient(create_app())

    response = client.post(
        "/tenants/tenant-a/assets",
        json={"asset_id": "asset-a", "name": "Asset A"},
    )

    assert response.status_code == 404


def test_create_asset_rejects_duplicate_id() -> None:
    client = TestClient(create_app())
    client.post("/tenants", json={"tenant_id": "tenant-a", "name": "Tenant A"})

    first_response = client.post(
        "/tenants/tenant-a/assets",
        json={"asset_id": "asset-a", "name": "Asset A"},
    )
    second_response = client.post(
        "/tenants/tenant-a/assets",
        json={"asset_id": "asset-a", "name": "Asset A"},
    )

    assert first_response.status_code == 201
    assert second_response.status_code == 409


def test_create_and_list_agents() -> None:
    client = TestClient(create_app())
    client.post("/tenants", json={"tenant_id": "tenant-a", "name": "Tenant A"})
    client.post(
        "/tenants/tenant-a/assets",
        json={"asset_id": "asset-a", "name": "Asset A"},
    )

    create_response = client.post(
        "/tenants/tenant-a/assets/asset-a/agents",
        json={
            "agent_id": "agent-a",
            "name": "Agent A",
            "bootstrap_hint_json": {"mqtt_profile": "local"},
        },
    )
    list_response = client.get("/tenants/tenant-a/assets/asset-a/agents")

    assert create_response.status_code == 201
    assert create_response.json()["agent_id"] == "agent-a"
    assert create_response.json()["bootstrap_hint_json"] == {"mqtt_profile": "local"}
    assert list_response.status_code == 200
    assert [agent["agent_id"] for agent in list_response.json()] == ["agent-a"]


def test_create_agent_rejects_missing_asset() -> None:
    client = TestClient(create_app())

    response = client.post(
        "/tenants/tenant-a/assets/asset-a/agents",
        json={"agent_id": "agent-a"},
    )

    assert response.status_code == 404


def test_create_agent_rejects_duplicate_id() -> None:
    client = TestClient(create_app())
    client.post("/tenants", json={"tenant_id": "tenant-a", "name": "Tenant A"})
    client.post(
        "/tenants/tenant-a/assets",
        json={"asset_id": "asset-a", "name": "Asset A"},
    )

    first_response = client.post(
        "/tenants/tenant-a/assets/asset-a/agents",
        json={"agent_id": "agent-a"},
    )
    second_response = client.post(
        "/tenants/tenant-a/assets/asset-a/agents",
        json={"agent_id": "agent-a"},
    )

    assert first_response.status_code == 201
    assert second_response.status_code == 409


def test_create_and_list_sources() -> None:
    client = TestClient(create_app())
    client.post("/tenants", json={"tenant_id": "tenant-a", "name": "Tenant A"})
    client.post(
        "/tenants/tenant-a/assets",
        json={"asset_id": "asset-a", "name": "Asset A"},
    )
    client.post(
        "/tenants/tenant-a/assets/asset-a/agents",
        json={"agent_id": "agent-a"},
    )

    create_response = client.post(
        "/tenants/tenant-a/assets/asset-a/agents/agent-a/sources",
        json={
            "source_id": "knx-main",
            "source_type": "knx",
            "name": "Main KNX Line",
            "connection_json": {"gateway": "127.0.0.1"},
        },
    )
    list_response = client.get(
        "/tenants/tenant-a/assets/asset-a/agents/agent-a/sources"
    )

    assert create_response.status_code == 201
    assert create_response.json()["source_id"] == "knx-main"
    assert create_response.json()["connection_json"] == {"gateway": "127.0.0.1"}
    assert list_response.status_code == 200
    assert [source["source_id"] for source in list_response.json()] == ["knx-main"]


def test_create_source_rejects_missing_agent() -> None:
    client = TestClient(create_app())

    response = client.post(
        "/tenants/tenant-a/assets/asset-a/agents/agent-a/sources",
        json={"source_id": "knx-main", "source_type": "knx"},
    )

    assert response.status_code == 404


def test_create_source_rejects_duplicate_id() -> None:
    client = TestClient(create_app())
    client.post("/tenants", json={"tenant_id": "tenant-a", "name": "Tenant A"})
    client.post(
        "/tenants/tenant-a/assets",
        json={"asset_id": "asset-a", "name": "Asset A"},
    )
    client.post(
        "/tenants/tenant-a/assets/asset-a/agents",
        json={"agent_id": "agent-a"},
    )

    first_response = client.post(
        "/tenants/tenant-a/assets/asset-a/agents/agent-a/sources",
        json={"source_id": "knx-main", "source_type": "knx"},
    )
    second_response = client.post(
        "/tenants/tenant-a/assets/asset-a/agents/agent-a/sources",
        json={"source_id": "knx-main", "source_type": "knx"},
    )

    assert first_response.status_code == 201
    assert second_response.status_code == 409


def test_create_and_list_points() -> None:
    client = TestClient(create_app())
    client.post("/tenants", json={"tenant_id": "tenant-a", "name": "Tenant A"})
    client.post(
        "/tenants/tenant-a/assets",
        json={"asset_id": "asset-a", "name": "Asset A"},
    )
    client.post(
        "/tenants/tenant-a/assets/asset-a/agents",
        json={"agent_id": "agent-a"},
    )
    client.post(
        "/tenants/tenant-a/assets/asset-a/agents/agent-a/sources",
        json={"source_id": "knx-main", "source_type": "knx"},
    )

    create_response = client.post(
        "/tenants/tenant-a/assets/asset-a/agents/agent-a/sources/knx-main/points",
        json={
            "point_id": "tenant-a|asset-a|knx-main|lights.main",
            "point_key": "lights.main",
            "point_ref": "1/1/1",
            "name": "Main Light",
            "value_type": "boolean",
            "value_model": "1.001",
            "signal_type": "feedback",
            "tags_json": {"room": "hall"},
        },
    )
    list_response = client.get(
        "/tenants/tenant-a/assets/asset-a/agents/agent-a"
        "/sources/knx-main/points"
    )

    assert create_response.status_code == 201
    assert create_response.json()["point_key"] == "lights.main"
    assert create_response.json()["tags_json"] == {"room": "hall"}
    assert list_response.status_code == 200
    assert [point["point_key"] for point in list_response.json()] == ["lights.main"]


def test_create_point_rejects_missing_source() -> None:
    client = TestClient(create_app())

    response = client.post(
        "/tenants/tenant-a/assets/asset-a/agents/agent-a/sources/knx-main/points",
        json={
            "point_id": "tenant-a|asset-a|knx-main|lights.main",
            "point_key": "lights.main",
            "point_ref": "1/1/1",
            "name": "Main Light",
            "value_type": "boolean",
            "value_model": "1.001",
            "signal_type": "feedback",
        },
    )

    assert response.status_code == 404


def test_create_point_rejects_duplicate_point_id() -> None:
    client = TestClient(create_app())
    client.post("/tenants", json={"tenant_id": "tenant-a", "name": "Tenant A"})
    client.post(
        "/tenants/tenant-a/assets",
        json={"asset_id": "asset-a", "name": "Asset A"},
    )
    client.post(
        "/tenants/tenant-a/assets/asset-a/agents",
        json={"agent_id": "agent-a"},
    )
    client.post(
        "/tenants/tenant-a/assets/asset-a/agents/agent-a/sources",
        json={"source_id": "knx-main", "source_type": "knx"},
    )
    payload = {
        "point_id": "tenant-a|asset-a|knx-main|lights.main",
        "point_key": "lights.main",
        "point_ref": "1/1/1",
        "name": "Main Light",
        "value_type": "boolean",
        "value_model": "1.001",
        "signal_type": "feedback",
    }

    first_response = client.post(
        "/tenants/tenant-a/assets/asset-a/agents/agent-a/sources/knx-main/points",
        json=payload,
    )
    second_response = client.post(
        "/tenants/tenant-a/assets/asset-a/agents/agent-a/sources/knx-main/points",
        json={**payload, "point_key": "lights.secondary", "point_ref": "1/1/2"},
    )

    assert first_response.status_code == 201
    assert second_response.status_code == 409


def test_create_agent_rejects_domain_invalid_payload() -> None:
    client = TestClient(create_app())
    client.post("/tenants", json={"tenant_id": "tenant-a", "name": "Tenant A"})
    client.post(
        "/tenants/tenant-a/assets",
        json={"asset_id": "asset-a", "name": "Asset A"},
    )

    response = client.post(
        "/tenants/tenant-a/assets/asset-a/agents",
        json={"agent_id": "Agent A"},
    )

    assert response.status_code == 422


def test_list_agents_rejects_missing_asset() -> None:
    client = TestClient(create_app())

    response = client.get("/tenants/tenant-a/assets/asset-a/agents")

    assert response.status_code == 404


def test_create_asset_rejects_domain_invalid_payload() -> None:
    client = TestClient(create_app())
    client.post("/tenants", json={"tenant_id": "tenant-a", "name": "Tenant A"})

    response = client.post(
        "/tenants/tenant-a/assets",
        json={"asset_id": "Asset A", "name": "Asset A"},
    )

    assert response.status_code == 422


def test_list_assets_rejects_missing_tenant() -> None:
    client = TestClient(create_app())

    response = client.get("/tenants/tenant-a/assets")

    assert response.status_code == 404


def test_create_tenant_rejects_duplicate_id() -> None:
    client = TestClient(create_app())

    first_response = client.post(
        "/tenants",
        json={"tenant_id": "tenant-a", "name": "Tenant A"},
    )
    second_response = client.post(
        "/tenants",
        json={"tenant_id": "tenant-a", "name": "Tenant A"},
    )

    assert first_response.status_code == 201
    assert second_response.status_code == 409


def test_create_tenant_rejects_domain_invalid_payload() -> None:
    client = TestClient(create_app())

    response = client.post(
        "/tenants",
        json={"tenant_id": "tenant-a", "name": " "},
    )

    assert response.status_code == 422
