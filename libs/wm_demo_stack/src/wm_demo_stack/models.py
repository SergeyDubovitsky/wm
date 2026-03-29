from __future__ import annotations

from dataclasses import dataclass
from typing import Any
from urllib.parse import quote


@dataclass(frozen=True)
class BrokerConfig:
    host: str
    port: int


@dataclass(frozen=True)
class TopicScope:
    topic_root: str
    object_id: str
    agent_id: str
    source_id: str

    def point_topic(self, point: "PointSpec", suffix: str) -> str:
        return (
            f"{self.topic_root}/objects/{self.object_id}/agents/{self.agent_id}"
            f"/sources/{self.source_id}/points/{point.point_key}/{suffix}"
        )

    def source_status_topic(self) -> str:
        return (
            f"{self.topic_root}/objects/{self.object_id}/agents/{self.agent_id}"
            f"/sources/{self.source_id}/status/connection"
        )

    def source_meta_catalog_topic(self) -> str:
        return (
            f"{self.topic_root}/objects/{self.object_id}/agents/{self.agent_id}"
            f"/sources/{self.source_id}/meta/catalog"
        )

    def agent_lwt_topic(self) -> str:
        return (
            f"{self.topic_root}/objects/{self.object_id}/agents/{self.agent_id}"
            f"/status/lwt"
        )


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

    def catalog_entry(self) -> dict[str, Any]:
        return {
            "point_key": self.point_key,
            "point_ref": self.point_ref,
            "name": self.name,
            "signal_type": self.signal_type,
            "value_type": self.value_type,
            "value_model": self.value_model,
            "unit": self.unit,
            "tags": dict(self.tags),
        }


@dataclass(frozen=True)
class WaveConfig:
    base: float
    amplitude: float
    period: float


@dataclass(frozen=True)
class DemoSettings:
    broker: BrokerConfig
    username: str | None
    password: str | None
    client_id: str
    scope: TopicScope
    interval_seconds: float
    count: int
    temperature: WaveConfig
    publish_metadata: bool
    publish_status: bool
    retained_refresh_seconds: float
    source_type: str = "knx"


@dataclass(frozen=True)
class PublishMessage:
    topic: str
    payload: dict[str, Any]
    qos: int = 1
    retain: bool = False


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
