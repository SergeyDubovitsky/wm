from __future__ import annotations

from dataclasses import dataclass, field
from types import TracebackType

from config_registry.domain.entities import Agent, Asset, Point, Source, Tenant


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
class InMemorySourceRepository:
    _items: dict[tuple[str, str, str, str], Source] = field(default_factory=dict)

    async def add(self, source: Source) -> None:
        self._items[
            (
                source.tenant_id,
                source.asset_id,
                source.agent_id,
                source.source_id,
            )
        ] = source

    async def get(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
    ) -> Source | None:
        return self._items.get((tenant_id, asset_id, agent_id, source_id))

    async def list_for_agent(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
    ) -> list[Source]:
        return sorted(
            (
                source
                for (
                    source_tenant_id,
                    source_asset_id,
                    source_agent_id,
                    _,
                ), source in self._items.items()
                if source_tenant_id == tenant_id
                and source_asset_id == asset_id
                and source_agent_id == agent_id
            ),
            key=lambda source: source.source_id,
        )


@dataclass
class InMemoryPointRepository:
    _items: dict[tuple[str, str], Point] = field(default_factory=dict)

    async def add(self, point: Point) -> None:
        self._items[(point.tenant_id, point.point_id)] = point

    async def get_by_id(self, tenant_id: str, point_id: str) -> Point | None:
        return self._items.get((tenant_id, point_id))

    async def get_by_key(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
        point_key: str,
    ) -> Point | None:
        for point in self._items.values():
            if (
                point.tenant_id == tenant_id
                and point.asset_id == asset_id
                and point.agent_id == agent_id
                and point.source_id == source_id
                and point.point_key == point_key
            ):
                return point
        return None

    async def get_by_ref(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
        point_ref: str,
    ) -> Point | None:
        for point in self._items.values():
            if (
                point.tenant_id == tenant_id
                and point.asset_id == asset_id
                and point.agent_id == agent_id
                and point.source_id == source_id
                and point.point_ref == point_ref
            ):
                return point
        return None

    async def list_for_source(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
    ) -> list[Point]:
        return sorted(
            (
                point
                for point in self._items.values()
                if point.tenant_id == tenant_id
                and point.asset_id == asset_id
                and point.agent_id == agent_id
                and point.source_id == source_id
            ),
            key=lambda point: point.point_key,
        )


@dataclass
class InMemoryUnitOfWork:
    tenants: InMemoryTenantRepository
    assets: InMemoryAssetRepository
    agents: InMemoryAgentRepository
    sources: InMemorySourceRepository
    points: InMemoryPointRepository
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
    sources: InMemorySourceRepository = field(default_factory=InMemorySourceRepository)
    points: InMemoryPointRepository = field(default_factory=InMemoryPointRepository)

    def __call__(self) -> InMemoryUnitOfWork:
        return InMemoryUnitOfWork(
            tenants=self.tenants,
            assets=self.assets,
            agents=self.agents,
            sources=self.sources,
            points=self.points,
        )
