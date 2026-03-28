# Industrial Edge Monitoring

Репозиторий организован как monorepo для `Edge Telemetry Agent`,
`Monitoring & Alarm Platform`, Python-утилит и архитектурных артефактов.

## Структура

- `apps/edge_agent/` — edge runtime, example-конфиги и runtime-контракты
- `apps/knx_demo/` — KNX demo utilities
- `libs/knx_parser/` — библиотека для разбора ETS `.knxproj`
- `environments/` — versioned runtime-конфиги конкретных стендов и окружений
- `infra/` — локальная инфраструктура разработки и будущие `compose`-артефакты
- `docs/architecture/` — архитектурные документы и ADR верхнего уровня
- `arch/` — LikeC4-модель и связанные материалы

## Python Workspace

Базовый workflow выполняется из корня репозитория:

```bash
cp .env.example .env
uv sync
uv run --package edge-agent pytest apps/edge_agent/tests
uv run --package knx-demo pytest apps/knx_demo/tests
uv run --package knx-parser pytest libs/knx_parser/tests
```

Для интеграционного smoke/E2E-теста локального `MQTT -> Grafana` контура:

```bash
uv sync --all-packages --group integration
uv run --group integration playwright install chromium
uv run --group integration pytest tests/integration/test_local_mqtt_grafana.py
```

Для host-side запуска приложений используйте общий root `.env` через
`uv run --env-file .env ...`.

Полезные package-scoped команды:

- `uv run --package edge-agent edge-agent --help`
- `uv run --package edge-agent edge-agent check-config`
- `uv run --package knx-demo knx-demo --help`
- `uv run --package knx-parser knx-parser --help`

## Архитектурные Артефакты

- `docs/architecture/solution-architecture.md` — целевая архитектура
  edge-сервиса, dataflow и deployment
- `docs/architecture/glossary.md` — канонический словарь архитектурных терминов
- `docs/architecture/open-questions.md` — список открытых вопросов к заказчику
  и по эксплуатации
- `docs/architecture/adrs/` — ключевые архитектурные решения
- `arch/likec4/` — source of truth для C4-модели и диаграмм
- `arch/README.md` — навигация по LikeC4-модели и командам
- `apps/edge_agent/docs/data-contracts.md` — формат событий, MQTT topic contract и
  модель конфигурации edge runtime
- `apps/edge_agent/config/examples/agent.example.yaml` — глобальная example-конфигурация edge agent
- `apps/edge_agent/config/examples/sources.d/*.yaml` — примеры конфигурации источников данных
- `apps/edge_agent/config/examples/points.d/*.yaml` — примеры конфигурации точек мониторинга
- `apps/edge_agent/config/README.md` — описание структуры конфигурации и разделения examples/environment configs

## LikeC4

Команды для архитектурной модели выполняются из `arch/`:

```bash
cd arch
npm run validate
npm run build
```

## Local Infrastructure

Локальный dev-стек описан в [infra/local](/Users/srgi0/projects/web-monitoring/infra/local):

```bash
cd infra/local
docker compose --env-file ../../.env up -d
```

После старта:

- `MQTT broker` доступен на `localhost:1883`
- `Grafana` доступна на [http://localhost:3000](http://localhost:3000)
- доступ к `MQTT broker` требует `MQTT_USERNAME` / `MQTT_PASSWORD`
- вход в `Grafana` требует `GF_SECURITY_ADMIN_USER` / `GF_SECURITY_ADMIN_PASSWORD`
- Grafana использует `grafana-mqtt-datasource` как текущий MQTT-backed слой визуализации `Monitoring & Alarm Platform`
- для smoke-test откройте dashboard `Local Stack Overview`, затем публикуйте
  тестовые сообщения в `wm/dev/edge-agent/test` и ждите до одного query
  interval, обычно около `15-20s`
- для автоматизированной проверки используйте
  `uv run --group integration pytest tests/integration/test_local_mqtt_grafana.py`

Для `edge_agent` уже подготовлен runtime-конфиг под этот стек:

```bash
uv run --env-file .env --package edge-agent edge-agent check-config \
  --config-root environments/demo-stand/edge_agent
```
