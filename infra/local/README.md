# Локальный MQTT/Kafka стек

Этот каталог хранит локальный docker compose стек для разработки и
интеграционных тестов вокруг `edge_agent`.

Основной сценарий сейчас такой:

- поднять локальный `MQTT broker`
- поднять локальный `Apache Kafka` как Kafka-compatible event log
- поднять `Redpanda Connect` как ingestion pipeline `MQTT -> Kafka`
- поднять `ClickHouse` как локальный `Telemetry Store` foundation
- поднять `Kafka Connect` с `ClickHouse Kafka Connect Sink`
- запаблишить retained runtime/source config из `config.bundle.yaml`
- проверить поток
  `KNX-shaped telemetry -> edge_agent -> MQTT -> Kafka -> ClickHouse landing`

## Что поднимается

- `mqtt-broker` — локальный `Eclipse Mosquitto`
- `kafka` — локальный single-node `Apache Kafka` в KRaft mode
- `kafka-init` — одноразовое создание platform topics, storage DLQ topic и
  internal topics будущего Kafka Connect runtime
- `redpanda-connect` — connector pipeline, который читает `wm/v1/#`,
  обогащает telemetry retained source config и пишет platform records в Kafka
- `clickhouse` — локальный `ClickHouse` для будущего пути
  `Kafka -> Kafka Connect -> ClickHouse`
- `kafka-connect` — distributed Kafka Connect worker с установленным
  `ClickHouse Kafka Connect Sink`
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
  mqtt-broker kafka kafka-init redpanda-connect clickhouse kafka-connect kafka-ui mqttx-web
```

После старта:

- `MQTT broker` доступен на `localhost:1883`
- `MQTT websocket` доступен на `localhost:9001`
- `Kafka` host listener доступен на `localhost:19092`
- `Redpanda Connect` HTTP endpoint доступен на `localhost:4195`
- `Kafka Connect REST` доступен на `localhost:8083`
- `Kafka Connect JMX` подготовлен на `localhost:9102`
- `ClickHouse HTTP` доступен на `localhost:8123`
- `ClickHouse native` доступен на `localhost:9000`
- `Kafka UI` доступен на `http://localhost:8080`
- `MQTTX Web` доступен на `http://localhost:8081`
- для доступа нужны `MQTT_USERNAME` и `MQTT_PASSWORD`
- для ClickHouse используются `CLICKHOUSE_DATABASE`, `CLICKHOUSE_USER` и
  `CLICKHOUSE_PASSWORD`

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
- `wm.platform.derived.events.v1`
- `wm.platform.telemetry-store.dlq.v1`

`kafka-init` также создает compacted internal topics будущего Kafka Connect
runtime:

- `wm.local.kafka-connect.configs`
- `wm.local.kafka-connect.offsets`
- `wm.local.kafka-connect.status`

Быстрая проверка ClickHouse:

```bash
docker compose --env-file ../../.env exec clickhouse \
  sh -lc 'clickhouse-client --user "$CLICKHOUSE_USER" --password "$CLICKHOUSE_PASSWORD" --query "SELECT 1"'
```

На этом этапе `ClickHouse` в compose является storage foundation. Путь
`Kafka -> Kafka Connect -> ClickHouse` использует raw landing tables и
materialized views, которые преобразуют raw JSON в contract tables.

## ClickHouse migrations

Миграции ClickHouse хранятся рядом с CLI в
`tools/clickhouse_migrations/migrations` и применяются forward-only CLI:

```bash
uv run wm-clickhouse migrate status
uv run wm-clickhouse migrate up
```

CLI читает `CLICKHOUSE_HOST`, `CLICKHOUSE_HTTP_PORT`, `CLICKHOUSE_DATABASE`,
`CLICKHOUSE_USER`, `CLICKHOUSE_PASSWORD` и `CLICKHOUSE_SECURE` из окружения.
Metadata хранится в таблице `schema_migrations`; изменение checksum уже
примененной миграции считается fatal drift.

## Kafka Connect -> ClickHouse connector

Connector config хранится в
`infra/local/kafka-connect/clickhouse-sink.telemetry-store-v1.json`.

Bootstrap:

```bash
docker compose --env-file ../../.env up -d kafka kafka-init clickhouse kafka-connect
uv run --env-file .env wm-clickhouse migrate up
uv run --env-file .env python infra/local/kafka-connect/bootstrap_connector.py
```

MVP raw landing path:

- `value.converter=org.apache.kafka.connect.storage.StringConverter`
- `key.converter=org.apache.kafka.connect.storage.StringConverter`
- `HoistField$Value` wraps the raw Kafka value into `payload_json`
- `topic2TableMap` routes platform Kafka topics into `kafka_*_raw_v1`
  ClickHouse landing tables
- connector DLQ is `wm.platform.telemetry-store.dlq.v1`

The connector writes only landing rows. Domain parsing and validation stay in
ClickHouse materialized views, not in Kafka Connect SMTs.

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
  tests/integration/test_edge_agent_knx_to_mqtt.py \
  tests/integration/test_kafka_to_clickhouse_storage.py
```

Эти тесты проверяют:

- `test_edge_agent_mqtt_publisher.py` содержит два smoke-сценария:
  raw `PahoMqttPublisher -> MQTT` и CLI-path `enqueue-demo-event -> deliver-once -> MQTT`
- `test_edge_agent_knx_to_mqtt.py` проверяет end-to-end путь
  `config bundle -> retained runtime/source config -> ObservationProcessor -> SQLite outbox -> DeliveryWorker -> MQTT -> Redpanda Connect -> Kafka`
- `test_kafka_to_clickhouse_storage.py` проверяет путь
  `Kafka -> Kafka Connect -> ClickHouse raw landing -> contract table`,
  byte-for-byte сохранение Kafka value в `payload_json` и storage DLQ для
  невалидных records
- `local_stack` fixture поднимает только `mqtt-broker`
- `local_platform_stack` fixture поднимает `mqtt-broker`, `kafka`, `kafka-init`
  и `redpanda-connect`; Grafana не входит в текущий demo/integration surface
- `local_storage_stack` fixture поднимает `kafka`, `kafka-init`, `clickhouse`
  и `kafka-connect`, применяет миграции и bootstrap connector config
