import { z } from "zod";
/**
 * Prompt category enum - functional classification of prompts.
 *
 * Matches Veritas v3 structure:
 * - role: AI identity / persona prompts
 * - rule: Behavioral constraints / guardrails
 * - task: Single-action instructions
 * - chain: Multi-step pipelines
 * - fragment: Composable partials
 */
export const PromptCategorySchema = z.enum(["role", "rule", "task", "chain", "fragment"]);
/**
 * Prompt status enum - lifecycle state.
 */
export const PromptStatusSchema = z.enum(["draft", "testing", "production", "deprecated"]);
/**
 * Prompt content format.
 */
export const PromptFormatSchema = z.enum(["markdown", "xml"]);
/**
 * Prompt variable definition - template variable used in prompt content.
 */
export const PromptVariableSchema = z.object({
    name: z.string().describe("Variable name without {{ }} delimiters"),
    type: z.enum(["string", "number", "boolean", "enum", "list"]).describe("Expected variable type"),
    required: z.boolean().default(true).describe("Whether the variable must be provided"),
    description: z.string().optional().describe("What this variable represents"),
});
/**
 * Prompt metadata schema - matches Veritas prompts/schema.json (v3).
 *
 * This is the structure stored in metadata.json files.
 *
 * @example
 * {
 *   id: "vrt-bc54020c",
 *   name: "001 Gap Analysis",
 *   version: "1.0",
 *   status: "production",
 *   category: "chain",
 *   tags: ["bundle"],
 *   created: "2026-01-15",
 *   author: "devarno"
 * }
 */
export const PromptMetadataSchema = z.object({
    // Identity
    id: z
        .string()
        .regex(/^vrt-[a-f0-9]{8}$/)
        .describe("Unique prompt ID: vrt-{sha256[:8]}"),
    name: z.string().min(1).describe("Human-readable prompt name"),
    version: z
        .string()
        .regex(/^\d+\.\d+$/)
        .describe("Semantic version (major.minor)"),
    // Classification
    status: PromptStatusSchema.describe("Lifecycle status"),
    category: PromptCategorySchema.describe("Functional category"),
    description: z.string().optional().describe("Brief description of what the prompt does"),
    tags: z.array(z.string()).describe("Searchable tags"),
    // Timestamps
    created: z.string().describe("ISO 8601 creation date"),
    modified: z.string().optional().describe("ISO 8601 last-modified date"),
    // Authorship
    author: z.string().describe("Author of the prompt"),
    // Template configuration
    variables: z.array(PromptVariableSchema).optional().describe("Template variables used in the prompt"),
    dependencies: z.array(z.string()).optional().describe("IDs of prompts this prompt depends on"),
    format: PromptFormatSchema.optional().describe("Content file format (default: markdown)"),
});
/**
 * Full prompt item - metadata plus content.
 */
export const PromptItemSchema = z.object({
    metadata: PromptMetadataSchema,
    content: z.string().describe("Prompt content (markdown or XML)"),
    path: z.string().describe("Directory path within prompts/"),
});
/**
 * Veritas index entry - structure from prompts/index.json.
 */
export const VeritasIndexEntrySchema = z.object({
    id: z.string(),
    name: z.string(),
    version: z.string(),
    status: PromptStatusSchema,
    category: PromptCategorySchema,
    tags: z.array(z.string()),
    path: z.string().describe("Relative path to prompt directory"),
});
/**
 * Veritas index - the prompts/index.json structure.
 */
export const VeritasIndexSchema = z.object({
    generatedAt: z.string().optional(),
    // Veritas uses snake_case in JSON
    generated_at: z.string().optional(),
    totalPrompts: z.number().optional(),
    total_prompts: z.number().optional(),
    totalUnreviewed: z.number().optional(),
    total_unreviewed: z.number().optional(),
    categories: z
        .record(PromptCategorySchema, z.object({
        count: z.number(),
    }))
        .optional(),
    prompts: z.array(VeritasIndexEntrySchema),
    unreviewed: z.array(VeritasIndexEntrySchema).optional(),
});
//# sourceMappingURL=prompt.js.map