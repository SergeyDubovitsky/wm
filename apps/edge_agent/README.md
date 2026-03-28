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
uv run --env-file .env --package edge-agent edge-agent check-config --config-root environments/demo-stand/edge_agent
```

## Runtime Assets

- `config/examples/` — example agent, source, and point configuration
- `docs/data-contracts.md` — edge runtime event/config contract
- `../../environments/<environment>/edge_agent/` — runtime configs for a concrete stand or site
- `../../infra/local/` — local `MQTT broker` and `Grafana` dev stack
