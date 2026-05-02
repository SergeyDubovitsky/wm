# Kafka Contracts

Дата: 2026-05-02
Статус: working draft

Раздел фиксирует Kafka topic names, keys, value schemas, retention,
partitioning и consumer group conventions `Monitoring & Alarm Platform`.

## Контракты

| Contract-id | Файл | Назначение |
| --- | --- | --- |
| `wm.kafka.topics.v1` | `topics.v1.md` | Topic names, keys, retention и consumer groups |
| `wm.platform.telemetry.event.v1` | `schemas/wm.platform.telemetry.event.v1.schema.json` | Canonical telemetry event |
| `wm.platform.source.config.v1` | `schemas/wm.platform.source.config.v1.schema.json` | Source config snapshot |
| `wm.platform.source.connection.v1` | `schemas/wm.platform.source.connection.v1.schema.json` | Source connection status event |
| `wm.platform.agent.status.v1` | `schemas/wm.platform.agent.status.v1.schema.json` | Agent LWT/status event |
| `wm.platform.ingestion.error.v1` | `schemas/wm.platform.ingestion.error.v1.schema.json` | Ingestion DLQ/error record |
| `wm.platform.derived.event.v1` | `schemas/wm.platform.derived.event.v1.schema.json` | Derived event from Streaming Analytics |
