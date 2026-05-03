from __future__ import annotations

from typing import Protocol

from wm_config_registry.domain.entities import ConfigOutboxRecord


class ConfigRecordPublisher(Protocol):
    async def publish(self, record: ConfigOutboxRecord) -> None: ...
