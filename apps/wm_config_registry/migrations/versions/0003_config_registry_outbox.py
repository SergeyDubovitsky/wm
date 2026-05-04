"""create config registry outbox table

Revision ID: 0003_config_registry_outbox
Revises: 0002_config_registry_revisions
Create Date: 2026-05-03 00:00:00
"""

from __future__ import annotations

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "0003_config_registry_outbox"
down_revision: str | None = "0002_config_registry_revisions"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.create_table(
        "config_outbox",
        sa.Column("tenant_id", sa.Text(), nullable=False),
        sa.Column("outbox_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("idempotency_key", sa.Text(), nullable=False),
        sa.Column("asset_id", sa.Text(), nullable=False),
        sa.Column("agent_id", sa.Text(), nullable=False),
        sa.Column("config_revision", sa.Text(), nullable=False),
        sa.Column("config_scope", sa.Text(), nullable=False),
        sa.Column("source_id", sa.Text(), nullable=True),
        sa.Column("source_config_revision", sa.Text(), nullable=True),
        sa.Column("message_type", sa.Text(), nullable=False),
        sa.Column("kafka_topic", sa.Text(), nullable=False),
        sa.Column("kafka_key", sa.Text(), nullable=False),
        sa.Column(
            "payload_json",
            postgresql.JSONB(astext_type=sa.Text()),
            nullable=False,
        ),
        sa.Column("status", sa.Text(), nullable=False),
        sa.Column("available_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("lease_expires_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("published_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("attempt_count", sa.Integer(), nullable=False),
        sa.Column("next_attempt_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("last_error", sa.Text(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.CheckConstraint(
            "status in ('pending', 'inflight', 'published', 'retry', 'dead_letter')",
            name="ck_config_outbox_status",
        ),
        sa.CheckConstraint(
            "(config_scope = 'agent_runtime' and source_id is null "
            "and source_config_revision is null) "
            "or (config_scope like 'source:%' and source_id is not null "
            "and source_config_revision is not null)",
            name="ck_config_outbox_scope_source_consistency",
        ),
        sa.PrimaryKeyConstraint("outbox_id"),
        sa.UniqueConstraint(
            "idempotency_key",
            name="uq_config_outbox_idempotency_key",
        ),
    )
    op.create_index(
        "ix_config_outbox_reservation",
        "config_outbox",
        ["status", "available_at"],
    )
    op.create_index(
        "ix_config_outbox_lease",
        "config_outbox",
        ["status", "lease_expires_at"],
    )
    op.create_index(
        "ix_config_outbox_config_scope",
        "config_outbox",
        ["tenant_id", "asset_id", "agent_id", "config_revision", "config_scope"],
    )


def downgrade() -> None:
    op.drop_index("ix_config_outbox_config_scope", table_name="config_outbox")
    op.drop_index("ix_config_outbox_lease", table_name="config_outbox")
    op.drop_index("ix_config_outbox_reservation", table_name="config_outbox")
    op.drop_table("config_outbox")
