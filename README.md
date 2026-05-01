<p align="center">
  <img src="https://raw.githubusercontent.com/madhurahuja/create-claude-context/main/logo.png" alt="create-code-context logo" width="250" />
</p>

# create-code-context

Interactive CLI to scaffold AI context for multiple LLM providers.

The wizard now asks which provider to scaffold for and generates provider-agnostic core files by default, with provider-specific workspace automation files when selected.

## CLI Experience

- Center-aligned ASCII CLI art banner on startup.
- Colorful interactive prompts for each input category.
- A final selection summary before file generation starts.
- Clear progress and completion notes for scaffold status.

## Features

- Provider-aware scaffolding for built-in providers:
  - Claude
  - OpenAI (GPT)
  - Google Gemini
  - Unsloth
- Provider-agnostic core outputs:
  - `CONTEXT_PROMPT.md`
  - `AI_GUIDELINES.md` (optional)
- Complexity tiers from basic to workspace automation
- Extensible provider plugin loading

## Installation

Run directly:

```bash
npx create-code-context
```

Or install globally:

```bash
npm install -g @madhurahuja/create-code-context
```

## CLI usage

```bash
create-code-context
create-code-context --help
create-code-context --list-providers
create-code-context --provider claude
```

### Interactive flow

The wizard captures these values in order:

1. Project name
2. LLM provider
3. Framework/environment
4. Scaffolding complexity
5. AI guideline generation

After input collection, the CLI prints a selection summary including provider, framework, tier, and output path before writing files.

### Provider selection

- Interactive mode asks for provider explicitly.
- You can also pass `--provider <id>` for CI and scripted workflows.

## Scaffolding tiers

1. `basic` - core context files.
2. `minimal` - adds `CONTEXT/` and `PROMPTS/` baseline structure.
3. `production` - adds system prompt, guardrails, ADRs, tools, agents, glossary, FAQ.
4. `portfolio` - adds profile and visitor-intent policy files.
5. `mcp-workspace` - adds provider workspace automation files (settings, commands, skills, agent, MCP config).

## Plugin extensibility

The CLI discovers provider plugins from:

- Local folder: `./llm-context-plugins/*.js|*.mjs|*.cjs`
- Installed packages:
  - `create-llm-context-provider-*`
  - `@create-llm-context/provider-*`

Plugin default export shape:

```ts
import type { ProviderPlugin } from './src/types/plugin.js';

const plugin: ProviderPlugin = {
  name: 'my-provider-pack',
  providers: [
    {
      id: 'my-provider',
      displayName: 'My Provider',
      description: 'Custom provider',
      capabilities: {
        workspaceAutomation: true,
        mcp: true,
        commands: true,
        skills: true,
        agents: true,
      },
      resolveArtifacts: ({ projectName, framework, complexity, generateGuidelines }) => [
        { path: 'CONTEXT_PROMPT.md', content: '# Custom template' },
      ],
    },
  ],
};

export default plugin;
```

## License

MIT
