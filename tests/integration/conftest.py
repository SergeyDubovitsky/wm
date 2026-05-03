from __future__ import annotations

import base64
import contextlib
import json
import os
import secrets
import shutil
import socket
import subprocess
import time
import urllib.error
import urllib.request
import uuid
from dataclasses import dataclass
from pathlib import Path

import paho.mqtt.client as mqtt
import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
COMPOSE_FILE = REPO_ROOT / "infra" / "local" / "compose.yaml"
BASE_ENV_FILE = REPO_ROOT / ".env.example"


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
class LocalComposeStack:
    project_name: str
    env_file: Path

    def compose(
        self,
        *args: str,
        check: bool = True,
        input: str | None = None,
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
            input=input,
            check=check,
            timeout=timeout,
        )

    def logs(self) -> str:
        result = self.compose("logs", "--no-color", check=False, timeout=120)
        return "\n".join(part for part in (result.stdout, result.stderr) if part).strip()


@dataclass(frozen=True)
class LocalMqttStack(LocalComposeStack):
    mqtt_port: int
    mqtt_username: str
    mqtt_password: str

    def wait_for_mqtt(self, timeout: float = 90.0) -> None:
        deadline = time.monotonic() + timeout
        last_error = "MQTT broker has not accepted connections yet."

        while time.monotonic() < deadline:
            client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
            client.username_pw_set(self.mqtt_username, self.mqtt_password)
            try:
                rc = client.connect("127.0.0.1", self.mqtt_port, keepalive=20)
                if rc == mqtt.MQTT_ERR_SUCCESS:
                    client.disconnect()
                    return
                last_error = f"connect rc={rc}"
            except OSError as exc:
                last_error = f"{type(exc).__name__}: {exc}"
            finally:
                with contextlib.suppress(Exception):
                    client.disconnect()
            time.sleep(1)

        raise AssertionError(
            f"MQTT broker did not become healthy within {timeout:.0f}s. "
            f"Last error: {last_error}\n\nCompose logs:\n{self.logs()}"
        )


