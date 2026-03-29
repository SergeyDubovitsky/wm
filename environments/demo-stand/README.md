# Demo Stand Environment

Этот каталог хранит production-like runtime-конфиги demo-стенда для сценария,
в котором `Edge Telemetry Agent` работает в локальной сети объекта рядом с
`KNX/IP` роутером.

Чувствительные endpoint-данные для `edge_agent` вынесены в общий root-level
`.env`, поэтому versioned YAML здесь содержит только структуру и ссылки на
переменные окружения.

Текущая структура:

```text
environments/demo-stand/
├── README.md
└── edge_agent/
    ├── agent.yaml
    ├── points.d/
    └── sources.d/
```

Этот профиль рассчитан на локальный dev-стек из `infra/local/`:

- `broker: mqtt://localhost:1883`
- локальный state агента: `.local/demo-stand/edge-agent/*`

Для текущего удаленного workstation-based сценария используйте отдельный профиль
`environments/demo-stand-remote/edge_agent/`.

Проверка конфига:

```bash
uv run --env-file .env --package edge-agent edge-agent check-config \
  --config-root environments/demo-stand/edge_agent
```

Секреты и machine-local overrides сюда не коммитятся.
