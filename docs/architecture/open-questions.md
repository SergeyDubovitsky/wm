# Открытые вопросы и развилки

Дата: 2026-03-29  
Статус: open

Документ актуализирован после сверки:

- верхнеуровневой markdown-документации в `docs/architecture/`
- LikeC4-модели в `arch/likec4/`
- текущей Python-реализации в `apps/edge_agent/` и `apps/knx_demo/`
- локального dev-контура в `infra/local/`
- versioned runtime-конфига demo-стенда в `environments/demo-stand/`

## Что уже зафиксировано в репозитории

- Для `demo-stand` уже есть versioned runtime-конфиг первого `KNX`-среза:
  `0/0/1` как `command`, `0/0/7` как `feedback`, `2/0/0` как `sensor`.
- В текущем конфиге `read_on_start` уже включен для `0/0/7` и `2/0/0`, а
  `change_threshold = 1.0` уже задан для температуры.
- В коде `edge_agent` уже реализованы и покрыты тестами:
  валидация конфигурации, merge source defaults + point overrides, подавление
  `command`-точек, threshold-based processing, `SQLite Outbox`, persistent
  `agent_id`.
- В коде и `infra/local/` уже зафиксирован рабочий локальный dev-контур:
  `MQTT broker + Grafana + grafana-mqtt-datasource`.
- Полная `Monitoring & Alarm Platform` как `MQTT Ingestion Gateway`,
  `Telemetry Store`, `Alarm Rule Engine`, `Platform API`, `Platform Frontend`,
  `Keycloak` и `Notification Service` пока существует как архитектурная цель;
  в коде сейчас реализован только локальный `MQTT -> Grafana` slice.

Ниже перечислены только те вопросы, которые остаются реально открытыми после
этой сверки.

## Исходные данные объекта и KNX-карта

| Вопрос | Почему это важно | Степень блокировки |
| --- | --- | --- |
| Являются ли текущие артефакты demo-стенда: `.local/Выстовка.knxproj*` и `environments/demo-stand/edge_agent/*.yaml` утвержденным source of truth для первого `KNX`-среза? | Сейчас код, конфиги и диаграммы уже синхронизированы вокруг этих файлов. Без явного подтверждения остается риск, что мы стабилизируем runtime на временных предположениях | Критично |
| Подтверждены ли для первого среза `read_on_start` и семантика чтения именно для `0/0/7` и `2/0/0`? | Versioned конфиг уже включает `read_on_start`, но это нужно подтвердить эксплуатационно, чтобы не зависеть от неподдерживаемого `GroupValueRead` | Высокая |
| Какой следующий утвержденный whitelist точек нужен после текущих `0/0/7` и `2/0/0`? | Без этого нельзя планировать второй инкремент адаптера, расширение point registry и проверку `value_model` beyond demo | Средняя |

## Целевая топология edge-узла

| Вопрос | Почему это важно | Степень блокировки |
| --- | --- | --- |
| На каком классе хоста будет работать production `Edge Telemetry Agent`: industrial PC, VM, отдельный Linux-host или встроенный контроллер? | Сейчас рабочий dev-сценарий идет с `Developer Workstation`, а target topology требует отдельный edge-узел на объекте. Это влияет на packaging, watchdog, volume paths и lifecycle | Критично |
| Остается ли внешний NAT-доступ к `KNX/IP` строго dev-only сценарием, или нужен утвержденный remote maintenance path и для эксплуатации? | Сейчас документы разводят production topology и demo remote access. Нужно подтвердить сетевую политику, чтобы не спроектировать лишний или небезопасный ingress path | Высокая |
| Достаточно ли на первом production-срезе `docker compose`, или нужен еще `systemd`-wrapper/OS service management? | Влияет на автозапуск, restart policy, log collection и операционную документацию edge-узла | Средняя |
| Какой допустимый простой edge runtime при рестарте, обновлении и reconnect? | Это влияет на backoff policy, drain outbox, health semantics и требования к rolling update | Средняя |

