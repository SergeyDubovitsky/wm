# Architecture Docs

Дата: 2026-05-02
Статус: working index

Начинайте отсюда, если нужно быстро понять систему без чтения всех ADR.

## Быстрый вход

| Нужно понять | Читать |
| --- | --- |
| Что система делает сейчас | `current-state.md` |
| Термины и границы понятий | `glossary.md` |
| Какие вопросы еще открыты | `open-questions.md` |
| Целевую архитектуру и runtime-сценарии | `solution-architecture.md` |
| Почему были приняты ключевые решения | `adrs/README.md`, затем конкретный ADR |
| Точные контракты сообщений, topics и таблиц | `../contracts/README.md` |
| Карты систем и контейнеров | `../../arch/README.md` |

## Правило приоритета

- `current-state.md` описывает рабочую картину на сегодня.
- `adrs/` объясняют историю решений и trade-off.
- `docs/contracts/` является source of truth для полей сообщений, MQTT/Kafka
  topics, table names и JSON Schema.
- `arch/likec4/` является source of truth для C4-модели систем и контейнеров.

Если документы расходятся, сначала проверьте `current-state.md` и
`docs/contracts/`, затем смотрите ADR как объяснение происхождения решения.
