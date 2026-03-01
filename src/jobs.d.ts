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
    state: z.ZodEnum<typeof JobState>;
    createdAt: z.ZodString;
    startedAt: z.ZodOptional<z.ZodString>;
    completedAt: z.ZodOptional<z.ZodString>;
    output: z.ZodOptional<z.ZodUnknown>;
    error: z.ZodOptional<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>>;
    logs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    metadata: z.ZodObject<{
        requestId: z.ZodString;
        userId: z.ZodString;
        orgId: z.ZodString;
        action: z.ZodString;
        inputs: z.ZodUnknown;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Job = z.infer<typeof JobSchema>;
/**
 * Job status response.
 */
export declare const JobStatusSchema: z.ZodObject<{
    requestId: z.ZodString;
    job: z.ZodObject<{
        id: z.ZodString;
        state: z.ZodEnum<typeof JobState>;
        createdAt: z.ZodString;
        startedAt: z.ZodOptional<z.ZodString>;
        completedAt: z.ZodOptional<z.ZodString>;
        output: z.ZodOptional<z.ZodUnknown>;
        error: z.ZodOptional<z.ZodObject<{
            code: z.ZodString;
            message: z.ZodString;
        }, z.core.$strip>>;
        logs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        metadata: z.ZodObject<{
            requestId: z.ZodString;
            userId: z.ZodString;
            orgId: z.ZodString;
            action: z.ZodString;
            inputs: z.ZodUnknown;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type JobStatus = z.infer<typeof JobStatusSchema>;
//# sourceMappingURL=jobs.d.ts.map