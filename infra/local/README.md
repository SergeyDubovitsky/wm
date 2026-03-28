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
- `grafana/dashboards/local-stack-overview.json` — стартовый dashboard без datasource

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
- panel должна быть открыта до публикации тестового сообщения
- данные появляются в панели на ближайшем query interval, для текущего
  dashboard это обычно около `15-20s`
- этот контур используется для smoke-test, визуальной проверки topic tree,
  payload contract и текущего operator-facing live view

## Smoke Test

1. Откройте dashboard `Local / Local Stack Overview` в Grafana.
2. Опубликуйте тестовое сообщение:

```bash
docker compose exec -T mqtt-broker sh -lc '
  mosquitto_pub \
    -h 127.0.0.1 \
    -p 1883 \
    -u "$MQTT_USERNAME" \
    -P "$MQTT_PASSWORD" \
    -t wm/dev/edge-agent/test \
    -m "{\"temperature\":24.2,\"humidity\":61,\"status\":\"ok\",\"source\":\"edge-agent-live\",\"ts\":\"2026-03-28T08:55:00Z\"}"
'
```

3. Подождите до одного query interval и проверьте, что таблица `MQTT Test Stream`
   показывает поля `temperature`, `humidity`, `status`, `source`, `ts`.

## Automated Integration Test

Автоматизированный smoke/E2E-тест поднимает isolated `docker compose` project,
выбирает свободные host ports, публикует уникальный `MQTT` payload и проверяет
через `Playwright`, что Grafana отрисовала строку в таблице `MQTT Test Stream`.

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
- доставку JSON payload в `MQTT broker`
- отображение live-данных в таблице Grafana
