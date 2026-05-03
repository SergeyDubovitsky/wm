# Локальный MQTT/Kafka стек

Этот каталог хранит локальный docker compose стек для разработки и
интеграционных тестов вокруг `edge_agent`.

Основной сценарий сейчас такой:

- поднять локальный `MQTT broker`
- поднять локальный `Apache Kafka` как Kafka-compatible event log
- поднять `Redpanda Connect` как ingestion pipeline `MQTT -> Kafka`
- поднять `Redpanda Connect` как config projection pipeline
  `Kafka -> MQTT retained`
- поднять `Redpanda Connect` как source config snapshot pipeline
  `Kafka edge configs -> Kafka source configs`
- поднять `ClickHouse` как локальный `Telemetry Store` foundation
- поднять `PostgreSQL` как локальный `Platform Store` foundation для
  `Config Registry`
- поднять `Kafka Connect` с `ClickHouse Kafka Connect Sink`
- поднять `Grafana` с provisioned ClickHouse datasource/dashboard
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
- `redpanda-connect-config-projection` — connector pipeline, который читает
  `wm.platform.edge.configs.v1` и материализует retained runtime/source config
  topics для edge-agent
- `redpanda-connect-source-config-snapshot` — connector pipeline, который
  строит canonical `wm.platform.source.config.v1` snapshots из
  `wm.platform.edge.configs.v1`
- `clickhouse` — локальный `ClickHouse` для пути
  `Kafka -> Kafka Connect -> ClickHouse` и read models для Grafana
- `postgres` — локальный `PostgreSQL` для `Config Registry`
- `kafka-connect` — distributed Kafka Connect worker с установленным
  `ClickHouse Kafka Connect Sink`
- `kafka-ui` — web UI для просмотра Kafka topics/messages
- `mqttx-web` — web MQTT-клиент для ручной подписки на MQTT topics
- `grafana` — локальный dashboard над ClickHouse read models

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
  mqtt-broker kafka kafka-init redpanda-connect redpanda-connect-config-projection \
  redpanda-connect-source-config-snapshot clickhouse postgres kafka-connect \
  kafka-ui mqttx-web grafana
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
- `PostgreSQL` доступен на `localhost:5432`
- `Kafka UI` доступен на `http://localhost:8080`
- `MQTTX Web` доступен на `http://localhost:8081`
- `Grafana` доступна на `http://localhost:3000`
- для доступа нужны `MQTT_USERNAME` и `MQTT_PASSWORD`
- для ClickHouse используются `CLICKHOUSE_DATABASE`, `CLICKHOUSE_USER` и
  `CLICKHOUSE_PASSWORD`
- для Grafana используются `GRAFANA_ADMIN_USER` и `GRAFANA_ADMIN_PASSWORD`
- для PostgreSQL используются `POSTGRES_DB`, `POSTGRES_USER` и
  `POSTGRES_PASSWORD`

Для ручной проверки в `MQTTX Web` создайте connection:

- protocol: `ws`
- host: `localhost`
- port: `9001`
- username/password: значения из `.env`
- subscribe topic: `wm/v1/#`

В `Kafka UI` откройте cluster `local` и topics:

- `wm.platform.edge.configs.v1`
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

## Grafana -> ClickHouse read models

Grafana поставляется как локальная read-only поверхность над ClickHouse.
Datasource и dashboard создаются через provisioning, без ручной настройки в UI.

Provisioning files:

- `infra/local/grafana/provisioning/datasources/clickhouse.yaml`
- `infra/local/grafana/provisioning/dashboards/dashboards.yaml`
- `infra/local/grafana/dashboards/telemetry-overview.json`

Dashboard `Telemetry Overview` читает:

- `telemetry_latest_v1` — последние значения по точкам
- `telemetry_1m_v1` — минутные тренды
- `telemetry_1h_v1` — часовые агрегаты
- `telemetry_events_dedup_v1` и raw/contract tables — ingestion diagnostics

Быстрый seed для ручной проверки:

```bash
uv run --env-file .env wm-clickhouse migrate up
uv run --env-file .env wm-clickhouse load-poc telemetry-read-models \
  --rows 50000 \
  --points 100 \
  --batch-size 10000 \
  --duplicate-every 10
```

После этого откройте `http://localhost:3000`, войдите с credentials из `.env`
и выберите `Web Monitoring / Telemetry Overview`.

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

## Config Registry PostgreSQL migrations

`Config Registry` использует Alembic и async SQLAlchemy поверх PostgreSQL.
Локальный URL задается через `CONFIG_REGISTRY_DATABASE_URL`.

```bash
docker compose --env-file ../../.env up -d postgres
uv run --env-file .env --package config-registry alembic \
  -c apps/config_registry/alembic.ini upgrade head
```

Первый migration slice создает core registry tables:

- `tenants`
- `assets`
- `agents`
- `sources`
- `points`

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
- source connection -> `wm.platform.source.connections.v1`
- agent LWT -> `wm.platform.agent.status.v1`
- ingestion errors -> `wm.platform.ingestion.errors.v1`

При запущенном `redpanda-connect-config-projection` records из
`wm.platform.edge.configs.v1` материализуются в retained MQTT topics:

- runtime config -> `wm/v1/agents/{agent_id}/config/runtime`
- source config -> `wm/v1/agents/{agent_id}/sources/{source_id}/config`

При запущенном `redpanda-connect-source-config-snapshot` source delivery records
из `wm.platform.edge.configs.v1` материализуются в compacted Kafka topic
`wm.platform.source.configs.v1`. Retained MQTT source configs не являются
authoritative ingress для source snapshots.

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
  tests/integration/test_kafka_to_clickhouse_storage.py \
  tests/integration/test_grafana_clickhouse.py
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
- `test_grafana_clickhouse.py` проверяет путь
  `ClickHouse read models -> Grafana provisioned datasource/dashboard` и
  минимальный datasource query через Grafana API
- `local_stack` fixture поднимает только `mqtt-broker`
- `local_platform_stack` fixture поднимает `mqtt-broker`, `kafka`, `kafka-init`
  `redpanda-connect`, `redpanda-connect-config-projection` и
  `redpanda-connect-source-config-snapshot`
- `local_storage_stack` fixture поднимает `kafka`, `kafka-init`, `clickhouse`
  и `kafka-connect`, применяет миграции и bootstrap connector config
- `local_grafana_clickhouse_stack` fixture поднимает только `clickhouse` и
  `grafana`, применяет миграции и seed-ит данные через load PoC в самом тесте
