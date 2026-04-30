export type Framework = 'react' | 'vue' | 'node' | 'python' | 'other';

export type ComplexityTier =
  | 'basic'
  | 'minimal'
  | 'production'
  | 'portfolio'
  | 'mcp-workspace';

export interface ScaffoldArtifact {
  path: string;
  content: string;
}

export interface ResolveScaffoldOptions {
  projectName: string;
  framework: Framework;
  complexity: ComplexityTier;
  generateGuidelines: boolean;
}
