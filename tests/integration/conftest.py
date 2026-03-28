from __future__ import annotations

import base64
import json
import os
import secrets
import shutil
import socket
import subprocess
import time
import uuid
from dataclasses import dataclass
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen

import pytest
from playwright.sync_api import Browser, Error as PlaywrightError, Page, sync_playwright

REPO_ROOT = Path(__file__).resolve().parents[2]
COMPOSE_FILE = REPO_ROOT / "infra" / "local" / "compose.yaml"
BASE_ENV_FILE = REPO_ROOT / ".env.example"
GRAFANA_DASHBOARD_UID = "local-stack-overview"
GRAFANA_DATASOURCE_UID = "mqtt-local"
GRAFANA_PLUGIN_ID = "grafana-mqtt-datasource"


def _reserve_free_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.bind(("127.0.0.1", 0))
        sock.listen()
        return int(sock.getsockname()[1])


def _read_env_file(path: Path) -> dict[str, str]:
    values: dict[str, str] = {}
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        values[key.strip()] = value.strip()
    return values


def _write_env_file(path: Path, values: dict[str, str]) -> None:
    ordered_lines = [f"{key}={values[key]}" for key in sorted(values)]
    path.write_text("\n".join(ordered_lines) + "\n", encoding="utf-8")


def _docker_is_available() -> bool:
    if shutil.which("docker") is None:
        return False

    result = subprocess.run(
        ["docker", "compose", "version"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        check=False,
        timeout=30,
    )
    return result.returncode == 0


@dataclass(frozen=True)
class LocalStack:
    project_name: str
    env_file: Path
    mqtt_port: int
    mqtt_username: str
    mqtt_password: str
    grafana_port: int
    grafana_user: str
    grafana_password: str

    @property
    def grafana_url(self) -> str:
        return f"http://127.0.0.1:{self.grafana_port}"

    @property
    def dashboard_url(self) -> str:
        return (
            f"{self.grafana_url}/d/{GRAFANA_DASHBOARD_UID}/local-stack-overview"
            "?orgId=1&from=now-6h&to=now&timezone=browser"
        )

    def compose(
        self,
        *args: str,
        check: bool = True,
        timeout: int = 300,
    ) -> subprocess.CompletedProcess[str]:
        env = os.environ.copy()
        env["LOCAL_STACK_ENV_FILE"] = str(self.env_file)
        return subprocess.run(
            [
                "docker",
                "compose",
                "-p",
                self.project_name,
                "--env-file",
                str(self.env_file),
                "-f",
                str(COMPOSE_FILE),
                *args,
            ],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
            env=env,
            check=check,
            timeout=timeout,
        )

    def logs(self) -> str:
        result = self.compose("logs", "--no-color", check=False, timeout=120)
        return "\n".join(part for part in (result.stdout, result.stderr) if part).strip()

    def _api_request(self, path: str) -> Request:
        credentials = f"{self.grafana_user}:{self.grafana_password}".encode("utf-8")
        token = base64.b64encode(credentials).decode("ascii")
        request = Request(f"{self.grafana_url}{path}")
        request.add_header("Authorization", f"Basic {token}")
        return request

    def api_get_json(self, path: str) -> object:
        with urlopen(self._api_request(path), timeout=5) as response:
            return json.loads(response.read().decode("utf-8"))

    def wait_for_grafana(self, timeout: float = 180.0) -> None:
        deadline = time.monotonic() + timeout
        last_error = "Grafana has not responded yet."

        while time.monotonic() < deadline:
            try:
                health = self.api_get_json("/api/health")
                if isinstance(health, dict) and health.get("database") == "ok":
                    return
                last_error = f"Unexpected health payload: {health!r}"
            except (HTTPError, URLError, TimeoutError, OSError, json.JSONDecodeError) as exc:
                last_error = f"{type(exc).__name__}: {exc}"
            time.sleep(2)

        raise AssertionError(
            f"Grafana did not become healthy within {timeout:.0f}s. "
            f"Last error: {last_error}\n\nCompose logs:\n{self.logs()}"
        )

    def wait_for_provisioning(self, timeout: float = 120.0) -> None:
        deadline = time.monotonic() + timeout
        last_error = "Provisioning has not finished yet."
        search_path = f"/api/search?query={quote('Local Stack Overview')}"

        while time.monotonic() < deadline:
            try:
                datasource = self.api_get_json(f"/api/datasources/uid/{GRAFANA_DATASOURCE_UID}")
                dashboards = self.api_get_json(search_path)
                plugins = self.api_get_json("/api/plugins")
                plugin_ready = isinstance(plugins, list) and any(
                    isinstance(entry, dict)
                    and entry.get("id") == GRAFANA_PLUGIN_ID
                    and entry.get("enabled") is True
                    for entry in plugins
                )
                if (
                    isinstance(datasource, dict)
                    and datasource.get("uid") == GRAFANA_DATASOURCE_UID
                    and isinstance(dashboards, list)
                    and any(
                        isinstance(entry, dict) and entry.get("uid") == GRAFANA_DASHBOARD_UID
                        for entry in dashboards
                    )
                    and plugin_ready
                ):
                    return
                last_error = (
                    "Provisioned resources are incomplete: "
                    f"datasource={datasource!r}, dashboards={dashboards!r}, "
                    f"plugin_ready={plugin_ready!r}"
                )
            except (HTTPError, URLError, TimeoutError, OSError, json.JSONDecodeError) as exc:
                last_error = f"{type(exc).__name__}: {exc}"
            time.sleep(2)

        raise AssertionError(
            f"Grafana provisioning did not finish within {timeout:.0f}s. "
            f"Last error: {last_error}\n\nCompose logs:\n{self.logs()}"
        )


@pytest.fixture(scope="session")
def browser() -> Browser:
    try:
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=True)
            yield browser
            browser.close()
    except PlaywrightError as exc:
        if "Executable doesn't exist" in str(exc):
            pytest.skip(
                "Playwright Chromium browser is not installed. "
                "Run `uv run --group integration playwright install chromium` first."
            )
        raise


