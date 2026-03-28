# knx_parser

`knx_parser` is a small `uv`-managed Python package for reading ETS `.knxproj`
archives and exporting a structured YAML view of the project.

## What It Parses

- project metadata from `project.xml`
- areas, lines, and device instances from `0.xml`
- group addresses with formatted KNX address notation
- product names and order numbers from manufacturer `Hardware.xml`
- communication object links to group addresses

## Usage

Run from the package directory:

```bash
cd /Users/srgi0/projects/web-monitoring/knx_parser
uv sync
uv run knx-parser /path/to/project.knxproj
```

Example:

```bash
cd /Users/srgi0/projects/web-monitoring/knx_parser
uv run knx-parser ../.local/Выстовка.knxproj > ../.local/Выстовка.knxproj.yaml
```

## Testing

```bash
cd /Users/srgi0/projects/web-monitoring/knx_parser
uv run pytest
```
