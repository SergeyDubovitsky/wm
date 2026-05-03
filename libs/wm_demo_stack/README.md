# wm-demo-stack

Внутренняя библиотека для локального demo/scenario потока `config bundle -> retained MQTT config -> telemetry`.

Содержит:

- модели и topic scope для demo-данных
- генерацию bootstrap/status/telemetry сообщений
- тонкий `paho-mqtt` publisher adapter
- CLI для публикации demo-потока

## Запуск CLI

Предпочтительный запуск из корня репозитория:

```bash
uv run --env-file .env --package wm-demo-stack publish-edge-demo \
  --bundle-config environments/demo-stand/edge_agent/config.bundle.yaml
```

Полезные варианты:

```bash
uv run --env-file .env --package wm-demo-stack \
  publish-edge-demo --bundle-config environments/demo-stand/edge_agent/config.bundle.yaml --count 10

uv run --env-file .env --package wm-demo-stack \
  publish-edge-demo --bundle-config environments/demo-stand/edge_agent/config.bundle.yaml --source-id knx_main

uv run --env-file .env --package wm-demo-stack \
  publish-edge-demo --bundle-config environments/demo-stand/edge_agent/config.bundle.yaml --retained-refresh-seconds 15
```

Совместимый shim через `infra/local/scripts` тоже поддерживается:

```bash
uv run --env-file .env --group integration \
  python infra/local/scripts/publish_edge_demo.py \
  --bundle-config environments/demo-stand/edge_agent/config.bundle.yaml
```

## Тесты

Проверка библиотечной логики:

```bash
uv run --group integration pytest libs/wm_demo_stack/tests/test_scenario.py
```

Проверка интеграционного MQTT-контура:

```bash
uv sync --all-packages --group integration
uv run --group integration pytest \
  tests/integration/test_edge_agent_mqtt_publisher.py \
  tests/integration/test_edge_agent_knx_to_mqtt.py
```

Что именно покрывается:

- `tests/integration/test_edge_agent_mqtt_publisher.py` — raw publisher smoke и CLI-path `enqueue-demo-event -> deliver-once`
- `tests/integration/test_edge_agent_knx_to_mqtt.py` —
  `bundle -> Kafka config delivery records -> retained config -> ObservationProcessor -> SQLite outbox -> DeliveryWorker -> MQTT -> Redpanda Connect -> Kafka`
- Grafana не входит в текущий demo/integration surface; визуализация вернется поверх `Telemetry Store`, а не напрямую поверх MQTT
