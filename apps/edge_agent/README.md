# Edge Agent

Workspace member for the edge telemetry runtime.

## Commands

```bash
cp .env.example .env
uv sync
uv run --package edge-agent pytest apps/edge_agent/tests
uv run --package edge-agent edge-agent --help
uv run --env-file .env --package edge-agent edge-agent \
  check-config --bootstrap-config environments/demo-stand/edge_agent/bootstrap.yaml
uv run --env-file .env --package edge-agent edge-agent \
  show-config --bootstrap-config environments/demo-stand/edge_agent/bootstrap.yaml --format json
uv run --env-file .env --package edge-agent edge-agent \
  enqueue-demo-event --bootstrap-config environments/demo-stand/edge_agent/bootstrap.yaml
uv run --env-file .env --package edge-agent edge-agent \
  deliver-once --bootstrap-config environments/demo-stand/edge_agent/bootstrap.yaml
```

## Integration Tests

```bash
uv sync --all-packages --group integration
uv run --group integration pytest \
  tests/integration/test_edge_agent_mqtt_publisher.py \
  tests/integration/test_edge_agent_knx_to_mqtt.py
```

Текущее покрытие:

- `test_edge_agent_mqtt_publisher.py` — transport smoke и CLI-сценарий `enqueue-demo-event -> deliver-once`
- `test_edge_agent_knx_to_mqtt.py` — реальный `ObservationProcessor -> SQLite outbox -> DeliveryWorker -> MQTT` для demo `knx_main`
- retained runtime/source config для integration-сценариев seed-ится через
  `config.bundle.yaml -> Kafka config delivery records -> Redpanda Connect
  retained MQTT projection`

## Runtime Assets

- `config/examples/bootstrap.example.yaml` — локальный bootstrap example
- `config/examples/config.bundle.example.yaml` — authoring bundle example для Kafka-first config delivery projection
- `../../docs/contracts/edge-agent/` — canonical edge contracts, MQTT topic tree, and payload schemas
- `docs/data-contracts.md` — guide по edge runtime dataflow, config model, and contract usage
- `docs/mqtt-topics.md` — guide по MQTT publish rules и ссылкам на canonical topic tree
- `../../environments/demo-stand/edge_agent/` — demo-stand bootstrap и config bundle
- `../../infra/local/` — local `MQTT broker` stack for development and integration tests
