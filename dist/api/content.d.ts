import { z } from "zod";
/**
 * Response: GET /api/content/clusters
 */
export declare const ListClustersResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    clusters: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        itemCount: z.ZodNumber;
        capabilities: z.ZodObject<{
            create: z.ZodBoolean;
            update: z.ZodBoolean;
            delete: z.ZodBoolean;
            versioning: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            create: boolean;
            update: boolean;
            delete: boolean;
            versioning: boolean;
        }, {
            create: boolean;
            update: boolean;
            delete: boolean;
            versioning: boolean;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        description: string;
        capabilities: {
            create: boolean;
            update: boolean;
            delete: boolean;
            versioning: boolean;
        };
        itemCount: number;
    }, {
        id: string;
        name: string;
        description: string;
        capabilities: {
            create: boolean;
            update: boolean;
            delete: boolean;
            versioning: boolean;
        };
        itemCount: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    clusters: {
        id: string;
        name: string;
        description: string;
        capabilities: {
            create: boolean;
            update: boolean;
            delete: boolean;
            versioning: boolean;
        };
        itemCount: number;
    }[];
}, {
    requestId: string;
    clusters: {
        id: string;
        name: string;
        description: string;
        capabilities: {
            create: boolean;
            update: boolean;
            delete: boolean;
            versioning: boolean;
        };
        itemCount: number;
    }[];
}>;
export type ListClustersResponse = z.infer<typeof ListClustersResponseSchema>;
/**
 * Response: GET /api/content/clusters/:clusterId
 */
export declare const GetClusterResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    cluster: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        repository: z.ZodString;
        branch: z.ZodDefault<z.ZodString>;
        path: z.ZodString;
        schemaPath: z.ZodString;
        indexPath: z.ZodString;
        itemPathTemplate: z.ZodString;
        contentFormat: z.ZodEnum<["yaml", "json", "markdown"]>;
        metadataInContent: z.ZodDefault<z.ZodBoolean>;
        metadataPathTemplate: z.ZodOptional<z.ZodString>;
        capabilities: z.ZodObject<{
            create: z.ZodBoolean;
            update: z.ZodBoolean;
            delete: z.ZodBoolean;
            versioning: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            create: boolean;
            update: boolean;
            delete: boolean;
            versioning: boolean;
        }, {
            create: boolean;
            update: boolean;
            delete: boolean;
            versioning: boolean;
        }>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        id: string;
        name: string;
        description: string;
        repository: string;
        branch: string;
        schemaPath: string;
        indexPath: string;
        itemPathTemplate: string;
        contentFormat: "yaml" | "json" | "markdown";
        metadataInContent: boolean;
        capabilities: {
            create: boolean;
            update: boolean;
            delete: boolean;
            versioning: boolean;
        };
        metadataPathTemplate?: string | undefined;
    }, {
        path: string;
        id: string;
        name: string;
        description: string;
        repository: string;
        schemaPath: string;
        indexPath: string;
        itemPathTemplate: string;
        contentFormat: "yaml" | "json" | "markdown";
        capabilities: {
            create: boolean;
            update: boolean;
            delete: boolean;
            versioning: boolean;
        };
        branch?: string | undefined;
        metadataInContent?: boolean | undefined;
        metadataPathTemplate?: string | undefined;
    }>;
    schema: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    cluster: {
        path: string;
        id: string;
        name: string;
        description: string;
        repository: string;
        branch: string;
        schemaPath: string;
        indexPath: string;
        itemPathTemplate: string;
        contentFormat: "yaml" | "json" | "markdown";
        metadataInContent: boolean;
        capabilities: {
            create: boolean;
            update: boolean;
            delete: boolean;
            versioning: boolean;
        };
        metadataPathTemplate?: string | undefined;
    };
    schema?: unknown;
}, {
    requestId: string;
    cluster: {
        path: string;
        id: string;
        name: string;
        description: string;
        repository: string;
        schemaPath: string;
        indexPath: string;
        itemPathTemplate: string;
        contentFormat: "yaml" | "json" | "markdown";
        capabilities: {
            create: boolean;
            update: boolean;
            delete: boolean;
            versioning: boolean;
        };
        branch?: string | undefined;
        metadataInContent?: boolean | undefined;
        metadataPathTemplate?: string | undefined;
    };
    schema?: unknown;
}>;
export type GetClusterResponse = z.infer<typeof GetClusterResponseSchema>;
/**
 * Query params: GET /api/content/:clusterId
 */