@dataclass(frozen=True)
class LocalPlatformStack(LocalMqttStack):
    kafka_port: int
    redpanda_connect_port: int

    def wait_for_kafka(self, timeout: float = 120.0) -> None:
        deadline = time.monotonic() + timeout
        last_error = "Kafka broker has not accepted commands yet."

        while time.monotonic() < deadline:
            result = self.compose(
                "exec",
                "-T",
                "kafka",
                "/opt/kafka/bin/kafka-topics.sh",
                "--bootstrap-server",
                "kafka:19092",
                "--list",
                check=False,
                timeout=30,
            )
            if result.returncode == 0:
                return
            last_error = "\n".join(
                part for part in (result.stdout, result.stderr) if part
            ).strip()
            time.sleep(1)

        raise AssertionError(
            f"Kafka did not become healthy within {timeout:.0f}s. "
            f"Last error: {last_error}\n\nCompose logs:\n{self.logs()}"
        )

    def wait_for_redpanda_connect(self, timeout: float = 90.0) -> None:
        deadline = time.monotonic() + timeout
        last_error = "Redpanda Connect HTTP port is not open yet."

        while time.monotonic() < deadline:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
                sock.settimeout(2)
                try:
                    sock.connect(("127.0.0.1", self.redpanda_connect_port))
                    return
                except OSError as exc:
                    last_error = f"{type(exc).__name__}: {exc}"
            time.sleep(1)

        raise AssertionError(
            f"Redpanda Connect did not become reachable within {timeout:.0f}s. "
            f"Last error: {last_error}\n\nCompose logs:\n{self.logs()}"
        )

    def consume_kafka_json(
        self,
        topic: str,
        *,
        timeout: float = 30.0,
    ) -> tuple[str, dict[str, object]]:
        deadline = time.monotonic() + timeout
        last_output = ""

        while time.monotonic() < deadline:
            result = self.compose(
                "exec",
                "-T",
                "kafka",
                "/opt/kafka/bin/kafka-console-consumer.sh",
                "--bootstrap-server",
                "kafka:19092",
                "--topic",
                topic,
                "--from-beginning",
                "--max-messages",
                "1",
                "--timeout-ms",
                "5000",
                "--property",
                "print.key=true",
                "--property",
                "key.separator=\t",
                check=False,
                timeout=20,
            )
            output = result.stdout.strip()
            last_output = "\n".join(
                part for part in (result.stdout, result.stderr) if part
            ).strip()
            for line in reversed(output.splitlines()):
                if "\t" in line:
                    key, _, payload_json = line.partition("\t")
                else:
                    key = ""
                    payload_json = line
                try:
                    return key, json.loads(payload_json)
                except json.JSONDecodeError:
                    # Kafka CLI may print warnings to stdout before the record.
                    continue
            time.sleep(1)

        raise AssertionError(
            f"Kafka topic {topic!r} did not receive a JSON record within "
            f"{timeout:.0f}s.\n\nLast consumer output:\n{last_output}\n\n"
            f"Compose logs:\n{self.logs()}"
        )

    def produce_kafka_text(
        self,
        topic: str,
        value: str,
        *,
        key: str | None = None,
        timeout: int = 30,
    ) -> None:
        args = [
            "exec",
            "-T",
            "kafka",
            "/opt/kafka/bin/kafka-console-producer.sh",
            "--bootstrap-server",
            "kafka:19092",
            "--topic",
            topic,
        ]
        input_text = value + "\n"
        if key is not None:
            args.extend(
                [
                    "--property",
                    "parse.key=true",
                    "--property",
                    "key.separator=\t",
                ]
            )
            input_text = f"{key}\t{value}\n"

        result = self.compose(
            *args,
            input=input_text,
            check=False,
            timeout=timeout,
        )
        if result.returncode != 0:
            raise AssertionError(
                f"Kafka producer failed for topic {topic!r}.\n\n"
                f"stdout:\n{result.stdout}\n\nstderr:\n{result.stderr}"
            )


