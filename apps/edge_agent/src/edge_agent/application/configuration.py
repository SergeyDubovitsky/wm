from __future__ import annotations

import json
import os
import re
from pathlib import Path
from typing import Annotated, Any, Iterable, Mapping, Self, TypeVar

from pydantic import Field, StrictBool, StrictInt, StringConstraints, ValidationError, field_validator, model_validator

from edge_agent.domain.config import (
    AcquisitionOverrides,
    AcquisitionSettings,
    AgentRuntimeConfig,
    AgentSettings,
    ConfigurationError,
    DeliverySettings,
    MqttSettings,
    ObservabilitySettings,
    PointDefinition,
    PublishOverrides,
    PublishSettings,
    RuntimePoint,
    SignalType,
    SourceDefinition,
    StorageSettings,
    ValueType,
)
from edge_agent.modeling import EdgeModel

try:
    import yaml
except ModuleNotFoundError:  # pragma: no cover - dependency is installed in tests/runtime.
    yaml = None


NonEmptyStr = Annotated[
    str,
    StringConstraints(strip_whitespace=True, min_length=1, strict=True),
]
StrictNonNegativeInt = Annotated[int, Field(strict=True, ge=0)]
ModelT = TypeVar("ModelT", bound=EdgeModel)
ENV_PLACEHOLDER_PATTERN = re.compile(r"\$\{([A-Za-z_][A-Za-z0-9_]*)\}")


class ConfigModel(EdgeModel):
    pass


class AcquisitionSettingsModel(ConfigModel):
    listen: StrictBool = True
    read_on_start: StrictBool = False
    periodic_interval_seconds: float | None = None

    @field_validator("periodic_interval_seconds", mode="before")
    @classmethod
    def normalize_periodic_interval(cls, value: Any) -> float | None:
        return _optional_float(
            value,
            field_name="periodic_interval_seconds",
            positive=True,
        )


class AcquisitionOverridesModel(ConfigModel):
    listen: StrictBool | None = None
    read_on_start: StrictBool | None = None
    periodic_interval_seconds: float | None = None

    @field_validator("periodic_interval_seconds", mode="before")
    @classmethod
    def normalize_periodic_interval(cls, value: Any) -> float | None:
        return _optional_float(
            value,
            field_name="periodic_interval_seconds",
            positive=True,
        )


class PublishSettingsModel(ConfigModel):
    enabled: StrictBool = True
    change_threshold: float | None = None

    @field_validator("change_threshold", mode="before")
    @classmethod
    def normalize_change_threshold(cls, value: Any) -> float | None:
        return _optional_float(
            value,
            field_name="change_threshold",
            positive=False,
        )


class PublishOverridesModel(ConfigModel):
    enabled: StrictBool | None = None
    change_threshold: float | None = None

    @field_validator("change_threshold", mode="before")
    @classmethod
    def normalize_change_threshold(cls, value: Any) -> float | None:
        return _optional_float(
            value,
            field_name="change_threshold",
            positive=False,
        )


class AgentSettingsModel(ConfigModel):
    object_id: NonEmptyStr
    name: NonEmptyStr
    id_file: NonEmptyStr


class MqttSettingsModel(ConfigModel):
    enabled: StrictBool
    version: NonEmptyStr
    broker: NonEmptyStr
    topic_root: NonEmptyStr
    client_id_prefix: NonEmptyStr
    username_env: str | None = None
    password_env: str | None = None
    qos: StrictInt
    clean_start: StrictBool
    session_expiry_seconds: StrictInt
    telemetry_message_expiry_seconds: StrictInt
    publish_metadata: StrictBool
    retain_metadata: StrictBool
    publish_connection_status: StrictBool
    retain_connection_status: StrictBool
    connect_timeout_seconds: StrictInt
    retry_backoff_seconds: list[StrictNonNegativeInt]

    @field_validator("username_env", "password_env", mode="before")
    @classmethod
    def normalize_optional_env_name(cls, value: Any) -> str | None:
        return _optional_string(value)


class DeliverySettingsModel(ConfigModel):
    transport: NonEmptyStr
    mqtt: MqttSettingsModel | None = None

    @model_validator(mode="after")
    def validate_selected_transport(self) -> Self:
        if self.transport == "mqtt" and self.mqtt is None:
            raise ValueError("mqtt settings are required when delivery.transport is mqtt")
        return self


class StorageSettingsModel(ConfigModel):
    sqlite_path: NonEmptyStr
    retention_days: StrictInt
    dead_letter_after_attempts: StrictInt


