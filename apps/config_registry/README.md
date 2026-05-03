# config-registry

Первый backend-срез `Monitoring & Alarm Platform`: internal `Config Registry`
для tenants/assets/agents/sources/points и будущего Kafka-first config delivery
flow.

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
- временный in-memory adapter для unit/API smoke-тестов
- PostgreSQL adapter для `tenants`, `assets`, `agents`, `sources` и `points`
- Alembic migrations для registry tables:
  `tenants`, `assets`, `agents`, `sources`, `points`
- `runtime_config_revisions`, `source_config_revisions`
- `config_outbox`
- endpoints `GET /health`, `GET /ready`, `POST /tenants`, `GET /tenants`,
  `POST /tenants/{tenant_id}/assets`, `GET /tenants/{tenant_id}/assets`,
  `POST /tenants/{tenant_id}/assets/{asset_id}/agents`,
  `GET /tenants/{tenant_id}/assets/{asset_id}/agents`,
  `POST /tenants/{tenant_id}/assets/{asset_id}/agents/{agent_id}/sources`,
  `GET /tenants/{tenant_id}/assets/{asset_id}/agents/{agent_id}/sources`,
  `POST /tenants/{tenant_id}/assets/{asset_id}/agents/{agent_id}/sources/{source_id}/points`,
  `GET /tenants/{tenant_id}/assets/{asset_id}/agents/{agent_id}/sources/{source_id}/points`

CLI/runtime упаковка publisher-а и Redpanda Connect Kafka -> MQTT retained
projection будут добавляться следующими инкрементами по `ADR-010`.

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

Для локальной доставки config records в Kafka используется
`KAFKA_BOOTSTRAP_SERVERS` и `CONFIG_REGISTRY_KAFKA_CLIENT_ID`.
