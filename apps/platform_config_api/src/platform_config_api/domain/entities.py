from __future__ import annotations

from dataclasses import dataclass, field
from datetime import UTC, datetime
from typing import Any

from platform_config_api.domain.value_objects import (
    AgentStatus,
    ObjectStatus,
    SignalType,
    TenantStatus,
    ValueType,
    require_non_empty,
    require_path_id,
    require_point_key,
)


def utc_now() -> datetime:
    return datetime.now(tz=UTC)


@dataclass(frozen=True)
class Tenant:
    tenant_id: str
    name: str
    status: TenantStatus = TenantStatus.ACTIVE
    created_at: datetime = field(default_factory=utc_now)
    updated_at: datetime = field(default_factory=utc_now)

    def __post_init__(self) -> None:
        object.__setattr__(
            self,
            "tenant_id",
            require_non_empty(self.tenant_id, field_name="tenant_id"),
        )
        object.__setattr__(
            self,
            "name",
            require_non_empty(self.name, field_name="name"),
        )


@dataclass(frozen=True)
class MonitoredObject:
    tenant_id: str
    object_id: str
    name: str
    description: str | None = None
    status: ObjectStatus = ObjectStatus.ACTIVE
    created_at: datetime = field(default_factory=utc_now)
    updated_at: datetime = field(default_factory=utc_now)

    def __post_init__(self) -> None:
        object.__setattr__(
            self,
            "tenant_id",
            require_non_empty(self.tenant_id, field_name="tenant_id"),
        )
        object.__setattr__(
            self,
            "object_id",
            require_path_id(self.object_id, field_name="object_id"),
        )
        object.__setattr__(
            self,
            "name",
            require_non_empty(self.name, field_name="name"),
        )


@dataclass(frozen=True)
class Agent:
    tenant_id: str
    object_id: str
    agent_id: str
    name: str | None = None
    status: AgentStatus = AgentStatus.ACTIVE
    bootstrap_hint_json: dict[str, Any] = field(default_factory=dict)
    created_at: datetime = field(default_factory=utc_now)
    updated_at: datetime = field(default_factory=utc_now)

    def __post_init__(self) -> None:
        object.__setattr__(
            self,
            "tenant_id",
            require_non_empty(self.tenant_id, field_name="tenant_id"),
        )
        object.__setattr__(
            self,
            "object_id",
            require_path_id(self.object_id, field_name="object_id"),
        )
        object.__setattr__(
            self,
            "agent_id",
            require_path_id(self.agent_id, field_name="agent_id"),
        )


@dataclass(frozen=True)
class Source:
    tenant_id: str
    object_id: str
    agent_id: str
    source_id: str
    source_type: str
    enabled: bool = True
    name: str | None = None
    description: str | None = None
    connection_json: dict[str, Any] = field(default_factory=dict)
    acquisition_defaults_json: dict[str, Any] = field(default_factory=dict)
    publish_defaults_json: dict[str, Any] = field(default_factory=dict)
    created_at: datetime = field(default_factory=utc_now)
    updated_at: datetime = field(default_factory=utc_now)

    def __post_init__(self) -> None:
        object.__setattr__(
            self,
            "tenant_id",
            require_non_empty(self.tenant_id, field_name="tenant_id"),
        )
        object.__setattr__(
            self,
            "object_id",
            require_path_id(self.object_id, field_name="object_id"),
        )
        object.__setattr__(
            self,
            "agent_id",
            require_path_id(self.agent_id, field_name="agent_id"),
        )
        object.__setattr__(
            self,
            "source_id",
            require_path_id(self.source_id, field_name="source_id"),
        )
        object.__setattr__(
            self,
            "source_type",
            require_non_empty(self.source_type, field_name="source_type"),
        )


@dataclass(frozen=True)
class Point:
    tenant_id: str
    object_id: str
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
    created_at: datetime = field(default_factory=utc_now)
    updated_at: datetime = field(default_factory=utc_now)

    def __post_init__(self) -> None:
        object.__setattr__(
            self,
            "tenant_id",
            require_non_empty(self.tenant_id, field_name="tenant_id"),
        )
        object.__setattr__(
            self,
            "object_id",
            require_path_id(self.object_id, field_name="object_id"),
        )
        object.__setattr__(
            self,
            "agent_id",
            require_path_id(self.agent_id, field_name="agent_id"),
        )
        object.__setattr__(
            self,
            "source_id",
            require_path_id(self.source_id, field_name="source_id"),
        )
        object.__setattr__(
            self,
            "point_id",
            require_non_empty(self.point_id, field_name="point_id"),
        )
        object.__setattr__(self, "point_key", require_point_key(self.point_key))
        object.__setattr__(
            self,
            "point_ref",
            require_non_empty(self.point_ref, field_name="point_ref"),
        )
        object.__setattr__(
            self,
            "name",
            require_non_empty(self.name, field_name="name"),
        )
        object.__setattr__(
            self,
            "value_model",
            require_non_empty(self.value_model, field_name="value_model"),
        )
