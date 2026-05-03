from __future__ import annotations

import uvicorn

from config_registry_api.settings import ConfigRegistryApiSettings


def main() -> None:
    settings = ConfigRegistryApiSettings.from_env()
    uvicorn.run(
        "config_registry_api.main:create_app",
        factory=True,
        host=settings.host,
        port=settings.port,
    )


if __name__ == "__main__":
    main()
