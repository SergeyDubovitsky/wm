# Demo Stand Remote Environment

Этот каталог хранит bootstrap + config bundle профиль удаленного dev-сценария
для demo-стенда.

Профиль соответствует текущему workstation-based path:

- `Edge Telemetry Agent` запускается на удаленной whitelisted workstation
- доступ к KNX-стенду идет через `${KNX_EXTERNAL_GATEWAY_IP}:${KNX_EXTERNAL_GATEWAY_PORT}`
- локальная доставка и визуализация по-прежнему используют dev-стек из `infra/local/`

Текущая структура:

```text
environments/demo-stand-remote/
├── README.md
└── edge_agent/
    ├── bootstrap.yaml
    └── config.bundle.yaml
```

Проверка bootstrap + retained config path:

```bash
uv run --env-file .env --package edge-agent edge-agent check-config \
  --bootstrap-config environments/demo-stand-remote/edge_agent/bootstrap.yaml
```

Для seed retained config в локальный broker используйте matching remote bundle:

```bash
uv run --env-file .env --package wm-demo-stack publish-edge-demo \
  --bundle-config environments/demo-stand-remote/edge_agent/config.bundle.yaml
```

Секреты и machine-local overrides сюда не коммитятся.
