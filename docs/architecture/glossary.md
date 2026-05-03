# Глоссарий архитектуры

Дата: 2026-05-03
Статус: working draft

Канонический словарь терминов проекта хранится в этом документе.
LikeC4-модель в `arch/likec4/` и markdown-документы в `docs/architecture/`
должны использовать именно эти термины, если нет отдельной оговорки.

## Основные системы

- `Edge Telemetry Agent` — наша периферийная система на объекте, которая собирает данные из southbound-протоколов, нормализует их, буферизует и публикует наружу.
- `Monitoring & Alarm Platform` — наша центральная система, которая может разворачиваться как `self-hosted` инсталляция или в облаке/интернете, принимает события, хранит телеметрию, вычисляет `alarm` и предоставляет UI/API.
- `deployment parity` — архитектурный принцип проекта: `self-hosted` и `cloud` считаются двумя deployment modes одной платформы и не должны расходиться по baseline contracts, основному data path и acceptance semantics без отдельного ADR.

## Домен и доставка

- `alarm` — доменная сущность тревоги в платформе: правило сработало, есть жизненный цикл, severity, acknowledgement и clear.
- `notification` — внешнее сообщение по `alarm` или служебному событию, отправляемое через email, SMS, push или webhook.
- `telemetry event` — нормализованное событие наблюдения по одной точке мониторинга.
- `Local State Store` — локальное техническое SQLite-хранилище `Edge Telemetry Agent` для Point State Cache, Delivery Outbox, attempts/status и warm restart.
- `Point State Cache` — persistent cache последнего наблюденного и опубликованного состояния точки, sequence и качества, используемый для фильтрации изменений и warm restart.
- `Delivery Outbox` — локальная очередь telemetry events, ожидающих надежной доставки или retry во внешний transport.
- `status topic` — transport-specific `MQTT` сообщение о состоянии southbound source или самого publisher, например `status/connection` и `status/lwt`.
- `Kafka Event Log` — логический Kafka-compatible event stream внутри `Monitoring & Alarm Platform`: topics для telemetry events, source config snapshots, source connection events, agent status events, ingestion errors и derived events.
- `Redpanda Connect` — connector pipeline, который читает MQTT topics через `mqtt` input, выполняет mapping/transform и пишет records в `Redpanda` через `redpanda` output.
- `Redpanda` — Kafka-compatible broker внутри `Monitoring & Alarm Platform`, который хранит и обслуживает `Kafka Event Log`, retention, consumer groups и replay.
- `Telemetry Store` — authoritative analytical store на базе `ClickHouse` для append-only telemetry events, source config snapshots, source connection history, agent status history, derived events, aggregates, rollups и immutable alarm history.
- `Platform Store` — transactional store на базе `PostgreSQL` для конфигурации объектов, агентов, источников и точек, правил, notification policies, current alarm state, acknowledgements, mutes, audit и persistence Keycloak.
- `ClickHouse` — выбранная аналитическая БД платформы для high-volume time-series/event history и Grafana/API historical queries.
- `PostgreSQL` — выбранная транзакционная БД платформы для mutable platform state, API-конфигурации и Keycloak persistence.
- `Telemetry Consumers` — backend workers, которые читают Kafka topics и записывают canonical telemetry events, source config snapshots, source connection history, agent status history и derived events в `Telemetry Store`.
- `Streaming Analytics` — потоковая обработка telemetry stream для агрегатов, rollups, производных признаков и derived events для `Alarm Rule Engine`; результаты пишет в `Telemetry Store`.
- `Grafana` — слой визуализации внутри `Monitoring & Alarm Platform`; в production-контуре читает подготовленные данные из `Telemetry Store`.
- `Platform API` — общий контейнер backend API платформы в LikeC4.
- `Config Registry` — первый backend-срез внутри `Platform API`: хранит tenants, assets, agents, sources, points и config revisions в PostgreSQL.
- `Backoffice Admin UI` — внутренний operational UI на базе `SQLAdmin` для команды платформы; не доступен tenant/client users, допускает internal CRUD shortcut, а выпуск config state выполняется отдельным render action через application use cases и transactional outbox.
- `Platform Frontend` — отдельное browser-приложение, которое аутентифицируется через Keycloak и работает с платформой через `Platform API`.
- `Keycloak` — IAM-компонент платформы: пользователи, группы, роли, OIDC clients, sessions и JWT issuance.
- `JWT` — access token, выпускаемый Keycloak и валидируемый `Platform API` локально по OIDC discovery/JWKS.
- `API Gateway` — application-level gateway перед несколькими backend API; решение по нему выносится в отдельный ADR.
- `southbound-адаптеры` — адаптеры и драйверы, через которые `Edge Telemetry Agent` подключается вниз по стеку к полевым протоколам и локальным источникам данных, например `KNX`, `Modbus`, `OPC UA`, `SCADA`.
- `northbound delivery` — доставка данных вверх по стеку из `Edge Telemetry Agent` в `Monitoring & Alarm Platform` через внешний transport, например `MQTT`.