## Граница MVP для Monitoring & Alarm Platform

| Вопрос | Почему это важно | Степень блокировки |
| --- | --- | --- |
| Что считается минимальным production-ready срезом платформы: только `MQTT + Grafana` live view или уже обязательны `Platform Frontend`, `Platform API` и `Keycloak`? | В репозитории уже есть два слоя: текущая реализация и целевая архитектура. Нужно зафиксировать, где заканчивается MVP, чтобы не смешивать dev harness с обязательным production scope | Критично |
| Какой `Telemetry Store` будет authoritative хранилищем истории в первой production-версии платформы? | Сейчас `Grafana` работает через live `MQTT` datasource и явно не заменяет storage. Без выбора хранилища невозможно стабилизировать ingestion и историю alarm | Критично |
| Какой минимальный lifecycle `alarm` нужен в первом релизе: severity, acknowledge, clear, mute, escalation? | Это определяет границу между просто monitoring dashboard и реальной alarm-platform | Высокая |
| Какие notification channels требуются в первом production-срезе: email, Telegram, SMS, webhook или только in-app/Grafana? | В LikeC4 есть `Notification Service`, но без выбора каналов нельзя стабилизировать scope backend и интеграций | Средняя |
| Является ли `Keycloak` действительно целевым IAM-компонентом, и если да, какие нужны realm/client/role boundaries? | `Keycloak` уже есть в архитектурной модели, но его границы владения и интеграции пока не зафиксированы вне схем | Средняя |

## MQTT delivery и безопасность

| Вопрос | Почему это важно | Степень блокировки |
| --- | --- | --- |
| Какой именно `MQTT broker` и endpoint используются в production, и кто ими владеет? | Локальный broker уже есть для dev и smoke-tests, но production transport пока не закреплен организационно и технически | Критично |
| Какие требования к `TLS`, client auth, certificates и topic ACL у production MQTT-брокера? | Это влияет на структуру secrets, bootstrap агента и publish/subscribe contract между edge и platform | Высокая |
| Где будут храниться production secrets: `.env`, file secret, `systemd` credentials, vault, Kubernetes secret store или иной способ? | Сейчас в репозитории уже есть env-placeholder модель, но production secret handling не зафиксирован | Высокая |
| Для первого production-объекта используется обычный `KNXnet/IP` или требуется `KNX Secure`? | Это прямо влияет на стек библиотек, ключевой материал и реальную применимость текущего `KNX-first` кода/инструментов | Высокая |

## Observability и эксплуатация

| Вопрос | Почему это важно | Степень блокировки |
| --- | --- | --- |
| Какие health/metrics считаются обязательными для edge runtime и платформы в первом production-срезе? | В конфиге уже есть `metrics_bind`, а в архитектуре есть observability, но минимальный контракт SLI/SLO пока не назван | Средняя |
| Нужно ли в production считать lag по outbox, delivery latency и source connection uptime как обязательные SLI? | Эти метрики логично следуют из архитектуры и outbox-модели, но без явного решения их легко не реализовать вовремя | Средняя |
| Куда должны уходить логи edge runtime и платформы: только локальный файл/journal или централизованный log sink? | Без этого сложно определить retention, incident workflow и реальную поддержку объекта | Средняя |
| Достаточно ли текущих CLI и demo utilities для диагностики на объекте, или нужен отдельный support-oriented diagnostic mode/UI? | В репозитории уже есть `edge-agent check-config`, `show-config`, `agent-id` и `knx-demo`, но production-support workflow пока не утвержден | Низкая |

## Ближайшие решения

- подтвердить, что текущий `demo-stand` конфиг и ETS-derived артефакты являются каноническим source of truth для первого `KNX`-среза
- зафиксировать production MQTT broker, требования по `TLS`/`ACL` и способ хранения секретов
- определить, где заканчивается MVP платформы: `MQTT + Grafana` или уже `Platform Frontend + API + Keycloak`
- выбрать authoritative `Telemetry Store` и минимальный lifecycle `alarm`