@pytest.fixture()
def page(browser: Browser) -> Page:
    context = browser.new_context(viewport={"width": 1600, "height": 1200})
    page = context.new_page()
    yield page
    context.close()


@pytest.fixture()
def local_stack(tmp_path_factory: pytest.TempPathFactory) -> LocalStack:
    if not _docker_is_available():
        pytest.skip("Docker Compose is required for MQTT-Grafana integration tests.")

    env_values = _read_env_file(BASE_ENV_FILE)
    mqtt_port = _reserve_free_port()
    grafana_port = _reserve_free_port()
    mqtt_username = f"wm_test_{uuid.uuid4().hex[:8]}"
    mqtt_password = secrets.token_urlsafe(18)
    grafana_password = secrets.token_urlsafe(18)

    env_values.update(
        {
            "MQTT_PORT": str(mqtt_port),
            "GRAFANA_PORT": str(grafana_port),
            "MQTT_USERNAME": mqtt_username,
            "MQTT_PASSWORD": mqtt_password,
            "MQTT_BROKER": f"mqtt://127.0.0.1:{mqtt_port}",
            "MQTT_DATASOURCE_URI": f"tcp://127.0.0.1:{mqtt_port}",
            "GF_SECURITY_ADMIN_USER": "admin",
            "GF_SECURITY_ADMIN_PASSWORD": grafana_password,
        }
    )

    env_dir = tmp_path_factory.mktemp("mqtt-grafana-stack")
    env_file = env_dir / ".env.integration"
    _write_env_file(env_file, env_values)

    stack = LocalStack(
        project_name=f"wm-it-{uuid.uuid4().hex[:10]}",
        env_file=env_file,
        mqtt_port=mqtt_port,
        mqtt_username=mqtt_username,
        mqtt_password=mqtt_password,
        grafana_port=grafana_port,
        grafana_user="admin",
        grafana_password=grafana_password,
    )

    try:
        stack.compose("up", "-d", timeout=600)
        stack.wait_for_grafana()
        stack.wait_for_provisioning()
        yield stack
    except subprocess.CalledProcessError as exc:
        raise AssertionError(
            "Failed to start the local MQTT-Grafana stack.\n\n"
            f"stdout:\n{exc.stdout}\n\nstderr:\n{exc.stderr}"
        ) from exc
    finally:
        stack.compose("down", "-v", "--remove-orphans", check=False, timeout=300)
