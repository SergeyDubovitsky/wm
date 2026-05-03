CREATE VIEW IF NOT EXISTS telemetry_events_dedup_v1
AS SELECT
    tenant_id,
    event_id,
    idempotency_key,
    asset_id,
    agent_id,
    source_id,
    source_type,
    point_id,
    point_key,
    point_ref,
    source_config_revision,
    ts,
    ingested_at,
    event_type,
    observation_mode,
    value_type,
    value_float,
    value_bool,
    value_string,
    value_raw,
    quality,
    sequence
FROM telemetry_events_v1 FINAL;

CREATE VIEW IF NOT EXISTS telemetry_latest_v1
AS SELECT
    tenant_id,
    event_id,
    idempotency_key,
    asset_id,
    agent_id,
    source_id,
    source_type,
    point_id,
    point_key,
    point_ref,
    source_config_revision,
    ts,
    ingested_at,
    event_type,
    observation_mode,
    value_type,
    value_float,
    value_bool,
    value_string,
    value_raw,
    quality,
    sequence
FROM telemetry_events_dedup_v1
ORDER BY
    tenant_id ASC,
    asset_id ASC,
    source_id ASC,
    point_key ASC,
    ts DESC,
    ingested_at DESC
LIMIT 1 BY tenant_id, asset_id, source_id, point_key;

CREATE VIEW IF NOT EXISTS telemetry_1m_v1
AS SELECT
    tenant_id,
    asset_id,
    source_id,
    point_key,
    toStartOfMinute(ts) AS bucket_start,
    argMax(agent_id, ts) AS agent_id,
    argMax(source_type, ts) AS source_type,
    argMax(point_id, ts) AS point_id,
    argMax(point_ref, ts) AS point_ref,
    argMax(source_config_revision, ts) AS source_config_revision,
    min(ts) AS first_ts,
    max(ts) AS last_ts,
    count() AS event_count,
    countIf(quality = 'good') AS good_count,
    countIf(quality = 'uncertain') AS uncertain_count,
    countIf(quality = 'bad') AS bad_count,
    countIf(value_type = 'number' AND isNotNull(value_float)) AS number_count,
    minIf(value_float, value_type = 'number' AND isNotNull(value_float)) AS value_min,
    maxIf(value_float, value_type = 'number' AND isNotNull(value_float)) AS value_max,
    avgIf(value_float, value_type = 'number' AND isNotNull(value_float)) AS value_avg,
    argMaxIf(value_float, ts, value_type = 'number' AND isNotNull(value_float)) AS value_last
FROM telemetry_events_dedup_v1
GROUP BY
    tenant_id,
    asset_id,
    source_id,
    point_key,
    bucket_start;

CREATE VIEW IF NOT EXISTS telemetry_1h_v1
AS SELECT
    tenant_id,
    asset_id,
    source_id,
    point_key,
    toStartOfHour(ts) AS bucket_start,
    argMax(agent_id, ts) AS agent_id,
    argMax(source_type, ts) AS source_type,
    argMax(point_id, ts) AS point_id,
    argMax(point_ref, ts) AS point_ref,
    argMax(source_config_revision, ts) AS source_config_revision,
    min(ts) AS first_ts,
    max(ts) AS last_ts,
    count() AS event_count,
    countIf(quality = 'good') AS good_count,
    countIf(quality = 'uncertain') AS uncertain_count,
    countIf(quality = 'bad') AS bad_count,
    countIf(value_type = 'number' AND isNotNull(value_float)) AS number_count,
    minIf(value_float, value_type = 'number' AND isNotNull(value_float)) AS value_min,
    maxIf(value_float, value_type = 'number' AND isNotNull(value_float)) AS value_max,
    avgIf(value_float, value_type = 'number' AND isNotNull(value_float)) AS value_avg,
    argMaxIf(value_float, ts, value_type = 'number' AND isNotNull(value_float)) AS value_last
FROM telemetry_events_dedup_v1
GROUP BY
    tenant_id,
    asset_id,
    source_id,
    point_key,
    bucket_start;
