#!/usr/bin/env node
import{Command as L}from"commander";import*as a from"@clack/prompts";import l from"picocolors";import e from"fs/promises";import t from"path";var u=`# React & Next.js Best Practices

## Core Principles
1. Use Functional Components and React Hooks exclusively.
2. Favor server components by default in Next.js App Router.
3. Keep components small, modular, and focused on a single responsibility.

## State Management
- Use \`useState\` and \`useReducer\` for local state.
- Use Context API or libraries like Zustand for global state.
- Avoid large component states; split them if necessary.

## Styling
- Use Tailwind CSS or CSS Modules.
- Keep styling responsive and mobile-first.
- Use a consistent design system (e.g., Shadcn UI).

## Performance
- Memoize expensive calculations using \`useMemo\` and callbacks with \`useCallback\`.
- Use Next.js \`Image\` component for optimized images.

## Structure
- \`components/\`: Reusable UI components.
- \`app/\` or \`pages/\`: Routing.
- \`lib/\`: Utility functions and shared logic.
- \`hooks/\`: Custom React hooks.
`;var g="# Vue & Nuxt Best Practices\n\n## Core Principles\n1. Use Composition API with `<script setup>` syntax.\n2. Favor single-file components (.vue).\n3. Keep components small and modular.\n\n## State Management\n- Use `ref` and `reactive` for local component state.\n- Use Pinia for robust, type-safe global state management.\n\n## Reactivity\n- Use `computed` for derived state.\n- Use `watch` and `watchEffect` cautiously to avoid side-effects chains.\n\n## Structure\n- `components/`: Auto-imported UI components (in Nuxt).\n- `pages/`: File-based routing.\n- `composables/`: Reusable stateful logic / hooks.\n- `utils/`: Stateless helper functions.\n\n## Performance\n- Use Nuxt SSR/SSG capabilities effectively.\n- Lazy load components using `defineAsyncComponent` or Nuxt's `<Lazy...>` auto-imports.\n";var f=`# Node.js Backend Best Practices

## Core Principles
1. Build stateless applications for better scalability.
2. Use async/await over callbacks or raw promises.
3. Validate all inputs thoroughly (e.g., Zod, Joi).

## Architecture
- Follow MVC (Model-View-Controller) or clean architecture patterns.
- Keep controllers thin and place business logic in services.
- Abstract database interactions behind a data access layer / repository pattern.

## Error Handling
- Use structured error handling.
- Build a centralized error handling middleware.
- Never expose raw stack traces to the client in production.

## Security
- Use Helmet to secure HTTP headers.
- Always hash passwords (bcrypt, Argon2).
- Use CORS middleware and rate limiting.
- Parameterize database queries to prevent SQL injection.

## Structure
- \`src/controllers/\`: Request handlers.
- \`src/services/\`: Business logic.
- \`src/models/\`: Data schemas/entities.
- \`src/middlewares/\`: Custom middlewares.
`;var h=`# Python Backend Best Practices

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
`;var w=`# General Project Best Practices for Claude

## Core Guidelines
1. Keep functions focused and deterministic.
2. Ensure variable and function names are clear and descriptive.
3. Don't hide complex logic in obscure abstractions.
4. If the language supports it, use static typing or strict type checking.

## Testing and Quality
- Always include automated tests for new functionality.
- Configure linters and formatters, and adhere to them strictly.

## Refactoring
- Keep diffs small.
- Extract duplicated code into reusable utility functions.
`;var y=`# Claude Interaction Guidelines
You are assisting with the development of this project.

## Your Responsibilities:
1. Always analyze the existing code before suggesting changes.
2. Consider edge cases and error handling in your responses.
3. Prioritize readability over cleverness.
4. Provide explanations for complex architectural decisions.
5. Emphasize testing and document security implications when relevant.

When writing or editing code, strictly adhere to the guidelines provided in \`CLAUDE.md\` for the specific stack used in this project.
`;var v=`# System Architecture

## Components
- **Frontend/Client**: [Describe UI/Client]
- **Backend/API**: [Describe API/Server]
- **Database**: [Describe Data Layer]

## Data Flow
[Describe how data moves through the system]

## Trade-offs
[Document architectural compromises and why they were made]

## Scaling Strategy
[Document how the system is expected to scale]
`;var b=`# AI Guardrails & Constraints

## Restrictions
1. Do NOT generate code that bypassing authentication checks.
2. Refuse to delete database records unless explicitly instructed with a "FORCE" flag.

## Data Privacy
- Never log, output, or store Personally Identifiable Information (PII) including emails, passwords, and sessions.
- Mask all sensitive data in responses.

## Compliance
- Ensure all logic complies with GDPR/CCPA data handling regulations.
`,x=`# Persistent System Prompt
You are an expert AI engineer embedded into this codebase.

Your primary objective is to assist the user safely, accurately, and deterministically.
Do not make implicit assumptions about business logic. If the business logic is ambiguous, halt execution and request human clarification.
Use the files within the \`CONTEXT/\` and \`PROMPTS/\` directories as your absolute source of truth.
`;var T=`# Tooling & Integrations / Skills

## Available Tools / Skills
The AI has access to the following bounded tools and specialized skills:
1. \`execute_query\`: Run read-only database commands.
2. \`read_file\`: Inspect local workspace files.

## Guidelines
- Validate all parameters before invoking a tool.
- Rely on context before querying externally.
- If a complex workflow exists in the \`SKILLS/\` directory, follow those instructions precisely rather than improvising.
`,P=`# Multi-Agent System Configuration

## Defined Agents
1. **Router Agent**: Analyzes the initial intent and routes to sub-agents.
2. **Coder Agent**: Executes codebase changes.
3. **Reviewer Agent**: Critiques the Coder Agent's diffs.

## Responsibilities & Boundaries
- Ensure the Coder Agent never commits without the Reviewer Agent's 'APPROVED' status.
- Keep agent context boundaries strict to prevent token bloat.
`,C=`# Domain Glossary

- **Entity X**: [Definition]
- **Service Y**: [Definition]
`,S=`# Architecture Decision Records (ADR)

## Example Decision
**Context**: We needed a state management library.
**Options considered**: Redux, Zustand, Context API.
**Chosen**: Zustand
**Consequences**: Lighter bundle size, simpler boilerplate, but fewer standard middlewares.
`,k=`# Frequently Asked Questions

**Q: Why do we use X instead of Y?**
A: Because X provides better type safety and integrates with our existing ORM.
`;var A=`# Profile Context

**Name**: [Your Name]
**Role**: AI/Software Engineer
**Experience**:
- [Experience 1]
- [Experience 2]

**Tone/Persona**: Professional, deeply technical, yet accommodating and clear.
`,R=`# Visitor Intent Map

## Potential Visitors
1. **Recruiters**: Looking for tech stack keywords, impact metrics, and team collaboration examples.
    - *Action*: Serve concise resume highlights.
2. **Peers/Software Engineers**: Looking for implementation details, open-source work, and architecture choices.
    - *Action*: Serve deep-dive technical explanations and GitHub links.
`,E=`# Response Policies

- If interacting with a Recruiter: Emphasize business impact, leadership, and successful delivery.
- If interacting with a Peer: Use highly technical terminology, share code snippets, and explain trade-offs.
- **NEVER** invent experience or projects not listed in the \`PROFILE_CONTEXT.md\`.
`;var I=`{
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
}`,j=`{
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
}`,D=`# Review Command
This command invokes the Claude reviewer agent.

## Steps
1. Read the staged git diff.
2. Cross-reference changes against \`CLAUDE.md\` conventions.
3. Suggest robust refactoring or explicitly state "LGTM".
`,F=`# Test Command
Automatically executes unit testing and logs outputs.

## Steps
1. Run \`npm test\`.
2. Format failing outputs.
3. Fix failures autonomously if complexity is low.
`,U=`name: code-reviewer
description: Validates PRs and suggests refactoring
tools:
  - github-mcp
  - bash
capabilities:
  - execute_tests
  - read_file
`,N=`---
name: code-review
description: Specialized rules for deeply analyzing structural changes
---

# Code Review Protocol
1. Focus on architecture boundaries.
2. Evaluate cyclical dependencies.
3. Ensure no secrets are leaked in test files.
`;var O=new L;O.name("create-claude-context").description("Bootstrap a project with Claude best practices and context").version("1.0.0").action(async()=>{console.clear(),a.intro(l.bgCyan(l.black(" create-claude-context ")));let o=await a.group({name:()=>a.text({message:"What is your project named?",placeholder:"my-claude-project",validate:s=>{if(!s)return"Please enter a project name."}}),framework:()=>a.select({message:"Which framework/environment are you relying on?",options:[{value:"react",label:"React / Next.js"},{value:"vue",label:"Vue / Nuxt"},{value:"node",label:"Node.js (Backend)"},{value:"python",label:"Python (FastAPI / Flask / Django)"},{value:"other",label:"Other / Vanilla"}]}),complexity:()=>a.select({message:"What level of scaffolding do you need?",options:[{value:"basic",label:"Basic (Just CLAUDE.md)"},{value:"minimal",label:"Minimal Starter Set (Core context + Context/Prompts folders)"},{value:"production",label:"Production-Grade (Complete architecture, agents, and tooling context)"},{value:"portfolio",label:"Portfolio AI (Profile context, intent maps)"},{value:"mcp-workspace",label:"Claude Code Workspace (Full .claude folder, MCP config, Skills, Agents)"}]}),generateGuidelines:()=>a.confirm({message:"Generate general Claude usage guidelines?",initialValue:!0})},{onCancel:()=>{a.cancel("Operation cancelled."),process.exit(0)}});a.note(`Setting up Claude context for ${l.cyan(o.name)} using ${l.yellow(o.framework)} template...`,"Progress");let c=o.name,i=t.resolve(process.cwd(),c);try{await e.mkdir(i,{recursive:!0});let s=w;switch(o.framework){case"react":s=u;break;case"vue":s=g;break;case"node":s=f;break;case"python":s=h;break}if(await e.writeFile(t.join(i,"CLAUDE.md"),s,"utf-8"),o.complexity==="minimal"||o.complexity==="production"||o.complexity==="portfolio"||o.complexity==="mcp-workspace"){let r=t.join(i,"CONTEXT"),n=t.join(i,"PROMPTS");await e.mkdir(r,{recursive:!0}),await e.mkdir(n,{recursive:!0}),await e.writeFile(t.join(i,"README.md"),"# "+c+"\\n\\nAutomatically generated.","utf-8"),await e.writeFile(t.join(r,"ARCHITECTURE.md"),v,"utf-8")}if(o.complexity==="production"||o.complexity==="portfolio"||o.complexity==="mcp-workspace"){let r=t.join(i,"SKILLS");await e.mkdir(r,{recursive:!0}),await e.writeFile(t.join(i,"SYSTEM_PROMPT.md"),x,"utf-8"),await e.writeFile(t.join(i,"GUARDRAILS.md"),b,"utf-8"),await e.writeFile(t.join(i,"DECISIONS.md"),S,"utf-8"),await e.writeFile(t.join(i,"FAQ.md"),k,"utf-8"),await e.writeFile(t.join(i,"GLOSSARY.md"),C,"utf-8"),await e.writeFile(t.join(i,"TOOLS.md"),T,"utf-8"),await e.writeFile(t.join(i,"AGENTS.md"),P,"utf-8")}if(o.complexity==="portfolio"&&(await e.writeFile(t.join(i,"PROFILE_CONTEXT.md"),A,"utf-8"),await e.writeFile(t.join(i,"VISITOR_INTENT_MAP.md"),R,"utf-8"),await e.writeFile(t.join(i,"RESPONSE_POLICIES.md"),E,"utf-8")),o.complexity==="mcp-workspace"){let r=t.join(i,".claude"),n=t.join(r,"commands"),p=t.join(r,"skills"),d=t.join(p,"code-review"),m=t.join(i,"agents");await e.mkdir(r,{recursive:!0}),await e.mkdir(n,{recursive:!0}),await e.mkdir(p,{recursive:!0}),await e.mkdir(d,{recursive:!0}),await e.mkdir(m,{recursive:!0}),await e.writeFile(t.join(i,".mcp.json"),I,"utf-8"),await e.writeFile(t.join(r,"settings.json"),j,"utf-8"),await e.writeFile(t.join(n,"review.md"),D,"utf-8"),await e.writeFile(t.join(n,"test-all.md"),F,"utf-8"),await e.writeFile(t.join(d,"SKILL.md"),N,"utf-8"),await e.writeFile(t.join(m,"code-reviewer.yml"),U,"utf-8")}o.generateGuidelines&&await e.writeFile(t.join(i,".claudeprompt"),y,"utf-8")}catch(s){a.cancel(`Failed to scaffold context: ${s instanceof Error?s.message:String(s)}`),process.exit(1)}a.outro(l.green("Successfully bootstrapped Claude project!"))});O.parse(process.argv);
