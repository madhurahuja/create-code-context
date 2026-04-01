---
title: "create-claude-context Documentation"
---

Welcome to the official documentation for **create-claude-context**!

## What is it?
A beautiful, interactive CLI tool to quickly bootstrap Claude-supported projects with essential context markdown files based on Claude best practices. By generating `.claudeprompt` and `CLAUDE.md` files natively, you make your project context immediately understandable to Claude.

## Quick Start

You can run the CLI immediately using `npx` (no installation required):

```bash
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

It will then generate the specifically tailored suite of context files for your stack, making your intent perfectly understandable natively by Claude.
