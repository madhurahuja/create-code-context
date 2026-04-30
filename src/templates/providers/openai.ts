export const openAiMcpTemplate = `{
  "mcpServers": {
    "github": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "mcp-github"],
      "env": {
        "GITHUB_TOKEN": "\${GITHUB_TOKEN}"
      }
    }
  }
}`;

export const openAiSettingsTemplate = `{
  "model": "gpt-4.1",
  "temperature": 0.2,
  "safety": {
    "allowDestructiveCommands": false
  },
  "hooks": {
    "afterWrite": ["npm run lint"]
  }
}`;

export const openAiCmdReviewTemplate = `# Review Command
Review staged changes against project context and guardrails.

## Steps
1. Read staged git diff.
2. Validate changes against CONTEXT_PROMPT.md and GUARDRAILS.md.
3. Report defects and risky assumptions.
`;

export const openAiCmdTestTemplate = `# Test Command
Run test suite and summarize outcomes.

## Steps
1. Run npm test.
2. Summarize failing suites and error causes.
3. Suggest minimal safe fixes.
`;

export const openAiAgentTemplate = `name: code-reviewer
description: Reviews code changes and flags regressions
tools:
  - bash
  - git
capabilities:
  - execute_tests
  - read_file
`;

export const openAiSkillTemplate = `---
name: code-review
description: Rules for architecture and risk review
---

# Code Review Protocol
1. Focus on architectural boundaries and coupling.
2. Catch security and privacy leaks.
3. Call out missing tests for behavior changes.
`;
