# Локальный MQTT/Kafka стек

Этот каталог хранит локальный docker compose стек для разработки и
интеграционных тестов вокруг `edge_agent`.

Основной сценарий сейчас такой:

- поднять локальный `MQTT broker`
- поднять локальный `Apache Kafka` как Kafka-compatible event log
- поднять `Redpanda Connect` как ingestion pipeline `MQTT -> Kafka`
- запаблишить retained runtime/source config из `config.bundle.yaml`
- проверить поток `KNX-shaped telemetry -> edge_agent -> MQTT -> Kafka`

## Что поднимается

- `mqtt-broker` — локальный `Eclipse Mosquitto`
- `kafka` — локальный single-node `Apache Kafka` в KRaft mode
- `kafka-init` — одноразовое создание platform topics
- `redpanda-connect` — connector pipeline, который читает `wm/v1/#`,
  обогащает telemetry retained source config и пишет platform records в Kafka
- `kafka-ui` — web UI для просмотра Kafka topics/messages
- `mqttx-web` — web MQTT-клиент для ручной подписки на MQTT topics

## Быстрый старт

Только MQTT-срез:

```bash
cd infra/local
docker compose --env-file ../../.env up -d mqtt-broker
```

Полный local platform slice:

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
- `Kafka UI` доступен на `http://localhost:8080`
- `MQTTX Web` доступен на `http://localhost:8081`
- для доступа нужны `MQTT_USERNAME` и `MQTT_PASSWORD`

Для ручной проверки в `MQTTX Web` создайте connection:

- protocol: `ws`
- host: `localhost`
- port: `9001`
- username/password: значения из `.env`
- subscribe topic: `wm/v1/#`

В `Kafka UI` откройте cluster `local` и topics:

- `wm.platform.telemetry.events.v1`
- `wm.platform.source.configs.v1`
- `wm.platform.source.connections.v1`
- `wm.platform.agent.status.v1`
- `wm.platform.ingestion.errors.v1`

## Публикация retained config и demo telemetry

Из корня репозитория:

```bash
uv run --env-file .env --package wm-demo-stack publish-edge-demo \
  --bundle-config environments/demo-stand/edge_agent/config.bundle.yaml
```

CLI:

- публикует retained `wm.edge.runtime-config.v1`
- публикует retained `wm.edge.source-config.v1`
- публикует demo telemetry events
- публикует retained source connection status и agent LWT

При запущенном `redpanda-connect` эти MQTT-сообщения перекладываются в Kafka:

- telemetry -> `wm.platform.telemetry.events.v1`
- source config -> `wm.platform.source.configs.v1`
- source connection -> `wm.platform.source.connections.v1`
- agent LWT -> `wm.platform.agent.status.v1`
- ingestion errors -> `wm.platform.ingestion.errors.v1`

Shim через `infra/local/scripts` тоже доступен:

```bash
uv run --env-file .env --group integration \
  python infra/local/scripts/publish_edge_demo.py \
  --bundle-config environments/demo-stand/edge_agent/config.bundle.yaml
```

## Интеграционные тесты

```bash
uv sync --all-packages --group integration
uv run --group integration pytest \
  tests/integration/test_edge_agent_mqtt_publisher.py \
  tests/integration/test_edge_agent_knx_to_mqtt.py
```

Эти тесты проверяют:

- `test_edge_agent_mqtt_publisher.py` содержит два smoke-сценария:
  raw `PahoMqttPublisher -> MQTT` и CLI-path `enqueue-demo-event -> deliver-once -> MQTT`
- `test_edge_agent_knx_to_mqtt.py` проверяет end-to-end путь
  `config bundle -> retained runtime/source config -> ObservationProcessor -> SQLite outbox -> DeliveryWorker -> MQTT -> Redpanda Connect -> Kafka`
- `local_stack` fixture поднимает только `mqtt-broker`
- `local_platform_stack` fixture поднимает `mqtt-broker`, `kafka`, `kafka-init`
  и `redpanda-connect`; Grafana не входит в текущий demo/integration surface
