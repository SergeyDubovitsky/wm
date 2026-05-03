ARG KAFKA_CONNECT_BASE_IMAGE=confluentinc/cp-kafka-connect:7.7.1
FROM ${KAFKA_CONNECT_BASE_IMAGE}

ARG CLICKHOUSE_KAFKA_CONNECT_VERSION=latest

RUN confluent-hub install --no-prompt \
    clickhouse/clickhouse-kafka-connect:${CLICKHOUSE_KAFKA_CONNECT_VERSION}