## Конфигурационная модель

- `bootstrap config` — минимальная локальная конфигурация запуска wm-edge-agent: `agent_id`, MQTT endpoint, credentials/secret refs, local storage и observability. Не содержит registry sources/points.
- `server-issued config` — конфигурация runtime, выданная платформенным контуром через retained MQTT topics.
- `runtime config` — retained root config агента `wm.edge.runtime-config.v1`: `tenant_id`, `asset_id`, `agent_id`, `config_revision` и список активных sources.
- `source config` — retained config конкретного `source_id` `wm.edge.source-config.v1`: connection settings, points, acquisition/publish policies и metadata точек.
- `config revision` — стабильная версия root runtime config, выпускаемая через Kafka-first delivery log и применяемая wm-edge-agent после материализации в MQTT retained topics.
- `source_config_revision` — стабильная версия source config, которую telemetry event указывает как metadata context.
- `config event publisher` — backend worker, который читает единственную PostgreSQL таблицу `config_outbox` и публикует `wm.platform.edge.config.delivery.v1` records в Kafka topic `wm.platform.edge.configs.v1`.
- `source config snapshot projector` — consumer, который читает `wm.platform.edge.configs.v1` и публикует canonical `wm.platform.source.config.v1` records в `wm.platform.source.configs.v1`.
- `edge config MQTT projector` — Redpanda Connect pipeline, который читает `wm.platform.edge.configs.v1` и материализует retained MQTT topics для wm-edge-agent.
- `config delivery projection` — materialized MQTT retained topics, которые Redpanda Connect строит из Kafka config delivery records для wm-edge-agent.
- `transactional outbox` — паттерн надежной интеграции PostgreSQL и Kafka: domain change и outbox record записываются атомарно в PostgreSQL, а отдельный publisher доставляет запись во внешний broker с retry и idempotency.
- `YAML config bundle` — versioned import/bootstrap artifact для seed и support-сценариев; после `ADR-010` не конкурирует с `Config Registry`/`Platform Store` как source of truth и служит входом для publish/import workflow.
- `source` — логическое подключение агента к конкретному источнику данных, идентифицируемое `source_id`.
- `point` — точка мониторинга внутри `source`, идентифицируемая `point_ref`.
- `point_ref` — технический идентификатор точки внутри источника, например group address, node id или register reference.
- `point_key` — safe representation от `point_ref`, используемое в `MQTT` topic path.
- `contract-id` — стабильное имя версии контракта данных, например `edge.telemetry-event.v1` или `wm.telemetry.event.v1`.

## Контракты данных

- `Contract Registry` — каталог `docs/contracts/`, единственный source of truth для схем сообщений, локальных структур данных, topic/table names и boundary contracts.
- `apps/*/docs` — guide-документация по использованию контрактов; она не должна становиться вторым source of truth для полного списка полей.
