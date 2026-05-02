# Industrial Edge Web Monitoring

Репозиторий организован как monorepo для `Edge Telemetry Agent`,
`Monitoring & Alarm Platform`, Python-утилит и архитектурных артефактов.

## Структура

- `apps/edge_agent/` — edge runtime, example-конфиги и runtime-guides
- `apps/knx_demo/` — KNX demo utilities
- `libs/knx_parser/` — библиотека для разбора ETS `.knxproj`
- `libs/wm_demo_stack/` — библиотека demo/scenario потока `config bundle -> retained MQTT config -> telemetry`
- `environments/` — versioned edge profiles конкретных стендов и окружений
- `infra/` — локальная инфраструктура разработки и будущие `compose`-артефакты
- `docs/architecture/` — архитектурные документы и ADR верхнего уровня
- `docs/future-ideas.md` — идеи и возможные следующие инкременты, не текущий backlog
- `arch/` — LikeC4-модель и связанные материалы

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
  tests/integration/test_edge_agent_mqtt_publisher.py \
  tests/integration/test_edge_agent_knx_to_mqtt.py
```

Текущее покрытие integration-набора:

- `tests/integration/test_edge_agent_mqtt_publisher.py` — raw `paho` publisher smoke и CLI-path `enqueue-demo-event -> deliver-once -> MQTT`
- `tests/integration/test_edge_agent_knx_to_mqtt.py` — `KNX-shaped retained config -> ObservationProcessor -> SQLite outbox -> DeliveryWorker -> MQTT -> Redpanda Connect -> Kafka`

Для host-side запуска приложений используйте общий root `.env` через
`uv run --env-file .env ...`.

Полезные package-scoped команды:

- `uv run --package edge-agent edge-agent --help`
- `uv run --package edge-agent edge-agent check-config`
- `uv run --package knx-demo knx-demo --help`
- `uv run --package knx-parser knx-parser --help`
- `uv run --env-file .env --package wm-demo-stack publish-edge-demo --help`

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
- `apps/edge_agent/config/examples/config.bundle.example.yaml` — config bundle example для retained runtime/source config
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
  mqtt-broker kafka kafka-init redpanda-connect kafka-ui mqttx-web
```

После старта:

- `MQTT broker` доступен на `localhost:1883`
- `MQTT websocket` доступен на `localhost:9001`
- `Kafka` host listener доступен на `localhost:19092`
- `Redpanda Connect` HTTP endpoint доступен на `localhost:4195`
- `Kafka UI` доступен на [http://localhost:8080](http://localhost:8080)
- `MQTTX Web` доступен на [http://localhost:8081](http://localhost:8081)
- доступ к `MQTT broker` требует `MQTT_USERNAME` / `MQTT_PASSWORD`
- для seed retained runtime/source config используйте
  `uv run --env-file .env --package wm-demo-stack publish-edge-demo --bundle-config environments/demo-stand/edge_agent/config.bundle.yaml`
- для автоматизированной проверки используйте интеграционные тесты
  `uv run --group integration pytest tests/integration/test_edge_agent_mqtt_publisher.py tests/integration/test_edge_agent_knx_to_mqtt.py`

Для `edge_agent` уже подготовлен bootstrap + retained config профиль под этот стек:

```bash
uv run --env-file .env --package edge-agent edge-agent check-config \
  --bootstrap-config environments/demo-stand/edge_agent/bootstrap.yaml
```

Для текущего удаленного dev-сценария demo-стенда есть отдельный профиль:

```bash
uv run --env-file .env --package edge-agent edge-agent check-config \
  --bootstrap-config environments/demo-stand-remote/edge_agent/bootstrap.yaml
```

Если нужно seed-ить retained config именно для remote-profile:

```bash
uv run --env-file .env --package wm-demo-stack publish-edge-demo \
  --bundle-config environments/demo-stand-remote/edge_agent/config.bundle.yaml
```
