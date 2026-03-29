from __future__ import annotations

import argparse
import json
import math
import os
import time
from dataclasses import dataclass
from datetime import UTC, datetime
from typing import Any
from urllib.parse import quote, urlparse

import paho.mqtt.client as mqtt


@dataclass(frozen=True)
class BrokerConfig:
    host: str
    port: int


@dataclass(frozen=True)
class PointSpec:
    point_ref: str
    name: str
    signal_type: str
    value_type: str
    value_model: str
    unit: str | None
    tags: dict[str, str]

    @property
    def point_key(self) -> str:
        return quote(self.point_ref, safe="")


TEMPERATURE_POINT = PointSpec(
    point_ref="2/0/0",
    name="temperature",
    signal_type="sensor",
    value_type="number",
    value_model="knx.dpt.9.001",
    unit="C",
    tags={"room": "demo", "equipment": "temp_1"},
)

SWITCH_FEEDBACK_POINT = PointSpec(
    point_ref="0/0/7",
    name="switch_feedback",
    signal_type="feedback",
    value_type="boolean",
    value_model="knx.dpt.1.001",
    unit=None,
    tags={"room": "demo", "equipment": "light_1"},
)

POINTS = (TEMPERATURE_POINT, SWITCH_FEEDBACK_POINT)


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


def now_utc_iso() -> str:
    return datetime.now(tz=UTC).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def point_topic(
    *,
    topic_root: str,
    object_id: str,
    agent_id: str,
    source_id: str,
    point: PointSpec,
    suffix: str,
) -> str:
    return (
        f"{topic_root}/objects/{object_id}/agents/{agent_id}"
        f"/sources/{source_id}/points/{point.point_key}/{suffix}"
    )


def source_status_topic(
    *,
    topic_root: str,
    object_id: str,
    agent_id: str,
    source_id: str,
) -> str:
    return (
        f"{topic_root}/objects/{object_id}/agents/{agent_id}"
        f"/sources/{source_id}/status/connection"
    )


def source_meta_catalog_topic(
    *,
    topic_root: str,
    object_id: str,
    agent_id: str,
    source_id: str,
) -> str:
    return (
        f"{topic_root}/objects/{object_id}/agents/{agent_id}"
        f"/sources/{source_id}/meta/catalog"
    )


def agent_lwt_topic(
    *,
    topic_root: str,
    object_id: str,
    agent_id: str,
) -> str:
    return f"{topic_root}/objects/{object_id}/agents/{agent_id}/status/lwt"


def source_meta_catalog_payload(
    *,
    object_id: str,
    agent_id: str,
    source_id: str,
) -> dict[str, Any]:
    return {
        "message_type": "wm.source.meta.catalog.v1",
        "object_id": object_id,
        "agent_id": agent_id,
        "source_id": source_id,
        "source_type": "knx",
        "ts": now_utc_iso(),
        "points": [
            {
                "point_key": point.point_key,
                "point_ref": point.point_ref,
                "name": point.name,
                "signal_type": point.signal_type,
                "value_type": point.value_type,
                "value_model": point.value_model,
                "unit": point.unit,
                "tags": point.tags,
            }
            for point in POINTS
        ],
    }


def telemetry_payload(
    *,
    point: PointSpec,
    event_id: str,
    sequence: int,
    value: bool | float,
    value_raw: str,
) -> dict[str, Any]:
    return {
        "message_type": "wm.telemetry.event.v1",
        "event_id": event_id,
        "event_type": "telemetry.changed" if point.value_type == "boolean" else "telemetry.sample",
        "ts": now_utc_iso(),
        "observation_mode": "listen",
        "value": value,
        "value_raw": value_raw,
        "quality": "good",
        "sequence": sequence,
    }


def connection_payload(state: str, reason: str | None = None) -> dict[str, Any]:
    return {
        "message_type": "wm.source.connection.v1",
        "state": state,
        "ts": now_utc_iso(),
        "reason": reason,
    }


def lwt_payload(status: str) -> dict[str, Any]:
    return {
        "message_type": "wm.agent.lwt.v1",
        "status": status,
        "ts": now_utc_iso(),
    }


def publish_json(
    client: mqtt.Client,
    *,
    topic: str,
    payload: dict[str, Any],
    qos: int = 1,
    retain: bool = False,
) -> None:
    payload_json = json.dumps(payload, separators=(",", ":"), ensure_ascii=True)
    message = client.publish(topic, payload_json, qos=qos, retain=retain)
    message.wait_for_publish(timeout=10)
    if not message.is_published():
        raise RuntimeError(f"Publish timed out for topic {topic}")
    if message.rc != mqtt.MQTT_ERR_SUCCESS:
        raise RuntimeError(f"Publish failed for topic {topic} with rc={message.rc}")
    print(f"PUBLISHED retain={retain} topic={topic} payload={payload_json}")


