from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any, Sequence

from edge_agent.application.configuration import load_runtime_config
from edge_agent.application.identity import load_or_create_agent_id
from edge_agent.domain.config import AgentRuntimeConfig, ConfigurationError

DEFAULT_CONFIG_ROOT = Path(__file__).resolve().parents[2] / "config" / "examples"


def main(argv: Sequence[str] | None = None) -> int:
    parser = _build_parser()
    args = parser.parse_args(argv)

    try:
        return args.handler(args)
    except (ConfigurationError, FileNotFoundError, OSError, RuntimeError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1


def _build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="edge-agent",
        description="CLI for the edge telemetry runtime",
    )
    subparsers = parser.add_subparsers(dest="command", required=True)

    check_config = subparsers.add_parser(
        "check-config",
        help="Load and validate the runtime configuration",
    )
    _add_config_root_argument(check_config)
    check_config.set_defaults(handler=_handle_check_config)

    show_config = subparsers.add_parser(
        "show-config",
        help="Print a normalized configuration summary",
    )
    _add_config_root_argument(show_config)
    show_config.add_argument(
        "--format",
        choices=("text", "json"),
        default="text",
        help="Output format for the summary",
    )
    show_config.set_defaults(handler=_handle_show_config)

    agent_id = subparsers.add_parser(
        "agent-id",
        help="Load config and print the persistent agent_id",
    )
    _add_config_root_argument(agent_id)
    agent_id.set_defaults(handler=_handle_agent_id)

    return parser


def _add_config_root_argument(parser: argparse.ArgumentParser) -> None:
    parser.add_argument(
        "--config-root",
        type=Path,
        default=DEFAULT_CONFIG_ROOT,
        help=(
            "Directory that contains agent.yaml/json and sources.d/points.d; "
            "defaults to the packaged examples"
        ),
    )


def _handle_check_config(args: argparse.Namespace) -> int:
    runtime = load_runtime_config(args.config_root)
    summary = _runtime_summary(runtime, args.config_root)
    print(
        "Configuration OK: "
        f"object_id={summary['object_id']} "
        f"sources={summary['source_count']} "
        f"points={summary['point_count']} "
        f"config_root={summary['config_root']}"
    )
    return 0


def _handle_show_config(args: argparse.Namespace) -> int:
    runtime = load_runtime_config(args.config_root)
    summary = _runtime_summary(runtime, args.config_root)
    if args.format == "json":
        print(json.dumps(summary, ensure_ascii=False, indent=2))
    else:
        print(_render_text_summary(summary))
    return 0


def _handle_agent_id(args: argparse.Namespace) -> int:
    runtime = load_runtime_config(args.config_root)
    print(load_or_create_agent_id(runtime.agent.id_file))
    return 0


def _runtime_summary(
    runtime: AgentRuntimeConfig,
    config_root: Path,
) -> dict[str, Any]:
    points = sorted(runtime.points.values(), key=lambda point: (point.source_id, point.point_ref))
    return {
        "config_root": str(config_root.resolve()),
        "object_id": runtime.agent.object_id,
        "agent_name": runtime.agent.name,
        "agent_id_file": str(runtime.agent.id_file),
        "transport": runtime.delivery.transport,
        "source_count": len(runtime.sources),
        "point_count": len(runtime.points),
        "sources": [
            {
                "source_id": source.source_id,
                "source_type": source.type,
                "enabled": source.enabled,
            }
            for source in sorted(runtime.sources.values(), key=lambda source: source.source_id)
        ],
        "points": [
            {
                "source_id": point.source_id,
                "point_ref": point.point_ref,
                "name": point.name,
                "signal_type": point.signal_type,
                "value_type": point.value_type,
                "value_model": point.value_model,
                "publish_enabled": point.publish.enabled,
            }
            for point in points
        ],
    }


def _render_text_summary(summary: dict[str, Any]) -> str:
    lines = [
        f"Config root: {summary['config_root']}",
        f"Object ID: {summary['object_id']}",
        f"Agent name: {summary['agent_name']}",
        f"Agent ID file: {summary['agent_id_file']}",
        f"Transport: {summary['transport']}",
        f"Sources: {summary['source_count']}",
        f"Points: {summary['point_count']}",
    ]
    for source in summary["sources"]:
        lines.append(
            f"- source {source['source_id']} type={source['source_type']} enabled={source['enabled']}"
        )
    for point in summary["points"]:
        lines.append(
            "- point "
            f"{point['source_id']}:{point['point_ref']} "
            f"name={point['name']} "
            f"signal_type={point['signal_type']} "
            f"value_model={point['value_model']} "
            f"publish_enabled={point['publish_enabled']}"
        )
    return "\n".join(lines)


if __name__ == "__main__":  # pragma: no cover
    raise SystemExit(main())
