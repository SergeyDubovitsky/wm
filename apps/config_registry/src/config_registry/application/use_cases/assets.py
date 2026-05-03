from __future__ import annotations

from dataclasses import dataclass

from config_registry.application.errors import (
    DuplicateAssetError,
    TenantNotFoundError,
)
from config_registry.application.ports.unit_of_work import UnitOfWork
from config_registry.domain.entities import Asset


@dataclass(frozen=True)
class CreateAssetCommand:
    tenant_id: str
    asset_id: str
    name: str
    description: str | None = None


class CreateAsset:
    def __init__(self, unit_of_work: UnitOfWork) -> None:
        self._unit_of_work = unit_of_work

    async def execute(self, command: CreateAssetCommand) -> Asset:
        asset = Asset(
            tenant_id=command.tenant_id,
            asset_id=command.asset_id,
            name=command.name,
            description=command.description,
        )

        async with self._unit_of_work as unit_of_work:
            if await unit_of_work.tenants.get(asset.tenant_id) is None:
                raise TenantNotFoundError(asset.tenant_id)
            if await unit_of_work.assets.get(asset.tenant_id, asset.asset_id) is not None:
                raise DuplicateAssetError(asset.tenant_id, asset.asset_id)
            await unit_of_work.assets.add(asset)
            await unit_of_work.commit()

        return asset


class ListAssets:
    def __init__(self, unit_of_work: UnitOfWork) -> None:
        self._unit_of_work = unit_of_work

    async def execute(self, tenant_id: str) -> list[Asset]:
        async with self._unit_of_work as unit_of_work:
            if await unit_of_work.tenants.get(tenant_id) is None:
                raise TenantNotFoundError(tenant_id)
            return await unit_of_work.assets.list_for_tenant(tenant_id)
