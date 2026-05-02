# Конфигурация edge agent

В каталоге `config/` хранятся product-owned templates и описание формата.

- `examples/agent.example.yaml` — глобальная example-конфигурация агента, доставки, локального storage и observability
- `examples/sources.d/*.yaml` — описания подключений к источникам данных (`knx`, `modbus`, `opcua`, `db` и т.д.)
- `examples/points.d/*.yaml` — реестр точек мониторинга, сгруппированный по `source_id`

Конкретные runtime-конфиги стендов и объектов должны храниться отдельно в
`environments/<environment>/edge_agent/`.

Для `MVP` runtime-конфиги могут использовать placeholders вида `${VAR}`.
`edge_agent` подставляет значения из уже переданного окружения в YAML/JSON-
документы. Для локального запуска из monorepo используйте `uv run --env-file .env`.

Правило наследования:

- `acquisition_defaults` и `publish_defaults` задаются на уровне source
- в `examples/points.d/*.yaml` для каждой точки всегда задаются обязательные поля `point_ref`, `name`, `value_type`, `value_model`, `signal_type`
- опциональные point metadata вроде `description`, `unit`, `tags` тоже задаются на уровне точки
- в блоках `acquisition` и `publish` указываются только поля, которые отличаются от source defaults
- итоговая runtime-конфигурация точки получается merge-ом `source defaults + point overrides`, а point metadata берется из point file напрямую и затем собирается в source-level metadata catalog для `MQTT`

Полные контракты runtime-конфигурации, локального SQLite state и MQTT messages
зафиксированы в `docs/contracts/edge-agent/`.

При старте агент объединяет все файлы из `sources.d/` и `points.d/` внутри
выбранного `config_root`, затем выполняет fail-fast валидацию:

- `object_id` должен быть задан и должен быть уникален в системе мониторинга
- `source_id` должен быть уникален в рамках агента
- `point_ref` и `name` должны быть уникальны в рамках одного `source_id`
- точка не может ссылаться на несуществующий `source_id`
- `value_model` должен быть задан для каждой точки
- `periodic_interval_seconds` должен быть `null` или положительным числом
- `change_threshold` допускается только для числовых значений

Для локальной проверки CLI по умолчанию использует packaged examples из
`config/examples/`. Для реального запуска нужно передавать отдельный
`config_root`, например `environments/demo-stand/edge_agent/`.
