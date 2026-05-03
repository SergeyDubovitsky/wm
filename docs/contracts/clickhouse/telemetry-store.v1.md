# `wm.clickhouse.telemetry-store.v1`

Дата: 2026-05-02
Статус: working draft

Этот контракт фиксирует draft физической модели `Telemetry Store` на базе
ClickHouse. Он нужен для review, будущих миграций и проверки совместимости
Kafka consumers. DDL не является production-validated performance schema до
нагрузочного PoC.

## Tables

| Table | Назначение | Writer |
| --- | --- | --- |
| `telemetry_events_v1` | Raw/canonical telemetry events, одна строка на наблюдение точки | `telemetry-store-writer.v1` |
| `source_config_snapshots_v1` | Исторические snapshots source config revisions | `telemetry-store-writer.v1` |
| `source_connection_events_v1` | История southbound source connection states | `telemetry-store-writer.v1` |
| `agent_status_events_v1` | История agent online/offline status | `telemetry-store-writer.v1` |
| `derived_events_v1` | Derived events from Streaming Analytics | `telemetry-store-writer.v1`, `streaming-analytics.v1` |
| `alarm_history_events_v1` | Immutable alarm lifecycle history | `alarm-rule-engine.v1` |
| `telemetry_1m_v1` | Rollup по точке за 1 минуту | materialized view / streaming analytics |
| `telemetry_1h_v1` | Rollup по точке за 1 час | materialized view / streaming analytics |
| `telemetry_latest_v1` | Последнее значение по точке для быстрых UI/API запросов | materialized view / writer |

## Raw telemetry model

`telemetry_events_v1` хранит узкую событийную модель:

- одна строка = одно наблюдение одной точки в один момент времени
- добавление нового тега/датчика не требует `ALTER TABLE`
- значение хранится в typed value columns, а не в отдельной колонке на датчик
- мультитенантность задается обязательным `tenant_id`
- дедупликация выполняется по `idempotency_key`

Обязательные поля `telemetry_events_v1`:

| Column | Type draft | Назначение |
| --- | --- | --- |
| `tenant_id` | `String` | Клиент/tenant платформы |
| `event_id` | `String` | Непрозрачный id события от edge, не UUID-only |
| `idempotency_key` | `String` | `{tenant_id}|{object_id}|{agent_id}|{event_id}` |
| `object_id` | `String` | Объект мониторинга |
| `agent_id` | `String` | Edge agent instance |
| `source_id` | `String` | Source внутри agent |
| `source_type` | `LowCardinality(String)` | Тип source: `knx`, `modbus`, `opc-ua`, ... |
| `point_id` | `String` | Стабильный platform registry id точки; MVP fallback до Platform Registry: `{tenant_id}|{object_id}|{source_id}|{point_key}` |
| `point_key` | `String` | MQTT-safe key точки |
| `point_ref` | `String` | Исходный protocol point reference |
| `source_config_revision` | `String` | Версия source config |
| `ts` | `DateTime64(3, 'UTC')` | Время наблюдения |
| `ingested_at` | `DateTime64(3, 'UTC')` | Время ingestion в платформу |
| `event_type` | `LowCardinality(String)` | `telemetry.changed` / `telemetry.sample` |
| `observation_mode` | `LowCardinality(String)` | `listen`, `read_on_start`, `periodic_read` |
| `value_type` | `LowCardinality(String)` | `boolean`, `number`, `string` |
| `value_float` | `Nullable(Float64)` | Numeric value |
| `value_bool` | `Nullable(Bool)` | Boolean value |
| `value_string` | `Nullable(String)` | String value |
| `value_raw` | `Nullable(String)` | Raw protocol value |
| `quality` | `LowCardinality(String)` | `good`, `uncertain`, `bad` |
| `sequence` | `UInt64` | Sequence внутри точки/agent |

Draft engine:

