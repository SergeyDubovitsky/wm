# MQTT Topics и Publish Contract

Дата: 2026-03-28  
Статус: working draft

## Назначение

Этот документ фиксирует transport-specific `MQTT` publish contract для `Edge Telemetry Agent`:

- topic tree для `telemetry`, `meta` и `status`
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
wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/points/{point_key}/meta
```

Status topics:

```text
wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/status/connection
wm/v1/objects/{object_id}/agents/{agent_id}/status/lwt
```

## Routing Rules

- `point_key` это safe representation от `point_ref`, пригодное для topic path
- для telemetry routing identity берется из topic, а не дублируется в payload
- для metadata допустимо дублирование identity в payload ради self-describing consumer contract
- `object_id` и `source_id` должны быть slug-safe
- `agent_id` допускается как UUID
- для `point_key` используется обратимо-кодируемое safe representation, например percent-encoding от `point_ref`

## Telemetry Payload

Telemetry payload:

- не повторяет `object_id`
- не повторяет `agent_id`
- не повторяет `source_id`
- не повторяет `point_key`
- содержит только event data и point metadata, которые нельзя надежно вывести только из topic

Пример telemetry payload:

```json
{
  "message_type": "wm.telemetry.event.v1",
  "event_id": "01JQ2J7M3M3PM3DY7M6RTN9Q9M",
  "ts": "2026-03-20T09:15:22Z",
  "name": "switch_feedback",
  "value_type": "boolean",
  "value_model": "knx.dpt.1.001",
  "signal_type": "feedback",
  "observation_mode": "listen",
  "value": true,
  "value_raw": "01",
  "quality": "good",
  "sequence": 1842,
  "unit": null,
  "tags": {
    "room": "demo",
    "equipment": "light_1"
  }
}
```

Правила публикации:

- telemetry event = один `PUBLISH`
- `QoS = 1`
- `retain = false`
- `Content Type = application/json`
- `Message Expiry Interval` задается в конфиге

## Metadata Payload

Metadata payload:

- публикуется как retained self-describing record для точки
- может намеренно дублировать routing identity из topic
- ориентирован на простоту consumer-ов, диагностики и отладки

Пример metadata payload:

```json
{
  "message_type": "wm.point.meta.v1",
  "object_id": "demo-stand-01",
  "agent_id": "7d4d5f94-0c98-4b69-9f16-0da7ff20f7eb",
  "source_id": "knx_main",
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
```

Правила для metadata:

- `QoS = 1`
- `retain = true`
- публикуется при старте агента и при изменении конфигурации точки

## Таблица MQTT Topics

| Topic type | Topic template | Message contract | Назначение | QoS | Retain | Expiry | Когда публикуется |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `event` | `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/points/{point_key}/event` | `wm.telemetry.event.v1` | Основной поток телеметрии по одной точке | `1` | `false` | `telemetry_message_expiry_seconds`, по умолчанию `86400` | Каждый раз, когда point прошел фильтр публикации |
| `meta` | `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/points/{point_key}/meta` | `wm.point.meta.v1` | Self-describing описание точки для consumer-ов и диагностики | `1` | `true` | нет | При старте агента и при изменении конфигурации точки |
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
