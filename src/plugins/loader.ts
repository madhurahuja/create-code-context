import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import type { ProviderPlugin } from '../types/plugin.js';

export interface PluginLoadResult {
  plugins: ProviderPlugin[];
  warnings: string[];
}

function isProviderPlugin(value: unknown): value is ProviderPlugin {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const maybePlugin = value as Partial<ProviderPlugin>;
  return typeof maybePlugin.name === 'string' && Array.isArray(maybePlugin.providers);
}

async function listDirSafe(dirPath: string): Promise<string[]> {
  try {
    return await fs.readdir(dirPath);
  } catch {
    return [];
  }
}

async function discoverLocalPluginModules(cwd: string): Promise<string[]> {
  const localPluginDir = path.join(cwd, 'llm-context-plugins');
  const files = await listDirSafe(localPluginDir);

  return files
    .filter((fileName) => fileName.endsWith('.js') || fileName.endsWith('.mjs') || fileName.endsWith('.cjs'))
    .map((fileName) => path.join(localPluginDir, fileName));
}

async function discoverPackagePluginModules(cwd: string): Promise<string[]> {
  const nodeModulesPath = path.join(cwd, 'node_modules');
  const namespacedScopePath = path.join(nodeModulesPath, '@create-llm-context');

  const directPackages = (await listDirSafe(nodeModulesPath)).filter((entry) =>
    entry.startsWith('create-llm-context-provider-'),
  );

  const scopedPackages = (await listDirSafe(namespacedScopePath)).filter((entry) =>
    entry.startsWith('provider-'),
  );

  const moduleSpecifiers = directPackages.map((entry) => entry);
  moduleSpecifiers.push(...scopedPackages.map((entry) => `@create-llm-context/${entry}`));

  return moduleSpecifiers;
}

async function loadPluginModule(moduleSpecifier: string): Promise<unknown> {
  const isFilePath = path.isAbsolute(moduleSpecifier) || moduleSpecifier.startsWith('.');

  if (isFilePath) {
    const moduleUrl = pathToFileURL(moduleSpecifier).href;
    return import(moduleUrl);
  }

  return import(moduleSpecifier);
}

export async function loadProviderPlugins(cwd: string): Promise<PluginLoadResult> {
  const plugins: ProviderPlugin[] = [];
  const warnings: string[] = [];

  const localModules = await discoverLocalPluginModules(cwd);
  const packageModules = await discoverPackagePluginModules(cwd);
  const discoveredModules = [...new Set([...localModules, ...packageModules])];

  for (const moduleSpecifier of discoveredModules) {
    try {
      const loaded = await loadPluginModule(moduleSpecifier);
      const candidate = (loaded as { default?: unknown }).default ?? loaded;

      if (!isProviderPlugin(candidate)) {
        warnings.push(`Skipping plugin \"${moduleSpecifier}\" because it does not export a valid ProviderPlugin.`);
        continue;
      }

      plugins.push(candidate);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      warnings.push(`Failed to load plugin \"${moduleSpecifier}\": ${message}`);
    }
  }

  return { plugins, warnings };
}
