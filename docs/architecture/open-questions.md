# Открытые вопросы и развилки

Дата: 2026-05-03
Статус: open

Документ актуализирован после сверки:

- верхнеуровневой markdown-документации в `docs/architecture/`
- LikeC4-модели в `arch/likec4/`
- текущей Python-реализации в `apps/edge_agent/` и `apps/knx_demo/`
- локального dev-контура в `infra/local/`
- versioned edge profile demo-стенда в `environments/demo-stand/`

## Что уже зафиксировано в репозитории

- Для `demo-stand` уже есть versioned edge profile первого `KNX`-среза:
  `0/0/1` как `command`, `0/0/7` как `feedback`, `2/0/0` как `sensor`.
- В текущем конфиге `read_on_start` уже включен для `0/0/7` и `2/0/0`, а
  `change_threshold = 1.0` уже задан для температуры.
- В коде `edge_agent` уже реализованы и покрыты тестами:
  загрузка bootstrap + retained runtime/source config, fail-fast валидация,
  подавление `command`-точек, threshold-based processing и `SQLite Delivery Outbox`.
- В коде и `infra/local/` уже зафиксирован рабочий локальный dev-контур:
  `MQTT broker`, `Apache Kafka` и `Redpanda Connect` pipeline для integration flow.
- Для целевой configuration-модели принят `ADR-008`: edge-agent получает
  retained runtime/source configs из MQTT; delivery path уточнен в `ADR-010`
  как PostgreSQL config outbox -> Kafka -> MQTT retained projection.
- Текущий проект уже достиг `MVP baseline`: `KNX/edge_agent -> MQTT -> Kafka`
  ingestion slice работает в репозитории и покрыт integration-тестами.
- Полная `Monitoring & Alarm Platform` как `MQTT Ingestion Gateway`,
  `Redpanda Connect`, `Redpanda`, `Kafka Event Log`, `Telemetry Consumers`, `Streaming Analytics`,
  `Telemetry Store`, `Platform Store`, `Alarm Rule Engine`, `Platform API`, `Platform Frontend`,
  `Keycloak`, `Grafana` и `Notification Service` остается следующей фазой
  развития поверх текущего `MVP`.

## Что принято в рабочих материалах по пилоту `KNX -> OPC`

- Для пилота `KNX -> OPC` принят отдельный сервисный контур: write-path
  допускается только из внешнего `OPC`-клиента, а не из web-monitoring UI/API.
- Для того же пилота принят контейнерный сценарий поставки на
  `Ubuntu Server LTS`; нативная дистрибуция на `Windows` выведена в отдельный
  проект и не считается частью текущего объема работ.

Ниже перечислены только те вопросы, которые остаются реально открытыми после
этой сверки.

## Исходные данные объекта и KNX-карта

| Вопрос | Почему это важно | Степень блокировки |
| --- | --- | --- |
| Являются ли текущие артефакты demo-стенда: `.local/Выстовка.knxproj*` и текущие YAML-файлы утвержденным source of truth для формирования первого `wm.edge.source-config.v1` bundle? | После `ADR-008` runtime source of truth для edge-agent должен приходить через retained MQTT configs, но исходная KNX-карта все равно нужна для генерации source config | Критично |
| Подтверждены ли для первого среза `read_on_start` и семантика чтения именно для `0/0/7` и `2/0/0`? | Versioned конфиг уже включает `read_on_start`, но это нужно подтвердить эксплуатационно, чтобы не зависеть от неподдерживаемого `GroupValueRead` | Высокая |
| Какой следующий утвержденный whitelist точек нужен после текущих `0/0/7` и `2/0/0`? | Без этого нельзя планировать второй инкремент адаптера, расширение point registry и проверку `value_model` beyond demo | Средняя |

## Целевая топология edge-узла

| Вопрос | Почему это важно | Степень блокировки |
| --- | --- | --- |
| Готов ли заказчик предоставить `Ubuntu Server LTS` host/VM для пилота `KNX -> OPC`, если текущая эксплуатационная среда у него `Windows Server 2019`? | Для пилота уже принят контейнерный сценарий эксплуатации на `Ubuntu`. Без подтверждения хоста или VM нельзя финализировать deployment, сетевые правила и операционный контур | Критично |
| Требуется ли после пилота отдельная эксплуатационная поставка на `Windows Server 2019`, или для заказчика достаточно контейнерной поставки на `Ubuntu Server LTS`? | Это влияет на roadmap, бюджет и границы следующего проекта. Сейчас `Windows`-дистрибуция явно вынесена за рамки текущего объема работ | Высокая |
| На каком классе хоста будет работать production `Edge Telemetry Agent`: industrial PC, VM, отдельный Linux-host или встроенный контроллер? | Сейчас рабочий dev-сценарий идет с `Developer Workstation`, а target topology требует отдельный edge-узел на объекте. Это влияет на packaging, watchdog, volume paths и lifecycle | Критично |
| Остается ли внешний NAT-доступ к `KNX/IP` строго dev-only сценарием, или нужен утвержденный remote maintenance path и для эксплуатации? | Сейчас документы разводят production topology и demo remote access. Нужно подтвердить сетевую политику, чтобы не спроектировать лишний или небезопасный ingress path | Высокая |
| Достаточно ли на первом production-срезе `docker compose`, или нужен еще `systemd`-wrapper/OS service management? | Влияет на автозапуск, restart policy, log collection и операционную документацию edge-узла | Средняя |
| Какой допустимый простой edge runtime при рестарте, обновлении и reconnect? | Это влияет на backoff policy, drain outbox, health semantics и требования к rolling update | Средняя |

