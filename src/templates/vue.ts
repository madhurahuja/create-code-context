export const vueTemplate = `# Vue & Nuxt Best Practices

## Core Principles
1. Use Composition API with \`<script setup>\` syntax.
2. Favor single-file components (.vue).
3. Keep components small and modular.

## State Management
- Use \`ref\` and \`reactive\` for local component state.
- Use Pinia for robust, type-safe global state management.

## Reactivity
- Use \`computed\` for derived state.
- Use \`watch\` and \`watchEffect\` cautiously to avoid side-effects chains.

## Structure
- \`components/\`: Auto-imported UI components (in Nuxt).
- \`pages/\`: File-based routing.
- \`composables/\`: Reusable stateful logic / hooks.
- \`utils/\`: Stateless helper functions.

## Performance
- Use Nuxt SSR/SSG capabilities effectively.
- Lazy load components using \`defineAsyncComponent\` or Nuxt's \`<Lazy...>\` auto-imports.
`;
