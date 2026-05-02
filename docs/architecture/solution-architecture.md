# Архитектура универсального решения для промышленного сбора и мониторинга

Дата: 2026-05-02  
Статус: working draft

## Назначение

Цель решения: развернуть на объекте `Edge Telemetry Agent`, который подключается к полевым протоколам и локальным системам автоматизации, получает телеметрию, нормализует значения, фильтрует шум, буферизует события при недоступности внешнего контура и отправляет данные в `Monitoring & Alarm Platform` в облаке/интернете.

Целевой контур должен поддерживать не только `KNX`, но и `Modbus`, `OPC UA`, а также другие PLC/SCADA-интеграции через southbound-адаптеры.

Текущий практический фокус проекта: демо-стенд `KNX` как первый реализуемый адаптер и MVP без управляющих действий в production data path.

## Границы решения

В контуре этого решения:

- `Edge Telemetry Agent`, разворачиваемый непосредственно на объекте
- `Monitoring & Alarm Platform`, разворачиваемая в облаке/интернете
- подключение к полевым шлюзам, контроллерам и промышленным интерфейсам в локальной сети объекта
- сбор входящих событий и выборочное чтение известных тегов/адресов/регистров
- декодирование полезной нагрузки по известной протокольной модели
- нормализация в единый формат событий
- фильтрация событий по правилам `change_threshold`
- локальный буфер исходящих сообщений
- доставка событий в центральную платформу по `MQTT 5.0`
- централизованное хранение телеметрии и истории `alarm`
- операторские панели мониторинга, `alarm`-логика и маршрутизация уведомлений
- эксплуатационные логи, health-события и базовые метрики

Вне контура:

- автоматическое и полное discovery всех сущностей, тегов и моделей данных без исходной карты адресов
- бизнес-логика управления оборудованием
- долгосрочное хранение телеметрии на edge-узле
- полноценная SCADA/HMI для управляющего контура
- расширенная аналитика и отчетность вне базового monitoring/alarm-контура
- реализация всех protocol-specific security modes в MVP
- внешние провайдеры доставки email/SMS/push/webhook

## Системный контекст

Source of truth для `C1/C2` и следующих уровней декомпозиции находится только в LikeC4-модели в `arch/likec4/`.

Актуальные представления:

- `C1`: `arch/likec4/views.c4` -> `c1-system-context`
- `C2`: `arch/likec4/systems/edge-telemetry-agent/views.c4` -> `c2-edge-telemetry-agent-containers`
- `C2`: `arch/likec4/systems/monitoring-alarm-platform/views.c4` -> `c2-monitoring-alarm-platform-containers`

Ключевые внешние взаимодействия:

- `Service engineer` взаимодействует и с `Edge Telemetry Agent`, и с `Monitoring & Alarm Platform`.
- `Edge Telemetry Agent` работает в локальной сети объекта рядом с источниками данных.
- `Monitoring & Alarm Platform` принимает события от edge-агентов и работает как центральная система в облаке/интернете.
- `Operator` и `Dispatcher` работают только через центральную платформу, а не напрямую с edge-узлом.
- `Notification channels` остаются внешней системой относительно нашей платформы.

## Основные архитектурные принципы

- Edge-first. Сборщик работает в сети объекта и не зависит от постоянной доступности внешнего контура.
- Read-only by default. В production data path web-monitoring контура сервис читает и наблюдает сигналы, но не управляет ими.
- Config-driven. Все известные точки, `value_model`, параметры чтения и правила публикации задаются конфигом.
- Hybrid acquisition. Основной поток данных приходит из event/listen режима там, где он поддерживается; активное чтение включается только для whitelist endpoints.
- Loose coupling. Протокольная интеграция, правила фильтрации и доставка во внешний контур разделены по компонентам.
- Fail-safe degradation. При потере backend события не теряются сразу, а уходят в локальный Delivery Outbox.

## Функциональные требования

- принимать входящие данные через southbound-адаптеры, включая `KNX`, `Modbus`, `OPC UA`
- выполнять `read_on_start` для явно разрешенных status/sensor endpoints
- поддерживать периодическое чтение только для отдельных endpoints
- различать `command`, `feedback`, `status`, `sensor`
- публиковать дискретные сигналы по изменению состояния
- публиковать аналоговые сигналы по достижению порога изменения
- логировать события связи, декодирования и доставки
- буферизовать неотправленные события локально
- принимать `MQTT` telemetry events, source metadata catalog и status topics в центральной платформе
- хранить телеметрию, source metadata catalog и историю `alarm`
- выполнять правила `alarm` и маршрутизировать уведомления
- предоставлять операторский UI и backend API для мониторинга и работы с `alarm`

