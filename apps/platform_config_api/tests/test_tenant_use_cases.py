from __future__ import annotations

import asyncio

import pytest

from platform_config_api.application.errors import DuplicateTenantError
from platform_config_api.application.use_cases.tenants import (
    CreateTenant,
    CreateTenantCommand,
    ListTenants,
)
from platform_config_api.domain.value_objects import DomainValidationError
from platform_config_api.infrastructure.memory.unit_of_work import (
    InMemoryUnitOfWorkFactory,
)


def test_create_tenant_persists_entity_and_commits_unit_of_work() -> None:
    async def run() -> None:
        unit_of_work_factory = InMemoryUnitOfWorkFactory()

        tenant = await CreateTenant(unit_of_work_factory()).execute(
            CreateTenantCommand(tenant_id="tenant-a", name="Tenant A")
        )
        tenants = await ListTenants(unit_of_work_factory()).execute()

        assert tenant.tenant_id == "tenant-a"
        assert tenants == [tenant]

    asyncio.run(run())


def test_create_tenant_rejects_duplicate_id() -> None:
    async def run() -> None:
        unit_of_work_factory = InMemoryUnitOfWorkFactory()
        command = CreateTenantCommand(tenant_id="tenant-a", name="Tenant A")

        await CreateTenant(unit_of_work_factory()).execute(command)
        with pytest.raises(DuplicateTenantError):
            await CreateTenant(unit_of_work_factory()).execute(command)

    asyncio.run(run())


def test_create_tenant_rejects_blank_name() -> None:
    async def run() -> None:
        unit_of_work_factory = InMemoryUnitOfWorkFactory()

        with pytest.raises(DomainValidationError):
            await CreateTenant(unit_of_work_factory()).execute(
                CreateTenantCommand(tenant_id="tenant-a", name=" ")
            )

    asyncio.run(run())
