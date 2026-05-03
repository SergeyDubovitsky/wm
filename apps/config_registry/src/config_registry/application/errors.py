from __future__ import annotations


class ApplicationError(RuntimeError):
    """Base class for platform configuration application errors."""


class DuplicateTenantError(ApplicationError):
    def __init__(self, tenant_id: str) -> None:
        super().__init__(f"Tenant {tenant_id!r} already exists")
        self.tenant_id = tenant_id


class TenantNotFoundError(ApplicationError):
    def __init__(self, tenant_id: str) -> None:
        super().__init__(f"Tenant {tenant_id!r} does not exist")
        self.tenant_id = tenant_id


class DuplicateAssetError(ApplicationError):
    def __init__(self, tenant_id: str, asset_id: str) -> None:
        super().__init__(f"Asset {asset_id!r} already exists for tenant {tenant_id!r}")
        self.tenant_id = tenant_id
        self.asset_id = asset_id


class AssetNotFoundError(ApplicationError):
    def __init__(self, tenant_id: str, asset_id: str) -> None:
        super().__init__(f"Asset {asset_id!r} does not exist for tenant {tenant_id!r}")
        self.tenant_id = tenant_id
        self.asset_id = asset_id


class DuplicateAgentError(ApplicationError):
    def __init__(self, tenant_id: str, asset_id: str, agent_id: str) -> None:
        super().__init__(
            f"Agent {agent_id!r} already exists for asset {asset_id!r} "
            f"in tenant {tenant_id!r}"
        )
        self.tenant_id = tenant_id
        self.asset_id = asset_id
        self.agent_id = agent_id
