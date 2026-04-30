import path from 'node:path';
import { reactTemplate } from '../templates/react.js';
import { vueTemplate } from '../templates/vue.js';
import { nodeTemplate } from '../templates/node.js';
import { pythonTemplate } from '../templates/python.js';
import { otherTemplate } from '../templates/other.js';
import { generalTemplate } from '../templates/general.js';
import { architectureTemplate } from '../templates/advanced/architecture.js';
import { guardrailsTemplate, systemPromptTemplate } from '../templates/advanced/core.js';
import {
  toolsTemplate,
  agentsTemplate,
  glossaryTemplate,
  decisionsTemplate,
  faqTemplate,
} from '../templates/advanced/misc.js';
import {
  profileTemplate,
  visitorIntentTemplate,
  responsePoliciesTemplate,
} from '../templates/advanced/portfolio.js';
import type {
  Framework,
  ResolveScaffoldOptions,
  ScaffoldArtifact,
} from '../types/template.js';

function resolveFrameworkTemplate(framework: Framework): string {
  switch (framework) {
    case 'react':
      return reactTemplate;
    case 'vue':
      return vueTemplate;
    case 'node':
      return nodeTemplate;
    case 'python':
      return pythonTemplate;
    default:
      return otherTemplate;
  }
}

export function buildBaseArtifacts(options: ResolveScaffoldOptions): ScaffoldArtifact[] {
  const artifacts: ScaffoldArtifact[] = [];
  const frameworkTemplate = resolveFrameworkTemplate(options.framework);

  artifacts.push({
    path: 'CONTEXT_PROMPT.md',
    content: frameworkTemplate,
  });

  if (options.generateGuidelines) {
    artifacts.push({
      path: 'AI_GUIDELINES.md',
      content: generalTemplate,
    });
  }

  if (
    options.complexity === 'minimal' ||
    options.complexity === 'production' ||
    options.complexity === 'portfolio' ||
    options.complexity === 'mcp-workspace'
  ) {
    artifacts.push({
      path: 'README.md',
      content: `# ${options.projectName}\n\nAutomatically generated.`,
    });
    artifacts.push({
      path: path.join('CONTEXT', 'ARCHITECTURE.md'),
      content: architectureTemplate,
    });
  }

  if (
    options.complexity === 'production' ||
    options.complexity === 'portfolio' ||
    options.complexity === 'mcp-workspace'
  ) {
    artifacts.push({ path: 'SYSTEM_PROMPT.md', content: systemPromptTemplate });
    artifacts.push({ path: 'GUARDRAILS.md', content: guardrailsTemplate });
    artifacts.push({ path: 'DECISIONS.md', content: decisionsTemplate });
    artifacts.push({ path: 'FAQ.md', content: faqTemplate });
    artifacts.push({ path: 'GLOSSARY.md', content: glossaryTemplate });
    artifacts.push({ path: 'TOOLS.md', content: toolsTemplate });
    artifacts.push({ path: 'AGENTS.md', content: agentsTemplate });
    artifacts.push({ path: path.join('SKILLS', '.gitkeep'), content: '' });
    artifacts.push({ path: path.join('PROMPTS', '.gitkeep'), content: '' });
  }

  if (options.complexity === 'portfolio') {
    artifacts.push({ path: 'PROFILE_CONTEXT.md', content: profileTemplate });
    artifacts.push({ path: 'VISITOR_INTENT_MAP.md', content: visitorIntentTemplate });
    artifacts.push({ path: 'RESPONSE_POLICIES.md', content: responsePoliciesTemplate });
  }

  if (options.complexity === 'minimal') {
    artifacts.push({ path: path.join('PROMPTS', '.gitkeep'), content: '' });
  }

  return artifacts;
}
