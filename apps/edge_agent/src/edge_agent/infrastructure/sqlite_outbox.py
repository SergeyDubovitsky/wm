from __future__ import annotations

import json
import sqlite3
from datetime import UTC, datetime
from pathlib import Path

from edge_agent.domain.events import TelemetryEvent
from edge_agent.modeling import FrozenEdgeModel


def _now() -> datetime:
    return datetime.now(tz=UTC)


def _to_iso(value: datetime) -> str:
    return value.astimezone(UTC).isoformat()


def _from_iso(value: str) -> datetime:
    return datetime.fromisoformat(value)


class OutboxRecord(FrozenEdgeModel):
    id: int
    event_id: str
    event_type: str
    payload_json: str
    status: str
    created_at: datetime
    available_at: datetime
    attempt_count: int
    last_error: str | None


class SQLiteOutbox:
    def __init__(self, sqlite_path: Path) -> None:
        self._sqlite_path = sqlite_path

    def initialize(self) -> None:
        self._sqlite_path.parent.mkdir(parents=True, exist_ok=True)
        with self._connect() as connection:
            connection.execute(
                """
                CREATE TABLE IF NOT EXISTS outbox (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    event_id TEXT NOT NULL UNIQUE,
                    event_type TEXT NOT NULL,
                    payload_json TEXT NOT NULL,
                    status TEXT NOT NULL,
                    created_at TEXT NOT NULL,
                    available_at TEXT NOT NULL,
                    attempt_count INTEGER NOT NULL,
                    last_error TEXT
                )
                """
            )

    def append(self, event: TelemetryEvent, available_at: datetime | None = None) -> int:
        now = _now()
        ready_at = available_at or now
        payload_json = json.dumps(
            event.canonical_payload(),
            ensure_ascii=True,
            separators=(",", ":"),
            sort_keys=True,
        )
        with self._connect() as connection:
            cursor = connection.execute(
                """
                INSERT INTO outbox (
                    event_id,
                    event_type,
                    payload_json,
                    status,
                    created_at,
                    available_at,
                    attempt_count,
                    last_error
                ) VALUES (?, ?, ?, 'pending', ?, ?, 0, NULL)
                """,
                (
                    event.event_id,
                    event.event_type,
                    payload_json,
                    _to_iso(now),
                    _to_iso(ready_at),
                ),
            )
            record_id = cursor.lastrowid
        if record_id is None:
            raise RuntimeError("Failed to append event to outbox")
        return int(record_id)

    def list_available(self, *, limit: int = 100, now: datetime | None = None) -> list[OutboxRecord]:
        ready_at = _to_iso(now or _now())
        with self._connect() as connection:
            rows = connection.execute(
                """
                SELECT
                    id,
                    event_id,
                    event_type,
                    payload_json,
                    status,
                    created_at,
                    available_at,
                    attempt_count,
                    last_error
                FROM outbox
                WHERE status = 'pending' AND available_at <= ?
                ORDER BY id ASC
                LIMIT ?
                """,
                (ready_at, limit),
            ).fetchall()
        return [self._row_to_record(row) for row in rows]

    def reserve_batch(self, *, limit: int = 100, now: datetime | None = None) -> list[OutboxRecord]:
        timestamp = now or _now()
        ready_at = _to_iso(timestamp)
        with self._connect() as connection:
            rows = connection.execute(
                """
                SELECT
                    id,
                    event_id,
                    event_type,
                    payload_json,
                    status,
                    created_at,
                    available_at,
                    attempt_count,
                    last_error
                FROM outbox
                WHERE status = 'pending' AND available_at <= ?
                ORDER BY id ASC
                LIMIT ?
                """,
                (ready_at, limit),
            ).fetchall()
            if not rows:
                return []
            record_ids = [row[0] for row in rows]
            connection.executemany(
                """
                UPDATE outbox
                SET status = 'inflight', attempt_count = attempt_count + 1
                WHERE id = ?
                """,
                ((record_id,) for record_id in record_ids),
            )
            refreshed_rows = connection.execute(
                f"""
                SELECT
                    id,
                    event_id,
                    event_type,
                    payload_json,
                    status,
                    created_at,
                    available_at,
                    attempt_count,
                    last_error
                FROM outbox
                WHERE id IN ({",".join("?" for _ in record_ids)})
                ORDER BY id ASC
                """,
                record_ids,
            ).fetchall()
        return [self._row_to_record(row) for row in refreshed_rows]

    def mark_sent(self, record_id: int) -> None:
        with self._connect() as connection:
            connection.execute(
                """
                UPDATE outbox
                SET status = 'sent', last_error = NULL
                WHERE id = ?
                """,
                (record_id,),
            )

    def mark_retry(self, record_id: int, *, retry_at: datetime, error: str) -> None:
        with self._connect() as connection:
            connection.execute(
                """
                UPDATE outbox
                SET status = 'pending', available_at = ?, last_error = ?
                WHERE id = ?
                """,
                (_to_iso(retry_at), error, record_id),
            )

    def mark_dead_letter(self, record_id: int, *, error: str) -> None:
        with self._connect() as connection:
            connection.execute(
                """
                UPDATE outbox
                SET status = 'dead_letter', last_error = ?
                WHERE id = ?
                """,
                (error, record_id),
            )

    def _connect(self) -> sqlite3.Connection:
        connection = sqlite3.connect(self._sqlite_path)
        connection.row_factory = sqlite3.Row
        return connection

    def _row_to_record(self, row: sqlite3.Row) -> OutboxRecord:
        return OutboxRecord(
            id=int(row["id"]),
            event_id=str(row["event_id"]),
            event_type=str(row["event_type"]),
            payload_json=str(row["payload_json"]),
            status=str(row["status"]),
            created_at=_from_iso(str(row["created_at"])),
            available_at=_from_iso(str(row["available_at"])),
            attempt_count=int(row["attempt_count"]),
            last_error=row["last_error"],
        )
