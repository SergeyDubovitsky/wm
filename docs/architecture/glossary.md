# Глоссарий архитектуры

Дата: 2026-05-02  
Статус: working draft

Канонический словарь терминов проекта хранится в этом документе.
LikeC4-модель в `arch/likec4/` и markdown-документы в `docs/architecture/`
должны использовать именно эти термины, если нет отдельной оговорки.

## Основные системы

- `Edge Telemetry Agent` — наша периферийная система на объекте, которая собирает данные из southbound-протоколов, нормализует их, буферизует и публикует наружу.
- `Monitoring & Alarm Platform` — наша центральная система в облаке/интернете, которая принимает события, хранит телеметрию, вычисляет `alarm` и предоставляет UI/API.

## Домен и доставка

- `alarm` — доменная сущность тревоги в платформе: правило сработало, есть жизненный цикл, severity, acknowledgement и clear.
- `notification` — внешнее сообщение по `alarm` или служебному событию, отправляемое через email, SMS, push или webhook.
- `telemetry event` — нормализованное событие наблюдения по одной точке мониторинга.
- `Local State Store` — локальное техническое SQLite-хранилище `Edge Telemetry Agent` для Point State Cache, Delivery Outbox, attempts/status и warm restart.
- `Point State Cache` — persistent cache последнего наблюденного и опубликованного состояния точки, sequence и качества, используемый для фильтрации изменений и warm restart.
- `Delivery Outbox` — локальная очередь telemetry events, ожидающих надежной доставки или retry во внешний transport.
- `status topic` — transport-specific `MQTT` сообщение о состоянии southbound source или самого publisher, например `status/connection` и `status/lwt`.
- `Kafka Event Log` — логический Kafka-compatible event stream внутри `Monitoring & Alarm Platform`: topics для telemetry events, source catalogs, source connection events, agent status events, ingestion errors и derived events.
- `Redpanda Connect` — connector pipeline, который читает MQTT topics через `mqtt` input, выполняет mapping/transform и пишет records в `Redpanda` через `redpanda` output.
- `Redpanda` — Kafka-compatible broker внутри `Monitoring & Alarm Platform`, который хранит и обслуживает `Kafka Event Log`, retention, consumer groups и replay.
- `Telemetry Store` — authoritative analytical store на базе `ClickHouse` для append-only telemetry events, source metadata snapshots, source connection history, agent status history, derived events, aggregates, rollups и immutable alarm history.
- `Platform Store` — transactional store на базе `PostgreSQL` для конфигурации объектов, агентов, источников и точек, правил, notification policies, current alarm state, acknowledgements, mutes, audit и persistence Keycloak.
- `ClickHouse` — выбранная аналитическая БД платформы для high-volume time-series/event history и Grafana/API historical queries.
- `PostgreSQL` — выбранная транзакционная БД платформы для mutable platform state, API-конфигурации и Keycloak persistence.
- `Telemetry Consumers` — backend workers, которые читают Kafka topics и записывают canonical telemetry events, source metadata snapshots, source connection history, agent status history и derived events в `Telemetry Store`.
- `Streaming Analytics` — потоковая обработка telemetry stream для агрегатов, rollups, производных признаков и derived events для `Alarm Rule Engine`; результаты пишет в `Telemetry Store`.
- `Grafana` — слой визуализации внутри `Monitoring & Alarm Platform`; в production-контуре читает подготовленные данные из `Telemetry Store`, а в текущей реализации может подключаться к `MQTT` через `grafana-mqtt-datasource`.
- `southbound-адаптеры` — адаптеры и драйверы, через которые `Edge Telemetry Agent` подключается вниз по стеку к полевым протоколам и локальным источникам данных, например `KNX`, `Modbus`, `OPC UA`, `SCADA`.
- `northbound delivery` — доставка данных вверх по стеку из `Edge Telemetry Agent` в `Monitoring & Alarm Platform` через внешний transport, например `MQTT`.

## Конфигурационная модель

- `source` — логическое подключение агента к конкретному источнику данных, идентифицируемое `source_id`.
- `point` — точка мониторинга внутри `source`, идентифицируемая `point_ref`.
- `point_ref` — технический идентификатор точки внутри источника, например group address, node id или register reference.
- `point_key` — safe representation от `point_ref`, используемое в `MQTT` topic path.
- `contract-id` — стабильное имя версии контракта данных, например `edge.telemetry-event.v1` или `wm.telemetry.event.v1`.

## Контракты данных

- `Contract Registry` — каталог `docs/contracts/`, единственный source of truth для схем сообщений, локальных структур данных, topic/table names и boundary contracts.
- `apps/*/docs` — guide-документация по использованию контрактов; она не должна становиться вторым source of truth для полного списка полей.