@dataclass(frozen=True)
class LocalStorageStack(LocalPlatformStack):
    clickhouse_http_port: int
    clickhouse_native_port: int
    kafka_connect_rest_port: int
    kafka_connect_jmx_port: int

    def wait_for_clickhouse(self, timeout: float = 120.0) -> None:
        deadline = time.monotonic() + timeout
        last_error = "ClickHouse has not accepted queries yet."

        while time.monotonic() < deadline:
            result = self.clickhouse_query("SELECT 1", check=False)
            if result.returncode == 0:
                return
            last_error = "\n".join(
                part for part in (result.stdout, result.stderr) if part
            ).strip()
            time.sleep(1)

        raise AssertionError(
            f"ClickHouse did not become healthy within {timeout:.0f}s. "
            f"Last error: {last_error}\n\nCompose logs:\n{self.logs()}"
        )

    def wait_for_kafka_connect(self, timeout: float = 180.0) -> None:
        deadline = time.monotonic() + timeout
        url = f"http://127.0.0.1:{self.kafka_connect_rest_port}/connectors"
        last_error = "Kafka Connect REST API is not reachable yet."

        while time.monotonic() < deadline:
            try:
                with urllib.request.urlopen(url, timeout=5) as response:
                    if response.status == 200:
                        return
            except (OSError, urllib.error.URLError) as exc:
                last_error = f"{type(exc).__name__}: {exc}"
            time.sleep(1)

        raise AssertionError(
            f"Kafka Connect did not become ready within {timeout:.0f}s. "
            f"Last error: {last_error}\n\nCompose logs:\n{self.logs()}"
        )

    def clickhouse_query(
        self,
        query: str,
        *,
        check: bool = True,
        timeout: int = 30,
    ) -> subprocess.CompletedProcess[str]:
        return self.compose(
            "exec",
            "-T",
            "clickhouse",
            "clickhouse-client",
            "--user",
            "wm",
            "--password",
            "change-me-local-clickhouse",
            "--database",
            "wm",
            "--query",
            query,
            check=check,
            timeout=timeout,
        )

    def apply_clickhouse_migrations(self) -> None:
        result = subprocess.run(
            [
                "uv",
                "run",
                "--env-file",
                str(self.env_file),
                "wm-clickhouse",
                "migrate",
                "up",
            ],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
            check=False,
            timeout=120,
        )
        if result.returncode != 0:
            raise AssertionError(
                "ClickHouse migrations failed.\n\n"
                f"stdout:\n{result.stdout}\n\nstderr:\n{result.stderr}"
            )

    def apply_kafka_connect_connector(self) -> None:
        result = subprocess.run(
            [
                "uv",
                "run",
                "--env-file",
                str(self.env_file),
                "python",
                "infra/local/kafka-connect/bootstrap_connector.py",
                "--connect-url",
                f"http://127.0.0.1:{self.kafka_connect_rest_port}",
            ],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
            check=False,
            timeout=180,
        )
        if result.returncode != 0:
            raise AssertionError(
                "Kafka Connect connector bootstrap failed.\n\n"
                f"stdout:\n{result.stdout}\n\nstderr:\n{result.stderr}"
            )

    def wait_for_clickhouse_value(
        self,
        query: str,
        *,
        timeout: float = 60.0,
    ) -> str:
        deadline = time.monotonic() + timeout
        last_output = ""

        while time.monotonic() < deadline:
            result = self.clickhouse_query(query, check=False, timeout=30)
            last_output = "\n".join(
                part for part in (result.stdout, result.stderr) if part
            ).strip()
            if result.returncode == 0 and result.stdout.strip():
                return result.stdout.strip()
            time.sleep(1)

        raise AssertionError(
            f"ClickHouse query did not return a value within {timeout:.0f}s.\n\n"
            f"Query:\n{query}\n\nLast output:\n{last_output}\n\n"
            f"Compose logs:\n{self.logs()}"
        )


@dataclass(frozen=True)
class LocalGrafanaClickHouseStack(LocalComposeStack):
    clickhouse_http_port: int
    clickhouse_native_port: int
    grafana_port: int
    grafana_admin_user: str
    grafana_admin_password: str

    def wait_for_clickhouse(self, timeout: float = 120.0) -> None:
        deadline = time.monotonic() + timeout
        last_error = "ClickHouse has not accepted queries yet."

        while time.monotonic() < deadline:
            result = self.clickhouse_query("SELECT 1", check=False)
            if result.returncode == 0:
                return
            last_error = "\n".join(
                part for part in (result.stdout, result.stderr) if part
            ).strip()
            time.sleep(1)

        raise AssertionError(
            f"ClickHouse did not become healthy within {timeout:.0f}s. "
            f"Last error: {last_error}\n\nCompose logs:\n{self.logs()}"
        )

    def clickhouse_query(
        self,
        query: str,
        *,
        check: bool = True,
        timeout: int = 30,
    ) -> subprocess.CompletedProcess[str]:
        return self.compose(
            "exec",
            "-T",
            "clickhouse",
            "clickhouse-client",
            "--user",
            "wm",
            "--password",
            "change-me-local-clickhouse",
            "--database",
            "wm",
            "--query",
            query,
            check=check,
            timeout=timeout,
        )

    def apply_clickhouse_migrations(self) -> None:
        result = subprocess.run(
            [
                "uv",
                "run",
                "--env-file",
                str(self.env_file),
                "wm-clickhouse",
                "migrate",
                "up",
            ],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
            check=False,
            timeout=120,
        )
        if result.returncode != 0:
            raise AssertionError(
                "ClickHouse migrations failed.\n\n"
                f"stdout:\n{result.stdout}\n\nstderr:\n{result.stderr}"
            )

    def wait_for_grafana(self, timeout: float = 180.0) -> None:
        deadline = time.monotonic() + timeout
        last_error = "Grafana has not accepted API requests yet."

        while time.monotonic() < deadline:
            try:
                health = self.grafana_json("GET", "/api/health")
                if health.get("database") == "ok":
                    return
                last_error = json.dumps(health, sort_keys=True)
            except (OSError, urllib.error.URLError) as exc:
                last_error = f"{type(exc).__name__}: {exc}"
            time.sleep(1)

        raise AssertionError(
            f"Grafana did not become healthy within {timeout:.0f}s. "
            f"Last error: {last_error}\n\nCompose logs:\n{self.logs()}"
        )

    def grafana_json(
        self,
        method: str,
        path: str,
        payload: dict[str, object] | None = None,
        *,
        timeout: int = 30,
    ) -> dict[str, object] | list[object]:
        url = f"http://127.0.0.1:{self.grafana_port}{path}"
        data = None
        if payload is not None:
            data = json.dumps(payload).encode()
        request = urllib.request.Request(url, data=data, method=method)
        request.add_header("Accept", "application/json")
        request.add_header("Content-Type", "application/json")
        token = base64.b64encode(
            f"{self.grafana_admin_user}:{self.grafana_admin_password}".encode()
        ).decode()
        request.add_header("Authorization", f"Basic {token}")

        with urllib.request.urlopen(request, timeout=timeout) as response:
            response_text = response.read().decode()
        return json.loads(response_text) if response_text else {}


