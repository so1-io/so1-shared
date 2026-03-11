import { z } from "zod";
/**
 * Standard error envelope returned by all BFF endpoints.
 * Includes requestId for traceability.
 */
export const ErrorEnvelopeSchema = z.object({
    requestId: z.string().uuid().describe("Unique request ID for tracing"),
    error: z.object({
        code: z.string().describe("Machine-readable error code"),
        message: z.string().describe("Human-readable error message"),
        details: z.record(z.string(), z.unknown()).optional().describe("Additional error context"),
    }),
});
/**
 * Success response envelope (optional; many endpoints just return data).
 */
export const SuccessEnvelopeSchema = z.object({
    requestId: z.string().uuid(),
    data: z.unknown(),
});
/**
 * Error code enum.
 */
export var ErrorCode;
(function (ErrorCode) {
    // Auth errors
    ErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorCode["FORBIDDEN"] = "FORBIDDEN";
    // Validation errors
    ErrorCode["BAD_REQUEST"] = "BAD_REQUEST";
    ErrorCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
    // Not found
    ErrorCode["NOT_FOUND"] = "NOT_FOUND";
    // Integration errors
    ErrorCode["GITHUB_ERROR"] = "GITHUB_ERROR";
    ErrorCode["N8N_ERROR"] = "N8N_ERROR";
    ErrorCode["MCP_ERROR"] = "MCP_ERROR";
    // Server errors
    ErrorCode["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
    ErrorCode["SERVICE_UNAVAILABLE"] = "SERVICE_UNAVAILABLE";
})(ErrorCode || (ErrorCode = {}));
/**
 * Build an error envelope.
 */
export function buildErrorEnvelope(requestId, code, message, details) {
    return {
        requestId,
        error: {
            code,
            message,
            details,
        },
    };
}
//# sourceMappingURL=errors.js.map