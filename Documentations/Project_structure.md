# Project Structure Guide

This document provides examples of well-organized project structures for different types of applications. Use these as templates to maintain consistency and scalability.

## Next.js 15 with App Router - Complete Example

### Basic Structure

```
my-nextjs-app/
├── README.md
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── .env.local
├── .env.example
├── .gitignore
├── public/
│   ├── favicon.ico
│   ├── images/
│   └── icons/
├── src/
│   ├── app/                    # App Router (Next.js 15)
│   │   ├── globals.css
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── loading.tsx         # Loading UI
│   │   ├── error.tsx           # Error UI
│   │   ├── not-found.tsx       # 404 page
│   │   ├── (auth)/             # Route groups
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── loading.tsx
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │   └── api/                # API routes
│   │       ├── auth/
│   │       │   └── route.ts
│   │       ├── tasks/
│   │       │   ├── route.ts
│   │       │   └── [id]/
│   │       │       └── route.ts
│   │       └── users/
│   │           └── route.ts
│   ├── components/             # Reusable components
│   │   ├── ui/                 # Base UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── modal.tsx
│   │   │   └── index.ts
│   │   ├── forms/              # Form components
│   │   │   ├── login-form.tsx
│   │   │   └── task-form.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── footer.tsx
│   │   └── features/           # Feature-specific components
│   │       ├── tasks/
│   │       │   ├── task-list.tsx
│   │       │   ├── task-item.tsx
│   │       │   └── task-filters.tsx
│   │       └── auth/
│   │           ├── login-button.tsx
│   │           └── user-profile.tsx
│   ├── lib/                    # Utility functions and configurations
│   │   ├── auth.ts             # Authentication config
│   │   ├── db.ts               # Database connection
│   │   ├── utils.ts            # General utilities
│   │   ├── validations.ts      # Zod schemas
│   │   └── constants.ts        # App constants
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-auth.ts
│   │   ├── use-tasks.ts
│   │   └── use-local-storage.ts
│   ├── store/                  # State management
│   │   ├── auth-store.ts
│   │   ├── task-store.ts
│   │   └── ui-store.ts
│   ├── types/                  # TypeScript type definitions
│   │   ├── auth.ts
│   │   ├── task.ts
│   │   └── api.ts
│   └── styles/                 # Global styles
│       ├── globals.css
│       └── components.css
├── prisma/                     # Database schema and migrations
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
├── tests/                      # Test files
│   ├── __mocks__/
│   ├── components/
│   ├── pages/
│   └── utils/
└── docs/                       # Documentation
    ├── api.md
    └── deployment.md
```

## Feature-Based Organization (Recommended for Large Apps)

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── tasks/
│   │   │   ├── page.tsx
│   │   │   ├── [id]/
│   │   │   │   ├── page.tsx
│   │   │   │   └── edit/page.tsx
│   │   │   └── new/page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   └── settings/
│   │       ├── page.tsx
│   │       ├── profile/page.tsx
│   │       └── preferences/page.tsx
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       ├── tasks/route.ts
│       └── projects/route.ts
├── features/                   # Feature-based modules
│   ├── auth/
│   │   ├── components/
│   │   │   ├── login-form.tsx
│   │   │   └── register-form.tsx
│   │   ├── hooks/
│   │   │   └── use-auth.ts
│   │   ├── services/
│   │   │   └── auth-service.ts
│   │   └── types/
│   │       └── auth.types.ts
│   ├── tasks/
│   │   ├── components/
│   │   │   ├── task-list.tsx
│   │   │   ├── task-item.tsx
│   │   │   ├── task-form.tsx
│   │   │   └── task-filters.tsx
│   │   ├── hooks/
│   │   │   ├── use-tasks.ts
│   │   │   └── use-task-filters.ts
│   │   ├── services/
│   │   │   └── task-service.ts
│   │   └── types/
│   │       └── task.types.ts
│   └── projects/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── types/
├── shared/                     # Shared across features
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── common/
│   ├── hooks/
│   ├── utils/
│   ├── types/
│   └── constants/
└── lib/
    ├── auth.ts
    ├── db.ts
    └── utils.ts