@dataclass(frozen=True)
class LocalConfigRegistryPostgresStack(LocalComposeStack):
    postgres_port: int
    database_url: str

    def wait_for_postgres(self, timeout: float = 90.0) -> None:
        deadline = time.monotonic() + timeout
        last_error = "PostgreSQL has not accepted connections yet."

        while time.monotonic() < deadline:
            result = self.compose(
                "exec",
                "-T",
                "postgres",
                "pg_isready",
                "-h",
                "127.0.0.1",
                "-p",
                "5432",
                "-U",
                "wm",
                "-d",
                "wm_config_registry",
                check=False,
                timeout=30,
            )
            if result.returncode == 0:
                return
            last_error = "\n".join(
                part for part in (result.stdout, result.stderr) if part
            ).strip()
            time.sleep(1)

        raise AssertionError(
            f"PostgreSQL did not become healthy within {timeout:.0f}s. "
            f"Last error: {last_error}\n\nCompose logs:\n{self.logs()}"
        )

    def apply_config_registry_migrations(self) -> None:
        result = subprocess.run(
            [
                "uv",
                "run",
                "--env-file",
                str(self.env_file),
                "--package",
                "config-registry",
                "alembic",
                "-c",
                "apps/config_registry/alembic.ini",
                "upgrade",
                "head",
            ],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
            check=False,
            timeout=120,
        )
        if result.returncode != 0:
            raise AssertionError(
                "Config Registry migrations failed.\n\n"
                f"stdout:\n{result.stdout}\n\nstderr:\n{result.stderr}"
            )


def publish_json_message(
    *,
    host: str,
    port: int,
    username: str,
    password: str,
    topic: str,
    payload: dict[str, object],
    retain: bool = False,
) -> None:
    client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
    client.username_pw_set(username, password)
    client.connect(host, port, keepalive=20)
    client.loop_start()
    try:
        message_info = client.publish(topic, json.dumps(payload), qos=1, retain=retain)
        message_info.wait_for_publish(timeout=10)
        if not message_info.is_published():
            raise AssertionError("MQTT publish did not complete within 10 seconds.")
        if message_info.rc != mqtt.MQTT_ERR_SUCCESS:
            raise AssertionError(f"MQTT publish failed with rc={message_info.rc}.")
    finally:
        with contextlib.suppress(Exception):
            client.disconnect()
        client.loop_stop()


