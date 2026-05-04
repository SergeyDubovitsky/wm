# Runtime и Source Config Revisions

Дата: 2026-05-04
Статус: working draft

Этот документ фиксирует revision-модель для server-issued edge config:

- что такое `RuntimeConfigRevision`
- что такое `SourceConfigRevision`
- что означают поля `config_revision` и `source_config_revision`
- как они формируются, для чего служат и где передаются

## Коротко

`config_revision` — версия root runtime config для одного агента.

`source_config_revision` — версия source config для одного `source_id` внутри
этого runtime config.

`RuntimeConfigRevision` и `SourceConfigRevision` — не просто строки в payload,
а серверные persisted snapshots в `Config Registry`, из которых дальше строятся
Kafka delivery records и retained MQTT config.

Явная граница ответственности:

- `RuntimeConfigRevision` используется агентом как root runtime config и не
  содержит полный список point settings.
- `RuntimeConfigRevision` содержит только identity/context агента и список
  sources с ref-полями `source_id`, `source_config_revision`, `enabled`.
- `SourceConfigRevision` используется агентом как полный config одного
  конкретного source, например `KNX`, `Modbus` или `OPC UA`.
- Именно `SourceConfigRevision` содержит connection settings, acquisition /
  publish defaults и points этого source.

## Термины

