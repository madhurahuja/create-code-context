#!/usr/bin/env node
import{Command as ke}from"commander";import*as n from"@clack/prompts";import i from"picocolors";import y from"fs/promises";import w from"path";import s from"path";import g from"path";var _=`# React & Next.js Best Practices

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
`;var S="# Vue & Nuxt Best Practices\n\n## Core Principles\n1. Use Composition API with `<script setup>` syntax.\n2. Favor single-file components (.vue).\n3. Keep components small and modular.\n\n## State Management\n- Use `ref` and `reactive` for local component state.\n- Use Pinia for robust, type-safe global state management.\n\n## Reactivity\n- Use `computed` for derived state.\n- Use `watch` and `watchEffect` cautiously to avoid side-effects chains.\n\n## Structure\n- `components/`: Auto-imported UI components (in Nuxt).\n- `pages/`: File-based routing.\n- `composables/`: Reusable stateful logic / hooks.\n- `utils/`: Stateless helper functions.\n\n## Performance\n- Use Nuxt SSR/SSG capabilities effectively.\n- Lazy load components using `defineAsyncComponent` or Nuxt's `<Lazy...>` auto-imports.\n";var A=`# Node.js Backend Best Practices

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
`;var R=`# General Project Best Practices for Claude

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
`;var C=`# AI Interaction Guidelines
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
`,N=`# Multi-Agent System Configuration

## Defined Agents
1. **Router Agent**: Analyzes the initial intent and routes to sub-agents.
2. **Coder Agent**: Executes codebase changes.
3. **Reviewer Agent**: Critiques the Coder Agent's diffs.

## Responsibilities & Boundaries
- Ensure the Coder Agent never commits without the Reviewer Agent's 'APPROVED' status.
- Keep agent context boundaries strict to prevent token bloat.
`,O=`# Domain Glossary

- **Entity X**: [Definition]
- **Service Y**: [Definition]
`,D=`# Architecture Decision Records (ADR)

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
`;function he(e){switch(e){case"react":return _;case"vue":return S;case"node":return A;case"python":return k;default:return R}}function F(e){let t=[],o=he(e.framework);return t.push({path:"CONTEXT_PROMPT.md",content:o}),e.generateGuidelines&&t.push({path:"AI_GUIDELINES.md",content:C}),(e.complexity==="minimal"||e.complexity==="production"||e.complexity==="portfolio"||e.complexity==="mcp-workspace")&&(t.push({path:"README.md",content:`# ${e.projectName}

Automatically generated.`}),t.push({path:g.join("CONTEXT","ARCHITECTURE.md"),content:I})),(e.complexity==="production"||e.complexity==="portfolio"||e.complexity==="mcp-workspace")&&(t.push({path:"SYSTEM_PROMPT.md",content:E}),t.push({path:"GUARDRAILS.md",content:j}),t.push({path:"DECISIONS.md",content:D}),t.push({path:"FAQ.md",content:L}),t.push({path:"GLOSSARY.md",content:O}),t.push({path:"TOOLS.md",content:U}),t.push({path:"AGENTS.md",content:N}),t.push({path:g.join("SKILLS",".gitkeep"),content:""}),t.push({path:g.join("PROMPTS",".gitkeep"),content:""})),e.complexity==="portfolio"&&(t.push({path:"PROFILE_CONTEXT.md",content:M}),t.push({path:"VISITOR_INTENT_MAP.md",content:$}),t.push({path:"RESPONSE_POLICIES.md",content:G})),e.complexity==="minimal"&&t.push({path:g.join("PROMPTS",".gitkeep"),content:""}),t}var B=`{
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
`;var re=`{
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
}`,ae=`{
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
}`,ce=`# Review Command
Review staged changes against project context and guardrails.

## Steps
1. Read staged git diff.
2. Validate changes against CONTEXT_PROMPT.md and GUARDRAILS.md.
3. Report defects and risky assumptions.
`,le=`# Test Command
Run tests and summarize failures for quick triage.

## Steps
1. Run npm test.
2. Group failures by package/module.
3. Suggest minimal safe remediations.
`,pe=`name: code-reviewer
description: Reviews code changes and highlights regressions
tools:
  - bash
  - git
capabilities:
  - execute_tests
  - read_file
`,de=`---
name: code-review
description: Rules for architecture, correctness, and safety checks
---

# Code Review Protocol
1. Validate architecture boundaries and module ownership.
2. Catch security, privacy, and reliability risks.
3. Confirm tests exist for behavior-changing diffs.
`;function f(e,t){let o=F(e);return e.complexity==="mcp-workspace"&&o.push(...t),o}var ve={id:"claude",displayName:"Claude",description:"Anthropic Claude workflow and Claude Code-style workspace files.",capabilities:{workspaceAutomation:!0,mcp:!0,commands:!0,skills:!0,agents:!0},resolveArtifacts:e=>f(e,[{path:".mcp.json",content:B},{path:s.join(".claude","settings.json"),content:K},{path:s.join(".claude","commands","review.md"),content:z},{path:s.join(".claude","commands","test-all.md"),content:W},{path:s.join(".claude","skills","code-review","SKILL.md"),content:H},{path:s.join("agents","code-reviewer.yml"),content:V}])},ye={id:"openai",displayName:"OpenAI (GPT)",description:"OpenAI GPT workflow with provider-scoped workspace automation files.",capabilities:{workspaceAutomation:!0,mcp:!0,commands:!0,skills:!0,agents:!0},resolveArtifacts:e=>f(e,[{path:".mcp.json",content:q},{path:s.join(".openai","settings.json"),content:X},{path:s.join(".openai","commands","review.md"),content:Y},{path:s.join(".openai","commands","test-all.md"),content:Q},{path:s.join(".openai","skills","code-review","SKILL.md"),content:J},{path:s.join("agents","code-reviewer.yml"),content:Z}])},we={id:"gemini",displayName:"Google Gemini",description:"Gemini workflow with provider-scoped workspace automation files.",capabilities:{workspaceAutomation:!0,mcp:!0,commands:!0,skills:!0,agents:!0},resolveArtifacts:e=>f(e,[{path:".mcp.json",content:ee},{path:s.join(".gemini","settings.json"),content:te},{path:s.join(".gemini","commands","review.md"),content:oe},{path:s.join(".gemini","commands","test-all.md"),content:ie},{path:s.join(".gemini","skills","code-review","SKILL.md"),content:se},{path:s.join("agents","code-reviewer.yml"),content:ne}])},Te={id:"unsloth",displayName:"Unsloth",description:"Unsloth workflow for local/fine-tuned model scaffolding.",capabilities:{workspaceAutomation:!0,mcp:!0,commands:!0,skills:!0,agents:!0},resolveArtifacts:e=>f(e,[{path:".mcp.json",content:re},{path:s.join(".unsloth","settings.json"),content:ae},{path:s.join(".unsloth","commands","review.md"),content:ce},{path:s.join(".unsloth","commands","test-all.md"),content:le},{path:s.join(".unsloth","skills","code-review","SKILL.md"),content:de},{path:s.join("agents","code-reviewer.yml"),content:pe}])};function me(){return[ve,ye,we,Te]}import Pe from"fs/promises";import u from"path";import{pathToFileURL as xe}from"url";function be(e){if(!e||typeof e!="object")return!1;let t=e;return typeof t.name=="string"&&Array.isArray(t.providers)}async function v(e){try{return await Pe.readdir(e)}catch{return[]}}async function _e(e){let t=u.join(e,"llm-context-plugins");return(await v(t)).filter(r=>r.endsWith(".js")||r.endsWith(".mjs")||r.endsWith(".cjs")).map(r=>u.join(t,r))}async function Se(e){let t=u.join(e,"node_modules"),o=u.join(t,"@create-llm-context"),r=(await v(t)).filter(c=>c.startsWith("create-llm-context-provider-")),a=(await v(o)).filter(c=>c.startsWith("provider-")),p=r.map(c=>c);return p.push(...a.map(c=>`@create-llm-context/${c}`)),p}async function Ae(e){return u.isAbsolute(e)||e.startsWith(".")?import(xe(e).href):import(e)}async function ue(e){let t=[],o=[],r=await _e(e),a=await Se(e),p=[...new Set([...r,...a])];for(let c of p)try{let d=await Ae(c),m=d.default??d;if(!be(m)){o.push(`Skipping plugin "${c}" because it does not export a valid ProviderPlugin.`);continue}t.push(m)}catch(d){let m=d instanceof Error?d.message:String(d);o.push(`Failed to load plugin "${c}": ${m}`)}return{plugins:t,warnings:o}}var h=class{providers=new Map;register(t){let o=t.id.trim().toLowerCase();if(!o)throw new Error("Provider id cannot be empty.");if(this.providers.has(o))throw new Error(`Provider "${t.id}" is already registered.`);this.providers.set(o,t)}registerMany(t){for(let o of t)this.register(o)}list(){return Array.from(this.providers.values())}get(t){return this.providers.get(t.trim().toLowerCase())}};async function ge(e){let t=new h;t.registerMany(me());let{plugins:o,warnings:r}=await ue(e);for(let a of o)t.registerMany(a.providers);return{registry:t,warnings:r}}var Re=["   ____                _              ____            _            _   ","  / ___|___  _ __   __| | ___        / ___|___  _ __ | |_ _____  _| |_ "," | |   / _ \\| _ \\ / _` |/ _ \\_____ | |   / _ \\| _ \\| __/ _ \\ / / __|"," | |__| (_) | | | | (_| |  __/_____| | |__| (_) | | | | ||  __/>  <| |_ ","  \\____\\___/|_| |_|\\__,_|\\___|       \\____\\___/|_| |_|\\__\\___/_/\\_\\"];function Ce(e,t){let o=Math.max(0,Math.floor((t-e.length)/2));return`${" ".repeat(o)}${e}`}function Ie(){let e=process.stdout.columns??100,t=[i.cyan,i.blue,i.magenta,i.yellow,i.green];return Re.map((o,r)=>{let a=t[r%t.length];return a(Ce(o,e))}).join(`
`)}function je(e){return{basic:"Basic",minimal:"Minimal Starter",production:"Production Grade",portfolio:"Portfolio AI","mcp-workspace":"Workspace Automation Suite"}[e]}async function Ee(e,t){for(let o of t){let r=w.join(e,o.path),a=w.dirname(r);await y.mkdir(a,{recursive:!0}),await y.writeFile(r,o.content,"utf-8")}}var T=new ke;T.name("create-code-context").description("Bootstrap provider-agnostic AI context for your project").version("1.0.0").option("--provider <provider>","Provider id to use (e.g. claude, openai, gemini, unsloth)").option("--list-providers","List available providers and exit").action(async()=>{let e=T.opts(),{registry:t,warnings:o}=await ge(process.cwd());if(e.listProviders){console.log("Available providers:");for(let l of t.list())console.log(`- ${l.id}: ${l.displayName} (${l.description})`);return}console.clear(),console.log(Ie()),n.intro(i.bgCyan(i.black(" create-code-context "))),o.length>0&&n.note(o.join(`
`),"Plugin warnings");let r=t.list();r.length===0&&(n.cancel("No providers are available."),process.exit(1));let a=e.provider?.trim().toLowerCase();a&&!t.get(a)&&(n.cancel(`Unknown provider "${a}". Use --list-providers to inspect options.`),process.exit(1));let p=await n.group({name:()=>n.text({message:`${i.cyan("Project name")} - What is your project named?`,placeholder:"my-ai-project",validate:l=>{if(!l)return"Please enter a project name."}}),provider:()=>a||n.select({message:`${i.magenta("Provider")} - Which LLM provider do you want to scaffold for?`,options:r.map(l=>({value:l.id,label:`${l.displayName} (${l.id})`,hint:l.description}))}),framework:()=>n.select({message:`${i.yellow("Framework")} - Which framework/environment are you relying on?`,options:[{value:"react",label:"React / Next.js"},{value:"vue",label:"Vue / Nuxt"},{value:"node",label:"Node.js (Backend)"},{value:"python",label:"Python (FastAPI / Flask / Django)"},{value:"other",label:"Other / Vanilla"}]}),complexity:()=>n.select({message:`${i.green("Scaffolding")} - What level of scaffolding do you need?`,options:[{value:"basic",label:"Basic (Core context files)"},{value:"minimal",label:"Minimal Starter Set (Core context + Context/Prompts folders)"},{value:"production",label:"Production-Grade (Complete architecture, agents, and tooling context)"},{value:"portfolio",label:"Portfolio AI (Profile context, intent maps)"},{value:"mcp-workspace",label:"Workspace Automation Suite (Provider config, MCP config, Skills, Agents)"}]}),generateGuidelines:()=>n.confirm({message:`${i.blue("Guidelines")} - Generate general AI usage guidelines?`,initialValue:!0})},{onCancel:()=>{n.cancel("Operation cancelled."),process.exit(0)}});a=p.provider.toLowerCase();let c=t.get(a);c||(n.cancel(`Unable to resolve provider "${a}".`),process.exit(1)),n.note(`Setting up AI context for ${i.cyan(p.name)} using ${i.yellow(p.framework)} and ${i.magenta(c.displayName)}...`,"Progress");let d=p.name,m=w.resolve(process.cwd(),d),P=p.framework,x=p.complexity,b=p.generateGuidelines,fe=[`${i.bold("Project")}       ${i.cyan(d)}`,`${i.bold("Provider")}      ${i.magenta(c.displayName)} (${c.id})`,`${i.bold("Framework")}     ${i.yellow(P)}`,`${i.bold("Scaffolding")}   ${i.green(je(x))}`,`${i.bold("Guidelines")}    ${b?i.green("Yes"):i.red("No")}`,`${i.bold("Output path")}   ${i.dim(m)}`];n.note(fe.join(`
`),"Selection summary");try{await y.mkdir(m,{recursive:!0});let l=c.resolveArtifacts({projectName:d,framework:P,complexity:x,generateGuidelines:b});await Ee(m,l)}catch(l){n.cancel(`Failed to scaffold context: ${l instanceof Error?l.message:String(l)}`),process.exit(1)}n.outro(i.green(`Successfully bootstrapped ${c.displayName} project context!`))});T.parse(process.argv);
