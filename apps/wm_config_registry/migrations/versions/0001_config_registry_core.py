"""create config registry core tables

Revision ID: 0001_config_registry_core
Revises:
Create Date: 2026-05-03 00:00:00
"""

from __future__ import annotations

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "0001_config_registry_core"
down_revision: str | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.create_table(
        "tenants",
        sa.Column("tenant_id", sa.Text(), nullable=False),
        sa.Column("name", sa.Text(), nullable=False),
        sa.Column("status", sa.Text(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.CheckConstraint(
            "status in ('active', 'disabled')",
            name="ck_tenants_status",
        ),
        sa.PrimaryKeyConstraint("tenant_id"),
    )

    op.create_table(
        "assets",
        sa.Column("tenant_id", sa.Text(), nullable=False),
        sa.Column("asset_id", sa.Text(), nullable=False),
        sa.Column("name", sa.Text(), nullable=False),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("status", sa.Text(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.CheckConstraint(
            "asset_id ~ '^[a-z0-9][a-z0-9_-]{0,127}$'",
            name="ck_assets_asset_id_path_id",
        ),
        sa.CheckConstraint(
            "status in ('active', 'disabled')",
            name="ck_assets_status",
        ),
        sa.ForeignKeyConstraint(
            ["tenant_id"],
            ["tenants.tenant_id"],
            name="fk_assets_tenant",
        ),
        sa.PrimaryKeyConstraint("tenant_id", "asset_id", name="pk_assets"),
    )
    op.create_index(
        "ix_assets_tenant_status",
        "assets",
        ["tenant_id", "status"],
    )

    op.create_table(
        "agents",
        sa.Column("tenant_id", sa.Text(), nullable=False),
        sa.Column("asset_id", sa.Text(), nullable=False),
        sa.Column("agent_id", sa.Text(), nullable=False),
        sa.Column("name", sa.Text(), nullable=True),
        sa.Column("status", sa.Text(), nullable=False),
        sa.Column(
            "bootstrap_hint_json",
            postgresql.JSONB(astext_type=sa.Text()),
            server_default=sa.text("'{}'::jsonb"),
            nullable=False,
        ),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.CheckConstraint(
            "agent_id ~ '^[a-z0-9][a-z0-9_-]{0,127}$'",
            name="ck_agents_agent_id_path_id",
        ),
        sa.CheckConstraint(
            "status in ('active', 'disabled', 'retired')",
            name="ck_agents_status",
        ),
        sa.ForeignKeyConstraint(
            ["tenant_id", "asset_id"],
            ["assets.tenant_id", "assets.asset_id"],
            name="fk_agents_asset",
        ),
        sa.PrimaryKeyConstraint(
            "tenant_id",
            "asset_id",
            "agent_id",
            name="pk_agents",
        ),
    )
    op.create_index(
        "ix_agents_tenant_agent",
        "agents",
        ["tenant_id", "agent_id"],
    )

    op.create_table(
        "sources",
        sa.Column("tenant_id", sa.Text(), nullable=False),
        sa.Column("asset_id", sa.Text(), nullable=False),
        sa.Column("agent_id", sa.Text(), nullable=False),
        sa.Column("source_id", sa.Text(), nullable=False),
        sa.Column("source_type", sa.Text(), nullable=False),
        sa.Column(
            "enabled",
            sa.Boolean(),
            server_default=sa.text("true"),
            nullable=False,
        ),
        sa.Column("name", sa.Text(), nullable=True),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column(
            "connection_json",
            postgresql.JSONB(astext_type=sa.Text()),
            server_default=sa.text("'{}'::jsonb"),
            nullable=False,
        ),
        sa.Column(
            "acquisition_defaults_json",
            postgresql.JSONB(astext_type=sa.Text()),
            server_default=sa.text("'{}'::jsonb"),
            nullable=False,
        ),
        sa.Column(
            "publish_defaults_json",
            postgresql.JSONB(astext_type=sa.Text()),
            server_default=sa.text("'{}'::jsonb"),
            nullable=False,
        ),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.CheckConstraint(
            "source_id ~ '^[a-z0-9][a-z0-9_-]{0,127}$'",
            name="ck_sources_source_id_path_id",
        ),
        sa.ForeignKeyConstraint(
            ["tenant_id", "asset_id", "agent_id"],
            ["agents.tenant_id", "agents.asset_id", "agents.agent_id"],
            name="fk_sources_agent",
        ),
        sa.PrimaryKeyConstraint(
            "tenant_id",
            "asset_id",
            "agent_id",
            "source_id",
            name="pk_sources",
        ),
    )
    op.create_index(
        "ix_sources_tenant_asset_type",
        "sources",
        ["tenant_id", "asset_id", "source_type"],
    )

    op.create_table(
        "points",
        sa.Column("tenant_id", sa.Text(), nullable=False),
        sa.Column("asset_id", sa.Text(), nullable=False),
        sa.Column("agent_id", sa.Text(), nullable=False),
        sa.Column("source_id", sa.Text(), nullable=False),
        sa.Column("point_id", sa.Text(), nullable=False),
        sa.Column("point_key", sa.String(length=512), nullable=False),
        sa.Column("point_ref", sa.Text(), nullable=False),
        sa.Column("name", sa.Text(), nullable=False),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("value_type", sa.Text(), nullable=False),
        sa.Column("value_model", sa.Text(), nullable=False),
        sa.Column("signal_type", sa.Text(), nullable=False),
        sa.Column("unit", sa.Text(), nullable=True),
        sa.Column(
            "enabled",
            sa.Boolean(),
            server_default=sa.text("true"),
            nullable=False,
        ),
        sa.Column(
            "acquisition_json",
            postgresql.JSONB(astext_type=sa.Text()),
            server_default=sa.text("'{}'::jsonb"),
            nullable=False,
        ),
        sa.Column(
            "publish_json",
            postgresql.JSONB(astext_type=sa.Text()),
            server_default=sa.text("'{}'::jsonb"),
            nullable=False,
        ),
        sa.Column(
            "tags_json",
            postgresql.JSONB(astext_type=sa.Text()),
            server_default=sa.text("'{}'::jsonb"),
            nullable=False,
        ),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.CheckConstraint(
            "point_key ~ '^(?:[A-Za-z0-9._~-]|%[0-9A-F]{2})+$'",
            name="ck_points_point_key",
        ),
        sa.CheckConstraint(
            "signal_type in ('command', 'feedback', 'status', 'sensor')",
            name="ck_points_signal_type",
        ),
        sa.CheckConstraint(
            "value_type in ('boolean', 'number', 'string')",
            name="ck_points_value_type",
        ),
        sa.ForeignKeyConstraint(
            ["tenant_id", "asset_id", "agent_id", "source_id"],
            [
                "sources.tenant_id",
                "sources.asset_id",
                "sources.agent_id",
                "sources.source_id",
            ],
            name="fk_points_source",
        ),
        sa.PrimaryKeyConstraint("tenant_id", "point_id", name="pk_points"),
        sa.UniqueConstraint(
            "tenant_id",
            "asset_id",
            "agent_id",
            "source_id",
            "point_key",
            name="uq_points_point_key",
        ),
        sa.UniqueConstraint(
            "tenant_id",
            "asset_id",
            "agent_id",
            "source_id",
            "point_ref",
            name="uq_points_point_ref",
        ),
    )
    op.create_index(
        "ix_points_source_enabled",
        "points",
        ["tenant_id", "asset_id", "agent_id", "source_id", "enabled"],
    )


def downgrade() -> None:
    op.drop_index("ix_points_source_enabled", table_name="points")
    op.drop_table("points")
    op.drop_index("ix_sources_tenant_asset_type", table_name="sources")
    op.drop_table("sources")
    op.drop_index("ix_agents_tenant_agent", table_name="agents")
    op.drop_table("agents")
    op.drop_index("ix_assets_tenant_status", table_name="assets")
    op.drop_table("assets")
    op.drop_table("tenants")
