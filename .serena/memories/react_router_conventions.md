# React Router v7 Conventions

## File-Based Routing
This project uses React Router v7's file-based routing system with specific conventions.

## Route Structure
```
app/routes/
├── _auth+/                    # Auth layout group
│   ├── _layout/              # Auth layout
│   ├── sign-in/              # Sign in page
│   ├── sign-up/              # Sign up page
│   ├── forgot-password/      # Forgot password page
│   └── otp/                  # OTP verification
├── _authenticated+/          # Protected routes group
│   ├── _layout/              # Main app layout
│   ├── _index/               # Dashboard home
│   ├── users+/               # Users section
│   ├── tasks+/               # Tasks section
│   ├── settings+/            # Settings section
│   ├── apps/                 # Apps page
│   ├── chats/                # Chats page
│   └── help-center/          # Help center
└── _errors+/                 # Error pages
    ├── 404.tsx
    ├── 403.tsx
    ├── 401.tsx
    ├── 500.tsx
    └── 503.tsx
```

## Naming Conventions
- `_layout/` - Layout routes (wrap child routes)
- `_index/` - Index routes (default child route)
- `+` suffix - Route groups
- `$param` - Dynamic route parameters
- `.` - Nested route segments

## Route File Structure
Each route directory typically contains:
- `route.tsx` - Main route component
- `components/` - Route-specific components
- `hooks/` - Route-specific hooks
- `data/` - Route-specific data/schemas

## Layout Patterns
- `_auth+/_layout/` - Authentication layout (login, signup pages)
- `_authenticated+/_layout/` - Main application layout (sidebar, header)
- Nested layouts inherit parent layouts

## Data Loading
- Use loaders for server-side data fetching
- Use actions for form submissions and mutations
- Use `queries.server.ts` files for server-side query logic

## Configuration
- `react-router.config.ts` - React Router configuration
- SSR enabled by default
- Uses Vercel preset for deployment

## Key Features Used
- File-based routing
- Layout routes
- Route groups
- Dynamic routes
- Error boundaries
- Server-side rendering
- Type generation for routes