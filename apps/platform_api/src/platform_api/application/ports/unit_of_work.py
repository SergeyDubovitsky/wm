from __future__ import annotations

from types import TracebackType
from typing import Protocol, Self

from platform_api.domain.entities import Tenant


class TenantRepository(Protocol):
    async def add(self, tenant: Tenant) -> None: ...

    async def get(self, tenant_id: str) -> Tenant | None: ...

    async def list(self) -> list[Tenant]: ...


class UnitOfWork(Protocol):
    tenants: TenantRepository

    async def __aenter__(self) -> Self: ...

    async def __aexit__(
        self,
        exc_type: type[BaseException] | None,
        exc: BaseException | None,
        traceback: TracebackType | None,
    ) -> None: ...

    async def commit(self) -> None: ...
