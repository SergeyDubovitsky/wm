from __future__ import annotations

from collections.abc import Callable

from fastapi import FastAPI

from platform_config_api.api.routers import health, tenants
from platform_config_api.application.ports.unit_of_work import UnitOfWork
from platform_config_api.infrastructure.memory.unit_of_work import (
    InMemoryUnitOfWorkFactory,
)


def create_app(
    unit_of_work_factory: Callable[[], UnitOfWork] | None = None,
) -> FastAPI:
    app = FastAPI(
        title="Web Monitoring Platform Config API",
        version="0.1.0",
        docs_url="/docs",
        redoc_url="/redoc",
    )
    app.state.unit_of_work_factory = unit_of_work_factory or InMemoryUnitOfWorkFactory()
    app.include_router(health.router)
    app.include_router(tenants.router)
    return app
