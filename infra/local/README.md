# Local Infrastructure

Этот каталог хранит локальную инфраструктуру разработки:

- `compose.yaml`
- конфиг `MQTT broker`
- provisioning `Grafana`
- другие shared dev services

## Сервисы

- `mqtt-broker` — `Eclipse Mosquitto` на `localhost:1883`
- `grafana` — локальный UI на `http://localhost:3000`
- `grafana-mqtt-datasource` — установленный datasource plugin для live-подписки на `MQTT`
- dashboard содержит quick cards для `Текущее значение`, `Последнее качество`, `Статус источника`, `Статус агента`

## Запуск

```bash
cd <repo-root>
cp .env.example .env
cd infra/local
docker compose --env-file ../../.env up -d
```

Остановить стек:

```bash
docker compose down
```

## Файлы

- `mosquitto/config/mosquitto.conf` — конфиг локального broker
- `mosquitto/config/start-mosquitto.sh` — генерация `password_file` из `.env` и запуск broker
- `grafana/grafana.ini` — базовый конфиг Grafana
- `grafana/provisioning/` — file provisioning
- `grafana/dashboards/local-stack-overview.json` — dashboard c topic filters по `ADR-005`
- `scripts/publish_grafana_demo.py` — совместимый shim для запуска demo publisher из старых инструкций
- `../../libs/wm_demo_stack/` — библиотека и CLI для demo/scenario потока `MQTT -> Grafana`

## Доступ

- `MQTT broker` требует `MQTT_USERNAME` и `MQTT_PASSWORD`
- `Grafana` требует `GF_SECURITY_ADMIN_USER` и `GF_SECURITY_ADMIN_PASSWORD`

Для `MVP` стек использует общий root-level `.env`, который можно подготовить из
`<repo-root>/.env.example` и затем передать в
`docker compose` через `--env-file ../../.env`.

## Текущая роль Grafana

Grafana поднимается с `grafana-mqtt-datasource` как текущий слой визуализации
`Monitoring & Alarm Platform`.

- plugin показывает live-streaming данные из `MQTT`
- plugin не хранит историю и не заменяет telemetry store
- plugin не умеет query-based template variables, поэтому dropdown-ы задаются как `Custom` / `Text box`, а не discover-ятся из broker
- panel должна быть открыта до публикации тестового сообщения
- данные появляются в панели на ближайшем query interval, для текущего
  dashboard это обычно около `15-20s`
- status/meta panels особенно чувствительны к live-only модели plugin:
  в локальном demo наиболее устойчиво работает `agent_id = +`, потому что
  точный `agent_id` на source-topics может упираться в текущий баг
  `grafana-mqtt-datasource` с `Invalid channel ID`
- нижние панели, которые оказываются ниже первого экрана, Grafana может
  подписывать только после попадания в viewport: прокрутите к ним и дайте
  один короткий live-cycle на обновление
- этот контур используется для smoke-test, визуальной проверки topic tree,
  payload contract и текущего operator-facing live view

## Smoke Test

1. Откройте dashboard `Local / Обзор локального стека` в Grafana.
2. Оставьте дефолтные фильтры:

- `object_id = demo-stand-01`
- `agent_id = +`
- `source_id = knx_main`
- `point_key = 2%2F0%2F0`

3. Опубликуйте тестовое telemetry-сообщение в topic из `ADR-005`:

```bash
docker compose exec -T mqtt-broker sh -lc '
  mosquitto_pub \
    -h 127.0.0.1 \
    -p 1883 \
    -u "$MQTT_USERNAME" \
    -P "$MQTT_PASSWORD" \
    -t "wm/v1/objects/demo-stand-01/agents/test-agent/sources/knx_main/points/2%2F0%2F0/event" \
    -m "{\"message_type\":\"wm.telemetry.event.v1\",\"event_id\":\"demo-smoke-001\",\"event_type\":\"telemetry.sample\",\"ts\":\"2026-03-28T08:55:00Z\",\"observation_mode\":\"listen\",\"value\":24.2,\"value_raw\":\"24.2\",\"quality\":\"good\",\"sequence\":1}"
'
```

4. Подождите до одного query interval и проверьте, что:

- график `График значения` показывает новую точку
- таблица `Поток telemetry-событий` показывает поля `message_type`, `event_id`, `event_type`, `value`, `quality`, `sequence`, `ts`

## Manual Data Generator

Для ручной проверки Grafana можно запустить генератор demo-потока из корня репозитория.
Предпочтительный способ теперь идет через package entrypoint библиотеки:

```bash
uv run --env-file .env --package wm-demo-stack publish-grafana-demo
```

Совместимый запуск через прежний shim тоже поддерживается:

```bash
uv run --env-file .env --group integration \
  python infra/local/scripts/publish_grafana_demo.py
```

По умолчанию CLI берет `MQTT_BROKER`, `MQTT_USERNAME` и `MQTT_PASSWORD`
из root-level `.env`, переданного через `uv --env-file .env`.

Что он делает:

- публикует один retained source metadata catalog для `knx_main`
- публикует retained `status/connection = connected` и `lwt = online`
- периодически репаблишит retained metadata/status, чтобы live-панели Grafana
  не пустели после короткого time range
- циклически отправляет telemetry events для `2/0/0` и `0/0/7`
- при остановке через `Ctrl+C` публикует `disconnected` и `offline`

Полезные варианты:

```bash
uv run --env-file .env --package wm-demo-stack \
  publish-grafana-demo --count 10

uv run --env-file .env --package wm-demo-stack \
  publish-grafana-demo --interval-seconds 1.0

uv run --env-file .env --package wm-demo-stack \
  publish-grafana-demo --agent-id test-agent-01

uv run --env-file .env --package wm-demo-stack \
  publish-grafana-demo --retained-refresh-seconds 15
```

## Automated Integration Test

Автоматизированный smoke/E2E-тест поднимает isolated `docker compose` project,
выбирает свободные host ports, публикует telemetry event в topic из `ADR-005`
и проверяет через `Playwright`, что Grafana отрисовала строку в таблице
`Поток telemetry-событий`.

Подготовка и запуск выполняются из корня репозитория:

```bash
uv sync --all-packages --group integration
uv run --group integration playwright install chromium
uv run --group integration pytest tests/integration/test_local_mqtt_grafana.py
```

Что тест покрывает:

- provisioning datasource `Local MQTT`
- provisioning dashboard `Обзор локального стека`
- аутентификацию в Grafana
- доставку telemetry event в `MQTT broker`
- отображение live telemetry и metadata в Grafana по topic filter из `ADR-005`
- реальный UI-path через `Playwright`, включая поведение live-only datasource