## Нефункциональные требования

- развертывание на отдельном узле в локальной сети объекта
- работа без локального edge broker на объекте
- восстановление после кратковременной потери сети и southbound-соединения
- предсказуемое поведение после перезапуска за счет `read_on_start`, SQLite Point State Cache и Delivery Outbox
- стандартный запуск через `docker compose` с возможностью добавить `systemd`-обертку позже
- `MQTT 5.0` как primary transport MVP без переписывания ядра сбора

## Логическая архитектура

Контейнерные схемы логической архитектуры ведутся только в LikeC4.

На уровне `C2` сейчас зафиксированы:

- `Edge Telemetry Agent`: `Configuration Bundle`, `Collector Runtime`, `Local State Store`, `Delivery Worker`
- `Monitoring & Alarm Platform`: `MQTT Ingestion Gateway`, `Redpanda Connect`, `Redpanda`, `Kafka Event Log`, `Telemetry Consumers`, `Streaming Analytics`, `Telemetry Store`, `Platform Store`, `Alarm Rule Engine`, `Platform API`, `Platform Frontend`, `Keycloak`, `Grafana`, `Notification Service`

### Поток данных в Monitoring & Alarm Platform

Целевой production-поток внутри платформы:

1. `Edge Telemetry Agent` публикует telemetry events, retained source catalog, source connection status и agent LWT/status по `MQTT 5.0`.
2. `MQTT Ingestion Gateway` принимает MQTT-поток, валидирует payload и восстанавливает routing context.
3. `Redpanda Connect` подписывается на MQTT topics через `mqtt` input.
4. `Redpanda Connect` применяет mapping/transform pipeline по контракту `wm.platform-ingestion.mqtt-to-kafka.v1` и пишет canonical records в `Redpanda` через `redpanda` output.
5. `Redpanda` хранит и обслуживает `Kafka Event Log` по контракту `wm.kafka.topics.v1`.
6. `Telemetry Consumers` читают Kafka topics и записывают raw/canonical telemetry events, source metadata snapshots, source connection history и agent status history в `Telemetry Store` на базе `ClickHouse` по контракту `wm.clickhouse.telemetry-store.v1`.
7. `Streaming Analytics` читает Kafka topics, при необходимости читает исторический контекст из `Telemetry Store`, рассчитывает агрегаты и производные признаки, записывает результаты в `Telemetry Store` и передает derived events в `Alarm Rule Engine`.
8. `Alarm Rule Engine` обрабатывает telemetry и derived events по правилам, пишет immutable alarm history в `Telemetry Store`, хранит current alarm state и operator workflow state в `Platform Store` на базе `PostgreSQL` и инициирует уведомления.
9. `Grafana` читает dashboards из `Telemetry Store`; `Platform API` читает `Telemetry Store` для истории/графиков и `Platform Store` для конфигурации, правил и текущего состояния; `Platform Frontend` работает через `Platform API`.

### Хранилища данных Monitoring & Alarm Platform

Решение по persistence зафиксировано в `ADR-007`.

- `Telemetry Store` — `ClickHouse`, authoritative analytical store для append-only telemetry events, source metadata snapshots, source connection history, agent status history, derived events, aggregates, rollups и immutable alarm history.
- `Platform Store` — `PostgreSQL`, transactional store для objects, agents, sources, point registry, alarm rules, notification policies, current alarm state, acknowledgements, mutes, audit и Keycloak persistence.
- `Redpanda` и `Kafka Event Log` являются streaming/replay слоем и не заменяют долговременное хранилище платформы.

Source of truth для ingestion, Kafka topics и ClickHouse DDL draft находится в
`docs/contracts/platform-ingestion/`, `docs/contracts/kafka/` и
`docs/contracts/clickhouse/`.

## Компоненты и ответственность

