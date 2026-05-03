from __future__ import annotations

from dataclasses import dataclass, field
from types import TracebackType

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker

from config_registry.domain.entities import Agent, Asset, Tenant
from config_registry.domain.value_objects import AgentStatus, AssetStatus, TenantStatus
from config_registry.infrastructure.postgres.database import PostgresSessionManager
from config_registry.infrastructure.postgres.models import (
    AgentModel,
    AssetModel,
    TenantModel,
)


def _tenant_to_model(tenant: Tenant) -> TenantModel:
    return TenantModel(
        tenant_id=tenant.tenant_id,
        name=tenant.name,
        status=tenant.status.value,
        created_at=tenant.created_at,
        updated_at=tenant.updated_at,
    )


def _tenant_from_model(model: TenantModel) -> Tenant:
    return Tenant(
        tenant_id=model.tenant_id,
        name=model.name,
        status=TenantStatus(model.status),
        created_at=model.created_at,
        updated_at=model.updated_at,
    )


def _asset_to_model(asset: Asset) -> AssetModel:
    return AssetModel(
        tenant_id=asset.tenant_id,
        asset_id=asset.asset_id,
        name=asset.name,
        description=asset.description,
        status=asset.status.value,
        created_at=asset.created_at,
        updated_at=asset.updated_at,
    )


def _asset_from_model(model: AssetModel) -> Asset:
    return Asset(
        tenant_id=model.tenant_id,
        asset_id=model.asset_id,
        name=model.name,
        description=model.description,
        status=AssetStatus(model.status),
        created_at=model.created_at,
        updated_at=model.updated_at,
    )


def _agent_to_model(agent: Agent) -> AgentModel:
    return AgentModel(
        tenant_id=agent.tenant_id,
        asset_id=agent.asset_id,
        agent_id=agent.agent_id,
        name=agent.name,
        status=agent.status.value,
        bootstrap_hint_json=dict(agent.bootstrap_hint_json),
        created_at=agent.created_at,
        updated_at=agent.updated_at,
    )


def _agent_from_model(model: AgentModel) -> Agent:
    return Agent(
        tenant_id=model.tenant_id,
        asset_id=model.asset_id,
        agent_id=model.agent_id,
        name=model.name,
        status=AgentStatus(model.status),
        bootstrap_hint_json=dict(model.bootstrap_hint_json),
        created_at=model.created_at,
        updated_at=model.updated_at,
    )


@dataclass
class PostgresTenantRepository:
    session: AsyncSession

    async def add(self, tenant: Tenant) -> None:
        self.session.add(_tenant_to_model(tenant))

    async def get(self, tenant_id: str) -> Tenant | None:
        model = await self.session.get(TenantModel, tenant_id)
        return _tenant_from_model(model) if model is not None else None

    async def list(self) -> list[Tenant]:
        result = await self.session.scalars(
            select(TenantModel).order_by(TenantModel.tenant_id)
        )
        return [_tenant_from_model(model) for model in result]


@dataclass
class PostgresAssetRepository:
    session: AsyncSession

    async def add(self, asset: Asset) -> None:
        self.session.add(_asset_to_model(asset))

    async def get(self, tenant_id: str, asset_id: str) -> Asset | None:
        model = await self.session.get(AssetModel, (tenant_id, asset_id))
        return _asset_from_model(model) if model is not None else None

    async def list_for_tenant(self, tenant_id: str) -> list[Asset]:
        result = await self.session.scalars(
            select(AssetModel)
            .where(AssetModel.tenant_id == tenant_id)
            .order_by(AssetModel.asset_id)
        )
        return [_asset_from_model(model) for model in result]


@dataclass
class PostgresAgentRepository:
    session: AsyncSession

    async def add(self, agent: Agent) -> None:
        self.session.add(_agent_to_model(agent))

    async def get(self, tenant_id: str, asset_id: str, agent_id: str) -> Agent | None:
        model = await self.session.get(AgentModel, (tenant_id, asset_id, agent_id))
        return _agent_from_model(model) if model is not None else None

    async def list_for_asset(self, tenant_id: str, asset_id: str) -> list[Agent]:
        result = await self.session.scalars(
            select(AgentModel)
            .where(
                AgentModel.tenant_id == tenant_id,
                AgentModel.asset_id == asset_id,
            )
            .order_by(AgentModel.agent_id)
        )
        return [_agent_from_model(model) for model in result]


@dataclass
class PostgresUnitOfWork:
    session_factory: async_sessionmaker[AsyncSession]
    tenants: PostgresTenantRepository = field(init=False)
    assets: PostgresAssetRepository = field(init=False)
    agents: PostgresAgentRepository = field(init=False)
    _session: AsyncSession = field(init=False)
    _committed: bool = field(default=False, init=False)

    async def __aenter__(self) -> PostgresUnitOfWork:
        self._session = self.session_factory()
        self.tenants = PostgresTenantRepository(self._session)
        self.assets = PostgresAssetRepository(self._session)
        self.agents = PostgresAgentRepository(self._session)
        self._committed = False
        return self

    async def __aexit__(
        self,
        exc_type: type[BaseException] | None,
        exc: BaseException | None,
        traceback: TracebackType | None,
    ) -> None:
        if exc_type is not None or not self._committed:
            await self._session.rollback()
        await self._session.close()

    async def commit(self) -> None:
        await self._session.commit()
        self._committed = True


@dataclass(frozen=True)
class PostgresUnitOfWorkFactory:
    session_manager: PostgresSessionManager

    @classmethod
    def from_url(cls, database_url: str) -> PostgresUnitOfWorkFactory:
        return cls(session_manager=PostgresSessionManager.from_url(database_url))

    def __call__(self) -> PostgresUnitOfWork:
        return PostgresUnitOfWork(self.session_manager.session_factory)

    async def dispose(self) -> None:
        await self.session_manager.dispose()
