# platform-config-api

Первый backend-срез `Monitoring & Alarm Platform`: internal `Platform Config API`
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
uv run --package platform-config-api pytest apps/platform_config_api/tests
uv run --package platform-config-api platform-config-api
```
