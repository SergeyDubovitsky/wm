from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any, Sequence

from edge_agent.application.catalog import build_source_catalog_publications
from edge_agent.application.configuration import load_runtime_config
from edge_agent.application.delivery import DeliveryWorker
from edge_agent.application.identity import load_or_create_agent_id
from edge_agent.application.processing import ObservationProcessor
from edge_agent.domain.config import (
    AgentRuntimeConfig,
    ConfigurationError,
    RuntimePoint,
)
from edge_agent.domain.events import Observation, ScalarValue
from edge_agent.infrastructure.mqtt_publisher import connect_mqtt_publisher
from edge_agent.infrastructure.sqlite_outbox import SQLiteOutbox

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

    show_catalog = subparsers.add_parser(
        "show-catalog",
        help="Print retained source catalog MQTT publications",
    )
    _add_config_root_argument(show_catalog)
    show_catalog.add_argument(
        "--agent-id",
        default=None,
        help="Agent id to use in MQTT topic/payload; defaults to persisted id_file value",
    )
    show_catalog.set_defaults(handler=_handle_show_catalog)

    publish_catalog = subparsers.add_parser(
        "publish-catalog",
        help="Publish retained source catalog records to the configured MQTT broker",
    )
    _add_config_root_argument(publish_catalog)
    publish_catalog.add_argument(
        "--agent-id",
        default=None,
        help="Agent id to use in MQTT topic/payload; defaults to persisted id_file value",
    )
    publish_catalog.set_defaults(handler=_handle_publish_catalog)

    enqueue_demo_event = subparsers.add_parser(
        "enqueue-demo-event",
        help="Create one synthetic telemetry event and append it to the SQLite outbox",
    )
    _add_config_root_argument(enqueue_demo_event)
    enqueue_demo_event.add_argument(
        "--agent-id",
        default=None,
        help="Agent id to use in the event; defaults to persisted id_file value",
    )
    enqueue_demo_event.add_argument(
        "--source-id",
        default=None,
        help="Source id; defaults to the first source that has publish-enabled points",
    )
    enqueue_demo_event.add_argument(
        "--point-ref",
        default=None,
        help="Point reference; defaults to the first publish-enabled point for source",
    )
    enqueue_demo_event.add_argument(
        "--value",
        default=None,
        help="Telemetry value; defaults to a type-specific demo value",
    )
    enqueue_demo_event.set_defaults(handler=_handle_enqueue_demo_event)

    deliver_once = subparsers.add_parser(
        "deliver-once",
        help="Publish one batch from the SQLite outbox to the configured MQTT broker",
    )
    _add_config_root_argument(deliver_once)
    deliver_once.add_argument(
        "--agent-id",
        default=None,
        help="Agent id to use in MQTT topic identity; defaults to persisted id_file value",
    )
    deliver_once.add_argument(
        "--limit",
        type=int,
        default=100,
        help="Maximum number of pending outbox records to reserve",
    )
    deliver_once.add_argument(
        "--lease-seconds",
        type=int,
        default=60,
        help="Lease duration for reserved outbox records",
    )
    deliver_once.set_defaults(handler=_handle_deliver_once)

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


def _handle_show_catalog(args: argparse.Namespace) -> int:
    """Render retained source catalog MQTT publications without network I/O."""
    runtime = load_runtime_config(args.config_root)
    agent_id = args.agent_id or load_or_create_agent_id(runtime.agent.id_file)
    publications = build_source_catalog_publications(runtime, agent_id=agent_id)
    print(
        json.dumps(
            [
                {
                    "topic": publication.topic,
                    "qos": publication.qos,
                    "retain": publication.retain,
                    "payload": publication.payload,
                }
                for publication in publications
            ],
            ensure_ascii=False,
            indent=2,
        )
    )
    return 0


def _handle_publish_catalog(args: argparse.Namespace) -> int:
    """Publish retained source catalogs to the configured MQTT broker."""
    runtime = load_runtime_config(args.config_root)
    mqtt = runtime.delivery.mqtt
    if mqtt is None or not mqtt.enabled:
        raise RuntimeError("MQTT delivery settings are not configured or disabled")

    agent_id = args.agent_id or load_or_create_agent_id(runtime.agent.id_file)
    publications = build_source_catalog_publications(runtime, agent_id=agent_id)
    publisher = connect_mqtt_publisher(mqtt, agent_id=agent_id)
    try:
        for publication in publications:
            publisher.publish(publication)
    finally:
        publisher.close()

    print(f"Published source catalogs: count={len(publications)} agent_id={agent_id}")
    return 0


