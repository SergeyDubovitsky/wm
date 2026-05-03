from __future__ import annotations

import uvicorn

from platform_api.settings import PlatformApiSettings


def main() -> None:
    settings = PlatformApiSettings.from_env()
    uvicorn.run(
        "platform_api.main:create_app",
        factory=True,
        host=settings.host,
        port=settings.port,
    )


if __name__ == "__main__":
    main()
