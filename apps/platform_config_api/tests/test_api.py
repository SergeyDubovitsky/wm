from __future__ import annotations

from fastapi.testclient import TestClient

from platform_config_api.main import create_app


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
