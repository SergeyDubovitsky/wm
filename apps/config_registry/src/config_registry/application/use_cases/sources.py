from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any

from config_registry.application.errors import AgentNotFoundError, DuplicateSourceError
from config_registry.application.ports.unit_of_work import UnitOfWork
from config_registry.domain.entities import Source


@dataclass(frozen=True)
class CreateSourceCommand:
    tenant_id: str
    asset_id: str
    agent_id: str
    source_id: str
    source_type: str
    enabled: bool = True
    name: str | None = None
    description: str | None = None
    connection_json: dict[str, Any] = field(default_factory=dict)
    acquisition_defaults_json: dict[str, Any] = field(default_factory=dict)
    publish_defaults_json: dict[str, Any] = field(default_factory=dict)


class CreateSource:
    def __init__(self, unit_of_work: UnitOfWork) -> None:
        self._unit_of_work = unit_of_work

    async def execute(self, command: CreateSourceCommand) -> Source:
        source = Source(
            tenant_id=command.tenant_id,
            asset_id=command.asset_id,
            agent_id=command.agent_id,
            source_id=command.source_id,
            source_type=command.source_type,
            enabled=command.enabled,
            name=command.name,
            description=command.description,
            connection_json=dict(command.connection_json),
            acquisition_defaults_json=dict(command.acquisition_defaults_json),
            publish_defaults_json=dict(command.publish_defaults_json),
        )

        async with self._unit_of_work as unit_of_work:
            if (
                await unit_of_work.agents.get(
                    source.tenant_id,
                    source.asset_id,
                    source.agent_id,
                )
                is None
            ):
                raise AgentNotFoundError(
                    source.tenant_id,
                    source.asset_id,
                    source.agent_id,
                )
            if (
                await unit_of_work.sources.get(
                    source.tenant_id,
                    source.asset_id,
                    source.agent_id,
                    source.source_id,
                )
                is not None
            ):
                raise DuplicateSourceError(
                    source.tenant_id,
                    source.asset_id,
                    source.agent_id,
                    source.source_id,
                )
            await unit_of_work.sources.add(source)
            await unit_of_work.commit()

        return source


class ListSources:
    def __init__(self, unit_of_work: UnitOfWork) -> None:
        self._unit_of_work = unit_of_work

    async def execute(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
    ) -> list[Source]:
        async with self._unit_of_work as unit_of_work:
            if await unit_of_work.agents.get(tenant_id, asset_id, agent_id) is None:
                raise AgentNotFoundError(tenant_id, asset_id, agent_id)
            return await unit_of_work.sources.list_for_agent(
                tenant_id,
                asset_id,
                agent_id,
            )
