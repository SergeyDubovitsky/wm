from __future__ import annotations

import html
import json
from contextvars import ContextVar
from dataclasses import dataclass
from datetime import UTC, datetime
from typing import Any
from uuid import UUID

from fastapi import FastAPI
from sqladmin import Admin, BaseView, ModelView, expose
from sqladmin.fields import SelectField
from sqladmin.forms import get_model_form
from sqlalchemy.ext.asyncio import AsyncEngine
from starlette.requests import Request
from starlette.responses import HTMLResponse, JSONResponse, Response
from starlette.types import ASGIApp, Receive, Scope, Send

from wm_config_registry.application.errors import (
    AgentNotFoundError,
    ConfigRenderError,
    DuplicateConfigOutboxRecordError,
    DuplicateConfigRevisionError,
)
from wm_config_registry.application.use_cases.agents import (
    CreateAgent,
    CreateAgentCommand,
    ListAgents,
)
from wm_config_registry.application.use_cases.assets import (
    CreateAsset,
    CreateAssetCommand,
    ListAssets,
)
from wm_config_registry.application.use_cases.config_outbox import (
    MarkConfigOutboxDeadLetter,
    MarkConfigOutboxDeadLetterCommand,
    MarkConfigOutboxRetry,
    MarkConfigOutboxRetryCommand,
)
from wm_config_registry.application.use_cases.points import (
    CreatePoint,
    CreatePointCommand,
)
from wm_config_registry.application.use_cases.render_config import (
    RenderAgentConfig,
    RenderAgentConfigCommand,
    StoreRenderedAgentConfig,
)
from wm_config_registry.application.use_cases.sources import (
    CreateSource,
    CreateSourceCommand,
    ListSources,
)
from wm_config_registry.application.use_cases.tenants import (
    CreateTenant,
    CreateTenantCommand,
    ListTenants,
)
from wm_config_registry.domain.value_objects import SignalType, ValueType
from wm_config_registry.infrastructure.postgres.models import (
    AgentModel,
    AssetModel,
    ConfigOutboxModel,
    PointModel,
    RuntimeConfigRevisionModel,
    SourceConfigRevisionModel,
    SourceModel,
    TenantModel,
)

_CURRENT_BACKOFFICE_STATE: ContextVar[Any | None] = ContextVar(
    "current_backoffice_state",
    default=None,
)


class BackofficeStateContextMiddleware:
    def __init__(self, app: ASGIApp) -> None:
        self.app = app

    async def __call__(self, scope: Scope, receive: Receive, send: Send) -> None:
        if scope["type"] != "http":
            await self.app(scope, receive, send)
            return

        state = scope["app"].state
        root_app = getattr(state, "root_app", None)
        resolved_state = root_app.state if root_app is not None else state
        token = _CURRENT_BACKOFFICE_STATE.set(resolved_state)
        try:
            await self.app(scope, receive, send)
        finally:
            _CURRENT_BACKOFFICE_STATE.reset(token)


class BackofficeCrudModelView(ModelView):
    can_create = True
    can_edit = True
    can_delete = True
    can_view_details = True
    can_export = True
    form_include_pk = True
    page_size = 50
    page_size_options = [25, 50, 100]


