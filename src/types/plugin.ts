import type { ProviderDefinition } from './provider.js';

export interface ProviderPlugin {
  name: string;
  version?: string;
  providers: ProviderDefinition[];
}
