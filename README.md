
# Portfolio Chirag

Modern Next.js portfolio project following industry standards.

## Project Structure

```
src/
	components/   # Reusable React components
	constants/    # Application-wide constants
	features/     # Feature modules
	hooks/        # Custom React hooks
public/         # Static assets
app/            # Next.js app directory
```

## Development

### Install dependencies
```sh
npm install
```

### Start development server
```sh
npm run dev
```

### Lint & Format
```sh
npm run lint
npm run format
```

### Environment Variables
Copy `.env.example` to `.env.local` and update as needed.

## Git Workflow

- Uses [Husky](https://typicode.github.io/husky) for pre-commit and commit-msg hooks
- [Commitlint](https://commitlint.js.org/) enforces Conventional Commits
- [lint-staged](https://github.com/okonet/lint-staged) for staged file linting

## Pull Requests

- Use the provided PR template
- PR titles must follow Conventional Commits
- Ensure all checks pass before requesting review

## VS Code Recommended Extensions

- ESLint
- Prettier
- Stylelint
- GitHub Pull Requests

## License

MIT
