CREATE MATERIALIZED VIEW IF NOT EXISTS telemetry_events_from_raw_mv_v1
TO telemetry_events_v1
AS SELECT
    JSONExtractString(payload_json, 'tenant_id') AS tenant_id,
    JSONExtractString(payload_json, 'event_id') AS event_id,
    JSONExtractString(payload_json, 'idempotency_key') AS idempotency_key,
    JSONExtractString(payload_json, 'object_id') AS object_id,
    JSONExtractString(payload_json, 'agent_id') AS agent_id,
    JSONExtractString(payload_json, 'source_id') AS source_id,
    JSONExtractString(payload_json, 'source_type') AS source_type,
    JSONExtractString(payload_json, 'point_id') AS point_id,
    JSONExtractString(payload_json, 'point_key') AS point_key,
    JSONExtractString(payload_json, 'point_ref') AS point_ref,
    JSONExtractString(payload_json, 'source_config_revision') AS source_config_revision,
    parseDateTime64BestEffort(JSONExtractString(payload_json, 'ts'), 3, 'UTC') AS ts,
    parseDateTime64BestEffort(JSONExtractString(payload_json, 'ingested_at'), 3, 'UTC') AS ingested_at,
    JSONExtractString(payload_json, 'event_type') AS event_type,
    JSONExtractString(payload_json, 'observation_mode') AS observation_mode,
    JSONExtractString(payload_json, 'value_type') AS value_type,
    if(value_type = 'number', JSONExtract(payload_json, 'value', 'Nullable(Float64)'), CAST(NULL, 'Nullable(Float64)')) AS value_float,
    if(value_type = 'boolean', JSONExtract(payload_json, 'value', 'Nullable(Bool)'), CAST(NULL, 'Nullable(Bool)')) AS value_bool,
    if(value_type = 'string', JSONExtract(payload_json, 'value', 'Nullable(String)'), CAST(NULL, 'Nullable(String)')) AS value_string,
    if(JSONHas(payload_json, 'value_raw'), JSONExtract(payload_json, 'value_raw', 'Nullable(String)'), CAST(NULL, 'Nullable(String)')) AS value_raw,
    JSONExtractString(payload_json, 'quality') AS quality,
    JSONExtract(payload_json, 'sequence', 'UInt64') AS sequence
