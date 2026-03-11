import { z } from "zod";
/**
 * Content format enum - determines how content is parsed and validated.
 */
export const ContentFormatSchema = z.enum(["yaml", "json", "markdown"]);
/**
 * Content cluster capabilities - what operations are supported.
 */
export const ClusterCapabilitiesSchema = z.object({
    create: z.boolean().describe("Can create new items"),
    update: z.boolean().describe("Can update existing items"),
    delete: z.boolean().describe("Can delete items (vs archive only)"),
    versioning: z.boolean().describe("Items have explicit versions (v1.0.yaml pattern)"),
});
/**
 * Content cluster definition - a self-contained content domain.
 *
 * Each cluster maps to a directory within a GitHub repository,
 * with its own schema, index, and content structure.
 *
 * @example
 * {
 *   id: "brand-kits",
 *   name: "Brand Kits",
 *   description: "Project branding definitions for media generation",
 *   repository: "so1-io/branding-assistant",
 *   branch: "main",
 *   path: "projects",
 *   schemaPath: "projects/schema.yaml",
 *   indexPath: "projects/index.json",
 *   itemPathTemplate: "{id}/v{version}.yaml",
 *   contentFormat: "yaml",
 *   metadataInContent: true,
 *   capabilities: { create: true, update: true, delete: false, versioning: true }
 * }
 */
export const ContentClusterSchema = z.object({
    // Identity
    id: z
        .string()
        .regex(/^[a-z0-9-]+$/)
        .describe("Unique cluster identifier (kebab-case)"),
    name: z.string().min(1).describe("Human-readable cluster name"),
    description: z.string().describe("What this cluster contains"),
    // Repository location
    repository: z
        .string()
        .regex(/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/)
        .describe("GitHub repository in owner/repo format"),
    branch: z.string().default("main").describe("Git branch to read/write"),
    path: z.string().describe("Base directory path within repo"),
    // Schema and index locations
    schemaPath: z.string().describe("Path to validation schema file"),
    indexPath: z.string().describe("Path to index.json file"),
    // Item path template (supports placeholders)
    itemPathTemplate: z
        .string()
        .describe("Template for item file paths: {id}, {version}, {category}, {slug}"),
    // Content structure
    contentFormat: ContentFormatSchema.describe("Primary content file format"),
    metadataInContent: z
        .boolean()
        .default(true)
        .describe("If true, metadata embedded in content file; if false, separate metadata.json"),
    metadataPathTemplate: z
        .string()
        .optional()
        .describe("Template for metadata file path (when metadataInContent=false)"),
    // Capabilities
    capabilities: ClusterCapabilitiesSchema,
});
/**
 * Cluster registry - collection of all available content clusters.
 */
export const ClusterRegistrySchema = z.object({
    version: z.string().describe("Registry schema version"),
    clusters: z.array(ContentClusterSchema),
});
/**
 * Cluster summary - lightweight cluster info for list views.
 */
export const ClusterSummarySchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    itemCount: z.number().int().nonnegative().describe("Number of items in cluster"),
    capabilities: ClusterCapabilitiesSchema,
});
//# sourceMappingURL=cluster.js.map