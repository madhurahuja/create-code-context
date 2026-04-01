export const pythonTemplate = `# Python Backend Best Practices

## Core Principles
1. Adopt type hinting extensively (PEP 484).
2. Write clean, readable code following PEP 8 conventions.
3. Keep logic modular, using small classes and functions.

## Architecture
- Use lightweight frameworks (FastAPI, Flask) for microservices.
- Rely on Pydantic for validation and serialization in FastAPI.

## Async
- Use \`asyncio\` and \`async/await\` where applicable, especially for IO-bound work.
- Use async database drivers (e.g., asyncpg for PostgreSQL).

## Tooling
- Use Pytest for testing instead of unittest.
- Use Black for formatting, Ruff or Flake8 for linting.
- Manage dependencies with an environment manager like Poetry or Pipenv.
`;
