# ADR-005: `MQTT 5.0` как transport MVP, telemetry events и point metadata topics

Дата: 2026-03-28  
Статус: accepted

## Контекст

Целевой transport для edge agent выбран как `MQTT`, а не `HTTP batch push`. При этом нужно определить:

- как публиковать телеметрию: batch per source или one message per point
- нужен ли отдельный `state` topic
- какие части идентичности хранить в topic, а какие в payload
- как избежать конфликтов с protocol-specific идентификаторами вроде `KNX group address`, содержащими `/`
- как использовать возможности `MQTT 5.0` без лишнего усложнения edge runtime

Важные свойства спецификации `MQTT`, которые влияют на решение:

- wildcard-символы допустимы только в topic filters, а не в публикуемом topic name
- порядок сообщений гарантируется для одного topic и QoS на non-shared subscriptions
- retained message хранится на конкретный topic, а не на отдельные элементы внутри batch payload
- `QoS 1` допускает повторную доставку, поэтому transport должен быть совместим с дедупликацией по `event_id`
- `MQTT 5.0` поддерживает `Message Expiry Interval` и `Content Type`, полезные для telemetry transport

## Решение

### 1. Основной transport MVP

Для MVP основным transport принимается `MQTT 5.0`.

- edge agent публикует данные в центральный `MQTT broker`
- локальный `SQLite Outbox` остается обязательным буфером и не заменяется broker session state
- publisher не полагается на долгоживущую server-side session для надежности доставки

### 2. Telemetry model

В MVP агент публикует telemetry events, point metadata и status topics.

- отдельный `state` topic не используется
- текущее состояние точки вычисляется в monitoring backend из последнего валидного события в БД
- retained telemetry state не вводится, чтобы не дублировать state management между broker и backend
- retained `meta` topic допускается, потому что он описывает точку, а не хранит текущее значение

### 3. Гранулярность публикации

Телеметрия публикуется как `one event per point per publish`.

- batch payload на уровень source не используется
- один telemetry event соответствует одному `PUBLISH`
- topic привязан к одной точке, а не к целому источнику

### 4. Topic tree

Корневой префикс:

- `wm/v1`

Telemetry topic:

- `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/points/{point_key}/event`

Metadata topic:

- `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/points/{point_key}/meta`

Status topics:

- `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/status/connection`
- `wm/v1/objects/{object_id}/agents/{agent_id}/status/lwt`

Правила:

- `object_id`, `source_id` должны быть slug-safe
- `agent_id` допускается как UUID
- `point_key` не должен использовать raw protocol reference напрямую, если он содержит `/` или другие неудобные символы
- для `point_key` используется обратимо-кодируемое safe representation, например percent-encoding от `point_ref`

### 5. Payload contract

Payload contract зависит от типа topic.

Telemetry payload:

- не повторяет `object_id`
- не повторяет `agent_id`
- не повторяет `source_id`
- не повторяет `point_key`
- содержит только event data и point metadata, которые нельзя надежно вывести только из topic

Минимальный telemetry payload:

```json
{
  "message_type": "wm.telemetry.event.v1",
  "event_id": "01JQ2J7M3M3PM3DY7M6RTN9Q9M",
  "ts": "2026-03-28T12:34:56Z",
  "name": "switch_feedback",
  "signal_type": "feedback",
  "value_type": "boolean",
  "value_model": "knx.dpt.1.001",
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

### 6. QoS и свойства публикации

- telemetry topics: `QoS 1`, `retain = false`
- metadata topics: `QoS 1`, `retain = true`
- `Message Expiry Interval` задается конфигом и по умолчанию может быть `86400` секунд
- `Content Type` для JSON payload: `application/json`
- status topics могут использовать `retain = true`
- `lwt` публикуется как retained `offline`, а после успешного connect агент публикует retained `online`
- `meta` публикуется при старте агента и при изменении конфигурации точки

### 7. Session policy

Для publisher принимается простая схема:

- `Clean Start = true`
- `Session Expiry Interval = 0`

Надежность доставки обеспечивается локальным outbox и retry policy агента, а не накоплением publisher session state на broker.

### 8. Dedupe и ingestion

- backend обязан считать `event_id` idempotency key
- consumer восстанавливает routing context из topic
- canonical event в backend может строиться как `topic-derived identity + MQTT payload`

## Обоснование

- per-point topics лучше соответствуют ordered delivery semantics MQTT
- `retain` бесполезен для batch telemetry и естественно работает только на уровне одного topic
- отсутствие `state` topic убирает дублирование state management между MQTT broker и БД monitoring-сервиса
- retained `meta` topic дает self-describing контракт для внешних MQTT consumer-ов
- `QoS 1` дает разумный баланс надежности и нагрузки для edge-сценария
- `MQTT 5.0` дает полезные transport properties без необходимости изобретать свои служебные поля

## Последствия

Положительные:

- MQTT становится primary transport уже в MVP
- subscriber может избирательно подписываться по `object/source/point`
- event stream остается компактным и без дублирования topic identity в payload
- metadata topic упрощает discovery и отладку без обращения в backend БД
- monitoring backend строит текущее состояние в одном месте, в БД

Отрицательные:

- backend ingestion должен уметь разбирать topic tree
- для protocol-specific `point_ref` нужен стабильный алгоритм построения `point_key`
- без retained `state` новый внешний MQTT subscriber не получит текущее значение без участия backend

## Отклоненные альтернативы

- Batch per source topic: хуже для selective subscribe, retained semantics и per-point ordering.
- Отдельный `state` topic в MVP: дублирует state management, хотя monitoring backend уже может считать state из БД.
- Полное дублирование routing identity в payload: увеличивает размер сообщений без необходимости.
