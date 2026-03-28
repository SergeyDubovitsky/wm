from __future__ import annotations

from edge_agent.application.identity import load_or_create_agent_id


def test_load_or_create_agent_id_persists_value(tmp_path) -> None:
    id_file = tmp_path / "state" / "agent_id"

    first = load_or_create_agent_id(id_file)
    second = load_or_create_agent_id(id_file)

    assert first == second
    assert id_file.read_text(encoding="utf-8").strip() == first

