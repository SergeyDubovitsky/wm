from __future__ import annotations

import json

import pytest

pytestmark = pytest.mark.integration


def test_kafka_connect_writes_raw_json_to_clickhouse_landing_and_contract_table(
    local_storage_stack,
) -> None:
    payload = {
        "message_type": "wm.platform.telemetry.event.v1",
        "tenant_id": "tenant-storage-it",
        "event_id": "storage-raw-001",
        "idempotency_key": "tenant-storage-it|object-storage-it|agent-storage-it|storage-raw-001",
        "object_id": "object-storage-it",
        "agent_id": "agent-storage-it",
        "source_id": "source-storage-it",
        "source_type": "knx",
        "point_id": "tenant-storage-it|object-storage-it|source-storage-it|temperature",
        "point_key": "temperature",
        "point_ref": "1/2/3",
        "source_config_revision": "rev-storage-it-001",
        "ts": "2026-05-03T05:50:00Z",
        "ingested_at": "2026-05-03T05:50:01Z",
        "event_type": "telemetry.sample",
        "observation_mode": "listen",
        "value_type": "number",
        "value": 42.5,
        "quality": "good",
        "sequence": 1,
    }
    payload_json = json.dumps(payload, ensure_ascii=True, separators=(",", ":"))

    local_storage_stack.clickhouse_query("TRUNCATE TABLE kafka_telemetry_events_raw_v1")
    local_storage_stack.clickhouse_query("TRUNCATE TABLE telemetry_events_v1")
    local_storage_stack.produce_kafka_text(
        "wm.platform.telemetry.events.v1",
        payload_json,
    )

    stored_payload = local_storage_stack.wait_for_clickhouse_value(
        """
        SELECT payload_json
        FROM kafka_telemetry_events_raw_v1
        WHERE payload_json LIKE '%storage-raw-001%'
        ORDER BY ingested_at DESC
        LIMIT 1
        FORMAT TabSeparatedRaw
        """.strip()
    )

    assert stored_payload == payload_json

    contract_row = local_storage_stack.wait_for_clickhouse_value(
        """
        SELECT
            tenant_id,
            event_id,
            source_type,
            value_type,
            value_float,
            value_bool,
            value_string
        FROM telemetry_events_v1
        WHERE event_id = 'storage-raw-001'
        FORMAT TabSeparatedRaw
        """.strip()
    )

    assert contract_row == (
        "tenant-storage-it\tstorage-raw-001\tknx\tnumber\t42.5\t\\N\t\\N"
    )

    local_storage_stack.produce_kafka_text(
        "wm.platform.telemetry.events.v1",
        payload_json,
    )
    duplicate_raw_count = local_storage_stack.wait_for_clickhouse_value(
        """
        SELECT count()
        FROM kafka_telemetry_events_raw_v1
        WHERE payload_json LIKE '%storage-raw-001%'
        HAVING count() >= 2
        FORMAT TabSeparatedRaw
        """.strip()
    )
    deduplicated_count = local_storage_stack.clickhouse_query(
        """
        SELECT count()
        FROM telemetry_events_v1 FINAL
        WHERE event_id = 'storage-raw-001'
        FORMAT TabSeparatedRaw
        """.strip()
    ).stdout.strip()

    assert duplicate_raw_count == "2"
    assert deduplicated_count == "1"

    source_config_payload = {
        "message_type": "wm.platform.source.config.v1",
        "tenant_id": "tenant-storage-it",
        "object_id": "object-storage-it",
        "agent_id": "agent-storage-it",
        "source_id": "source-storage-it",
        "source_type": "knx",
        "source_config_revision": "rev-storage-it-001",
        "ts": "2026-05-03T05:50:02Z",
        "ingested_at": "2026-05-03T05:50:03Z",
        "points": [
            {
                "point_id": "tenant-storage-it|object-storage-it|source-storage-it|temperature",
                "point_key": "temperature",
                "point_ref": "1/2/3",
                "name": "Temperature",
                "signal_type": "sensor",
                "value_type": "number",
                "value_model": "temperature",
            }
        ],
    }
    source_config_json = json.dumps(
        source_config_payload,
        ensure_ascii=True,
        separators=(",", ":"),
    )
    local_storage_stack.produce_kafka_text(
        "wm.platform.source.configs.v1",
        source_config_json,
        key="tenant-storage-it|object-storage-it|agent-storage-it|source-storage-it",
    )
    source_config_row = local_storage_stack.wait_for_clickhouse_value(
        """
        SELECT source_type, points_json
        FROM source_config_snapshots_v1
        WHERE source_config_revision = 'rev-storage-it-001'
        FORMAT TabSeparatedRaw
        """.strip()
    )
    assert source_config_row == (
        'knx\t[{"point_id":"tenant-storage-it|object-storage-it|source-storage-it|temperature",'
        '"point_key":"temperature","point_ref":"1/2/3","name":"Temperature",'
        '"signal_type":"sensor","value_type":"number","value_model":"temperature"}]'
    )

    replayed_source_config_payload = {
        **source_config_payload,
        "ingested_at": "2026-05-03T05:50:04Z",
    }
    local_storage_stack.produce_kafka_text(
        "wm.platform.source.configs.v1",
        json.dumps(
            replayed_source_config_payload,
            ensure_ascii=True,
            separators=(",", ":"),
        ),
        key="tenant-storage-it|object-storage-it|agent-storage-it|source-storage-it",
    )
    duplicate_source_config_count = local_storage_stack.wait_for_clickhouse_value(
        """
        SELECT count()
        FROM kafka_source_configs_raw_v1
        WHERE payload_json LIKE '%rev-storage-it-001%'
        HAVING count() >= 2
        FORMAT TabSeparatedRaw
        """.strip()
    )
    deduplicated_source_config_count = local_storage_stack.clickhouse_query(
        """
        SELECT count()
        FROM source_config_snapshots_v1 FINAL
        WHERE source_config_revision = 'rev-storage-it-001'
        FORMAT TabSeparatedRaw
        """.strip()
    ).stdout.strip()

    assert duplicate_source_config_count == "2"
    assert deduplicated_source_config_count == "1"

    source_connection_payload = {
        "message_type": "wm.platform.source.connection.v1",
        "tenant_id": "tenant-storage-it",
        "object_id": "object-storage-it",
        "agent_id": "agent-storage-it",
        "source_id": "source-storage-it",
        "state": "connected",
        "reason": None,
        "ts": "2026-05-03T05:50:04Z",
        "ingested_at": "2026-05-03T05:50:05Z",
    }
    local_storage_stack.produce_kafka_text(
        "wm.platform.source.connections.v1",
        json.dumps(source_connection_payload, ensure_ascii=True, separators=(",", ":")),
        key="tenant-storage-it|object-storage-it|agent-storage-it|source-storage-it",
    )
    source_connection_row = local_storage_stack.wait_for_clickhouse_value(
        """
        SELECT state, reason
        FROM source_connection_events_v1
        WHERE source_id = 'source-storage-it'
        FORMAT TabSeparatedRaw
        """.strip()
    )
    assert source_connection_row == "connected\t\\N"

    agent_status_payload = {
        "message_type": "wm.platform.agent.status.v1",
        "tenant_id": "tenant-storage-it",
        "object_id": "object-storage-it",
        "agent_id": "agent-storage-it",
        "status": "online",
        "ts": "2026-05-03T05:50:06Z",
        "ingested_at": "2026-05-03T05:50:07Z",
    }
    local_storage_stack.produce_kafka_text(
        "wm.platform.agent.status.v1",
        json.dumps(agent_status_payload, ensure_ascii=True, separators=(",", ":")),
        key="tenant-storage-it|object-storage-it|agent-storage-it",
    )
    agent_status_row = local_storage_stack.wait_for_clickhouse_value(
        """
        SELECT status
        FROM agent_status_events_v1
        WHERE agent_id = 'agent-storage-it'
        FORMAT TabSeparatedRaw
        """.strip()
    )
    assert agent_status_row == "online"

    derived_payload = {
        "message_type": "wm.platform.derived.event.v1",
        "tenant_id": "tenant-storage-it",
        "derived_event_id": "derived-storage-001",
        "idempotency_key": "tenant-storage-it|object-storage-it|derived-storage-001",
        "object_id": "object-storage-it",
        "rule_or_metric_id": "metric-temperature-high",
        "event_type": "derived.metric",
        "ts": "2026-05-03T05:50:08Z",
        "produced_at": "2026-05-03T05:50:09Z",
        "value_type": "boolean",
        "value": True,
        "source_event_ids": ["storage-raw-001"],
        "attributes": {"threshold": 40.0},
    }
    local_storage_stack.produce_kafka_text(
        "wm.platform.derived.events.v1",
        json.dumps(derived_payload, ensure_ascii=True, separators=(",", ":")),
        key="tenant-storage-it|object-storage-it|metric-temperature-high",
    )
    derived_row = local_storage_stack.wait_for_clickhouse_value(
        """
        SELECT value_type, value_float, value_bool, value_string, source_event_ids_json, attributes_json
        FROM derived_events_v1
        WHERE derived_event_id = 'derived-storage-001'
        FORMAT TabSeparatedRaw
        """.strip()
    )
    assert derived_row == 'boolean\t\\N\ttrue\t\\N\t["storage-raw-001"]\t{"threshold":40}'


