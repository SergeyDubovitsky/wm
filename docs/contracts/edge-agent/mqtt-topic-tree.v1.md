# `wm.mqtt.topic-tree.v1`

Дата: 2026-05-02
Статус: working draft

Этот контракт фиксирует MQTT topic tree, которым владеет `Edge Telemetry Agent`.
Payload-схемы находятся в `schemas/`.

## Корневой префикс

```text
wm/v1
```

## Topic templates

| Topic type | Topic template | Message contract | QoS | Retain | Expiry | Когда публикуется |
| --- | --- | --- | --- | --- | --- | --- |
| `event` | `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/points/{point_key}/event` | `wm.telemetry.event.v1` | `1` | `false` | `telemetry_message_expiry_seconds` | Каждый раз, когда point прошел publish filter |
| `catalog` | `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/meta/catalog` | `wm.source.meta.catalog.v1` | `1` | `true` | нет | При успешном connect и при изменении source/points |
| `connection` | `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/status/connection` | `wm.source.connection.v1` | `1` | `true` | нет | При изменении состояния southbound source |
| `lwt` | `wm/v1/objects/{object_id}/agents/{agent_id}/status/lwt` | `wm.agent.lwt.v1` | `1` | `true` | нет | `offline` публикует broker как Will, `online` публикует агент после connect |

## Routing rules

- `object_id`, `agent_id`, `source_id` и каждый segment `topic_root` должны соответствовать `mqtt_path_id`.
- `mqtt_path_id` pattern: `^[a-z0-9][a-z0-9_-]{0,127}$`.
- `point_key` строится как обратимое percent-encoding от `point_ref`.
- `point_key` должен быть одним MQTT topic segment и соответствовать pattern `^(?:[A-Za-z0-9._~-]|%[0-9A-F]{2})+$`.
- `point_key` не может содержать `/`, `+`, `#`, whitespace или неполные percent-escape последовательности.
- Для telemetry routing identity берется из topic path, а не дублируется в payload.
- Source metadata catalog дублирует identity в payload, чтобы retained record был self-describing.
- MQTT broker не является source of truth для текущего состояния точки; текущее состояние строится backend-ом из событий и хранилищ.

## Publish policy

- Telemetry event публикуется как один MQTT `PUBLISH` на одну точку.
- Batch payload на уровне source не используется.
- Per-point retained `state` topic не используется.
- Per-point retained `meta` topics не используются.
- Publisher должен использовать MQTT 5 `Content Type = application/json`.
- Publisher должен использовать `Topic Alias`, если broker объявил ненулевой `Topic Alias Maximum`.
