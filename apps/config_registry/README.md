# config-registry

Первый backend-срез `Monitoring & Alarm Platform`: internal `Config Registry`
для tenants/objects/agents/sources/points и будущего Kafka-first config delivery
flow.

Текущий инкремент реализует минимальный clean architecture baseline:

- FastAPI app factory
- domain entities/value objects для registry-модели
- application use cases и repository/unit-of-work protocols
- временный in-memory adapter для unit/API smoke-тестов
- endpoints `GET /health`, `GET /ready`, `POST /tenants`, `GET /tenants`

PostgreSQL, SQLAlchemy adapters, Alembic migrations, render-config и outbox
будут добавляться следующими инкрементами по `ADR-010`.

```bash
uv run --package config-registry pytest apps/config_registry/tests
uv run --package config-registry config-registry
```
