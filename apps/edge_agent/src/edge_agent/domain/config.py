from __future__ import annotations

from pathlib import Path
from pydantic import Field
from typing import Literal

from edge_agent.modeling import FrozenEdgeModel


ValueType = Literal["boolean", "number", "string"]
SignalType = Literal["command", "feedback", "status", "sensor"]


class ConfigurationError(ValueError):
    """Raised when the runtime configuration is invalid."""


class AcquisitionSettings(FrozenEdgeModel):
    listen: bool = True
    read_on_start: bool = False
    periodic_interval_seconds: float | None = None


class AcquisitionOverrides(FrozenEdgeModel):
    listen: bool | None = None
    read_on_start: bool | None = None
    periodic_interval_seconds: float | None = None


class PublishSettings(FrozenEdgeModel):
    enabled: bool = True
    change_threshold: float | None = None


class PublishOverrides(FrozenEdgeModel):
    enabled: bool | None = None
    change_threshold: float | None = None


class AgentSettings(FrozenEdgeModel):
    object_id: str
    name: str
    id_file: Path


class MqttSettings(FrozenEdgeModel):
    enabled: bool
    version: str
    broker: str
    topic_root: str
    client_id_prefix: str
    username_env: str | None
    password_env: str | None
    qos: int
    clean_start: bool
    session_expiry_seconds: int
    telemetry_message_expiry_seconds: int
    publish_metadata: bool
    retain_metadata: bool
    publish_connection_status: bool
    retain_connection_status: bool
    connect_timeout_seconds: int
    retry_backoff_seconds: tuple[int, ...]


class DeliverySettings(FrozenEdgeModel):
    transport: str
    mqtt: MqttSettings | None = None


class StorageSettings(FrozenEdgeModel):
    sqlite_path: Path
    retention_days: int
    dead_letter_after_attempts: int


class ObservabilitySettings(FrozenEdgeModel):
    log_level: str
    emit_health_events: bool
    metrics_bind: str | None


class SourceDefinition(FrozenEdgeModel):
    source_id: str
    type: str
    enabled: bool
    connection: dict[str, object]
    acquisition_defaults: AcquisitionSettings
    publish_defaults: PublishSettings


class PointDefinition(FrozenEdgeModel):
    source_id: str
    point_ref: str
    name: str
    description: str | None
    value_type: ValueType
    value_model: str
    signal_type: SignalType
    unit: str | None = None
    acquisition: AcquisitionOverrides = Field(default_factory=AcquisitionOverrides)
    publish: PublishOverrides = Field(default_factory=PublishOverrides)
    tags: dict[str, str] = Field(default_factory=dict)


class RuntimePoint(FrozenEdgeModel):
    source_id: str
    source_type: str
    point_ref: str
    name: str
    description: str | None
    value_type: ValueType
    value_model: str
    signal_type: SignalType
    unit: str | None
    acquisition: AcquisitionSettings
    publish: PublishSettings
    tags: dict[str, str]


class AgentRuntimeConfig(FrozenEdgeModel):
    agent: AgentSettings
    delivery: DeliverySettings
    storage: StorageSettings
    observability: ObservabilitySettings
    sources: dict[str, SourceDefinition]
    points: dict[tuple[str, str], RuntimePoint]

    def point(self, source_id: str, point_ref: str) -> RuntimePoint:
        return self.points[(source_id, point_ref)]
