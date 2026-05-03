from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException, status

from platform_config_api.api.dependencies import (
    UnitOfWorkFactory,
    get_unit_of_work_factory,
)
from platform_config_api.api.schemas.tenants import TenantCreateRequest, TenantResponse
from platform_config_api.application.errors import DuplicateTenantError
from platform_config_api.application.use_cases.tenants import (
    CreateTenant,
    CreateTenantCommand,
    ListTenants,
)
from platform_config_api.domain.value_objects import DomainValidationError

router = APIRouter(prefix="/tenants", tags=["tenants"])


@router.post(
    "",
    response_model=TenantResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_tenant(
    request: TenantCreateRequest,
    unit_of_work_factory: UnitOfWorkFactory = Depends(get_unit_of_work_factory),
) -> TenantResponse:
    try:
        tenant = await CreateTenant(unit_of_work_factory()).execute(
            CreateTenantCommand(tenant_id=request.tenant_id, name=request.name)
        )
    except DuplicateTenantError as exc:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=str(exc),
        ) from exc
    except DomainValidationError as exc:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_CONTENT,
            detail=str(exc),
        ) from exc

    return TenantResponse.from_domain(tenant)


@router.get("", response_model=list[TenantResponse])
async def list_tenants(
    unit_of_work_factory: UnitOfWorkFactory = Depends(get_unit_of_work_factory),
) -> list[TenantResponse]:
    tenants = await ListTenants(unit_of_work_factory()).execute()
    return [TenantResponse.from_domain(tenant) for tenant in tenants]
