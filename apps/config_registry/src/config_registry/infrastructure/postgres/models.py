from __future__ import annotations

from datetime import datetime
from typing import Any

from sqlalchemy import (
    Boolean,
    CheckConstraint,
    DateTime,
    ForeignKeyConstraint,
    Index,
    PrimaryKeyConstraint,
    String,
    Text,
    UniqueConstraint,
)
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase):
    pass


class TenantModel(Base):
    __tablename__ = "tenants"
    __table_args__ = (
        CheckConstraint("status in ('active', 'disabled')", name="ck_tenants_status"),
    )

    tenant_id: Mapped[str] = mapped_column(Text, primary_key=True)
    name: Mapped[str] = mapped_column(Text, nullable=False)
    status: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )


class AssetModel(Base):
    __tablename__ = "assets"
    __table_args__ = (
        PrimaryKeyConstraint("tenant_id", "asset_id", name="pk_assets"),
        ForeignKeyConstraint(
            ["tenant_id"],
            ["tenants.tenant_id"],
            name="fk_assets_tenant",
        ),
        CheckConstraint("status in ('active', 'disabled')", name="ck_assets_status"),
        CheckConstraint(
            "asset_id ~ '^[a-z0-9][a-z0-9_-]{0,127}$'",
            name="ck_assets_asset_id_path_id",
        ),
        Index("ix_assets_tenant_status", "tenant_id", "status"),
    )

    tenant_id: Mapped[str] = mapped_column(Text, nullable=False)
    asset_id: Mapped[str] = mapped_column(Text, nullable=False)
    name: Mapped[str] = mapped_column(Text, nullable=False)
    description: Mapped[str | None] = mapped_column(Text)
    status: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )


class AgentModel(Base):
    __tablename__ = "agents"
    __table_args__ = (
        PrimaryKeyConstraint(
            "tenant_id",
            "asset_id",
            "agent_id",
            name="pk_agents",
        ),
        ForeignKeyConstraint(
            ["tenant_id", "asset_id"],
            ["assets.tenant_id", "assets.asset_id"],
            name="fk_agents_asset",
        ),
        CheckConstraint(
            "status in ('active', 'disabled', 'retired')",
            name="ck_agents_status",
        ),
        CheckConstraint(
            "agent_id ~ '^[a-z0-9][a-z0-9_-]{0,127}$'",
            name="ck_agents_agent_id_path_id",
        ),
        Index("ix_agents_tenant_agent", "tenant_id", "agent_id"),
    )

    tenant_id: Mapped[str] = mapped_column(Text, nullable=False)
    asset_id: Mapped[str] = mapped_column(Text, nullable=False)
    agent_id: Mapped[str] = mapped_column(Text, nullable=False)
    name: Mapped[str | None] = mapped_column(Text)
    status: Mapped[str] = mapped_column(Text, nullable=False)
    bootstrap_hint_json: Mapped[dict[str, Any]] = mapped_column(
        JSONB,
        nullable=False,
        default=dict,
    )
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )


class SourceModel(Base):
    __tablename__ = "sources"
    __table_args__ = (
        PrimaryKeyConstraint(
            "tenant_id",
            "asset_id",
            "agent_id",
            "source_id",
            name="pk_sources",
        ),
        ForeignKeyConstraint(
            ["tenant_id", "asset_id", "agent_id"],
            ["agents.tenant_id", "agents.asset_id", "agents.agent_id"],
            name="fk_sources_agent",
        ),
        CheckConstraint(
            "source_id ~ '^[a-z0-9][a-z0-9_-]{0,127}$'",
            name="ck_sources_source_id_path_id",
        ),
        Index("ix_sources_tenant_asset_type", "tenant_id", "asset_id", "source_type"),
    )

    tenant_id: Mapped[str] = mapped_column(Text, nullable=False)
    asset_id: Mapped[str] = mapped_column(Text, nullable=False)
    agent_id: Mapped[str] = mapped_column(Text, nullable=False)
    source_id: Mapped[str] = mapped_column(Text, nullable=False)
    source_type: Mapped[str] = mapped_column(Text, nullable=False)
    enabled: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    name: Mapped[str | None] = mapped_column(Text)
    description: Mapped[str | None] = mapped_column(Text)
    connection_json: Mapped[dict[str, Any]] = mapped_column(
        JSONB,
        nullable=False,
        default=dict,
    )
    acquisition_defaults_json: Mapped[dict[str, Any]] = mapped_column(
        JSONB,
        nullable=False,
        default=dict,
    )
    publish_defaults_json: Mapped[dict[str, Any]] = mapped_column(
        JSONB,
        nullable=False,
        default=dict,
    )
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )


class PointModel(Base):
    __tablename__ = "points"
    __table_args__ = (
        PrimaryKeyConstraint("tenant_id", "point_id", name="pk_points"),
        ForeignKeyConstraint(
            ["tenant_id", "asset_id", "agent_id", "source_id"],
            [
                "sources.tenant_id",
                "sources.asset_id",
                "sources.agent_id",
                "sources.source_id",
            ],
            name="fk_points_source",
        ),
        UniqueConstraint(
            "tenant_id",
            "asset_id",
            "agent_id",
            "source_id",
            "point_key",
            name="uq_points_point_key",
        ),
        UniqueConstraint(
            "tenant_id",
            "asset_id",
            "agent_id",
            "source_id",
            "point_ref",
            name="uq_points_point_ref",
        ),
        CheckConstraint(
            "point_key ~ '^(?:[A-Za-z0-9._~-]|%[0-9A-F]{2})+$'",
            name="ck_points_point_key",
        ),
        CheckConstraint(
            "value_type in ('boolean', 'number', 'string')",
            name="ck_points_value_type",
        ),
        CheckConstraint(
            "signal_type in ('command', 'feedback', 'status', 'sensor')",
            name="ck_points_signal_type",
        ),
        Index(
            "ix_points_source_enabled",
            "tenant_id",
            "asset_id",
            "agent_id",
            "source_id",
            "enabled",
        ),
    )

    tenant_id: Mapped[str] = mapped_column(Text, nullable=False)
    asset_id: Mapped[str] = mapped_column(Text, nullable=False)
    agent_id: Mapped[str] = mapped_column(Text, nullable=False)
    source_id: Mapped[str] = mapped_column(Text, nullable=False)
    point_id: Mapped[str] = mapped_column(Text, nullable=False)
    point_key: Mapped[str] = mapped_column(String(512), nullable=False)
    point_ref: Mapped[str] = mapped_column(Text, nullable=False)
    name: Mapped[str] = mapped_column(Text, nullable=False)
    description: Mapped[str | None] = mapped_column(Text)
    value_type: Mapped[str] = mapped_column(Text, nullable=False)
    value_model: Mapped[str] = mapped_column(Text, nullable=False)
    signal_type: Mapped[str] = mapped_column(Text, nullable=False)
    unit: Mapped[str | None] = mapped_column(Text)
    enabled: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    acquisition_json: Mapped[dict[str, Any]] = mapped_column(
        JSONB,
        nullable=False,
        default=dict,
    )
    publish_json: Mapped[dict[str, Any]] = mapped_column(
        JSONB,
        nullable=False,
        default=dict,
    )
    tags_json: Mapped[dict[str, Any]] = mapped_column(
        JSONB,
        nullable=False,
        default=dict,
    )
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )
