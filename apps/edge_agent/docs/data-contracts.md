# Контракты данных edge-agent

Дата: 2026-05-02
Статус: guide

Этот документ является guide-ом по контрактам `Edge Telemetry Agent`.
Канонический source of truth для схем находится в
[`docs/contracts/edge-agent/`](../../../docs/contracts/edge-agent/).

## Где искать полные контракты

| Область | Source of truth |
| --- | --- |
| Runtime-конфигурация `agent / sources / points` | `docs/contracts/edge-agent/schemas/edge.configuration.v1.schema.json` |
| Каноническое telemetry event внутри edge-agent | `docs/contracts/edge-agent/schemas/edge.telemetry-event.v1.schema.json` |
| SQLite Point State Cache | `docs/contracts/edge-agent/schemas/edge.sqlite-point-state-cache.v1.schema.json` |
| SQLite Delivery Outbox | `docs/contracts/edge-agent/schemas/edge.sqlite-outbox-record.v1.schema.json` |
| MQTT messages и topic tree | `docs/contracts/edge-agent/README.md` и `docs/contracts/edge-agent/mqtt-topic-tree.v1.md` |

## Runtime dataflow

```text
Observation
  -> Protocol Decoder / Normalizer
  -> In-memory Last Value Cache
  -> SQLite Point State Cache
  -> Change Filter
  -> SQLite Delivery Outbox
  -> Delivery Worker
  -> MQTT topic tree
```

## Основные правила

- `event_id` является непрозрачной непустой строкой для дедупликации, а не UUID-only типом.
- `point_key` строится как обратимое percent-encoding от `point_ref`.
- `command` points по умолчанию не публикуются как telemetry, если `publish.enabled` не задан явно.
- `storage.sqlite_path` указывает на локальное техническое SQLite-хранилище агента, а не только на outbox.
- SQLite на edge не является историческим архивом телеметрии и не заменяет `Telemetry Store`.
- Metadata catalog и status messages могут публиковаться напрямую и переиздаваться при connect без обязательной записи в delivery outbox.

## Связанные документы

- [`mqtt-topics.md`](./mqtt-topics.md) — guide по MQTT publish contract.
- [`config/README.md`](../config/README.md) — структура конфигурации и правила размещения example/environment configs.
- [`ADR-004`](../../../docs/architecture/adrs/ADR-004-universal-agent-configuration.md) — решение по конфигурационной модели.
- [`ADR-005`](../../../docs/architecture/adrs/ADR-005-mqtt-event-transport.md) — решение по MQTT transport.
