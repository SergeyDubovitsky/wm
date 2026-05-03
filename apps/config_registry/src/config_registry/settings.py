from __future__ import annotations

import os
from dataclasses import dataclass


@dataclass(frozen=True)
class ConfigRegistrySettings:
    host: str = "127.0.0.1"
    port: int = 8000
    internal_mode: bool = True
    database_url: str | None = None
    kafka_bootstrap_servers: str = "localhost:19092"
    kafka_client_id: str = "config-registry"

    @classmethod
    def from_env(cls) -> ConfigRegistrySettings:
        return cls(
            host=os.getenv("CONFIG_REGISTRY_HOST", "127.0.0.1"),
            port=int(os.getenv("CONFIG_REGISTRY_PORT", "8000")),
            internal_mode=os.getenv("CONFIG_REGISTRY_INTERNAL_MODE", "true").lower()
            in {"1", "true", "yes"},
            database_url=os.getenv("CONFIG_REGISTRY_DATABASE_URL"),
            kafka_bootstrap_servers=os.getenv(
                "KAFKA_BOOTSTRAP_SERVERS",
                "localhost:19092",
            ),
            kafka_client_id=os.getenv(
                "CONFIG_REGISTRY_KAFKA_CLIENT_ID",
                "config-registry",
            ),
        )
