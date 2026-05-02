# Контракты Edge Telemetry Agent

Дата: 2026-05-02
Статус: working draft

Этот раздел фиксирует контракты данных, которыми владеет `Edge Telemetry Agent`.
Существующие документы в `apps/edge_agent/docs/` остаются guide-ами и примерами,
а полные схемы и имена topics находятся здесь.

## Поток данных

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

## Контракты

| Contract-id | Файл | Назначение |
| --- | --- | --- |
| `edge.configuration.v1` | `schemas/edge.configuration.v1.schema.json` | Runtime-конфигурация агента: `agent`, `delivery`, `storage`, `observability`, `sources`, `points` |
| `edge.telemetry-event.v1` | `schemas/edge.telemetry-event.v1.schema.json` | Каноническое telemetry event внутри edge-agent до MQTT wire transform |
| `edge.sqlite-point-state-cache.v1` | `schemas/edge.sqlite-point-state-cache.v1.schema.json` | Persistent cache последнего состояния точки в SQLite |
| `edge.sqlite-outbox-record.v1` | `schemas/edge.sqlite-outbox-record.v1.schema.json` | Запись очереди надежной доставки в SQLite |
| `wm.telemetry.event.v1` | `schemas/wm.telemetry.event.v1.schema.json` | Thin MQTT payload для telemetry event |
| `wm.source.meta.catalog.v1` | `schemas/wm.source.meta.catalog.v1.schema.json` | Retained source-level metadata catalog |
| `wm.source.connection.v1` | `schemas/wm.source.connection.v1.schema.json` | Retained status сообщения southbound source |
| `wm.agent.lwt.v1` | `schemas/wm.agent.lwt.v1.schema.json` | Retained LWT/status сообщения MQTT publisher агента |
| `wm.mqtt.topic-tree.v1` | `mqtt-topic-tree.v1.md` | MQTT topic templates, routing identity, QoS, retain и expiry |

## Основные правила

- `event_id` — непрозрачная непустая строка для дедупликации. Рекомендуемый production generator: `UUIDv7` или `ULID`; consumer не должен зависеть от конкретного формата.
- `catalog_revision` связывает telemetry event с retained metadata catalog, по которому backend выполняет enrichment.
- `object_id`, `agent_id`, `source_id` и segments `topic_root` должны соответствовать `mqtt_path_id`: `^[a-z0-9][a-z0-9_-]{0,127}$`.
- `point_key` — обратимое percent-encoding от `point_ref`, пригодное для MQTT topic path.
- `command` points по умолчанию не публикуются как telemetry, если `publish.enabled` не задан явно.
- SQLite на edge хранит техническое состояние агента, а не исторический архив телеметрии.
- `SQLite Point State Cache` нужен для warm restart, фильтрации изменений и восстановления sequence.
- `SQLite Delivery Outbox` нужен для надежной retry-доставки telemetry events.
- Metadata/status MQTT messages могут публиковаться напрямую и переиздаваться при connect без обязательной записи в outbox.