| Компонент | Ответственность |
| --- | --- |
| `Config Loader` | Загружает глобальный конфиг агента, source definitions, registry точек и правила доставки |
| `Southbound Connection Manager` | Устанавливает протокольные соединения, отслеживает состояние каналов, выполняет reconnect |
| `Protocol Event Listener` | Получает входящие события, выделяет endpoint, направление и raw payload |
| `Selective Read Scheduler` | Выполняет `read_on_start` и `periodic_read` только по whitelist endpoints |
| `Protocol Decoder / Normalizer` | Преобразует raw payload в типизированное значение по протокольной модели |
| `In-memory Last Value Cache` | Хранит последнее увиденное и последнее отправленное значение по каждой точке во время работы процесса |
| `SQLite Point State Cache` | Сохраняет последнее состояние точки, sequence и контекст фильтрации для warm restart |
| `Change Filter` | Решает, публиковать событие или подавить его как дубль/шум |
| `SQLite Delivery Outbox` | Временно хранит telemetry events, ожидающие доставки или повторной отправки |
| `MQTT Publisher` | Публикует telemetry events с тонким dynamic payload, retained source metadata catalog и status topics в broker, ведет retry и отмечает статус доставки |
| `Logs / Metrics / Health` | Пишет эксплуатационные события и дает наблюдаемость по сервису |

## Развертывание

### Целевая production-топология

- один edge-узел в той же L2/L3-сети, что и полевые шлюзы/контроллеры
- `Edge Telemetry Agent` работает на этом узле как локальный edge runtime
- `Monitoring & Alarm Platform` работает как центральная система в облаке/интернете
- стандартный launcher для первых этапов: `docker compose`
- конфиги монтируются read-only
- `SQLite Local State Store` хранится на локальном диске edge-узла
- наружу открыт только исходящий `MQTT/TLS` к monitoring broker
- входящие публичные порты на edge-узле не требуются, кроме опционального health/metrics в локальном сегменте

### Текущий demo-стенд

- для demo-стенда текущий runtime `Edge Telemetry Agent` запускается не на объекте, а на удаленном `Developer Workstation`
- доступ к стенду выполняется через whitelisted public endpoint `${KNX_EXTERNAL_GATEWAY_IP}:${KNX_EXTERNAL_GATEWAY_PORT}`
- NAT-маршрут: `${KNX_EXTERNAL_GATEWAY_IP}:${KNX_EXTERNAL_GATEWAY_PORT} -> ${KNX_LOCAL_GATEWAY_IP}:${KNX_LOCAL_GATEWAY_PORT}`
- на том же рабочем месте текущая реализация поднимает локальный `MQTT broker` и `Grafana`
- `Grafana` подключается к локальному `MQTT broker` через `grafana-mqtt-datasource`
- этот режим используется только для разработки и проверки первого `KNX`-адаптера
- он не считается целевой production-схемой
- versioned runtime-конфиг для этого сценария должен использовать отдельный remote-profile, а не production-like local-on-site profile

### Grafana в MVP и production

`Grafana` рассматривается как часть `Monitoring & Alarm Platform` и остается в
production-контуре как слой визуализации.

В текущей реализации `Grafana` подключается к локальному `MQTT broker` через
`grafana-mqtt-datasource` и дает live-представление telemetry stream.

В целевом production-контуре `Grafana` читает подготовленные данные из
`Telemetry Store` на базе `ClickHouse`, а не является consumer-ом исходного MQTT-потока.

Ограничения текущей интеграции:

- datasource plugin дает только live-view из `MQTT`, без исторического хранения
- `grafana-mqtt-datasource` не заменяет `Telemetry Store`
- alarm-логика, история и richer backend-возможности по-прежнему принадлежат
  `Monitoring & Alarm Platform`

## Основные runtime-сценарии

### 1. Холодный старт

1. Сервис загружает `agent`-конфиг, описания источников и реестр точек.
2. Поднимает southbound-соединение для активных адаптеров.
3. Публикует retained topic `status/connection` со значением `connected`.
4. Выполняет `read_on_start` по разрешенным endpoints.
5. Запускает пассивное прослушивание и фоновую публикацию Delivery Outbox в `MQTT`.

### 2. Нормальная работа

1. Сервис получает событие или значение из southbound-адаптера.
2. Находит конфигурацию endpoint.
3. Декодирует значение по протокольной модели.
4. Сравнивает с last value cache, SQLite Point State Cache и правилами публикации.
5. Если событие значимо, обновляет локальный state, кладет событие в SQLite Delivery Outbox и публикует наружу как отдельный `MQTT` event.

### 3. Backend недоступен

