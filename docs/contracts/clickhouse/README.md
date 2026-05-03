# ClickHouse Contracts

Дата: 2026-05-02
Статус: working draft

Раздел фиксирует ClickHouse table names, contract tables, migration-backed
physical model, engines, partition/order keys, materialized views, rollups и
retention policies.

## Контракты

| Contract-id | Файл | Назначение |
| --- | --- | --- |
| `wm.clickhouse.telemetry-store.v1` | `telemetry-store.v1.md` | Таблицы `Telemetry Store`, migration-backed physical model, keys и retention |
