from __future__ import annotations

import argparse
import asyncio
from datetime import UTC, datetime, timedelta

import uvicorn

from config_registry.application.use_cases.config_event_publisher import (
    PublishConfigOutboxBatch,
    PublishConfigOutboxBatchCommand,
)
from config_registry.infrastructure.kafka.config_delivery import (
    ConfluentKafkaConfigRecordPublisher,
)
from config_registry.infrastructure.postgres.unit_of_work import (
    PostgresUnitOfWorkFactory,
)
from config_registry.settings import ConfigRegistrySettings


def main() -> None:
    parser = _build_parser()
    args = parser.parse_args()
    command = args.command or "serve"
    if command == "serve":
        _serve()
        return
    if command == "publish-config-outbox-once":
        asyncio.run(_publish_config_outbox_once(args))
        return
    parser.error(f"Unknown command {command!r}")


def _serve() -> None:
    settings = ConfigRegistrySettings.from_env()
    uvicorn.run(
        "config_registry.main:create_app",
        factory=True,
        host=settings.host,
        port=settings.port,
    )


def _build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="config-registry")
    subparsers = parser.add_subparsers(dest="command")
    subparsers.add_parser("serve", help="Run the Config Registry HTTP API")
    publish_parser = subparsers.add_parser(
        "publish-config-outbox-once",
        help="Publish one batch of pending config outbox records to Kafka",
    )
    publish_parser.add_argument("--limit", type=int)
    publish_parser.add_argument("--lease-seconds", type=int)
    publish_parser.add_argument("--retry-delay-seconds", type=int)
    publish_parser.add_argument("--max-attempts", type=int)
    return parser


async def _publish_config_outbox_once(args: argparse.Namespace) -> None:
    settings = ConfigRegistrySettings.from_env()
    if settings.database_url is None:
        raise SystemExit("CONFIG_REGISTRY_DATABASE_URL must be set")

    unit_of_work_factory = PostgresUnitOfWorkFactory.from_url(settings.database_url)
    publisher = ConfluentKafkaConfigRecordPublisher.from_bootstrap_servers(
        settings.kafka_bootstrap_servers,
        client_id=settings.kafka_client_id,
    )
    try:
        result = await PublishConfigOutboxBatch(
            unit_of_work_factory,
            publisher,
        ).execute(
            PublishConfigOutboxBatchCommand(
                now=datetime.now(tz=UTC),
                limit=args.limit or settings.outbox_batch_limit,
                lease_duration=timedelta(
                    seconds=args.lease_seconds or settings.outbox_lease_seconds
                ),
                retry_delay=timedelta(
                    seconds=(
                        args.retry_delay_seconds
                        or settings.outbox_retry_delay_seconds
                    )
                ),
                max_attempts=args.max_attempts or settings.outbox_max_attempts,
            )
        )
    finally:
        await unit_of_work_factory.dispose()

    print(
        "Config outbox publish batch: "
        f"reserved={result.reserved} "
        f"published={result.published} "
        f"retried={result.retried} "
        f"dead_lettered={result.dead_lettered}"
    )


if __name__ == "__main__":
    main()
