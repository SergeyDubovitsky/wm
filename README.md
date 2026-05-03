# Industrial Edge Web Monitoring

Репозиторий организован как monorepo для `Edge Telemetry Agent`,
`Monitoring & Alarm Platform`, Python-утилит и архитектурных артефактов.

## Статус проекта

Проект уже достиг `MVP baseline`.

Текущий `MVP baseline` в репозитории:

- `Edge Telemetry Agent` с bootstrap-конфигом, загрузкой retained runtime/source config из `MQTT`, processing pipeline и `SQLite Delivery Outbox`
- локальный platform slice `MQTT -> Redpanda Connect -> Kafka`
- versioned config bundle для `demo-stand`
- contract registry, архитектурные документы и integration-тесты для этого потока

Целевая `Monitoring & Alarm Platform` проектируется для двух deployment modes:
`self-hosted` и `cloud`.

Для них сохраняется общий baseline:

- одинаковые контракты данных и topic/table names
- один и тот же основной data path
- минимальные отличия в migration artifacts, observability и операционной модели

Расширение до полной `Monitoring & Alarm Platform` с `Telemetry Store`,
`Platform Store`, richer `alarm` lifecycle, `Platform API`, `Platform Frontend`
и production IAM остается следующим этапом поверх уже достигнутого `MVP`.

## Структура

- `apps/edge_agent/` — edge runtime, example-конфиги и runtime-guides
- `apps/knx_demo/` — KNX demo utilities
- `apps/config_registry/` — первый backend-срез Config Registry
- `libs/knx_parser/` — библиотека для разбора ETS `.knxproj`
- `libs/wm_demo_stack/` — библиотека demo/scenario потока `config bundle -> Kafka config delivery -> retained MQTT config -> telemetry`
- `tools/clickhouse_migrations/` — repo-native operational tooling и migration CLI
- `environments/` — versioned edge profiles конкретных стендов и окружений
- `infra/` — локальная инфраструктура разработки и будущие `compose`-артефакты
- `docs/architecture/` — архитектурные документы и ADR верхнего уровня
- `docs/future-ideas.md` — идеи и возможные следующие инкременты, не текущий backlog
- `arch/` — LikeC4-модель и связанные материалы

Правило именования верхнего уровня:

- `apps/` — deployable или operator-facing сервисы и приложения
- `libs/` — импортируемые Python-пакеты, которые используются как библиотеки из кода или тестов
- `tools/` — repo-native tooling, migration CLI, one-off operational helpers и automation packages

По этой причине `knx_parser` и `wm_demo_stack` остаются в `libs/`: оба уже живут как
workspace packages с `src/`, тестами и импортируемым API, а `wm_demo_stack`
используется в integration-тестах как библиотека, а не только как CLI.

## Task Tracking

Source of truth для текущих задач, приоритетов и статуса выполнения — `YouTrack`.

- `YouTrack` хранит execution backlog и прогресс работ
- git-документация хранит архитектуру, ADR, открытые вопросы и future ideas
- живые execution plans не поддерживаются в репозитории, чтобы не расходиться с `YouTrack`

## Python Workspace

Базовый workflow выполняется из корня репозитория:

```bash
cp .env.example .env
uv sync
uv run --package edge-agent pytest apps/edge_agent/tests
uv run --package knx-demo pytest apps/knx_demo/tests
uv run --package config-registry pytest apps/config_registry/tests
uv run --package knx-parser pytest libs/knx_parser/tests
uv run --group integration pytest libs/wm_demo_stack/tests/test_scenario.py
```

Для линтинга Python-кода:

```bash
uv sync --group lint
uv run --group lint ruff check apps libs tests infra
```

Для интеграционных тестов локального MQTT/Kafka-контура:

```bash
uv sync --all-packages --group integration
uv run --group integration pytest \
  tests/integration/test_config_registry_postgres.py \
  tests/integration/test_edge_agent_mqtt_publisher.py \
  tests/integration/test_edge_agent_knx_to_mqtt.py \
  tests/integration/test_kafka_to_clickhouse_storage.py
```

