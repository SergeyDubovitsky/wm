from __future__ import annotations

from datetime import datetime, timedelta
from types import TracebackType
from typing import Protocol, Self
from uuid import UUID

from wm_config_registry.domain.entities import (
    Agent,
    Asset,
    ConfigOutboxRecord,
    Point,
    RuntimeConfigRevision,
    Source,
    SourceConfigRevision,
    Tenant,
)


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


class SourceRepository(Protocol):
    async def add(self, source: Source) -> None: ...

    async def get(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
    ) -> Source | None: ...

    async def list_for_agent(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
    ) -> list[Source]: ...


class PointRepository(Protocol):
    async def add(self, point: Point) -> None: ...

    async def get_by_id(self, tenant_id: str, point_id: str) -> Point | None: ...

    async def get_by_key(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
        point_key: str,
    ) -> Point | None: ...

    async def get_by_ref(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
        point_ref: str,
    ) -> Point | None: ...

    async def list_for_source(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
    ) -> list[Point]: ...


class RuntimeConfigRevisionRepository(Protocol):
    async def add(self, revision: RuntimeConfigRevision) -> None: ...

    async def get(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        config_revision: str,
    ) -> RuntimeConfigRevision | None: ...


class SourceConfigRevisionRepository(Protocol):
    async def add(self, revision: SourceConfigRevision) -> None: ...

    async def get(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
        source_config_revision: str,
    ) -> SourceConfigRevision | None: ...

    async def list_for_runtime_revision(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        config_revision: str,
    ) -> list[SourceConfigRevision]: ...


class ConfigOutboxRepository(Protocol):
    async def add(self, record: ConfigOutboxRecord) -> None: ...

    async def get_by_idempotency_key(
        self,
        idempotency_key: str,
    ) -> ConfigOutboxRecord | None: ...

    async def list_for_config_revision(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        config_revision: str,
    ) -> list[ConfigOutboxRecord]: ...

    async def reserve_available(
        self,
        *,
        limit: int,
        now: datetime,
        lease_duration: timedelta,
    ) -> list[ConfigOutboxRecord]: ...

    async def mark_published(
        self,
        outbox_id: UUID,
        *,
        now: datetime,
    ) -> ConfigOutboxRecord | None: ...

    async def mark_retry(
        self,
        outbox_id: UUID,
        *,
        now: datetime,
        error: str,
        next_attempt_at: datetime,
    ) -> ConfigOutboxRecord | None: ...

    async def mark_dead_letter(
        self,
        outbox_id: UUID,
        *,
        now: datetime,
        error: str,
    ) -> ConfigOutboxRecord | None: ...

    async def release_expired_leases(
        self,
        *,
        now: datetime,
    ) -> int: ...


class UnitOfWork(Protocol):
    tenants: TenantRepository
    assets: AssetRepository
    agents: AgentRepository
    sources: SourceRepository
    points: PointRepository
    runtime_config_revisions: RuntimeConfigRevisionRepository
    source_config_revisions: SourceConfigRevisionRepository
    config_outbox: ConfigOutboxRepository

    async def __aenter__(self) -> Self: ...

    async def __aexit__(
        self,
        exc_type: type[BaseException] | None,
        exc: BaseException | None,
        traceback: TracebackType | None,
    ) -> None: ...

    async def commit(self) -> None: ...
