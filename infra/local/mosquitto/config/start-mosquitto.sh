#!/bin/sh
set -eu

: "${MQTT_USERNAME:?MQTT_USERNAME is required}"
: "${MQTT_PASSWORD:?MQTT_PASSWORD is required}"

PASSWORD_FILE="/mosquitto/data/password.txt"

mkdir -p /mosquitto/data /mosquitto/log
rm -f "${PASSWORD_FILE}"
mosquitto_passwd -b -c "${PASSWORD_FILE}" "${MQTT_USERNAME}" "${MQTT_PASSWORD}"
chown mosquitto:mosquitto "${PASSWORD_FILE}"
chmod 600 "${PASSWORD_FILE}"

exec mosquitto -c /mosquitto/config/mosquitto.conf
