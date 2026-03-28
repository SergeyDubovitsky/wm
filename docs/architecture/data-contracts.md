# Контракты данных и конфигурации

Дата: 2026-03-28  
Статус: working draft

## Назначение

Этот документ фиксирует:

- формат нормализованного события, которое выходит из edge agent
- ожидаемый `MQTT` topic contract и payload для MVP
- статусные `MQTT` topics для source connection и publisher lwt
- модель конфигурации `agent / sources / points`

Базовые решения по конфигурации приняты в `ADR-004`.  
Транспортный контракт `MQTT 5.0` для MVP принят в `ADR-005`.

## Типы telemetry-событий

| Тип | Когда создается | Назначение |
| --- | --- | --- |
| `telemetry.changed` | Значение изменилось и прошло фильтр | Основной тип событий для дискретных сигналов |
| `telemetry.sample` | Выполнен допустимый сэмпл аналогового значения | Пороговая или периодическая публикация |

## Нормализованное telemetry-событие

Контракт проектируется как protocol-agnostic:

- `object_id` идентифицирует объект автоматизации в системе мониторинга
- `agent_id` идентифицирует конкретный runtime instance
- `source_id` идентифицирует конкретное подключение к источнику
- `source_type` указывает тип протокола или интеграции
- `point_ref` указывает технический ключ точки внутри источника

Это canonical domain event внутри системы. `MQTT` wire payload для MVP может быть компактнее и не обязан повторять поля, которые уже выражены в topic path.

Текущий JSON ниже остается KNX-first примером для первого адаптера, но использует уже универсальные поля.

```json
{
  "event_type": "telemetry.changed",
  "event_id": "01JQ2J7M3M3PM3DY7M6RTN9Q9M",
  "ts": "2026-03-20T09:15:22Z",
  "agent_id": "7d4d5f94-0c98-4b69-9f16-0da7ff20f7eb",
  "object_id": "demo-stand-01",
  "source_id": "knx_main",
  "source_type": "knx",
  "point_ref": "0/0/7",
  "name": "switch_feedback",
  "description": "Feedback for light channel 1",
  "value_type": "boolean",
  "value_model": "knx.dpt.1.001",
  "signal_type": "feedback",
  "observation_mode": "listen",
  "value": true,
  "value_raw": "01",
  "unit": null,
  "quality": "good",
  "sequence": 1842,
  "tags": {
    "room": "demo",
    "equipment": "light_1"
  }
}
```

## Поля telemetry-события

| Поле | Тип | Обязательное | Комментарий |
| --- | --- | --- | --- |
| `event_type` | string | да | `telemetry.changed` или `telemetry.sample` |
| `event_id` | string | да | Уникальный идентификатор для дедупликации |
| `ts` | string | да | Время наблюдения в `UTC`, `ISO-8601` |
| `agent_id` | string | да | Технический идентификатор экземпляра edge agent |
| `object_id` | string | да | Идентификатор объекта автоматизации в monitoring-контуре |
| `source_id` | string | да | Идентификатор конкретного источника в рамках агента |
| `source_type` | string | да | Тип интеграции: `knx`, `modbus`, `opcua`, `db` |
| `point_ref` | string | да | Технический идентификатор точки в рамках источника |
| `name` | string | да | Человекочитаемое имя сигнала |
| `description` | string | нет | Расширенное описание |
| `value_type` | string | да | Например `boolean`, `number`, `string` |
| `value_model` | string | да | Тип модели значения; например `knx.dpt.1.001` |
| `signal_type` | string | да | `command`, `feedback`, `status`, `sensor` |
| `observation_mode` | string | да | `listen`, `read_on_start`, `periodic_read` |
| `value` | bool/number/string | да | Нормализованное значение |
| `value_raw` | string | нет | Raw payload в hex или иной технической форме |
| `unit` | string/null | нет | Например `C` для температуры |
| `quality` | string | да | Оценка качества наблюдения |
| `sequence` | integer | нет | Локальный монотонный номер события |
| `tags` | object | нет | Локальные теги для маршрутизации и фильтрации |

## Значения поля `quality`

| Значение | Смысл |
| --- | --- |
| `good` | Значение успешно декодировано и пригодно для использования |
| `uncertain` | Значение принято, но есть сомнение в полноте контекста |
| `bad` | Значение технически зафиксировано, но не пригодно как телеметрия |

## MQTT topic contract для MVP

Текущий MVP transport использует `MQTT 5.0`, telemetry events, retained point metadata и status topics.

Здесь под contract понимается не `Avro` и не schema registry. Это просто версия JSON-сообщения, которую обязаны одинаково понимать агент и monitoring backend.

Для MVP принимается простая схема синхронизации:

- агент и backend договариваются о фиксированном наборе versioned JSON message types
- тип сообщения передается в поле `message_type`
- backend поддерживает известные ему версии контрактов
- при изменении формата создается новый versioned contract, например `wm.telemetry.event.v2`
- отдельный schema registry в MVP не используется

Telemetry event остается canonical domain event. Point metadata и status messages описываются как публичный `MQTT` publish contract для внешних consumer-ов, но не вводят отдельные canonical event types.

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