```sql
CREATE TABLE telemetry_events_v1
(
    tenant_id String,
    event_id String,
    idempotency_key String,
    object_id String,
    agent_id String,
    source_id String,
    source_type LowCardinality(String),
    point_id String,
    point_key String,
    point_ref String,
    source_config_revision String,
    ts DateTime64(3, 'UTC'),
    ingested_at DateTime64(3, 'UTC'),
    event_type LowCardinality(String),
    observation_mode LowCardinality(String),
    value_type LowCardinality(String),
    value_float Nullable(Float64),
    value_bool Nullable(Bool),
    value_string Nullable(String),
    value_raw Nullable(String),
    quality LowCardinality(String),
    sequence UInt64
)
ENGINE = ReplacingMergeTree(ingested_at)
PARTITION BY toYYYYMM(ts)
ORDER BY (tenant_id, object_id, source_id, point_key, ts, idempotency_key)
TTL ts + INTERVAL 180 DAY DELETE;
```

## Snapshot and status tables

`source_config_snapshots_v1`:

- key fields: `tenant_id`, `object_id`, `agent_id`, `source_id`, `source_config_revision`
- payload fields: `source_type`, `points_json`, `ts`, `ingested_at`
- engine draft: `ReplacingMergeTree(ingested_at)`
- partition: `toYYYYMM(ts)`
- order key: `(tenant_id, object_id, source_id, source_config_revision, ingested_at)`
- retention: `400d`

`source_connection_events_v1`:

- key fields: `tenant_id`, `object_id`, `agent_id`, `source_id`
- payload fields: `state`, `reason`, `ts`, `ingested_at`
- engine draft: `MergeTree`
- partition: `toYYYYMM(ts)`
- order key: `(tenant_id, object_id, source_id, ts)`
- retention: `400d`

`agent_status_events_v1`:

- key fields: `tenant_id`, `object_id`, `agent_id`
- payload fields: `status`, `ts`, `ingested_at`
- engine draft: `MergeTree`
- partition: `toYYYYMM(ts)`
- order key: `(tenant_id, object_id, agent_id, ts)`
- retention: `400d`

## Derived and alarm tables

`derived_events_v1`:

- key fields: `tenant_id`, `derived_event_id`, `idempotency_key`, `object_id`
- payload fields: `rule_or_metric_id`, `event_type`, `ts`, `produced_at`,
  typed value columns, `attributes_json`
- engine draft: `ReplacingMergeTree(produced_at)`
- partition: `toYYYYMM(ts)`
- order key: `(tenant_id, object_id, event_type, ts, idempotency_key)`
- retention: `180d`

`alarm_history_events_v1`:

- key fields: `tenant_id`, `alarm_event_id`, `alarm_id`, `object_id`
- payload fields: `event_type`, `severity`, `state`, `operator_id`,
  `reason`, `ts`, `ingested_at`, `payload_json`
- engine draft: `ReplacingMergeTree(ingested_at)`
- partition: `toYYYYMM(ts)`
- order key: `(tenant_id, object_id, alarm_id, ts, alarm_event_id)`
- retention: `5y`

## Rollups and latest values

`telemetry_1m_v1`:

- grain: `tenant_id + object_id + source_id + point_key + toStartOfMinute(ts)`
- value columns: `count`, `min`, `max`, `avg`, `last`, `good_count`, `bad_count`
- retention: `400d`

`telemetry_1h_v1`:

- grain: `tenant_id + object_id + source_id + point_key + toStartOfHour(ts)`
- value columns: `count`, `min`, `max`, `avg`, `last`, `good_count`, `bad_count`
- retention: `5y`

`telemetry_latest_v1`:

- grain: `tenant_id + object_id + source_id + point_key`
- value columns mirror latest telemetry typed value columns
- intended engine: `ReplacingMergeTree(ts)` or equivalent latest-state view
- retention: no TTL; row is replaced by newer latest state

## Compatibility

- Renaming a table or changing primary `ORDER BY` is breaking and requires a new
  table/version suffix.
- Adding nullable analytical columns is backward-compatible if writers and
  readers tolerate missing values.
- `tenant_id` must be present in every `Telemetry Store` table.
- `idempotency_key` is stored as `String`; ClickHouse must not require UUID-only
  `event_id`.
