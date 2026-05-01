import path from 'node:path';
import type { ProviderDefinition } from '../types/provider.js';
import type { ResolveScaffoldOptions, ScaffoldArtifact } from '../types/template.js';
import { buildBaseArtifacts } from '../loaders/template-loader.js';
import {
  mcpJsonTemplate,
  claudeSettingsTemplate,
  claudeCmdReviewTemplate,
  claudeCmdTestTemplate,
  claudeSubagentTemplate,
  claudeSkillReviewTemplate,
} from '../templates/claude-code.js';
import {
  openAiAgentTemplate,
  openAiCmdReviewTemplate,
  openAiCmdTestTemplate,
  openAiMcpTemplate,
  openAiSettingsTemplate,
  openAiSkillTemplate,
} from '../templates/providers/openai.js';
import {
  geminiAgentTemplate,
  geminiCmdReviewTemplate,
  geminiCmdTestTemplate,
  geminiMcpTemplate,
  geminiSettingsTemplate,
  geminiSkillTemplate,
} from '../templates/providers/gemini.js';
import {
  unslothAgentTemplate,
  unslothCmdReviewTemplate,
  unslothCmdTestTemplate,
  unslothMcpTemplate,
  unslothSettingsTemplate,
  unslothSkillTemplate,
} from '../templates/providers/unsloth.js';

function withWorkspaceArtifacts(
  options: ResolveScaffoldOptions,
  providerWorkspaceArtifacts: ScaffoldArtifact[],
): ScaffoldArtifact[] {
  const artifacts = buildBaseArtifacts(options);

  if (options.complexity === 'mcp-workspace') {
    artifacts.push(...providerWorkspaceArtifacts);
  }

  return artifacts;
}

const claudeProvider: ProviderDefinition = {
  id: 'claude',
  displayName: 'Claude',
  description: 'Anthropic Claude workflow and Claude Code-style workspace files.',
  capabilities: {
    workspaceAutomation: true,
    mcp: true,
    commands: true,
    skills: true,
    agents: true,
  },
  resolveArtifacts: (options) =>
    withWorkspaceArtifacts(options, [
      { path: '.mcp.json', content: mcpJsonTemplate },
      { path: path.join('.claude', 'settings.json'), content: claudeSettingsTemplate },
      { path: path.join('.claude', 'commands', 'review.md'), content: claudeCmdReviewTemplate },
      { path: path.join('.claude', 'commands', 'test-all.md'), content: claudeCmdTestTemplate },
      { path: path.join('.claude', 'skills', 'code-review', 'SKILL.md'), content: claudeSkillReviewTemplate },
      { path: path.join('agents', 'code-reviewer.yml'), content: claudeSubagentTemplate },
    ]),
};

const openAiProvider: ProviderDefinition = {
  id: 'openai',
  displayName: 'OpenAI (GPT)',
  description: 'OpenAI GPT workflow with provider-scoped workspace automation files.',
  capabilities: {
    workspaceAutomation: true,
    mcp: true,
    commands: true,
    skills: true,
    agents: true,
  },
  resolveArtifacts: (options) =>
    withWorkspaceArtifacts(options, [
      { path: '.mcp.json', content: openAiMcpTemplate },
      { path: path.join('.openai', 'settings.json'), content: openAiSettingsTemplate },
      { path: path.join('.openai', 'commands', 'review.md'), content: openAiCmdReviewTemplate },
      { path: path.join('.openai', 'commands', 'test-all.md'), content: openAiCmdTestTemplate },
      { path: path.join('.openai', 'skills', 'code-review', 'SKILL.md'), content: openAiSkillTemplate },
      { path: path.join('agents', 'code-reviewer.yml'), content: openAiAgentTemplate },
    ]),
};

const geminiProvider: ProviderDefinition = {
  id: 'gemini',
  displayName: 'Google Gemini',
  description: 'Gemini workflow with provider-scoped workspace automation files.',
  capabilities: {
    workspaceAutomation: true,
    mcp: true,
    commands: true,
    skills: true,
    agents: true,
  },
  resolveArtifacts: (options) =>
    withWorkspaceArtifacts(options, [
      { path: '.mcp.json', content: geminiMcpTemplate },
      { path: path.join('.gemini', 'settings.json'), content: geminiSettingsTemplate },
      { path: path.join('.gemini', 'commands', 'review.md'), content: geminiCmdReviewTemplate },
      { path: path.join('.gemini', 'commands', 'test-all.md'), content: geminiCmdTestTemplate },
      { path: path.join('.gemini', 'skills', 'code-review', 'SKILL.md'), content: geminiSkillTemplate },
      { path: path.join('agents', 'code-reviewer.yml'), content: geminiAgentTemplate },
    ]),
};

const unslothProvider: ProviderDefinition = {
  id: 'unsloth',
  displayName: 'Unsloth',
  description: 'Unsloth workflow for local/fine-tuned model scaffolding.',
  capabilities: {
    workspaceAutomation: true,
    mcp: true,
    commands: true,
    skills: true,
    agents: true,
  },
  resolveArtifacts: (options) =>
    withWorkspaceArtifacts(options, [
      { path: '.mcp.json', content: unslothMcpTemplate },
      { path: path.join('.unsloth', 'settings.json'), content: unslothSettingsTemplate },
      { path: path.join('.unsloth', 'commands', 'review.md'), content: unslothCmdReviewTemplate },
      { path: path.join('.unsloth', 'commands', 'test-all.md'), content: unslothCmdTestTemplate },
      { path: path.join('.unsloth', 'skills', 'code-review', 'SKILL.md'), content: unslothSkillTemplate },
      { path: path.join('agents', 'code-reviewer.yml'), content: unslothAgentTemplate },
    ]),
};

export function getBuiltInProviders(): ProviderDefinition[] {
  return [claudeProvider, openAiProvider, geminiProvider, unslothProvider];
}
