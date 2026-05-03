from __future__ import annotations

import os
from dataclasses import dataclass


@dataclass(frozen=True)
class PlatformApiSettings:
    host: str = "127.0.0.1"
    port: int = 8000
    internal_mode: bool = True
    database_url: str | None = None

    @classmethod
    def from_env(cls) -> PlatformApiSettings:
        return cls(
            host=os.getenv("PLATFORM_API_HOST", "127.0.0.1"),
            port=int(os.getenv("PLATFORM_API_PORT", "8000")),
            internal_mode=os.getenv("PLATFORM_API_INTERNAL_MODE", "true").lower()
            in {"1", "true", "yes"},
            database_url=os.getenv("PLATFORM_DATABASE_URL"),
        )
