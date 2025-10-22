# Code Style and Conventions

## General Conventions
- Use TypeScript for all files
- Prefer functional components with hooks
- Use meaningful, descriptive names for variables and functions
- File naming: kebab-case for files, PascalCase for components

## TypeScript Configuration
- Strict mode enabled
- No unused locals or parameters allowed
- ESModule interop enabled
- Path mapping: `~/*` maps to `./app/*`
- Target: ES2022

## Prettier Configuration
- No semicolons (`semi: false`)
- Single quotes (`singleQuote: true`)
- Trailing commas (`trailingComma: 'all'`)
- Plugins: organize-imports, tailwindcss
- TailwindCSS function: `twMerge`

## Biome Linting Rules
- Recommended rules enabled
- `useAwait` as error
- `noArrayIndexKey` disabled
- `useUniqueElementIds` disabled
- `noNestedComponentDefinitions` disabled
- `noSvgWithoutTitle` disabled for a11y

## Component Patterns
### UI Components
- Use `class-variance-authority` (cva) for component variants
- Combine classes with `cn()` utility (clsx + tailwind-merge)
- Support `asChild` prop pattern with Radix Slot
- Use forwardRef for component refs
- TypeScript props with proper typing

### Example Component Structure:
```tsx
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'
import { cn } from '~/lib/utils'

const componentVariants = cva(
  'base-classes',
  {
    variants: {
      variant: { ... },
      size: { ... }
    },
    defaultVariants: { ... }
  }
)

function Component({ 
  className, 
  variant, 
  size, 
  asChild = false, 
  ...props 
}: React.ComponentProps<'div'> & 
  VariantProps<typeof componentVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'div'
  
  return (
    <Comp
      className={cn(componentVariants({ variant, size, className }))}
      {...props}
    />
  )
}
```

## Import Organization
- External packages first
- Internal imports second
- Type imports separate when needed
- Use path mapping (`~/` for app directory)

## File Structure Conventions
- Components in `app/components/`
- UI primitives in `app/components/ui/`
- Layout components in `app/components/layout/`
- Utilities in `app/lib/`
- Custom hooks in `app/hooks/`
- Routes follow React Router v7 file conventions