Текущее покрытие integration-набора:

- `tests/integration/test_config_registry_postgres.py` — `Config Registry -> PostgreSQL`
  через Alembic migration и FastAPI tenant endpoints
- `tests/integration/test_edge_agent_mqtt_publisher.py` — raw `paho` publisher smoke и CLI-path `enqueue-demo-event -> deliver-once -> MQTT`
- `tests/integration/test_edge_agent_knx_to_mqtt.py` — `config bundle -> Kafka config delivery -> retained MQTT config -> ObservationProcessor -> SQLite outbox -> DeliveryWorker -> MQTT -> Redpanda Connect -> Kafka`
- `tests/integration/test_kafka_to_clickhouse_storage.py` —
  `Kafka -> Kafka Connect -> ClickHouse raw landing -> contract table`,
  включая byte-for-byte проверку `payload_json` и storage DLQ для невалидных
  records

Для host-side запуска приложений используйте общий root `.env` через
`uv run --env-file .env ...`.

Полезные package-scoped команды:

- `uv run --package edge-agent edge-agent --help`
- `uv run --package edge-agent edge-agent check-config`
- `uv run --package knx-demo knx-demo --help`
- `uv run --package config-registry config-registry`
- `uv run --env-file .env --package config-registry alembic -c apps/config_registry/alembic.ini upgrade head`
- `uv run --package knx-parser knx-parser --help`
- `uv run --env-file .env --package wm-demo-stack publish-edge-demo --help`
- `uv run wm-clickhouse migrate status`

## Архитектурные Артефакты

- `docs/architecture/current-state.md` — короткий снимок текущего состояния
  системы для ориентации людей и AI-agent без чтения всех ADR
- `docs/architecture/README.md` — навигация по архитектурным документам
- `docs/architecture/solution-architecture.md` — целевая архитектура
  edge-сервиса, dataflow и deployment
- `docs/architecture/glossary.md` — канонический словарь архитектурных терминов
- `docs/architecture/open-questions.md` — список открытых вопросов к заказчику
  и по эксплуатации
- `docs/architecture/adrs/` — журнал архитектурных решений; навигация начинается
  с `docs/architecture/adrs/README.md`
- `docs/contracts/README.md` — реестр контрактов данных и единый source of truth
- `docs/contracts/edge-agent/` — канонические edge boundary contracts, MQTT topic tree и схемы payload
- `arch/likec4/` — source of truth для C4-модели и диаграмм
- `arch/README.md` — навигация по LikeC4-модели и командам
- `apps/edge_agent/docs/data-contracts.md` — guide по edge runtime dataflow,
  конфигурационной модели и ссылкам на канонические схемы
- `apps/edge_agent/docs/mqtt-topics.md` — guide по MQTT publish contract и
  ссылкам на канонический topic tree
- `apps/edge_agent/config/examples/bootstrap.example.yaml` — bootstrap example для edge agent
- `apps/edge_agent/config/examples/config.bundle.example.yaml` — config bundle example для Kafka-first retained runtime/source config projection
- `apps/edge_agent/config/README.md` — описание структуры конфигурации и разделения examples/environment configs

## LikeC4

Команды для архитектурной модели выполняются из `arch/`:

```bash
cd arch
npm run validate
npm run build
```

## Local Infrastructure

Локальный dev-стек описан в [`infra/local`](infra/local).
Минимальный MQTT-срез:

```bash
cd infra/local
docker compose --env-file ../../.env up -d mqtt-broker
```

Полный MQTT/Kafka-срез:

```bash
cd infra/local
docker compose --env-file ../../.env up -d \
  mqtt-broker kafka kafka-init redpanda-connect redpanda-connect-config-projection \
  redpanda-connect-source-config-snapshot clickhouse postgres \
  config-registry-migrate config-registry-api config-registry-outbox-publisher \
  kafka-connect kafka-ui mqttx-web grafana
```

