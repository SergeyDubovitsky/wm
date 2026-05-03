# Plan: ClickHouse Kafka Connect Ingestion

**Generated**: 2026-05-03
**ADR**: `docs/architecture/adrs/ADR-009-kafka-to-clickhouse-ingestion.md`
**Estimated Complexity**: High

## Implementation Progress

- Done: local ClickHouse service, healthcheck, env/port overrides.
- Done: explicit Kafka topic bootstrap for storage topics, storage DLQ and
  Kafka Connect internal topics.
- Done: `wm-clickhouse migrate status|up` forward-only migration workflow with
  checksum tracking.
- Done: first core/landing ClickHouse migration.
- Done: local Kafka Connect service with ClickHouse Kafka Connect Sink and
  repeatable connector bootstrap.
- Done: raw JSON landing PoC using `StringConverter` + `HoistField$Value`;
  Kafka value is preserved byte-for-byte in `payload_json`.
- Done: integration fixture/test for
  `Kafka -> Kafka Connect -> ClickHouse raw landing`.
- Done: materialized views from landing tables into contract tables for
  telemetry, source config, source connection, agent status and derived events.
- Done: storage DLQ smoke for invalid telemetry records rejected by MV
  validation.
- Done: end-to-end smoke for
  `edge_agent -> MQTT -> Kafka -> Kafka Connect -> ClickHouse contract table`.
- Done: read/dedup conventions and replay/duplicate storage smoke with `FINAL`.
- Next: decide whether to add query views/latest-state tables or defer them to
  the next storage sprint.

## Overview

Реализовать storage slice по принятому `ADR-009`: локальный и будущий
production/cloud path используют один baseline `Kafka -> ClickHouse` через
`ClickHouse Kafka Connect Sink`. Connector пишет только в raw landing tables, а
ClickHouse materialized views преобразуют landing rows в contract tables из
`wm.clickhouse.telemetry-store.v1`.

В v1 Kafka Connect читает только topics, где `telemetry-store-writer.v1` указан
consumer-ом:

- `wm.platform.telemetry.events.v1`
- `wm.platform.source.configs.v1`
- `wm.platform.source.connections.v1`
- `wm.platform.agent.status.v1`
- `wm.platform.derived.events.v1`

`wm.platform.ingestion.errors.v1` и `alarm_history_events_v1` не входят в v1
Kafka Connect ingestion path.

Operational DLQ для этого path фиксируется отдельно от normal domain topics:
`wm.platform.telemetry-store.dlq.v1`.

## Prerequisites

- ADR-009 принят и является implementation gate.
- Контракты `docs/contracts/kafka/topics.v1.md` и
  `docs/contracts/clickhouse/telemetry-store.v1.md` остаются source of truth.
- Локальный Docker Compose stack остается development/integration slice, но
  config shape должен быть переносимым на self-hosted/cloud.
- `ClickHouse Kafka Connect Sink` используется с `exactlyOnce=false` для MVP;
  `exactlyOnce=true` откладывается до отдельного failure-mode PoC.
- MVP landing wire format использует raw JSON string: Kafka Connect
  `key.converter` и `value.converter` оба
  `org.apache.kafka.connect.storage.StringConverter`, Kafka value попадает в
  ClickHouse колонку `payload_json String`.
- Невалидные records не пишутся в corrupt contract rows. Connector-level
  parse/insert errors направляются в Kafka DLQ topic
  `wm.platform.telemetry-store.dlq.v1`.

## Sprint 1: Local ClickHouse и миграции

**Goal**: Поднять ClickHouse локально и получить повторяемый migration workflow.

**Demo/Validation**:

- `docker compose` поднимает `clickhouse`.
- Local Kafka bootstrap создает все topics, нужные ClickHouse ingestion path,
  без зависимости от broker auto-create.
- Raw JSON StringConverter PoC подтверждает landing wire format до финального
  DDL.
- `uv run wm-clickhouse migrate up` создает migration metadata и core/landing
  tables.
- Повторный `uv run wm-clickhouse migrate up` идемпотентен.

### Task 1.1: Добавить ClickHouse в local compose

- **Location**: `infra/local/compose.yaml`, `.env.example`,
  `infra/local/README.md`, root `README.md`
