from __future__ import annotations

from pathlib import Path
from uuid import uuid4


def load_or_create_agent_id(id_file: Path) -> str:
    if id_file.exists():
        value = id_file.read_text(encoding="utf-8").strip()
        if value:
            return value
    id_file.parent.mkdir(parents=True, exist_ok=True)
    agent_id = str(uuid4())
    id_file.write_text(f"{agent_id}\n", encoding="utf-8")
    return agent_id

