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
export declare const PromptCategorySchema: z.ZodEnum<["role", "rule", "task", "chain", "fragment"]>;
export type PromptCategory = z.infer<typeof PromptCategorySchema>;
/**
 * Prompt status enum - lifecycle state.
 */
export declare const PromptStatusSchema: z.ZodEnum<["draft", "testing", "production", "deprecated"]>;
export type PromptStatus = z.infer<typeof PromptStatusSchema>;
/**
 * Prompt content format.
 */
export declare const PromptFormatSchema: z.ZodEnum<["markdown", "xml"]>;
export type PromptFormat = z.infer<typeof PromptFormatSchema>;
/**
 * Prompt variable definition - template variable used in prompt content.
 */
export declare const PromptVariableSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodEnum<["string", "number", "boolean", "enum", "list"]>;
    required: z.ZodDefault<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "string" | "number" | "boolean" | "enum" | "list";
    name: string;
    required: boolean;
    description?: string | undefined;
}, {
    type: "string" | "number" | "boolean" | "enum" | "list";
    name: string;
    description?: string | undefined;
    required?: boolean | undefined;
}>;
export type PromptVariable = z.infer<typeof PromptVariableSchema>;
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
export declare const PromptMetadataSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    version: z.ZodString;
    status: z.ZodEnum<["draft", "testing", "production", "deprecated"]>;
    category: z.ZodEnum<["role", "rule", "task", "chain", "fragment"]>;
    description: z.ZodOptional<z.ZodString>;
    tags: z.ZodArray<z.ZodString, "many">;
    created: z.ZodString;
    modified: z.ZodOptional<z.ZodString>;
    author: z.ZodString;
    variables: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodEnum<["string", "number", "boolean", "enum", "list"]>;
        required: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "string" | "number" | "boolean" | "enum" | "list";
        name: string;
        required: boolean;
        description?: string | undefined;
    }, {
        type: "string" | "number" | "boolean" | "enum" | "list";
        name: string;
        description?: string | undefined;
        required?: boolean | undefined;
    }>, "many">>;
    dependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    format: z.ZodOptional<z.ZodEnum<["markdown", "xml"]>>;
}, "strip", z.ZodTypeAny, {
    status: "draft" | "deprecated" | "testing" | "production";
    id: string;
    name: string;
    version: string;
    author: string;
    tags: string[];
    category: "role" | "rule" | "task" | "chain" | "fragment";
    created: string;
    description?: string | undefined;
    modified?: string | undefined;
    variables?: {
        type: "string" | "number" | "boolean" | "enum" | "list";
        name: string;
        required: boolean;
        description?: string | undefined;
    }[] | undefined;
    dependencies?: string[] | undefined;
    format?: "markdown" | "xml" | undefined;
}, {
    status: "draft" | "deprecated" | "testing" | "production";
    id: string;
    name: string;
    version: string;
    author: string;
    tags: string[];
    category: "role" | "rule" | "task" | "chain" | "fragment";
    created: string;
    description?: string | undefined;
    modified?: string | undefined;
    variables?: {
        type: "string" | "number" | "boolean" | "enum" | "list";
        name: string;
        description?: string | undefined;
        required?: boolean | undefined;
    }[] | undefined;
    dependencies?: string[] | undefined;
    format?: "markdown" | "xml" | undefined;
}>;
export type PromptMetadata = z.infer<typeof PromptMetadataSchema>;
/**
 * Full prompt item - metadata plus content.
 */
