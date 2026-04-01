# create-claude-context

A beautiful, interactive CLI tool to quickly bootstrap Claude-supported projects with essential context markdown files based on best practices.

## Usage

You can run the CLI immediately using `npx` (no installation required):

```sh
npx create-claude-context
```

The interactive prompt will ask you for:
1. **Your project name** (A directory will be created)
2. **Your framework/environment** (React, Vue, Node.js, Python, or Other)
3. **Scaffolding Complexity** 
   - *Basic*: Just `CLAUDE.md`
   - *Minimal Starter Set*: Includes `README.md`, `ARCHITECTURE.md`, `PROMPTS/`, `CONTEXT/`
   - *Production-Grade*: Full suite including `SYSTEM_PROMPT.md`, `GUARDRAILS.md`, `AGENTS.md`, `TOOLS.md`, etc.
   - *Portfolio AI*: Specific to AI portfolios (`PROFILE_CONTEXT.md`, etc.)
   - *Claude Code Workspace*: Native scaffolding for Anthropic's new `claude` CLI with `.mcp.json`, `.claude/settings.json`, modular `skills/`, and Subagent routines.
4. **General guidelines** (Whether to include an extra `.claudeprompt` file with interaction rules)

It will then generate the tailored suite of context files for your stack, acting as the perfect permanent memory bank for Claude throughout the lifetime of your repository.

## Development

Install dependencies:
```sh
npm install
```

Run in development mode:
```sh
npm run dev
```

Build for production:
```sh
npm run build
```

## Publishing
This package automatically publishes to NPM via GitHub Actions when a new release or tag (e.g. `v1.0.0`) is pushed to the repository.
