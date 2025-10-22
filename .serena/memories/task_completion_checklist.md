# Task Completion Checklist

## Before Committing Code Changes

### 1. Code Quality Checks
```bash
# Run linting
pnpm run lint

# Check and fix formatting
pnpm run format
# If formatting issues found:
pnpm run format:fix

# Type checking
pnpm run typecheck

# Run all validations at once
pnpm run validate
```

### 2. Verify Functionality
- Test the changed functionality manually
- Ensure no console errors in browser dev tools
- Check responsive design if UI changes were made
- Verify accessibility if applicable

### 3. Code Review Checklist
- [ ] Follow TypeScript strict mode requirements
- [ ] Use proper component patterns (cva, cn utility)
- [ ] Follow file naming conventions
- [ ] Use path mapping (`~/` for app imports)
- [ ] No unused variables or imports
- [ ] Proper error handling
- [ ] Accessibility considerations
- [ ] Responsive design considerations

### 4. Git Workflow
```bash
# Check status
git status

# Add changes
git add .

# Commit with descriptive message
git commit -m "descriptive commit message"

# Push to remote
git push
```

### 5. Common Issues to Avoid
- Don't commit code with TypeScript errors
- Don't commit code with linting errors
- Don't commit unformatted code
- Don't commit unused imports or variables
- Don't break existing functionality
- Don't ignore accessibility best practices

### 6. Testing
- Currently no automated tests configured
- Manual testing is required
- Test in both light and dark modes
- Test responsive behavior on different screen sizes

## Notes
- The project uses React Router v7 conventions
- Always run the full validation suite before committing
- Use meaningful commit messages
- Consider the impact on existing components when making changes