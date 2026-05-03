from __future__ import annotations

from dataclasses import dataclass

from wm_config_registry.application.errors import DuplicateTenantError
from wm_config_registry.application.ports.unit_of_work import UnitOfWork
from wm_config_registry.domain.entities import Tenant


@dataclass(frozen=True)
class CreateTenantCommand:
    tenant_id: str
    name: str


class CreateTenant:
    def __init__(self, unit_of_work: UnitOfWork) -> None:
        self._unit_of_work = unit_of_work

    async def execute(self, command: CreateTenantCommand) -> Tenant:
        tenant = Tenant(tenant_id=command.tenant_id, name=command.name)

        async with self._unit_of_work as unit_of_work:
            if await unit_of_work.tenants.get(tenant.tenant_id) is not None:
                raise DuplicateTenantError(tenant.tenant_id)
            await unit_of_work.tenants.add(tenant)
            await unit_of_work.commit()

        return tenant


class ListTenants:
    def __init__(self, unit_of_work: UnitOfWork) -> None:
        self._unit_of_work = unit_of_work

    async def execute(self) -> list[Tenant]:
        async with self._unit_of_work as unit_of_work:
            return await unit_of_work.tenants.list()