@pytest.fixture()
def local_stack(tmp_path_factory: pytest.TempPathFactory) -> LocalMqttStack:
    if not _docker_is_available():
        pytest.skip("Docker Compose is required for MQTT integration tests.")

    env_values = _read_env_file(BASE_ENV_FILE)
    mqtt_port = _reserve_free_port()
    mqtt_ws_port = _reserve_free_port()
    mqtt_username = f"wm_test_{uuid.uuid4().hex[:8]}"
    mqtt_password = secrets.token_urlsafe(18)

    env_values.update(
        {
            "MQTT_PORT": str(mqtt_port),
            "MQTT_WS_PORT": str(mqtt_ws_port),
            "MQTT_USERNAME": mqtt_username,
            "MQTT_PASSWORD": mqtt_password,
            "MQTT_BROKER": f"mqtt://127.0.0.1:{mqtt_port}",
        }
    )

    env_dir = tmp_path_factory.mktemp("mqtt-stack")
    env_file = env_dir / ".env.integration"
    _write_env_file(env_file, env_values)

    stack = LocalMqttStack(
        project_name=f"wm-it-{uuid.uuid4().hex[:10]}",
        env_file=env_file,
        mqtt_port=mqtt_port,
        mqtt_username=mqtt_username,
        mqtt_password=mqtt_password,
    )

    try:
        stack.compose("up", "-d", "mqtt-broker", timeout=600)
        stack.wait_for_mqtt()
        yield stack
    except subprocess.CalledProcessError as exc:
        raise AssertionError(
            "Failed to start the local MQTT stack.\n\n"
            f"stdout:\n{exc.stdout}\n\nstderr:\n{exc.stderr}"
        ) from exc
    finally:
        stack.compose("down", "-v", "--remove-orphans", check=False, timeout=300)


@pytest.fixture()
def local_platform_stack(tmp_path_factory: pytest.TempPathFactory) -> LocalPlatformStack:
    if not _docker_is_available():
        pytest.skip("Docker Compose is required for platform integration tests.")

    env_values = _read_env_file(BASE_ENV_FILE)
    mqtt_port = _reserve_free_port()
    mqtt_ws_port = _reserve_free_port()
    kafka_port = _reserve_free_port()
    redpanda_connect_port = _reserve_free_port()
    mqtt_username = f"wm_test_{uuid.uuid4().hex[:8]}"
    mqtt_password = secrets.token_urlsafe(18)

    env_values.update(
        {
            "MQTT_PORT": str(mqtt_port),
            "MQTT_WS_PORT": str(mqtt_ws_port),
            "MQTT_USERNAME": mqtt_username,
            "MQTT_PASSWORD": mqtt_password,
            "MQTT_BROKER": f"mqtt://127.0.0.1:{mqtt_port}",
            "KAFKA_PORT": str(kafka_port),
            "KAFKA_BOOTSTRAP_SERVERS": f"127.0.0.1:{kafka_port}",
            "REDPANDA_CONNECT_PORT": str(redpanda_connect_port),
        }
    )

    env_dir = tmp_path_factory.mktemp("platform-stack")
    env_file = env_dir / ".env.integration"
    _write_env_file(env_file, env_values)

    stack = LocalPlatformStack(
        project_name=f"wm-it-{uuid.uuid4().hex[:10]}",
        env_file=env_file,
        mqtt_port=mqtt_port,
        mqtt_username=mqtt_username,
        mqtt_password=mqtt_password,
        kafka_port=kafka_port,
        redpanda_connect_port=redpanda_connect_port,
    )

    try:
        stack.compose(
            "up",
            "-d",
            "mqtt-broker",
            "kafka",
            "kafka-init",
            "redpanda-connect",
            timeout=900,
        )
        stack.wait_for_mqtt()
        stack.wait_for_kafka()
        stack.wait_for_redpanda_connect()
        yield stack
    except subprocess.CalledProcessError as exc:
        raise AssertionError(
            "Failed to start the local platform stack.\n\n"
            f"stdout:\n{exc.stdout}\n\nstderr:\n{exc.stderr}"
        ) from exc
    finally:
        stack.compose("down", "-v", "--remove-orphans", check=False, timeout=300)