def test_invalid_storage_record_goes_to_kafka_connect_dlq(local_storage_stack) -> None:
    invalid_payload = {
        "message_type": "wm.platform.telemetry.event.v1",
        "tenant_id": "tenant-storage-it",
        "event_id": "storage-invalid-001",
        "idempotency_key": "tenant-storage-it|object-storage-it|agent-storage-it|storage-invalid-001",
        "object_id": "object-storage-it",
        "agent_id": "agent-storage-it",
        "source_id": "source-storage-it",
        "source_type": "knx",
        "point_id": "tenant-storage-it|object-storage-it|source-storage-it|temperature",
        "point_key": "temperature",
        "point_ref": "1/2/3",
        "source_config_revision": "rev-storage-it-001",
        "ts": "2026-05-03T05:50:00Z",
        "ingested_at": "2026-05-03T05:50:01Z",
        "event_type": "telemetry.sample",
        "observation_mode": "listen",
        "value_type": "number",
        "value": "not-a-number",
        "quality": "good",
        "sequence": 1,
    }
    payload_json = json.dumps(invalid_payload, ensure_ascii=True, separators=(",", ":"))

    local_storage_stack.clickhouse_query("TRUNCATE TABLE telemetry_events_v1")
    local_storage_stack.produce_kafka_text(
        "wm.platform.telemetry.events.v1",
        payload_json,
    )

    _key, dlq_payload = local_storage_stack.consume_kafka_json(
        "wm.platform.telemetry-store.dlq.v1",
        timeout=60,
    )
    row_count = local_storage_stack.clickhouse_query(
        """
        SELECT count()
        FROM telemetry_events_v1
        WHERE event_id = 'storage-invalid-001'
        FORMAT TabSeparatedRaw
        """.strip()
    ).stdout.strip()

    assert dlq_payload["event_id"] == "storage-invalid-001"
    assert row_count == "0"
