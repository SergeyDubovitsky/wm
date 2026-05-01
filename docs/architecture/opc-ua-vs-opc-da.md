# OPC UA vs OPC DA

Дата: 2026-04-18  
Статус: working draft

## Сравнение

| Критерий | OPC UA | OPC DA |
| --- | --- | --- |
| Поколение стандарта | Современный стандарт OPC | `OPC Classic` |
| Базовая технология | Независимая сервисная архитектура | `Microsoft COM/DCOM` |
| Платформенность | Кроссплатформенный | Практически `Windows-only` |
| Сеть и деплой | Проще для межсетевого взаимодействия | Сложнее из-за `DCOM` |
| Безопасность | Встроенные сертификаты, шифрование, аутентификация | Безопасность и доступ завязаны на `DCOM` и инфраструктуру Windows |
| Модель данных | Богатая модель: namespace, browse, methods, events, subscriptions | В основном realtime data access |
| Подписка на изменения | Нативно поддерживается | Поддерживается, но стек старее и менее гибкий |
| История / события | В рамках `UA`-экосистемы покрываются шире | Разделены на отдельные Classic-спеки: `DA`, `HDA`, `A&E` |
| Работа через firewall / routed networks | Обычно проще | Обычно сложнее |
| Перспективность | Рекомендуемый путь для новых интеграций | Legacy-путь для совместимости |
| Пригодность для нового Python-проекта | Высокая | Низкая |

## Open Source и Python

| Сценарий | Open source вариант есть | Практическая пригодность | Комментарий |
| --- | --- | --- | --- |
| `OPC UA client` на Python | Да | Высокая | Есть зрелые open-source библиотеки |
| `OPC UA server` на Python | Да | Высокая | Основной кандидат: `asyncua` |
| `OPC DA client` на Python | Да | Средняя | Возможен через `OpenOPC-DA`, но с Windows/COM-ограничениями |
| `OPC DA server` на Python | Теоретически частично / неудобно | Низкая | Нет сопоставимого по зрелости и удобству open-source server stack, как у `OPC UA` |
| `OPC DA/HDA` для кроссплатформенного продукта | Практически нет | Низкая | Упирается в `COM/DCOM` и `Windows` |

## Вывод по реализации

| Вопрос | Ответ |
| --- | --- |
| Чем `OPC UA` лучше для нового проекта | Кроссплатформенность, встроенная security-модель, richer data model, удобнее для `SCADA` и новых интеграций |
| Можно ли делать `OPC DA` на open source | Частично да, в основном на стороне клиента и с сильной зависимостью от `Windows` |
| Можно ли комфортно сделать свой `OPC DA server` на Python | Практически не рекомендуется |
| Что выбирать для `KNX -> SCADA` проекта | `OPC UA` |
| Когда имеет смысл думать про `OPC DA` | Только если появится конкретная `SCADA`, которая не умеет `UA` и требует именно Classic |

## Рекомендация для текущего проекта

| Направление | Рекомендация |
| --- | --- |
| Основной протокол | `OPC UA` |
| Язык | `Python` |
| Библиотека сервера | `asyncua` |
| Поддержку `OPC DA` в первой версии | Не включать |
| Стратегия на будущее | Если потребуется `DA`, делать отдельный `Windows-only` совместимый bridge или использовать внешний gateway |

## Источники

| Источник | Что подтверждает |
| --- | --- |
| [OPC Foundation: Classic](https://opcfoundation.org/about/opc-technologies/opc-classic/) | `OPC Classic` основан на `COM/DCOM`, включает `DA`, `A&E`, `HDA`, а `OPC UA` был выпущен как платформенно независимая замена |
| [OPC Foundation reference](https://reference.opcfoundation.org/Weihenstephan/v100/docs/1.2.2) | `OPC UA` платформенно независим, расширяем и ориентирован на secure exchange |
| [OpenOPC-DA PyPI](https://pypi.org/project/OpenOPC-DA/) | Для `OPC DA` в Python есть open-source toolkit, но он завязан на `OPC Automation DLL` и Windows-экосистему |
| [asyncua PyPI](https://pypi.org/project/asyncua/) | Для `OPC UA` в Python есть open-source клиент и сервер |
| [opcua-asyncio GitHub](https://github.com/FreeOpcUa/opcua-asyncio) | Подтверждает наличие Python `OPC UA server/client` библиотеки |

