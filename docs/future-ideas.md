# Future Ideas

Этот файл хранит только идеи и возможные следующие инкременты.

Он не является execution backlog.
Текущие задачи, приоритеты и статус выполнения ведутся в `YouTrack`.

## Ideas

- Экспортёр `knxproj -> Edge Agent config`
  Кратко: преобразовывать данные парсера в `config/sources.d/*.yaml` и
  `config/points.d/*.yaml`, брать `point_ref` из `KNX group address`,
  нормализовывать `DPT -> value_model/value_type`, подсказывать `signal_type`
  и явно помечать точки, где нужен `manual override`.

- Архитектура голосового управления без подключения к интернету для управления устройствами
