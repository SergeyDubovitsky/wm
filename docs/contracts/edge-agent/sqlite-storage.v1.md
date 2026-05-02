# `edge.sqlite-storage.v1`

Дата: 2026-05-02
Статус: working draft

Этот документ фиксирует логическую модель локального SQLite-хранилища
`Edge Telemetry Agent`.

## Назначение

SQLite на edge является локальным техническим состоянием агента:

- persistent cache последнего состояния точек
- очередь надежной доставки telemetry events
- счетчики sequence, попытки доставки и статусы retry
- поддержка warm restart после перезапуска агента

SQLite не является:

- историческим архивом телеметрии
- source of truth состояния оборудования
- заменой `Telemetry Store` на базе ClickHouse

## Логические наборы данных

| Набор | Contract-id | Назначение |
| --- | --- | --- |
| `Point State Cache` | `edge.sqlite-point-state-cache.v1` | Последнее наблюденное и опубликованное состояние точки |
| `Delivery Outbox` | `edge.sqlite-outbox-record.v1` | Очередь telemetry events, ожидающих доставки или retry |

## Physical tables

| Table | Contract-id | Primary / unique keys | Статус |
| --- | --- | --- | --- |
| `point_state_cache` | `edge.sqlite-point-state-cache.v1` | primary key `(source_id, point_ref)` | target contract |
| `delivery_outbox` | `edge.sqlite-outbox-record.v1` | primary key `id`, unique `(event_id)` | target contract |
| `schema_migrations` | `edge.sqlite-storage.v1` | primary key `version` | target contract |

Текущая реализация edge-agent использует физическую таблицу `outbox`. Это
допустимый current implementation detail до миграции на target-имя
`delivery_outbox`. Контракт выше фиксирует целевую физическую модель для
следующего runtime-инкремента.

## Point State Cache

`Point State Cache` нужен, чтобы после restart агент не терял контекст фильтрации
изменений и sequence.

Минимальные обязанности:

- хранить ключ точки: `source_id + point_ref`
- хранить `last_observed_*` и `last_published_*`
- хранить `sequence` последней опубликованной telemetry event
- обновляться до постановки нового события в outbox

## Delivery Outbox

`Delivery Outbox` нужен для retry-доставки через внешний transport.

Минимальные обязанности:

- хранить canonical telemetry event payload
- защищать от дублей по `event_id`
- поддерживать статусы `pending`, `inflight`, `sent`, `dead_letter`
- хранить `available_at`, `attempt_count`, `last_error`
- иметь lease/recovery semantics для `inflight`, чтобы события не зависали после падения delivery worker

Current implementation columns:

- `id`
- `event_id`
- `event_type`
- `payload_json`
- `status`
- `created_at`
- `available_at`
- `reserved_at`
- `lease_expires_at`
- `sent_at`
- `attempt_count`
- `last_error`

`reserved_at`, `lease_expires_at` и `sent_at` поддерживают lease/recovery
semantics. При старте или следующем reserve delivery worker возвращает expired
`inflight` records обратно в `pending`.

Metadata catalog и status messages могут публиковаться напрямую и переиздаваться
при connect. Они не обязаны проходить через delivery outbox, если для них не
нужна такая же retry-гарантия, как для telemetry events.
