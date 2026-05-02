# MQTT Topics и Publish Guide

Дата: 2026-05-02
Статус: guide

Этот документ объясняет, как `Edge Telemetry Agent` публикует сообщения в MQTT.
Канонический source of truth для topic templates, QoS/retain/expiry и payload
schemas находится в:

- [`docs/contracts/edge-agent/mqtt-topic-tree.v1.md`](../../../docs/contracts/edge-agent/mqtt-topic-tree.v1.md)
- [`docs/contracts/edge-agent/schemas/`](../../../docs/contracts/edge-agent/schemas/)

## Message contracts

| Message contract | Назначение |
| --- | --- |
| `wm.telemetry.event.v1` | Thin telemetry payload; identity берется из MQTT topic path |
| `wm.source.meta.catalog.v1` | Retained source-level metadata catalog |
| `wm.source.connection.v1` | Retained status southbound source |
| `wm.agent.lwt.v1` | Retained LWT/status MQTT publisher агента |

## Routing principles

- Telemetry topic содержит `object_id`, `agent_id`, `source_id` и `point_key`.
- Telemetry payload не дублирует routing identity и стабильную point metadata.
- Source catalog публикуется одним retained record на source, а не отдельными retained records на каждую точку.
- Per-point retained `state` topic не используется.
- Backend/ingestion должен считать `event_id` ключом дедупликации, но не должен полагаться на конкретный формат `event_id`.

## Совместимость

- При изменении wire payload создается новый `message_type`, например `wm.telemetry.event.v2`.
- Текущий MQTT payload поддерживает только scalar values: `boolean`, `number`, `string`, `null`.
- Complex protocol values для будущих источников должны получить отдельный versioned contract.

## Локальная проверка

Текущий локальный dev-контур использует `MQTT broker + Grafana` и читает те же
topics, которые описаны в registry. Для ручной генерации demo telemetry
используйте команды из корневого `README.md`.
