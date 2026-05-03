from __future__ import annotations

from fastapi import FastAPI
from sqladmin import Admin, ModelView
from sqlalchemy.ext.asyncio import AsyncEngine

from config_registry.infrastructure.postgres.models import (
    AgentModel,
    AssetModel,
    ConfigOutboxModel,
    PointModel,
    RuntimeConfigRevisionModel,
    SourceConfigRevisionModel,
    SourceModel,
    TenantModel,
)


class ReadOnlyModelView(ModelView):
    can_create = False
    can_edit = False
    can_delete = False
    can_view_details = True
    can_export = True
    page_size = 50
    page_size_options = [25, 50, 100]


class TenantBackofficeView(ReadOnlyModelView, model=TenantModel):
    name = "Tenant"
    name_plural = "Tenants"
    category = "Registry"
    column_list = [
        TenantModel.tenant_id,
        TenantModel.name,
        TenantModel.status,
        TenantModel.created_at,
        TenantModel.updated_at,
    ]


class AssetBackofficeView(ReadOnlyModelView, model=AssetModel):
    name = "Asset"
    name_plural = "Assets"
    category = "Registry"
    column_list = [
        AssetModel.tenant_id,
        AssetModel.asset_id,
        AssetModel.name,
        AssetModel.status,
        AssetModel.updated_at,
    ]


class AgentBackofficeView(ReadOnlyModelView, model=AgentModel):
    name = "Agent"
    name_plural = "Agents"
    category = "Registry"
    column_list = [
        AgentModel.tenant_id,
        AgentModel.asset_id,
        AgentModel.agent_id,
        AgentModel.status,
        AgentModel.updated_at,
    ]


class SourceBackofficeView(ReadOnlyModelView, model=SourceModel):
    name = "Source"
    name_plural = "Sources"
    category = "Registry"
    column_list = [
        SourceModel.tenant_id,
        SourceModel.asset_id,
        SourceModel.agent_id,
        SourceModel.source_id,
        SourceModel.source_type,
        SourceModel.enabled,
        SourceModel.updated_at,
    ]


class PointBackofficeView(ReadOnlyModelView, model=PointModel):
    name = "Point"
    name_plural = "Points"
    category = "Registry"
    column_list = [
        PointModel.tenant_id,
        PointModel.asset_id,
        PointModel.agent_id,
        PointModel.source_id,
        PointModel.point_id,
        PointModel.point_key,
        PointModel.value_type,
        PointModel.enabled,
        PointModel.updated_at,
    ]


class RuntimeConfigRevisionBackofficeView(
    ReadOnlyModelView,
    model=RuntimeConfigRevisionModel,
):
    name = "Runtime Config Revision"
    name_plural = "Runtime Config Revisions"
    category = "Config Revisions"
    column_list = [
        RuntimeConfigRevisionModel.tenant_id,
        RuntimeConfigRevisionModel.asset_id,
        RuntimeConfigRevisionModel.agent_id,
        RuntimeConfigRevisionModel.config_revision,
        RuntimeConfigRevisionModel.status,
        RuntimeConfigRevisionModel.issued_at,
        RuntimeConfigRevisionModel.created_at,
    ]


class SourceConfigRevisionBackofficeView(
    ReadOnlyModelView,
    model=SourceConfigRevisionModel,
):
    name = "Source Config Revision"
    name_plural = "Source Config Revisions"
    category = "Config Revisions"
    column_list = [
        SourceConfigRevisionModel.tenant_id,
        SourceConfigRevisionModel.asset_id,
        SourceConfigRevisionModel.agent_id,
        SourceConfigRevisionModel.source_id,
        SourceConfigRevisionModel.source_config_revision,
        SourceConfigRevisionModel.status,
        SourceConfigRevisionModel.issued_at,
        SourceConfigRevisionModel.created_at,
    ]


class ConfigOutboxBackofficeView(ReadOnlyModelView, model=ConfigOutboxModel):
    name = "Config Outbox Record"
    name_plural = "Config Outbox Records"
    category = "Delivery"
    column_list = [
        ConfigOutboxModel.tenant_id,
        ConfigOutboxModel.asset_id,
        ConfigOutboxModel.agent_id,
        ConfigOutboxModel.config_revision,
        ConfigOutboxModel.config_scope,
        ConfigOutboxModel.status,
        ConfigOutboxModel.attempt_count,
        ConfigOutboxModel.updated_at,
    ]


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


def mount_backoffice(app: FastAPI, *, engine: AsyncEngine) -> Admin:
    admin = Admin(
        app=app,
        engine=engine,
        base_url="/backoffice",
        title="Web Monitoring Backoffice",
    )
    for view in BACKOFFICE_VIEWS:
        admin.add_view(view)
    return admin