class ObservabilitySettingsModel(ConfigModel):
    log_level: NonEmptyStr
    emit_health_events: StrictBool
    metrics_bind: str | None = None

    @field_validator("metrics_bind", mode="before")
    @classmethod
    def normalize_metrics_bind(cls, value: Any) -> str | None:
        return _optional_string(value)


class SourceDefinitionModel(ConfigModel):
    source_id: NonEmptyStr
    type: NonEmptyStr
    enabled: StrictBool
    connection: dict[NonEmptyStr, Any]
    acquisition_defaults: AcquisitionSettingsModel
    publish_defaults: PublishSettingsModel


class PointDefinitionModel(ConfigModel):
    point_ref: NonEmptyStr
    name: NonEmptyStr
    description: str | None = None
    value_type: ValueType
    value_model: NonEmptyStr
    signal_type: SignalType
    unit: str | None = None
    acquisition: AcquisitionOverridesModel = Field(
        default_factory=AcquisitionOverridesModel
    )
    publish: PublishOverridesModel = Field(default_factory=PublishOverridesModel)
    tags: dict[NonEmptyStr, NonEmptyStr] = Field(default_factory=dict)

    @field_validator("description", "unit", mode="before")
    @classmethod
    def normalize_optional_text(cls, value: Any) -> str | None:
        return _optional_string(value)


class AgentDocumentModel(ConfigModel):
    agent: AgentSettingsModel
    delivery: DeliverySettingsModel
    storage: StorageSettingsModel
    observability: ObservabilitySettingsModel


class SourceDocumentModel(ConfigModel):
    sources: list[SourceDefinitionModel]


class PointDocumentModel(ConfigModel):
    source_id: NonEmptyStr
    points: list[PointDefinitionModel]


def load_runtime_config(config_root: Path) -> AgentRuntimeConfig:
    agent_path = _find_agent_path(config_root)
    source_paths = sorted(_iter_document_paths(config_root / "sources.d"))
    point_paths = sorted(_iter_document_paths(config_root / "points.d"))
    return build_runtime_config(
        agent_data=_load_document(agent_path),
        source_documents=[_load_document(path) for path in source_paths],
        point_documents=[_load_document(path) for path in point_paths],
    )


def build_runtime_config(
    *,
    agent_data: Mapping[str, object],
    source_documents: Iterable[Mapping[str, object]],
    point_documents: Iterable[Mapping[str, object]],
) -> AgentRuntimeConfig:
    agent_document = _validate_model(AgentDocumentModel, agent_data, "agent config")
    agent = _to_agent_settings(agent_document.agent)
    delivery = _to_delivery_settings(agent_document.delivery)
    storage = _to_storage_settings(agent_document.storage)
    observability = _to_observability_settings(agent_document.observability)

    sources: dict[str, SourceDefinition] = {}
    for index, document in enumerate(source_documents):
        source_document = _validate_model(
            SourceDocumentModel,
            document,
            f"source document #{index}",
        )
        for source_model in source_document.sources:
            source = _to_source_definition(source_model)
            if source.source_id in sources:
                raise ConfigurationError(f"Duplicate source_id: {source.source_id}")
            sources[source.source_id] = source

    point_index: dict[tuple[str, str], RuntimePoint] = {}
    point_names: dict[str, set[str]] = {}
    point_refs: dict[str, set[str]] = {}

    for index, document in enumerate(point_documents):
        point_document = _validate_model(
            PointDocumentModel,
            document,
            f"point document #{index}",
        )
        source_id = point_document.source_id
        source = sources.get(source_id)
        if source is None:
            raise ConfigurationError(f"Point file references unknown source_id: {source_id}")
        point_names.setdefault(source_id, set())
        point_refs.setdefault(source_id, set())

        for point_model in point_document.points:
            point = _to_point_definition(source_id, point_model)
            if point.point_ref in point_refs[source_id]:
                raise ConfigurationError(
                    f"Duplicate point_ref for source {source_id}: {point.point_ref}"
                )
            if point.name in point_names[source_id]:
                raise ConfigurationError(
                    f"Duplicate point name for source {source_id}: {point.name}"
                )
            point_refs[source_id].add(point.point_ref)
            point_names[source_id].add(point.name)
            runtime_point = _merge_runtime_point(source, point)
            point_index[(runtime_point.source_id, runtime_point.point_ref)] = runtime_point

    return AgentRuntimeConfig(
        agent=agent,
        delivery=delivery,
        storage=storage,
        observability=observability,
        sources=sources,
        points=point_index,
    )


