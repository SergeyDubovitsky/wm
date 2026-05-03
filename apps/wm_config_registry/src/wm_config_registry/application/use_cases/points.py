from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any

from wm_config_registry.application.errors import (
    DuplicatePointError,
    SourceNotFoundError,
)
from wm_config_registry.application.ports.unit_of_work import UnitOfWork
from wm_config_registry.domain.entities import Point
from wm_config_registry.domain.value_objects import SignalType, ValueType


@dataclass(frozen=True)
class CreatePointCommand:
    tenant_id: str
    asset_id: str
    agent_id: str
    source_id: str
    point_id: str
    point_key: str
    point_ref: str
    name: str
    value_type: ValueType
    value_model: str
    signal_type: SignalType
    description: str | None = None
    unit: str | None = None
    enabled: bool = True
    acquisition_json: dict[str, Any] = field(default_factory=dict)
    publish_json: dict[str, Any] = field(default_factory=dict)
    tags_json: dict[str, Any] = field(default_factory=dict)


class CreatePoint:
    def __init__(self, unit_of_work: UnitOfWork) -> None:
        self._unit_of_work = unit_of_work

    async def execute(self, command: CreatePointCommand) -> Point:
        point = Point(
            tenant_id=command.tenant_id,
            asset_id=command.asset_id,
            agent_id=command.agent_id,
            source_id=command.source_id,
            point_id=command.point_id,
            point_key=command.point_key,
            point_ref=command.point_ref,
            name=command.name,
            value_type=command.value_type,
            value_model=command.value_model,
            signal_type=command.signal_type,
            description=command.description,
            unit=command.unit,
            enabled=command.enabled,
            acquisition_json=dict(command.acquisition_json),
            publish_json=dict(command.publish_json),
            tags_json=dict(command.tags_json),
        )

        async with self._unit_of_work as unit_of_work:
            if (
                await unit_of_work.sources.get(
                    point.tenant_id,
                    point.asset_id,
                    point.agent_id,
                    point.source_id,
                )
                is None
            ):
                raise SourceNotFoundError(
                    point.tenant_id,
                    point.asset_id,
                    point.agent_id,
                    point.source_id,
                )
            if await unit_of_work.points.get_by_id(point.tenant_id, point.point_id):
                raise DuplicatePointError(point.tenant_id, "point_id", point.point_id)
            if (
                await unit_of_work.points.get_by_key(
                    point.tenant_id,
                    point.asset_id,
                    point.agent_id,
                    point.source_id,
                    point.point_key,
                )
                is not None
            ):
                raise DuplicatePointError(
                    point.tenant_id,
                    "point_key",
                    point.point_key,
                )
            if (
                await unit_of_work.points.get_by_ref(
                    point.tenant_id,
                    point.asset_id,
                    point.agent_id,
                    point.source_id,
                    point.point_ref,
                )
                is not None
            ):
                raise DuplicatePointError(
                    point.tenant_id,
                    "point_ref",
                    point.point_ref,
                )
            await unit_of_work.points.add(point)
            await unit_of_work.commit()

        return point


class ListPoints:
    def __init__(self, unit_of_work: UnitOfWork) -> None:
        self._unit_of_work = unit_of_work

    async def execute(
        self,
        tenant_id: str,
        asset_id: str,
        agent_id: str,
        source_id: str,
    ) -> list[Point]:
        async with self._unit_of_work as unit_of_work:
            if (
                await unit_of_work.sources.get(
                    tenant_id,
                    asset_id,
                    agent_id,
                    source_id,
                )
                is None
            ):
                raise SourceNotFoundError(tenant_id, asset_id, agent_id, source_id)
            return await unit_of_work.points.list_for_source(
                tenant_id,
                asset_id,
                agent_id,
                source_id,
            )
