export const mcpJsonTemplate = `{
  "mcpServers": {
    "github": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-github"],
      "env": {
        "GITHUB_TOKEN": "\${GITHUB_TOKEN}"
      }
    },
    "postgres": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-postgres"],
      "env": {
        "DATABASE_URL": "\${DATABASE_URL}"
      }
    }
  }
}`;

export const claudeSettingsTemplate = `{
  "permissions": {
    "allow": [],
    "deny": []
  },
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "book",
        "hooks": [
          { "type": "command", "command": "echo 'Scanning logic'" }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "write",
        "hooks": [
          { "type": "command", "command": "npm run lint" }
        ]
      }
    ]
  },
  "env": {
    "MAX_THINKING_TOKENS": "10000",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50"
  }
}`;

export const claudeCmdReviewTemplate = `# Review Command
This command invokes the Claude reviewer agent.

## Steps
1. Read the staged git diff.
2. Cross-reference changes against \`CLAUDE.md\` conventions.
3. Suggest robust refactoring or explicitly state "LGTM".
`;

export const claudeCmdTestTemplate = `# Test Command
Automatically executes unit testing and logs outputs.

## Steps
1. Run \`npm test\`.
2. Format failing outputs.
3. Fix failures autonomously if complexity is low.
`;

export const claudeSubagentTemplate = `name: code-reviewer
description: Validates PRs and suggests refactoring
tools:
  - github-mcp
  - bash
capabilities:
  - execute_tests
  - read_file
`;

export const claudeSkillReviewTemplate = `---
name: code-review
description: Specialized rules for deeply analyzing structural changes
---

# Code Review Protocol
1. Focus on architecture boundaries.
2. Evaluate cyclical dependencies.
3. Ensure no secrets are leaked in test files.
`;
