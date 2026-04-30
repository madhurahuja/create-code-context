#!/usr/bin/env node
import{Command as Pe}from"commander";import*as n from"@clack/prompts";import i from"picocolors";import v from"fs/promises";import w from"path";import l from"path";import g from"path";var _=`# React & Next.js Best Practices

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
`;var A="# Vue & Nuxt Best Practices\n\n## Core Principles\n1. Use Composition API with `<script setup>` syntax.\n2. Favor single-file components (.vue).\n3. Keep components small and modular.\n\n## State Management\n- Use `ref` and `reactive` for local component state.\n- Use Pinia for robust, type-safe global state management.\n\n## Reactivity\n- Use `computed` for derived state.\n- Use `watch` and `watchEffect` cautiously to avoid side-effects chains.\n\n## Structure\n- `components/`: Auto-imported UI components (in Nuxt).\n- `pages/`: File-based routing.\n- `composables/`: Reusable stateful logic / hooks.\n- `utils/`: Stateless helper functions.\n\n## Performance\n- Use Nuxt SSR/SSG capabilities effectively.\n- Lazy load components using `defineAsyncComponent` or Nuxt's `<Lazy...>` auto-imports.\n";var S=`# Node.js Backend Best Practices

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
`;var k=`# Python Backend Best Practices

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
`;var C=`# General Project Best Practices for Claude

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
`;var R=`# AI Interaction Guidelines
You are assisting with the development of this project.

## Your Responsibilities:
1. Always analyze the existing code before suggesting changes.
2. Consider edge cases and error handling in your responses.
3. Prioritize readability over cleverness.
4. Provide explanations for complex architectural decisions.
5. Emphasize testing and document security implications when relevant.

When writing or editing code, strictly adhere to the guidelines provided in \`CONTEXT_PROMPT.md\` for the specific stack used in this project.
`;var I=`# System Architecture

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
`;var j=`# AI Guardrails & Constraints

## Restrictions
1. Do NOT generate code that bypassing authentication checks.
2. Refuse to delete database records unless explicitly instructed with a "FORCE" flag.

## Data Privacy
- Never log, output, or store Personally Identifiable Information (PII) including emails, passwords, and sessions.
- Mask all sensitive data in responses.

## Compliance
- Ensure all logic complies with GDPR/CCPA data handling regulations.
`,E=`# Persistent System Prompt
You are an expert AI engineer embedded into this codebase.

Your primary objective is to assist the user safely, accurately, and deterministically.
Do not make implicit assumptions about business logic. If the business logic is ambiguous, halt execution and request human clarification.
Use the files within the \`CONTEXT/\` and \`PROMPTS/\` directories, plus top-level policy files, as your source of truth.
`;var U=`# Tooling & Integrations / Skills

## Available Tools / Skills
The AI has access to the following bounded tools and specialized skills:
1. \`execute_query\`: Run read-only database commands.
2. \`read_file\`: Inspect local workspace files.

## Guidelines
- Validate all parameters before invoking a tool.
- Rely on context before querying externally.
- If a complex workflow exists in the \`SKILLS/\` directory, follow those instructions precisely rather than improvising.
`,D=`# Multi-Agent System Configuration

## Defined Agents
1. **Router Agent**: Analyzes the initial intent and routes to sub-agents.
2. **Coder Agent**: Executes codebase changes.
3. **Reviewer Agent**: Critiques the Coder Agent's diffs.

## Responsibilities & Boundaries
- Ensure the Coder Agent never commits without the Reviewer Agent's 'APPROVED' status.
- Keep agent context boundaries strict to prevent token bloat.
`,N=`# Domain Glossary

- **Entity X**: [Definition]
- **Service Y**: [Definition]
`,O=`# Architecture Decision Records (ADR)

## Example Decision
**Context**: We needed a state management library.
**Options considered**: Redux, Zustand, Context API.
**Chosen**: Zustand
**Consequences**: Lighter bundle size, simpler boilerplate, but fewer standard middlewares.
`,L=`# Frequently Asked Questions

**Q: Why do we use X instead of Y?**
A: Because X provides better type safety and integrates with our existing ORM.
`;var M=`# Profile Context

**Name**: [Your Name]
**Role**: AI/Software Engineer
**Experience**:
- [Experience 1]
- [Experience 2]

**Tone/Persona**: Professional, deeply technical, yet accommodating and clear.
`,$=`# Visitor Intent Map

## Potential Visitors
1. **Recruiters**: Looking for tech stack keywords, impact metrics, and team collaboration examples.
    - *Action*: Serve concise resume highlights.
2. **Peers/Software Engineers**: Looking for implementation details, open-source work, and architecture choices.
    - *Action*: Serve deep-dive technical explanations and GitHub links.
`,G=`# Response Policies

- If interacting with a Recruiter: Emphasize business impact, leadership, and successful delivery.
- If interacting with a Peer: Use highly technical terminology, share code snippets, and explain trade-offs.
- **NEVER** invent experience or projects not listed in the \`PROFILE_CONTEXT.md\`.
`;function pe(t){switch(t){case"react":return _;case"vue":return A;case"node":return S;case"python":return k;default:return C}}function F(t){let e=[],o=pe(t.framework);return e.push({path:"CONTEXT_PROMPT.md",content:o}),t.generateGuidelines&&e.push({path:"AI_GUIDELINES.md",content:R}),(t.complexity==="minimal"||t.complexity==="production"||t.complexity==="portfolio"||t.complexity==="mcp-workspace")&&(e.push({path:"README.md",content:`# ${t.projectName}

Automatically generated.`}),e.push({path:g.join("CONTEXT","ARCHITECTURE.md"),content:I})),(t.complexity==="production"||t.complexity==="portfolio"||t.complexity==="mcp-workspace")&&(e.push({path:"SYSTEM_PROMPT.md",content:E}),e.push({path:"GUARDRAILS.md",content:j}),e.push({path:"DECISIONS.md",content:O}),e.push({path:"FAQ.md",content:L}),e.push({path:"GLOSSARY.md",content:N}),e.push({path:"TOOLS.md",content:U}),e.push({path:"AGENTS.md",content:D}),e.push({path:g.join("SKILLS",".gitkeep"),content:""}),e.push({path:g.join("PROMPTS",".gitkeep"),content:""})),t.complexity==="portfolio"&&(e.push({path:"PROFILE_CONTEXT.md",content:M}),e.push({path:"VISITOR_INTENT_MAP.md",content:$}),e.push({path:"RESPONSE_POLICIES.md",content:G})),t.complexity==="minimal"&&e.push({path:g.join("PROMPTS",".gitkeep"),content:""}),e}var B=`{
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
}`,K=`{
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
}`,z=`# Review Command
This command invokes the Claude reviewer agent.

## Steps
1. Read the staged git diff.
2. Cross-reference changes against \`CLAUDE.md\` conventions.
3. Suggest robust refactoring or explicitly state "LGTM".
`,W=`# Test Command
Automatically executes unit testing and logs outputs.

## Steps
1. Run \`npm test\`.
2. Format failing outputs.
3. Fix failures autonomously if complexity is low.
`,V=`name: code-reviewer
description: Validates PRs and suggests refactoring
tools:
  - github-mcp
  - bash
capabilities:
  - execute_tests
  - read_file
`,H=`---
name: code-review
description: Specialized rules for deeply analyzing structural changes
---

# Code Review Protocol
1. Focus on architecture boundaries.
2. Evaluate cyclical dependencies.
3. Ensure no secrets are leaked in test files.
`;var q=`{
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
}`,X=`{
  "model": "gpt-4.1",
  "temperature": 0.2,
  "safety": {
    "allowDestructiveCommands": false
  },
  "hooks": {
    "afterWrite": ["npm run lint"]
  }
}`,Y=`# Review Command
Review staged changes against project context and guardrails.

## Steps
1. Read staged git diff.
2. Validate changes against CONTEXT_PROMPT.md and GUARDRAILS.md.
3. Report defects and risky assumptions.
`,Q=`# Test Command
Run test suite and summarize outcomes.

## Steps
1. Run npm test.
2. Summarize failing suites and error causes.
3. Suggest minimal safe fixes.
`,Z=`name: code-reviewer
description: Reviews code changes and flags regressions
tools:
  - bash
  - git
capabilities:
  - execute_tests
  - read_file
`,J=`---
name: code-review
description: Rules for architecture and risk review
---

# Code Review Protocol
1. Focus on architectural boundaries and coupling.
2. Catch security and privacy leaks.
3. Call out missing tests for behavior changes.
`;var ee=`{
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
}`,te=`{
  "model": "gemini-2.5-pro",
  "safetySettings": {
    "allowCodeExecution": true,
    "blockUnsafeContent": true
  },
  "hooks": {
    "afterWrite": ["npm run lint"]
  }
}`,oe=`# Review Command
Run code review with architecture and safety focus.

## Steps
1. Inspect staged changes.
2. Compare behavior changes against project context files.
3. Report findings ordered by severity.
`,ie=`# Test Command
Run project tests and present root-cause summary.

## Steps
1. Run npm test.
2. Group failures by module.
3. Suggest safe remediations.
`,ne=`name: code-reviewer
description: Reviews pull requests and test quality
tools:
  - bash
  - git
capabilities:
  - execute_tests
  - read_file
`,se=`---
name: code-review
description: Rules for deep architectural review
---

# Code Review Protocol
1. Validate boundary ownership and module responsibilities.
2. Highlight security and privacy concerns.
3. Confirm tests protect changed behavior.
`;function h(t,e){let o=F(t);return t.complexity==="mcp-workspace"&&o.push(...e),o}var de={id:"claude",displayName:"Claude",description:"Anthropic Claude workflow and Claude Code-style workspace files.",capabilities:{workspaceAutomation:!0,mcp:!0,commands:!0,skills:!0,agents:!0},resolveArtifacts:t=>h(t,[{path:".mcp.json",content:B},{path:l.join(".claude","settings.json"),content:K},{path:l.join(".claude","commands","review.md"),content:z},{path:l.join(".claude","commands","test-all.md"),content:W},{path:l.join(".claude","skills","code-review","SKILL.md"),content:H},{path:l.join("agents","code-reviewer.yml"),content:V}])},me={id:"openai",displayName:"OpenAI (GPT)",description:"OpenAI GPT workflow with provider-scoped workspace automation files.",capabilities:{workspaceAutomation:!0,mcp:!0,commands:!0,skills:!0,agents:!0},resolveArtifacts:t=>h(t,[{path:".mcp.json",content:q},{path:l.join(".openai","settings.json"),content:X},{path:l.join(".openai","commands","review.md"),content:Y},{path:l.join(".openai","commands","test-all.md"),content:Q},{path:l.join(".openai","skills","code-review","SKILL.md"),content:J},{path:l.join("agents","code-reviewer.yml"),content:Z}])},ue={id:"gemini",displayName:"Google Gemini",description:"Gemini workflow with provider-scoped workspace automation files.",capabilities:{workspaceAutomation:!0,mcp:!0,commands:!0,skills:!0,agents:!0},resolveArtifacts:t=>h(t,[{path:".mcp.json",content:ee},{path:l.join(".gemini","settings.json"),content:te},{path:l.join(".gemini","commands","review.md"),content:oe},{path:l.join(".gemini","commands","test-all.md"),content:ie},{path:l.join(".gemini","skills","code-review","SKILL.md"),content:se},{path:l.join("agents","code-reviewer.yml"),content:ne}])};function re(){return[de,me,ue]}import ge from"fs/promises";import u from"path";import{pathToFileURL as fe}from"url";function he(t){if(!t||typeof t!="object")return!1;let e=t;return typeof e.name=="string"&&Array.isArray(e.providers)}async function y(t){try{return await ge.readdir(t)}catch{return[]}}async function ye(t){let e=u.join(t,"llm-context-plugins");return(await y(e)).filter(s=>s.endsWith(".js")||s.endsWith(".mjs")||s.endsWith(".cjs")).map(s=>u.join(e,s))}async function ve(t){let e=u.join(t,"node_modules"),o=u.join(e,"@create-llm-context"),s=(await y(e)).filter(a=>a.startsWith("create-llm-context-provider-")),r=(await y(o)).filter(a=>a.startsWith("provider-")),p=s.map(a=>a);return p.push(...r.map(a=>`@create-llm-context/${a}`)),p}async function we(t){return u.isAbsolute(t)||t.startsWith(".")?import(fe(t).href):import(t)}async function ae(t){let e=[],o=[],s=await ye(t),r=await ve(t),p=[...new Set([...s,...r])];for(let a of p)try{let d=await we(a),m=d.default??d;if(!he(m)){o.push(`Skipping plugin "${a}" because it does not export a valid ProviderPlugin.`);continue}e.push(m)}catch(d){let m=d instanceof Error?d.message:String(d);o.push(`Failed to load plugin "${a}": ${m}`)}return{plugins:e,warnings:o}}var f=class{providers=new Map;register(e){let o=e.id.trim().toLowerCase();if(!o)throw new Error("Provider id cannot be empty.");if(this.providers.has(o))throw new Error(`Provider "${e.id}" is already registered.`);this.providers.set(o,e)}registerMany(e){for(let o of e)this.register(o)}list(){return Array.from(this.providers.values())}get(e){return this.providers.get(e.trim().toLowerCase())}};async function ce(t){let e=new f;e.registerMany(re());let{plugins:o,warnings:s}=await ae(t);for(let r of o)e.registerMany(r.providers);return{registry:e,warnings:s}}var Te=["   ____                _              ____            _            _   ","  / ___|___  _ __   __| | ___        / ___|___  _ __ | |_ _____  _| |_ "," | |   / _ \\| _ \\ / _` |/ _ \\_____ | |   / _ \\| _ \\| __/ _ \\ / / __|"," | |__| (_) | | | | (_| |  __/_____| | |__| (_) | | | | ||  __/>  <| |_ ","  \\____\\___/|_| |_|\\__,_|\\___|       \\____\\___/|_| |_|\\__\\___/_/\\_\\"];function xe(t,e){let o=Math.max(0,Math.floor((e-t.length)/2));return`${" ".repeat(o)}${t}`}function be(){let t=process.stdout.columns??100,e=[i.cyan,i.blue,i.magenta,i.yellow,i.green];return Te.map((o,s)=>{let r=e[s%e.length];return r(xe(o,t))}).join(`
`)}function _e(t){return{basic:"Basic",minimal:"Minimal Starter",production:"Production Grade",portfolio:"Portfolio AI","mcp-workspace":"Workspace Automation Suite"}[t]}async function Ae(t,e){for(let o of e){let s=w.join(t,o.path),r=w.dirname(s);await v.mkdir(r,{recursive:!0}),await v.writeFile(s,o.content,"utf-8")}}var P=new Pe;P.name("create-code-context").description("Bootstrap provider-agnostic AI context for your project").version("1.0.0").option("--provider <provider>","Provider id to use (e.g. claude, openai, gemini)").option("--list-providers","List available providers and exit").action(async()=>{let t=P.opts(),{registry:e,warnings:o}=await ce(process.cwd());if(t.listProviders){console.log("Available providers:");for(let c of e.list())console.log(`- ${c.id}: ${c.displayName} (${c.description})`);return}console.clear(),console.log(be()),n.intro(i.bgCyan(i.black(" create-code-context "))),o.length>0&&n.note(o.join(`
`),"Plugin warnings");let s=e.list();s.length===0&&(n.cancel("No providers are available."),process.exit(1));let r=t.provider?.trim().toLowerCase();r&&!e.get(r)&&(n.cancel(`Unknown provider "${r}". Use --list-providers to inspect options.`),process.exit(1));let p=await n.group({name:()=>n.text({message:`${i.cyan("Project name")} - What is your project named?`,placeholder:"my-ai-project",validate:c=>{if(!c)return"Please enter a project name."}}),provider:()=>r||n.select({message:`${i.magenta("Provider")} - Which LLM provider do you want to scaffold for?`,options:s.map(c=>({value:c.id,label:`${c.displayName} (${c.id})`,hint:c.description}))}),framework:()=>n.select({message:`${i.yellow("Framework")} - Which framework/environment are you relying on?`,options:[{value:"react",label:"React / Next.js"},{value:"vue",label:"Vue / Nuxt"},{value:"node",label:"Node.js (Backend)"},{value:"python",label:"Python (FastAPI / Flask / Django)"},{value:"other",label:"Other / Vanilla"}]}),complexity:()=>n.select({message:`${i.green("Scaffolding")} - What level of scaffolding do you need?`,options:[{value:"basic",label:"Basic (Core context files)"},{value:"minimal",label:"Minimal Starter Set (Core context + Context/Prompts folders)"},{value:"production",label:"Production-Grade (Complete architecture, agents, and tooling context)"},{value:"portfolio",label:"Portfolio AI (Profile context, intent maps)"},{value:"mcp-workspace",label:"Workspace Automation Suite (Provider config, MCP config, Skills, Agents)"}]}),generateGuidelines:()=>n.confirm({message:`${i.blue("Guidelines")} - Generate general AI usage guidelines?`,initialValue:!0})},{onCancel:()=>{n.cancel("Operation cancelled."),process.exit(0)}});r=p.provider.toLowerCase();let a=e.get(r);a||(n.cancel(`Unable to resolve provider "${r}".`),process.exit(1)),n.note(`Setting up AI context for ${i.cyan(p.name)} using ${i.yellow(p.framework)} and ${i.magenta(a.displayName)}...`,"Progress");let d=p.name,m=w.resolve(process.cwd(),d),T=p.framework,x=p.complexity,b=p.generateGuidelines,le=[`${i.bold("Project")}       ${i.cyan(d)}`,`${i.bold("Provider")}      ${i.magenta(a.displayName)} (${a.id})`,`${i.bold("Framework")}     ${i.yellow(T)}`,`${i.bold("Scaffolding")}   ${i.green(_e(x))}`,`${i.bold("Guidelines")}    ${b?i.green("Yes"):i.red("No")}`,`${i.bold("Output path")}   ${i.dim(m)}`];n.note(le.join(`
`),"Selection summary");try{await v.mkdir(m,{recursive:!0});let c=a.resolveArtifacts({projectName:d,framework:T,complexity:x,generateGuidelines:b});await Ae(m,c)}catch(c){n.cancel(`Failed to scaffold context: ${c instanceof Error?c.message:String(c)}`),process.exit(1)}n.outro(i.green(`Successfully bootstrapped ${a.displayName} project context!`))});P.parse(process.argv);
