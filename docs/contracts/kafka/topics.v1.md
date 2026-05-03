# `wm.kafka.topics.v1`

Дата: 2026-05-02
Статус: working draft

Этот контракт фиксирует Kafka-compatible topics `Monitoring & Alarm Platform`.
В production целевым broker-ом может быть `Redpanda`, API совместим с Kafka.
Локальный integration slice использует `Apache Kafka` как broker и
`Redpanda Connect` как connector pipeline `MQTT -> Kafka`.

## Topics

| Topic | Value schema | Kafka key | Retention | Compaction | Producers | Consumers |
| --- | --- | --- | --- | --- | --- | --- |
| `wm.platform.telemetry.events.v1` | `wm.platform.telemetry.event.v1` | `{tenant_id}|{object_id}|{source_id}|{point_key}` | `7d` | no | Redpanda Connect | `telemetry-store-writer.v1`, `streaming-analytics.v1`, `alarm-rule-engine.v1` |
| `wm.platform.source.configs.v1` | `wm.platform.source.config.v1` | `{tenant_id}|{object_id}|{agent_id}|{source_id}` | `30d` | yes | Redpanda Connect | `telemetry-store-writer.v1`, `streaming-analytics.v1` |
| `wm.platform.source.connections.v1` | `wm.platform.source.connection.v1` | `{tenant_id}|{object_id}|{agent_id}|{source_id}` | `30d` | yes | Redpanda Connect | `telemetry-store-writer.v1`, `alarm-rule-engine.v1` |
| `wm.platform.agent.status.v1` | `wm.platform.agent.status.v1` | `{tenant_id}|{object_id}|{agent_id}` | `30d` | yes | Redpanda Connect | `telemetry-store-writer.v1`, `alarm-rule-engine.v1` |
| `wm.platform.ingestion.errors.v1` | `wm.platform.ingestion.error.v1` | `{object_id}|{agent_id}|{source_id}|{message_kind}` | `30d` | no | Redpanda Connect | operations tooling |
| `wm.platform.derived.events.v1` | `wm.platform.derived.event.v1` | `{tenant_id}|{object_id}|{rule_or_metric_id}` | `7d` | no | Streaming Analytics | `telemetry-store-writer.v1`, `alarm-rule-engine.v1` |

## Consumer groups

| Consumer group | Reads | Writes / side effects |
| --- | --- | --- |
| `telemetry-store-writer.v1` | telemetry, source config, source connection, agent status, derived events | ClickHouse `Telemetry Store` tables |
| `streaming-analytics.v1` | telemetry, source config | derived events, rollups and aggregates |
| `alarm-rule-engine.v1` | telemetry, source connection, agent status, derived events | alarm history, current alarm workflow state and notifications |

## Common rules

- `tenant_id` обязателен во всех normal platform topics.
- `tenant_id` присутствует в MQTT telemetry payload как edge claim из server-issued runtime config и валидируется ingestion-слоем.
- `event_id` является непрозрачной непустой строкой; Kafka consumers не должны требовать UUID-only формат.
- `idempotency_key` обязателен для records, которые пишутся в ClickHouse.
- `wm.edge.runtime-config.v1` и `wm.edge.config.status.v1` не зеркалятся в Kafka topics этого контракта `v1`; они остаются retained MQTT contracts для bootstrap/operations.
- Topic names и key templates являются breaking contract surface; изменение требует новой версии topic.
- Compacted status/config topics хранят latest state по key, но не заменяют ClickHouse snapshots и history.