- **Description**: Добавить service `clickhouse` с persistent volumes,
  healthcheck, HTTP/native ports и env overrides.
- **Dependencies**: none
- **Acceptance Criteria**:
  - ClickHouse стартует отдельной compose-командой и в составе platform stack.
  - Host ports и credentials задаются через `.env`.
- **Validation**:
  - `docker compose --env-file ../../.env up -d clickhouse`
  - healthcheck возвращает ready status.

### Task 1.2: Validate Kafka Connect raw JSON landing PoC

- **Location**: `infra/local/kafka-connect/`,
  `infra/clickhouse/poc/` or temporary PoC migration/script,
  `docs/architecture/adrs/ADR-009-kafka-to-clickhouse-ingestion.md` if the PoC
  changes assumptions
- **Description**: Проверить до финального DDL, что ClickHouse Kafka Connect
  Sink с `org.apache.kafka.connect.storage.StringConverter` для key/value
  пишет Kafka value как исходную JSON string в `payload_json String`.
- **Dependencies**: Task 1.1
- **Acceptance Criteria**:
  - Test Kafka record appears in ClickHouse landing row with JSON-equivalent
    `payload_json` and no field loss.
  - A canonical compact JSON test value is preserved byte-for-byte in
    `payload_json`.
  - `key.converter` and `value.converter` are both fixed to
    `org.apache.kafka.connect.storage.StringConverter` for MVP.
  - If connector-supported metadata/SMT cannot reliably populate topic,
    partition, offset, key and timestamp without domain mapping, v1 landing
    schema is reduced to minimum `payload_json String` and
    `ingested_at DateTime64(3, 'UTC')`; Kafka metadata capture becomes a
    follow-up task.
- **Validation**:
  - Manual PoC against local Kafka Connect + ClickHouse.
  - Short PoC notes committed near connector config or ADR implementation notes.

### Task 1.3: Add local Kafka topic bootstrap for storage path

- **Location**: `infra/local/compose.yaml`, `infra/local/README.md`
- **Description**: Обновить `kafka-init`, чтобы local stack явно создавал все
  topics, которые нужны ClickHouse ingestion runtime and DLQ.
- **Dependencies**: none
- **Acceptance Criteria**:
  - `wm.platform.derived.events.v1` создается с retention `7d` и без
    compaction.
  - `wm.platform.telemetry-store.dlq.v1` создается с retention `30d` и без
    compaction.
  - Kafka Connect internal topics `config.storage.topic`,
    `offset.storage.topic`, `status.storage.topic` создаются явно, compacted и
    с local replication factor `1`.
  - ClickHouse ingestion tests do not rely on broker auto-create.
- **Validation**:
  - `kafka-topics.sh --describe` shows expected cleanup/retention config.

### Task 1.4: Добавить migration workflow

- **Location**: `tools/clickhouse_migrations/`,
  `infra/clickhouse/migrations/`, `pyproject.toml`
- **Description**: Сделать repo-native ClickHouse migration CLI with versioned
  SQL files, checksum tracking and forward-only migration policy.
- **Dependencies**: Task 1.1
- **Acceptance Criteria**:
  - CLI entrypoint is `uv run wm-clickhouse migrate status|up`.
  - Env source is `.env` or integration env with `CLICKHOUSE_HOST`,
    `CLICKHOUSE_HTTP_PORT`, `CLICKHOUSE_DATABASE`, `CLICKHOUSE_USER`,
    `CLICKHOUSE_PASSWORD`, `CLICKHOUSE_SECURE`.
  - Metadata table is
    `schema_migrations(version String, checksum String, applied_at DateTime64(3, 'UTC'))`.
  - `migrate status` shows pending/applied migrations.
  - `migrate up` applies new migrations in filename order.
  - Applied SQL checksum mismatch is fatal.
  - No down migrations are implemented for v1.
- **Validation**:
  - Unit tests for order, status, checksum and mismatch failure.
  - Manual run against local ClickHouse.

### Task 1.5: Создать первую миграцию core + landing tables