def _find_agent_path(config_root: Path) -> Path:
    candidates = (
        config_root / "agent.yaml",
        config_root / "agent.yml",
        config_root / "agent.json",
        config_root / "agent.example.yaml",
        config_root / "agent.example.yml",
        config_root / "agent.example.json",
    )
    for path in candidates:
        if path.exists():
            return path
    raise FileNotFoundError(f"Agent config not found under {config_root}")


def _iter_document_paths(directory: Path) -> list[Path]:
    if not directory.exists():
        return []
    return [
        path
        for path in directory.iterdir()
        if path.is_file() and path.suffix.lower() in {".yaml", ".yml", ".json"}
    ]


def _load_document(path: Path) -> object:
    if path.suffix.lower() == ".json":
        with path.open("r", encoding="utf-8") as handle:
            return _expand_env_placeholders(json.load(handle), source=path)
    if yaml is None:
        raise RuntimeError(
            "PyYAML is required to load YAML config files. "
            "Add pyyaml to the edge_agent project dependencies before using YAML configs."
        )
    with path.open("r", encoding="utf-8") as handle:
        return _expand_env_placeholders(yaml.safe_load(handle), source=path)


def _to_agent_settings(model: AgentSettingsModel) -> AgentSettings:
    return AgentSettings(
        object_id=model.object_id,
        name=model.name,
        id_file=Path(model.id_file),
    )


def _to_delivery_settings(model: DeliverySettingsModel) -> DeliverySettings:
    mqtt = _to_mqtt_settings(model.mqtt) if model.mqtt is not None else None
    return DeliverySettings(
        transport=model.transport,
        mqtt=mqtt,
    )


def _to_mqtt_settings(model: MqttSettingsModel) -> MqttSettings:
    return MqttSettings(
        enabled=model.enabled,
        version=model.version,
        broker=model.broker,
        topic_root=model.topic_root,
        client_id_prefix=model.client_id_prefix,
        username_env=model.username_env,
        password_env=model.password_env,
        qos=model.qos,
        clean_start=model.clean_start,
        session_expiry_seconds=model.session_expiry_seconds,
        telemetry_message_expiry_seconds=model.telemetry_message_expiry_seconds,
        publish_metadata=model.publish_metadata,
        retain_metadata=model.retain_metadata,
        publish_connection_status=model.publish_connection_status,
        retain_connection_status=model.retain_connection_status,
        connect_timeout_seconds=model.connect_timeout_seconds,
        retry_backoff_seconds=tuple(model.retry_backoff_seconds),
    )


def _to_storage_settings(model: StorageSettingsModel) -> StorageSettings:
    return StorageSettings(
        sqlite_path=Path(model.sqlite_path),
        retention_days=model.retention_days,
        dead_letter_after_attempts=model.dead_letter_after_attempts,
    )


def _to_observability_settings(
    model: ObservabilitySettingsModel,
) -> ObservabilitySettings:
    return ObservabilitySettings(
        log_level=model.log_level,
        emit_health_events=model.emit_health_events,
        metrics_bind=model.metrics_bind,
    )


def _to_source_definition(model: SourceDefinitionModel) -> SourceDefinition:
    return SourceDefinition(
        source_id=model.source_id,
        type=model.type,
        enabled=model.enabled,
        connection=dict(model.connection),
        acquisition_defaults=_to_acquisition_settings(model.acquisition_defaults),
        publish_defaults=_to_publish_settings(model.publish_defaults),
    )


def _to_point_definition(
    source_id: str,
    model: PointDefinitionModel,
) -> PointDefinition:
    return PointDefinition(
        source_id=source_id,
        point_ref=model.point_ref,
        name=model.name,
        description=model.description,
        value_type=model.value_type,
        value_model=model.value_model,
        signal_type=model.signal_type,
        unit=model.unit,
        acquisition=_to_acquisition_overrides(model.acquisition),
        publish=_to_publish_overrides(model.publish),
        tags=dict(model.tags),
    )


def _to_acquisition_settings(model: AcquisitionSettingsModel) -> AcquisitionSettings:
    return AcquisitionSettings(
        listen=model.listen,
        read_on_start=model.read_on_start,
        periodic_interval_seconds=model.periodic_interval_seconds,
    )


def _to_acquisition_overrides(
    model: AcquisitionOverridesModel,
) -> AcquisitionOverrides:
    return AcquisitionOverrides(
        listen=model.listen,
        read_on_start=model.read_on_start,
        periodic_interval_seconds=model.periodic_interval_seconds,
    )


def _to_publish_settings(model: PublishSettingsModel) -> PublishSettings:
    return PublishSettings(
        enabled=model.enabled,
        change_threshold=model.change_threshold,
    )