export declare const ListItemsQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
    status: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodString>;
    q: z.ZodOptional<z.ZodString>;
    sortBy: z.ZodDefault<z.ZodEnum<["updatedAt", "name", "status"]>>;
    sortOrder: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    sortBy: "status" | "name" | "updatedAt";
    sortOrder: "asc" | "desc";
    status?: string | undefined;
    tags?: string | undefined;
    q?: string | undefined;
}, {
    status?: string | undefined;
    tags?: string | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    q?: string | undefined;
    sortBy?: "status" | "name" | "updatedAt" | undefined;
    sortOrder?: "asc" | "desc" | undefined;
}>;
export type ListItemsQuery = z.infer<typeof ListItemsQuerySchema>;
/**
 * Response: GET /api/content/:clusterId
 */
export declare const ListItemsResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    clusterId: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<["draft", "review", "published", "archived", "deprecated"]>>;
        description: z.ZodOptional<z.ZodString>;
        path: z.ZodString;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        id: string;
        status?: "draft" | "review" | "published" | "archived" | "deprecated" | undefined;
        name?: string | undefined;
        description?: string | undefined;
        version?: string | undefined;
        updatedAt?: string | undefined;
        tags?: string[] | undefined;
    }, {
        path: string;
        id: string;
        status?: "draft" | "review" | "published" | "archived" | "deprecated" | undefined;
        name?: string | undefined;
        description?: string | undefined;
        version?: string | undefined;
        updatedAt?: string | undefined;
        tags?: string[] | undefined;
    }>, "many">;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        limit: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    }, {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    }>;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    items: {
        path: string;
        id: string;
        status?: "draft" | "review" | "published" | "archived" | "deprecated" | undefined;
        name?: string | undefined;
        description?: string | undefined;
        version?: string | undefined;
        updatedAt?: string | undefined;
        tags?: string[] | undefined;
    }[];
    clusterId: string;
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}, {
    requestId: string;
    items: {
        path: string;
        id: string;
        status?: "draft" | "review" | "published" | "archived" | "deprecated" | undefined;
        name?: string | undefined;
        description?: string | undefined;
        version?: string | undefined;
        updatedAt?: string | undefined;
        tags?: string[] | undefined;
    }[];
    clusterId: string;
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
export type ListItemsResponse = z.infer<typeof ListItemsResponseSchema>;
/**
 * Response: GET /api/content/:clusterId/:itemId
 *
 * Note: The `data` field type varies by cluster (BrandKit, PromptMetadata, etc.)
 */
export declare const GetItemResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    item: z.ZodObject<{
        id: z.ZodString;
        clusterId: z.ZodString;
        path: z.ZodString;
        sha: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
        status: z.ZodString;
        data: z.ZodUnknown;
        rawContent: z.ZodString;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodString;
        commitSha: z.ZodOptional<z.ZodString>;
        commitUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        status: string;
        id: string;
        sha: string;
        updatedAt: string;
        rawContent: string;
        clusterId: string;
        data?: unknown;
        createdAt?: string | undefined;
        version?: string | undefined;
        commitSha?: string | undefined;
        commitUrl?: string | undefined;
    }, {
        path: string;
        status: string;
        id: string;
        sha: string;
        updatedAt: string;
        rawContent: string;
        clusterId: string;
        data?: unknown;
        createdAt?: string | undefined;
        version?: string | undefined;
        commitSha?: string | undefined;
        commitUrl?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    item: {
        path: string;
        status: string;
        id: string;
        sha: string;
        updatedAt: string;
        rawContent: string;
        clusterId: string;
        data?: unknown;
        createdAt?: string | undefined;
        version?: string | undefined;
        commitSha?: string | undefined;
        commitUrl?: string | undefined;
    };
}, {
    requestId: string;
    item: {
        path: string;
        status: string;
        id: string;
        sha: string;
        updatedAt: string;
        rawContent: string;
        clusterId: string;
        data?: unknown;
        createdAt?: string | undefined;
        version?: string | undefined;
        commitSha?: string | undefined;
        commitUrl?: string | undefined;
    };
}>;
export type GetItemResponse = z.infer<typeof GetItemResponseSchema>;
/**
 * Request: POST /api/content/:clusterId
 */
export declare const CreateItemRequestSchema: z.ZodObject<{
    id: z.ZodString;
    version: z.ZodDefault<z.ZodString>;
    content: z.ZodString;
    commitMessage: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    version: string;
    content: string;
    commitMessage?: string | undefined;
}, {
    id: string;
    content: string;
    version?: string | undefined;
    commitMessage?: string | undefined;
}>;
export type CreateItemRequest = z.infer<typeof CreateItemRequestSchema>;
/**
 * Response: POST /api/content/:clusterId
 */
export declare const CreateItemResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    item: z.ZodObject<{
        id: z.ZodString;
        clusterId: z.ZodString;
        path: z.ZodString;
        sha: z.ZodString;
        version: z.ZodString;
        status: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        status: string;
        id: string;
        version: string;
        sha: string;
        clusterId: string;
    }, {
        path: string;
        status: string;
        id: string;
        version: string;
        sha: string;
        clusterId: string;
    }>;
    commit: z.ZodObject<{
        sha: z.ZodString;
        message: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        sha: string;
        url: string;
    }, {
        message: string;
        sha: string;
        url: string;
    }>;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    item: {
        path: string;
        status: string;
        id: string;
        version: string;
        sha: string;
        clusterId: string;
    };
    commit: {
        message: string;
        sha: string;
        url: string;
    };
}, {
    requestId: string;
    item: {
        path: string;
        status: string;
        id: string;
        version: string;
        sha: string;
        clusterId: string;
    };
    commit: {
        message: string;
        sha: string;
        url: string;
    };
}>;
export type CreateItemResponse = z.infer<typeof CreateItemResponseSchema>;
/**
 * Request: PUT /api/content/:clusterId/:itemId
 */
