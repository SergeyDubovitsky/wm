from __future__ import annotations

from types import TracebackType
from typing import Protocol, Self

from config_registry.domain.entities import Agent, Asset, Tenant


class TenantRepository(Protocol):
    async def add(self, tenant: Tenant) -> None: ...

    async def get(self, tenant_id: str) -> Tenant | None: ...

    async def list(self) -> list[Tenant]: ...


class AssetRepository(Protocol):
    async def add(self, asset: Asset) -> None: ...

    async def get(self, tenant_id: str, asset_id: str) -> Asset | None: ...

    async def list_for_tenant(self, tenant_id: str) -> list[Asset]: ...


class AgentRepository(Protocol):
    async def add(self, agent: Agent) -> None: ...

    async def get(self, tenant_id: str, asset_id: str, agent_id: str) -> Agent | None: ...

    async def list_for_asset(self, tenant_id: str, asset_id: str) -> list[Agent]: ...


class UnitOfWork(Protocol):
    tenants: TenantRepository
    assets: AssetRepository
    agents: AgentRepository

    async def __aenter__(self) -> Self: ...

    async def __aexit__(
        self,
        exc_type: type[BaseException] | None,
        exc: BaseException | None,
        traceback: TracebackType | None,
    ) -> None: ...

    async def commit(self) -> None: ...
