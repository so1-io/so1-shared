import { z } from "zod";
/**
 * Standard error envelope returned by all BFF endpoints.
 * Includes requestId for traceability.
 */
export declare const ErrorEnvelopeSchema: z.ZodObject<{
    requestId: z.ZodString;
    error: z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        details: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
        details?: Record<string, unknown> | undefined;
    }, {
        code: string;
        message: string;
        details?: Record<string, unknown> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    error: {
        code: string;
        message: string;
        details?: Record<string, unknown> | undefined;
    };
}, {
    requestId: string;
    error: {
        code: string;
        message: string;
        details?: Record<string, unknown> | undefined;
    };
}>;
export type ErrorEnvelope = z.infer<typeof ErrorEnvelopeSchema>;
/**
 * Success response envelope (optional; many endpoints just return data).
 */
export declare const SuccessEnvelopeSchema: z.ZodObject<{
    requestId: z.ZodString;
    data: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    data?: unknown;
}, {
    requestId: string;
    data?: unknown;
}>;
export type SuccessEnvelope = z.infer<typeof SuccessEnvelopeSchema>;
/**
 * Error code enum.
 */
export declare enum ErrorCode {
    UNAUTHORIZED = "UNAUTHORIZED",
    FORBIDDEN = "FORBIDDEN",
    BAD_REQUEST = "BAD_REQUEST",
    VALIDATION_ERROR = "VALIDATION_ERROR",
    NOT_FOUND = "NOT_FOUND",
    GITHUB_ERROR = "GITHUB_ERROR",
    N8N_ERROR = "N8N_ERROR",
    MCP_ERROR = "MCP_ERROR",
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
    SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE"
}
/**
 * Build an error envelope.
 */
export declare function buildErrorEnvelope(requestId: string, code: ErrorCode | string, message: string, details?: Record<string, unknown>): ErrorEnvelope;
//# sourceMappingURL=errors.d.ts.map