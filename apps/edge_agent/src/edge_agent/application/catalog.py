from __future__ import annotations

import hashlib
import json
from datetime import datetime

from edge_agent.domain.config import AgentRuntimeConfig, RuntimePoint
from edge_agent.domain.events import (
    MqttPublication,
    SourceCatalog,
    SourceCatalogPoint,
    point_key_from_ref,
    utc_now,
)


def build_source_catalogs(
    runtime_config: AgentRuntimeConfig,
    *,
    agent_id: str,
    ts: datetime | None = None,
) -> list[SourceCatalog]:
    timestamp = ts or utc_now()
    return [
        build_source_catalog(
            runtime_config,
            agent_id=agent_id,
            source_id=source_id,
            ts=timestamp,
        )
        for source_id in sorted(runtime_config.sources)
    ]


def build_source_catalog_publications(
    runtime_config: AgentRuntimeConfig,
    *,
    agent_id: str,
    ts: datetime | None = None,
) -> list[MqttPublication]:
    mqtt = runtime_config.delivery.mqtt
    if mqtt is None:
        return []
    if not mqtt.publish_metadata:
        return []
    return [
        MqttPublication(
            topic=catalog.topic(mqtt.topic_root),
            payload=catalog.mqtt_payload(),
            qos=mqtt.qos,
            retain=mqtt.retain_metadata,
        )
        for catalog in build_source_catalogs(
            runtime_config,
            agent_id=agent_id,
            ts=ts,
        )
    ]


def build_source_catalog(
    runtime_config: AgentRuntimeConfig,
    *,
    agent_id: str,
    source_id: str,
    ts: datetime | None = None,
) -> SourceCatalog:
    source = runtime_config.sources[source_id]
    points = _points_for_source(runtime_config, source_id)
    return SourceCatalog(
        object_id=runtime_config.agent.object_id,
        agent_id=agent_id,
        source_id=source.source_id,
        source_type=source.type,
        catalog_revision=source_catalog_revision(source_type=source.type, points=points),
        ts=ts or utc_now(),
        points=tuple(_to_catalog_point(point) for point in points),
    )


def source_catalog_revision(*, source_type: str, points: list[RuntimePoint]) -> str:
    payload = {
        "source_type": source_type,
        "points": [
            {
                "point_ref": point.point_ref,
                "name": point.name,
                "description": point.description,
                "value_type": point.value_type,
                "value_model": point.value_model,
                "signal_type": point.signal_type,
                "unit": point.unit,
                "tags": dict(sorted(point.tags.items())),
            }
            for point in sorted(points, key=lambda item: item.point_ref)
        ],
    }
    encoded = json.dumps(
        payload,
        ensure_ascii=True,
        separators=(",", ":"),
        sort_keys=True,
    ).encode("utf-8")
    return f"sha256:{hashlib.sha256(encoded).hexdigest()[:16]}"


def _points_for_source(
    runtime_config: AgentRuntimeConfig,
    source_id: str,
) -> list[RuntimePoint]:
    return sorted(
        [
            point
            for (point_source_id, _), point in runtime_config.points.items()
            if point_source_id == source_id
        ],
        key=lambda point: point.point_ref,
    )


def _to_catalog_point(point: RuntimePoint) -> SourceCatalogPoint:
    return SourceCatalogPoint(
        point_key=point_key_from_ref(point.point_ref),
        point_ref=point.point_ref,
        name=point.name,
        description=point.description,
        signal_type=point.signal_type,
        value_type=point.value_type,
        value_model=point.value_model,
        unit=point.unit,
        tags=dict(point.tags),
    )
