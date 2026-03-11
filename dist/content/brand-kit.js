import { z } from "zod";
/**
 * Visual identity color palette schema.
 */
export const BrandColorsSchema = z.object({
    background: z.string().describe("Background color (e.g., deep charcoal #0A0A0F)"),
    primary: z.string().describe("Primary brand color (e.g., electric blue #3B82F6)"),
    secondary: z.string().describe("Secondary color (e.g., muted slate #1E293B)"),
    accents: z.string().optional().describe("Accent color description"),
});
/**
 * Visual identity schema - core visual attributes of a brand.
 */
export const VisualIdentitySchema = z.object({
    abstractConcept: z.string().describe("Core visual metaphor (e.g., orchestration nexus)"),
    description: z.string().optional().describe("Extended visual concept description"),
    colors: BrandColorsSchema,
    style: z.array(z.string()).optional().describe("Style attributes (e.g., technical, minimal)"),
});
/**
 * Typography schema - font choices and characteristics.
 */
export const TypographySchema = z.object({
    headings: z.string().describe("Heading font family"),
    body: z.string().describe("Body text font family"),
    code: z.string().describe("Code/monospace font family"),
    characteristics: z.array(z.string()).optional().describe("Typography style notes"),
});
/**
 * Brand Kit schema - complete branding definition for media generation.
 *
 * This schema matches the structure in branding-assistant/projects/*.yaml
 *
 * @example
 * {
 *   name: "SO1",
 *   description: "Developer Operations Control Plane",
 *   mission: "Unify developer workflows...",
 *   tone: ["precise", "authoritative", "developer-native"],
 *   visualIdentity: { abstractConcept: "orchestration nexus", ... },
 *   tagline: "One platform. Every workflow."
 * }
 */
export const BrandKitSchema = z.object({
    // Required fields
    name: z.string().min(1).describe("Product or project name"),
    description: z.string().min(1).describe("Short tagline or description"),
    mission: z.string().min(1).describe("Core purpose statement"),
    tone: z.array(z.string()).min(1).describe("Brand voice attributes"),
    visualIdentity: VisualIdentitySchema.describe("Visual identity definition"),
    tagline: z.string().min(1).describe("Marketing tagline"),
    // Optional fields
    mascotPersonality: z
        .array(z.string())
        .optional()
        .describe("Mascot behavior rules (if applicable)"),
    typography: TypographySchema.optional().describe("Typography guidelines"),
    forbiddenStyles: z
        .array(z.string())
        .optional()
        .describe("Styles to explicitly avoid"),
    competitivePositioning: z
        .string()
        .optional()
        .describe("Market differentiation statement"),
    brandPillars: z
        .record(z.string(), z.string())
        .optional()
        .describe("Core brand pillars as key-value pairs"),
    ecosystemProducts: z
        .record(z.string(), z.string())
        .optional()
        .describe("Related products/services"),
    domains: z.array(z.string()).optional().describe("Associated domain names"),
});
/**
 * Brand kit with full metadata wrapper.
 */
export const BrandKitItemSchema = z.object({
    id: z.string().describe("Brand kit identifier (e.g., 'so1')"),
    version: z
        .string()
        .regex(/^\d+\.\d+$/)
        .describe("Semantic version"),
    status: z.enum(["draft", "review", "published", "archived"]).default("draft"),
    data: BrandKitSchema,
});
/**
 * Mapping from YAML snake_case to TypeScript camelCase.
 *
 * The YAML files use snake_case (e.g., visual_identity) but
 * TypeScript schemas use camelCase. This utility helps transform.
 */
export const BRAND_KIT_FIELD_MAP = {
    // YAML key -> TypeScript key
    visual_identity: "visualIdentity",
    abstract_concept: "abstractConcept",
    mascot_personality: "mascotPersonality",
    forbidden_styles: "forbiddenStyles",
    competitive_positioning: "competitivePositioning",
    brand_pillars: "brandPillars",
    ecosystem_products: "ecosystemProducts",
};
/**
 * Transform a YAML-parsed brand kit (snake_case) to schema-compliant format.
 */
export function transformYamlBrandKit(yamlData) {
    const result = {};
    for (const [key, value] of Object.entries(yamlData)) {
        const mappedKey = BRAND_KIT_FIELD_MAP[key] ?? key;
        // Recursively transform nested objects
        if (value && typeof value === "object" && !Array.isArray(value)) {
            result[mappedKey] = transformYamlBrandKit(value);
        }
        else {
            result[mappedKey] = value;
        }
    }
    return result;
}
//# sourceMappingURL=brand-kit.js.map