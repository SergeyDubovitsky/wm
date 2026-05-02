from __future__ import annotations

import json
from datetime import datetime, timedelta
from typing import Protocol

from edge_agent.application.catalog import build_source_catalog_publications
from edge_agent.domain.config import AgentRuntimeConfig
from edge_agent.domain.events import MqttPublication, point_key_from_ref, utc_now
from edge_agent.modeling import FrozenEdgeModel


class PublishError(RuntimeError):
    """Raised when a publication cannot be delivered to the transport."""


class PublicationPublisher(Protocol):
    """Transport boundary used by delivery use cases to publish MQTT records."""

    def publish(self, publication: MqttPublication) -> None:
        """Publish one already-built MQTT publication or raise `PublishError`."""
        ...


class OutboxRecordView(Protocol):
    """Minimal persisted outbox record shape needed by the delivery worker."""

    id: int
    payload_json: str
    attempt_count: int


class DeliveryOutbox(Protocol):
    """Reliable delivery queue boundary for reserving and completing records."""

    def reserve_batch(
        self,
        *,
        limit: int = 100,
        now: datetime | None = None,
        lease_seconds: int = 60,
    ) -> list[OutboxRecordView]:
        """Reserve pending records for one delivery attempt and start their lease."""
        ...

    def mark_sent(self, record_id: int) -> None:
        """Mark a successfully published record as sent."""
        ...

    def mark_retry(self, record_id: int, *, retry_at: datetime, error: str) -> None:
        """Return a failed record to pending state after a retry delay."""
        ...

    def mark_dead_letter(self, record_id: int, *, error: str) -> None:
        """Move a permanently failed record to the dead-letter state."""
        ...


class DeliveryRunResult(FrozenEdgeModel):
    """Counters produced by a single delivery batch run."""

    reserved_count: int = 0
    published_count: int = 0
    retry_count: int = 0
    dead_letter_count: int = 0


class DeliveryWorker:
    """Application service that drains the local outbox through a publisher boundary."""

    def __init__(
        self,
        *,
        runtime_config: AgentRuntimeConfig,
        agent_id: str,
        outbox: DeliveryOutbox,
        publisher: PublicationPublisher,
    ) -> None:
        """Create a delivery worker from runtime config and injected boundaries."""
        self._runtime_config = runtime_config
        self._agent_id = agent_id
        self._outbox = outbox
        self._publisher = publisher

    def publish_startup_catalogs(self, *, now: datetime | None = None) -> int:
        """Publish retained source metadata catalogs for all configured sources."""
        publications = build_source_catalog_publications(
            self._runtime_config,
            agent_id=self._agent_id,
            ts=now,
        )
        for publication in publications:
            self._publisher.publish(publication)
        return len(publications)

    def deliver_once(
        self,
        *,
        limit: int = 100,
        lease_seconds: int = 60,
        now: datetime | None = None,
    ) -> DeliveryRunResult:
        """Reserve and publish one outbox batch, updating delivery state per record."""
        timestamp = now or utc_now()
        records = self._outbox.reserve_batch(
            limit=limit,
            now=timestamp,
            lease_seconds=lease_seconds,
        )
        result = DeliveryRunResult(reserved_count=len(records))
        for record in records:
            result = _merge_result(
                result,
                self._publish_record(record, timestamp=timestamp),
            )
        return result

    def _publish_record(
        self,
        record: OutboxRecordView,
        *,
        timestamp: datetime,
    ) -> DeliveryRunResult:
        try:
            publication = _publication_from_outbox_payload(
                record.payload_json,
                runtime_config=self._runtime_config,
                agent_id=self._agent_id,
            )
            self._publisher.publish(publication)
        except Exception as exc:
            return self._handle_failure(record, timestamp=timestamp, error=exc)
        self._outbox.mark_sent(record.id)
        return DeliveryRunResult(published_count=1)

    def _handle_failure(
        self,
        record: OutboxRecordView,
        *,
        timestamp: datetime,
        error: Exception,
    ) -> DeliveryRunResult:
        error_message = str(error) or error.__class__.__name__
        if record.attempt_count >= self._runtime_config.storage.dead_letter_after_attempts:
            self._outbox.mark_dead_letter(record.id, error=error_message)
            return DeliveryRunResult(dead_letter_count=1)
        self._outbox.mark_retry(
            record.id,
            retry_at=timestamp + _retry_backoff(self._runtime_config, record.attempt_count),
            error=error_message,
        )
        return DeliveryRunResult(retry_count=1)


def _publication_from_outbox_payload(
    payload_json: str,
    *,
    runtime_config: AgentRuntimeConfig,
    agent_id: str,
) -> MqttPublication:
    mqtt = runtime_config.delivery.mqtt
    if mqtt is None:
        raise PublishError("MQTT delivery settings are not configured")
    payload = json.loads(payload_json)
    source_id = _required_string(payload, "source_id")
    point_ref = _required_string(payload, "point_ref")
    object_id = _required_string(payload, "object_id")
    topic = (
        f"{mqtt.topic_root}/objects/{object_id}/agents/{agent_id}"
        f"/sources/{source_id}/points/{point_key_from_ref(point_ref)}/event"
    )
    return MqttPublication(
        topic=topic,
        payload={
            "message_type": "wm.telemetry.event.v1",
            "event_id": _required_string(payload, "event_id"),
            "event_type": _required_string(payload, "event_type"),
            "catalog_revision": _required_string(payload, "catalog_revision"),
            "ts": _required_string(payload, "ts"),
            "observation_mode": _required_string(payload, "observation_mode"),
            "value": payload.get("value"),
            "value_raw": payload.get("value_raw"),
            "quality": _required_string(payload, "quality"),
            "sequence": _required_int(payload, "sequence"),
        },
        qos=mqtt.qos,
        retain=False,
        message_expiry_seconds=mqtt.telemetry_message_expiry_seconds,
    )


def _required_string(payload: object, field_name: str) -> str:
    if not isinstance(payload, dict):
        raise PublishError("Outbox payload must be a JSON object")
    value = payload.get(field_name)
    if not isinstance(value, str) or not value:
        raise PublishError(f"Outbox payload field {field_name} must be a non-empty string")
    return value


def _required_int(payload: object, field_name: str) -> int:
    if not isinstance(payload, dict):
        raise PublishError("Outbox payload must be a JSON object")
    value = payload.get(field_name)
    if not isinstance(value, int):
        raise PublishError(f"Outbox payload field {field_name} must be an integer")
    return value


def _retry_backoff(runtime_config: AgentRuntimeConfig, attempt_count: int) -> timedelta:
    mqtt = runtime_config.delivery.mqtt
    if mqtt is None or not mqtt.retry_backoff_seconds:
        return timedelta(seconds=0)
    index = min(max(attempt_count - 1, 0), len(mqtt.retry_backoff_seconds) - 1)
    return timedelta(seconds=mqtt.retry_backoff_seconds[index])


def _merge_result(left: DeliveryRunResult, right: DeliveryRunResult) -> DeliveryRunResult:
    return DeliveryRunResult(
        reserved_count=left.reserved_count + right.reserved_count,
        published_count=left.published_count + right.published_count,
        retry_count=left.retry_count + right.retry_count,
        dead_letter_count=left.dead_letter_count + right.dead_letter_count,
    )