- **Location**: `infra/clickhouse/migrations/0001_telemetry_store_core_v1.sql`
- **Description**: Создать core contract tables и raw landing tables.
- **Dependencies**: Task 1.2, Task 1.4
- **Acceptance Criteria**:
  - Core tables: `telemetry_events_v1`,
    `source_config_snapshots_v1`, `source_connection_events_v1`,
    `agent_status_events_v1`, `derived_events_v1`,
    `alarm_history_events_v1`.
  - Landing tables: по одной raw table на каждый v1 topic
    `telemetry-store-writer.v1`, with `payload_json String`,
    `ingested_at DateTime64(3, 'UTC')`, and Kafka metadata columns only if
    Task 1.2 proves the connector can populate them without unsafe domain SMT.
  - `alarm_history_events_v1` создается как contract table, но не имеет Kafka
    Connect landing/MV path.
- **Validation**:
  - `SHOW TABLES`
  - schema smoke queries against `system.columns`

## Sprint 2: Landing -> contract transform

**Goal**: Преобразовать raw Kafka payloads в ClickHouse contract tables через
materialized views.

**Demo/Validation**:

- Insert JSON into landing table creates expected row in contract table.
- Typed value mapping works for number, boolean and string.

### Task 2.1: Добавить materialized views

- **Location**: second migration or continuation migration after Task 1.5
- **Description**: Создать materialized views для:
  `telemetry_events_v1`, `source_config_snapshots_v1`,
  `source_connection_events_v1`, `agent_status_events_v1`,
  `derived_events_v1`.
- **Dependencies**: Task 1.5
- **Acceptance Criteria**:
  - MV parses `payload_json`.
  - `value_type` maps to `value_float`, `value_bool`, `value_string`.
  - MV expressions validate required fields with strict JSON extraction/casts
    and never silently coerce missing required fields into empty/default
    contract rows.
  - MV-level contract violations block the insert batch; with connector
    `errors.tolerance=all`, bounded retry and DLQ enabled, the failed
    record/batch is observable in `wm.platform.telemetry-store.dlq.v1`.
- **Validation**:
  - SQL fixtures for all supported message types.
  - Invalid JSON / missing required field fixture verifies no corrupt contract
    row is created.
  - Dedup smoke with repeated telemetry payload.

### Task 2.2: Add query/read conventions

- **Location**: `docs/contracts/clickhouse/telemetry-store.v1.md` or companion
  docs
- **Description**: Document when consumers must use `FINAL`,
  deduplicated/query views, latest-state tables and rollups.
- **Dependencies**: Task 2.1
- **Acceptance Criteria**:
  - API/Grafana guidance does not imply raw `ReplacingMergeTree` tables are
    instant unique state.
- **Validation**:
  - Documentation review against ADR-009.

## Sprint 3: Kafka Connect runtime

**Goal**: Add Kafka Connect with ClickHouse Sink and versioned connector config.

**Demo/Validation**:

- Kafka Connect starts locally.
- Connector config is applied by bootstrap/deploy script via REST API.
- Connector writes Kafka records into landing tables.

### Task 3.1: Add Kafka Connect service

- **Location**: `infra/local/compose.yaml`, connector image/build context,
  `.env.example`, local docs
- **Description**: Add Kafka Connect in distributed mode with ClickHouse Kafka
  Connect Sink installed.
- **Dependencies**: Sprint 1
- **Acceptance Criteria**:
  - Kafka Connect uses explicit internal topic names created by Task 1.3.
  - REST API is exposed only for local operations.
  - JMX/metrics port/config is prepared for future observability.
- **Validation**:
  - `GET /connectors`
  - Kafka internal topics exist with expected cleanup policy.

### Task 3.2: Add versioned connector config and bootstrap

- **Location**: `infra/local/kafka-connect/`, scripts under `infra/local/`
- **Description**: Add versioned JSON/YAML connector config with topics,
  `topic2TableMap`, DLQ, retry policy, `exactlyOnce=false`, and ClickHouse
  connection settings. Apply it via REST API from a repeatable script.
