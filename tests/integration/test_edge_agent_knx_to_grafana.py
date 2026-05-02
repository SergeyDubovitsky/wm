from __future__ import annotations

import json
import re
import shutil
import sqlite3
from datetime import UTC, datetime
from pathlib import Path
from uuid import uuid4

import pytest
from playwright.sync_api import Page, expect

from edge_agent.application.configuration import load_runtime_config
from edge_agent.application.delivery import DeliveryWorker
from edge_agent.application.processing import ObservationProcessor
from edge_agent.domain.events import Observation
from edge_agent.infrastructure.mqtt_publisher import connect_mqtt_publisher
from edge_agent.infrastructure.sqlite_outbox import SQLiteOutbox

pytestmark = pytest.mark.integration

REPO_ROOT = Path(__file__).resolve().parents[2]
DEMO_EDGE_CONFIG_ROOT = REPO_ROOT / "environments" / "demo-stand" / "edge_agent"


def test_demo_knx_edge_cache_delivery_flow_renders_in_grafana(
    local_stack,
    page: Page,
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    screenshot_path = tmp_path / "edge-agent-knx-grafana-e2e.png"
    agent_id = f"edge-it-{uuid4().hex[:8]}"
    config_root = _write_demo_knx_config(
        tmp_path,
        broker=f"mqtt://127.0.0.1:{local_stack.mqtt_port}",
    )
    dashboard_url = (
        local_stack.dashboard_url
        + "&var-object_id=demo-stand-01"
        + "&var-agent_id=%2B"
        + "&var-source_id=knx_main"
        + "&var-point_key=2%252F0%252F0"
    )

    monkeypatch.setenv("MQTT_USERNAME", local_stack.mqtt_username)
    monkeypatch.setenv("MQTT_PASSWORD", local_stack.mqtt_password)
    monkeypatch.setenv("KNX_LOCAL_GATEWAY_IP", "127.0.0.1")
    monkeypatch.setenv("KNX_LOCAL_GATEWAY_PORT", "3671")
    monkeypatch.setenv("KNX_LOCAL_ROUTE_BACK", "false")

    try:
        _login_to_grafana(
            page,
            base_url=local_stack.grafana_url,
            username=local_stack.grafana_user,
            password=local_stack.grafana_password,
        )
        page.goto(dashboard_url, wait_until="domcontentloaded")
        expect(page.locator("body")).to_contain_text("Обзор локального стека", timeout=10_000)
        expect(page.get_by_role("heading", name="Текущее значение")).to_be_visible()
        expect(page.get_by_role("heading", name="Поток telemetry-событий")).to_be_visible()
        expect(page.get_by_role("heading", name="Каталог метаданных источника")).to_be_visible()

        # Grafana MQTT panels subscribe lazily, so activate the metadata panel once
        # before the retained catalog publication happens.
        page.get_by_role("heading", name="Каталог метаданных источника").scroll_into_view_if_needed()
        page.wait_for_timeout(1_000)
        page.evaluate("window.scrollTo(0, 0)")
        page.wait_for_timeout(500)

        runtime = load_runtime_config(config_root)
        processor = ObservationProcessor(runtime, agent_id=agent_id)
        observed_at = datetime.now(tz=UTC).replace(microsecond=0)
        result = processor.process(
            Observation(
                source_id="knx_main",
                point_ref="2/0/0",
                observation_mode="listen",
                value=24.8,
                value_raw="24.8",
                observed_at=observed_at,
            )
        )
        assert result.event is not None

        outbox = SQLiteOutbox(runtime.storage.sqlite_path)
        outbox.initialize()
        record_id = outbox.append(result.event, available_at=observed_at)
        assert _outbox_row(runtime.storage.sqlite_path, record_id) == ("pending", 0)

        publisher = connect_mqtt_publisher(runtime.delivery.mqtt, agent_id=agent_id)
        worker = DeliveryWorker(
            runtime_config=runtime,
            agent_id=agent_id,
            outbox=outbox,
            publisher=publisher,
        )
        try:
            catalog_count = worker.publish_startup_catalogs(now=observed_at)
            delivery_result = worker.deliver_once(now=observed_at)
        finally:
            publisher.close()

        assert catalog_count == 1
        assert delivery_result.reserved_count == 1
        assert delivery_result.published_count == 1
        assert delivery_result.retry_count == 0
        assert delivery_result.dead_letter_count == 0
        assert _outbox_row(runtime.storage.sqlite_path, record_id) == ("sent", 1)

        dashboard = page.locator("body")
        # The current dashboard reliably renders edge-agent data in the event
        # and metadata tables. The upper stat cards still depend on a Grafana
        # MQTT plugin behavior gap, so the e2e assertion stays on the stable
        # end-to-end surfaces instead of flaky panel internals.
        expect(dashboard).to_contain_text(result.event.event_id, timeout=40_000)
        expect(dashboard).to_contain_text("wm.telemetry.event.v1", timeout=10_000)
        expect(dashboard).to_contain_text("telemetry.sample", timeout=10_000)
        expect(dashboard).to_contain_text("listen", timeout=10_000)

        page.get_by_role("heading", name="Каталог метаданных источника").scroll_into_view_if_needed()
        page.wait_for_timeout(1_000)
        publisher = connect_mqtt_publisher(runtime.delivery.mqtt, agent_id=agent_id)
        try:
            worker = DeliveryWorker(
                runtime_config=runtime,
                agent_id=agent_id,
                outbox=outbox,
                publisher=publisher,
            )
            worker.publish_startup_catalogs(now=observed_at)
        finally:
            publisher.close()

        expect(dashboard).to_contain_text("wm.source.meta.catalog.v1", timeout=40_000)
        expect(dashboard).to_contain_text("2/0/0", timeout=10_000)
        expect(dashboard).to_contain_text("temperature", timeout=10_000)
        expect(dashboard).to_contain_text("knx.dpt.9.001", timeout=10_000)
    except Exception as exc:
        page.screenshot(path=str(screenshot_path), full_page=True)
        raise AssertionError(
            "KNX edge-agent -> MQTT -> Grafana integration test failed.\n\n"
            f"Screenshot: {screenshot_path}\n\n"
            f"Compose logs:\n{local_stack.logs()}"
        ) from exc


def _login_to_grafana(page: Page, base_url: str, username: str, password: str) -> None:
    page.goto(f"{base_url}/login", wait_until="domcontentloaded")
    page.get_by_role("textbox", name="Email or username").fill(username)
    page.get_by_role("textbox", name="Password").fill(password)
    page.get_by_role("button", name="Log in").click()
    expect(page).to_have_url(re.compile(r".*/\?orgId=1.*"), timeout=30_000)


def _outbox_row(sqlite_path: Path, record_id: int) -> tuple[str, int]:
    with sqlite3.connect(sqlite_path) as connection:
        row = connection.execute(
            "SELECT status, attempt_count FROM outbox WHERE id = ?",
            (record_id,),
        ).fetchone()
    if row is None:
        raise AssertionError(f"Outbox record {record_id} was not found")
    return str(row[0]), int(row[1])


def _write_demo_knx_config(tmp_path: Path, *, broker: str) -> Path:
    config_root = tmp_path / "edge-agent-config"
    state_dir = tmp_path / "state"
    (config_root / "sources.d").mkdir(parents=True)
    (config_root / "points.d").mkdir(parents=True)
    state_dir.mkdir(parents=True)

    shutil.copy2(
        DEMO_EDGE_CONFIG_ROOT / "sources.d" / "knx-main.yaml",
        config_root / "sources.d" / "knx-main.yaml",
    )
    shutil.copy2(
        DEMO_EDGE_CONFIG_ROOT / "points.d" / "knx-main.yaml",
        config_root / "points.d" / "knx-main.yaml",
    )
    (config_root / "agent.json").write_text(
        json.dumps(
            {
                "agent": {
                    "object_id": "demo-stand-01",
                    "name": "demo-stand-it",
                    "id_file": str(state_dir / "agent_id"),
                },
                "delivery": {
                    "transport": "mqtt",
                    "mqtt": {
                        "enabled": True,
                        "version": "5.0",
                        "broker": broker,
                        "topic_root": "wm/v1",
                        "client_id_prefix": "edge-agent-it",
                        "username_env": "MQTT_USERNAME",
                        "password_env": "MQTT_PASSWORD",
                        "qos": 1,
                        "clean_start": True,
                        "session_expiry_seconds": 0,
                        "telemetry_message_expiry_seconds": 60,
                        "publish_metadata": True,
                        "retain_metadata": True,
                        "publish_connection_status": True,
                        "retain_connection_status": True,
                        "connect_timeout_seconds": 10,
                        "retry_backoff_seconds": [1, 2, 5],
                    },
                },
                "storage": {
                    "sqlite_path": str(state_dir / "outbox.db"),
                    "retention_days": 7,
                    "dead_letter_after_attempts": 20,
                },
                "observability": {
                    "log_level": "INFO",
                    "emit_health_events": True,
                    "metrics_bind": "127.0.0.1:9108",
                },
            }
        ),
        encoding="utf-8",
    )
    return config_root
