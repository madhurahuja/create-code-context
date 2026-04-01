export const nodeTemplate = `# Node.js Backend Best Practices

## Core Principles
1. Build stateless applications for better scalability.
2. Use async/await over callbacks or raw promises.
3. Validate all inputs thoroughly (e.g., Zod, Joi).

## Architecture
- Follow MVC (Model-View-Controller) or clean architecture patterns.
- Keep controllers thin and place business logic in services.
- Abstract database interactions behind a data access layer / repository pattern.

## Error Handling
- Use structured error handling.
- Build a centralized error handling middleware.
- Never expose raw stack traces to the client in production.

## Security
- Use Helmet to secure HTTP headers.
- Always hash passwords (bcrypt, Argon2).
- Use CORS middleware and rate limiting.
- Parameterize database queries to prevent SQL injection.

## Structure
- \`src/controllers/\`: Request handlers.
- \`src/services/\`: Business logic.
- \`src/models/\`: Data schemas/entities.
- \`src/middlewares/\`: Custom middlewares.
`;
