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
- dashboard содержит quick cards для `Current Value`, `Latest Quality`, `Source Status`, `Agent Status`

## Запуск

```bash
cd /Users/srgi0/projects/web-monitoring
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
- `scripts/publish_grafana_demo.py` — генератор demo telemetry/status/meta сообщений для ручной проверки Grafana

## Доступ

- `MQTT broker` требует `MQTT_USERNAME` и `MQTT_PASSWORD`
- `Grafana` требует `GF_SECURITY_ADMIN_USER` и `GF_SECURITY_ADMIN_PASSWORD`

Для `MVP` стек использует общий root-level `.env`, который можно подготовить из
`/Users/srgi0/projects/web-monitoring/.env.example` и затем передать в
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
- этот контур используется для smoke-test, визуальной проверки topic tree,
  payload contract и текущего operator-facing live view

## Smoke Test

1. Откройте dashboard `Local / Local Stack Overview` в Grafana.
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
    -m "{\"message_type\":\"wm.telemetry.event.v1\",\"event_id\":\"demo-smoke-001\",\"ts\":\"2026-03-28T08:55:00Z\",\"name\":\"temperature\",\"signal_type\":\"sensor\",\"value_type\":\"number\",\"value_model\":\"knx.dpt.9.001\",\"observation_mode\":\"listen\",\"value\":24.2,\"value_raw\":\"24.2\",\"quality\":\"good\",\"sequence\":1,\"unit\":\"C\",\"tags\":{\"room\":\"demo\",\"equipment\":\"temp_1\"}}"
'
```

4. Подождите до одного query interval и проверьте, что:

- график `Numeric Value Trend` показывает новую точку
- таблица `Telemetry Event Stream` показывает поля `message_type`, `event_id`, `name`, `value`, `quality`, `sequence`, `ts`

## Manual Data Generator

Для ручной проверки Grafana можно запустить генератор demo-потока из корня репозитория:

```bash
uv run --env-file .env --group integration \
  python infra/local/scripts/publish_grafana_demo.py
```

По умолчанию скрипт берет `MQTT_BROKER`, `MQTT_USERNAME` и `MQTT_PASSWORD`
из root-level `.env`, переданного через `uv --env-file .env`.

Что он делает:

- публикует retained `meta` для `temperature` и `switch_feedback`
- публикует retained `status/connection = connected` и `lwt = online`
- циклически отправляет telemetry events для `2/0/0` и `0/0/7`
- при остановке через `Ctrl+C` публикует `disconnected` и `offline`

Полезные варианты:

```bash
uv run --env-file .env --group integration \
  python infra/local/scripts/publish_grafana_demo.py --count 10

uv run --env-file .env --group integration \
  python infra/local/scripts/publish_grafana_demo.py --interval-seconds 1.0

uv run --env-file .env --group integration \
  python infra/local/scripts/publish_grafana_demo.py --agent-id test-agent-01
```

## Automated Integration Test

Автоматизированный smoke/E2E-тест поднимает isolated `docker compose` project,
выбирает свободные host ports, публикует telemetry event в topic из `ADR-005`
и проверяет через `Playwright`, что Grafana отрисовала строку в таблице
`Telemetry Event Stream`.

Подготовка и запуск выполняются из корня репозитория:

```bash
uv sync --all-packages --group integration
uv run --group integration playwright install chromium
uv run --group integration pytest tests/integration/test_local_mqtt_grafana.py
```

Что тест покрывает:

- provisioning datasource `Local MQTT`
- provisioning dashboard `Local Stack Overview`
- аутентификацию в Grafana
- доставку telemetry event в `MQTT broker`
- отображение live-данных в таблице Grafana по topic filter из `ADR-005`
