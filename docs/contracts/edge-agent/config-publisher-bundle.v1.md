# `wm.edge.config-publisher-bundle.v1`

Дата: 2026-05-02  
Статус: working draft

Этот контракт фиксирует временный authoring path для edge runtime config до
появления server UI/API.

## Назначение

Versioned YAML config bundle является source of truth первого этапа. Его читает
config publisher tool, валидирует данные, строит retained MQTT payloads и
публикует их в broker.

Edge-agent не читает этот bundle напрямую. Его runtime boundary — retained MQTT
topics `wm.edge.runtime-config.v1` и `wm.edge.source-config.v1`.

## Минимальная структура bundle

```yaml
tenant_id: tenant-001
object_id: demo-stand-01
agent_id: edge-agent-001
config_revision: rev-2026-05-02-001
issued_at: "2026-05-02T00:00:00Z"

sources:
  - source_id: knx_main
    source_config_revision: rev-2026-05-02-001-knx-main
    source_type: knx
    enabled: true
    connection:
      gateway_ip: 192.168.1.177
      gateway_port: 3671
    acquisition_defaults:
      listen: true
      read_on_start: false
      periodic_interval_seconds: null
    publish_defaults:
      enabled: true
      change_threshold: null
    points:
      - point_ref: 2/0/0
        point_key: 2%2F0%2F0
        name: temperature
        value_type: number
        value_model: knx.dpt.9.001
        signal_type: sensor
        unit: C
        acquisition:
          listen: true
          read_on_start: true
          periodic_interval_seconds: null
        publish:
          enabled: true
          change_threshold: 1.0
        tags:
          room: demo
```

## Publisher output

Для каждого bundle tool публикует:

- один retained `wm.edge.runtime-config.v1` в
  `wm/v1/agents/{agent_id}/config/runtime`
- один retained `wm.edge.source-config.v1` на каждый `source_id` в
  `wm/v1/agents/{agent_id}/sources/{source_id}/config`

Tool должен печатать publish summary:

- `agent_id`
- `tenant_id`
- `object_id`
- `config_revision`
- список опубликованных `source_id`
- validation status

## AI-agent rules

- AI-agent редактирует только versioned YAML bundle.
- AI-agent не публикует произвольные MQTT payloads вручную.
- Любое изменение должно проходить schema validation и давать deterministic
  `config_revision`.
- Когда появится Platform API, AI-agent должен перейти на API calls без
  изменения retained MQTT contracts.
