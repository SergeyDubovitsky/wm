from __future__ import annotations

import uvicorn

from config_registry.settings import ConfigRegistrySettings


def main() -> None:
    settings = ConfigRegistrySettings.from_env()
    uvicorn.run(
        "config_registry.main:create_app",
        factory=True,
        host=settings.host,
        port=settings.port,
    )


if __name__ == "__main__":
    main()