FROM kafka_telemetry_events_raw_v1
WHERE throwIf(
    JSONExtractString(payload_json, 'message_type') != 'wm.platform.telemetry.event.v1'
    OR NOT JSONHas(payload_json, 'tenant_id')
    OR NOT JSONHas(payload_json, 'event_id')
    OR NOT JSONHas(payload_json, 'idempotency_key')
    OR NOT JSONHas(payload_json, 'object_id')
    OR NOT JSONHas(payload_json, 'agent_id')
    OR NOT JSONHas(payload_json, 'source_id')
    OR NOT JSONHas(payload_json, 'source_type')
    OR NOT JSONHas(payload_json, 'point_id')
    OR NOT JSONHas(payload_json, 'point_key')
    OR NOT JSONHas(payload_json, 'point_ref')
    OR NOT JSONHas(payload_json, 'source_config_revision')
    OR NOT JSONHas(payload_json, 'ts')
    OR NOT JSONHas(payload_json, 'ingested_at')
    OR NOT JSONHas(payload_json, 'event_type')
    OR NOT JSONHas(payload_json, 'observation_mode')
    OR NOT JSONHas(payload_json, 'value_type')
    OR NOT JSONHas(payload_json, 'value')
    OR NOT JSONHas(payload_json, 'quality')
    OR NOT JSONHas(payload_json, 'sequence')
    OR JSONExtractString(payload_json, 'tenant_id') = ''
    OR JSONExtractString(payload_json, 'event_id') = ''
    OR JSONExtractString(payload_json, 'idempotency_key') = ''
    OR JSONExtractString(payload_json, 'object_id') = ''
    OR JSONExtractString(payload_json, 'agent_id') = ''
    OR JSONExtractString(payload_json, 'source_id') = ''
    OR JSONExtractString(payload_json, 'source_type') = ''
    OR JSONExtractString(payload_json, 'point_id') = ''
    OR JSONExtractString(payload_json, 'point_key') = ''
    OR JSONExtractString(payload_json, 'point_ref') = ''
    OR JSONExtractString(payload_json, 'source_config_revision') = ''
    OR JSONExtractString(payload_json, 'event_type') NOT IN ('telemetry.changed', 'telemetry.sample')
    OR JSONExtractString(payload_json, 'observation_mode') NOT IN ('listen', 'read_on_start', 'periodic_read')
    OR JSONExtractString(payload_json, 'value_type') NOT IN ('boolean', 'number', 'string')
    OR JSONExtractString(payload_json, 'quality') NOT IN ('good', 'uncertain', 'bad')
    OR JSONType(payload_json, 'sequence') NOT IN ('Int64', 'UInt64')
    OR JSONExtract(payload_json, 'sequence', 'Int64') < 1
    OR (
        JSONType(payload_json, 'value') != 'Null'
        AND JSONExtractString(payload_json, 'value_type') = 'number'
        AND JSONType(payload_json, 'value') NOT IN ('Int64', 'UInt64', 'Float64', 'Double')
    )
    OR (
        JSONType(payload_json, 'value') != 'Null'
        AND JSONExtractString(payload_json, 'value_type') = 'boolean'
        AND JSONType(payload_json, 'value') != 'Bool'
    )
    OR (
        JSONType(payload_json, 'value') != 'Null'
        AND JSONExtractString(payload_json, 'value_type') = 'string'
        AND JSONType(payload_json, 'value') != 'String'
    ),
    'telemetry raw payload violates wm.platform.telemetry.event.v1 required fields'
) = 0;

CREATE MATERIALIZED VIEW IF NOT EXISTS source_config_snapshots_from_raw_mv_v1
TO source_config_snapshots_v1
AS SELECT
    JSONExtractString(payload_json, 'tenant_id') AS tenant_id,
    JSONExtractString(payload_json, 'object_id') AS object_id,
    JSONExtractString(payload_json, 'agent_id') AS agent_id,
    JSONExtractString(payload_json, 'source_id') AS source_id,
    JSONExtractString(payload_json, 'source_type') AS source_type,
    JSONExtractString(payload_json, 'source_config_revision') AS source_config_revision,
    JSONExtractRaw(payload_json, 'points') AS points_json,
    parseDateTime64BestEffort(JSONExtractString(payload_json, 'ts'), 3, 'UTC') AS ts,
    parseDateTime64BestEffort(JSONExtractString(payload_json, 'ingested_at'), 3, 'UTC') AS ingested_at
FROM kafka_source_configs_raw_v1
WHERE throwIf(
    JSONExtractString(payload_json, 'message_type') != 'wm.platform.source.config.v1'
    OR NOT JSONHas(payload_json, 'tenant_id')
    OR NOT JSONHas(payload_json, 'object_id')
    OR NOT JSONHas(payload_json, 'agent_id')
    OR NOT JSONHas(payload_json, 'source_id')
    OR NOT JSONHas(payload_json, 'source_type')
    OR NOT JSONHas(payload_json, 'source_config_revision')
    OR NOT JSONHas(payload_json, 'points')
    OR NOT JSONHas(payload_json, 'ts')
    OR NOT JSONHas(payload_json, 'ingested_at')
    OR JSONExtractString(payload_json, 'tenant_id') = ''
    OR JSONExtractString(payload_json, 'object_id') = ''
    OR JSONExtractString(payload_json, 'agent_id') = ''
    OR JSONExtractString(payload_json, 'source_id') = ''
    OR JSONExtractString(payload_json, 'source_type') = ''
    OR JSONExtractString(payload_json, 'source_config_revision') = ''
    OR JSONType(payload_json, 'points') != 'Array',
    'source config raw payload violates wm.platform.source.config.v1 required fields'
) = 0;

