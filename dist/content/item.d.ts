import { z } from "zod";
/**
 * Content item status - lifecycle state of an item.
 */
export declare const ContentStatusSchema: z.ZodEnum<["draft", "review", "published", "archived", "deprecated"]>;
export type ContentStatus = z.infer<typeof ContentStatusSchema>;
/**
 * Content item metadata - common fields across all content types.
 *
 * This represents the envelope around cluster-specific content.
 * The actual content schema varies by cluster (brand-kit, prompt, blog, etc.).
 */
export declare const ContentItemMetadataSchema: z.ZodObject<{
    id: z.ZodString;
    cluster: z.ZodString;
    path: z.ZodString;
    sha: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<["draft", "review", "published", "archived", "deprecated"]>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    author: z.ZodString;
    commitSha: z.ZodOptional<z.ZodString>;
    commitMessage: z.ZodOptional<z.ZodString>;
    commitUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    path: string;
    status: "draft" | "review" | "published" | "archived" | "deprecated";
    id: string;
    createdAt: string;
    cluster: string;
    updatedAt: string;
    author: string;
    version?: string | undefined;
    sha?: string | undefined;
    commitSha?: string | undefined;
    commitMessage?: string | undefined;
    commitUrl?: string | undefined;
}, {
    path: string;
    id: string;
    createdAt: string;
    cluster: string;
    updatedAt: string;
    author: string;
    status?: "draft" | "review" | "published" | "archived" | "deprecated" | undefined;
    version?: string | undefined;
    sha?: string | undefined;
    commitSha?: string | undefined;
    commitMessage?: string | undefined;
    commitUrl?: string | undefined;
}>;
export type ContentItemMetadata = z.infer<typeof ContentItemMetadataSchema>;
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
export declare const ContentItemSchema: <T extends z.ZodTypeAny>(dataSchema: T) => z.ZodObject<{
    metadata: z.ZodObject<{
        id: z.ZodString;
        cluster: z.ZodString;
        path: z.ZodString;
        sha: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
        status: z.ZodDefault<z.ZodEnum<["draft", "review", "published", "archived", "deprecated"]>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        author: z.ZodString;
        commitSha: z.ZodOptional<z.ZodString>;
        commitMessage: z.ZodOptional<z.ZodString>;
        commitUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        status: "draft" | "review" | "published" | "archived" | "deprecated";
        id: string;
        createdAt: string;
        cluster: string;
        updatedAt: string;
        author: string;
        version?: string | undefined;
        sha?: string | undefined;
        commitSha?: string | undefined;
        commitMessage?: string | undefined;
        commitUrl?: string | undefined;
    }, {
        path: string;
        id: string;
        createdAt: string;
        cluster: string;
        updatedAt: string;
        author: string;
        status?: "draft" | "review" | "published" | "archived" | "deprecated" | undefined;
        version?: string | undefined;
        sha?: string | undefined;
        commitSha?: string | undefined;
        commitMessage?: string | undefined;
        commitUrl?: string | undefined;
    }>;
    data: T;
    rawContent: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    metadata: z.ZodObject<{
        id: z.ZodString;
        cluster: z.ZodString;
        path: z.ZodString;
        sha: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
        status: z.ZodDefault<z.ZodEnum<["draft", "review", "published", "archived", "deprecated"]>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        author: z.ZodString;
        commitSha: z.ZodOptional<z.ZodString>;
        commitMessage: z.ZodOptional<z.ZodString>;
        commitUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        status: "draft" | "review" | "published" | "archived" | "deprecated";
        id: string;
        createdAt: string;
        cluster: string;
        updatedAt: string;
        author: string;
        version?: string | undefined;
        sha?: string | undefined;
        commitSha?: string | undefined;
        commitMessage?: string | undefined;
        commitUrl?: string | undefined;
    }, {
        path: string;
        id: string;
        createdAt: string;
        cluster: string;
        updatedAt: string;
        author: string;
        status?: "draft" | "review" | "published" | "archived" | "deprecated" | undefined;
        version?: string | undefined;
        sha?: string | undefined;
        commitSha?: string | undefined;
        commitMessage?: string | undefined;
        commitUrl?: string | undefined;
    }>;
    data: T;
    rawContent: z.ZodOptional<z.ZodString>;
}>, any> extends infer T_1 ? { [k in keyof T_1]: T_1[k]; } : never, z.baseObjectInputType<{
    metadata: z.ZodObject<{
        id: z.ZodString;
        cluster: z.ZodString;
        path: z.ZodString;
        sha: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
        status: z.ZodDefault<z.ZodEnum<["draft", "review", "published", "archived", "deprecated"]>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        author: z.ZodString;
        commitSha: z.ZodOptional<z.ZodString>;
        commitMessage: z.ZodOptional<z.ZodString>;
        commitUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        status: "draft" | "review" | "published" | "archived" | "deprecated";
        id: string;
        createdAt: string;
        cluster: string;
        updatedAt: string;
        author: string;
        version?: string | undefined;
        sha?: string | undefined;
        commitSha?: string | undefined;
        commitMessage?: string | undefined;
        commitUrl?: string | undefined;
    }, {
        path: string;
        id: string;
        createdAt: string;
        cluster: string;
        updatedAt: string;
        author: string;
        status?: "draft" | "review" | "published" | "archived" | "deprecated" | undefined;
        version?: string | undefined;
        sha?: string | undefined;
        commitSha?: string | undefined;
        commitMessage?: string | undefined;
        commitUrl?: string | undefined;
    }>;
    data: T;
    rawContent: z.ZodOptional<z.ZodString>;
}> extends infer T_2 ? { [k_1 in keyof T_2]: T_2[k_1]; } : never>;
export type ContentItem<T> = {
    metadata: ContentItemMetadata;
    data: T;
    rawContent?: string;
};
/**
 * Content index entry - lightweight item info for list views.
 *
 * This matches the structure in index.json files.
 */
export declare const ContentIndexEntrySchema: z.ZodObject<{
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
}>;
export type ContentIndexEntry = z.infer<typeof ContentIndexEntrySchema>;
/**
 * Content index - the index.json structure for a cluster.
 */
export declare const ContentIndexSchema: z.ZodObject<{
    generatedAt: z.ZodString;
    totalItems: z.ZodNumber;
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
}, "strip", z.ZodTypeAny, {
    generatedAt: string;
    totalItems: number;
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
}, {
    generatedAt: string;
    totalItems: number;
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
}>;
export type ContentIndex = z.infer<typeof ContentIndexSchema>;
/**
 * Version history entry - a commit affecting this content item.
 */
export declare const ContentVersionSchema: z.ZodObject<{
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
}>;
export type ContentVersion = z.infer<typeof ContentVersionSchema>;
//# sourceMappingURL=item.d.ts.map