def _to_publish_overrides(model: PublishOverridesModel) -> PublishOverrides:
    return PublishOverrides(
        enabled=model.enabled,
        change_threshold=model.change_threshold,
    )


def _merge_runtime_point(source: SourceDefinition, point: PointDefinition) -> RuntimePoint:
    acquisition = AcquisitionSettings(
        listen=(
            source.acquisition_defaults.listen
            if point.acquisition.listen is None
            else point.acquisition.listen
        ),
        read_on_start=(
            source.acquisition_defaults.read_on_start
            if point.acquisition.read_on_start is None
            else point.acquisition.read_on_start
        ),
        periodic_interval_seconds=(
            source.acquisition_defaults.periodic_interval_seconds
            if point.acquisition.periodic_interval_seconds is None
            else point.acquisition.periodic_interval_seconds
        ),
    )
    publish_enabled = (
        source.publish_defaults.enabled
        if point.publish.enabled is None
        else point.publish.enabled
    )
    if point.signal_type == "command" and point.publish.enabled is None:
        publish_enabled = False
    publish = PublishSettings(
        enabled=publish_enabled,
        change_threshold=(
            source.publish_defaults.change_threshold
            if point.publish.change_threshold is None
            else point.publish.change_threshold
        ),
    )
    if point.value_type != "number" and publish.change_threshold is not None:
        raise ConfigurationError(
            f"Point {point.source_id}/{point.point_ref} uses change_threshold "
            f"but value_type is {point.value_type}"
        )
    return RuntimePoint(
        source_id=point.source_id,
        source_type=source.type,
        point_ref=point.point_ref,
        name=point.name,
        description=point.description,
        value_type=point.value_type,
        value_model=point.value_model,
        signal_type=point.signal_type,
        unit=point.unit,
        acquisition=acquisition,
        publish=publish,
        tags=dict(point.tags),
    )


def _validate_model(model_type: type[ModelT], data: object, context: str) -> ModelT:
    try:
        return model_type.model_validate(data)
    except ValidationError as exc:
        raise ConfigurationError(_format_validation_error(context, exc)) from exc


def _format_validation_error(context: str, exc: ValidationError) -> str:
    details: list[str] = []
    for error in exc.errors():
        location = ".".join(str(part) for part in error["loc"])
        if location:
            details.append(f"{context}.{location}: {error['msg']}")
        else:
            details.append(f"{context}: {error['msg']}")
    return "; ".join(details)


def _optional_string(value: Any) -> str | None:
    if value is None:
        return None
    if not isinstance(value, str):
        raise TypeError("must be a string when set")
    stripped = value.strip()
    return stripped or None


def _expand_env_placeholders(value: object, *, source: Path) -> object:
    if isinstance(value, dict):
        return {
            key: _expand_env_placeholders(item, source=source)
            for key, item in value.items()
        }
    if isinstance(value, list):
        return [_expand_env_placeholders(item, source=source) for item in value]
    if not isinstance(value, str):
        return value
    matches = list(ENV_PLACEHOLDER_PATTERN.finditer(value))
    if not matches:
        return value
    missing = sorted(
        {
            match.group(1)
            for match in matches
            if os.getenv(match.group(1)) is None
        }
    )
    if missing:
        joined = ", ".join(missing)
        raise ConfigurationError(
            f"Missing environment variables in {source}: {joined}"
        )
    if len(matches) == 1 and matches[0].span() == (0, len(value)):
        return _parse_env_scalar(os.environ[matches[0].group(1)])
    return ENV_PLACEHOLDER_PATTERN.sub(
        lambda match: os.environ[match.group(1)],
        value,
    )


def _parse_env_scalar(value: str) -> object:
    stripped = value.strip()
    lowered = stripped.lower()
    if lowered == "true":
        return True
    if lowered == "false":
        return False
    if lowered in {"null", "none", "~"}:
        return None
    if re.fullmatch(r"[+-]?\d+", stripped):
        return int(stripped)
    if re.fullmatch(r"[+-]?(?:\d+\.\d+|\d+\.\d*|\.\d+)", stripped):
        return float(stripped)
    return value


def _optional_float(
    value: Any,
    *,
    field_name: str,
    positive: bool,
) -> float | None:
    if value is None:
        return None
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        raise TypeError(f"{field_name} must be a number when set")
    number = float(value)
    if positive and number <= 0:
        raise ValueError(f"{field_name} must be positive when set")
    if not positive and number < 0:
        raise ValueError(f"{field_name} must be non-negative when set")
    return number