export declare const UpdateItemRequestSchema: z.ZodObject<{
    sha: z.ZodString;
    content: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
    commitMessage: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    sha: string;
    content: string;
    version?: string | undefined;
    commitMessage?: string | undefined;
}, {
    sha: string;
    content: string;
    version?: string | undefined;
    commitMessage?: string | undefined;
}>;
export type UpdateItemRequest = z.infer<typeof UpdateItemRequestSchema>;
/**
 * Response: PUT /api/content/:clusterId/:itemId
 */
export declare const UpdateItemResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    item: z.ZodObject<{
        id: z.ZodString;
        clusterId: z.ZodString;
        path: z.ZodString;
        sha: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
        status: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        status: string;
        id: string;
        sha: string;
        clusterId: string;
        version?: string | undefined;
    }, {
        path: string;
        status: string;
        id: string;
        sha: string;
        clusterId: string;
        version?: string | undefined;
    }>;
    commit: z.ZodObject<{
        sha: z.ZodString;
        message: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        sha: string;
        url: string;
    }, {
        message: string;
        sha: string;
        url: string;
    }>;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    item: {
        path: string;
        status: string;
        id: string;
        sha: string;
        clusterId: string;
        version?: string | undefined;
    };
    commit: {
        message: string;
        sha: string;
        url: string;
    };
}, {
    requestId: string;
    item: {
        path: string;
        status: string;
        id: string;
        sha: string;
        clusterId: string;
        version?: string | undefined;
    };
    commit: {
        message: string;
        sha: string;
        url: string;
    };
}>;
export type UpdateItemResponse = z.infer<typeof UpdateItemResponseSchema>;
/**
 * Request: DELETE /api/content/:clusterId/:itemId
 */
