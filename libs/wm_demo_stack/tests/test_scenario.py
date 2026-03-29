from __future__ import annotations

from dataclasses import replace

import pytest

from wm_demo_stack.cli import settings_from_args
from wm_demo_stack.models import (
    SWITCH_FEEDBACK_POINT,
    TEMPERATURE_POINT,
    BrokerConfig,
    DemoSettings,
    TopicScope,
    WaveConfig,
)
from wm_demo_stack.scenario import GrafanaDemoScenario, run_demo


class FakeRuntime:
    def __init__(self) -> None:
        self.current = 0.0
        self.now_index = 0
        self.sleep_calls: list[float] = []

    def now_utc_iso(self) -> str:
        self.now_index += 1
        return f"2026-03-29T11:00:{self.now_index:02d}Z"

    def monotonic(self) -> float:
        return self.current

    def sleep(self, seconds: float) -> None:
        self.sleep_calls.append(seconds)
        self.current += seconds


class FakePublisher:
    def __init__(self) -> None:
        self.messages: list[object] = []

    def publish(self, message: object) -> None:
        self.messages.append(message)

    def close(self) -> None:
        return None


def make_settings(**overrides: object) -> DemoSettings:
    settings = DemoSettings(
        broker=BrokerConfig(host="localhost", port=1883),
        username="demo-user",
        password="demo-pass",
        client_id="demo-client",
        scope=TopicScope(
            topic_root="wm/v1",
            object_id="demo-stand-01",
            agent_id="manual-grafana-demo",
            source_id="knx_main",
        ),
        interval_seconds=2.0,
        count=2,
        temperature=WaveConfig(base=23.0, amplitude=1.8, period=8.0),
        publish_metadata=True,
        publish_status=True,
        retained_refresh_seconds=30.0,
    )
    return replace(settings, **overrides)


def test_bootstrap_messages_are_derived_from_settings() -> None:
    scenario = GrafanaDemoScenario(
        settings=make_settings(),
        runtime=FakeRuntime(),
    )

    messages = scenario.bootstrap_messages()

    assert [message.topic for message in messages] == [
        scenario.settings.scope.source_meta_catalog_topic(),
        scenario.settings.scope.source_status_topic(),
        scenario.settings.scope.agent_lwt_topic(),
    ]
    assert all(message.retain for message in messages)
    assert messages[0].payload["agent_id"] == scenario.settings.scope.agent_id
    assert messages[1].payload["state"] == "connected"
    assert "reason" not in messages[1].payload
    assert messages[2].payload["status"] == "online"


def test_run_demo_republishes_retained_messages_on_schedule() -> None:
    runtime = FakeRuntime()
    publisher = FakePublisher()
    settings = make_settings(retained_refresh_seconds=1.0, count=2)

    result = run_demo(
        settings,
        publisher=publisher,
        runtime=runtime,
        output=lambda _: None,
    )

    topics = [message.topic for message in publisher.messages]

    assert result == 0
    assert topics.count(settings.scope.source_meta_catalog_topic()) == 2
    assert topics.count(settings.scope.source_status_topic()) == 3
    assert topics.count(settings.scope.agent_lwt_topic()) == 3
    assert topics.count(settings.scope.point_topic(TEMPERATURE_POINT, "event")) == 2
    assert topics.count(settings.scope.point_topic(SWITCH_FEEDBACK_POINT, "event")) == 2
    assert runtime.sleep_calls == [2.0]
    assert publisher.messages[-2].payload["state"] == "disconnected"
    assert publisher.messages[-1].payload["status"] == "offline"


def test_settings_from_args_rejects_username_without_password() -> None:
    class Args:
        broker = "mqtt://localhost:1883"
        username = "demo-user"
        password = None
        topic_root = "wm/v1"
        object_id = "demo-stand-01"
        agent_id = "manual-grafana-demo"
        source_id = "knx_main"
        client_id = "demo-client"
        interval_seconds = 2.0
        count = 0
        temperature_base = 23.0
        temperature_amplitude = 1.8
        temperature_period = 8.0
        no_metadata = False
        no_status = False
        retained_refresh_seconds = 30.0

    with pytest.raises(ValueError, match="--password is required"):
        settings_from_args(Args())
