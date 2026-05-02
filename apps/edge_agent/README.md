# Edge Agent

Workspace member for the edge telemetry runtime.

## Commands

```bash
cp .env.example .env
uv sync
uv run --package edge-agent pytest apps/edge_agent/tests
uv run --package edge-agent edge-agent --help
uv run --package edge-agent edge-agent check-config
uv run --package edge-agent edge-agent show-config --format json
uv run --package edge-agent edge-agent agent-id
uv run --package edge-agent edge-agent show-catalog --agent-id demo-agent
uv run --package edge-agent edge-agent enqueue-demo-event --agent-id demo-agent
uv run --env-file .env --package edge-agent edge-agent deliver-once --agent-id demo-agent
uv run --env-file .env --package edge-agent edge-agent check-config --config-root environments/demo-stand/edge_agent
```

## Runtime Assets

- `config/examples/` — example agent, source, and point configuration
- `../../docs/contracts/edge-agent/` — canonical edge contracts, MQTT topic tree, and payload schemas
- `docs/data-contracts.md` — guide по edge runtime dataflow, config model, and contract usage
- `docs/mqtt-topics.md` — guide по MQTT publish rules и ссылкам на canonical topic tree
- `../../environments/<environment>/edge_agent/` — runtime configs for a concrete stand or site
- `../../infra/local/` — local `MQTT broker` and `Grafana` stack for the current implementation
