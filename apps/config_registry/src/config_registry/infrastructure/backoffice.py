from __future__ import annotations

from fastapi import FastAPI
from sqladmin import Admin, ModelView
from sqlalchemy.ext.asyncio import AsyncEngine
from starlette.requests import Request

from config_registry.application.use_cases.agents import (
    CreateAgent,
    CreateAgentCommand,
)
from config_registry.application.use_cases.assets import (
    CreateAsset,
    CreateAssetCommand,
)
from config_registry.application.use_cases.points import (
    CreatePoint,
    CreatePointCommand,
)
from config_registry.application.use_cases.sources import (
    CreateSource,
    CreateSourceCommand,
)
from config_registry.application.use_cases.tenants import (
    CreateTenant,
    CreateTenantCommand,
)
from config_registry.domain.value_objects import SignalType, ValueType
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

    async def insert_model(self, request: object, data: dict[str, object]) -> object:
        raise PermissionError("Backoffice model views are read-only")

    async def update_model(
        self,
        request: object,
        pk: object,
        data: dict[str, object],
    ) -> object:
        raise PermissionError("Backoffice model views are read-only")

    async def delete_model(self, request: object, pk: object) -> object:
        raise PermissionError("Backoffice model views are read-only")


class CreateOnlyModelView(ReadOnlyModelView):
    can_create = True

    async def insert_model(self, request: object, data: dict[str, object]) -> object:
        raise NotImplementedError("Create-enabled views must call application use cases")


class TenantBackofficeView(CreateOnlyModelView, model=TenantModel):
    name = "Tenant"
    name_plural = "Tenants"
    category = "Registry"
    form_columns = [
        TenantModel.tenant_id,
        TenantModel.name,
    ]
    column_list = [
        TenantModel.tenant_id,
        TenantModel.name,
        TenantModel.status,
        TenantModel.created_at,
        TenantModel.updated_at,
    ]

    async def insert_model(self, request: Request, data: dict[str, object]) -> object:
        tenant = await CreateTenant(request.app.state.unit_of_work_factory()).execute(
            CreateTenantCommand(
                tenant_id=str(data["tenant_id"]),
                name=str(data["name"]),
            )
        )
        return TenantModel(
            tenant_id=tenant.tenant_id,
            name=tenant.name,
            status=tenant.status.value,
            created_at=tenant.created_at,
            updated_at=tenant.updated_at,
        )


class AssetBackofficeView(CreateOnlyModelView, model=AssetModel):
    name = "Asset"
    name_plural = "Assets"
    category = "Registry"
    form_columns = [
        AssetModel.tenant_id,
        AssetModel.asset_id,
        AssetModel.name,
        AssetModel.description,
    ]
    column_list = [
        AssetModel.tenant_id,
        AssetModel.asset_id,
        AssetModel.name,
        AssetModel.status,
        AssetModel.updated_at,
    ]

    async def insert_model(self, request: Request, data: dict[str, object]) -> object:
        asset = await CreateAsset(request.app.state.unit_of_work_factory()).execute(
            CreateAssetCommand(
                tenant_id=str(data["tenant_id"]),
                asset_id=str(data["asset_id"]),
                name=str(data["name"]),
                description=_optional_string(data.get("description")),
            )
        )
        return AssetModel(
            tenant_id=asset.tenant_id,
            asset_id=asset.asset_id,
            name=asset.name,
            description=asset.description,
            status=asset.status.value,
            created_at=asset.created_at,
            updated_at=asset.updated_at,
        )


class AgentBackofficeView(CreateOnlyModelView, model=AgentModel):
    name = "Agent"
    name_plural = "Agents"
    category = "Registry"
    form_columns = [
        AgentModel.tenant_id,
        AgentModel.asset_id,
        AgentModel.agent_id,
        AgentModel.name,
    ]
    column_list = [
        AgentModel.tenant_id,
        AgentModel.asset_id,
        AgentModel.agent_id,
        AgentModel.status,
        AgentModel.updated_at,
    ]

    async def insert_model(self, request: Request, data: dict[str, object]) -> object:
        agent = await CreateAgent(request.app.state.unit_of_work_factory()).execute(
            CreateAgentCommand(
                tenant_id=str(data["tenant_id"]),
                asset_id=str(data["asset_id"]),
                agent_id=str(data["agent_id"]),
                name=_optional_string(data.get("name")),
            )
        )
        return AgentModel(
            tenant_id=agent.tenant_id,
            asset_id=agent.asset_id,
            agent_id=agent.agent_id,
            name=agent.name,
            status=agent.status.value,
            bootstrap_hint_json=dict(agent.bootstrap_hint_json),
            created_at=agent.created_at,
            updated_at=agent.updated_at,
        )


