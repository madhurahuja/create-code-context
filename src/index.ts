#!/usr/bin/env node

import { Command } from 'commander';
import * as p from '@clack/prompts';
import pc from 'picocolors';
import fs from 'node:fs/promises';
import path from 'node:path';
import { reactTemplate } from './templates/react.js';
import { vueTemplate } from './templates/vue.js';
import { nodeTemplate } from './templates/node.js';
import { pythonTemplate } from './templates/python.js';
import { otherTemplate } from './templates/other.js';
import { generalTemplate } from './templates/general.js';
import { architectureTemplate } from './templates/advanced/architecture.js';
import { guardrailsTemplate, systemPromptTemplate } from './templates/advanced/core.js';
import { toolsTemplate, agentsTemplate, glossaryTemplate, decisionsTemplate, faqTemplate } from './templates/advanced/misc.js';
import { profileTemplate, visitorIntentTemplate, responsePoliciesTemplate } from './templates/advanced/portfolio.js';
import { mcpJsonTemplate, claudeSettingsTemplate, claudeCmdReviewTemplate, claudeCmdTestTemplate, claudeSubagentTemplate, claudeSkillReviewTemplate } from './templates/claude-code.js';

const program = new Command();

program
  .name('create-claude-context')
  .description('Bootstrap a project with Claude best practices and context')
  .version('1.0.0')
  .action(async () => {
    console.clear();
    p.intro(pc.bgCyan(pc.black(' create-claude-context ')));

    const project = await p.group({
      name: () => p.text({
        message: 'What is your project named?',
        placeholder: 'my-claude-project',
        validate: (value) => {
          if (!value) return 'Please enter a project name.';
        }
      }),
      framework: () => p.select({
        message: 'Which framework/environment are you relying on?',
        options: [
          { value: 'react', label: 'React / Next.js' },
          { value: 'vue', label: 'Vue / Nuxt' },
          { value: 'node', label: 'Node.js (Backend)' },
          { value: 'python', label: 'Python (FastAPI / Flask / Django)' },
          { value: 'other', label: 'Other / Vanilla' }
        ]
      }),
      complexity: () => p.select({
        message: 'What level of scaffolding do you need?',
        options: [
          { value: 'basic', label: 'Basic (Just CLAUDE.md)' },
          { value: 'minimal', label: 'Minimal Starter Set (Core context + Context/Prompts folders)' },
          { value: 'production', label: 'Production-Grade (Complete architecture, agents, and tooling context)' },
          { value: 'portfolio', label: 'Portfolio AI (Profile context, intent maps)' },
          { value: 'mcp-workspace', label: 'Claude Code Workspace (Full .claude folder, MCP config, Skills, Agents)' }
        ]
      }),
      generateGuidelines: () => p.confirm({
        message: 'Generate general Claude usage guidelines?',
        initialValue: true,
      })
    }, {
      onCancel: () => {
        p.cancel('Operation cancelled.');
        process.exit(0);
      }
    });

    p.note(`Setting up Claude context for ${pc.cyan(project.name)} using ${pc.yellow(project.framework)} template...`, 'Progress');

    // Scaffolding logic
    const projectName = project.name as string;
    const targetDir = path.resolve(process.cwd(), projectName);

    try {
      await fs.mkdir(targetDir, { recursive: true });

      let frameworkTemplate = otherTemplate;
      switch (project.framework) {
        case 'react': frameworkTemplate = reactTemplate; break;
        case 'vue': frameworkTemplate = vueTemplate; break;
        case 'node': frameworkTemplate = nodeTemplate; break;
        case 'python': frameworkTemplate = pythonTemplate; break;
      }

      await fs.writeFile(path.join(targetDir, 'CLAUDE.md'), frameworkTemplate, 'utf-8');

      if (project.complexity === 'minimal' || project.complexity === 'production' || project.complexity === 'portfolio' || project.complexity === 'mcp-workspace') {
        const contextDir = path.join(targetDir, 'CONTEXT');
        const promptsDir = path.join(targetDir, 'PROMPTS');
        await fs.mkdir(contextDir, { recursive: true });
        await fs.mkdir(promptsDir, { recursive: true });
        
        await fs.writeFile(path.join(targetDir, 'README.md'), '# ' + projectName + '\\n\\nAutomatically generated.', 'utf-8');
        await fs.writeFile(path.join(contextDir, 'ARCHITECTURE.md'), architectureTemplate, 'utf-8');
      }

      if (project.complexity === 'production' || project.complexity === 'portfolio' || project.complexity === 'mcp-workspace') {
        const toolsDir = path.join(targetDir, 'SKILLS');
        await fs.mkdir(toolsDir, { recursive: true });

        await fs.writeFile(path.join(targetDir, 'SYSTEM_PROMPT.md'), systemPromptTemplate, 'utf-8');
        await fs.writeFile(path.join(targetDir, 'GUARDRAILS.md'), guardrailsTemplate, 'utf-8');
        await fs.writeFile(path.join(targetDir, 'DECISIONS.md'), decisionsTemplate, 'utf-8');
        await fs.writeFile(path.join(targetDir, 'FAQ.md'), faqTemplate, 'utf-8');
        await fs.writeFile(path.join(targetDir, 'GLOSSARY.md'), glossaryTemplate, 'utf-8');
        await fs.writeFile(path.join(targetDir, 'TOOLS.md'), toolsTemplate, 'utf-8');
        await fs.writeFile(path.join(targetDir, 'AGENTS.md'), agentsTemplate, 'utf-8');
      }

      if (project.complexity === 'portfolio') {
        await fs.writeFile(path.join(targetDir, 'PROFILE_CONTEXT.md'), profileTemplate, 'utf-8');
        await fs.writeFile(path.join(targetDir, 'VISITOR_INTENT_MAP.md'), visitorIntentTemplate, 'utf-8');
        await fs.writeFile(path.join(targetDir, 'RESPONSE_POLICIES.md'), responsePoliciesTemplate, 'utf-8');
      }

      if (project.complexity === 'mcp-workspace') {
        const claudeDir = path.join(targetDir, '.claude');
        const commandsDir = path.join(claudeDir, 'commands');
        const skillsDir = path.join(claudeDir, 'skills');
        const codeReviewSkillDir = path.join(skillsDir, 'code-review');
        const agentsDir = path.join(targetDir, 'agents');

        await fs.mkdir(claudeDir, { recursive: true });
        await fs.mkdir(commandsDir, { recursive: true });
        await fs.mkdir(skillsDir, { recursive: true });
        await fs.mkdir(codeReviewSkillDir, { recursive: true });
        await fs.mkdir(agentsDir, { recursive: true });

        await fs.writeFile(path.join(targetDir, '.mcp.json'), mcpJsonTemplate, 'utf-8');
        await fs.writeFile(path.join(claudeDir, 'settings.json'), claudeSettingsTemplate, 'utf-8');
        await fs.writeFile(path.join(commandsDir, 'review.md'), claudeCmdReviewTemplate, 'utf-8');
        await fs.writeFile(path.join(commandsDir, 'test-all.md'), claudeCmdTestTemplate, 'utf-8');
        await fs.writeFile(path.join(codeReviewSkillDir, 'SKILL.md'), claudeSkillReviewTemplate, 'utf-8');
        await fs.writeFile(path.join(agentsDir, 'code-reviewer.yml'), claudeSubagentTemplate, 'utf-8');
      }

      if (project.generateGuidelines) {
        await fs.writeFile(path.join(targetDir, '.claudeprompt'), generalTemplate, 'utf-8');
      }
    } catch (error) {
      p.cancel(`Failed to scaffold context: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }

    p.outro(pc.green('Successfully bootstrapped Claude project!'));
  });

program.parse(process.argv);