## Следующий срез Monitoring & Alarm Platform

| Вопрос | Почему это важно | Степень блокировки |
| --- | --- | --- |
| Какой минимальный implementation scope `Config Registry` нужен для первого инкремента: только tenants/objects/agents/sources/points или сразу render config revisions? | `ADR-010` зафиксировал backend хранения настроек, но backlog первого кода нужно ограничить | Высокая |
| Где фиксируется `Redpanda Connect` pipeline config: в platform repository, IaC, Redpanda Cloud-managed pipeline или отдельном operations bundle? | MQTT input, mapping/transform и redpanda output становятся частью production data path, поэтому конфигурация pipeline должна быть версионирована и управляться так же строго, как edge source config | Высокая |
| Нужно ли менять draft Kafka topics, retention и consumer groups после нагрузочного PoC? | Базовый контракт зафиксирован в `docs/contracts/kafka/topics.v1.md`, но реальные partition counts и retention могут потребовать корректировки после измерений | Средняя |
| Нужно ли менять draft ClickHouse DDL, rollups и TTL после нагрузочного PoC? | Базовый контракт зафиксирован в `docs/contracts/clickhouse/telemetry-store.v1.md`, но production performance schema должна быть подтверждена на данных целевого масштаба | Средняя |
| Какой минимальный lifecycle `alarm` нужен в первом релизе: severity, acknowledge, clear, mute, escalation? | Это определяет границу между просто monitoring dashboard и реальной alarm-platform | Высокая |
| Какие notification channels требуются в первом production-срезе: email, Telegram, SMS, webhook или только in-app/Grafana? | В LikeC4 есть `Notification Service`, но без выбора каналов нельзя стабилизировать scope backend и интеграций | Средняя |
| Когда принимать отдельный ADR по Keycloak/auth/JWT/users/roles? | Аутентификация специально исключена из `ADR-010`, чтобы не смешивать хранение настроек и IAM | Средняя |

## MQTT delivery и безопасность

| Вопрос | Почему это важно | Степень блокировки |
| --- | --- | --- |
| Какой именно `MQTT broker` и endpoint используются в production, и кто ими владеет? | Локальный broker уже есть для dev и smoke-tests, но production transport пока не закреплен организационно и технически | Критично |
| Какие требования к `TLS`, client auth, certificates и topic ACL у production MQTT-брокера? | Это влияет на структуру secrets, bootstrap агента и publish/subscribe contract между edge и platform | Высокая |
| Где будут храниться production secrets: `.env`, file secret, `systemd` credentials, vault, Kubernetes secret store или иной способ? | Сейчас в репозитории уже есть env-placeholder модель, но production secret handling не зафиксирован | Высокая |
| Для первого production-объекта используется обычный `KNXnet/IP` или требуется `KNX Secure`? | Это прямо влияет на стек библиотек, ключевой материал и реальную применимость текущего `KNX-first` кода/инструментов | Высокая |

## Server-issued edge config

| Вопрос | Почему это важно | Степень блокировки |
| --- | --- | --- |
| Какой максимальный размер одного retained `wm.edge.source-config.v1` допустим для production MQTT broker? | Runtime config делится по `source_id`, но один source все равно может содержать десятки тысяч points. Нужно понять, когда потребуется chunking | Высокая |
| Как формировать deterministic `config_revision` и `source_config_revision`: human version, content hash или оба поля? | AI-agent должен давать воспроизводимый diff и publish summary, а edge/ingestion должны однозначно валидировать примененную версию | Высокая |
| Как Redpanda Connect projection должен публиковать rollback или отключение source: новый retained payload с `enabled=false` или retained tombstone? | Это влияет на MQTT retained lifecycle и на безопасное удаление/отключение источников | Средняя |
| Когда YAML config bundle мигрирует в `Platform Store` и `Platform API`? | На первом этапе server UI/API не делаем, но нужно заранее не сломать будущую модель authoring через API | Средняя |

## Observability и эксплуатация

| Вопрос | Почему это важно | Степень блокировки |
| --- | --- | --- |
| Какие health/metrics считаются обязательными для edge runtime и платформы в первом production-срезе? | В конфиге уже есть `metrics_bind`, а в архитектуре есть observability, но минимальный контракт SLI/SLO пока не назван | Средняя |
| Нужно ли в production считать lag по Delivery Outbox, delivery latency и source connection uptime как обязательные SLI? | Эти метрики логично следуют из архитектуры Local State Store и delivery-модели, но без явного решения их легко не реализовать вовремя | Средняя |
| Куда должны уходить логи edge runtime и платформы: только локальный файл/journal или централизованный log sink? | Без этого сложно определить retention, incident workflow и реальную поддержку объекта | Средняя |
| Достаточно ли текущих CLI и demo utilities для диагностики на объекте, или нужен отдельный support-oriented diagnostic mode/UI? | В репозитории уже есть `edge-agent check-config`, `show-config`, `enqueue-demo-event`, `deliver-once` и `knx-demo`, но production-support workflow пока не утвержден | Низкая |

## Ближайшие решения

- подтвердить, что текущий `demo-stand` конфиг и ETS-derived артефакты являются каноническим source of truth для первого `KNX`-среза
- зафиксировать production MQTT broker, требования по `TLS`/`ACL` и способ хранения секретов
- зафиксировать contract и limits для config delivery: bundle layout, revision generation, Kafka delivery record, retained projection order и rollback semantics
- определить первый implementation scope для `Config Registry` поверх `ADR-010`
- зафиксировать Kafka topic contract, retention/rollup/deduplication contract для ClickHouse и минимальный lifecycle `alarm`
