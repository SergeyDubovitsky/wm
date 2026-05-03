# wm-clickhouse

Repo-native ClickHouse migration CLI for the local and future production
Telemetry Store path.

```bash
uv run wm-clickhouse migrate status
uv run wm-clickhouse migrate up
```

Configuration is read from environment variables:

- `CLICKHOUSE_HOST`
- `CLICKHOUSE_HTTP_PORT`
- `CLICKHOUSE_DATABASE`
- `CLICKHOUSE_USER`
- `CLICKHOUSE_PASSWORD`
- `CLICKHOUSE_SECURE`

By default migrations are read from `tools/clickhouse_migrations/migrations`.
Migrations are forward-only SQL files applied in filename order. Applied
checksums are tracked in `schema_migrations`; checksum drift is fatal.
