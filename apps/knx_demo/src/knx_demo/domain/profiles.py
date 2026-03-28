from __future__ import annotations

from dataclasses import dataclass
from typing import Mapping


@dataclass(frozen=True)
class EndpointProfile:
    gateway_ip: str
    gateway_port: int
    route_back: bool


DEFAULT_PROFILES: dict[str, EndpointProfile] = {
    "external": EndpointProfile(
        gateway_ip="89.175.14.234",
        gateway_port=7171,
        route_back=True,
    ),
    "local": EndpointProfile(
        gateway_ip="192.168.1.177",
        gateway_port=3671,
        route_back=False,
    ),
}


def resolve_endpoint_profile(
    profile_name: str,
    gateway_ip: str | None = None,
    gateway_port: int | None = None,
    route_back: bool | None = None,
    profiles: Mapping[str, EndpointProfile] = DEFAULT_PROFILES,
) -> EndpointProfile:
    profile = profiles[profile_name]
    return EndpointProfile(
        gateway_ip=gateway_ip or profile.gateway_ip,
        gateway_port=gateway_port or profile.gateway_port,
        route_back=profile.route_back if route_back is None else route_back,
    )
