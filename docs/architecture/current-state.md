# Текущее состояние системы

Дата: 2026-05-03
Статус: working snapshot

Этот документ является коротким operational snapshot для людей и AI-agent.
Он описывает текущее состояние системы без истории решений. История и trade-off
остаются в `docs/architecture/adrs/`.

## Статус MVP

Проект уже достиг `MVP baseline`.

Под `MVP` в текущем репозитории понимается не “полная платформа во всех
компонентах”, а уже реализованный рабочий baseline:

- `Edge Telemetry Agent`
- server-issued runtime config через retained `MQTT`
- reliable telemetry delivery через `MQTT`
- локальный ingestion slice `MQTT -> Redpanda Connect -> Kafka`
- versioned config bundle и integration-тесты для этого контура

## Назначение

`Industrial Edge Web Monitoring` строится как промышленная система сбора,
доставки, хранения и отображения телеметрии.

Целевая линия:

- `Edge Telemetry Agent` работает рядом с объектом автоматизации.
- Agent читает данные из southbound-источников, нормализует наблюдения,
  фильтрует изменения, хранит техническое состояние в SQLite и доставляет
  события наружу.
- `Monitoring & Alarm Platform` принимает поток, валидирует и обогащает его,
  пишет события в Kafka-compatible event log и хранилища, строит alarm/UI/API.
- `Monitoring & Alarm Platform` должна поддерживать два deployment modes:
  `self-hosted` и `cloud`, без расхождения по основным contracts и data path.

## Что реализовано сейчас

- Monorepo с Python workspace, LikeC4-моделью, архитектурными документами и
  contract registry.
- `Edge Telemetry Agent` с bootstrap config, загрузкой retained runtime/source
  config из MQTT, fail-fast validation и CLI:
  `check-config`, `show-config`, `enqueue-demo-event`, `deliver-once`.
- Runtime-модель `tenant_id`, `object_id`, `agent_id`, `source_id`,
  `point_ref`, `point_key`, `config_revision` и `source_config_revision`.
- Processing pipeline для observation -> normalized telemetry event:
  подавление непубликуемых `command`-точек, threshold/change filtering,
  sequence/value metadata и quality.
- `SQLite` technical state: point state cache и delivery outbox для retry.
- MQTT delivery slice для telemetry events, source connection status и agent LWT.
- Demo/config bundle для `demo-stand` и первый `KNX`-срез.
- Local development stack: MQTT broker, Apache Kafka и Redpanda Connect
  ingestion pipeline `MQTT -> Kafka` для edge publisher flow.
- `docs/contracts/` как канонический каталог схем, topic names, Kafka topics и
  ClickHouse DDL draft.

## Что остается post-MVP развитием

- Расширение `Monitoring & Alarm Platform` от текущего `MVP baseline` до полной
  production-инсталляции: production `MQTT Ingestion Gateway`,
  production Kafka-compatible broker, `Telemetry Consumers`,
  `Streaming Analytics`, `Telemetry Store`, `Platform Store`,
  `Alarm Rule Engine`, `Platform API`, `Platform Frontend`, `Keycloak`,
  `Grafana` и `Notification Service`. Локально уже есть `MVP` ingestion
  slice через `Redpanda Connect`, но без consumers/storage/UI.
- Production persistence: `ClickHouse` как `Telemetry Store` и `PostgreSQL`
  как `Platform Store`.
- Backend foundation для настроек платформы: `Platform Config API` как FastAPI
  async service на clean architecture, SQLAlchemy и PostgreSQL. Scope первого
  backend-среза ограничен tenants/objects/agents/sources/points и
  runtime/source config revisions.
- Server UI для редактирования runtime/source config. До внедрения
  `Platform Config API` authoring path остается versioned YAML config bundle;
  после `ADR-010` source of truth переезжает в PostgreSQL, а delivery path
  остается Kafka config delivery log -> MQTT retained projection.
- Полные southbound-адаптеры для `Modbus`, `OPC UA`, `DB` и других источников.
  Текущий практический срез остается `KNX-first`.
- Production security hardening: TLS/certificates/ACL/secrets lifecycle,
  конкретные broker policies, production observability и support workflows.

## Production Boundaries

В production data path система является read-only monitoring/alarm контуром:

- edge-agent читает и наблюдает сигналы;
- управляющий write-path не входит в web-monitoring UI/API;
- полноценная `SCADA/HMI` не входит в текущий объем;
- автоматическое полное discovery всех тегов и информационных моделей не
  входит в текущий объем;
- edge SQLite не является историческим архивом телеметрии;
- локальный `MQTT/Kafka` stack является dev/integration slice, а не полной
  production platform.

Для центральной платформы действуют дополнительные границы deployment-модели:

- `self-hosted` и `cloud` считаются двумя вариантами поставки одной и той же
  `Monitoring & Alarm Platform`, а не двумя разными архитектурами;
- baseline contracts, основной ingestion/data path и acceptance criteria должны
  совпадать между deployment modes;
- cloud-managed optimization допустима только если она не создает отдельный
  cloud-only contract path и не ломает parity с `self-hosted`.

Отдельный пилот `KNX -> OPC` может иметь write-path из внешнего OPC-клиента,
но это отдельный сервисный контур, не основной web-monitoring data path.

## Source Of Truth

| Область | Source of truth |
| --- | --- |
| Текущий снимок системы | `docs/architecture/current-state.md` |
| История решений и trade-off | `docs/architecture/adrs/` |
| Карта систем и контейнеров | `arch/likec4/` |
| Термины | `docs/architecture/glossary.md` |
| Открытые вопросы | `docs/architecture/open-questions.md` |
| Контракты данных и topic/table names | `docs/contracts/` |
| Edge guide-документация | `apps/edge_agent/docs/` |
| Demo/runtime config bundle | `environments/demo-stand/edge_agent/` |

## ADR Reading Guide

Для большинства задач агенту не нужно читать все ADR. Используйте такой порядок:

1. Для ориентации: этот документ и `docs/architecture/glossary.md`.
2. Для edge runtime config: `ADR-008`, затем `docs/contracts/edge-agent/`.
3. Для MQTT delivery и topic tree: `ADR-005`, затем
   `docs/contracts/edge-agent/mqtt-topic-tree.v1.md`.
4. Для identity model: `ADR-004`.
5. Для storage/platform design: `ADR-007`, затем `docs/contracts/clickhouse/`
   и `docs/contracts/kafka/`.
6. Для deployment parity `self-hosted`/`cloud`: `ADR-009`.
7. Для backend хранения настроек платформы: `ADR-010`.
8. Для KNX-first MVP behavior: `ADR-001`, `ADR-002`, `ADR-003`.

Если ADR и `docs/contracts/` расходятся по полям сообщения, topic/table names
или schema details, приоритет у `docs/contracts/`. ADR объясняет решение, но не
заменяет contract registry.

## Next Decisions

Ближайшие развилки ведутся в `docs/architecture/open-questions.md`. Критичные
темы сейчас:

- production MQTT broker, TLS, ACL и secrets handling;
- первый implementation scope `Platform Config API` поверх `ADR-010`;
- limits и lifecycle для retained runtime/source config;
- миграция YAML config bundle в будущий `Platform Store/API`;
- production host/deployment model для edge runtime.
