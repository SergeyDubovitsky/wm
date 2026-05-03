# config-registry

Первый backend-срез `Monitoring & Alarm Platform`: internal `Config Registry`
для tenants/assets/agents/sources/points и Kafka-first config delivery flow.

Текущий инкремент реализует минимальный clean architecture baseline:

- FastAPI app factory
- domain entities/value objects для registry-модели
- application use cases и repository/unit-of-work protocols
- render use case для `wm.edge.runtime-config.v1` и
  `wm.edge.source-config.v1` с JSON Schema validation
- persistence для rendered `runtime_config_revisions` и
  `source_config_revisions`
- transactional `config_outbox` pending records для Kafka-first edge config
  delivery
- outbox lease workflow и `Config Event Publisher` boundary:
  `reserve -> publish -> mark_published/mark_retry/mark_dead_letter`
- `confluent-kafka` adapter для записи config delivery records в
  `wm.platform.edge.configs.v1`
- long-running CLI worker `publish-config-outbox-worker` для отдельного
  контейнера outbox publisher-а
- internal read-only backoffice UI на `/backoffice` в `internal_mode`
- local Redpanda Connect projection
  `wm.platform.edge.configs.v1 -> MQTT retained runtime/source config topics`
- временный in-memory adapter для unit/API smoke-тестов
- PostgreSQL adapter для `tenants`, `assets`, `agents`, `sources` и `points`
- local Docker image для `config-registry-api`, `config-registry-migrate` и
  `config-registry-outbox-publisher`
- Alembic migrations для registry tables:
  `tenants`, `assets`, `agents`, `sources`, `points`
- `runtime_config_revisions`, `source_config_revisions`
- `config_outbox`
- endpoints `GET /health`, `GET /ready`, `POST /tenants`, `GET /tenants`,
  `POST /tenants/{tenant_id}/assets`, `GET /tenants/{tenant_id}/assets`,
  `POST /tenants/{tenant_id}/assets/{asset_id}/agents`,
  `GET /tenants/{tenant_id}/assets/{asset_id}/agents`,
  `POST /tenants/{tenant_id}/assets/{asset_id}/agents/{agent_id}/render-config`,
  `POST /tenants/{tenant_id}/assets/{asset_id}/agents/{agent_id}/sources`,
  `GET /tenants/{tenant_id}/assets/{asset_id}/agents/{agent_id}/sources`,
  `POST /tenants/{tenant_id}/assets/{asset_id}/agents/{agent_id}/sources/{source_id}/points`,
  `GET /tenants/{tenant_id}/assets/{asset_id}/agents/{agent_id}/sources/{source_id}/points`

CLI/runtime упаковка publisher-а и local Redpanda Connect
`Kafka -> MQTT retained` projection реализованы как первый delivery baseline
по `ADR-010`.

```bash
uv run --package config-registry pytest apps/config_registry/tests
uv run --package config-registry config-registry
```

PostgreSQL migrations:

```bash
uv run --env-file .env --package config-registry alembic \
  -c apps/config_registry/alembic.ini upgrade head
```

Для запуска API с PostgreSQL задайте `CONFIG_REGISTRY_DATABASE_URL`, например:

```bash
CONFIG_REGISTRY_DATABASE_URL=postgresql+asyncpg://wm:change-me-local-postgres@localhost:5432/wm_config_registry \
  uv run --package config-registry config-registry
```

Если `CONFIG_REGISTRY_INTERNAL_MODE=true` и API запущен с PostgreSQL-backed
`CONFIG_REGISTRY_DATABASE_URL`, дополнительно монтируется internal
`/backoffice`. Первые write-enabled adapters включены только для создания
`Tenant`, `Asset`, `Agent`, `Source` и `Point` и вызывают application use
cases; edit/delete и config revision/outbox views остаются read-only без прямых
ORM-write операций.
Backoffice custom endpoint `POST /backoffice/render-config` вызывает
`RenderAgentConfig` + `StoreRenderedAgentConfig` и создает config revisions /
`config_outbox` тем же application path, что и HTTP API.
Internal outbox actions `POST /backoffice/config-outbox/retry` и
`POST /backoffice/config-outbox/dead-letter` также вызывают application use
cases и не обновляют ORM-модели напрямую.

Для локальной доставки config records в Kafka используется
`KAFKA_BOOTSTRAP_SERVERS` и `CONFIG_REGISTRY_KAFKA_CLIENT_ID`.

Один batch pending outbox records можно отправить в Kafka командой:

```bash
uv run --package config-registry config-registry publish-config-outbox-once
```

Production-like local worker запускается отдельным процессом/контейнером:

```bash
uv run --package config-registry config-registry publish-config-outbox-worker
```

Worker опрашивает `config_outbox` с периодом
`CONFIG_REGISTRY_OUTBOX_POLL_INTERVAL_SECONDS` (`2.0` секунды по умолчанию),
публикует batch в Kafka и использует lease/retry/dead-letter настройки из
`CONFIG_REGISTRY_OUTBOX_*`.