| Термин | Что это | Где живет | Primary refs |
| --- | --- | --- | --- |
| `RuntimeConfigRevision` | persisted snapshot root runtime config агента | `Config Registry`, таблица `runtime_config_revisions` | [ADR-010](../../architecture/adrs/ADR-010-platform-configuration-backend.md#runtime-config-revision), [ADR-010 storage model](../../architecture/adrs/ADR-010-platform-configuration-backend.md) |
| `config_revision` | строковый revision-id root runtime config | `wm.edge.runtime-config.v1`, `wm.edge.source-config.v1`, Kafka delivery, outbox | [wm.edge.runtime-config.v1](./schemas/wm.edge.runtime-config.v1.schema.json), [wm.edge.source-config.v1](./schemas/wm.edge.source-config.v1.schema.json), [wm.platform.edge.config.delivery.v1](../kafka/schemas/wm.platform.edge.config.delivery.v1.schema.json) |
| `SourceConfigRevision` | persisted snapshot source config для одного `source_id` | `Config Registry`, таблица `source_config_revisions` | [ADR-010](../../architecture/adrs/ADR-010-platform-configuration-backend.md#source-config-revision), [ADR-010 storage model](../../architecture/adrs/ADR-010-platform-configuration-backend.md) |
| `source_config_revision` | строковый revision-id source config | runtime source ref, source config payload, telemetry event, ingestion/storage contracts | [wm.edge.runtime-config.v1](./schemas/wm.edge.runtime-config.v1.schema.json), [wm.edge.source-config.v1](./schemas/wm.edge.source-config.v1.schema.json), [wm.telemetry.event.v1](./schemas/wm.telemetry.event.v1.schema.json), [wm.platform.telemetry.event.v1](../kafka/schemas/wm.platform.telemetry.event.v1.schema.json) |

## Сравнение

| Аспект | `RuntimeConfigRevision` / `config_revision` | `SourceConfigRevision` / `source_config_revision` |
| --- | --- | --- |
| Гранулярность | весь root runtime config одного агента | один source config для конкретного `source_id` |
| Что версионирует | `tenant_id`, `asset_id`, `agent_id`, список `sources`, `enabled` refs | connection settings, acquisition/publish defaults, points и metadata одного source |
| Содержит ли полный config точек | нет, только refs на source revisions | да, именно здесь лежат points и настройки source |
| Где впервые появляется | при render root runtime payload | при render source payload |
| Где хранится как persisted snapshot | `runtime_config_revisions` | `source_config_revisions` |
| Где передается на edge | retained topic `wm/v1/agents/{agent_id}/config/runtime` | retained topic `wm/v1/agents/{agent_id}/sources/{source_id}/config` |
| Где используется downstream | связывает один набор source refs в runtime payload и delivery batch | связывает telemetry event с той версией source metadata, по которой event был сформирован |
| Допустимое соответствие | один `config_revision` может иметь много source revisions | каждый `source_config_revision` обязан принадлежать одному `config_revision` |
| Проверка на edge | source payload обязан иметь тот же `config_revision`, что и root runtime config | source payload обязан совпасть с `source_config_revision`, указанным в root runtime config для этого `source_id` |

## Как формируются сейчас

| Путь | `config_revision` | `source_config_revision` | Primary refs |
| --- | --- | --- | --- |
| Versioned bundle / import path | задается явно в `config.bundle.yaml` | задается явно для каждого `source_id` в `config.bundle.yaml` | [config-bundle.v1](./config-bundle.v1.md) |
| `Config Registry` backoffice render path | генерируется автоматически как `backoffice-{UTC timestamp}` | если не передан явно, вычисляется как `{config_revision}-{source_id}` | [backoffice auto_config_revision](../../../apps/wm_config_registry/src/wm_config_registry/infrastructure/backoffice_actions.py), [render_config.py](../../../apps/wm_config_registry/src/wm_config_registry/application/use_cases/render_config.py) |

Важная оговорка: архитектурный вопрос о долгосрочной deterministic-стратегии
именования revision-идентификаторов еще открыт. Сейчас контракт фиксирует
наличие и согласованность revision-полей, а не один универсальный global naming
scheme для всех authoring paths. См. [Server-issued edge config open questions](../../architecture/open-questions.md#server-issued-edge-config).

## Для чего служат

| Поле / сущность | Назначение | Где это критично |
| --- | --- | --- |
| `config_revision` | идентифицирует целый release runtime config для одного агента | render/store в `Config Registry`, Kafka delivery batch, retained runtime config, audit и rollback reasoning |
| `source_config_revision` | идентифицирует конкретную версию source metadata/config | edge telemetry publishing, ingestion enrichment, source config snapshots, ClickHouse historical joins |

## Как передаются по контуру

| Этап | `config_revision` | `source_config_revision` | Contract / doc |
| --- | --- | --- | --- |
| Rendered config snapshots в `Config Registry` | обязательное поле root revision | обязательное поле source revision; source revision также хранит link на `config_revision` | [ADR-010](../../architecture/adrs/ADR-010-platform-configuration-backend.md#runtime-config-revision), [ADR-010](../../architecture/adrs/ADR-010-platform-configuration-backend.md#source-config-revision) |
| Kafka config delivery envelope | обязателен всегда | `null` для `config_scope=runtime`, обязателен для `config_scope=source:{source_id}` | [wm.platform.edge.config.delivery.v1](../kafka/schemas/wm.platform.edge.config.delivery.v1.schema.json) |
| Retained runtime config | обязателен в root payload | передается внутри массива `sources[]` как ref на ожидаемую source revision | [wm.edge.runtime-config.v1](./schemas/wm.edge.runtime-config.v1.schema.json) |
| Retained source config | обязателен и должен совпасть с root runtime config | обязателен в source payload | [wm.edge.source-config.v1](./schemas/wm.edge.source-config.v1.schema.json) |
| Telemetry MQTT payload | не передается отдельно в `wm.telemetry.event.v1` | обязателен как metadata version marker | [wm.telemetry.event.v1](./schemas/wm.telemetry.event.v1.schema.json), [ADR-005](../../architecture/adrs/ADR-005-mqtt-event-transport.md) |
| Platform Kafka telemetry record | implicit context через validated config cache | обязателен для enrichment и routing в canonical telemetry record | [mqtt-to-kafka.v1](../platform-ingestion/mqtt-to-kafka.v1.md) |
| ClickHouse source snapshots / telemetry | используется как связь runtime batch на стороне config delivery lineage | хранится как исторический version marker для source config и telemetry joins | [telemetry-store.v1](../clickhouse/telemetry-store.v1.md) |

## Чем отличаются по смыслу

| Вопрос | Ответ |
| --- | --- |
| Можно ли считать `config_revision` и `source_config_revision` взаимозаменяемыми? | Нет. `config_revision` версионирует root runtime config целиком, а `source_config_revision` версионирует только один source. |
| Может ли один `config_revision` включать несколько `source_config_revision`? | Да. Это нормальная модель: один root runtime config ссылается на набор source revisions по `source_id`. |
| Может ли telemetry event ссылаться только на `config_revision`? | Нет. Для telemetry нужен именно `source_config_revision`, потому что enrichment и metadata-context идут на уровне source config, а не только root runtime config. |
| Почему `source_config_revision` есть и в runtime payload, и в source payload? | Root runtime config объявляет ожидаемую revision для каждого `source_id`, а source payload должен подтвердить и материализовать ту же самую revision. Edge валидирует это соответствие. |

## Runtime validation rules

- `wm_edge_agent` требует, чтобы `tenant_id`, `asset_id`, `agent_id` и
  `config_revision` в source payload совпадали с root runtime config.
- Для каждого `source_id` source payload обязан иметь тот же
  `source_config_revision`, который указан в root runtime config.
- Telemetry event публикуется с `source_config_revision`, чтобы ingestion мог
  валидировать наличие соответствующей source metadata в config registry/cache.

Primary refs:

- [ADR-008](../../architecture/adrs/ADR-008-server-issued-edge-runtime-configuration.md)
- [runtime/source validation in wm-edge-agent](../../../apps/wm_edge_agent/src/wm_edge_agent/application/configuration.py)
- [mqtt-to-kafka.v1](../platform-ingestion/mqtt-to-kafka.v1.md)
