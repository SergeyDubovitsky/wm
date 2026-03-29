from __future__ import annotations

import math
from collections.abc import Iterable
from dataclasses import dataclass
from typing import Any

from wm_demo_stack.models import (
    POINTS,
    SWITCH_FEEDBACK_POINT,
    TEMPERATURE_POINT,
    DemoSettings,
    PointSpec,
    PublishMessage,
    WaveConfig,
)
from wm_demo_stack.publisher import JsonPublisher
from wm_demo_stack.runtime import RuntimePort


def source_meta_catalog_payload(
    settings: DemoSettings,
    *,
    ts: str,
) -> dict[str, Any]:
    return {
        "message_type": "wm.source.meta.catalog.v1",
        "object_id": settings.scope.object_id,
        "agent_id": settings.scope.agent_id,
        "source_id": settings.scope.source_id,
        "source_type": settings.source_type,
        "ts": ts,
        "points": [point.catalog_entry() for point in POINTS],
    }


def telemetry_payload(
    *,
    point: PointSpec,
    event_id: str,
    sequence: int,
    value: bool | float,
    value_raw: str,
    ts: str,
) -> dict[str, Any]:
    return {
        "message_type": "wm.telemetry.event.v1",
        "event_id": event_id,
        "event_type": (
            "telemetry.changed"
            if point.value_type == "boolean"
            else "telemetry.sample"
        ),
        "ts": ts,
        "observation_mode": "listen",
        "value": value,
        "value_raw": value_raw,
        "quality": "good",
        "sequence": sequence,
    }


def connection_payload(
    state: str,
    *,
    ts: str,
    reason: str | None = None,
) -> dict[str, Any]:
    payload: dict[str, Any] = {
        "message_type": "wm.source.connection.v1",
        "state": state,
        "ts": ts,
    }
    if reason is not None:
        payload["reason"] = reason
    return payload


def lwt_payload(status: str, *, ts: str) -> dict[str, Any]:
    return {
        "message_type": "wm.agent.lwt.v1",
        "status": status,
        "ts": ts,
    }


@dataclass
class GrafanaDemoScenario:
    settings: DemoSettings
    runtime: RuntimePort

    def bootstrap_messages(self) -> list[PublishMessage]:
        ts = self.runtime.now_utc_iso()
        messages: list[PublishMessage] = []

        if self.settings.publish_metadata:
            messages.append(
                PublishMessage(
                    topic=self.settings.scope.source_meta_catalog_topic(),
                    payload=source_meta_catalog_payload(self.settings, ts=ts),
                    retain=True,
                )
            )

        if self.settings.publish_status:
            messages.extend(
                (
                    PublishMessage(
                        topic=self.settings.scope.source_status_topic(),
                        payload=connection_payload("connected", ts=ts),
                        retain=True,
                    ),
                    PublishMessage(
                        topic=self.settings.scope.agent_lwt_topic(),
                        payload=lwt_payload("online", ts=ts),
                        retain=True,
                    ),
                )
            )

        return messages

    def cycle_messages(
        self,
        *,
        cycle: int,
        sequence: dict[str, int],
    ) -> list[PublishMessage]:
        temperature = temperature_value(cycle, wave=self.settings.temperature)
        sequence[TEMPERATURE_POINT.point_ref] += 1

        switch_on = cycle % 2 == 1
        sequence[SWITCH_FEEDBACK_POINT.point_ref] += 1

        return [
            PublishMessage(
                topic=self.settings.scope.point_topic(TEMPERATURE_POINT, "event"),
                payload=telemetry_payload(
                    point=TEMPERATURE_POINT,
                    event_id=f"manual-temp-{cycle:06d}",
                    sequence=sequence[TEMPERATURE_POINT.point_ref],
                    value=temperature,
                    value_raw=f"{temperature:.1f}",
                    ts=self.runtime.now_utc_iso(),
                ),
            ),
            PublishMessage(
                topic=self.settings.scope.point_topic(SWITCH_FEEDBACK_POINT, "event"),
                payload=telemetry_payload(
                    point=SWITCH_FEEDBACK_POINT,
                    event_id=f"manual-switch-{cycle:06d}",
                    sequence=sequence[SWITCH_FEEDBACK_POINT.point_ref],
                    value=switch_on,
                    value_raw="01" if switch_on else "00",
                    ts=self.runtime.now_utc_iso(),
                ),
            ),
        ]

    def shutdown_messages(self, *, reason: str) -> list[PublishMessage]:
        if not self.settings.publish_status:
            return []

        ts = self.runtime.now_utc_iso()
        return [
            PublishMessage(
                topic=self.settings.scope.source_status_topic(),
                payload=connection_payload("disconnected", ts=ts, reason=reason),
                retain=True,
            ),
            PublishMessage(
                topic=self.settings.scope.agent_lwt_topic(),
                payload=lwt_payload("offline", ts=ts),
                retain=True,
            ),
        ]


def publish_messages(
    publisher: JsonPublisher,
    messages: Iterable[PublishMessage],
) -> None:
    for message in messages:
        publisher.publish(message)


def temperature_value(cycle: int, *, wave: WaveConfig) -> float:
    if wave.period <= 0:
        return round(wave.base, 1)
    phase = (cycle / wave.period) * (2 * math.pi)
    return round(wave.base + wave.amplitude * math.sin(phase), 1)


def run_demo(
    settings: DemoSettings,
    *,
    publisher: JsonPublisher,
    runtime: RuntimePort,
    output: callable = print,
) -> int:
    scenario = GrafanaDemoScenario(settings=settings, runtime=runtime)
    sequence = {point.point_ref: 0 for point in POINTS}

    try:
        publish_messages(publisher, scenario.bootstrap_messages())
        next_bootstrap_refresh: float | None = None
        if settings.retained_refresh_seconds > 0:
            next_bootstrap_refresh = (
                runtime.monotonic() + settings.retained_refresh_seconds
            )

        cycle = 0
        while settings.count == 0 or cycle < settings.count:
            current_time = runtime.monotonic()
            if (
                next_bootstrap_refresh is not None
                and current_time >= next_bootstrap_refresh
            ):
                publish_messages(publisher, scenario.bootstrap_messages())
                next_bootstrap_refresh = (
                    current_time + settings.retained_refresh_seconds
                )

            cycle += 1
            publish_messages(
                publisher,
                scenario.cycle_messages(cycle=cycle, sequence=sequence),
            )

            if settings.count == 0 or cycle < settings.count:
                runtime.sleep(settings.interval_seconds)
    except KeyboardInterrupt:
        output("STOP requested by user, publishing offline status.")
    finally:
        try:
            publish_messages(
                publisher,
                scenario.shutdown_messages(reason="manual-stop"),
            )
        except Exception as exc:  # pragma: no cover - best effort shutdown path.
            output(f"WARNING failed to publish shutdown status: {exc}")

    return 0