CREATE MATERIALIZED VIEW IF NOT EXISTS source_connection_events_from_raw_mv_v1
TO source_connection_events_v1
AS SELECT
    JSONExtractString(payload_json, 'tenant_id') AS tenant_id,
    JSONExtractString(payload_json, 'object_id') AS object_id,
    JSONExtractString(payload_json, 'agent_id') AS agent_id,
    JSONExtractString(payload_json, 'source_id') AS source_id,
    JSONExtractString(payload_json, 'state') AS state,
    if(JSONHas(payload_json, 'reason'), JSONExtract(payload_json, 'reason', 'Nullable(String)'), CAST(NULL, 'Nullable(String)')) AS reason,
    parseDateTime64BestEffort(JSONExtractString(payload_json, 'ts'), 3, 'UTC') AS ts,
    parseDateTime64BestEffort(JSONExtractString(payload_json, 'ingested_at'), 3, 'UTC') AS ingested_at
FROM kafka_source_connections_raw_v1
WHERE throwIf(
    JSONExtractString(payload_json, 'message_type') != 'wm.platform.source.connection.v1'
    OR NOT JSONHas(payload_json, 'tenant_id')
    OR NOT JSONHas(payload_json, 'object_id')
    OR NOT JSONHas(payload_json, 'agent_id')
    OR NOT JSONHas(payload_json, 'source_id')
    OR NOT JSONHas(payload_json, 'state')
    OR NOT JSONHas(payload_json, 'ts')
    OR NOT JSONHas(payload_json, 'ingested_at')
    OR JSONExtractString(payload_json, 'tenant_id') = ''
    OR JSONExtractString(payload_json, 'object_id') = ''
    OR JSONExtractString(payload_json, 'agent_id') = ''
    OR JSONExtractString(payload_json, 'source_id') = ''
    OR JSONExtractString(payload_json, 'state') NOT IN ('connected', 'disconnected', 'reconnecting'),
    'source connection raw payload violates wm.platform.source.connection.v1 required fields'
) = 0;

CREATE MATERIALIZED VIEW IF NOT EXISTS agent_status_events_from_raw_mv_v1
TO agent_status_events_v1
AS SELECT
    JSONExtractString(payload_json, 'tenant_id') AS tenant_id,
    JSONExtractString(payload_json, 'object_id') AS object_id,
    JSONExtractString(payload_json, 'agent_id') AS agent_id,
    JSONExtractString(payload_json, 'status') AS status,
    parseDateTime64BestEffort(JSONExtractString(payload_json, 'ts'), 3, 'UTC') AS ts,
    parseDateTime64BestEffort(JSONExtractString(payload_json, 'ingested_at'), 3, 'UTC') AS ingested_at
FROM kafka_agent_status_raw_v1
WHERE throwIf(
    JSONExtractString(payload_json, 'message_type') != 'wm.platform.agent.status.v1'
    OR NOT JSONHas(payload_json, 'tenant_id')
    OR NOT JSONHas(payload_json, 'object_id')
    OR NOT JSONHas(payload_json, 'agent_id')
    OR NOT JSONHas(payload_json, 'status')
    OR NOT JSONHas(payload_json, 'ts')
    OR NOT JSONHas(payload_json, 'ingested_at')
    OR JSONExtractString(payload_json, 'tenant_id') = ''
    OR JSONExtractString(payload_json, 'object_id') = ''
    OR JSONExtractString(payload_json, 'agent_id') = ''
    OR JSONExtractString(payload_json, 'status') NOT IN ('online', 'offline'),
    'agent status raw payload violates wm.platform.agent.status.v1 required fields'
) = 0;

