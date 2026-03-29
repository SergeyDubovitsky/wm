# Demo Stand Remote Environment

Этот каталог хранит runtime-конфиг удаленного dev-сценария для demo-стенда.

Профиль соответствует текущему workstation-based path:

- `Edge Telemetry Agent` запускается на удаленной whitelisted workstation
- доступ к KNX-стенду идет через `${KNX_EXTERNAL_GATEWAY_IP}:${KNX_EXTERNAL_GATEWAY_PORT}`
- локальная доставка и визуализация по-прежнему используют dev-стек из `infra/local/`

Текущая структура:

```text
environments/demo-stand-remote/
├── README.md
└── edge_agent/
    ├── agent.yaml
    ├── points.d/
    └── sources.d/
```

Проверка конфига:

```bash
uv run --env-file .env --package edge-agent edge-agent check-config \
  --config-root environments/demo-stand-remote/edge_agent
```

Секреты и machine-local overrides сюда не коммитятся.
