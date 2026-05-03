from __future__ import annotations

from dataclasses import dataclass
from datetime import UTC, datetime
from typing import Any

from config_registry.application.errors import (
    AgentNotFoundError,
    ConfigRenderError,
    DuplicateConfigRevisionError,
)
from config_registry.application.ports.config_validation import ConfigPayloadValidator
from config_registry.application.ports.unit_of_work import UnitOfWork
from config_registry.domain.entities import (
    Point,
    RuntimeConfigRevision,
    Source,
    SourceConfigRevision,
)


@dataclass(frozen=True)
class RenderAgentConfigCommand:
    tenant_id: str
    asset_id: str
    agent_id: str
    config_revision: str
    issued_at: datetime
    source_config_revisions: dict[str, str] | None = None


@dataclass(frozen=True)
class RenderedSourceConfig:
    source_id: str
    source_config_revision: str
    payload: dict[str, Any]


@dataclass(frozen=True)
class RenderedAgentConfig:
    runtime_payload: dict[str, Any]
    source_payloads: tuple[RenderedSourceConfig, ...]


class RenderAgentConfig:
    def __init__(
        self,
        unit_of_work: UnitOfWork,
        validator: ConfigPayloadValidator,
    ) -> None:
        self._unit_of_work = unit_of_work
        self._validator = validator

    async def execute(self, command: RenderAgentConfigCommand) -> RenderedAgentConfig:
        async with self._unit_of_work as unit_of_work:
            agent = await unit_of_work.agents.get(
                command.tenant_id,
                command.asset_id,
                command.agent_id,
            )
            if agent is None:
                raise AgentNotFoundError(
                    command.tenant_id,
                    command.asset_id,
                    command.agent_id,
                )
            sources = await unit_of_work.sources.list_for_agent(
                command.tenant_id,
                command.asset_id,
                command.agent_id,
            )
            if not sources:
                raise ConfigRenderError(
                    f"Agent {command.agent_id!r} has no sources to render"
                )

            rendered_sources: list[RenderedSourceConfig] = []
            for source in sources:
                points = await unit_of_work.points.list_for_source(
                    command.tenant_id,
                    command.asset_id,
                    command.agent_id,
                    source.source_id,
                )
                rendered_source = self._render_source(command, source, points)
                self._validator.validate_source_config(rendered_source.payload)
                rendered_sources.append(rendered_source)

        runtime_payload = self._runtime_payload(command, rendered_sources)
        self._validator.validate_runtime_config(runtime_payload)
        return RenderedAgentConfig(
            runtime_payload=runtime_payload,
            source_payloads=tuple(rendered_sources),
        )

    def _render_source(
        self,
        command: RenderAgentConfigCommand,
        source: Source,
        points: list[Point],
    ) -> RenderedSourceConfig:
        source_config_revision = _source_config_revision(command, source.source_id)
        payload = {
            "message_type": "wm.edge.source-config.v1",
            "tenant_id": command.tenant_id,
            "asset_id": command.asset_id,
            "agent_id": command.agent_id,
            "config_revision": command.config_revision,
            "source_id": source.source_id,
            "source_config_revision": source_config_revision,
            "source_type": source.source_type,
            "enabled": source.enabled,
            "connection": dict(source.connection_json),
            "acquisition_defaults": dict(source.acquisition_defaults_json),
            "publish_defaults": dict(source.publish_defaults_json),
            "points": [
                _point_payload(point, source=source)
                for point in points
                if point.enabled
            ],
        }
        return RenderedSourceConfig(
            source_id=source.source_id,
            source_config_revision=source_config_revision,
            payload=payload,
        )

    def _runtime_payload(
        self,
        command: RenderAgentConfigCommand,
        rendered_sources: list[RenderedSourceConfig],
    ) -> dict[str, Any]:
        return {
            "message_type": "wm.edge.runtime-config.v1",
            "tenant_id": command.tenant_id,
            "asset_id": command.asset_id,
            "agent_id": command.agent_id,
            "config_revision": command.config_revision,
            "issued_at": _format_datetime(command.issued_at),
            "sources": [
                {
                    "source_id": rendered_source.source_id,
                    "source_config_revision": (
                        rendered_source.source_config_revision
                    ),
                    "enabled": bool(rendered_source.payload["enabled"]),
                }
                for rendered_source in rendered_sources
            ],
        }


