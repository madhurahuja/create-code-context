export const geminiMcpTemplate = `{
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

export const geminiSettingsTemplate = `{
  "model": "gemini-2.5-pro",
  "safetySettings": {
    "allowCodeExecution": true,
    "blockUnsafeContent": true
  },
  "hooks": {
    "afterWrite": ["npm run lint"]
  }
}`;

export const geminiCmdReviewTemplate = `# Review Command
Run code review with architecture and safety focus.

## Steps
1. Inspect staged changes.
2. Compare behavior changes against project context files.
3. Report findings ordered by severity.
`;

export const geminiCmdTestTemplate = `# Test Command
Run project tests and present root-cause summary.

## Steps
1. Run npm test.
2. Group failures by module.
3. Suggest safe remediations.
`;

export const geminiAgentTemplate = `name: code-reviewer
description: Reviews pull requests and test quality
tools:
  - bash
  - git
capabilities:
  - execute_tests
  - read_file
`;

export const geminiSkillTemplate = `---
name: code-review
description: Rules for deep architectural review
---

# Code Review Protocol
1. Validate boundary ownership and module responsibilities.
2. Highlight security and privacy concerns.
3. Confirm tests protect changed behavior.
`;
