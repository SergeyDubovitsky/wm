"""create config registry revision tables

Revision ID: 0002_config_registry_revisions
Revises: 0001_config_registry_core
Create Date: 2026-05-03 00:00:00
"""

from __future__ import annotations

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "0002_config_registry_revisions"
down_revision: str | None = "0001_config_registry_core"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.create_table(
        "runtime_config_revisions",
        sa.Column("tenant_id", sa.Text(), nullable=False),
        sa.Column("asset_id", sa.Text(), nullable=False),
        sa.Column("agent_id", sa.Text(), nullable=False),
        sa.Column("config_revision", sa.Text(), nullable=False),
        sa.Column("status", sa.Text(), nullable=False),
        sa.Column("issued_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column(
            "runtime_payload_json",
            postgresql.JSONB(astext_type=sa.Text()),
            nullable=False,
        ),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.CheckConstraint(
            "status in ('draft', 'rendered', 'active', 'superseded', 'failed')",
            name="ck_runtime_config_revisions_status",
        ),
        sa.ForeignKeyConstraint(
            ["tenant_id", "asset_id", "agent_id"],
            ["agents.tenant_id", "agents.asset_id", "agents.agent_id"],
            name="fk_runtime_config_revisions_agent",
        ),
        sa.PrimaryKeyConstraint(
            "tenant_id",
            "asset_id",
            "agent_id",
            "config_revision",
            name="pk_runtime_config_revisions",
        ),
    )
    op.create_index(
        "uq_runtime_config_revisions_active",
        "runtime_config_revisions",
        ["tenant_id", "asset_id", "agent_id"],
        unique=True,
        postgresql_where=sa.text("status = 'active'"),
    )

    op.create_table(
        "source_config_revisions",
        sa.Column("tenant_id", sa.Text(), nullable=False),
        sa.Column("asset_id", sa.Text(), nullable=False),
        sa.Column("agent_id", sa.Text(), nullable=False),
        sa.Column("source_id", sa.Text(), nullable=False),
        sa.Column("source_config_revision", sa.Text(), nullable=False),
        sa.Column("config_revision", sa.Text(), nullable=False),
        sa.Column("status", sa.Text(), nullable=False),
        sa.Column("issued_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column(
            "source_payload_json",
            postgresql.JSONB(astext_type=sa.Text()),
            nullable=False,
        ),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.CheckConstraint(
            "status in ('draft', 'rendered', 'active', 'superseded', 'failed')",
            name="ck_source_config_revisions_status",
        ),
        sa.ForeignKeyConstraint(
            ["tenant_id", "asset_id", "agent_id", "source_id"],
            [
                "sources.tenant_id",
                "sources.asset_id",
                "sources.agent_id",
                "sources.source_id",
            ],
            name="fk_source_config_revisions_source",
        ),
        sa.ForeignKeyConstraint(
            ["tenant_id", "asset_id", "agent_id", "config_revision"],
            [
                "runtime_config_revisions.tenant_id",
                "runtime_config_revisions.asset_id",
                "runtime_config_revisions.agent_id",
                "runtime_config_revisions.config_revision",
            ],
            name="fk_source_config_revisions_runtime",
        ),
        sa.PrimaryKeyConstraint(
            "tenant_id",
            "asset_id",
            "agent_id",
            "source_id",
            "source_config_revision",
            name="pk_source_config_revisions",
        ),
    )
    op.create_index(
        "uq_source_config_revisions_active",
        "source_config_revisions",
        ["tenant_id", "asset_id", "agent_id", "source_id"],
        unique=True,
        postgresql_where=sa.text("status = 'active'"),
    )


def downgrade() -> None:
    op.drop_index(
        "uq_source_config_revisions_active",
        table_name="source_config_revisions",
    )
    op.drop_table("source_config_revisions")
    op.drop_index(
        "uq_runtime_config_revisions_active",
        table_name="runtime_config_revisions",
    )
    op.drop_table("runtime_config_revisions")
