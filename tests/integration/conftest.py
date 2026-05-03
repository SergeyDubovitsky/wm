from __future__ import annotations

import contextlib
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
class LocalMqttStack:
    project_name: str
    env_file: Path
    mqtt_port: int
    mqtt_username: str
    mqtt_password: str

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
            if output:
                key, _, payload_json = output.splitlines()[-1].partition("\t")
                return key, json.loads(payload_json)
            time.sleep(1)

        raise AssertionError(
            f"Kafka topic {topic!r} did not receive a JSON record within "
            f"{timeout:.0f}s.\n\nLast consumer output:\n{last_output}\n\n"
            f"Compose logs:\n{self.logs()}"
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