class TenantBackofficeView(BackofficeCrudModelView, model=TenantModel):
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
        tenant = await CreateTenant(_state(request).unit_of_work_factory()).execute(
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


class AssetBackofficeView(BackofficeCrudModelView, model=AssetModel):
    name = "Asset"
    name_plural = "Assets"
    category = "Registry"
    form_overrides = {"tenant_id": SelectField}
    form_args = {"tenant_id": {"label": "Tenant"}}
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

    async def scaffold_form(self, rules: list[str] | None = None) -> type:
        form = await super().scaffold_form(rules)
        form.tenant_id.kwargs["choices"] = await _tenant_select_choices()
        return form

    async def insert_model(self, request: Request, data: dict[str, object]) -> object:
        asset = await CreateAsset(_state(request).unit_of_work_factory()).execute(
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


@dataclass(frozen=True)
class AssetSelection:
    tenant_id: str
    asset_id: str


@dataclass(frozen=True)
class AgentSelection:
    tenant_id: str
    asset_id: str
    agent_id: str


@dataclass(frozen=True)
class SourceSelection:
    tenant_id: str
    asset_id: str
    agent_id: str
    source_id: str


class AgentBackofficeView(BackofficeCrudModelView, model=AgentModel):
    name = "Agent"
    name_plural = "Agents"
    category = "Registry"
    form_create_rules = ["asset_id", "agent_id", "name"]
    form_edit_rules = ["tenant_id", "asset_id", "agent_id", "name"]
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

    async def scaffold_form(self, rules: list[str] | None = None) -> type:
        is_create_form = rules == self._form_create_rules
        form = await get_model_form(
            model=self.model,
            session_maker=self.session_maker,  # type: ignore[arg-type]
            only=self.form_create_rules if is_create_form else self._form_prop_names,
            column_labels=self._column_labels,
            form_args=self.form_args,
            form_widget_args=self.form_widget_args,
            form_class=self.form_base_class,
            form_overrides={"asset_id": SelectField} if is_create_form else {},
            form_ajax_refs=self._form_ajax_refs,
            form_include_pk=self.form_include_pk,
            form_converter=self.form_converter,
        )
        if is_create_form:
            form.asset_id.kwargs["choices"] = await _asset_select_choices()
            form.asset_id.kwargs["coerce"] = _asset_selection_from_choice
            form.asset_id.kwargs["label"] = "Asset"
        if rules:
            self._validate_form_class(rules, form)
        return form

    async def insert_model(self, request: Request, data: dict[str, object]) -> object:
        asset_selection = _resolve_asset_selection(
            data.get("tenant_id"),
            data.get("asset_id"),
        )
        agent = await CreateAgent(_state(request).unit_of_work_factory()).execute(
            CreateAgentCommand(
                tenant_id=asset_selection.tenant_id,
                asset_id=asset_selection.asset_id,
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


class SourceBackofficeView(BackofficeCrudModelView, model=SourceModel):
    name = "Source"
    name_plural = "Sources"
    category = "Registry"
    form_create_rules = [
        "agent_id",
        "source_id",
        "source_type",
        "enabled",
        "name",
        "description",
    ]
    form_edit_rules = [
        "tenant_id",
        "asset_id",
        "agent_id",
        "source_id",
        "source_type",
        "enabled",
        "name",
        "description",
    ]
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

    async def scaffold_form(self, rules: list[str] | None = None) -> type:
        is_create_form = rules == self._form_create_rules
        form = await get_model_form(
            model=self.model,
            session_maker=self.session_maker,  # type: ignore[arg-type]
            only=self.form_create_rules if is_create_form else self._form_prop_names,
            column_labels=self._column_labels,
            form_args=self.form_args,
            form_widget_args=self.form_widget_args,
            form_class=self.form_base_class,
            form_overrides={"agent_id": SelectField} if is_create_form else {},
            form_ajax_refs=self._form_ajax_refs,
            form_include_pk=self.form_include_pk,
            form_converter=self.form_converter,
        )
        if is_create_form:
            form.agent_id.kwargs["choices"] = await _agent_select_choices()
            form.agent_id.kwargs["coerce"] = _agent_selection_from_choice
            form.agent_id.kwargs["label"] = "Agent"
        if rules:
            self._validate_form_class(rules, form)
        return form

    async def insert_model(self, request: Request, data: dict[str, object]) -> object:
        agent_selection = _resolve_agent_selection(
            data.get("tenant_id"),
            data.get("asset_id"),
            data.get("agent_id"),
        )
        source = await CreateSource(_state(request).unit_of_work_factory()).execute(
            CreateSourceCommand(
                tenant_id=agent_selection.tenant_id,
                asset_id=agent_selection.asset_id,
                agent_id=agent_selection.agent_id,
                source_id=str(data["source_id"]),
                source_type=str(data["source_type"]),
                enabled=_optional_bool(data.get("enabled"), default=True),
                name=_optional_string(data.get("name")),
                description=_optional_string(data.get("description")),
                acquisition_defaults_json=_default_acquisition_settings(),
                publish_defaults_json=_default_publish_settings(),
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


class PointBackofficeView(BackofficeCrudModelView, model=PointModel):
    name = "Point"
    name_plural = "Points"
    category = "Registry"
    form_create_rules = [
        "source_id",
        "point_id",
        "point_key",
        "point_ref",
        "name",
        "value_type",
        "value_model",
        "signal_type",
        "unit",
        "enabled",
    ]
    form_edit_rules = [
        "tenant_id",
        "asset_id",
        "agent_id",
        "source_id",
        "point_id",
        "point_key",
        "point_ref",
        "name",
        "value_type",
        "value_model",
        "signal_type",
        "unit",
        "enabled",
    ]
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

    async def scaffold_form(self, rules: list[str] | None = None) -> type:
        is_create_form = rules == self._form_create_rules
        form = await get_model_form(
            model=self.model,
            session_maker=self.session_maker,  # type: ignore[arg-type]
            only=self.form_create_rules if is_create_form else self._form_prop_names,
            column_labels=self._column_labels,
            form_args=self.form_args,
            form_widget_args=self.form_widget_args,
            form_class=self.form_base_class,
            form_overrides={"source_id": SelectField} if is_create_form else {},
            form_ajax_refs=self._form_ajax_refs,
            form_include_pk=self.form_include_pk,
            form_converter=self.form_converter,
        )
        if is_create_form:
            form.source_id.kwargs["choices"] = await _source_select_choices()
            form.source_id.kwargs["coerce"] = _source_selection_from_choice
            form.source_id.kwargs["label"] = "Source"
        if rules:
            self._validate_form_class(rules, form)
        return form

    async def insert_model(self, request: Request, data: dict[str, object]) -> object:
        source_selection = _resolve_source_selection(
            data.get("tenant_id"),
            data.get("asset_id"),
            data.get("agent_id"),
            data.get("source_id"),
        )
        point = await CreatePoint(_state(request).unit_of_work_factory()).execute(
            CreatePointCommand(
                tenant_id=source_selection.tenant_id,
                asset_id=source_selection.asset_id,
                agent_id=source_selection.agent_id,
                source_id=source_selection.source_id,
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
    BackofficeCrudModelView,
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
    BackofficeCrudModelView,
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


class ConfigOutboxBackofficeView(BackofficeCrudModelView, model=ConfigOutboxModel):
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


class RenderConfigBackofficeView(BaseView):
    name = "Обновить config state"
    icon = "fa-solid fa-gears"

    @expose("/render-config", methods=["GET"])
    async def render_config_form(self, _request: Request) -> HTMLResponse:
        return HTMLResponse(_render_config_form_html())

    @expose("/render-config", methods=["POST"])
    async def render_config(self, request: Request) -> Response:
        is_form = _is_form_request(request)
        try:
            payload = await _render_config_payload(request)
            if not isinstance(payload, dict):
                return _render_config_error_response(
                    "Request body must be a JSON object",
                    is_form=is_form,
                )
            command = _render_command(payload)
            rendered = await RenderAgentConfig(
                _state(request).unit_of_work_factory(),
                _state(request).config_payload_validator,
            ).execute(command)
            await StoreRenderedAgentConfig(
                _state(request).unit_of_work_factory(),
                _state(request).config_payload_validator,
            ).execute(rendered)
        except AgentNotFoundError as exc:
            return _render_config_error_response(str(exc), is_form=is_form, status=404)
        except (DuplicateConfigRevisionError, DuplicateConfigOutboxRecordError) as exc:
            return _render_config_error_response(str(exc), is_form=is_form, status=409)
        except (ConfigRenderError, KeyError, TypeError, ValueError) as exc:
            return _render_config_error_response(str(exc), is_form=is_form)

        runtime_payload = rendered.runtime_payload
        response_payload = {
            "tenant_id": runtime_payload["tenant_id"],
            "asset_id": runtime_payload["asset_id"],
            "agent_id": runtime_payload["agent_id"],
            "config_revision": runtime_payload["config_revision"],
            "outbox_record_count": 1 + len(rendered.source_payloads),
        }
        if is_form:
            return HTMLResponse(
                _render_config_form_html(
                    message=(
                        "Config state обновлен: "
                        f"revision={response_payload['config_revision']}, "
                        f"outbox_records={response_payload['outbox_record_count']}"
                    ),
                    message_kind="success",
                ),
                status_code=201,
            )
        return JSONResponse(response_payload, status_code=201)


class ConfigOutboxActionsBackofficeView(BaseView):
    name = "Config Outbox Actions"
    icon = "fa-solid fa-triangle-exclamation"

    @expose("/config-outbox/retry", methods=["POST"])
    async def retry_outbox_record(self, request: Request) -> JSONResponse:
        payload = await request.json()
        if not isinstance(payload, dict):
            return JSONResponse(
                {"detail": "Request body must be a JSON object"},
                status_code=422,
            )
        try:
            now = datetime.now(UTC)
            record = await MarkConfigOutboxRetry(
                _state(request).unit_of_work_factory()
            ).execute(
                MarkConfigOutboxRetryCommand(
                    outbox_id=UUID(str(payload["outbox_id"])),
                    now=now,
                    error=_optional_string(payload.get("reason"))
                    or "Manual backoffice retry",
                    next_attempt_at=_parse_issued_at(
                        payload.get("next_attempt_at") or _format_datetime(now)
                    ),
                )
            )
        except (KeyError, TypeError, ValueError) as exc:
            return JSONResponse({"detail": str(exc)}, status_code=422)
        if record is None:
            return JSONResponse({"detail": "Outbox record not found"}, status_code=404)
        return JSONResponse(_outbox_action_payload(record), status_code=200)

    @expose("/config-outbox/dead-letter", methods=["POST"])
    async def dead_letter_outbox_record(self, request: Request) -> JSONResponse:
        payload = await request.json()
        if not isinstance(payload, dict):
            return JSONResponse(
                {"detail": "Request body must be a JSON object"},
                status_code=422,
            )
        try:
            record = await MarkConfigOutboxDeadLetter(
                _state(request).unit_of_work_factory()
            ).execute(
                MarkConfigOutboxDeadLetterCommand(
                    outbox_id=UUID(str(payload["outbox_id"])),
                    now=datetime.now(UTC),
                    error=_optional_string(payload.get("reason"))
                    or "Manual backoffice dead-letter",
                )
            )
        except (KeyError, TypeError, ValueError) as exc:
            return JSONResponse({"detail": str(exc)}, status_code=422)
        if record is None:
            return JSONResponse({"detail": "Outbox record not found"}, status_code=404)
        return JSONResponse(_outbox_action_payload(record), status_code=200)


BACKOFFICE_CUSTOM_VIEWS: tuple[type[BaseView], ...] = (
    RenderConfigBackofficeView,
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


def _state(request: Request) -> Any:
    state = request.app.state
    if hasattr(state, "unit_of_work_factory"):
        return state
    root_app = getattr(state, "root_app", None)
    if root_app is not None and hasattr(root_app.state, "unit_of_work_factory"):
        return root_app.state
    raise AttributeError("Backoffice request state is missing unit_of_work_factory")


async def _tenant_select_choices() -> list[tuple[str, str]]:
    state = _CURRENT_BACKOFFICE_STATE.get()
    if state is None or not hasattr(state, "unit_of_work_factory"):
        return []

    tenants = await ListTenants(state.unit_of_work_factory()).execute()
    return [
        (tenant.tenant_id, _tenant_select_label(tenant.tenant_id, tenant.name))
        for tenant in tenants
    ]


def _tenant_select_label(tenant_id: str, name: str) -> str:
    if name == tenant_id:
        return tenant_id
    return f"{name} ({tenant_id})"


async def _asset_select_choices() -> list[tuple[str, str]]:
    state = _CURRENT_BACKOFFICE_STATE.get()
    if state is None or not hasattr(state, "unit_of_work_factory"):
        return []

    tenants = await ListTenants(state.unit_of_work_factory()).execute()
    choices: list[tuple[str, str]] = []
    for tenant in tenants:
        assets = await ListAssets(state.unit_of_work_factory()).execute(tenant.tenant_id)
        for asset in assets:
            choices.append(
                (
                    _asset_selection_choice_value(tenant.tenant_id, asset.asset_id),
                    _asset_select_label(
                        tenant.name,
                        tenant.tenant_id,
                        asset.name,
                        asset.asset_id,
                    ),
                )
            )
    return choices


def _asset_select_label(
    tenant_name: str,
    tenant_id: str,
    asset_name: str,
    asset_id: str,
) -> str:
    tenant_label = _tenant_select_label(tenant_id, tenant_name)
    if asset_name == asset_id:
        return f"{tenant_label} / {asset_id}"
    return f"{tenant_label} / {asset_name} ({asset_id})"


async def _agent_select_choices() -> list[tuple[str, str]]:
    state = _CURRENT_BACKOFFICE_STATE.get()
    if state is None or not hasattr(state, "unit_of_work_factory"):
        return []

    tenants = await ListTenants(state.unit_of_work_factory()).execute()
    choices: list[tuple[str, str]] = []
    for tenant in tenants:
        assets = await ListAssets(state.unit_of_work_factory()).execute(tenant.tenant_id)
        for asset in assets:
            agents = await ListAgents(state.unit_of_work_factory()).execute(
                tenant.tenant_id,
                asset.asset_id,
            )
            for agent in agents:
                choices.append(
                    (
                        _agent_selection_choice_value(
                            tenant.tenant_id,
                            asset.asset_id,
                            agent.agent_id,
                        ),
                        _agent_select_label(
                            tenant.name,
                            tenant.tenant_id,
                            asset.name,
                            asset.asset_id,
                            agent.name,
                            agent.agent_id,
                        ),
                    )
                )
    return choices


def _agent_select_label(
    tenant_name: str,
    tenant_id: str,
    asset_name: str,
    asset_id: str,
    agent_name: str | None,
    agent_id: str,
) -> str:
    asset_label = _asset_select_label(tenant_name, tenant_id, asset_name, asset_id)
    if not agent_name or agent_name == agent_id:
        return f"{asset_label} / {agent_id}"
    return f"{asset_label} / {agent_name} ({agent_id})"


async def _source_select_choices() -> list[tuple[str, str]]:
    state = _CURRENT_BACKOFFICE_STATE.get()
    if state is None or not hasattr(state, "unit_of_work_factory"):
        return []

    tenants = await ListTenants(state.unit_of_work_factory()).execute()
    choices: list[tuple[str, str]] = []
    for tenant in tenants:
        assets = await ListAssets(state.unit_of_work_factory()).execute(tenant.tenant_id)
        for asset in assets:
            agents = await ListAgents(state.unit_of_work_factory()).execute(
                tenant.tenant_id,
                asset.asset_id,
            )
            for agent in agents:
                sources = await ListSources(state.unit_of_work_factory()).execute(
                    tenant.tenant_id,
                    asset.asset_id,
                    agent.agent_id,
                )
                for source in sources:
                    choices.append(
                        (
                            _source_selection_choice_value(
                                tenant.tenant_id,
                                asset.asset_id,
                                agent.agent_id,
                                source.source_id,
                            ),
                            _source_select_label(
                                tenant.name,
                                tenant.tenant_id,
                                asset.name,
                                asset.asset_id,
                                agent.name,
                                agent.agent_id,
                                source.name,
                                source.source_id,
                            ),
                        )
                    )
    return choices


def _source_select_label(
    tenant_name: str,
    tenant_id: str,
    asset_name: str,
    asset_id: str,
    agent_name: str | None,
    agent_id: str,
    source_name: str | None,
    source_id: str,
) -> str:
    agent_label = _agent_select_label(
        tenant_name,
        tenant_id,
        asset_name,
        asset_id,
        agent_name,
        agent_id,
    )
    if not source_name or source_name == source_id:
        return f"{agent_label} / {source_id}"
    return f"{agent_label} / {source_name} ({source_id})"


def _asset_selection_choice_value(tenant_id: str, asset_id: str) -> str:
    return json.dumps(
        {"tenant_id": tenant_id, "asset_id": asset_id},
        separators=(",", ":"),
        sort_keys=True,
    )


def _asset_selection_from_choice(value: str) -> AssetSelection:
    payload = json.loads(value)
    if not isinstance(payload, dict):
        raise ValueError("Asset selection must be a JSON object")
    return AssetSelection(
        tenant_id=str(payload["tenant_id"]),
        asset_id=str(payload["asset_id"]),
    )


def _agent_selection_choice_value(
    tenant_id: str,
    asset_id: str,
    agent_id: str,
) -> str:
    return json.dumps(
        {
            "tenant_id": tenant_id,
            "asset_id": asset_id,
            "agent_id": agent_id,
        },
        separators=(",", ":"),
        sort_keys=True,
    )


def _agent_selection_from_choice(value: str) -> AgentSelection:
    payload = json.loads(value)
    if not isinstance(payload, dict):
        raise ValueError("Agent selection must be a JSON object")
    return AgentSelection(
        tenant_id=str(payload["tenant_id"]),
        asset_id=str(payload["asset_id"]),
        agent_id=str(payload["agent_id"]),
    )


def _source_selection_choice_value(
    tenant_id: str,
    asset_id: str,
    agent_id: str,
    source_id: str,
) -> str:
    return json.dumps(
        {
            "tenant_id": tenant_id,
            "asset_id": asset_id,
            "agent_id": agent_id,
            "source_id": source_id,
        },
        separators=(",", ":"),
        sort_keys=True,
    )


def _source_selection_from_choice(value: str) -> SourceSelection:
    payload = json.loads(value)
    if not isinstance(payload, dict):
        raise ValueError("Source selection must be a JSON object")
    return SourceSelection(
        tenant_id=str(payload["tenant_id"]),
        asset_id=str(payload["asset_id"]),
        agent_id=str(payload["agent_id"]),
        source_id=str(payload["source_id"]),
    )


def _resolve_asset_selection(
    tenant_id: object | None,
    asset_id: object | None,
) -> AssetSelection:
    if isinstance(asset_id, AssetSelection):
        return asset_id
    return AssetSelection(
        tenant_id=str(tenant_id or ""),
        asset_id=str(asset_id or ""),
    )


def _resolve_source_selection(
    tenant_id: object | None,
    asset_id: object | None,
    agent_id: object | None,
    source_id: object | None,
) -> SourceSelection:
    if isinstance(source_id, SourceSelection):
        return source_id
    return SourceSelection(
        tenant_id=str(tenant_id or ""),
        asset_id=str(asset_id or ""),
        agent_id=str(agent_id or ""),
        source_id=str(source_id or ""),
    )


def _resolve_agent_selection(
    tenant_id: object | None,
    asset_id: object | None,
    agent_id: object | None,
) -> AgentSelection:
    if isinstance(agent_id, AgentSelection):
        return agent_id
    return AgentSelection(
        tenant_id=str(tenant_id or ""),
        asset_id=str(asset_id or ""),
        agent_id=str(agent_id or ""),
    )


def _render_command(payload: dict[str, Any]) -> RenderAgentConfigCommand:
    return RenderAgentConfigCommand(
        tenant_id=str(payload["tenant_id"]),
        asset_id=str(payload["asset_id"]),
        agent_id=str(payload["agent_id"]),
        config_revision=str(payload["config_revision"]),
        issued_at=_parse_issued_at(payload.get("issued_at")),
        source_config_revisions=_source_config_revisions(
            payload.get("source_config_revisions")
        ),
    )


async def _render_config_payload(request: Request) -> dict[str, Any] | object:
    if not _is_form_request(request):
        return await request.json()

    form = await request.form()
    revisions_raw = str(form.get("source_config_revisions") or "").strip()
    source_config_revisions = None
    if revisions_raw:
        parsed = json.loads(revisions_raw)
        if not isinstance(parsed, dict):
            raise ValueError("source_config_revisions must be a JSON object")
        source_config_revisions = parsed

    return {
        "tenant_id": str(form.get("tenant_id") or ""),
        "asset_id": str(form.get("asset_id") or ""),
        "agent_id": str(form.get("agent_id") or ""),
        "config_revision": str(form.get("config_revision") or ""),
        "issued_at": str(form.get("issued_at") or ""),
        "source_config_revisions": source_config_revisions,
    }


def _is_form_request(request: Request) -> bool:
    headers = getattr(request, "headers", {})
    content_type = headers.get("content-type", "")
    return (
        "application/x-www-form-urlencoded" in content_type
        or "multipart/form-data" in content_type
    )


def _render_config_error_response(
    detail: str,
    *,
    is_form: bool,
    status: int = 422,
) -> Response:
    if is_form:
        return HTMLResponse(
            _render_config_form_html(message=detail, message_kind="error"),
            status_code=status,
        )
    return JSONResponse({"detail": detail}, status_code=status)


def _render_config_form_html(
    *,
    message: str | None = None,
    message_kind: str = "info",
) -> str:
    escaped_message = html.escape(message) if message else ""
    message_class = {
        "success": "message success",
        "error": "message error",
    }.get(message_kind, "message")
    message_html = (
        f'<div class="{message_class}">{escaped_message}</div>'
        if escaped_message
        else ""
    )
    return f"""
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <title>Обновить config state</title>
  <style>
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      margin: 2rem;
      color: #18202f;
      background: #f6f8fb;
    }}
    main {{
      max-width: 860px;
      background: #ffffff;
      border: 1px solid #d9e0ea;
      border-radius: 14px;
      padding: 1.5rem;
      box-shadow: 0 8px 24px rgba(24, 32, 47, 0.08);
    }}
    label {{
      display: block;
      margin-top: 1rem;
      font-weight: 650;
    }}
    input,
    textarea {{
      box-sizing: border-box;
      width: 100%;
      margin-top: 0.35rem;
      padding: 0.65rem;
      border: 1px solid #bfcad8;
      border-radius: 10px;
      font: inherit;
    }}
    textarea {{
      min-height: 7rem;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    }}
    button {{
      margin-top: 1.25rem;
      border: 0;
      border-radius: 999px;
      padding: 0.75rem 1.15rem;
      color: #ffffff;
      background: #1557c0;
      font-weight: 750;
      cursor: pointer;
    }}
    .hint {{
      padding: 1rem;
      border-radius: 12px;
      background: #eef5ff;
      border: 1px solid #c9defc;
      line-height: 1.5;
    }}
    .message {{
      margin: 1rem 0;
      padding: 0.85rem;
      border-radius: 10px;
      background: #eef2f7;
      border: 1px solid #cbd5e1;
    }}
    .message.success {{
      background: #ecfdf3;
      border-color: #a7f3c5;
    }}
    .message.error {{
      background: #fff1f2;
      border-color: #fecdd3;
    }}
  </style>
</head>
<body>
  <main>
    <h1>Обновить config state</h1>
    <p class="hint">
      Используйте эту кнопку после CRUD-правок в админке, чтобы собрать новую
      runtime/source config revision и создать записи в <code>config_outbox</code>.
      Без этого retained MQTT config для wm-edge-agent не изменится.
    </p>
    {message_html}
    <form method="post" action="/backoffice/render-config">
      <label>
        Tenant ID
        <input name="tenant_id" required placeholder="tenant-demo">
      </label>
      <label>
        Asset ID
        <input name="asset_id" required placeholder="demo-stand-01">
      </label>
      <label>
        Agent ID
        <input name="agent_id" required placeholder="demo-stand-local">
      </label>
      <label>
        Config revision
        <input name="config_revision" required placeholder="rev-2026-05-03-001">
      </label>
      <label>
        Issued at
        <input name="issued_at" placeholder="2026-05-03T12:00:00Z">
      </label>
      <label>
        Source config revisions JSON
        <textarea name="source_config_revisions"
          placeholder="{{&quot;knx_main&quot;:&quot;rev-2026-05-03-001-knx&quot;}}"></textarea>
      </label>
      <button
        type="submit"
        title="Собирает runtime/source config из текущего registry state и создает config_outbox records">
        Обновить config state
      </button>
    </form>
  </main>
</body>
</html>
"""


def _parse_issued_at(value: object) -> datetime:
    if value is None or value == "":
        return datetime.now(UTC)
    if not isinstance(value, str):
        raise ValueError("issued_at must be an ISO-8601 string")
    normalized = value.removesuffix("Z") + "+00:00" if value.endswith("Z") else value
    return datetime.fromisoformat(normalized)


def _format_datetime(value: datetime) -> str:
    return value.astimezone(UTC).isoformat().replace("+00:00", "Z")


def _source_config_revisions(value: object) -> dict[str, str] | None:
    if value is None:
        return None
    if not isinstance(value, dict):
        raise ValueError("source_config_revisions must be an object")
    return {str(source_id): str(revision) for source_id, revision in value.items()}


def _outbox_action_payload(record: object) -> dict[str, object]:
    return {
        "outbox_id": str(getattr(record, "outbox_id")),
        "status": getattr(getattr(record, "status"), "value"),
        "attempt_count": getattr(record, "attempt_count"),
        "last_error": getattr(record, "last_error"),
    }


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


def _default_acquisition_settings() -> dict[str, object]:
    return {
        "listen": True,
        "read_on_start": False,
        "periodic_interval_seconds": None,
    }


def _default_publish_settings() -> dict[str, object]:
    return {
        "enabled": True,
        "change_threshold": None,
    }
