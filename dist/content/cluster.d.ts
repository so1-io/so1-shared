import { z } from "zod";
/**
 * Content format enum - determines how content is parsed and validated.
 */
export declare const ContentFormatSchema: z.ZodEnum<["yaml", "json", "markdown"]>;
export type ContentFormat = z.infer<typeof ContentFormatSchema>;
/**
 * Content cluster capabilities - what operations are supported.
 */
export declare const ClusterCapabilitiesSchema: z.ZodObject<{
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
export type ClusterCapabilities = z.infer<typeof ClusterCapabilitiesSchema>;
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
export declare const ContentClusterSchema: z.ZodObject<{
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
export type ContentCluster = z.infer<typeof ContentClusterSchema>;
/**
 * Cluster registry - collection of all available content clusters.
 */
export declare const ClusterRegistrySchema: z.ZodObject<{
    version: z.ZodString;
    clusters: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    version: string;
    clusters: {
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
    }[];
}, {
    version: string;
    clusters: {
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
    }[];
}>;
export type ClusterRegistry = z.infer<typeof ClusterRegistrySchema>;
/**
 * Cluster summary - lightweight cluster info for list views.
 */
export declare const ClusterSummarySchema: z.ZodObject<{
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
}>;
export type ClusterSummary = z.infer<typeof ClusterSummarySchema>;
//# sourceMappingURL=cluster.d.ts.map