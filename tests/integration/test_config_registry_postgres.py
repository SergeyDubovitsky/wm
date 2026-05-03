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
