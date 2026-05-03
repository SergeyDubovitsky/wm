ARG GRAFANA_BASE_IMAGE=grafana/grafana:12.2.0
FROM ${GRAFANA_BASE_IMAGE}

ARG GRAFANA_CLICKHOUSE_DATASOURCE_VERSION=4.15.0
ENV GF_PATHS_PLUGINS=/var/lib/grafana-plugins

USER root
RUN mkdir -p "${GF_PATHS_PLUGINS}" \
    && grafana cli --pluginsDir "${GF_PATHS_PLUGINS}" plugins install grafana-clickhouse-datasource "${GRAFANA_CLICKHOUSE_DATASOURCE_VERSION}" \
    && chown -R 472:0 "${GF_PATHS_PLUGINS}"
USER 472
