from __future__ import annotations

from dataclasses import dataclass, field
from types import TracebackType

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker

from config_registry.domain.entities import (
    Agent,
    Asset,
    Point,
    RuntimeConfigRevision,
    Source,
    SourceConfigRevision,
    Tenant,
)
from config_registry.domain.value_objects import (
    AgentStatus,
    AssetStatus,
    ConfigRevisionStatus,
    SignalType,
    TenantStatus,
    ValueType,
)
from config_registry.infrastructure.postgres.database import PostgresSessionManager
from config_registry.infrastructure.postgres.models import (
    AgentModel,
    AssetModel,
    PointModel,
    RuntimeConfigRevisionModel,
    SourceConfigRevisionModel,
    SourceModel,
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


def _source_to_model(source: Source) -> SourceModel:
    return SourceModel(
        tenant_id=source.tenant_id,
        asset_id=source.asset_id,
        agent_id=source.agent_id,
        source_id=source.source_id,
        source_type=source.source_type,
        enabled=source.enabled,
        name=source.name,
        description=source.description,
        connection_json=dict(source.connection_json),
        acquisition_defaults_json=dict(source.acquisition_defaults_json),
        publish_defaults_json=dict(source.publish_defaults_json),
        created_at=source.created_at,
        updated_at=source.updated_at,
    )


def _source_from_model(model: SourceModel) -> Source:
    return Source(
        tenant_id=model.tenant_id,
        asset_id=model.asset_id,
        agent_id=model.agent_id,
        source_id=model.source_id,
        source_type=model.source_type,
        enabled=model.enabled,
        name=model.name,
        description=model.description,
        connection_json=dict(model.connection_json),
        acquisition_defaults_json=dict(model.acquisition_defaults_json),
        publish_defaults_json=dict(model.publish_defaults_json),
        created_at=model.created_at,
        updated_at=model.updated_at,
    )


def _point_to_model(point: Point) -> PointModel:
    return PointModel(
        tenant_id=point.tenant_id,
        asset_id=point.asset_id,
        agent_id=point.agent_id,
        source_id=point.source_id,
        point_id=point.point_id,
        point_key=point.point_key,
        point_ref=point.point_ref,
        name=point.name,
        description=point.description,
        value_type=point.value_type.value,
        value_model=point.value_model,
        signal_type=point.signal_type.value,
        unit=point.unit,
        enabled=point.enabled,
        acquisition_json=dict(point.acquisition_json),
        publish_json=dict(point.publish_json),
        tags_json=dict(point.tags_json),
        created_at=point.created_at,
        updated_at=point.updated_at,
    )


def _point_from_model(model: PointModel) -> Point:
    return Point(
        tenant_id=model.tenant_id,
        asset_id=model.asset_id,
        agent_id=model.agent_id,
        source_id=model.source_id,
        point_id=model.point_id,
        point_key=model.point_key,
        point_ref=model.point_ref,
        name=model.name,
        description=model.description,
        value_type=ValueType(model.value_type),
        value_model=model.value_model,
        signal_type=SignalType(model.signal_type),
        unit=model.unit,
        enabled=model.enabled,
        acquisition_json=dict(model.acquisition_json),
        publish_json=dict(model.publish_json),
        tags_json=dict(model.tags_json),
        created_at=model.created_at,
        updated_at=model.updated_at,
    )


def _runtime_config_revision_to_model(
    revision: RuntimeConfigRevision,
) -> RuntimeConfigRevisionModel:
    return RuntimeConfigRevisionModel(
        tenant_id=revision.tenant_id,
        asset_id=revision.asset_id,
        agent_id=revision.agent_id,
        config_revision=revision.config_revision,
        status=revision.status.value,
        issued_at=revision.issued_at,
        runtime_payload_json=dict(revision.runtime_payload_json),
        created_at=revision.created_at,
    )


def _runtime_config_revision_from_model(
    model: RuntimeConfigRevisionModel,
) -> RuntimeConfigRevision:
    return RuntimeConfigRevision(
        tenant_id=model.tenant_id,
        asset_id=model.asset_id,
        agent_id=model.agent_id,
        config_revision=model.config_revision,
        status=ConfigRevisionStatus(model.status),
        issued_at=model.issued_at,
        runtime_payload_json=dict(model.runtime_payload_json),
        created_at=model.created_at,
    )


def _source_config_revision_to_model(
    revision: SourceConfigRevision,
) -> SourceConfigRevisionModel:
    return SourceConfigRevisionModel(
        tenant_id=revision.tenant_id,
        asset_id=revision.asset_id,
        agent_id=revision.agent_id,
        source_id=revision.source_id,
        source_config_revision=revision.source_config_revision,
        config_revision=revision.config_revision,
        status=revision.status.value,
        issued_at=revision.issued_at,
        source_payload_json=dict(revision.source_payload_json),
        created_at=revision.created_at,
    )


def _source_config_revision_from_model(
    model: SourceConfigRevisionModel,
) -> SourceConfigRevision:
    return SourceConfigRevision(
        tenant_id=model.tenant_id,
        asset_id=model.asset_id,
        agent_id=model.agent_id,
        source_id=model.source_id,
        source_config_revision=model.source_config_revision,
        config_revision=model.config_revision,
        status=ConfigRevisionStatus(model.status),
        issued_at=model.issued_at,
        source_payload_json=dict(model.source_payload_json),
        created_at=model.created_at,
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
class PostgresSourceRepository:
    session: AsyncSession

    async def add(self, source: Source) -> None:
        self.session.add(_source_to_model(source))

    async def get(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
    ) -> Source | None:
        model = await self.session.get(
            SourceModel,
            (tenant_id, asset_id, agent_id, source_id),
        )
        return _source_from_model(model) if model is not None else None

    async def list_for_agent(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
    ) -> list[Source]:
        result = await self.session.scalars(
            select(SourceModel)
            .where(
                SourceModel.tenant_id == tenant_id,
                SourceModel.asset_id == asset_id,
                SourceModel.agent_id == agent_id,
            )
            .order_by(SourceModel.source_id)
        )
        return [_source_from_model(model) for model in result]


@dataclass
class PostgresPointRepository:
    session: AsyncSession

    async def add(self, point: Point) -> None:
        self.session.add(_point_to_model(point))

    async def get_by_id(self, tenant_id: str, point_id: str) -> Point | None:
        model = await self.session.get(PointModel, (tenant_id, point_id))
        return _point_from_model(model) if model is not None else None

    async def get_by_key(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
        point_key: str,
    ) -> Point | None:
        result = await self.session.scalars(
            select(PointModel).where(
                PointModel.tenant_id == tenant_id,
                PointModel.asset_id == asset_id,
                PointModel.agent_id == agent_id,
                PointModel.source_id == source_id,
                PointModel.point_key == point_key,
            )
        )
        model = result.first()
        return _point_from_model(model) if model is not None else None

    async def get_by_ref(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
        point_ref: str,
    ) -> Point | None:
        result = await self.session.scalars(
            select(PointModel).where(
                PointModel.tenant_id == tenant_id,
                PointModel.asset_id == asset_id,
                PointModel.agent_id == agent_id,
                PointModel.source_id == source_id,
                PointModel.point_ref == point_ref,
            )
        )
        model = result.first()
        return _point_from_model(model) if model is not None else None

    async def list_for_source(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
    ) -> list[Point]:
        result = await self.session.scalars(
            select(PointModel)
            .where(
                PointModel.tenant_id == tenant_id,
                PointModel.asset_id == asset_id,
                PointModel.agent_id == agent_id,
                PointModel.source_id == source_id,
            )
            .order_by(PointModel.point_key)
        )
        return [_point_from_model(model) for model in result]


@dataclass
class PostgresRuntimeConfigRevisionRepository:
    session: AsyncSession

    async def add(self, revision: RuntimeConfigRevision) -> None:
        self.session.add(_runtime_config_revision_to_model(revision))

    async def get(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        config_revision: str,
    ) -> RuntimeConfigRevision | None:
        model = await self.session.get(
            RuntimeConfigRevisionModel,
            (tenant_id, asset_id, agent_id, config_revision),
        )
        return (
            _runtime_config_revision_from_model(model)
            if model is not None
            else None
        )


@dataclass
class PostgresSourceConfigRevisionRepository:
    session: AsyncSession

    async def add(self, revision: SourceConfigRevision) -> None:
        self.session.add(_source_config_revision_to_model(revision))

    async def get(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
        source_config_revision: str,
    ) -> SourceConfigRevision | None:
        model = await self.session.get(
            SourceConfigRevisionModel,
            (tenant_id, asset_id, agent_id, source_id, source_config_revision),
        )
        return (
            _source_config_revision_from_model(model)
            if model is not None
            else None
        )

    async def list_for_runtime_revision(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        config_revision: str,
    ) -> list[SourceConfigRevision]:
        result = await self.session.scalars(
            select(SourceConfigRevisionModel)
            .where(
                SourceConfigRevisionModel.tenant_id == tenant_id,
                SourceConfigRevisionModel.asset_id == asset_id,
                SourceConfigRevisionModel.agent_id == agent_id,
                SourceConfigRevisionModel.config_revision == config_revision,
            )
            .order_by(SourceConfigRevisionModel.source_id)
        )
        return [_source_config_revision_from_model(model) for model in result]


@dataclass
class PostgresUnitOfWork:
    session_factory: async_sessionmaker[AsyncSession]
    tenants: PostgresTenantRepository = field(init=False)
    assets: PostgresAssetRepository = field(init=False)
    agents: PostgresAgentRepository = field(init=False)
    sources: PostgresSourceRepository = field(init=False)
    points: PostgresPointRepository = field(init=False)
    runtime_config_revisions: PostgresRuntimeConfigRevisionRepository = field(
        init=False
    )
    source_config_revisions: PostgresSourceConfigRevisionRepository = field(
        init=False
    )
    _session: AsyncSession = field(init=False)
    _committed: bool = field(default=False, init=False)

    async def __aenter__(self) -> PostgresUnitOfWork:
        self._session = self.session_factory()
        self.tenants = PostgresTenantRepository(self._session)
        self.assets = PostgresAssetRepository(self._session)
        self.agents = PostgresAgentRepository(self._session)
        self.sources = PostgresSourceRepository(self._session)
        self.points = PostgresPointRepository(self._session)
        self.runtime_config_revisions = PostgresRuntimeConfigRevisionRepository(
            self._session
        )
        self.source_config_revisions = PostgresSourceConfigRevisionRepository(
            self._session
        )
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