- **Dependencies**: Task 3.1
- **Acceptance Criteria**:
  - `key.converter` and `value.converter` are
    `org.apache.kafka.connect.storage.StringConverter`.
  - `topics` includes exactly:
    `wm.platform.telemetry.events.v1`,
    `wm.platform.source.configs.v1`,
    `wm.platform.source.connections.v1`,
    `wm.platform.agent.status.v1`,
    `wm.platform.derived.events.v1`.
  - `topic2TableMap` maps each source topic to its raw landing table.
  - `exactlyOnce=false`.
  - DLQ config is fixed:
    `errors.tolerance=all`,
    `errors.deadletterqueue.topic.name=wm.platform.telemetry-store.dlq.v1`,
    `errors.deadletterqueue.context.headers.enable=true`, and a bounded
    `errors.retry.timeout`.
  - Manual UI/API changes are treated as drift.
  - Re-running bootstrap reconciles connector config to repository state.
  - Secrets are injected via env/secret mechanism, not committed in plaintext.
- **Validation**:
  - `GET /connectors/{name}/config`
  - bootstrap idempotency test.

## Sprint 4: End-to-end verification

**Goal**: Prove `edge_agent -> MQTT -> Kafka -> Kafka Connect -> ClickHouse`
works against accepted contracts.

**Demo/Validation**:

- Existing MQTT/Kafka integration still passes.
- New ClickHouse integration confirms landing and contract table rows.
- Invalid storage records are routed to
  `wm.platform.telemetry-store.dlq.v1`, not silently dropped or coerced.

### Task 4.1: Extend integration fixtures

- **Location**: `tests/integration/conftest.py`
- **Description**: Extend `local_platform_stack` or add a new fixture that can
  start ClickHouse, migrations, Kafka Connect and connector bootstrap.
- **Dependencies**: Sprints 1-3
- **Acceptance Criteria**:
  - Tests reserve random host ports for MQTT, Kafka, ClickHouse HTTP/native and
    Kafka Connect REST/JMX.
  - Teardown removes volumes, connector state and local DLQ/Connect internal
    state with `docker compose down -v`.
- **Validation**:
  - Fixture smoke test.

### Task 4.2: Add E2E storage test

- **Location**: `tests/integration/`
- **Description**: Publish demo telemetry through existing edge flow, wait for
  Kafka Connect to write landing row, then assert contract row in
  `telemetry_events_v1`.
- **Dependencies**: Task 4.1
- **Acceptance Criteria**:
  - Kafka key and payload follow `wm.kafka.topics.v1`.
  - ClickHouse row follows `wm.clickhouse.telemetry-store.v1`.
  - Replayed duplicate telemetry event is safe under documented dedup/read
    semantics.
  - At least one derived event smoke record reaches `derived_events_v1`.
  - Invalid JSON or invalid required field reaches
    `wm.platform.telemetry-store.dlq.v1` with Kafka Connect context headers.
- **Validation**:
  - `uv run --group integration pytest tests/integration/...`

## Testing Strategy

- Unit tests for migration runner order/status/checksum behavior and config
  rendering/bootstrap logic.
- SQL-level tests for landing -> contract materialized views across telemetry,
  source config, source connection, agent status and derived event.
- Negative tests for invalid JSON / missing required fields verifying DLQ path
  and absence of corrupt contract rows.
- Integration tests for compose services and full ingestion flow.
- Documentation review to ensure ADR, contracts, and local README stay aligned.

## Potential Risks & Gotchas

- ClickHouse Kafka Connect Sink target tables must exist before connector start.
- The raw landing shape depends on StringConverter behavior; Task 1.2 is a hard
  gate before committing final DDL.
- Raw landing `payload_json` keeps domain mapping in SQL; MV expressions should
  stay small and contract-focused.
- Kafka Connect DLQ captures connector-level failures, but ClickHouse MV
  failures can be batch-scoped; tests must verify the actual connector behavior
  for invalid records before productionizing the policy.
- At-least-once delivery can create transient duplicates before ClickHouse
  merges; reads must follow ADR-009 conventions.
- Kafka Connect distributed mode requires internal topics and REST API
  bootstrap discipline even in local profile.
- `alarm_history_events_v1` is created by storage migration but intentionally
  not wired to Kafka Connect in v1.

## Rollback Plan

- Stop Kafka Connect and delete connector through REST API.
- Re-run compose without Kafka Connect while keeping existing MQTT/Kafka slice.
- Drop ClickHouse local volumes for development reset.
- For production migrations, add forward-only corrective migrations rather than
  editing already-applied SQL files.
