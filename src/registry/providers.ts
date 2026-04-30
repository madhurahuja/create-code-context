import type { ProviderDefinition } from '../types/provider.js';

export class ProviderRegistry {
  private readonly providers = new Map<string, ProviderDefinition>();

  register(provider: ProviderDefinition): void {
    const key = provider.id.trim().toLowerCase();
    if (!key) {
      throw new Error('Provider id cannot be empty.');
    }

    if (this.providers.has(key)) {
      throw new Error(`Provider "${provider.id}" is already registered.`);
    }

    this.providers.set(key, provider);
  }

  registerMany(providers: ProviderDefinition[]): void {
    for (const provider of providers) {
      this.register(provider);
    }
  }

  list(): ProviderDefinition[] {
    return Array.from(this.providers.values());
  }

  get(providerId: string): ProviderDefinition | undefined {
    return this.providers.get(providerId.trim().toLowerCase());
  }
}
