# Suggested Commands

## Development Commands
```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Type checking with React Router type generation
pnpm run typecheck

# Linting with Biome
pnpm run lint

# Format code with Prettier
pnpm run format

# Fix formatting issues
pnpm run format:fix

# Run all validations (lint + format + typecheck)
pnpm run validate
```

## Package Management
```bash
# Install dependencies
pnpm install

# Add a new dependency
pnpm add <package-name>

# Add a dev dependency
pnpm add -D <package-name>
```

## Git Operations
```bash
# Check status
git status

# View changes
git diff

# Add files
git add .

# Commit changes
git commit -m "message"

# Push changes
git push
```

## System Commands (Linux)
```bash
# List files
ls -la

# Change directory
cd <directory>

# Search for files
find . -name "*.tsx"

# Search in files
grep -r "search-term" .

# File operations
cp <source> <destination>
mv <source> <destination>
rm <file>
```

## Important Notes
- Always run `pnpm run validate` before committing changes
- Use `pnpm run typecheck` to ensure TypeScript types are correct
- The project uses React Router v7 file-based routing conventions