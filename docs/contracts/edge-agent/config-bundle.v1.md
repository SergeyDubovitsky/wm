# `wm.edge.config-bundle.v1`

Дата: 2026-05-03
Статус: working draft

Этот контракт фиксирует временный authoring/import path для edge runtime config
до внедрения `Config Registry` из `ADR-010`.

## Назначение

Versioned YAML config bundle является authoring source of truth только до
перехода на PostgreSQL-backed `Config Registry`. После внедрения `ADR-010`
он остается import/bootstrap tooling и не конкурирует с `Platform Store` как
runtime source of truth.

Config delivery pipeline валидирует bundle, строит runtime/source payloads,
публикует config delivery records `wm.platform.edge.config.delivery.v1` в Kafka
и материализует retained MQTT topics через Redpanda Connect projection.

Edge-agent не читает этот bundle напрямую. Его runtime boundary — retained MQTT
topics `wm.edge.runtime-config.v1` и `wm.edge.source-config.v1`.

## Минимальная структура bundle

```yaml
tenant_id: tenant-001
asset_id: demo-stand-01
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

## Delivery output

Для каждого bundle delivery pipeline выпускает:

- один Kafka delivery record `wm.platform.edge.config.delivery.v1` с
  `config_scope=runtime` для root `wm.edge.runtime-config.v1`
- один Kafka delivery record `wm.platform.edge.config.delivery.v1` с
  `config_scope=source:{source_id}` на каждый `wm.edge.source-config.v1`
- retained MQTT projection root config в
  `wm/v1/agents/{agent_id}/config/runtime`
- retained MQTT projection source config на каждый `source_id` в
  `wm/v1/agents/{agent_id}/sources/{source_id}/config`

Tool/pipeline должен печатать publish summary:

- `agent_id`
- `tenant_id`
- `asset_id`
- `config_revision`
- список опубликованных `source_id`
- Kafka delivery status
- MQTT projection status, если projection выполняется синхронно в dev-flow
- validation status

## AI-agent rules

- До внедрения `Config Registry` AI-agent редактирует только versioned YAML
  bundle.
- AI-agent не публикует произвольные MQTT payloads вручную.
- AI-agent не обходит Kafka delivery log при выпуске edge config.
- Любое изменение должно проходить schema validation и давать deterministic
  `config_revision`.
- AI-agent должен учитывать, что `Monitoring & Alarm Platform` поддерживает
  `self-hosted` и `cloud` deployment modes, и не должен вводить bundle,
  contracts или workflow, которые форкают baseline между ними без отдельного
  ADR.
- После внедрения `Config Registry` AI-agent должен перейти на API calls без
  изменения retained MQTT contracts.
