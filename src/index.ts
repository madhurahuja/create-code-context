#!/usr/bin/env node

import { Command } from 'commander';
import * as p from '@clack/prompts';
import pc from 'picocolors';
import fs from 'node:fs/promises';
import path from 'node:path';
import { bootstrapRuntime } from './runtime/bootstrap.js';
import type { ComplexityTier, Framework, ScaffoldArtifact } from './types/template.js';

const CLI_ART_LINES = [
  '   ____                _              ____            _            _   ',
  '  / ___|___  _ __   __| | ___        / ___|___  _ __ | |_ _____  _| |_ ',
  ' | |   / _ \\| _ \\ / _` |/ _ \\_____ | |   / _ \\| _ \\| __/ _ \\ \/ / __|',
  ' | |__| (_) | | | | (_| |  __/_____| | |__| (_) | | | | ||  __/>  <| |_ ',
  '  \\____\\___/|_| |_|\\__,_|\\___|       \\____\\___/|_| |_|\\__\\___/_/\\_\\',
];

function centerLine(line: string, width: number): string {
  const leftPadding = Math.max(0, Math.floor((width - line.length) / 2));
  return `${' '.repeat(leftPadding)}${line}`;
}

function renderCliArt(): string {
  const width = process.stdout.columns ?? 100;
  const palette = [pc.cyan, pc.blue, pc.magenta, pc.yellow, pc.green];

  return CLI_ART_LINES
    .map((line, index) => {
      const colorize = palette[index % palette.length];
      return colorize(centerLine(line, width));
    })
    .join('\n');
}

function getComplexityLabel(tier: ComplexityTier): string {
  const labels: Record<ComplexityTier, string> = {
    basic: 'Basic',
    minimal: 'Minimal Starter',
    production: 'Production Grade',
    portfolio: 'Portfolio AI',
    'mcp-workspace': 'Workspace Automation Suite',
  };

  return labels[tier];
}

async function writeArtifacts(targetDir: string, artifacts: ScaffoldArtifact[]): Promise<void> {
  for (const artifact of artifacts) {
    const artifactPath = path.join(targetDir, artifact.path);
    const parentDir = path.dirname(artifactPath);
    await fs.mkdir(parentDir, { recursive: true });
    await fs.writeFile(artifactPath, artifact.content, 'utf-8');
  }
}

const program = new Command();

program
  .name('create-code-context')
  .description('Bootstrap provider-agnostic AI context for your project')
  .version('1.0.0')
  .option('--provider <provider>', 'Provider id to use (e.g. claude, openai, gemini)')
  .option('--list-providers', 'List available providers and exit')
  .action(async () => {
    const options = program.opts<{ provider?: string; listProviders?: boolean }>();
    const { registry, warnings } = await bootstrapRuntime(process.cwd());

    if (options.listProviders) {
      console.log('Available providers:');
      for (const provider of registry.list()) {
        console.log(`- ${provider.id}: ${provider.displayName} (${provider.description})`);
      }
      return;
    }

    console.clear();
    console.log(renderCliArt());
    p.intro(pc.bgCyan(pc.black(' create-code-context ')));

    if (warnings.length > 0) {
      p.note(warnings.join('\n'), 'Plugin warnings');
    }

    const providers = registry.list();

    if (providers.length === 0) {
      p.cancel('No providers are available.');
      process.exit(1);
    }

    let selectedProviderId = options.provider?.trim().toLowerCase();

    if (selectedProviderId && !registry.get(selectedProviderId)) {
      p.cancel(`Unknown provider \"${selectedProviderId}\". Use --list-providers to inspect options.`);
      process.exit(1);
    }

    const project = await p.group({
      name: () => p.text({
        message: `${pc.cyan('Project name')} - What is your project named?`,
        placeholder: 'my-ai-project',
        validate: (value) => {
          if (!value) return 'Please enter a project name.';
        }
      }),
      provider: () => {
        if (selectedProviderId) {
          return selectedProviderId;
        }

        return p.select({
          message: `${pc.magenta('Provider')} - Which LLM provider do you want to scaffold for?`,
          options: providers.map((provider) => ({
            value: provider.id,
            label: `${provider.displayName} (${provider.id})`,
            hint: provider.description,
          })),
        });
      },
      framework: () => p.select({
        message: `${pc.yellow('Framework')} - Which framework/environment are you relying on?`,
        options: [
          { value: 'react', label: 'React / Next.js' },
          { value: 'vue', label: 'Vue / Nuxt' },
          { value: 'node', label: 'Node.js (Backend)' },
          { value: 'python', label: 'Python (FastAPI / Flask / Django)' },
          { value: 'other', label: 'Other / Vanilla' }
        ]
      }),
      complexity: () => p.select({
        message: `${pc.green('Scaffolding')} - What level of scaffolding do you need?`,
        options: [
          { value: 'basic', label: 'Basic (Core context files)' },
          { value: 'minimal', label: 'Minimal Starter Set (Core context + Context/Prompts folders)' },
          { value: 'production', label: 'Production-Grade (Complete architecture, agents, and tooling context)' },
          { value: 'portfolio', label: 'Portfolio AI (Profile context, intent maps)' },
          { value: 'mcp-workspace', label: 'Workspace Automation Suite (Provider config, MCP config, Skills, Agents)' }
        ]
      }),
      generateGuidelines: () => p.confirm({
        message: `${pc.blue('Guidelines')} - Generate general AI usage guidelines?`,
        initialValue: true,
      })
    }, {
      onCancel: () => {
        p.cancel('Operation cancelled.');
        process.exit(0);
      }
    });

    selectedProviderId = (project.provider as string).toLowerCase();
    const selectedProvider = registry.get(selectedProviderId);

    if (!selectedProvider) {
      p.cancel(`Unable to resolve provider \"${selectedProviderId}\".`);
      process.exit(1);
    }

    p.note(
      `Setting up AI context for ${pc.cyan(project.name as string)} using ${pc.yellow(project.framework as string)} and ${pc.magenta(selectedProvider.displayName)}...`,
      'Progress',
    );

    const projectName = project.name as string;
    const targetDir = path.resolve(process.cwd(), projectName);
    const framework = project.framework as Framework;
    const complexity = project.complexity as ComplexityTier;
    const generateGuidelines = project.generateGuidelines as boolean;

    const summaryLines = [
      `${pc.bold('Project')}       ${pc.cyan(projectName)}`,
      `${pc.bold('Provider')}      ${pc.magenta(selectedProvider.displayName)} (${selectedProvider.id})`,
      `${pc.bold('Framework')}     ${pc.yellow(framework)}`,
      `${pc.bold('Scaffolding')}   ${pc.green(getComplexityLabel(complexity))}`,
      `${pc.bold('Guidelines')}    ${generateGuidelines ? pc.green('Yes') : pc.red('No')}`,
      `${pc.bold('Output path')}   ${pc.dim(targetDir)}`,
    ];

    p.note(summaryLines.join('\n'), 'Selection summary');

    try {
      await fs.mkdir(targetDir, { recursive: true });

      const artifacts = selectedProvider.resolveArtifacts({
        projectName,
        framework,
        complexity,
        generateGuidelines,
      });

      await writeArtifacts(targetDir, artifacts);
    } catch (error) {
      p.cancel(`Failed to scaffold context: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }

    p.outro(pc.green(`Successfully bootstrapped ${selectedProvider.displayName} project context!`));
  });

program.parse(process.argv);
