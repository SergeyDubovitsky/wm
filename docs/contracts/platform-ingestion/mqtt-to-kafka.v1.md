# `wm.platform-ingestion.mqtt-to-kafka.v1`

Дата: 2026-05-02
Статус: working draft

Этот контракт фиксирует преобразование MQTT edge boundary в canonical Kafka
records `Monitoring & Alarm Platform`.

## Input

Ingestion pipeline принимает:

- MQTT topic path из `wm.mqtt.topic-tree.v1`
- MQTT payload contracts `wm.telemetry.event.v1`, `wm.source.meta.catalog.v1`,
  `wm.source.connection.v1`, `wm.agent.lwt.v1`
- retained source catalog для enrichment telemetry events
- Platform Registry cache для `tenant_id` и `point_id`

`tenant_id` не публикуется edge-agent-ом в MQTT topic или payload. Это
платформенный контекст, который появляется только на границе ingestion.

## Routing context

Из MQTT topic path извлекаются:

| Поле | Источник |
| --- | --- |
| `object_id` | topic segment `objects/{object_id}` |
| `agent_id` | topic segment `agents/{agent_id}` |
| `source_id` | topic segment `sources/{source_id}` для source-level topics |
| `point_key` | topic segment `points/{point_key}` для telemetry events |
| `message_kind` | suffix `event`, `meta/catalog`, `status/connection`, `status/lwt` |

Все path identifiers должны соответствовать edge MQTT contract. Topic, который
не матчится на известный template, отправляется в
`wm.platform.ingestion.errors.v1`.

## Enrichment

Tenant enrichment:

- lookup key: `object_id + agent_id + source_id`
- lookup source: Platform Registry / registry cache
- output field: `tenant_id`

Point enrichment для telemetry events:

- lookup key: `tenant_id + object_id + source_id + point_key`
- lookup source: Platform Registry / point registry cache
- output fields: `point_id`, `point_ref`, `source_type`, metadata fields

Source metadata enrichment:

- retained `wm.source.meta.catalog.v1` обновляет registry/cache candidate state
- `catalog_revision` используется как версия source catalog
- telemetry event с неизвестным `catalog_revision` не пишется в telemetry topic
  и уходит в ingestion error topic

## Output records

| Input | Kafka topic | Kafka value schema |
| --- | --- | --- |
| `wm.telemetry.event.v1` | `wm.platform.telemetry.events.v1` | `wm.platform.telemetry.event.v1` |
| `wm.source.meta.catalog.v1` | `wm.platform.source.catalogs.v1` | `wm.platform.source.catalog.v1` |
| `wm.source.connection.v1` | `wm.platform.source.connections.v1` | `wm.platform.source.connection.v1` |
| `wm.agent.lwt.v1` | `wm.platform.agent.status.v1` | `wm.platform.agent.status.v1` |
| invalid / unresolved input | `wm.platform.ingestion.errors.v1` | `wm.platform.ingestion.error.v1` |

Telemetry idempotency key:

```text
{tenant_id}|{object_id}|{agent_id}|{event_id}
```

Telemetry Kafka key:

```text
{tenant_id}|{object_id}|{source_id}|{point_key}
```

Этот key сохраняет ordering по одной точке внутри Kafka partition. `event_id`
остается непрозрачной непустой строкой и не интерпретируется как UUID.

## Error handling

Запись не попадает в normal Kafka topic и отправляется в
`wm.platform.ingestion.errors.v1`, если:

- MQTT topic не соответствует `wm.mqtt.topic-tree.v1`
- payload не соответствует заявленной schema
- tenant lookup отсутствует или неоднозначен
- point lookup отсутствует или неоднозначен для telemetry event
- `catalog_revision` отсутствует в registry/cache для telemetry event
- `point_key` из topic отсутствует в catalog

Error record должен содержать исходный topic, `message_type`, reason code,
ingestion timestamp и raw payload snapshot, если snapshot не нарушает политики
безопасности.

## Compatibility

- Добавление новых optional fields в canonical Kafka records допускается в рамках
  `v1`, если старые consumers продолжают работать.
- Изменение Kafka key, topic name, idempotency key или обязательных fields
  требует нового contract-id.
