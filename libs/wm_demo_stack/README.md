# wm-demo-stack

Внутренняя библиотека для локального demo/scenario потока `MQTT -> Grafana`.

Содержит:

- модели и topic scope для demo-данных
- генерацию bootstrap/status/telemetry сообщений
- тонкий `paho-mqtt` publisher adapter
- CLI для публикации demo-потока

## Запуск CLI

Предпочтительный запуск из корня репозитория:

```bash
uv run --env-file .env --package wm-demo-stack publish-grafana-demo
```

Полезные варианты:

```bash
uv run --env-file .env --package wm-demo-stack \
  publish-grafana-demo --count 10

uv run --env-file .env --package wm-demo-stack \
  publish-grafana-demo --agent-id test-agent-01

uv run --env-file .env --package wm-demo-stack \
  publish-grafana-demo --retained-refresh-seconds 15
```

Совместимый legacy entrypoint через shim тоже поддерживается:

```bash
uv run --env-file .env --group integration \
  python infra/local/scripts/publish_grafana_demo.py
```

## Тесты

Проверка библиотечной логики:

```bash
uv run --group integration pytest libs/wm_demo_stack/tests/test_scenario.py
```

Проверка end-to-end `MQTT -> Grafana`:

```bash
uv sync --all-packages --group integration
uv run --group integration playwright install chromium
uv run --group integration pytest tests/integration/test_local_mqtt_grafana.py
```
