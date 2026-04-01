export const toolsTemplate = `# Tooling & Integrations / Skills

## Available Tools / Skills
The AI has access to the following bounded tools and specialized skills:
1. \`execute_query\`: Run read-only database commands.
2. \`read_file\`: Inspect local workspace files.

## Guidelines
- Validate all parameters before invoking a tool.
- Rely on context before querying externally.
- If a complex workflow exists in the \`SKILLS/\` directory, follow those instructions precisely rather than improvising.
`;

export const agentsTemplate = `# Multi-Agent System Configuration

## Defined Agents
1. **Router Agent**: Analyzes the initial intent and routes to sub-agents.
2. **Coder Agent**: Executes codebase changes.
3. **Reviewer Agent**: Critiques the Coder Agent's diffs.

## Responsibilities & Boundaries
- Ensure the Coder Agent never commits without the Reviewer Agent's 'APPROVED' status.
- Keep agent context boundaries strict to prevent token bloat.
`;

export const glossaryTemplate = `# Domain Glossary

- **Entity X**: [Definition]
- **Service Y**: [Definition]
`;

export const decisionsTemplate = `# Architecture Decision Records (ADR)

## Example Decision
**Context**: We needed a state management library.
**Options considered**: Redux, Zustand, Context API.
**Chosen**: Zustand
**Consequences**: Lighter bundle size, simpler boilerplate, but fewer standard middlewares.
`;

export const faqTemplate = `# Frequently Asked Questions

**Q: Why do we use X instead of Y?**
A: Because X provides better type safety and integrates with our existing ORM.
`;
