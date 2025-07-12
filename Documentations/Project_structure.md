# Project Structure

## Root Directory

```
wireframe-generator/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   ├── upload/
│   │   │   │   └── route.ts
│   │   │   ├── wireframes/
│   │   │   │   └── route.ts
│   │   │   └── ai/
│   │   │       └── generate/
│   │   │           └── route.ts
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   ├── wireframes/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── toast.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── footer.tsx
│   │   ├── features/
│   │   │   ├── file-upload/
│   │   │   │   ├── upload-zone.tsx
│   │   │   │   └── file-list.tsx
│   │   │   ├── wireframe/
│   │   │   │   ├── wireframe-viewer.tsx
│   │   │   │   ├── wireframe-editor.tsx
│   │   │   │   └── wireframe-export.tsx
│   │   │   └── dashboard/
│   │   │       ├── stats-card.tsx
│   │   │       └── recent-files.tsx
│   │   └── common/
│   │       ├── loading-spinner.tsx
│   │       └── error-boundary.tsx
│   ├── lib/
│   │   ├── db/
│   │   │   ├── prisma.ts
│   │   │   └── migrations/
│   │   ├── auth/
│   │   │   ├── config.ts
│   │   │   └── providers.ts
│   │   ├── ai/
│   │   │   ├── openai.ts
│   │   │   └── prompts.ts
│   │   ├── utils/
│   │   │   ├── file-processing.ts
│   │   │   ├── validation.ts
│   │   │   └── formatting.ts
│   │   └── constants/
│   │       ├── config.ts
│   │       └── types.ts
│   ├── types/
│   │   ├── global.d.ts
│   │   ├── auth.ts
│   │   ├── wireframe.ts
│   │   └── api.ts
│   └── styles/
│       ├── globals.css
│       └── components.css
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── docs/
│   ├── api.md
│   ├── deployment.md
│   └── development.md
├── tests/
│   ├── __mocks__/
│   ├── components/
│   ├── api/
│   └── utils/
├── .env.local
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── README.md
└── vercel.json
```

## Detailed Structure

### `/src/app` - Next.js App Router

- **Purpose:** Main application routes using Next.js 15 App Router
- **Key Files:**
  - `layout.tsx` - Root layout with global providers
  - `page.tsx` - Home page with file upload interface
  - `globals.css` - Global styles and Tailwind imports
  - `loading.tsx` - Global loading UI
  - `error.tsx` - Global error handling

### `/src/app/(auth)` - Authentication Routes

- **Purpose:** Authentication-related pages using route groups
- **Files:**
  - `login/page.tsx` - User login page
  - `register/page.tsx` - User registration page

### `/src/app/api` - API Routes

- **Purpose:** Server-side API endpoints
- **Structure:**
  - `upload/route.ts` - File upload handling
  - `wireframes/route.ts` - Wireframe CRUD operations
  - `ai/generate/route.ts` - AI wireframe generation endpoint

### `/src/app/dashboard` - Dashboard Pages

- **Purpose:** User dashboard and file management
- **Files:**
  - `page.tsx` - Main dashboard view
  - `layout.tsx` - Dashboard-specific layout

### `/src/app/wireframes` - Wireframe Pages

- **Purpose:** Wireframe viewing and editing
- **Files:**
  - `page.tsx` - Wireframe list view
  - `[id]/page.tsx` - Individual wireframe view

### `/src/components` - React Components

- **Purpose:** Reusable UI components organized by category
- **Structure:**
  - `ui/` - Basic UI components (buttons, inputs, etc.)
  - `layout/` - Layout components (header, sidebar, footer)
  - `features/` - Feature-specific components
  - `common/` - Common utility components

### `/src/lib` - Utility Libraries

- **Purpose:** Application logic and utilities
- **Structure:**
  - `db/` - Database configuration and Prisma client
  - `auth/` - Authentication configuration
  - `ai/` - AI service integration
  - `utils/` - Utility functions
  - `constants/` - Application constants

### `/src/types` - TypeScript Types

- **Purpose:** TypeScript type definitions
- **Files:**
  - `global.d.ts` - Global type declarations
  - `auth.ts` - Authentication types
  - `wireframe.ts` - Wireframe-related types
  - `api.ts` - API response types

### `/prisma` - Database Schema

- **Purpose:** Database schema and migrations
- **Files:**
  - `schema.prisma` - Database schema definition
  - `migrations/` - Database migration files
  - `seed.ts` - Database seeding script

### `/public` - Static Assets

- **Purpose:** Static files served directly
- **Structure:**
  - `images/` - Image assets
  - `icons/` - Icon files
  - `favicon.ico` - Site favicon

### `/tests` - Test Files

- **Purpose:** Application testing
- **Structure:**
  - `__mocks__/` - Mock files for testing
  - `components/` - Component tests
  - `api/` - API endpoint tests
  - `utils/` - Utility function tests

## Configuration Files

### Environment Configuration

- `.env.local` - Local environment variables
- `.env.example` - Example environment file

### Build Configuration

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts

## File Naming Conventions

### React Components

- Use PascalCase for component files: `FileUpload.tsx`
- Use kebab-case for component directories: `file-upload/`
- Use descriptive names that indicate purpose

### API Routes

- Use lowercase with hyphens: `upload-file.ts`
- Use RESTful naming conventions
- Group related endpoints in directories

### Utility Functions

- Use camelCase: `processFile.ts`
- Use descriptive names indicating function purpose
- Group related utilities in directories

### Database Models

- Use PascalCase for model names: `User`, `Wireframe`
- Use camelCase for field names: `createdAt`, `fileName`

## Module Organization

### Component Architecture

- **Atomic Design:** Components organized by complexity level
- **Feature-based:** Components grouped by feature area
- **Reusability:** Common components in shared directories

### API Architecture

- **RESTful Design:** Standard HTTP methods and status codes
- **Error Handling:** Consistent error response format
- **Validation:** Input validation on all endpoints

### Database Architecture

- **Normalized Schema:** Proper relational database design
- **Indexes:** Optimized for common query patterns
- **Migrations:** Version-controlled schema changes

## Development Workflow

### Local Development

1. Clone repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run database migrations: `npx prisma migrate dev`
5. Start development server: `npm run dev`

### Build Process

1. Type checking: `npm run type-check`
2. Linting: `npm run lint`
3. Testing: `npm run test`
4. Build: `npm run build`

### Deployment Structure

- **Vercel:** Optimized for Next.js deployment
- **Supabase:** Database and authentication hosting
- **Environment Variables:** Secure configuration management
