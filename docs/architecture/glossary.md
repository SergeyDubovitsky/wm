# Глоссарий архитектуры

Дата: 2026-03-28  
Статус: working draft

Канонический словарь терминов проекта хранится в этом документе.
LikeC4-модель в `arch/likec4/` и markdown-документы в `docs/architecture/`
должны использовать именно эти термины, если нет отдельной оговорки.

## Основные системы

- `Edge Telemetry Agent` — наша периферийная система на объекте, которая собирает данные из southbound-протоколов, нормализует их, буферизует и публикует наружу.
- `Monitoring & Alarm Platform` — наша центральная система в облаке/интернете, которая принимает события, хранит телеметрию, вычисляет `alarm` и предоставляет UI/API.

## Домен и доставка

- `alarm` — доменная сущность тревоги в платформе: правило сработало, есть жизненный цикл, severity, acknowledgement и clear.
- `notification` — внешнее сообщение по `alarm` или служебному событию, отправляемое через email, SMS, push или webhook.
- `telemetry event` — нормализованное событие наблюдения по одной точке мониторинга.
- `status topic` — transport-specific `MQTT` сообщение о состоянии southbound source или самого publisher, например `status/connection` и `status/lwt`.
- `Grafana` — слой визуализации внутри `Monitoring & Alarm Platform`; в текущей реализации подключается к `MQTT` через `grafana-mqtt-datasource` и не заменяет `Telemetry Store`.
- `southbound-адаптеры` — адаптеры и драйверы, через которые `Edge Telemetry Agent` подключается вниз по стеку к полевым протоколам и локальным источникам данных, например `KNX`, `Modbus`, `OPC UA`, `SCADA`.
- `northbound delivery` — доставка данных вверх по стеку из `Edge Telemetry Agent` в `Monitoring & Alarm Platform` через внешний transport, например `MQTT`.

## Конфигурационная модель

- `source` — логическое подключение агента к конкретному источнику данных, идентифицируемое `source_id`.
- `point` — точка мониторинга внутри `source`, идентифицируемая `point_ref`.
- `point_ref` — технический идентификатор точки внутри источника, например group address, node id или register reference.
- `point_key` — safe representation от `point_ref`, используемое в `MQTT` topic path.
