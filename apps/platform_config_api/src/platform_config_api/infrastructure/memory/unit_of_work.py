from __future__ import annotations

from dataclasses import dataclass, field
from types import TracebackType

from platform_config_api.domain.entities import Tenant


@dataclass
class InMemoryTenantRepository:
    _items: dict[str, Tenant] = field(default_factory=dict)

    async def add(self, tenant: Tenant) -> None:
        self._items[tenant.tenant_id] = tenant

    async def get(self, tenant_id: str) -> Tenant | None:
        return self._items.get(tenant_id)

    async def list(self) -> list[Tenant]:
        return sorted(self._items.values(), key=lambda tenant: tenant.tenant_id)


@dataclass
class InMemoryUnitOfWork:
    tenants: InMemoryTenantRepository
    committed: bool = False

    async def __aenter__(self) -> InMemoryUnitOfWork:
        return self

    async def __aexit__(
        self,
        exc_type: type[BaseException] | None,
        exc: BaseException | None,
        traceback: TracebackType | None,
    ) -> None:
        return None

    async def commit(self) -> None:
        self.committed = True


@dataclass
class InMemoryUnitOfWorkFactory:
    tenants: InMemoryTenantRepository = field(default_factory=InMemoryTenantRepository)

    def __call__(self) -> InMemoryUnitOfWork:
        return InMemoryUnitOfWork(tenants=self.tenants)
