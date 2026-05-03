# config-registry

Первый backend-срез `Monitoring & Alarm Platform`: internal `Config Registry`
для tenants/assets/agents/sources/points и будущего Kafka-first config delivery
flow.

Текущий инкремент реализует минимальный clean architecture baseline:

- FastAPI app factory
- domain entities/value objects для registry-модели
- application use cases и repository/unit-of-work protocols
- временный in-memory adapter для unit/API smoke-тестов
- PostgreSQL adapter для `tenants`
- Alembic migration для core registry tables:
  `tenants`, `assets`, `agents`, `sources`, `points`
- endpoints `GET /health`, `GET /ready`, `POST /tenants`, `GET /tenants`

Render-config, config revisions и transactional outbox будут добавляться
следующими инкрементами по `ADR-010`.

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
