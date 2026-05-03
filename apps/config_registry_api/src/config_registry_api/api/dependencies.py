from __future__ import annotations

from collections.abc import Callable

from fastapi import Request

from config_registry_api.application.ports.unit_of_work import UnitOfWork

UnitOfWorkFactory = Callable[[], UnitOfWork]


def get_unit_of_work_factory(request: Request) -> UnitOfWorkFactory:
    return request.app.state.unit_of_work_factory
