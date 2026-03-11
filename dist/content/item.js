import { z } from "zod";
/**
 * Content item status - lifecycle state of an item.
 */
export const ContentStatusSchema = z.enum(["draft", "review", "published", "archived", "deprecated"]);
/**
 * Content item metadata - common fields across all content types.
 *
 * This represents the envelope around cluster-specific content.
 * The actual content schema varies by cluster (brand-kit, prompt, blog, etc.).
 */
export const ContentItemMetadataSchema = z.object({
    // Identity
    id: z.string().min(1).describe("Unique item identifier within cluster"),
    cluster: z.string().describe("Cluster this item belongs to"),
    // Git location
    path: z.string().describe("Full path to content file in repository"),
    sha: z.string().optional().describe("Git blob SHA (for optimistic locking)"),
    // Versioning
    version: z
        .string()
        .regex(/^\d+\.\d+$/)
        .optional()
        .describe("Semantic version (major.minor)"),
    // Lifecycle
    status: ContentStatusSchema.default("draft"),
    createdAt: z.string().datetime().describe("ISO 8601 creation timestamp"),
    updatedAt: z.string().datetime().describe("ISO 8601 last update timestamp"),
    author: z.string().describe("Author identifier (userId or email)"),
    // Git history (populated on read)
    commitSha: z.string().optional().describe("Latest commit SHA"),
    commitMessage: z.string().optional().describe("Latest commit message"),
    commitUrl: z.string().url().optional().describe("GitHub commit URL"),
});
/**
 * Generic content item - wraps cluster-specific data with common metadata.
 *
 * @typeParam T - The cluster-specific content schema type
 *
 * @example
 * // For brand kits:
 * type BrandKitItem = ContentItem<BrandKit>;
 *
 * // For prompts:
 * type PromptItem = ContentItem<PromptMetadata>;
 */
export const ContentItemSchema = (dataSchema) => z.object({
    metadata: ContentItemMetadataSchema,
    data: dataSchema.describe("Cluster-specific content data"),
    rawContent: z.string().optional().describe("Raw file content (YAML/JSON/Markdown)"),
});
/**
 * Content index entry - lightweight item info for list views.
 *
 * This matches the structure in index.json files.
 */
export const ContentIndexEntrySchema = z.object({
    id: z.string(),
    name: z.string().optional().describe("Display name (extracted from content)"),
    version: z.string().optional(),
    status: ContentStatusSchema.optional(),
    description: z.string().optional().describe("Short description"),
    path: z.string().describe("Relative path within cluster"),
    tags: z.array(z.string()).optional().describe("Searchable tags"),
    updatedAt: z.string().optional().describe("Last update timestamp"),
});
/**
 * Content index - the index.json structure for a cluster.
 */
export const ContentIndexSchema = z.object({
    generatedAt: z.string().describe("When index was last regenerated"),
    totalItems: z.number().int().nonnegative(),
    items: z.array(ContentIndexEntrySchema),
});
/**
 * Version history entry - a commit affecting this content item.
 */
export const ContentVersionSchema = z.object({
    sha: z.string().describe("Git commit SHA"),
    message: z.string().describe("Commit message"),
    author: z.string().describe("Commit author"),
    date: z.string().datetime().describe("Commit timestamp"),
    url: z.string().url().describe("GitHub commit URL"),
});
//# sourceMappingURL=item.js.map