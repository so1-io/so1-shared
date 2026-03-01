# @so1/shared — Agent Instructions

`@so1/shared` is a TypeScript package exporting shared types, validation schemas, and API contracts. It is a **pure data contract library** with no runtime dependencies beyond Zod.

## Key Rules

1. **No external dependencies except Zod**. Keep the package lightweight; avoid dragging in large libraries.
2. **Schemas are truth**. Export both TypeScript types (`type X = ...`) and Zod schemas (`const XSchema = z.object(...)`).
3. **Error envelope is immutable**. All errors in the platform follow the same shape (see `src/errors/envelope.ts`).
4. **Job model is versioned**. Jobs have a fixed lifecycle; changes are backwards-compatible or require migration.
5. **No circular dependencies**. This package must be importable by both `so1-console` and `so1-control-plane-api`.

## Repository Structure

```
src/
  errors/
    envelope.ts           # ErrorEnvelope type and builder
    codes.ts              # Error code enum and descriptions
    mappers.ts            # Mappers from service errors to ErrorEnvelope
  jobs/
    model.ts              # Job type, JobState enum
    schemas.ts            # Zod schemas for job payloads
  api/
    catalog.ts            # GitHub catalog contracts
    workflows.ts          # n8n workflow contracts
    jobs.ts               # Job status/logs contracts
    mcp.ts                # MCP registry/invoke contracts
  constants/
    index.ts              # Constants (error codes, states)
  index.ts                # Barrel export
```

## Development

- `npm run build` — Compile TypeScript to dist/
- `npm run lint` — Lint sources

## Contract Changes

When adding a new API contract:
1. Define the Zod schema in `src/api/{feature}.ts`
2. Export both the schema and the TypeScript type
3. Add an example in the same file (as a comment or doc)
4. Update `src/index.ts` barrel export
5. Update `docs/` if the contract is complex or requires explanation
