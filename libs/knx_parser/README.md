# knx_parser

`knx_parser` is a small Python library inside the monorepo workspace for reading ETS `.knxproj`
archives and exporting a structured YAML view of the project.

## What It Parses

- project metadata from `project.xml`
- areas, lines, and device instances from `0.xml`
- group addresses with formatted KNX address notation
- product names and order numbers from manufacturer `Hardware.xml`
- communication object links to group addresses

## Usage

Run from the repository root:

```bash
uv sync
uv run --package knx-parser knx-parser /path/to/project.knxproj
```

Example:

```bash
uv run --package knx-parser knx-parser ./.local/Выстовка.knxproj > ./.local/Выстовка.knxproj.yaml
```

## Testing

```bash
uv run --package knx-parser pytest libs/knx_parser/tests
```
