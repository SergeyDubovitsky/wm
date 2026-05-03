CREATE TABLE IF NOT EXISTS telemetry_events_v1
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
TTL toDateTime(ts) + INTERVAL 180 DAY DELETE;

CREATE TABLE IF NOT EXISTS source_config_snapshots_v1
(
    tenant_id String,
    object_id String,
    agent_id String,
    source_id String,
    source_type LowCardinality(String),
    source_config_revision String,
    points_json String,
    ts DateTime64(3, 'UTC'),
    ingested_at DateTime64(3, 'UTC')
)
ENGINE = ReplacingMergeTree(ingested_at)
PARTITION BY toYYYYMM(ts)
ORDER BY (tenant_id, object_id, agent_id, source_id, source_config_revision)
TTL toDateTime(ts) + INTERVAL 400 DAY DELETE;

CREATE TABLE IF NOT EXISTS source_connection_events_v1
(
    tenant_id String,
    object_id String,
    agent_id String,
    source_id String,
    state LowCardinality(String),
    reason Nullable(String),
    ts DateTime64(3, 'UTC'),
    ingested_at DateTime64(3, 'UTC')
)
ENGINE = MergeTree
PARTITION BY toYYYYMM(ts)
ORDER BY (tenant_id, object_id, source_id, ts)
TTL toDateTime(ts) + INTERVAL 400 DAY DELETE;

CREATE TABLE IF NOT EXISTS agent_status_events_v1
(
    tenant_id String,
    object_id String,
    agent_id String,
    status LowCardinality(String),
    ts DateTime64(3, 'UTC'),
    ingested_at DateTime64(3, 'UTC')
)
ENGINE = MergeTree
PARTITION BY toYYYYMM(ts)
ORDER BY (tenant_id, object_id, agent_id, ts)
TTL toDateTime(ts) + INTERVAL 400 DAY DELETE;

CREATE TABLE IF NOT EXISTS derived_events_v1
(
    tenant_id String,
    derived_event_id String,
    idempotency_key String,
    object_id String,
    rule_or_metric_id Nullable(String),
    event_type LowCardinality(String),
    ts DateTime64(3, 'UTC'),
    produced_at DateTime64(3, 'UTC'),
    value_type LowCardinality(String),
    value_float Nullable(Float64),
    value_bool Nullable(Bool),
    value_string Nullable(String),
    source_event_ids_json String,
    attributes_json String
)
ENGINE = ReplacingMergeTree(produced_at)
PARTITION BY toYYYYMM(ts)
ORDER BY (tenant_id, object_id, event_type, ts, idempotency_key)
TTL toDateTime(ts) + INTERVAL 180 DAY DELETE;

CREATE TABLE IF NOT EXISTS alarm_history_events_v1
(
    tenant_id String,
    alarm_event_id String,
    alarm_id String,
    object_id String,
    event_type LowCardinality(String),
    severity LowCardinality(String),
    state LowCardinality(String),
    operator_id Nullable(String),
    reason Nullable(String),
    ts DateTime64(3, 'UTC'),
    ingested_at DateTime64(3, 'UTC'),
    payload_json String
)
ENGINE = ReplacingMergeTree(ingested_at)
PARTITION BY toYYYYMM(ts)
ORDER BY (tenant_id, object_id, alarm_id, ts, alarm_event_id)
TTL toDateTime(ts) + INTERVAL 5 YEAR DELETE;

CREATE TABLE IF NOT EXISTS kafka_telemetry_events_raw_v1
(
    payload_json String,
    ingested_at DateTime64(3, 'UTC') DEFAULT now64(3)
)
ENGINE = MergeTree
ORDER BY ingested_at;

CREATE TABLE IF NOT EXISTS kafka_source_configs_raw_v1
(
    payload_json String,
    ingested_at DateTime64(3, 'UTC') DEFAULT now64(3)
)
ENGINE = MergeTree
ORDER BY ingested_at;

CREATE TABLE IF NOT EXISTS kafka_source_connections_raw_v1
(
    payload_json String,
    ingested_at DateTime64(3, 'UTC') DEFAULT now64(3)
)
ENGINE = MergeTree
ORDER BY ingested_at;

CREATE TABLE IF NOT EXISTS kafka_agent_status_raw_v1
(
    payload_json String,
    ingested_at DateTime64(3, 'UTC') DEFAULT now64(3)
)
ENGINE = MergeTree
ORDER BY ingested_at;

CREATE TABLE IF NOT EXISTS kafka_derived_events_raw_v1
(
    payload_json String,
    ingested_at DateTime64(3, 'UTC') DEFAULT now64(3)
)
ENGINE = MergeTree
ORDER BY ingested_at;
