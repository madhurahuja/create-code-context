import { getBuiltInProviders } from '../providers/builtins.js';
import { loadProviderPlugins } from '../plugins/loader.js';
import { ProviderRegistry } from '../registry/providers.js';

export interface RuntimeBootstrapResult {
  registry: ProviderRegistry;
  warnings: string[];
}

export async function bootstrapRuntime(cwd: string): Promise<RuntimeBootstrapResult> {
  const registry = new ProviderRegistry();
  registry.registerMany(getBuiltInProviders());

  const { plugins, warnings } = await loadProviderPlugins(cwd);

  for (const plugin of plugins) {
    registry.registerMany(plugin.providers);
  }

  return { registry, warnings };
}
