export const reactTemplate = `# React & Next.js Best Practices

## Core Principles
1. Use Functional Components and React Hooks exclusively.
2. Favor server components by default in Next.js App Router.
3. Keep components small, modular, and focused on a single responsibility.

## State Management
- Use \`useState\` and \`useReducer\` for local state.
- Use Context API or libraries like Zustand for global state.
- Avoid large component states; split them if necessary.

## Styling
- Use Tailwind CSS or CSS Modules.
- Keep styling responsive and mobile-first.
- Use a consistent design system (e.g., Shadcn UI).

## Performance
- Memoize expensive calculations using \`useMemo\` and callbacks with \`useCallback\`.
- Use Next.js \`Image\` component for optimized images.

## Structure
- \`components/\`: Reusable UI components.
- \`app/\` or \`pages/\`: Routing.
- \`lib/\`: Utility functions and shared logic.
- \`hooks/\`: Custom React hooks.
`;