class SourceBackofficeView(CreateOnlyModelView, model=SourceModel):
    name = "Source"
    name_plural = "Sources"
    category = "Registry"
    form_columns = [
        SourceModel.tenant_id,
        SourceModel.asset_id,
        SourceModel.agent_id,
        SourceModel.source_id,
        SourceModel.source_type,
        SourceModel.enabled,
        SourceModel.name,
        SourceModel.description,
    ]
    column_list = [
        SourceModel.tenant_id,
        SourceModel.asset_id,
        SourceModel.agent_id,
        SourceModel.source_id,
        SourceModel.source_type,
        SourceModel.enabled,
        SourceModel.updated_at,
    ]

    async def insert_model(self, request: Request, data: dict[str, object]) -> object:
        source = await CreateSource(request.app.state.unit_of_work_factory()).execute(
            CreateSourceCommand(
                tenant_id=str(data["tenant_id"]),
                asset_id=str(data["asset_id"]),
                agent_id=str(data["agent_id"]),
                source_id=str(data["source_id"]),
                source_type=str(data["source_type"]),
                enabled=_optional_bool(data.get("enabled"), default=True),
                name=_optional_string(data.get("name")),
                description=_optional_string(data.get("description")),
            )
        )
        return SourceModel(
            tenant_id=source.tenant_id,
            asset_id=source.asset_id,
            agent_id=source.agent_id,
            source_id=source.source_id,
            source_type=source.source_type,
            enabled=source.enabled,
            name=source.name,
            description=source.description,
            connection_json=dict(source.connection_json),
            acquisition_defaults_json=dict(source.acquisition_defaults_json),
            publish_defaults_json=dict(source.publish_defaults_json),
            created_at=source.created_at,
            updated_at=source.updated_at,
        )


class PointBackofficeView(CreateOnlyModelView, model=PointModel):
    name = "Point"
    name_plural = "Points"
    category = "Registry"
    form_columns = [
        PointModel.tenant_id,
        PointModel.asset_id,
        PointModel.agent_id,
        PointModel.source_id,
        PointModel.point_id,
        PointModel.point_key,
        PointModel.point_ref,
        PointModel.name,
        PointModel.value_type,
        PointModel.value_model,
        PointModel.signal_type,
        PointModel.unit,
        PointModel.enabled,
    ]
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

    async def insert_model(self, request: Request, data: dict[str, object]) -> object:
        point = await CreatePoint(request.app.state.unit_of_work_factory()).execute(
            CreatePointCommand(
                tenant_id=str(data["tenant_id"]),
                asset_id=str(data["asset_id"]),
                agent_id=str(data["agent_id"]),
                source_id=str(data["source_id"]),
                point_id=str(data["point_id"]),
                point_key=str(data["point_key"]),
                point_ref=str(data["point_ref"]),
                name=str(data["name"]),
                value_type=ValueType(str(data["value_type"])),
                value_model=str(data["value_model"]),
                signal_type=SignalType(str(data["signal_type"])),
                unit=_optional_string(data.get("unit")),
                enabled=_optional_bool(data.get("enabled"), default=True),
            )
        )
        return PointModel(
            tenant_id=point.tenant_id,
            asset_id=point.asset_id,
            agent_id=point.agent_id,
            source_id=point.source_id,
            point_id=point.point_id,
            point_key=point.point_key,
            point_ref=point.point_ref,
            name=point.name,
            description=point.description,
            value_type=point.value_type.value,
            value_model=point.value_model,
            signal_type=point.signal_type.value,
            unit=point.unit,
            enabled=point.enabled,
            acquisition_json=dict(point.acquisition_json),
            publish_json=dict(point.publish_json),
            tags_json=dict(point.tags_json),
            created_at=point.created_at,
            updated_at=point.updated_at,
        )


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


def _optional_string(value: object) -> str | None:
    if value is None or value == "":
        return None
    return str(value)


def _optional_bool(value: object, *, default: bool) -> bool:
    if value is None or value == "":
        return default
    if isinstance(value, bool):
        return value
    if isinstance(value, str):
        normalized = value.strip().lower()
        if normalized in {"false", "0", "off", "no"}:
            return False
        if normalized in {"true", "1", "on", "yes"}:
            return True
    return bool(value)
