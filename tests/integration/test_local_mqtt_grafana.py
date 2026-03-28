from __future__ import annotations

import contextlib
import json
import re
import time
from datetime import UTC, datetime
from pathlib import Path
from uuid import uuid4

import paho.mqtt.client as mqtt
import pytest
from playwright.sync_api import Page, expect

pytestmark = pytest.mark.integration


def _login_to_grafana(page: Page, base_url: str, username: str, password: str) -> None:
    page.goto(f"{base_url}/login", wait_until="domcontentloaded")
    page.get_by_role("textbox", name="Email or username").fill(username)
    page.get_by_role("textbox", name="Password").fill(password)
    page.get_by_role("button", name="Log in").click()
    expect(page).to_have_url(re.compile(r".*/\?orgId=1.*"), timeout=30_000)


def _publish_payload(
    *,
    host: str,
    port: int,
    username: str,
    password: str,
    topic: str,
    payload: dict[str, object],
) -> None:
    client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
    client.username_pw_set(username, password)
    last_error: Exception | None = None
    for _ in range(10):
        try:
            client.connect(host, port, keepalive=20)
            break
        except OSError as exc:
            last_error = exc
            time.sleep(1)
    else:
        raise AssertionError(
            f"MQTT broker did not accept connections on {host}:{port}."
        ) from last_error
    client.loop_start()

    try:
        message_info = client.publish(topic, json.dumps(payload), qos=1)
        message_info.wait_for_publish(timeout=10)
        if not message_info.is_published():
            raise AssertionError("MQTT publish did not complete within 10 seconds.")
        if message_info.rc != mqtt.MQTT_ERR_SUCCESS:
            raise AssertionError(f"MQTT publish failed with rc={message_info.rc}.")
    finally:
        with contextlib.suppress(Exception):
            client.disconnect()
        client.loop_stop()


def test_local_stack_dashboard_renders_live_mqtt_payload(
    local_stack,
    page: Page,
    tmp_path: Path,
) -> None:
    screenshot_path = tmp_path / "grafana-mqtt-smoke.png"
    agent_id = f"wm-it-agent-{uuid4().hex[:8]}"
    event_id = f"wm-it-event-{uuid4().hex[:10]}"
    payload = {
        "message_type": "wm.telemetry.event.v1",
        "event_id": event_id,
        "ts": datetime.now(UTC).isoformat().replace("+00:00", "Z"),
        "name": "temperature",
        "signal_type": "sensor",
        "value_type": "number",
        "value_model": "knx.dpt.9.001",
        "observation_mode": "listen",
        "value": 24.2,
        "value_raw": "24.2",
        "quality": "good",
        "sequence": 1,
        "unit": "C",
        "tags": {"room": "demo", "equipment": "temp_1"},
    }

    try:
        _login_to_grafana(
            page,
            base_url=local_stack.grafana_url,
            username=local_stack.grafana_user,
            password=local_stack.grafana_password,
        )

        page.goto(local_stack.dashboard_url, wait_until="domcontentloaded")
        expect(page.locator("body")).to_contain_text("Local Stack Overview", timeout=10_000)
        expect(page.get_by_role("heading", name="Current Value")).to_be_visible()
        expect(page.get_by_role("heading", name="Latest Quality")).to_be_visible()
        expect(page.get_by_role("heading", name="Numeric Value Trend")).to_be_visible()
        expect(page.get_by_role("heading", name="Telemetry Event Stream")).to_be_visible()
        expect(page.locator("body")).to_contain_text("No data", timeout=10_000)

        _publish_payload(
            host="127.0.0.1",
            port=local_stack.mqtt_port,
            username=local_stack.mqtt_username,
            password=local_stack.mqtt_password,
            topic=(
                "wm/v1/objects/demo-stand-01"
                f"/agents/{agent_id}/sources/knx_main/points/2%2F0%2F0/event"
            ),
            payload=payload,
        )

        dashboard = page.locator("body")
        expect(dashboard).to_contain_text(event_id, timeout=40_000)
        expect(dashboard).to_contain_text("message_type", timeout=10_000)
        expect(dashboard).to_contain_text("event_id", timeout=10_000)
        expect(dashboard).to_contain_text("name", timeout=10_000)
        expect(dashboard).to_contain_text("signal_type", timeout=10_000)
        expect(dashboard).to_contain_text("temperature", timeout=10_000)
    except Exception as exc:
        page.screenshot(path=str(screenshot_path), full_page=True)
        raise AssertionError(
            "MQTT-Grafana integration test failed.\n\n"
            f"Screenshot: {screenshot_path}\n\n"
            f"Compose logs:\n{local_stack.logs()}"
        ) from exc
