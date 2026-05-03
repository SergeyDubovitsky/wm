from __future__ import annotations


class ApplicationError(RuntimeError):
    """Base class for platform configuration application errors."""


class DuplicateTenantError(ApplicationError):
    def __init__(self, tenant_id: str) -> None:
        super().__init__(f"Tenant {tenant_id!r} already exists")
        self.tenant_id = tenant_id
