from __future__ import annotations

from dataclasses import dataclass, field
from types import TracebackType

from config_registry.domain.entities import Agent, Asset, Tenant


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
class InMemoryAssetRepository:
    _items: dict[tuple[str, str], Asset] = field(default_factory=dict)

    async def add(self, asset: Asset) -> None:
        self._items[(asset.tenant_id, asset.asset_id)] = asset

    async def get(self, tenant_id: str, asset_id: str) -> Asset | None:
        return self._items.get((tenant_id, asset_id))

    async def list_for_tenant(self, tenant_id: str) -> list[Asset]:
        return sorted(
            (
                asset
                for (asset_tenant_id, _), asset in self._items.items()
                if asset_tenant_id == tenant_id
            ),
            key=lambda asset: asset.asset_id,
        )


@dataclass
class InMemoryAgentRepository:
    _items: dict[tuple[str, str, str], Agent] = field(default_factory=dict)

    async def add(self, agent: Agent) -> None:
        self._items[(agent.tenant_id, agent.asset_id, agent.agent_id)] = agent

    async def get(self, tenant_id: str, asset_id: str, agent_id: str) -> Agent | None:
        return self._items.get((tenant_id, asset_id, agent_id))

    async def list_for_asset(self, tenant_id: str, asset_id: str) -> list[Agent]:
        return sorted(
            (
                agent
                for (agent_tenant_id, agent_asset_id, _), agent in self._items.items()
                if agent_tenant_id == tenant_id and agent_asset_id == asset_id
            ),
            key=lambda agent: agent.agent_id,
        )


@dataclass
class InMemoryUnitOfWork:
    tenants: InMemoryTenantRepository
    assets: InMemoryAssetRepository
    agents: InMemoryAgentRepository
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
    assets: InMemoryAssetRepository = field(default_factory=InMemoryAssetRepository)
    agents: InMemoryAgentRepository = field(default_factory=InMemoryAgentRepository)

    def __call__(self) -> InMemoryUnitOfWork:
        return InMemoryUnitOfWork(
            tenants=self.tenants,
            assets=self.assets,
            agents=self.agents,
        )