CREATE MATERIALIZED VIEW IF NOT EXISTS derived_events_from_raw_mv_v1
TO derived_events_v1
AS SELECT
    JSONExtractString(payload_json, 'tenant_id') AS tenant_id,
    JSONExtractString(payload_json, 'derived_event_id') AS derived_event_id,
    JSONExtractString(payload_json, 'idempotency_key') AS idempotency_key,
    JSONExtractString(payload_json, 'object_id') AS object_id,
    if(JSONHas(payload_json, 'rule_or_metric_id'), JSONExtract(payload_json, 'rule_or_metric_id', 'Nullable(String)'), CAST(NULL, 'Nullable(String)')) AS rule_or_metric_id,
    JSONExtractString(payload_json, 'event_type') AS event_type,
    parseDateTime64BestEffort(JSONExtractString(payload_json, 'ts'), 3, 'UTC') AS ts,
    parseDateTime64BestEffort(JSONExtractString(payload_json, 'produced_at'), 3, 'UTC') AS produced_at,
    JSONExtractString(payload_json, 'value_type') AS value_type,
    if(value_type = 'number', JSONExtract(payload_json, 'value', 'Nullable(Float64)'), CAST(NULL, 'Nullable(Float64)')) AS value_float,
    if(value_type = 'boolean', JSONExtract(payload_json, 'value', 'Nullable(Bool)'), CAST(NULL, 'Nullable(Bool)')) AS value_bool,
    if(value_type = 'string', JSONExtract(payload_json, 'value', 'Nullable(String)'), CAST(NULL, 'Nullable(String)')) AS value_string,
    if(JSONHas(payload_json, 'source_event_ids'), JSONExtractRaw(payload_json, 'source_event_ids'), '[]') AS source_event_ids_json,
    if(JSONHas(payload_json, 'attributes'), JSONExtractRaw(payload_json, 'attributes'), '{}') AS attributes_json
FROM kafka_derived_events_raw_v1
WHERE throwIf(
    JSONExtractString(payload_json, 'message_type') != 'wm.platform.derived.event.v1'
    OR NOT JSONHas(payload_json, 'tenant_id')
    OR NOT JSONHas(payload_json, 'derived_event_id')
    OR NOT JSONHas(payload_json, 'idempotency_key')
    OR NOT JSONHas(payload_json, 'object_id')
    OR NOT JSONHas(payload_json, 'event_type')
    OR NOT JSONHas(payload_json, 'ts')
    OR NOT JSONHas(payload_json, 'produced_at')
    OR NOT JSONHas(payload_json, 'value_type')
    OR NOT JSONHas(payload_json, 'value')
    OR JSONExtractString(payload_json, 'tenant_id') = ''
    OR JSONExtractString(payload_json, 'derived_event_id') = ''
    OR JSONExtractString(payload_json, 'idempotency_key') = ''
    OR JSONExtractString(payload_json, 'object_id') = ''
    OR JSONExtractString(payload_json, 'event_type') = ''
    OR JSONExtractString(payload_json, 'value_type') NOT IN ('boolean', 'number', 'string')
    OR (
        JSONHas(payload_json, 'rule_or_metric_id')
        AND JSONType(payload_json, 'rule_or_metric_id') NOT IN ('String', 'Null')
    )
    OR (
        JSONHas(payload_json, 'source_event_ids')
        AND JSONType(payload_json, 'source_event_ids') != 'Array'
    )
    OR (
        JSONHas(payload_json, 'attributes')
        AND JSONType(payload_json, 'attributes') != 'Object'
    )
    OR (
        JSONType(payload_json, 'value') != 'Null'
        AND JSONExtractString(payload_json, 'value_type') = 'number'
        AND JSONType(payload_json, 'value') NOT IN ('Int64', 'UInt64', 'Float64', 'Double')
    )
    OR (
        JSONType(payload_json, 'value') != 'Null'
        AND JSONExtractString(payload_json, 'value_type') = 'boolean'
        AND JSONType(payload_json, 'value') != 'Bool'
    )
    OR (
        JSONType(payload_json, 'value') != 'Null'
        AND JSONExtractString(payload_json, 'value_type') = 'string'
        AND JSONType(payload_json, 'value') != 'String'
    ),
    'derived event raw payload violates wm.platform.derived.event.v1 required fields'
) = 0;
