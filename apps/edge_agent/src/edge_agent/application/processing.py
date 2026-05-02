from __future__ import annotations

from edge_agent.application.catalog import source_catalog_revision
from edge_agent.domain.config import AgentRuntimeConfig, RuntimePoint
from edge_agent.domain.events import Observation, TelemetryEvent
from edge_agent.modeling import EdgeModel, FrozenEdgeModel


class PointState(EdgeModel):
    last_observed_value: object | None = None
    last_published_value: object | None = None
    published_count: int = 0


class ProcessingResult(FrozenEdgeModel):
    event: TelemetryEvent | None
    suppressed_reason: str | None = None


class ObservationProcessor:
    def __init__(self, runtime_config: AgentRuntimeConfig, agent_id: str) -> None:
        self._runtime_config = runtime_config
        self._agent_id = agent_id
        self._states: dict[tuple[str, str], PointState] = {}
        self._catalog_revisions = {
            source.source_id: source_catalog_revision(
                source_type=source.type,
                points=[
                    point
                    for (point_source_id, _), point in runtime_config.points.items()
                    if point_source_id == source.source_id
                ],
            )
            for source in runtime_config.sources.values()
        }

    def process(self, observation: Observation) -> ProcessingResult:
        point = self._runtime_config.point(observation.source_id, observation.point_ref)
        state = self._states.setdefault(
            (observation.source_id, observation.point_ref),
            PointState(),
        )
        state.last_observed_value = observation.value
        if not point.publish.enabled:
            return ProcessingResult(event=None, suppressed_reason="publish_disabled")
        if not self._should_publish(point, state.last_published_value, observation.value):
            return ProcessingResult(event=None, suppressed_reason="not_significant")

        state.published_count += 1
        state.last_published_value = observation.value
        event = TelemetryEvent.new(
            event_type=_event_type_for(point),
            agent_id=self._agent_id,
            object_id=self._runtime_config.agent.object_id,
            source_id=point.source_id,
            source_type=point.source_type,
            catalog_revision=self._catalog_revisions[point.source_id],
            point_ref=point.point_ref,
            name=point.name,
            description=point.description,
            value_type=point.value_type,
            value_model=point.value_model,
            signal_type=point.signal_type,
            observation_mode=observation.observation_mode,
            value=observation.value,
            value_raw=observation.value_raw,
            quality=observation.quality,
            sequence=state.published_count,
            unit=point.unit,
            tags=dict(point.tags),
            ts=observation.observed_at,
        )
        return ProcessingResult(event=event)

    def _should_publish(
        self,
        point: RuntimePoint,
        previous_value: object | None,
        current_value: object | None,
    ) -> bool:
        if previous_value is None:
            return True
        if point.publish.change_threshold is None:
            return current_value != previous_value
        previous_number = _as_number(previous_value)
        current_number = _as_number(current_value)
        if previous_number is None or current_number is None:
            return current_value != previous_value
        return abs(current_number - previous_number) >= point.publish.change_threshold


def _event_type_for(point: RuntimePoint) -> str:
    if point.value_type == "number":
        return "telemetry.sample"
    return "telemetry.changed"


def _as_number(value: object | None) -> float | None:
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        return None
    return float(value)
