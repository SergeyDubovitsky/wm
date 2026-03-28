# Конфигурация edge agent

- `agent.example.yaml` — глобальная конфигурация агента, доставки, локального storage и observability
- `sources.d/*.yaml` — описания подключений к источникам данных (`knx`, `modbus`, `opcua`, `db` и т.д.)
- `points.d/*.yaml` — реестр точек мониторинга, сгруппированный по `source_id`

Правило наследования:

- `acquisition_defaults` и `publish_defaults` задаются на уровне source
- в `points.d/*.yaml` для каждой точки всегда задаются обязательные поля `point_ref`, `name`, `value_type`, `value_model`, `signal_type`
- опциональные point metadata вроде `description`, `unit`, `tags` тоже задаются на уровне точки
- в блоках `acquisition` и `publish` указываются только поля, которые отличаются от source defaults
- итоговая runtime-конфигурация точки получается merge-ом `source defaults + point overrides`, а point metadata берется из point file напрямую

При старте агент объединяет все файлы из `sources.d/` и `points.d/`, затем выполняет fail-fast валидацию:

- `object_id` должен быть задан и должен быть уникален в системе мониторинга
- `source_id` должен быть уникален в рамках агента
- `point_ref` и `name` должны быть уникальны в рамках одного `source_id`
- точка не может ссылаться на несуществующий `source_id`
- `value_model` должен быть задан для каждой точки
- `periodic_interval_seconds` должен быть `null` или положительным числом
- `change_threshold` допускается только для числовых значений

Стандартный operational path для первых этапов: `docker compose` с read-only монтированием каталога `config/` и отдельным volume для `/var/lib/edge-agent`.
