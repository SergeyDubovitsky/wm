# ADR Index

Дата: 2026-05-02
Статус: working index

ADR остаются журналом архитектурных решений. Они не являются коротким описанием
текущего состояния системы. Для ориентации сначала читайте
`docs/architecture/current-state.md`, а затем открывайте конкретный ADR, если
нужен контекст решения или отклоненные альтернативы.

## Как читать

- `accepted` / `принято` — решение действует.
- `partially superseded` — решение остается полезным исторически, но часть
  деталей заменена более поздними ADR или contract registry.
- Полные схемы, topic names, Kafka topics и DDL находятся в `docs/contracts/`.
  ADR объясняют, почему выбран подход.

## Решения

| ADR | Статус | Текущая роль |
| --- | --- | --- |
| `ADR-001-runtime-topology.md` | accepted | Фиксирует KNX-first MVP: прямое подключение через `xknx` и `KNXnet/IP Tunneling` без `knxd` как runtime-компонента. |
| `ADR-002-acquisition-mode.md` | accepted | Фиксирует гибридный сбор `listen + selective read`: passive events как основной поток, `read_on_start` и `periodic_read` только для whitelist endpoints. |
| `ADR-003-buffering-and-delivery.md` | partially superseded | Исторически фиксирует SQLite outbox/state. Детали delivery/MQTT и storage contracts уточнены в `ADR-005` и `docs/contracts/wm-edge-agent/`. |
| `ADR-004-universal-agent-configuration.md` | accepted | Сейчас отвечает за identity model: `tenant_id`, `asset_id`, `agent_id`, `source_id`, `point_ref`, `point_key`. Agent runtime config path заменен `ADR-008`. |
| `ADR-005-mqtt-event-transport.md` | accepted | Фиксирует MQTT 5 как edge transport, telemetry/status/config topics, QoS/retain policy и topic-derived routing. Детальные schemas в `docs/contracts/wm-edge-agent/`. |
| `ADR-006-mvp-monorepo-structure.md` | accepted | Фиксирует monorepo для текущего этапа: apps, libs, architecture docs, contracts и infra меняются согласованно. |
| `ADR-007-monitoring-platform-data-stores.md` | принято | Фиксирует целевые хранилища платформы: `ClickHouse` для telemetry/analytics и `PostgreSQL` для mutable platform state/IAM. |
| `ADR-008-server-issued-edge-runtime-configuration.md` | accepted | Фиксирует production agent runtime config path: локальный bootstrap + retained MQTT agent runtime/source configs; YAML bundle остается временным authoring/import path до `ADR-010`. |
| `ADR-009-kafka-to-clickhouse-ingestion.md` | accepted | Фиксирует `ClickHouse Kafka Connect Sink` как baseline путь сохранения Kafka records в `ClickHouse` через raw landing tables и materialized views. |
| `ADR-010-platform-configuration-backend.md` | accepted | Фиксирует первый backend-срез настроек: `Config Registry` на FastAPI async + SQLAlchemy + PostgreSQL, clean architecture и модель данных по edge config contracts. |
| `ADR-011-internal-backoffice-admin-ui.md` | accepted | Фиксирует внутреннюю backoffice-админку на SQLAdmin для Config Registry; write operations обязаны идти через application use cases и transactional outbox. |

## Быстрый выбор ADR

| Вопрос | Читать |
| --- | --- |
| Как агент получает конфигурацию? | `ADR-008`, затем `docs/contracts/wm-edge-agent/` |
| Как устроена идентичность данных? | `ADR-004` |
| Как публикуется telemetry в MQTT? | `ADR-005`, затем `docs/contracts/wm-edge-agent/mqtt-topic-tree.v1.md` |
| Как работает KNX MVP? | `ADR-001`, `ADR-002` |
| Зачем SQLite на edge? | `ADR-003`, затем `docs/contracts/wm-edge-agent/sqlite-storage.v1.md` |
| Какие БД у платформы? | `ADR-007`, затем `docs/contracts/clickhouse/telemetry-store.v1.md` |
| Как Kafka records сохраняются в ClickHouse? | `ADR-009`, затем `docs/contracts/kafka/` и `docs/contracts/clickhouse/` |
| Как проектировать backend хранения настроек платформы? | `ADR-010` |
| Как быстро дать внутреннюю админку для настроек? | `ADR-011` |
| Почему monorepo? | `ADR-006` |

## Поддержка

При добавлении нового ADR обновляйте эту таблицу и, если решение меняет рабочую
картину системы, обновляйте `docs/architecture/current-state.md`.