1. `MQTT publisher` получает ошибку отправки.
2. Событие остается в `SQLite Delivery Outbox`.
3. Доставка повторяется с backoff.
4. Сервис продолжает сбор телеметрии без остановки.

### 4. Потеря southbound-связи

1. Connection manager фиксирует `connection_lost`.
2. Listener прекращает получать входящие события.
3. Запускается reconnect policy.
4. После восстановления выполняется повторный `read_on_start` для критичных status/sensor endpoints.

## Модель данных на границе домена

Нормализованное событие должно содержать минимум:

- `ts`
- `event_id`
- `agent_id`
- `object_id`
- `source_id`
- `source_type`
- `point_ref`
- `name`
- `value_type`
- `value_model`
- `signal_type`
- `observation_mode`
- `value`
- `value_raw`
- `quality`

Подробный контракт вынесен в `docs/contracts/edge-agent/`.

## MQTT status topics и operational logs

Во внешний контур публикуются только те status topics, которые зафиксированы transport-контрактом в `ADR-005`:

- `wm/v1/objects/{object_id}/agents/{agent_id}/sources/{source_id}/status/connection`
- `wm/v1/objects/{object_id}/agents/{agent_id}/status/lwt`

Во внутренних operational logs дополнительно полезны:

- `reconnect_started`
- `reconnect_succeeded`
- `point_read_sent`
- `event_suppressed`
- `decode_failed`

## Безопасность

Для MVP принимаются следующие правила:

- сервис располагается в локальной сети объекта, рядом с полевыми шлюзами и контроллерами
- прямой внешний доступ к промышленным southbound-интерфейсам не используется как штатный production-сценарий
- в проде запрещены управляющие `write` операции из web-monitoring data path
- если для отдельного проекта вводится внешний `OPC`-мост с write-path в `KNX`, он должен рассматриваться как отдельный сервис вне текущего web-monitoring контура
- токены/секреты доставки не хранятся в `apps/edge_agent/config/examples/points.d/*.yaml`, а передаются через окружение или secret store

Целевой roadmap безопасности:

- переход на защищенные режимы конкретных протоколов там, где это поддерживается проектом
- взаимная аутентификация между edge-сервисом и backend
- контроль целостности конфигурации и журналирование изменений

## Риски и ограничения

- без исходной карты тегов, регистров и моделей данных нельзя гарантированно восстановить полную семантику сигналов
- часть источников может поддерживать только polling, а часть только event-driven обновления
- если протокольная модель значения неизвестна, корректная production-нормализация невозможна
- `SQLite` на edge-узле является локальным техническим state store для cache/outbox, а не источником истины состояния оборудования и не архивом телеметрии

## Этапы развития

### Этап 1. MVP

- прямое подключение через первый southbound-адаптер
- listen/poll + `read_on_start`
- структурированный лог
- `SQLite Local State Store`: Point State Cache и Delivery Outbox
- `MQTT 5.0` transport для telemetry events, source metadata catalog и status topics

### Этап 2. Production hardening

- полноценный delivery worker
- мониторинг lag Delivery Outbox и качества доставки
- health endpoints и metrics
- нормальный lifecycle `reconnect + re-read`

### Этап 3. Масштабирование

- несколько протокольных сегментов/сайтов
- централизованная схема конфигурации
- optional `HTTP` sink или дополнительные transports без изменения доменной модели
- опциональные специализированные брокеры/шлюзы, если появятся несколько параллельных локальных потребителей

## Связанные артефакты

- `arch/README.md`
- `docs/architecture/glossary.md`
- `docs/contracts/README.md`
- `docs/contracts/edge-agent/`
- `apps/edge_agent/docs/data-contracts.md`
- `apps/edge_agent/docs/mqtt-topics.md`
- `docs/architecture/open-questions.md`
- `docs/architecture/adrs/ADR-001-runtime-topology.md`
- `docs/architecture/adrs/ADR-002-acquisition-mode.md`
- `docs/architecture/adrs/ADR-003-buffering-and-delivery.md`
- `docs/architecture/adrs/ADR-004-universal-agent-configuration.md`
- `docs/architecture/adrs/ADR-005-mqtt-event-transport.md`
- `docs/architecture/adrs/ADR-007-monitoring-platform-data-stores.md`
- `apps/edge_agent/config/examples/agent.example.yaml`
- `apps/edge_agent/config/examples/sources.d/knx-main.example.yaml`
- `apps/edge_agent/config/examples/points.d/knx-main.example.yaml`
