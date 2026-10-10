import json
import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
WEB_ROOT = ROOT / "apps" / "web"
PATH_KEYS = {"file", "filepath", "file_path", "filename", "path", "uri"}
PATCH_PATH_PREFIXES = ("*** Update File: ", "*** Add File: ", "+++ b/")
FORMAT_EXTENSIONS = {
    ".css",
    ".html",
    ".js",
    ".json",
    ".jsx",
    ".md",
    ".mdx",
    ".mjs",
    ".scss",
    ".ts",
    ".tsx",
    ".yaml",
    ".yml",
}
LINT_EXTENSIONS = {".js", ".jsx", ".mjs", ".cjs", ".ts", ".tsx"}


def collect_paths(value, key=""):
    if isinstance(value, dict):
        for child_key, child in value.items():
            yield from collect_paths(child, child_key.lower())
    elif isinstance(value, list):
        for child in value:
            yield from collect_paths(child, key)
    elif isinstance(value, str):
        if key in PATH_KEYS:
            yield value
        if key in {"patch", "diff"}:
            for line in value.splitlines():
                for prefix in PATCH_PATH_PREFIXES:
                    if line.startswith(prefix):
                        yield line[len(prefix) :].strip()


def resolve_web_file(raw_path):
    path = raw_path.removeprefix("file://")
    candidate = Path(path)
    if not candidate.is_absolute():
        candidate = ROOT / candidate
    try:
        resolved = candidate.resolve(strict=True)
        resolved.relative_to(WEB_ROOT.resolve())
    except (OSError, ValueError):
        return None
    if not resolved.is_file() or resolved.suffix.lower() not in FORMAT_EXTENSIONS:
        return None
    return resolved


try:
    payload = json.load(sys.stdin)
except (json.JSONDecodeError, UnicodeDecodeError):
    sys.exit(0)

files = sorted(
    {
        resolved
        for raw_path in collect_paths(payload.get("tool_input", {}))
        if (resolved := resolve_web_file(raw_path)) is not None
    }
)
if not files:
    sys.exit(0)

relative_files = [str(path.relative_to(WEB_ROOT)) for path in files]
commands = [
    ["pnpm", "exec", "prettier", "--write", *relative_files],
]
lint_files = [
    path for path in relative_files if Path(path).suffix.lower() in LINT_EXTENSIONS
]
if lint_files:
    commands.append(["pnpm", "exec", "eslint", *lint_files])

for command in commands:
    result = subprocess.run(command, cwd=WEB_ROOT, check=False)
    if result.returncode:
        print(
            json.dumps(
                {
                    "decision": "block",
                    "reason": (
                        f"Post-tool quality command failed with exit code "
                        f"{result.returncode}: {os.path.basename(command[2])}"
                    ),
                    "hookSpecificOutput": {
                        "hookEventName": "PostToolUse",
                        "additionalContext": (
                            "Review the formatting or ESLint output and fix the "
                            "reported issues."
                        ),
                    },
                }
            )
        )
        sys.exit(0)