def _handle_enqueue_demo_event(args: argparse.Namespace) -> int:
    """Append one synthetic publishable telemetry event to the SQLite outbox."""
    runtime = load_runtime_config(args.config_root)
    agent_id = args.agent_id or load_or_create_agent_id(runtime.agent.id_file)
    point = _select_demo_point(runtime, source_id=args.source_id, point_ref=args.point_ref)
    value = _coerce_demo_value(args.value, value_type=point.value_type)
    processor = ObservationProcessor(runtime, agent_id=agent_id)
    result = processor.process(
        Observation(
            source_id=point.source_id,
            point_ref=point.point_ref,
            observation_mode="listen",
            value=value,
            value_raw=None if value is None else str(value),
        )
    )
    if result.event is None:
        raise RuntimeError(
            "Demo observation was not publishable"
            + (f": {result.suppressed_reason}" if result.suppressed_reason else "")
        )

    outbox = SQLiteOutbox(runtime.storage.sqlite_path)
    outbox.initialize()
    record_id = outbox.append(result.event)
    print(
        "Enqueued demo event: "
        f"record_id={record_id} "
        f"event_id={result.event.event_id} "
        f"source_id={point.source_id} "
        f"point_ref={point.point_ref}"
    )
    return 0


def _handle_deliver_once(args: argparse.Namespace) -> int:
    """Deliver one reserved SQLite outbox batch to MQTT and print run counters."""
    runtime = load_runtime_config(args.config_root)
    mqtt = runtime.delivery.mqtt
    if mqtt is None or not mqtt.enabled:
        raise RuntimeError("MQTT delivery settings are not configured or disabled")

    agent_id = args.agent_id or load_or_create_agent_id(runtime.agent.id_file)
    outbox = SQLiteOutbox(runtime.storage.sqlite_path)
    outbox.initialize()
    publisher = connect_mqtt_publisher(mqtt, agent_id=agent_id)
    worker = DeliveryWorker(
        runtime_config=runtime,
        agent_id=agent_id,
        outbox=outbox,
        publisher=publisher,
    )
    try:
        result = worker.deliver_once(limit=args.limit, lease_seconds=args.lease_seconds)
    finally:
        publisher.close()

    print(
        "Delivery run: "
        f"reserved={result.reserved_count} "
        f"published={result.published_count} "
        f"retry={result.retry_count} "
        f"dead_letter={result.dead_letter_count}"
    )
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


def _select_demo_point(
    runtime: AgentRuntimeConfig,
    *,
    source_id: str | None,
    point_ref: str | None,
) -> RuntimePoint:
    """Choose the publish-enabled point used by synthetic demo event generation."""
    points = sorted(runtime.points.values(), key=lambda point: (point.source_id, point.point_ref))
    if source_id is not None:
        points = [point for point in points if point.source_id == source_id]
    if point_ref is not None:
        points = [point for point in points if point.point_ref == point_ref]
    points = [point for point in points if point.publish.enabled]
    if not points:
        raise RuntimeError("No publish-enabled point matches demo event arguments")
    return points[0]


def _coerce_demo_value(raw_value: str | None, *, value_type: str) -> ScalarValue | None:
    """Convert CLI text input into the scalar value expected by the selected point."""
    if raw_value is None:
        if value_type == "boolean":
            return True
        if value_type == "number":
            return 24.2
        if value_type == "string":
            return "demo"
        return None
    if value_type == "boolean":
        normalized = raw_value.strip().lower()
        if normalized in {"true", "1", "yes", "on"}:
            return True
        if normalized in {"false", "0", "no", "off"}:
            return False
        raise RuntimeError(f"Cannot parse boolean demo value {raw_value!r}")
    if value_type == "number":
        return float(raw_value)
    if value_type == "string":
        return raw_value
    raise RuntimeError(f"Unsupported point value_type {value_type!r}")


if __name__ == "__main__":  # pragma: no cover
    raise SystemExit(main())
