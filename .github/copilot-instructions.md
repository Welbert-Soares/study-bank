# Study Bank - AI Coding Instructions

## Project Overview

Study Bank is a Next.js 15 study management platform for tracking progress, creating dashboards, and organizing study history for competitive exam preparation. Built with App Router, Server Actions, Clerk authentication, and Prisma ORM.

## Architecture & Tech Stack

### Core Technologies

- **Framework**: Next.js 15.3.2 (App Router, React 19, Turbopack)
- **Database**: PostgreSQL with Prisma ORM (@prisma/client 6.7.0)
- **Auth**: Clerk (@clerk/nextjs) with Portuguese localization
- **UI**: shadcn/ui (New York style) + Radix UI + Tailwind CSS v4
- **Forms**: React Hook Form + Zod validation
- **State**: React hooks pattern (no external state management)

### Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Route group for auth pages (sign-in, sign-up)
│   ├── actions/                  # Server Actions (*.actions.ts)
│   ├── api/auth/verify-user/     # User verification endpoint
│   ├── dashboard/                # Dashboard feature
│   ├── historico/                # Study history with [dia] dynamic route
│   ├── metricas/                 # Metrics tracking
│   └── config/                   # Configuration page
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── skeletons/                # Loading states (per-page skeletons)
│   └── auth-check.tsx            # Client-side user verification
├── services/                     # Business logic layer
│   ├── dashboard/                # Dashboard services (activity, metrics, revision)
│   ├── config/                   # Configuration services
│   ├── historico/                # History services
│   └── metricas/                 # Metrics services
├── hooks/                        # Custom React hooks (use-*-manager.ts pattern)
├── lib/                          # Utilities
│   ├── validations/schemas.ts    # Zod schemas
│   ├── db.ts                     # Re-exports prisma instance
│   ├── user.ts                   # User management helpers
│   └── cores.ts                  # Discipline color mapping
└── types/                        # TypeScript type definitions
```

## Key Architectural Patterns

### 1. Server Actions Pattern

- **Location**: `src/app/actions/*.actions.ts`
- **Convention**: All server actions start with `'use server'` directive
- **Authentication**: Always validate `auth().userId` from Clerk before operations
- **Revalidation**: Call `revalidatePath()` after mutations affecting multiple pages
- **Example**:

```typescript
'use server'
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

export async function updateAction(id: string, data: any) {
  const session = await auth()
  if (!session.userId) throw new Error('Unauthorized')

  await service.update(id, data, session.userId)

  revalidatePath('/dashboard')
  revalidatePath('/historico')
}
```

### 2. Service Layer Separation

- Business logic isolated in `src/services/` directory
- Services receive `userId` as parameter for security
- Services handle Prisma queries and business rules
- Actions layer (thin) only handles auth, validation, and revalidation

### 3. User Management Flow

- Clerk handles authentication, local DB stores user data
- `AuthCheck` component (`components/auth-check.tsx`) runs on mount to sync user
- `/api/auth/verify-user` endpoint calls `getOrCreateUser()` from `lib/user.ts`
- Always query with `userId` filter for multi-tenant isolation

### 4. Type-Safe Database Access

- Prisma schema defines 7 main models: `User`, `Materia`, `DiaDisciplinaMateria`, `PlanoDeEstudos`, `HistoricoEstudo`, `FerramentaPersonalizada`
- Enums: `DisciplinaNome`, `DiaDaSemana`, `StatusConteudo`
- Import types from `@prisma/client` for consistency
- Custom types in `src/types/*.ts` extend Prisma types with form data structures

### 5. Validation Strategy

- Zod schemas in `src/lib/validations/schemas.ts`
- Schemas derive from Prisma enums: `z.nativeEnum(DisciplinaNome)`
- Export inferred types: `export type MateriaInput = z.infer<typeof materiaSchema>`
- Use `@hookform/resolvers` with React Hook Form for form validation

### 6. Component Organization

- **Feature Components**: Located in `app/[feature]/_components/`
- **Shared Components**: In `components/` (navbar, auth-check)
- **UI Library**: `components/ui/` contains shadcn/ui components
- **Skeletons**: Per-page loading states in `components/skeletons/`

### 7. Custom Hooks Pattern

- Located in `src/hooks/` with `use-*-manager.ts` naming
- Manager hooks encapsulate CRUD operations and state
- Example: `useMateriasManager()` - provides `materias`, `addMateria()`, `updateMateriaItem()`, `deleteMateriaItem()`
- Always include loading states and error handling

## Domain-Specific Conventions

### Discipline Colors

Use `getCorDisciplina()` from `lib/cores.ts` for consistent discipline color mapping:

- TI: blue, Inglês: green, Português: yellow, Estatística: purple, etc.

### Day of Week Handling

- Use `DiaDaSemana` enum (Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sabado)
- Helper: `getDiaDaSemana(date)` converts Date to enum

### Study Status Flow

- `StatusConteudo`: `pendente` → `em_progresso` → `concluido`
- Progress is percentage-based (0-100)

### Revision System

- Special discipline: `Revisoes` (not a regular subject)
- Created automatically when scheduling with `criarRevisao: true`
- Filtered separately in dashboard queries

## Development Workflows

### Running Locally

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Prisma generate + Next.js build
npm start            # Production server
```

### Database Migrations

```bash
npx prisma migrate dev --name description   # Create and apply migration
npx prisma generate                         # Regenerate Prisma Client
npx prisma studio                           # Open Prisma Studio
```

### Working with Clerk

- Middleware in `src/middleware.ts` protects all routes except `/sign-in` and `/sign-up`
- Portuguese localization: `ptBR` from `@clerk/localizations`
- Theme: `neobrutalism` from `@clerk/themes`

### Adding UI Components

```bash
npx shadcn@latest add [component-name]
```

Components use "New York" style variant with neutral base color.

## Critical Integration Points

### Clerk + Prisma User Sync

1. User signs in via Clerk
2. `AuthCheck` component triggers on mount
3. POST to `/api/auth/verify-user` route
4. `getOrCreateUser()` syncs Clerk user to local DB
5. All queries filter by `userId` for tenant isolation

### Cross-Feature Data Flow

- **Dashboard** → reads `DiaDisciplinaMateria` for current day + revisions
- **Histórico** → queries historical data by date range, grouped by discipline
- **Métricas** → aggregates progress across all disciplines
- **Config** → manages `Materia` master data + scheduling

### Revalidation Strategy

After mutations, revalidate affected routes:

- Config changes: `/`, `/config`, `/dashboard`
- Schedule/status updates: `/dashboard`, `/historico`, `/metricas`
- Use `revalidatePath()` liberally to prevent stale data

## Common Pitfalls & Solutions

### Security

- ❌ **Never** query without `userId` filter
- ✅ Always validate `auth().userId` in server actions
- ✅ Add nested `userId` checks in relations: `where: { userId, materia: { userId } }`

### Performance

- Use `include` selectively in Prisma queries
- Dashboard queries should filter by day/week to limit results
- Index on `userId`, `materiaId`, `disciplina`, `dataEstudo` (already in schema)

### Date Handling

- Use `date-fns` for date manipulation
- Store dates in UTC, convert to local for display
- Historical routes use `/historico/[dia]` with ISO date string format

### Type Safety

- Never use `any` - infer types from Prisma or Zod schemas
- Import Prisma types: `import type { DisciplinaNome } from '@prisma/client'`
- Use type-only imports where possible: `import type { ... }`

## Code Style & Conventions

- **Components**: PascalCase, named exports for pages, default exports for routes
- **Files**: kebab-case for directories, PascalCase for React components
- **Server Actions**: Suffix with `Action` (e.g., `getDashboardDataAction`)
- **Services**: Suffix with `.service.ts`, export named functions
- **Hooks**: Prefix with `use`, suffix with `-manager` for CRUD hooks
- **Types**: Define in `types/` directory, export interfaces/types explicitly
- **Imports**: Use `@/` path alias, organize by: external → internal → types → CSS
- **Portuguese**: Comments and UI text in Portuguese (Brazilian)

## When Making Changes

1. **Read schema first**: Check `prisma/schema.prisma` for data model
2. **Find the service**: Look in `services/[feature]/` for business logic
3. **Update action**: Modify or create server action in `app/actions/`
4. **Add validation**: Define/update Zod schema in `lib/validations/schemas.ts`
5. **Update types**: Add TypeScript types to `types/` if needed
6. **Revalidate paths**: Add `revalidatePath()` calls for affected routes
7. **Test auth**: Ensure `userId` validation and filtering throughout chain
8. **Clean up redundant code**: After refactoring, always check for and remove:
   - Unused components that were replaced
   - Duplicate functions performing the same task
   - Obsolete pages/routes that no longer serve a purpose
   - Unused imports and dependencies
   - Old files in `_components/` folders that were superseded
   - API routes that are no longer called
   - Redundant service functions with similar implementations

## Code Maintenance & Refactoring Guidelines

### Before Committing Changes

**ALWAYS perform a cleanup audit:**

1. **Search for unused files**:

   - Check if old component files still have imports/references
   - Look for duplicate implementations (e.g., modal vs page approach)
   - Identify files that were replaced during refactoring

2. **Remove redundant code**:

   - Delete old components that were replaced with new implementations
   - Remove duplicate utility functions
   - Clean up unused types and interfaces
   - Delete obsolete API routes or actions

3. **Consolidate duplicates**:

   - If multiple files do the same thing, keep the best implementation
   - Update all references to use the consolidated version
   - Document which approach is preferred (e.g., modal over page navigation)

4. **Update documentation**:
   - Remove references to deleted files in comments
   - Update README if project structure changed significantly

### Example Cleanup Scenarios

- **After converting page to modal**: Delete the old page file and its `_components/` if they're not reused
- **After creating new action**: Check if old actions in different files do the same thing
- **After refactoring UI**: Remove old component variants that are no longer used
- **After API route changes**: Delete routes that are superseded by new implementations

### Red Flags That Indicate Cleanup Needed

- Multiple files with similar names (e.g., `EditModal.tsx` and `EditPage.tsx`)
- Components in `_components/` folders that aren't imported anywhere
- Routes that return 404 or are never linked to
- Functions with "old", "legacy", or "deprecated" in comments
- Duplicate service methods across different service files

## Study Planning Context (Domain Knowledge)

This app manages competitive exam study schedules (Banco do Brasil - TI). Key concepts:

- Weekly study plans with two disciplines per day (one major, one minor)
- Revision cycles on Saturdays with partial exams
- Essay writing (Redação) on specific days
- Progress tracking by discipline with percentage completion
- Historical data preserved when subjects are deleted (HistoricoEstudo)
- Custom tools/links for external resources (Notion, Quizlet)

Understanding this domain helps when implementing features around scheduling, metrics, and progress tracking.
