from __future__ import annotations

from fastapi import FastAPI
from sqladmin import Admin, BaseView, ModelView
from sqlalchemy.ext.asyncio import AsyncEngine

from wm_config_registry.infrastructure.backoffice_actions import (
    ConfigOutboxActionsBackofficeView,
)
from wm_config_registry.infrastructure.backoffice_business_views import (
    AgentBackofficeView,
    AssetBackofficeView,
    PointBackofficeView,
    SourceBackofficeView,
    TenantBackofficeView,
)
from wm_config_registry.infrastructure.backoffice_config_views import (
    ConfigOutboxBackofficeView,
    RuntimeConfigRevisionBackofficeView,
    SourceConfigRevisionBackofficeView,
)
from wm_config_registry.infrastructure.backoffice_support import (
    BackofficeStateContextMiddleware,
)

BACKOFFICE_VIEWS: tuple[type[ModelView], ...] = (
    TenantBackofficeView,
    AssetBackofficeView,
    AgentBackofficeView,
    SourceBackofficeView,
    PointBackofficeView,
    RuntimeConfigRevisionBackofficeView,
    SourceConfigRevisionBackofficeView,
    ConfigOutboxBackofficeView,
)

BACKOFFICE_CUSTOM_VIEWS: tuple[type[BaseView], ...] = (
    ConfigOutboxActionsBackofficeView,
)


def mount_backoffice(app: FastAPI, *, engine: AsyncEngine) -> Admin:
    admin = Admin(
        app=app,
        engine=engine,
        base_url="/backoffice",
        title="Web Monitoring Backoffice",
    )
    admin.admin.state.root_app = app
    admin.admin.add_middleware(BackofficeStateContextMiddleware)
    for view in BACKOFFICE_VIEWS:
        admin.add_view(view)
    for view in BACKOFFICE_CUSTOM_VIEWS:
        admin.add_view(view)
    return admin


__all__ = [
    "AgentBackofficeView",
    "AssetBackofficeView",
    "BACKOFFICE_CUSTOM_VIEWS",
    "BACKOFFICE_VIEWS",
    "ConfigOutboxActionsBackofficeView",
    "ConfigOutboxBackofficeView",
    "PointBackofficeView",
    "RuntimeConfigRevisionBackofficeView",
    "SourceBackofficeView",
    "SourceConfigRevisionBackofficeView",
    "TenantBackofficeView",
    "mount_backoffice",
]