@pytest.fixture()
def local_storage_stack(tmp_path_factory: pytest.TempPathFactory) -> LocalStorageStack:
    if not _docker_is_available():
        pytest.skip("Docker Compose is required for storage integration tests.")

    env_values = _read_env_file(BASE_ENV_FILE)
    mqtt_port = _reserve_free_port()
    mqtt_ws_port = _reserve_free_port()
    kafka_port = _reserve_free_port()
    redpanda_connect_port = _reserve_free_port()
    clickhouse_http_port = _reserve_free_port()
    clickhouse_native_port = _reserve_free_port()
    kafka_connect_rest_port = _reserve_free_port()
    kafka_connect_jmx_port = _reserve_free_port()
    mqtt_username = f"wm_test_{uuid.uuid4().hex[:8]}"
    mqtt_password = secrets.token_urlsafe(18)

    env_values.update(
        {
            "MQTT_PORT": str(mqtt_port),
            "MQTT_WS_PORT": str(mqtt_ws_port),
            "MQTT_USERNAME": mqtt_username,
            "MQTT_PASSWORD": mqtt_password,
            "MQTT_BROKER": f"mqtt://127.0.0.1:{mqtt_port}",
            "KAFKA_PORT": str(kafka_port),
            "KAFKA_BOOTSTRAP_SERVERS": f"127.0.0.1:{kafka_port}",
            "REDPANDA_CONNECT_PORT": str(redpanda_connect_port),
            "CLICKHOUSE_HOST": "127.0.0.1",
            "CLICKHOUSE_HTTP_PORT": str(clickhouse_http_port),
            "CLICKHOUSE_NATIVE_PORT": str(clickhouse_native_port),
            "KAFKA_CONNECT_REST_PORT": str(kafka_connect_rest_port),
            "KAFKA_CONNECT_JMX_PORT": str(kafka_connect_jmx_port),
            "KAFKA_CONNECT_URL": f"http://127.0.0.1:{kafka_connect_rest_port}",
        }
    )

    env_dir = tmp_path_factory.mktemp("storage-stack")
    env_file = env_dir / ".env.integration"
    _write_env_file(env_file, env_values)

    stack = LocalStorageStack(
        project_name=f"wm-it-{uuid.uuid4().hex[:10]}",
        env_file=env_file,
        mqtt_port=mqtt_port,
        mqtt_username=mqtt_username,
        mqtt_password=mqtt_password,
        kafka_port=kafka_port,
        redpanda_connect_port=redpanda_connect_port,
        clickhouse_http_port=clickhouse_http_port,
        clickhouse_native_port=clickhouse_native_port,
        kafka_connect_rest_port=kafka_connect_rest_port,
        kafka_connect_jmx_port=kafka_connect_jmx_port,
    )

    try:
        stack.compose("build", "kafka-connect", timeout=1200)
        stack.compose(
            "up",
            "-d",
            "mqtt-broker",
            "kafka",
            "kafka-init",
            "redpanda-connect",
            "clickhouse",
            "kafka-connect",
            timeout=900,
        )
        stack.wait_for_mqtt()
        stack.wait_for_kafka()
        stack.wait_for_redpanda_connect()
        stack.wait_for_clickhouse()
        stack.apply_clickhouse_migrations()
        stack.wait_for_kafka_connect()
        stack.apply_kafka_connect_connector()
        yield stack
    except subprocess.CalledProcessError as exc:
        raise AssertionError(
            "Failed to start the local storage stack.\n\n"
            f"stdout:\n{exc.stdout}\n\nstderr:\n{exc.stderr}"
        ) from exc
    finally:
        stack.compose("down", "-v", "--remove-orphans", check=False, timeout=300)


