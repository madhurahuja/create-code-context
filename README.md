# create-claude-context

A beautiful, interactive CLI tool to quickly bootstrap Claude-supported projects with essential context markdown files based on best practices.

## Usage

You can run the CLI immediately using `npx` (no installation required):

```sh
npx create-claude-context
```

The interactive prompt will ask you for:
1. **Your project name** (A directory will be created)
2. **Your framework/environment** (React, Vue, Node.js, Python, or Other)
3. **General guidelines** (Whether to include an extra `.claudeprompt` file with interaction rules)

It will generate the appropriate `CLAUDE.md` file for your stack, which Claude can read to understand the architecture, styling preferences, and code standards of your project.

## Development

Install dependencies:
```sh
npm install
```

Run in development mode:
```sh
npm run dev
```

Build for production:
```sh
npm run build
```

## Publishing
This package automatically publishes to NPM via GitHub Actions when a new release or tag (e.g. `v1.0.0`) is pushed to the repository.
