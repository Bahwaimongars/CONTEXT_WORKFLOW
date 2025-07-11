# Project Structure - Prompt2Video

## Overview

This document outlines the project structure for the Prompt2Video application, a Next.js 14 based SaaS platform for AI-powered video generation.

## Root Directory Structure

```
CONTEXT_WORKFLOW/
├── .gitignore                    # Git ignore patterns
├── PRD.md                       # Product Requirements Document
├── README.md                    # Project documentation
├── package.json                 # Node.js dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # TailwindCSS configuration
├── next.config.js              # Next.js configuration
├── .env.local                  # Environment variables (local)
├── .env.example                # Environment variables template
├── Documentations/             # Project documentation
│   ├── Implementation.md       # Implementation roadmap
│   ├── Project_structure.md    # This file
│   ├── UI_UX_doc.md           # UI/UX specifications
│   └── bugs_tracking.md       # Bug tracking and resolution
├── app/                        # Next.js 14 App Router
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   ├── globals.css            # Global styles
│   ├── (auth)/                # Authentication routes
│   │   ├── login/
│   │   ├── signup/
│   │   └── reset-password/
│   ├── dashboard/             # User dashboard
│   ├── generate/              # Video generation
│   ├── videos/                # Video management
│   └── api/                   # API routes
│       ├── auth/
│       ├── videos/
│       └── generate/
├── components/                 # Reusable React components
│   ├── ui/                    # Basic UI components
│   ├── forms/                 # Form components
│   ├── layout/                # Layout components
│   └── video/                 # Video-related components
├── lib/                       # Utility libraries
│   ├── supabase/              # Supabase client and utilities
│   ├── ai/                    # AI service integrations
│   ├── utils/                 # General utilities
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── styles/                    # Additional styles
└── tests/                     # Test files
    ├── __tests__/
    ├── __mocks__/
    └── setup.ts
```

## Key Directories

### `/app` - Next.js 14 App Router

- **Purpose**: Main application structure using Next.js 14 App Router
- **Structure**: Route-based organization with nested layouts
- **Key Files**:
  - `layout.tsx`: Root layout with providers and global setup
  - `page.tsx`: Landing page
  - `globals.css`: Global styles and TailwindCSS imports

### `/components` - Reusable Components

- **Purpose**: Modular, reusable React components
- **Structure**: Organized by functionality and complexity
- **Subfolders**:
  - `ui/`: Basic UI components (buttons, inputs, cards)
  - `forms/`: Form-specific components
  - `layout/`: Navigation, headers, footers
  - `video/`: Video player, generation interface

### `/lib` - Utility Libraries

- **Purpose**: Business logic, external integrations, and utilities
- **Structure**: Organized by service or functionality
- **Key Areas**:
  - `supabase/`: Database and authentication utilities
  - `ai/`: OpenAI, RunwayML, Pika Labs integrations
  - `utils/`: General utility functions
  - `types/`: TypeScript type definitions

### `/Documentations` - Project Documentation

- **Purpose**: Comprehensive project documentation
- **Files**:
  - `Implementation.md`: Phase-by-phase implementation plan
  - `Project_structure.md`: This file
  - `UI_UX_doc.md`: Design system and UI specifications
  - `bugs_tracking.md`: Bug tracking and resolution log

## File Naming Conventions

### React Components

- **Components**: PascalCase (e.g., `VideoPlayer.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useVideoGeneration.ts`)
- **Utilities**: camelCase (e.g., `formatDuration.ts`)

### Pages and Routes

- **Pages**: kebab-case for URLs (e.g., `video-details/`)
- **API Routes**: kebab-case (e.g., `api/generate-video/`)

### Configuration Files

- **Config**: Standard naming (e.g., `next.config.js`, `tailwind.config.js`)
- **Environment**: Standard naming (e.g., `.env.local`, `.env.example`)

## Development Guidelines

### Code Organization

1. **Single Responsibility**: Each file should have a single, clear purpose
2. **Consistent Imports**: Use absolute imports from project root
3. **Type Safety**: All components and functions should be properly typed
4. **Component Structure**: Props interface, component, and export in that order

### Dependencies Management

- **Core Dependencies**: Next.js 14, React 18, TypeScript, TailwindCSS
- **External Services**: Supabase, OpenAI, RunwayML, Pika Labs
- **Development Tools**: ESLint, Prettier, Testing frameworks

### Environment Configuration

- **Local Development**: `.env.local` for local-specific variables
- **Production**: Environment variables configured in Vercel
- **Template**: `.env.example` with all required variables documented

## Deployment Structure

### Vercel Deployment

- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Environment Variables**: Configured in Vercel dashboard
- **Domain**: Custom domain configuration

### Supabase Integration

- **Database**: PostgreSQL with Row Level Security
- **Authentication**: Magic Link and JWT
- **Storage**: Video file storage with CDN
- **Edge Functions**: Server-side processing when needed

## Security Considerations

### File Access

- **Public Assets**: Only in `/public` directory
- **Environment Variables**: Never commit to repository
- **API Keys**: Server-side only, never expose to client
- **User Content**: Proper access controls and validation

### Code Security

- **Input Validation**: All user inputs validated and sanitized
- **Authentication**: Proper middleware on protected routes
- **CORS**: Configured appropriately for API endpoints
- **Dependencies**: Regular security audits and updates

## Future Scalability

### Modular Architecture

- **Component Library**: Reusable UI components
- **Service Layer**: Abstract external API integrations
- **Database Layer**: Efficient queries and caching
- **Feature Flags**: Gradual rollout of new features

### Performance Optimization

- **Code Splitting**: Route-based and component-based
- **Image Optimization**: Next.js Image component
- **Caching**: Strategic caching at multiple levels
- **CDN**: Static assets and video content delivery

This structure is designed to be scalable, maintainable, and follows Next.js 14 best practices while supporting the specific needs of the Prompt2Video application.