def connect_client(
    *,
    broker: BrokerConfig,
    client_id: str,
    username: str | None,
    password: str | None,
) -> mqtt.Client:
    client = mqtt.Client(
        callback_api_version=mqtt.CallbackAPIVersion.VERSION2,
        client_id=client_id,
        protocol=mqtt.MQTTv5,
    )
    if username:
        client.username_pw_set(username, password=password)
    client.connect(broker.host, broker.port, keepalive=20)
    client.loop_start()
    return client


def publish_bootstrap_records(
    client: mqtt.Client,
    *,
    args: argparse.Namespace,
) -> None:
    if not args.no_metadata:
        publish_json(
            client,
            topic=source_meta_catalog_topic(
                topic_root=args.topic_root,
                object_id=args.object_id,
                agent_id=args.agent_id,
                source_id=args.source_id,
            ),
            payload=source_meta_catalog_payload(
                object_id=args.object_id,
                agent_id=args.agent_id,
                source_id=args.source_id,
            ),
            retain=True,
        )

    if not args.no_status:
        publish_json(
            client,
            topic=source_status_topic(
                topic_root=args.topic_root,
                object_id=args.object_id,
                agent_id=args.agent_id,
                source_id=args.source_id,
            ),
            payload=connection_payload("connected"),
            retain=True,
        )
        publish_json(
            client,
            topic=agent_lwt_topic(
                topic_root=args.topic_root,
                object_id=args.object_id,
                agent_id=args.agent_id,
            ),
            payload=lwt_payload("online"),
            retain=True,
        )


def temperature_value(
    cycle: int,
    *,
    base: float,
    amplitude: float,
    period: float,
) -> float:
    if period <= 0:
        return round(base, 1)
    phase = (cycle / period) * (2 * math.pi)
    return round(base + amplitude * math.sin(phase), 1)


def run(args: argparse.Namespace) -> int:
    broker = parse_broker(args.broker)
    client = connect_client(
        broker=broker,
        client_id=args.client_id,
        username=args.username,
        password=args.password,
    )
    print(
        "CONNECTED "
        f"broker={broker.host}:{broker.port} "
        f"object_id={args.object_id} agent_id={args.agent_id} source_id={args.source_id}"
    )

    sequence = {point.point_ref: 0 for point in POINTS}

    try:
        publish_bootstrap_records(client, args=args)

        cycle = 0
        while args.count == 0 or cycle < args.count:
            cycle += 1

            temperature = temperature_value(
                cycle,
                base=args.temperature_base,
                amplitude=args.temperature_amplitude,
                period=args.temperature_period,
            )
            sequence[TEMPERATURE_POINT.point_ref] += 1
            publish_json(
                client,
                topic=point_topic(
                    topic_root=args.topic_root,
                    object_id=args.object_id,
                    agent_id=args.agent_id,
                    source_id=args.source_id,
                    point=TEMPERATURE_POINT,
                    suffix="event",
                ),
                payload=telemetry_payload(
                    point=TEMPERATURE_POINT,
                    event_id=f"manual-temp-{cycle:06d}",
                    sequence=sequence[TEMPERATURE_POINT.point_ref],
                    value=temperature,
                    value_raw=f"{temperature:.1f}",
                ),
            )

            switch_on = cycle % 2 == 1
            sequence[SWITCH_FEEDBACK_POINT.point_ref] += 1
            publish_json(
                client,
                topic=point_topic(
                    topic_root=args.topic_root,
                    object_id=args.object_id,
                    agent_id=args.agent_id,
                    source_id=args.source_id,
                    point=SWITCH_FEEDBACK_POINT,
                    suffix="event",
                ),
                payload=telemetry_payload(
                    point=SWITCH_FEEDBACK_POINT,
                    event_id=f"manual-switch-{cycle:06d}",
                    sequence=sequence[SWITCH_FEEDBACK_POINT.point_ref],
                    value=switch_on,
                    value_raw="01" if switch_on else "00",
                ),
            )

            if args.count == 0 or cycle < args.count:
                time.sleep(args.interval_seconds)
    except KeyboardInterrupt:
        print("STOP requested by user, publishing offline status.")
    finally:
        if not args.no_status:
            try:
                publish_json(
                    client,
                    topic=source_status_topic(
                        topic_root=args.topic_root,
                        object_id=args.object_id,
                        agent_id=args.agent_id,
                        source_id=args.source_id,
                    ),
                    payload=connection_payload("disconnected", reason="manual-stop"),
                    retain=True,
                )
                publish_json(
                    client,
                    topic=agent_lwt_topic(
                        topic_root=args.topic_root,
                        object_id=args.object_id,
                        agent_id=args.agent_id,
                    ),
                    payload=lwt_payload("offline"),
                    retain=True,
                )
            except Exception as exc:  # pragma: no cover - best effort shutdown path.
                print(f"WARNING failed to publish shutdown status: {exc}")

        client.disconnect()
        client.loop_stop()
        print("DISCONNECTED")

    return 0


def main() -> int:
    args = parse_args()
    if not args.password and args.username:
        raise SystemExit("--password is required when --username is set")
    return run(args)


if __name__ == "__main__":
    raise SystemExit(main())
