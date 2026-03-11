import { z } from "zod";
/**
 * Job state enum.
 */
export declare enum JobState {
    PENDING = "pending",
    RUNNING = "running",
    SUCCESS = "success",
    FAILED = "failed",
    CANCELLED = "cancelled"
}
/**
 * Job model: represents a long-running operation.
 */
export declare const JobSchema: z.ZodObject<{
    id: z.ZodString;
    state: z.ZodNativeEnum<typeof JobState>;
    createdAt: z.ZodString;
    startedAt: z.ZodOptional<z.ZodString>;
    completedAt: z.ZodOptional<z.ZodString>;
    output: z.ZodOptional<z.ZodUnknown>;
    error: z.ZodOptional<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
    logs: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    metadata: z.ZodObject<{
        requestId: z.ZodString;
        userId: z.ZodString;
        orgId: z.ZodString;
        action: z.ZodString;
        inputs: z.ZodUnknown;
    }, "strip", z.ZodTypeAny, {
        requestId: string;
        userId: string;
        orgId: string;
        action: string;
        inputs?: unknown;
    }, {
        requestId: string;
        userId: string;
        orgId: string;
        action: string;
        inputs?: unknown;
    }>;
}, "strip", z.ZodTypeAny, {
    id: string;
    state: JobState;
    createdAt: string;
    logs: string[];
    metadata: {
        requestId: string;
        userId: string;
        orgId: string;
        action: string;
        inputs?: unknown;
    };
    error?: {
        code: string;
        message: string;
    } | undefined;
    startedAt?: string | undefined;
    completedAt?: string | undefined;
    output?: unknown;
}, {
    id: string;
    state: JobState;
    createdAt: string;
    metadata: {
        requestId: string;
        userId: string;
        orgId: string;
        action: string;
        inputs?: unknown;
    };
    error?: {
        code: string;
        message: string;
    } | undefined;
    startedAt?: string | undefined;
    completedAt?: string | undefined;
    output?: unknown;
    logs?: string[] | undefined;
}>;
export type Job = z.infer<typeof JobSchema>;
/**
 * Job status response.
 */
export declare const JobStatusSchema: z.ZodObject<{
    requestId: z.ZodString;
    job: z.ZodObject<{
        id: z.ZodString;
        state: z.ZodNativeEnum<typeof JobState>;
        createdAt: z.ZodString;
        startedAt: z.ZodOptional<z.ZodString>;
        completedAt: z.ZodOptional<z.ZodString>;
        output: z.ZodOptional<z.ZodUnknown>;
        error: z.ZodOptional<z.ZodObject<{
            code: z.ZodString;
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
        }, {
            code: string;
            message: string;
        }>>;
        logs: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        metadata: z.ZodObject<{
            requestId: z.ZodString;
            userId: z.ZodString;
            orgId: z.ZodString;
            action: z.ZodString;
            inputs: z.ZodUnknown;
        }, "strip", z.ZodTypeAny, {
            requestId: string;
            userId: string;
            orgId: string;
            action: string;
            inputs?: unknown;
        }, {
            requestId: string;
            userId: string;
            orgId: string;
            action: string;
            inputs?: unknown;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        state: JobState;
        createdAt: string;
        logs: string[];
        metadata: {
            requestId: string;
            userId: string;
            orgId: string;
            action: string;
            inputs?: unknown;
        };
        error?: {
            code: string;
            message: string;
        } | undefined;
        startedAt?: string | undefined;
        completedAt?: string | undefined;
        output?: unknown;
    }, {
        id: string;
        state: JobState;
        createdAt: string;
        metadata: {
            requestId: string;
            userId: string;
            orgId: string;
            action: string;
            inputs?: unknown;
        };
        error?: {
            code: string;
            message: string;
        } | undefined;
        startedAt?: string | undefined;
        completedAt?: string | undefined;
        output?: unknown;
        logs?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    job: {
        id: string;
        state: JobState;
        createdAt: string;
        logs: string[];
        metadata: {
            requestId: string;
            userId: string;
            orgId: string;
            action: string;
            inputs?: unknown;
        };
        error?: {
            code: string;
            message: string;
        } | undefined;
        startedAt?: string | undefined;
        completedAt?: string | undefined;
        output?: unknown;
    };
}, {
    requestId: string;
    job: {
        id: string;
        state: JobState;
        createdAt: string;
        metadata: {
            requestId: string;
            userId: string;
            orgId: string;
            action: string;
            inputs?: unknown;
        };
        error?: {
            code: string;
            message: string;
        } | undefined;
        startedAt?: string | undefined;
        completedAt?: string | undefined;
        output?: unknown;
        logs?: string[] | undefined;
    };
}>;
export type JobStatus = z.infer<typeof JobStatusSchema>;
//# sourceMappingURL=jobs.d.ts.map