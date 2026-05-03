from __future__ import annotations

from datetime import datetime
from typing import Any

from pydantic import BaseModel, Field

from wm_config_registry.application.use_cases.render_config import RenderedAgentConfig


class RenderAgentConfigRequest(BaseModel):
    config_revision: str = Field(min_length=1)
    issued_at: datetime
    source_config_revisions: dict[str, str] | None = None


class RenderedSourceConfigResponse(BaseModel):
    source_id: str
    source_config_revision: str
    payload: dict[str, Any]


class RenderAgentConfigResponse(BaseModel):
    tenant_id: str
    asset_id: str
    agent_id: str
    config_revision: str
    runtime_payload: dict[str, Any]
    source_payloads: list[RenderedSourceConfigResponse]
    outbox_record_count: int

    @classmethod
    def from_rendered(cls, rendered: RenderedAgentConfig) -> RenderAgentConfigResponse:
        runtime_payload = rendered.runtime_payload
        return cls(
            tenant_id=str(runtime_payload["tenant_id"]),
            asset_id=str(runtime_payload["asset_id"]),
            agent_id=str(runtime_payload["agent_id"]),
            config_revision=str(runtime_payload["config_revision"]),
            runtime_payload=dict(runtime_payload),
            source_payloads=[
                RenderedSourceConfigResponse(
                    source_id=source.source_id,
                    source_config_revision=source.source_config_revision,
                    payload=dict(source.payload),
                )
                for source in rendered.source_payloads
            ],
            outbox_record_count=1 + len(rendered.source_payloads),
        )
