# Industrial Edge Monitoring

Репозиторий хранит архитектурные артефакты для `Edge Telemetry Agent` и
`Monitoring & Alarm Platform`, а также отдельные утилиты и демо-проекты.

## Что Где Лежит

- `knx_parser/` — самостоятельный `uv`-managed пакет для разбора ETS
  `.knxproj`
- `docs/architecture/` — архитектурные документы, ADR и контракты
- `config/` — примеры конфигурации edge agent
- `arch/` — LikeC4-модель и связанные материалы
- `knx_demo/` — legacy/demo код KNX, он больше не подключен к корневому
  `pyproject.toml`

## knx_parser

Запуск и тесты выполняются из каталога
[knx_parser](/Users/srgi0/projects/web-monitoring/knx_parser):

```bash
cd knx_parser
uv sync
uv run knx-parser --help
uv run pytest
```

## Архитектурные Артефакты

- `docs/architecture/solution-architecture.md` — целевая архитектура
  edge-сервиса, dataflow и deployment
- `docs/architecture/data-contracts.md` — формат событий, MQTT topic contract и
  модель конфигурации
- `docs/architecture/open-questions.md` — список открытых вопросов к заказчику
  и по эксплуатации
- `docs/architecture/adrs/` — ключевые архитектурные решения
- `arch/likec4/` — source of truth для C4-модели и диаграмм
- `arch/README.md` — навигация по LikeC4-модели и командам
- `config/agent.example.yaml` — глобальная конфигурация edge agent
- `config/sources.d/*.yaml` — примеры конфигурации источников данных
- `config/points.d/*.yaml` — примеры конфигурации точек мониторинга
- `config/README.md` — краткое описание структуры конфигурации
