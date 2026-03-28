# LikeC4 Architecture

В этой директории хранится архитектурная модель в формате LikeC4.

Это source of truth для `C4`-представлений. Все архитектурные схемы и диаграммы в проекте ведутся только в `LikeC4`. Markdown-документы в `docs/architecture/` описывают решения, ограничения, контракты и runtime-сценарии, но не содержат source-диаграмм.

## Файлы

- `package.json` — локальные зависимости и команды для LikeC4 CLI
- `likec4.config.json` — конфигурация LikeC4-проекта
- `likec4/specification.c4` — описание базовых element kinds
- `likec4/model.c4` — архитектурная модель и связи между участниками/системами
- `likec4/views.c4` — представления, начиная с `C1 system context`
- `likec4/deployments/` — deployment model и deployment views
- `likec4/devices/` — модель и `C2` для полевых устройств и контроллеров
- `likec4/gateways/` — модель и `C2` для протокольных шлюзов и SCADA-контроллеров
- `likec4/external-systems/` — внешние облачные интеграции вроде `SMS`, `Email`, `Push`, `Webhook`
- `likec4/systems/edge-telemetry-agent/` — C2-модель `Edge Telemetry Agent`
- `likec4/systems/monitoring-alarm-platform/` — C2-модель `Monitoring & Alarm Platform`

Системные файлы workspace и LikeC4-исходники разделены:

- верхний уровень `arch/` — tooling, config, `node_modules`, `dist`
- поддиректория `arch/likec4/` — только `.c4`-источники модели
- поддиректория `arch/likec4/deployments/` — deployment model и deployment views
- поддиректория `arch/likec4/devices/` — полевые устройства и их собственные `C2`-view
- поддиректория `arch/likec4/gateways/` — шлюзы, протокольные сегменты и их `C2`-view
- поддиректория `arch/likec4/external-systems/` — только внешние облачные сервисы
- поддиректория `arch/images/` — локальные SVG-иконки для LikeC4 через alias `@`

Для разрабатываемых систем C2-диаграммы выносятся в отдельные директории:

- `arch/likec4/systems/<system-id>/views.c4` — views конкретной системы
- `arch/likec4/systems/<system-id>/containers/*.c4` — по одному файлу на контейнер

## Текущий scope

Сейчас описаны:

- `C1` системного контекста
- `C2` для `Полевые устройства и контроллеры`
- `C2` для `Протокольные шлюзы и SCADA-контроллеры`
- `C2` для `Edge Telemetry Agent`
- `C2` для `Monitoring & Alarm Platform`
- `Deployment` для demo-стенда и облачного MQTT ingress
- `View` для текущего monitored scope demo-стенда

На уровне `C1` модель фиксирует:

- внешних акторов: `Сервисный инженер`, `Оператор / диспетчер`
- внешние системы: полевые устройства, протокольные шлюзы, каналы уведомлений
- разрабатываемые системы: `Edge Telemetry Agent` на объекте и `Monitoring & Alarm Platform` в облаке/интернете
- ключевые границы ответственности: edge-сбор на объекте, central monitoring/alarm в облаке, notifications через внешние каналы

Модель изначально проектируется как универсальная:

- `KNX`
- `Modbus`
- `OPC UA`
- другие PLC / SCADA / southbound-интеграции

Текущий практический первый адаптер в проекте — `KNX`, но имя и структура модели уже сделаны мультипротокольными.

## Глоссарий

- `Edge Telemetry Agent` — наша периферийная система на объекте, которая собирает данные из southbound-протоколов, нормализует их, буферизует и публикует наружу.
- `Monitoring & Alarm Platform` — наша центральная система в облаке/интернете, которая принимает события, хранит телеметрию, вычисляет `alarm` и предоставляет UI/API.
- `alarm` — доменная сущность тревоги в платформе: правило сработало, есть жизненный цикл, severity, acknowledgement и clear.
- `notification` — внешнее сообщение по `alarm` или служебному событию, отправляемое через email, SMS, push или webhook.
- `telemetry event` — нормализованное событие наблюдения по одной точке мониторинга.
- `status topic` — transport-specific `MQTT` сообщение о состоянии southbound source или самого publisher, например `status/connection` и `status/lwt`.
- `southbound-адаптеры` — адаптеры и драйверы, через которые `Edge Telemetry Agent` подключается вниз по стеку к полевым протоколам и локальным источникам данных, например `KNX`, `Modbus`, `OPC UA`, `SCADA`.
- `northbound delivery` — доставка данных вверх по стеку из `Edge Telemetry Agent` в `Monitoring & Alarm Platform` через внешний transport, например `MQTT`.
- `source` — логическое подключение агента к конкретному источнику данных, идентифицируемое `source_id`.
- `point` — точка мониторинга внутри `source`, идентифицируемая `point_ref`.
- `point_ref` — технический идентификатор точки внутри источника, например group address, node id или register reference.
- `point_key` — safe representation от `point_ref`, используемое в `MQTT` topic path.

## Команды

После установки `Node.js` и зависимостей:

```bash
cd arch
npm install
npm run dev
```

Полезные команды:

- `npm run dev` — локальный preview LikeC4
- `npm run validate` — валидация DSL, семантики и layout
- `npm run build` — собрать статический output
- `npm run export:json` — экспортировать модель в JSON
- `npm run export:mermaid` — экспортировать производное представление в Mermaid
- `npm run mcp` — поднять LikeC4 MCP server

## Текущее состояние окружения

На этой машине установлен `Node.js` через `Homebrew`, зависимости `LikeC4` уже установлены локально в `arch/node_modules`, а базовые команды `validate`, `build` и `export:json` успешно отработали на текущей модели.

## Следующий шаг

Следующие логичные шаги для модели:

- дополнительные deployment views для production-вариантов beyond demo-стенда
- при необходимости `C3` для ключевых контейнеров, например `Collector Runtime` и `MQTT Ingestion Gateway`
