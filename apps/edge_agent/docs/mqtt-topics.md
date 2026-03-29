# MQTT Topics и Publish Contract

Дата: 2026-03-28  
Статус: working draft

## Назначение

Этот документ фиксирует transport-specific `MQTT` publish contract для `Edge Telemetry Agent`:

- topic tree для `telemetry`, source metadata catalog и `status`
- правила versioning для `message_type`
- routing rules между topic path и payload
- publish properties (`QoS`, `retain`, `expiry`)
- таблицу MQTT topics для MVP

Каноническая схема telemetry event и модели конфигурации остаются в
[`data-contracts.md`](./data-contracts.md).

## Версионирование

Для MVP принимается простая схема синхронизации:

- агент и backend договариваются о фиксированном наборе versioned JSON message types
- тип сообщения передается в поле `message_type`
- backend поддерживает известные ему версии контрактов
- при изменении формата создается новый versioned contract, например `wm.telemetry.event.v2`
- отдельный schema registry в MVP не используется

## Topic Tree

Корневой префикс:

- `wm/v1`

Telemetry topic:

```text
wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/points/{point_key}/event
```

Metadata topic:

```text
wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/meta/catalog
```

Status topics:

```text
wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/status/connection
wm/v1/objects/{object_id}/agents/{agent_id}/status/lwt
```

## Routing Rules

- `point_key` это safe representation от `point_ref`, пригодное для topic path
- для telemetry routing identity берется из topic, а не дублируется в payload
- для source metadata catalog допустимо дублирование identity в payload ради self-describing consumer contract
- `object_id` и `source_id` должны быть slug-safe
- `agent_id` допускается как UUID
- для `point_key` используется обратимо-кодируемое safe representation, например percent-encoding от `point_ref`

## Telemetry Payload

Telemetry payload:

- не повторяет `object_id`
- не повторяет `agent_id`
- не повторяет `source_id`
- не повторяет `point_key`
- не повторяет стабильные point metadata
- содержит только динамические поля события и поля, нужные для доставки/дедупликации
- для MVP поддерживает только scalar values: `boolean`, `number`, `string`
- complex protocol values вроде массивов, структур или `ByteString` не должны публиковаться в этот payload без новой версии контракта

Пример telemetry payload:

```json
{
  "message_type": "wm.telemetry.event.v1",
  "event_id": "01JQ2J7M3M3PM3DY7M6RTN9Q9M",
  "event_type": "telemetry.changed",
  "ts": "2026-03-20T09:15:22Z",
  "observation_mode": "listen",
  "value": true,
  "value_raw": "01",
  "quality": "good",
  "sequence": 1842
}
```

Правила публикации:

- telemetry event = один `PUBLISH`
- `QoS = 1`
- `retain = false`
- `Content Type = application/json`
- `Message Expiry Interval` задается в конфиге
- publisher должен использовать `Topic Alias`, если broker объявил ненулевой `Topic Alias Maximum`
- current payload version не предназначена для complex `OPC UA` values

## Source Metadata Catalog Payload

Metadata payload:

- публикуется как retained self-describing record на source
- содержит статическое описание всех точек этого source
- уменьшает число retained records и количество metadata subscriptions у consumer-ов

Пример metadata payload:

```json
{
  "message_type": "wm.source.meta.catalog.v1",
  "object_id": "demo-stand-01",
  "agent_id": "7d4d5f94-0c98-4b69-9f16-0da7ff20f7eb",
  "source_id": "knx_main",
  "source_type": "knx",
  "ts": "2026-03-20T09:15:00Z",
  "points": [
    {
      "point_key": "0%2F0%2F7",
      "point_ref": "0/0/7",
      "name": "switch_feedback",
      "signal_type": "feedback",
      "value_type": "boolean",
      "value_model": "knx.dpt.1.001",
      "unit": null,
      "tags": {
        "room": "demo",
        "equipment": "light_1"
      }
    }
  ]
}
```

Правила для metadata:

- `QoS = 1`
- `retain = true`
- публикуется при успешном connect и при изменении конфигурации source/points
- per-point `.../points/{point_key}/meta` topics в MVP не публикуются

## Минимизация MQTT Трафика

- для live telemetry consumer по умолчанию подписывается на `.../points/+/event` на нужном уровне `source`, а не создает отдельную subscription на каждую точку
- для metadata consumer по умолчанию подписывается на один retained topic `.../sources/{source_id}/meta/catalog`
- retained `state` topic для каждой точки не вводится, чтобы не удваивать publish volume
- все стабильные point attributes выносятся из telemetry payload в metadata catalog

## Таблица MQTT Topics

| Topic type | Topic template | Message contract | Назначение | QoS | Retain | Expiry | Когда публикуется |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `event` | `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/points/{point_key}/event` | `wm.telemetry.event.v1` | Основной поток телеметрии по одной точке | `1` | `false` | `telemetry_message_expiry_seconds`, по умолчанию `86400` | Каждый раз, когда point прошел фильтр публикации |
| `catalog` | `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/meta/catalog` | `wm.source.meta.catalog.v1` | Self-describing catalog всех точек source для consumer-ов и диагностики | `1` | `true` | нет | При успешном connect и при изменении конфигурации source/points |
| `connection` | `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/status/connection` | `wm.source.connection.v1` | Состояние southbound-соединения конкретного source | `1` | `true` | нет | При изменении состояния source, например `connected` / `disconnected` / `reconnecting` |
| `lwt` | `wm/v1/objects/{object_id}/agents/{agent_id}/status/lwt` | `wm.agent.lwt.v1` | Наличие или внезапная потеря самого MQTT publisher агента | `1` | `true` | нет | `offline` публикует broker как Will при аварийном разрыве, `online` публикует агент после успешного connect |

## Примеры MQTT Status Payload

### `connection`

```json
{
  "message_type": "wm.source.connection.v1",
  "state": "connected",
  "ts": "2026-03-28T12:35:10Z",
  "reason": null
}
```

```json
{
  "message_type": "wm.source.connection.v1",
  "state": "disconnected",
  "ts": "2026-03-28T12:36:42Z",
  "reason": "timeout"
}
```

### `lwt`

```json
{
  "message_type": "wm.agent.lwt.v1",
  "status": "online",
  "ts": "2026-03-28T12:35:01Z"
}
```

```json
{
  "message_type": "wm.agent.lwt.v1",
  "status": "offline",
  "ts": "2026-03-28T12:34:56Z"
}
```
