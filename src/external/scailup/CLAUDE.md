# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (runs on port 8080)
- `npm run build` - Build for production 
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture Overview

This is a modern React SPA built with Vite, TypeScript, and Tailwind CSS. The application uses:

- **Vite** for build tooling and development server
- **React Router** for client-side routing with lazy-loaded pages
- **TanStack Query** for data fetching and caching
- **shadcn/ui** components built on Radix UI primitives
- **Tailwind CSS** with custom premium design tokens and animations

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── agents/         # Agent-specific components
│   ├── automations/    # Automation page components
│   ├── consultancy/    # Consultancy page components
│   ├── contact/        # Contact page components
│   ├── hero/           # Hero section components
│   └── saas/          # SaaS page components
├── pages/              # Route components (lazy loaded)
├── hooks/              # Custom React hooks
├── lib/               # Utility functions
└── styles/            # Additional CSS files
```

### Key Architecture Patterns

- **Lazy Loading**: All pages are lazy-loaded for optimal performance
- **Code Splitting**: Vite configuration includes manual chunks for vendor libraries
- **Component Organization**: Components are grouped by feature/page in subdirectories
- **Performance**: Optimized QueryClient configuration and build settings
- **Design System**: Custom premium color palette and Apple-inspired animations

### Routing

The app uses React Router with the following routes:
- `/` - Main landing page
- `/contact` - Contact page
- `/ai-automations` - AI Automations service page
- `/custom-ai-saas` - Custom AI SaaS service page
- `/consultancy` - Consultancy service page
- `/autonomous-ai-agents` - AI Agents service page

### Styling

- **Tailwind CSS** with custom configuration including premium color palette
- **CSS Variables** for theming (--premium-black, --premium-gray, etc.)
- **Custom Animations**: Extensive keyframes for Apple-style animations
- **shadcn/ui** design system with Radix UI components

### Build Configuration

- **Vite**: Configured with SWC for fast compilation
- **Code Splitting**: Manual chunks for better caching
- **Optimization**: Terser minification with console.log removal in production
- **Development**: Hot reload on port 8080

### TypeScript Configuration

- Path aliases: `@/*` maps to `./src/*`
- Relaxed type checking (noImplicitAny: false, strictNullChecks: false)
- References to separate app and node configurations

## Important Notes

- This is a Lovable.dev project that can be edited via their platform or locally
- Components use premium design patterns with focus on performance and aesthetics
- The project uses `lovable-tagger` in development for component identification
- All pages implement lazy loading for optimal bundle splitting

## ScailUp Brand Colors

The standard ScailUp brand colors are:
- **Primary**: `from-blue-500 to-blue-400` (LinkedIn-style gradient)
- **Background tint**: `via-blue-900/20` for subtle background coloring
- **Hero backlights**: `bg-scailup-blue` and `bg-scailup-cyan` (original brand colors)

Use `from-blue-500 to-blue-400` as the default accent color for new components unless specifically requested otherwise.