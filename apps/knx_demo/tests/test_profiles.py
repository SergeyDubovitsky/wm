from knx_demo.domain.profiles import EndpointProfile, resolve_endpoint_profile


def test_resolve_endpoint_profile_uses_defaults() -> None:
    profile = resolve_endpoint_profile("external")

    assert profile == EndpointProfile(
        gateway_ip="89.175.14.234",
        gateway_port=7171,
        route_back=True,
    )


def test_resolve_endpoint_profile_applies_overrides() -> None:
    profile = resolve_endpoint_profile(
        "local",
        gateway_ip="10.0.0.5",
        gateway_port=4000,
        route_back=True,
    )

    assert profile == EndpointProfile(
        gateway_ip="10.0.0.5",
        gateway_port=4000,
        route_back=True,
    )
