# @so1/shared

Shared types, validation schemas, and API contracts for the so1 platform. Used by both `so1-console` (frontend) and `so1-control-plane-api` (BFF) to ensure type safety and contract compliance across the boundary.

## What It Is

A TypeScript package exporting:
- **Error envelope**: standard API error shape with requestId, error codes, and details
- **Job model**: types for long-running job lifecycle (pending, running, success, failed)
- **API contracts**: request/response types for BFF endpoints (Zod schemas included)
- **Constants**: error codes, job states, integration names

## What It Is Not

- **Not a database library**: doesn't own persistence
- **Not a runtime service**: exports only types and validation schemas
- **Not a UI component library**: purely backend contracts

## Repository Layout

- `src/errors/` — error envelope types, error codes, error builders
- `src/jobs/` — job lifecycle types and states
- `src/api/` — request/response contracts per feature (catalog, workflows, jobs, mcp)
- `src/constants/` — error codes, job states, integration names
- `src/index.ts` — main export barrel

## Quick Start

```bash
# Install dependencies
npm install

# Build TypeScript
npm build

# Lint
npm run lint
```

Usage in `so1-console` or `so1-control-plane-api`:
```typescript
import { ErrorEnvelope, JobState, CatalogResponse } from "@so1/shared";
```

## Status

- Status: `draft`
- Versioning: semantic (major.minor.patch)

## Notes

This package is **not published to npm**. It is imported locally via workspace dependencies. CI must ensure types stay in sync across repos.