def _source_config_revision(
    command: RenderAgentConfigCommand,
    source_id: str,
) -> str:
    if command.source_config_revisions is not None:
        revision = command.source_config_revisions.get(source_id)
        if revision is None:
            raise ConfigRenderError(
                f"Missing source_config_revision for source {source_id!r}"
            )
        return revision
    return f"{command.config_revision}-{source_id}"


def _point_payload(point: Point, *, source: Source) -> dict[str, Any]:
    return {
        "point_key": point.point_key,
        "point_ref": point.point_ref,
        "name": point.name,
        "description": point.description,
        "value_type": point.value_type.value,
        "value_model": point.value_model,
        "signal_type": point.signal_type.value,
        "unit": point.unit,
        "acquisition": _settings_with_defaults(
            point.acquisition_json,
            source.acquisition_defaults_json,
        ),
        "publish": _settings_with_defaults(
            point.publish_json,
            source.publish_defaults_json,
        ),
        "tags": dict(point.tags_json),
    }


def _settings_with_defaults(
    value: dict[str, Any],
    defaults: dict[str, Any],
) -> dict[str, Any]:
    return {**defaults, **value}


def _format_datetime(value: datetime) -> str:
    utc_value = value
    if utc_value.tzinfo is None:
        utc_value = utc_value.replace(tzinfo=UTC)
    utc_value = utc_value.astimezone(UTC).replace(microsecond=0)
    return utc_value.isoformat().replace("+00:00", "Z")


class StoreRenderedAgentConfig:
    def __init__(
        self,
        unit_of_work: UnitOfWork,
        validator: ConfigPayloadValidator,
    ) -> None:
        self._unit_of_work = unit_of_work
        self._validator = validator

    async def execute(self, rendered: RenderedAgentConfig) -> RuntimeConfigRevision:
        runtime_payload = rendered.runtime_payload
        self._validator.validate_runtime_config(runtime_payload)
        for source in rendered.source_payloads:
            self._validator.validate_source_config(source.payload)

        runtime_revision = _runtime_revision_from_payload(runtime_payload)
        source_revisions = [
            _source_revision_from_payload(
                source.payload,
                issued_at=runtime_revision.issued_at,
            )
            for source in rendered.source_payloads
        ]

        async with self._unit_of_work as unit_of_work:
            if (
                await unit_of_work.runtime_config_revisions.get(
                    runtime_revision.tenant_id,
                    runtime_revision.asset_id,
                    runtime_revision.agent_id,
                    runtime_revision.config_revision,
                )
                is not None
            ):
                raise DuplicateConfigRevisionError(
                    runtime_revision.tenant_id,
                    runtime_revision.asset_id,
                    runtime_revision.agent_id,
                    runtime_revision.config_revision,
                )
            await unit_of_work.runtime_config_revisions.add(runtime_revision)
            for source_revision in source_revisions:
                await unit_of_work.source_config_revisions.add(source_revision)
            await unit_of_work.commit()

        return runtime_revision


def _runtime_revision_from_payload(
    payload: dict[str, Any],
) -> RuntimeConfigRevision:
    return RuntimeConfigRevision(
        tenant_id=str(payload["tenant_id"]),
        asset_id=str(payload["asset_id"]),
        agent_id=str(payload["agent_id"]),
        config_revision=str(payload["config_revision"]),
        issued_at=_parse_datetime(str(payload["issued_at"])),
        runtime_payload_json=dict(payload),
    )


def _source_revision_from_payload(
    payload: dict[str, Any],
    *,
    issued_at: datetime,
) -> SourceConfigRevision:
    return SourceConfigRevision(
        tenant_id=str(payload["tenant_id"]),
        asset_id=str(payload["asset_id"]),
        agent_id=str(payload["agent_id"]),
        source_id=str(payload["source_id"]),
        source_config_revision=str(payload["source_config_revision"]),
        config_revision=str(payload["config_revision"]),
        issued_at=issued_at,
        source_payload_json=dict(payload),
    )


def _parse_datetime(value: str) -> datetime:
    return datetime.fromisoformat(value.replace("Z", "+00:00"))
