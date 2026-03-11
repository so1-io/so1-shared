import { z } from "zod";
import { ClusterSummarySchema, ContentClusterSchema } from "../content/cluster";
import { ContentIndexEntrySchema, ContentVersionSchema } from "../content/item";

// =============================================================================
// LIST CLUSTERS
// =============================================================================

/**
 * Response: GET /api/content/clusters
 */
export const ListClustersResponseSchema = z.object({
  requestId: z.string().uuid(),
  clusters: z.array(ClusterSummarySchema),
});

export type ListClustersResponse = z.infer<typeof ListClustersResponseSchema>;

// =============================================================================
// GET CLUSTER
// =============================================================================

/**
 * Response: GET /api/content/clusters/:clusterId
 */
export const GetClusterResponseSchema = z.object({
  requestId: z.string().uuid(),
  cluster: ContentClusterSchema,
  schema: z.unknown().describe("JSON Schema for cluster content validation"),
});

export type GetClusterResponse = z.infer<typeof GetClusterResponseSchema>;

// =============================================================================
// LIST ITEMS
// =============================================================================

/**
 * Query params: GET /api/content/:clusterId
 */
export const ListItemsQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  status: z.string().optional().describe("Filter by status (draft, published, etc.)"),
  tags: z.string().optional().describe("Comma-separated tags to filter by"),
  q: z.string().optional().describe("Search query (searches name, description)"),
  sortBy: z.enum(["updatedAt", "name", "status"]).default("updatedAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type ListItemsQuery = z.infer<typeof ListItemsQuerySchema>;

/**
 * Response: GET /api/content/:clusterId
 */
export const ListItemsResponseSchema = z.object({
  requestId: z.string().uuid(),
  clusterId: z.string(),
  items: z.array(ContentIndexEntrySchema),
  pagination: z.object({
    page: z.number(),
    limit: z.number(),
    total: z.number(),
    totalPages: z.number(),
  }),
});

export type ListItemsResponse = z.infer<typeof ListItemsResponseSchema>;

// =============================================================================
// GET ITEM
// =============================================================================

/**
 * Response: GET /api/content/:clusterId/:itemId
 *
 * Note: The `data` field type varies by cluster (BrandKit, PromptMetadata, etc.)
 */
export const GetItemResponseSchema = z.object({
  requestId: z.string().uuid(),
  item: z.object({
    id: z.string(),
    clusterId: z.string(),
    path: z.string(),
    sha: z.string().describe("Git blob SHA for optimistic locking"),
    version: z.string().optional(),
    status: z.string(),
    data: z.unknown().describe("Cluster-specific parsed content"),
    rawContent: z.string().describe("Raw file content (YAML/JSON/Markdown)"),
    createdAt: z.string().optional(),
    updatedAt: z.string(),
    commitSha: z.string().optional(),
    commitUrl: z.string().url().optional(),
  }),
});

export type GetItemResponse = z.infer<typeof GetItemResponseSchema>;

// =============================================================================
// CREATE ITEM
// =============================================================================

/**
 * Request: POST /api/content/:clusterId
 */
export const CreateItemRequestSchema = z.object({
  id: z
    .string()
    .regex(/^[a-z0-9-]+$/)
    .describe("Item identifier (kebab-case)"),
  version: z
    .string()
    .regex(/^\d+\.\d+$/)
    .default("1.0")
    .describe("Initial version"),
  content: z.string().describe("Raw content (YAML/JSON/Markdown)"),
  commitMessage: z.string().optional().describe("Custom commit message"),
});

export type CreateItemRequest = z.infer<typeof CreateItemRequestSchema>;

/**
 * Response: POST /api/content/:clusterId
 */
export const CreateItemResponseSchema = z.object({
  requestId: z.string().uuid(),
  item: z.object({
    id: z.string(),
    clusterId: z.string(),
    path: z.string(),
    sha: z.string(),
    version: z.string(),
    status: z.string(),
  }),
  commit: z.object({
    sha: z.string(),
    message: z.string(),
    url: z.string().url(),
  }),
});

export type CreateItemResponse = z.infer<typeof CreateItemResponseSchema>;

// =============================================================================
// UPDATE ITEM
// =============================================================================

/**
 * Request: PUT /api/content/:clusterId/:itemId
 */
export const UpdateItemRequestSchema = z.object({
  sha: z.string().describe("Current blob SHA for optimistic locking (required)"),
  content: z.string().describe("Updated raw content"),
  version: z
    .string()
    .regex(/^\d+\.\d+$/)
    .optional()
    .describe("New version (if versioning enabled, creates new version file)"),
  commitMessage: z.string().optional().describe("Custom commit message"),
});

export type UpdateItemRequest = z.infer<typeof UpdateItemRequestSchema>;

/**
 * Response: PUT /api/content/:clusterId/:itemId
 */
export const UpdateItemResponseSchema = z.object({
  requestId: z.string().uuid(),
  item: z.object({
    id: z.string(),
    clusterId: z.string(),
    path: z.string(),
    sha: z.string().describe("New blob SHA after update"),
    version: z.string().optional(),
    status: z.string(),
  }),
  commit: z.object({
    sha: z.string(),
    message: z.string(),
    url: z.string().url(),
  }),
});

export type UpdateItemResponse = z.infer<typeof UpdateItemResponseSchema>;

// =============================================================================
// DELETE ITEM
// =============================================================================

/**
 * Request: DELETE /api/content/:clusterId/:itemId
 */
export const DeleteItemRequestSchema = z.object({
  sha: z.string().describe("Current blob SHA for optimistic locking"),
  commitMessage: z.string().optional(),
});

export type DeleteItemRequest = z.infer<typeof DeleteItemRequestSchema>;

/**
 * Response: DELETE /api/content/:clusterId/:itemId
 */
export const DeleteItemResponseSchema = z.object({
  requestId: z.string().uuid(),
  deleted: z.boolean(),
  commit: z
    .object({
      sha: z.string(),
      message: z.string(),
      url: z.string().url(),
    })
    .optional(),
});

export type DeleteItemResponse = z.infer<typeof DeleteItemResponseSchema>;

// =============================================================================
// VERSION HISTORY
// =============================================================================

/**
 * Response: GET /api/content/:clusterId/:itemId/history
 */
export const GetHistoryResponseSchema = z.object({
  requestId: z.string().uuid(),
  itemId: z.string(),
  clusterId: z.string(),
  versions: z.array(ContentVersionSchema),
});

export type GetHistoryResponse = z.infer<typeof GetHistoryResponseSchema>;

// =============================================================================
// VALIDATE CONTENT
// =============================================================================

/**
 * Request: POST /api/content/:clusterId/validate
 */
export const ValidateContentRequestSchema = z.object({
  content: z.string().describe("Raw content to validate"),
});

export type ValidateContentRequest = z.infer<typeof ValidateContentRequestSchema>;

/**
 * Validation error detail.
 */
export const ValidationErrorDetailSchema = z.object({
  path: z.string().describe("JSON path to error (e.g., 'visualIdentity.colors.primary')"),
  message: z.string().describe("Error message"),
  code: z.string().optional().describe("Zod error code"),
});

export type ValidationErrorDetail = z.infer<typeof ValidationErrorDetailSchema>;

/**
 * Response: POST /api/content/:clusterId/validate
 */
export const ValidateContentResponseSchema = z.object({
  requestId: z.string().uuid(),
  valid: z.boolean(),
  errors: z.array(ValidationErrorDetailSchema).optional(),
  parsed: z.unknown().optional().describe("Parsed data if valid"),
});

export type ValidateContentResponse = z.infer<typeof ValidateContentResponseSchema>;
