from __future__ import annotations

from datetime import UTC, datetime, timedelta
from pathlib import Path

from edge_agent.domain.events import TelemetryEvent
from edge_agent.infrastructure.sqlite_outbox import SQLiteOutbox


def _event() -> TelemetryEvent:
    return TelemetryEvent.new(
        event_type="telemetry.changed",
        agent_id="agent-1",
        object_id="demo-stand-01",
        source_id="knx_main",
        source_type="knx",
        point_ref="0/0/7",
        name="switch_feedback",
        description="Feedback",
        value_type="boolean",
        value_model="knx.dpt.1.001",
        signal_type="feedback",
        observation_mode="listen",
        value=True,
        value_raw="01",
        quality="good",
        sequence=1,
        unit=None,
        tags={"room": "demo"},
        ts=datetime(2026, 3, 28, 10, 0, tzinfo=UTC),
    )


def test_sqlite_outbox_append_reserve_retry_and_send(tmp_path) -> None:
    outbox = SQLiteOutbox(Path(tmp_path / "outbox.db"))
    outbox.initialize()
    record_id = outbox.append(_event())

    available = outbox.list_available(now=datetime(2026, 3, 28, 10, 1, tzinfo=UTC))
    assert [record.id for record in available] == [record_id]

    reserved = outbox.reserve_batch(now=datetime(2026, 3, 28, 10, 1, tzinfo=UTC))
    assert len(reserved) == 1
    assert reserved[0].status == "inflight"
    assert reserved[0].attempt_count == 1

    retry_at = datetime(2026, 3, 28, 10, 5, tzinfo=UTC)
    outbox.mark_retry(record_id, retry_at=retry_at, error="timeout")

    not_ready = outbox.list_available(now=retry_at - timedelta(seconds=1))
    assert not not_ready

    ready_again = outbox.list_available(now=retry_at)
    assert [record.id for record in ready_again] == [record_id]
    assert ready_again[0].last_error == "timeout"

    outbox.mark_sent(record_id)
    assert not outbox.list_available(now=retry_at + timedelta(seconds=1))


def test_sqlite_outbox_marks_dead_letter(tmp_path) -> None:
    outbox = SQLiteOutbox(Path(tmp_path / "outbox.db"))
    outbox.initialize()
    record_id = outbox.append(_event())

    outbox.mark_dead_letter(record_id, error="too-many-attempts")

    assert not outbox.list_available(now=datetime(2026, 3, 28, 10, 1, tzinfo=UTC))
