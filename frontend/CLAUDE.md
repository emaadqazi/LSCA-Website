# Supply Chain Club - Frontend Development Guide

## Project Overview
A modern, responsive web application for the Laurier Supply Chain Club with plans to expand to mobile using React Native.

## Tech Stack (Phase 1 - Current)

### Core Technologies
- **React 18+** with **TypeScript** - Type-safe component development
- **Vite** - Fast build tool and HMR
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing

### State Management & Data
- **Zustand** - Lightweight state management (preferred over Redux for simplicity)
- **TanStack Query (React Query)** - Server state & caching
- **Axios** - HTTP client (future API integration)

### UI Components & Interactions
- **Headless UI** or **Radix UI** - Accessible component primitives
- **Framer Motion** - Smooth animations and transitions
- **React Hook Form** - Form handling with validation
- **Zod** - Runtime type validation

### Development Tools
- **ESLint + Prettier** - Code quality
- **Husky + lint-staged** - Pre-commit hooks
- **Vitest** - Unit testing
- **React Testing Library** - Component testing

## Project Structure

```
supply-chain-club/
├── public/
│   └── assets/
│       ├── images/
│       └── club-photo.jpg
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── layout/          # Layout components (Header, Footer, etc.)
│   │   └── features/        # Feature-specific components
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Events.tsx
│   │   └── Contact.tsx
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API services (future)
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Helper functions
│   ├── store/               # Zustand stores
│   ├── styles/              # Global styles
│   ├── App.tsx
│   └── main.tsx
├── tests/
├── .eslintrc.cjs
├── .prettierrc
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## Development Guidelines

### Component Patterns
- Use functional components with hooks
- Implement proper TypeScript interfaces for props
- Keep components small and focused (Single Responsibility)
- Use composition over inheritance

### Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useEventData.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase with descriptive names (e.g., `EventType`, `UserProfile`)

### Styling Guidelines
- Use Tailwind utility classes for styling
- Create custom classes in `styles/` for complex reusable styles
- Follow mobile-first responsive design
- Ensure accessibility (ARIA labels, semantic HTML)

### State Management Strategy
- **Local state**: useState for component-specific state
- **Global state**: Zustand for app-wide state (user preferences, theme)
- **Server state**: TanStack Query for API data (future)

### Animation Best Practices
- Use Framer Motion for complex animations
- Keep animations subtle and purposeful
- Ensure animations don't impact performance
- Make animations respect user's motion preferences

## Getting Started

### Initial Setup
```bash
# Create Vite project with React + TypeScript
npm create vite@latest supply-chain-club -- --template react-ts

# Install core dependencies
npm install react-router-dom zustand @tanstack/react-query axios

# Install UI & Animation
npm install @headlessui/react framer-motion react-hook-form zod

# Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install development tools
npm install -D eslint prettier eslint-config-prettier
npm install -D husky lint-staged
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests
npm run lint         # Lint code
npm run format       # Format code with Prettier
```

## Current Sprint: Landing Page

### Landing Page Requirements
- **Hero Section**
  - Animated background image of the club
  - Eye-catching visual effects (parallax, gradient overlay, or glassmorphism)
  - Clear call-to-action button
  - Club tagline/mission statement

- **Features**
  - Responsive design (mobile, tablet, desktop)
  - Smooth scroll animations
  - Performance optimized (<3 second load)
  - Accessible components

### Landing Page Components to Build
1. `HeroSection.tsx` - Main hero with animated background
2. `Navigation.tsx` - Top navigation bar
3. `CTAButton.tsx` - Reusable call-to-action button
4. `Footer.tsx` - Basic footer component

## Team Collaboration

### Git Workflow
- **Main branch**: Production-ready code
- **Develop branch**: Integration branch
- **Feature branches**: `feature/component-name`
- **Commit format**: `type(scope): description`
  - Example: `feat(hero): add animated background`

### Code Review Process
1. Create feature branch from `develop`
2. Implement feature with tests
3. Create pull request with description
4. Request review from team member
5. Address feedback and merge

### Communication
- Document complex logic with comments
- Update this Claude.MD as the project evolves
- Share reusable components in team chat
- Weekly sync to discuss progress

## Performance Goals
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3s
- Lighthouse Score: >90

## Accessibility Goals
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- Proper color contrast ratios

## Future Considerations (Phase 2 & 3)
- Backend API integration
- User authentication
- Mobile app with React Native
- Shared component library
- Monorepo setup with Nx

## Resources
- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

## Notes
- Keep mobile-first approach for future React Native migration
- Maintain consistent TypeScript types for code sharing
- Document all reusable components
- Prioritize performance and accessibility

---

**Last Updated**: October 2025
**Team Size**: 3 developers
**Current Phase**: Phase 1 - Frontend Development