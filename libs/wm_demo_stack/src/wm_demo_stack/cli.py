from __future__ import annotations

import argparse
import os
from urllib.parse import urlparse

from wm_demo_stack.models import BrokerConfig, DemoSettings, TopicScope, WaveConfig
from wm_demo_stack.publisher import connect_publisher
from wm_demo_stack.runtime import SystemRuntime
from wm_demo_stack.scenario import run_demo


def parse_args() -> argparse.Namespace:
    default_broker = os.environ.get("MQTT_BROKER", "mqtt://localhost:1883")
    default_username = os.environ.get("MQTT_USERNAME")
    default_password = os.environ.get("MQTT_PASSWORD")

    parser = argparse.ArgumentParser(
        description="Publish demo MQTT data for manual Grafana testing.",
    )
    parser.add_argument(
        "--broker",
        default=default_broker,
        help=(
            "MQTT broker URI, for example mqtt://localhost:1883. "
            "Defaults to MQTT_BROKER or mqtt://localhost:1883."
        ),
    )
    parser.add_argument(
        "--username",
        default=default_username,
        help=(
            "MQTT username. Defaults to MQTT_USERNAME. "
            "If still omitted, connects without authentication."
        ),
    )
    parser.add_argument(
        "--password",
        default=default_password,
        help=(
            "MQTT password. Defaults to MQTT_PASSWORD. "
            "If still omitted, connects without authentication."
        ),
    )
    parser.add_argument(
        "--topic-root",
        default="wm/v1",
        help="MQTT topic root from ADR-005.",
    )
    parser.add_argument(
        "--object-id",
        default="demo-stand-01",
        help="Automation object identifier used in topic paths.",
    )
    parser.add_argument(
        "--agent-id",
        default="manual-grafana-demo",
        help="Agent identifier used in topic paths and retained records.",
    )
    parser.add_argument(
        "--source-id",
        default="knx_main",
        help="Source identifier used in topic paths.",
    )
    parser.add_argument(
        "--client-id",
        default="manual-grafana-demo-publisher",
        help="MQTT client id for this generator process.",
    )
    parser.add_argument(
        "--interval-seconds",
        type=float,
        default=2.0,
        help="Delay between publish cycles.",
    )
    parser.add_argument(
        "--count",
        type=int,
        default=0,
        help="Number of publish cycles. 0 means run forever.",
    )
    parser.add_argument(
        "--temperature-base",
        type=float,
        default=23.0,
        help="Base temperature value in Celsius.",
    )
    parser.add_argument(
        "--temperature-amplitude",
        type=float,
        default=1.8,
        help="Sine-wave amplitude for generated temperature values.",
    )
    parser.add_argument(
        "--temperature-period",
        type=float,
        default=8.0,
        help="Number of cycles in one temperature wave period.",
    )
    parser.add_argument(
        "--no-metadata",
        action="store_true",
        help="Do not publish retained source metadata catalog on startup.",
    )
    parser.add_argument(
        "--no-status",
        action="store_true",
        help="Do not publish retained source status and agent LWT records.",
    )
    parser.add_argument(
        "--retained-refresh-seconds",
        type=float,
        default=30.0,
        help=(
            "Republish retained metadata and status while running so "
            "live-only Grafana panels stay populated. 0 disables refresh."
        ),
    )
    return parser.parse_args()


def parse_broker(uri: str) -> BrokerConfig:
    parsed = urlparse(uri if "://" in uri else f"mqtt://{uri}")
    if parsed.scheme not in {"mqtt", "tcp"}:
        raise ValueError(
            f"Unsupported broker URI scheme: {parsed.scheme or '<empty>'}. "
            "Use mqtt://host:port or tcp://host:port."
        )
    if parsed.hostname is None:
        raise ValueError(f"Broker host is missing in URI: {uri}")
    return BrokerConfig(host=parsed.hostname, port=parsed.port or 1883)


def settings_from_args(args: argparse.Namespace) -> DemoSettings:
    if args.username and not args.password:
        raise ValueError("--password is required when --username is set")
    if args.interval_seconds < 0:
        raise ValueError("--interval-seconds must be non-negative")
    if args.count < 0:
        raise ValueError("--count must be non-negative")
    if args.retained_refresh_seconds < 0:
        raise ValueError("--retained-refresh-seconds must be non-negative")

    return DemoSettings(
        broker=parse_broker(args.broker),
        username=args.username,
        password=args.password,
        client_id=args.client_id,
        scope=TopicScope(
            topic_root=args.topic_root,
            object_id=args.object_id,
            agent_id=args.agent_id,
            source_id=args.source_id,
        ),
        interval_seconds=args.interval_seconds,
        count=args.count,
        temperature=WaveConfig(
            base=args.temperature_base,
            amplitude=args.temperature_amplitude,
            period=args.temperature_period,
        ),
        publish_metadata=not args.no_metadata,
        publish_status=not args.no_status,
        retained_refresh_seconds=args.retained_refresh_seconds,
    )


def main() -> int:
    args = parse_args()
    try:
        settings = settings_from_args(args)
    except ValueError as exc:
        raise SystemExit(str(exc)) from exc

    publisher = connect_publisher(settings=settings)
    print(
        "CONNECTED "
        f"broker={settings.broker.host}:{settings.broker.port} "
        f"object_id={settings.scope.object_id} "
        f"agent_id={settings.scope.agent_id} "
        f"source_id={settings.scope.source_id}"
    )
    try:
        return run_demo(
            settings,
            publisher=publisher,
            runtime=SystemRuntime(),
        )
    finally:
        publisher.close()
        print("DISCONNECTED")
