# Project Overview

## Project Purpose
This is "Shadcn Admin Dashboard" - an admin dashboard UI built with Shadcn and React Router v7. It's a collection of reusable dashboard UI components built with responsiveness and accessibility in mind.

## Key Features
- Light/dark mode
- Responsive design
- Accessible components
- Built-in Sidebar component
- Global Search Command
- 10+ pages
- Extra custom components

## Tech Stack
- **Framework**: React Router v7 (full-stack framework)
- **UI Library**: Yamada UI (@yamada-ui/react) + ShadcnUI components (TailwindCSS + RadixUI)
- **Build Tool**: Vite
- **Form Validation**: Conform with Zod
- **Type Checking**: TypeScript
- **Linting/Formatting**: Biome & Prettier
- **Icons**: Tabler Icons, Radix Icons, Lucide React
- **Styling**: TailwindCSS v4 with custom utilities
- **Data Tables**: @tanstack/react-table
- **Date Handling**: date-fns
- **Charts**: Recharts
- **Themes**: next-themes
- **Notifications**: Sonner, remix-toast

## Project Structure
- `app/` - Main application directory (React Router v7 convention)
  - `components/` - Reusable UI components
    - `ui/` - Base UI components (buttons, inputs, etc.)
    - `layout/` - Layout-specific components
  - `routes/` - File-based routing
    - `_auth+/` - Authentication routes
    - `_authenticated+/` - Protected routes
    - `_errors+/` - Error pages
  - `lib/` - Utility functions
  - `hooks/` - Custom React hooks
  - `data/` - Static data
  - `context/` - React contexts
- `public/` - Static assets

## Development Environment
- Node.js >= 20.0.0
- pnpm as package manager
- Uses Vercel preset for deployment