export declare const PromptItemSchema: z.ZodObject<{
    metadata: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        version: z.ZodString;
        status: z.ZodEnum<["draft", "testing", "production", "deprecated"]>;
        category: z.ZodEnum<["role", "rule", "task", "chain", "fragment"]>;
        description: z.ZodOptional<z.ZodString>;
        tags: z.ZodArray<z.ZodString, "many">;
        created: z.ZodString;
        modified: z.ZodOptional<z.ZodString>;
        author: z.ZodString;
        variables: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodEnum<["string", "number", "boolean", "enum", "list"]>;
            required: z.ZodDefault<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "string" | "number" | "boolean" | "enum" | "list";
            name: string;
            required: boolean;
            description?: string | undefined;
        }, {
            type: "string" | "number" | "boolean" | "enum" | "list";
            name: string;
            description?: string | undefined;
            required?: boolean | undefined;
        }>, "many">>;
        dependencies: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        format: z.ZodOptional<z.ZodEnum<["markdown", "xml"]>>;
    }, "strip", z.ZodTypeAny, {
        status: "draft" | "deprecated" | "testing" | "production";
        id: string;
        name: string;
        version: string;
        author: string;
        tags: string[];
        category: "role" | "rule" | "task" | "chain" | "fragment";
        created: string;
        description?: string | undefined;
        modified?: string | undefined;
        variables?: {
            type: "string" | "number" | "boolean" | "enum" | "list";
            name: string;
            required: boolean;
            description?: string | undefined;
        }[] | undefined;
        dependencies?: string[] | undefined;
        format?: "markdown" | "xml" | undefined;
    }, {
        status: "draft" | "deprecated" | "testing" | "production";
        id: string;
        name: string;
        version: string;
        author: string;
        tags: string[];
        category: "role" | "rule" | "task" | "chain" | "fragment";
        created: string;
        description?: string | undefined;
        modified?: string | undefined;
        variables?: {
            type: "string" | "number" | "boolean" | "enum" | "list";
            name: string;
            description?: string | undefined;
            required?: boolean | undefined;
        }[] | undefined;
        dependencies?: string[] | undefined;
        format?: "markdown" | "xml" | undefined;
    }>;
    content: z.ZodString;
    path: z.ZodString;
}, "strip", z.ZodTypeAny, {
    path: string;
    metadata: {
        status: "draft" | "deprecated" | "testing" | "production";
        id: string;
        name: string;
        version: string;
        author: string;
        tags: string[];
        category: "role" | "rule" | "task" | "chain" | "fragment";
        created: string;
        description?: string | undefined;
        modified?: string | undefined;
        variables?: {
            type: "string" | "number" | "boolean" | "enum" | "list";
            name: string;
            required: boolean;
            description?: string | undefined;
        }[] | undefined;
        dependencies?: string[] | undefined;
        format?: "markdown" | "xml" | undefined;
    };
    content: string;
}, {
    path: string;
    metadata: {
        status: "draft" | "deprecated" | "testing" | "production";
        id: string;
        name: string;
        version: string;
        author: string;
        tags: string[];
        category: "role" | "rule" | "task" | "chain" | "fragment";
        created: string;
        description?: string | undefined;
        modified?: string | undefined;
        variables?: {
            type: "string" | "number" | "boolean" | "enum" | "list";
            name: string;
            description?: string | undefined;
            required?: boolean | undefined;
        }[] | undefined;
        dependencies?: string[] | undefined;
        format?: "markdown" | "xml" | undefined;
    };
    content: string;
}>;
export type PromptItem = z.infer<typeof PromptItemSchema>;
/**
 * Veritas index entry - structure from prompts/index.json.
 */
export declare const VeritasIndexEntrySchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    version: z.ZodString;
    status: z.ZodEnum<["draft", "testing", "production", "deprecated"]>;
    category: z.ZodEnum<["role", "rule", "task", "chain", "fragment"]>;
    tags: z.ZodArray<z.ZodString, "many">;
    path: z.ZodString;
}, "strip", z.ZodTypeAny, {
    path: string;
    status: "draft" | "deprecated" | "testing" | "production";
    id: string;
    name: string;
    version: string;
    tags: string[];
    category: "role" | "rule" | "task" | "chain" | "fragment";
}, {
    path: string;
    status: "draft" | "deprecated" | "testing" | "production";
    id: string;
    name: string;
    version: string;
    tags: string[];
    category: "role" | "rule" | "task" | "chain" | "fragment";
}>;
export type VeritasIndexEntry = z.infer<typeof VeritasIndexEntrySchema>;
/**
 * Veritas index - the prompts/index.json structure.
 */
