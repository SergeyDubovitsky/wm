# knx_demo

Workspace member with small KNX demo utilities for bus reads and blink
patterns.

## Commands

```bash
uv sync
uv run --package knx-demo knx-demo --help
uv run --package knx-demo knx-demo read-signals --help
uv run --package knx-demo knx-demo blink-melody --help
uv run --package knx-demo pytest apps/knx_demo/tests
```

## Subcommands

- `knx-demo read-signals` — send `GroupValueRead` requests and log direct or
  passive updates
- `knx-demo blink-melody` — blink a KNX light with a recognizable rhythm and
  log feedback
