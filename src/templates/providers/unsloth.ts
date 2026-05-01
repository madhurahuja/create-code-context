export const unslothMcpTemplate = `{
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

export const unslothSettingsTemplate = `{
  "runtime": {
    "engine": "unsloth",
    "mode": "local-finetuned"
  },
  "model": {
    "family": "llama",
    "quantization": "4bit"
  },
  "hooks": {
    "afterWrite": ["npm run lint"]
  }
}`;

export const unslothCmdReviewTemplate = `# Review Command
Review staged changes against project context and guardrails.

## Steps
1. Read staged git diff.
2. Validate changes against CONTEXT_PROMPT.md and GUARDRAILS.md.
3. Report defects and risky assumptions.
`;

export const unslothCmdTestTemplate = `# Test Command
Run tests and summarize failures for quick triage.

## Steps
1. Run npm test.
2. Group failures by package/module.
3. Suggest minimal safe remediations.
`;

export const unslothAgentTemplate = `name: code-reviewer
description: Reviews code changes and highlights regressions
tools:
  - bash
  - git
capabilities:
  - execute_tests
  - read_file
`;

export const unslothSkillTemplate = `---
name: code-review
description: Rules for architecture, correctness, and safety checks
---

# Code Review Protocol
1. Validate architecture boundaries and module ownership.
2. Catch security, privacy, and reliability risks.
3. Confirm tests exist for behavior-changing diffs.
`;