export declare const DeleteItemRequestSchema: z.ZodObject<{
    sha: z.ZodString;
    commitMessage: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    sha: string;
    commitMessage?: string | undefined;
}, {
    sha: string;
    commitMessage?: string | undefined;
}>;
export type DeleteItemRequest = z.infer<typeof DeleteItemRequestSchema>;
/**
 * Response: DELETE /api/content/:clusterId/:itemId
 */
export declare const DeleteItemResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    deleted: z.ZodBoolean;
    commit: z.ZodOptional<z.ZodObject<{
        sha: z.ZodString;
        message: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        sha: string;
        url: string;
    }, {
        message: string;
        sha: string;
        url: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    deleted: boolean;
    commit?: {
        message: string;
        sha: string;
        url: string;
    } | undefined;
}, {
    requestId: string;
    deleted: boolean;
    commit?: {
        message: string;
        sha: string;
        url: string;
    } | undefined;
}>;
export type DeleteItemResponse = z.infer<typeof DeleteItemResponseSchema>;
/**
 * Response: GET /api/content/:clusterId/:itemId/history
 */
export declare const GetHistoryResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    itemId: z.ZodString;
    clusterId: z.ZodString;
    versions: z.ZodArray<z.ZodObject<{
        sha: z.ZodString;
        message: z.ZodString;
        author: z.ZodString;
        date: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        date: string;
        sha: string;
        author: string;
        url: string;
    }, {
        message: string;
        date: string;
        sha: string;
        author: string;
        url: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    clusterId: string;
    itemId: string;
    versions: {
        message: string;
        date: string;
        sha: string;
        author: string;
        url: string;
    }[];
}, {
    requestId: string;
    clusterId: string;
    itemId: string;
    versions: {
        message: string;
        date: string;
        sha: string;
        author: string;
        url: string;
    }[];
}>;
export type GetHistoryResponse = z.infer<typeof GetHistoryResponseSchema>;
/**
 * Request: POST /api/content/:clusterId/validate
 */
export declare const ValidateContentRequestSchema: z.ZodObject<{
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
}, {
    content: string;
}>;
export type ValidateContentRequest = z.infer<typeof ValidateContentRequestSchema>;
/**
 * Validation error detail.
 */
export declare const ValidationErrorDetailSchema: z.ZodObject<{
    path: z.ZodString;
    message: z.ZodString;
    code: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    path: string;
    message: string;
    code?: string | undefined;
}, {
    path: string;
    message: string;
    code?: string | undefined;
}>;
export type ValidationErrorDetail = z.infer<typeof ValidationErrorDetailSchema>;
/**
 * Response: POST /api/content/:clusterId/validate
 */
export declare const ValidateContentResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    valid: z.ZodBoolean;
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        message: z.ZodString;
        code: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        message: string;
        code?: string | undefined;
    }, {
        path: string;
        message: string;
        code?: string | undefined;
    }>, "many">>;
    parsed: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    valid: boolean;
    errors?: {
        path: string;
        message: string;
        code?: string | undefined;
    }[] | undefined;
    parsed?: unknown;
}, {
    requestId: string;
    valid: boolean;
    errors?: {
        path: string;
        message: string;
        code?: string | undefined;
    }[] | undefined;
    parsed?: unknown;
}>;
export type ValidateContentResponse = z.infer<typeof ValidateContentResponseSchema>;
//# sourceMappingURL=content.d.ts.map