```

## App Router Routing Examples

### 1. Basic Pages

```
app/
├── page.tsx                    # / (home)
├── about/page.tsx              # /about
├── contact/page.tsx            # /contact
└── blog/
    ├── page.tsx                # /blog
    └── [slug]/page.tsx         # /blog/[slug]
```

### 2. Dynamic Routes

```
app/
├── products/
│   ├── page.tsx                # /products
│   ├── [id]/page.tsx           # /products/123
│   └── [id]/
│       ├── page.tsx            # /products/123
│       ├── reviews/page.tsx    # /products/123/reviews
│       └── edit/page.tsx       # /products/123/edit
└── users/
    ├── [userId]/
    │   ├── page.tsx            # /users/456
    │   └── posts/
    │       ├── page.tsx        # /users/456/posts
    │       └── [postId]/page.tsx # /users/456/posts/789
```

### 3. Route Groups (Organization without affecting URL)

```
app/
├── (marketing)/
│   ├── page.tsx                # /
│   ├── about/page.tsx          # /about
│   └── contact/page.tsx        # /contact
├── (dashboard)/
│   ├── layout.tsx              # Dashboard layout
│   ├── dashboard/page.tsx      # /dashboard
│   ├── settings/page.tsx       # /settings
│   └── profile/page.tsx        # /profile
└── (auth)/
    ├── login/page.tsx          # /login
    └── register/page.tsx       # /register
```

### 4. Parallel Routes

```
app/
├── @sidebar/
│   ├── default.tsx
│   └── settings/page.tsx
├── @main/
│   ├── default.tsx
│   └── settings/page.tsx
├── layout.tsx                  # Renders both @sidebar and @main
└── settings/page.tsx
```

### 5. Intercepting Routes

```
app/
├── feed/
│   ├── page.tsx
│   └── @modal/
│       └── (..)photo/
│           └── [id]/page.tsx   # Intercepts /photo/[id]
├── photo/
│   └── [id]/page.tsx           # /photo/123
└── layout.tsx
```

## Component Organization Patterns

### 1. UI Components (Design System)

```
components/ui/
├── button/
│   ├── button.tsx
│   ├── button.stories.tsx
│   ├── button.test.tsx
│   └── index.ts
├── input/
│   ├── input.tsx
│   ├── input.stories.tsx
│   └── index.ts
├── modal/
│   ├── modal.tsx
│   ├── modal-header.tsx
│   ├── modal-body.tsx
│   ├── modal-footer.tsx
│   └── index.ts
└── index.ts                    # Export all components
```

### 2. Feature Components

```
components/features/
├── tasks/
│   ├── task-list/
│   │   ├── task-list.tsx
│   │   ├── task-list.test.tsx
│   │   └── index.ts
│   ├── task-item/
│   │   ├── task-item.tsx
│   │   ├── task-item.test.tsx
│   │   └── index.ts
│   └── index.ts
└── auth/
    ├── login-form/
    ├── register-form/
    └── index.ts
```

## Configuration Files Structure

### 1. Next.js Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["example.com"],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

module.exports = nextConfig;
```

### 2. TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/types/*": ["./src/types/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 3. Tailwind Configuration

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          900: "#1e3a8a",
        },
      },
    },
  },
  plugins: [],
};
```

## Best Practices Summary

### 1. File Naming Conventions

- **Pages**: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`
- **Components**: `kebab-case` for folders, `PascalCase` for files
- **Utilities**: `camelCase` for functions, `kebab-case` for files
- **Constants**: `UPPER_SNAKE_CASE` for values, `kebab-case` for files

### 2. Import/Export Patterns

```typescript
// Use barrel exports for cleaner imports
// components/ui/index.ts
export { Button } from "./button";
export { Input } from "./input";
export { Modal } from "./modal";

// Import usage
import { Button, Input, Modal } from "@/components/ui";
```

### 3. Environment Variables

```bash
# .env.local
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Folder Organization Rules

- **Group by feature** for large applications
- **Group by type** for smaller applications
- **Keep related files together**
- **Use consistent naming conventions**
- **Separate concerns** (components, hooks, utils, types)

This structure provides a solid foundation for scalable Next.js 15 applications with the App Router.
