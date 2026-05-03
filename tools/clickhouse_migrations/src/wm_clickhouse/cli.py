from __future__ import annotations

import argparse
from pathlib import Path
from typing import Sequence

from wm_clickhouse.http_client import ClickHouseSettings, HttpClickHouseClient
from wm_clickhouse.migrations import (
    MigrationError,
    apply_pending_migrations,
    migration_statuses,
)


def main(argv: Sequence[str] | None = None) -> None:
    parser = _build_parser()
    args = parser.parse_args(argv)

    if args.command != "migrate":
        parser.error("A command is required")

    migrations_dir = _resolve_migrations_dir(args.migrations_dir)
    client = HttpClickHouseClient(ClickHouseSettings.from_env())

    try:
        if args.action == "status":
            statuses = migration_statuses(client, migrations_dir)
            _print_statuses(statuses)
        elif args.action == "up":
            applied = apply_pending_migrations(client, migrations_dir)
            if not applied:
                print("No pending migrations.")
            else:
                for migration in applied:
                    print(f"Applied {migration.version}")
        else:
            parser.error("Unknown migrate action")
    except MigrationError as exc:
        raise SystemExit(str(exc)) from exc


def _build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="wm-clickhouse")
    parser.add_argument(
        "--migrations-dir",
        type=Path,
        default=None,
        help="Directory with forward-only ClickHouse SQL migrations.",
    )

    subparsers = parser.add_subparsers(dest="command", required=True)
    migrate = subparsers.add_parser("migrate")
    migrate.add_argument("action", choices=["status", "up"])
    return parser


def _resolve_migrations_dir(path: Path | None) -> Path:
    if path is not None:
        return path

    package_root = Path(__file__).resolve().parents[2]
    package_migrations = package_root / "migrations"
    if package_migrations.exists():
        return package_migrations

    cwd = Path.cwd()
    for candidate_root in (cwd, *cwd.parents):
        candidates = (
            candidate_root / "tools" / "clickhouse_migrations" / "migrations",
            candidate_root / "migrations",
        )
        for candidate in candidates:
            if candidate.exists():
                return candidate
    return package_migrations


def _print_statuses(statuses: object) -> None:
    for status in statuses:
        print(f"{status.state:17} {status.version}")