Где:

- `point_key` это safe representation от `point_ref`, пригодное для topic path
- для telemetry routing identity берется из topic, а не дублируется в payload
- для metadata допустимо дублирование identity в payload ради self-describing consumer contract

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

## Таблица MQTT topics

| Topic type | Topic template | Message contract | Назначение | QoS | Retain | Expiry | Когда публикуется |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `event` | `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/points/{point_key}/event` | `wm.telemetry.event.v1` | Основной поток телеметрии по одной точке | `1` | `false` | `telemetry_message_expiry_seconds`, по умолчанию `86400` | Каждый раз, когда point прошел фильтр публикации |
| `meta` | `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/points/{point_key}/meta` | `wm.point.meta.v1` | Self-describing описание точки для consumer-ов и диагностики | `1` | `true` | нет | При старте агента и при изменении конфигурации точки |
| `connection` | `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/status/connection` | `wm.source.connection.v1` | Состояние southbound-соединения конкретного source | `1` | `true` | нет | При изменении состояния source, например `connected` / `disconnected` / `reconnecting` |
| `lwt` | `wm/v1/objects/{object_id}/agents/{agent_id}/status/lwt` | `wm.agent.lwt.v1` | Наличие или внезапная потеря самого MQTT publisher агента | `1` | `true` | нет | `offline` публикует broker как Will при аварийном разрыве, `online` публикует агент после успешного connect |

## Примеры MQTT status payload

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

## Модель локального outbox

Локальный outbox хранит только telemetry events, для которых требуется надежная retry-доставка. Retained `meta` и `status` topics могут публиковаться напрямую и переиздаваться при старте агента без обязательного сохранения в outbox.

Минимальная логическая схема:

| Поле | Тип | Комментарий |
| --- | --- | --- |
| `id` | integer | PK |
| `event_id` | string | Уникальный идентификатор события |
| `event_type` | string | Тип события |
| `payload_json` | text | Полный JSON события |
| `status` | string | `pending`, `inflight`, `sent`, `dead_letter` |
| `created_at` | datetime | Когда событие попало в outbox |
| `available_at` | datetime | Когда допустима следующая попытка |
| `attempt_count` | integer | Счетчик попыток доставки |
| `last_error` | text | Последняя ошибка канала |

## Модель конфигурации агента

Эталонный пример хранится в `config/agent.example.yaml`.

Ключевые секции:

| Секция | Назначение |
| --- | --- |
| `agent` | Бизнес- и техническая идентичность edge agent |
| `delivery` | Политика отправки в backend и активный transport |
| `storage` | Настройки `SQLite Outbox` и локального agent state |
| `observability` | Логи, метрики, health |

### Минимальный пример

```yaml
agent:
  object_id: "demo-stand-01"
  name: "main-panel"
  id_file: "/var/lib/edge-agent/agent_id"
delivery:
  transport: "mqtt"
  mqtt:
    version: "5.0"
    topic_root: "wm/v1"
```

## Модель конфигурации источников

Эталонные примеры хранятся в `config/sources.d/*.yaml`.

Source может задавать baseline-настройки, которые наследуются всеми точками этого источника:

- `acquisition_defaults`
- `publish_defaults`

Минимальная запись на источник:

```yaml
sources:
  - source_id: "knx_main"
    type: "knx"
    enabled: true
    connection:
      gateway_ip: "192.168.1.177"
      gateway_port: 3671
    acquisition_defaults:
      listen: true
      read_on_start: false
      periodic_interval_seconds: null
    publish_defaults:
      enabled: true
      change_threshold: null
```

## Модель конфигурации точек

Эталонные примеры хранятся в `config/points.d/*.yaml`.

Point хранит собственные идентификационные и metadata-поля, а также точечные overrides относительно source defaults. Для каждой точки обязательны `point_ref`, `name`, `value_type`, `value_model` и `signal_type`. Опционально на уровне point задаются `description`, `unit`, `tags`.

Минимальная запись на точку:

```yaml
source_id: "knx_main"
points:
  - point_ref: "2/0/0"
    name: "temperature"
    value_type: "number"
    value_model: "knx.dpt.9.001"
    signal_type: "sensor"
    unit: "C"
    acquisition:
      read_on_start: true
    publish:
      change_threshold: 1.0
```

## Правила валидации конфигурации

- `object_id` обязателен и должен быть уникален в monitoring-контуре
- `source_id` должен быть уникален в пределах одного агента
- `point_ref` должен быть уникален в пределах одного `source_id`
- `name` должен быть уникален в пределах одного `source_id`
- точки типа `command` по умолчанию не публикуются как основная телеметрия
- `periodic_interval_seconds` должен быть либо `null`, либо положительным числом
- `change_threshold` имеет смысл только для `value_type=number`
- `value_model` обязателен для каждой точки; его отсутствие считается ошибкой запуска
- point file не может ссылаться на несуществующий `source_id`
- итоговая runtime-конфигурация точки вычисляется как `source defaults + point overrides`