@pytest.fixture()
def local_grafana_clickhouse_stack(
    tmp_path_factory: pytest.TempPathFactory,
) -> LocalGrafanaClickHouseStack:
    if not _docker_is_available():
        pytest.skip("Docker Compose is required for Grafana integration tests.")

    env_values = _read_env_file(BASE_ENV_FILE)
    clickhouse_http_port = _reserve_free_port()
    clickhouse_native_port = _reserve_free_port()
    grafana_port = _reserve_free_port()
    grafana_admin_user = f"wm_admin_{uuid.uuid4().hex[:8]}"
    grafana_admin_password = secrets.token_urlsafe(18)

    env_values.update(
        {
            "CLICKHOUSE_HOST": "127.0.0.1",
            "CLICKHOUSE_HTTP_PORT": str(clickhouse_http_port),
            "CLICKHOUSE_NATIVE_PORT": str(clickhouse_native_port),
            "GRAFANA_PORT": str(grafana_port),
            "GRAFANA_ADMIN_USER": grafana_admin_user,
            "GRAFANA_ADMIN_PASSWORD": grafana_admin_password,
        }
    )

    env_dir = tmp_path_factory.mktemp("grafana-clickhouse-stack")
    env_file = env_dir / ".env.integration"
    _write_env_file(env_file, env_values)

    stack = LocalGrafanaClickHouseStack(
        project_name=f"wm-it-{uuid.uuid4().hex[:10]}",
        env_file=env_file,
        clickhouse_http_port=clickhouse_http_port,
        clickhouse_native_port=clickhouse_native_port,
        grafana_port=grafana_port,
        grafana_admin_user=grafana_admin_user,
        grafana_admin_password=grafana_admin_password,
    )

    try:
        stack.compose("build", "grafana", timeout=1200)
        stack.compose("up", "-d", "clickhouse", "grafana", timeout=900)
        stack.wait_for_clickhouse()
        stack.apply_clickhouse_migrations()
        stack.wait_for_grafana()
        yield stack
    except subprocess.CalledProcessError as exc:
        raise AssertionError(
            "Failed to start the local Grafana + ClickHouse stack.\n\n"
            f"stdout:\n{exc.stdout}\n\nstderr:\n{exc.stderr}"
        ) from exc
    finally:
        stack.compose("down", "-v", "--remove-orphans", check=False, timeout=300)


@pytest.fixture()
def local_config_registry_postgres_stack(
    tmp_path_factory: pytest.TempPathFactory,
) -> LocalConfigRegistryPostgresStack:
    if not _docker_is_available():
        pytest.skip("Docker Compose is required for Config Registry integration tests.")

    env_values = _read_env_file(BASE_ENV_FILE)
    postgres_port = _reserve_free_port()
    database_url = (
        "postgresql+asyncpg://wm:change-me-local-postgres"
        f"@127.0.0.1:{postgres_port}/wm_config_registry"
    )

    env_values.update(
        {
            "POSTGRES_HOST": "127.0.0.1",
            "POSTGRES_PORT": str(postgres_port),
            "CONFIG_REGISTRY_DATABASE_URL": database_url,
        }
    )

    env_dir = tmp_path_factory.mktemp("config-registry-postgres-stack")
    env_file = env_dir / ".env.integration"
    _write_env_file(env_file, env_values)

    stack = LocalConfigRegistryPostgresStack(
        project_name=f"wm-it-{uuid.uuid4().hex[:10]}",
        env_file=env_file,
        postgres_port=postgres_port,
        database_url=database_url,
    )

    try:
        stack.compose("up", "-d", "postgres", timeout=300)
        stack.wait_for_postgres()
        stack.apply_config_registry_migrations()
        yield stack
    except subprocess.CalledProcessError as exc:
        raise AssertionError(
            "Failed to start the local Config Registry PostgreSQL stack.\n\n"
            f"stdout:\n{exc.stdout}\n\nstderr:\n{exc.stderr}"
        ) from exc
    finally:
        stack.compose("down", "-v", "--remove-orphans", check=False, timeout=300)