export declare const VeritasIndexSchema: z.ZodObject<{
    generatedAt: z.ZodOptional<z.ZodString>;
    generated_at: z.ZodOptional<z.ZodString>;
    totalPrompts: z.ZodOptional<z.ZodNumber>;
    total_prompts: z.ZodOptional<z.ZodNumber>;
    totalUnreviewed: z.ZodOptional<z.ZodNumber>;
    total_unreviewed: z.ZodOptional<z.ZodNumber>;
    categories: z.ZodOptional<z.ZodRecord<z.ZodEnum<["role", "rule", "task", "chain", "fragment"]>, z.ZodObject<{
        count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        count: number;
    }, {
        count: number;
    }>>>;
    prompts: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        version: z.ZodString;
        status: z.ZodEnum<["draft", "testing", "production", "deprecated"]>;
        category: z.ZodEnum<["role", "rule", "task", "chain", "fragment"]>;
        tags: z.ZodArray<z.ZodString, "many">;
        path: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        status: "draft" | "deprecated" | "testing" | "production";
        id: string;
        name: string;
        version: string;
        tags: string[];
        category: "role" | "rule" | "task" | "chain" | "fragment";
    }, {
        path: string;
        status: "draft" | "deprecated" | "testing" | "production";
        id: string;
        name: string;
        version: string;
        tags: string[];
        category: "role" | "rule" | "task" | "chain" | "fragment";
    }>, "many">;
    unreviewed: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        version: z.ZodString;
        status: z.ZodEnum<["draft", "testing", "production", "deprecated"]>;
        category: z.ZodEnum<["role", "rule", "task", "chain", "fragment"]>;
        tags: z.ZodArray<z.ZodString, "many">;
        path: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        status: "draft" | "deprecated" | "testing" | "production";
        id: string;
        name: string;
        version: string;
        tags: string[];
        category: "role" | "rule" | "task" | "chain" | "fragment";
    }, {
        path: string;
        status: "draft" | "deprecated" | "testing" | "production";
        id: string;
        name: string;
        version: string;
        tags: string[];
        category: "role" | "rule" | "task" | "chain" | "fragment";
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    prompts: {
        path: string;
        status: "draft" | "deprecated" | "testing" | "production";
        id: string;
        name: string;
        version: string;
        tags: string[];
        category: "role" | "rule" | "task" | "chain" | "fragment";
    }[];
    generatedAt?: string | undefined;
    generated_at?: string | undefined;
    totalPrompts?: number | undefined;
    total_prompts?: number | undefined;
    totalUnreviewed?: number | undefined;
    total_unreviewed?: number | undefined;
    categories?: Partial<Record<"role" | "rule" | "task" | "chain" | "fragment", {
        count: number;
    }>> | undefined;
    unreviewed?: {
        path: string;
        status: "draft" | "deprecated" | "testing" | "production";
        id: string;
        name: string;
        version: string;
        tags: string[];
        category: "role" | "rule" | "task" | "chain" | "fragment";
    }[] | undefined;
}, {
    prompts: {
        path: string;
        status: "draft" | "deprecated" | "testing" | "production";
        id: string;
        name: string;
        version: string;
        tags: string[];
        category: "role" | "rule" | "task" | "chain" | "fragment";
    }[];
    generatedAt?: string | undefined;
    generated_at?: string | undefined;
    totalPrompts?: number | undefined;
    total_prompts?: number | undefined;
    totalUnreviewed?: number | undefined;
    total_unreviewed?: number | undefined;
    categories?: Partial<Record<"role" | "rule" | "task" | "chain" | "fragment", {
        count: number;
    }>> | undefined;
    unreviewed?: {
        path: string;
        status: "draft" | "deprecated" | "testing" | "production";
        id: string;
        name: string;
        version: string;
        tags: string[];
        category: "role" | "rule" | "task" | "chain" | "fragment";
    }[] | undefined;
}>;
export type VeritasIndex = z.infer<typeof VeritasIndexSchema>;
//# sourceMappingURL=prompt.d.ts.map