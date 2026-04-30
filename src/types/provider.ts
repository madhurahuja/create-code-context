import type { ResolveScaffoldOptions, ScaffoldArtifact } from './template.js';

export interface ProviderCapabilities {
  workspaceAutomation: boolean;
  mcp: boolean;
  commands: boolean;
  skills: boolean;
  agents: boolean;
}

export interface ProviderDefinition {
  id: string;
  displayName: string;
  description: string;
  capabilities: ProviderCapabilities;
  resolveArtifacts: (options: ResolveScaffoldOptions) => ScaffoldArtifact[];
}