После старта:

- `MQTT broker` доступен на `localhost:1883`
- `MQTT websocket` доступен на `localhost:9001`
- `Kafka` host listener доступен на `localhost:19092`
- `Redpanda Connect MQTT -> Kafka` HTTP endpoint доступен на `localhost:4195`
- `Redpanda Connect Kafka -> MQTT config projection` HTTP endpoint доступен на
  `localhost:4196`
- `Redpanda Connect source config snapshot projector` HTTP endpoint доступен на
  `localhost:4197`
- `Kafka Connect REST` доступен на `localhost:8083`
- `Kafka Connect JMX` подготовлен на `localhost:9102`
- `ClickHouse HTTP` доступен на `localhost:8123`
- `ClickHouse native` доступен на `localhost:9000`
- `Config Registry API` доступен на [http://localhost:8000](http://localhost:8000)
- `Kafka UI` доступен на [http://localhost:8080](http://localhost:8080)
- `MQTTX Web` доступен на [http://localhost:8081](http://localhost:8081)
- `Grafana` доступна на [http://localhost:3000](http://localhost:3000)
- доступ к `MQTT broker` требует `MQTT_USERNAME` / `MQTT_PASSWORD`
- доступ к `ClickHouse` использует `CLICKHOUSE_DATABASE`, `CLICKHOUSE_USER` и
  `CLICKHOUSE_PASSWORD` из `.env`
- доступ к `Grafana` использует `GRAFANA_ADMIN_USER` и
  `GRAFANA_ADMIN_PASSWORD` из `.env`
- для seed demo config через `Config Registry API -> outbox worker -> Kafka`
  используйте
  `uv run --env-file .env --package wm-demo-stack publish-edge-demo --bundle-config environments/demo-stand/edge_agent/config.bundle.yaml`
- для автоматизированной проверки используйте интеграционные тесты
  `uv run --group integration pytest tests/integration/test_edge_agent_mqtt_publisher.py tests/integration/test_edge_agent_knx_to_mqtt.py tests/integration/test_kafka_to_clickhouse_storage.py tests/integration/test_grafana_clickhouse.py`

Для `edge_agent` уже подготовлен bootstrap + config bundle профиль под этот стек:

```bash
uv run --env-file .env --package edge-agent edge-agent check-config \
  --bootstrap-config environments/demo-stand/edge_agent/bootstrap.yaml
```

Для текущего удаленного dev-сценария demo-стенда есть отдельный профиль:

```bash
uv run --env-file .env --package edge-agent edge-agent check-config \
  --bootstrap-config environments/demo-stand-remote/edge_agent/bootstrap.yaml
```

Если нужно seed-ить config delivery records именно для remote-profile:

```bash
uv run --env-file .env --package wm-demo-stack publish-edge-demo \
  --bundle-config environments/demo-stand-remote/edge_agent/config.bundle.yaml
```

ClickHouse migrations выполняются из корня репозитория:

```bash
uv run --env-file .env wm-clickhouse migrate status
uv run --env-file .env wm-clickhouse migrate up
```

Kafka Connect connector для raw landing path применяется так:

```bash
uv run --env-file .env python infra/local/kafka-connect/bootstrap_connector.py
```

ClickHouse analytical read-model PoC:

```bash
uv run --env-file .env wm-clickhouse load-poc telemetry-read-models \
  --rows 50000 \
  --points 100 \
  --batch-size 10000 \
  --duplicate-every 10
```

После загрузки PoC откройте `Grafana -> Web Monitoring -> Telemetry Overview`.
Dashboard читает `telemetry_latest_v1`, `telemetry_1m_v1`,
`telemetry_1h_v1` и ingestion diagnostics из ClickHouse. Это локальная
read-only поверхность поверх ClickHouse read models; старый MQTT/Grafana
dashboard path не используется.
