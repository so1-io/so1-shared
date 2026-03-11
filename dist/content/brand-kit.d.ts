import { z } from "zod";
/**
 * Visual identity color palette schema.
 */
export declare const BrandColorsSchema: z.ZodObject<{
    background: z.ZodString;
    primary: z.ZodString;
    secondary: z.ZodString;
    accents: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    background: string;
    primary: string;
    secondary: string;
    accents?: string | undefined;
}, {
    background: string;
    primary: string;
    secondary: string;
    accents?: string | undefined;
}>;
export type BrandColors = z.infer<typeof BrandColorsSchema>;
/**
 * Visual identity schema - core visual attributes of a brand.
 */
export declare const VisualIdentitySchema: z.ZodObject<{
    abstractConcept: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    colors: z.ZodObject<{
        background: z.ZodString;
        primary: z.ZodString;
        secondary: z.ZodString;
        accents: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        background: string;
        primary: string;
        secondary: string;
        accents?: string | undefined;
    }, {
        background: string;
        primary: string;
        secondary: string;
        accents?: string | undefined;
    }>;
    style: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    abstractConcept: string;
    colors: {
        background: string;
        primary: string;
        secondary: string;
        accents?: string | undefined;
    };
    description?: string | undefined;
    style?: string[] | undefined;
}, {
    abstractConcept: string;
    colors: {
        background: string;
        primary: string;
        secondary: string;
        accents?: string | undefined;
    };
    description?: string | undefined;
    style?: string[] | undefined;
}>;
export type VisualIdentity = z.infer<typeof VisualIdentitySchema>;
/**
 * Typography schema - font choices and characteristics.
 */
export declare const TypographySchema: z.ZodObject<{
    headings: z.ZodString;
    body: z.ZodString;
    code: z.ZodString;
    characteristics: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    code: string;
    headings: string;
    body: string;
    characteristics?: string[] | undefined;
}, {
    code: string;
    headings: string;
    body: string;
    characteristics?: string[] | undefined;
}>;
export type Typography = z.infer<typeof TypographySchema>;
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
export declare const BrandKitSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    mission: z.ZodString;
    tone: z.ZodArray<z.ZodString, "many">;
    visualIdentity: z.ZodObject<{
        abstractConcept: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        colors: z.ZodObject<{
            background: z.ZodString;
            primary: z.ZodString;
            secondary: z.ZodString;
            accents: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            background: string;
            primary: string;
            secondary: string;
            accents?: string | undefined;
        }, {
            background: string;
            primary: string;
            secondary: string;
            accents?: string | undefined;
        }>;
        style: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        abstractConcept: string;
        colors: {
            background: string;
            primary: string;
            secondary: string;
            accents?: string | undefined;
        };
        description?: string | undefined;
        style?: string[] | undefined;
    }, {
        abstractConcept: string;
        colors: {
            background: string;
            primary: string;
            secondary: string;
            accents?: string | undefined;
        };
        description?: string | undefined;
        style?: string[] | undefined;
    }>;
    tagline: z.ZodString;
    mascotPersonality: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    typography: z.ZodOptional<z.ZodObject<{
        headings: z.ZodString;
        body: z.ZodString;
        code: z.ZodString;
        characteristics: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        headings: string;
        body: string;
        characteristics?: string[] | undefined;
    }, {
        code: string;
        headings: string;
        body: string;
        characteristics?: string[] | undefined;
    }>>;
    forbiddenStyles: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    competitivePositioning: z.ZodOptional<z.ZodString>;
    brandPillars: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    ecosystemProducts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    domains: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    mission: string;
    tone: string[];
    visualIdentity: {
        abstractConcept: string;
        colors: {
            background: string;
            primary: string;
            secondary: string;
            accents?: string | undefined;
        };
        description?: string | undefined;
        style?: string[] | undefined;
    };
    tagline: string;
    mascotPersonality?: string[] | undefined;
    typography?: {
        code: string;
        headings: string;
        body: string;
        characteristics?: string[] | undefined;
    } | undefined;
    forbiddenStyles?: string[] | undefined;
    competitivePositioning?: string | undefined;
    brandPillars?: Record<string, string> | undefined;
    ecosystemProducts?: Record<string, string> | undefined;
    domains?: string[] | undefined;
}, {
    name: string;
    description: string;
    mission: string;
    tone: string[];
    visualIdentity: {
        abstractConcept: string;
        colors: {
            background: string;
            primary: string;
            secondary: string;
            accents?: string | undefined;
        };
        description?: string | undefined;
        style?: string[] | undefined;
    };
    tagline: string;
    mascotPersonality?: string[] | undefined;
    typography?: {
        code: string;
        headings: string;
        body: string;
        characteristics?: string[] | undefined;
    } | undefined;
    forbiddenStyles?: string[] | undefined;
    competitivePositioning?: string | undefined;
    brandPillars?: Record<string, string> | undefined;
    ecosystemProducts?: Record<string, string> | undefined;
    domains?: string[] | undefined;
}>;
export type BrandKit = z.infer<typeof BrandKitSchema>;
/**
 * Brand kit with full metadata wrapper.
 */
export declare const BrandKitItemSchema: z.ZodObject<{
    id: z.ZodString;
    version: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<["draft", "review", "published", "archived"]>>;
    data: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        mission: z.ZodString;
        tone: z.ZodArray<z.ZodString, "many">;
        visualIdentity: z.ZodObject<{
            abstractConcept: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            colors: z.ZodObject<{
                background: z.ZodString;
                primary: z.ZodString;
                secondary: z.ZodString;
                accents: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                background: string;
                primary: string;
                secondary: string;
                accents?: string | undefined;
            }, {
                background: string;
                primary: string;
                secondary: string;
                accents?: string | undefined;
            }>;
            style: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            abstractConcept: string;
            colors: {
                background: string;
                primary: string;
                secondary: string;
                accents?: string | undefined;
            };
            description?: string | undefined;
            style?: string[] | undefined;
        }, {
            abstractConcept: string;
            colors: {
                background: string;
                primary: string;
                secondary: string;
                accents?: string | undefined;
            };
            description?: string | undefined;
            style?: string[] | undefined;
        }>;
        tagline: z.ZodString;
        mascotPersonality: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        typography: z.ZodOptional<z.ZodObject<{
            headings: z.ZodString;
            body: z.ZodString;
            code: z.ZodString;
            characteristics: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            code: string;
            headings: string;
            body: string;
            characteristics?: string[] | undefined;
        }, {
            code: string;
            headings: string;
            body: string;
            characteristics?: string[] | undefined;
        }>>;
        forbiddenStyles: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        competitivePositioning: z.ZodOptional<z.ZodString>;
        brandPillars: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        ecosystemProducts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        domains: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        description: string;
        mission: string;
        tone: string[];
        visualIdentity: {
            abstractConcept: string;
            colors: {
                background: string;
                primary: string;
                secondary: string;
                accents?: string | undefined;
            };
            description?: string | undefined;
            style?: string[] | undefined;
        };
        tagline: string;
        mascotPersonality?: string[] | undefined;
        typography?: {
            code: string;
            headings: string;
            body: string;
            characteristics?: string[] | undefined;
        } | undefined;
        forbiddenStyles?: string[] | undefined;
        competitivePositioning?: string | undefined;
        brandPillars?: Record<string, string> | undefined;
        ecosystemProducts?: Record<string, string> | undefined;
        domains?: string[] | undefined;
    }, {
        name: string;
        description: string;
        mission: string;
        tone: string[];
        visualIdentity: {
            abstractConcept: string;
            colors: {
                background: string;
                primary: string;
                secondary: string;
                accents?: string | undefined;
            };
            description?: string | undefined;
            style?: string[] | undefined;
        };
        tagline: string;
        mascotPersonality?: string[] | undefined;
        typography?: {
            code: string;
            headings: string;
            body: string;
            characteristics?: string[] | undefined;
        } | undefined;
        forbiddenStyles?: string[] | undefined;
        competitivePositioning?: string | undefined;
        brandPillars?: Record<string, string> | undefined;
        ecosystemProducts?: Record<string, string> | undefined;
        domains?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    status: "draft" | "review" | "published" | "archived";
    data: {
        name: string;
        description: string;
        mission: string;
        tone: string[];
        visualIdentity: {
            abstractConcept: string;
            colors: {
                background: string;
                primary: string;
                secondary: string;
                accents?: string | undefined;
            };
            description?: string | undefined;
            style?: string[] | undefined;
        };
        tagline: string;
        mascotPersonality?: string[] | undefined;
        typography?: {
            code: string;
            headings: string;
            body: string;
            characteristics?: string[] | undefined;
        } | undefined;
        forbiddenStyles?: string[] | undefined;
        competitivePositioning?: string | undefined;
        brandPillars?: Record<string, string> | undefined;
        ecosystemProducts?: Record<string, string> | undefined;
        domains?: string[] | undefined;
    };
    id: string;
    version: string;
}, {
    data: {
        name: string;
        description: string;
        mission: string;
        tone: string[];
        visualIdentity: {
            abstractConcept: string;
            colors: {
                background: string;
                primary: string;
                secondary: string;
                accents?: string | undefined;
            };
            description?: string | undefined;
            style?: string[] | undefined;
        };
        tagline: string;
        mascotPersonality?: string[] | undefined;
        typography?: {
            code: string;
            headings: string;
            body: string;
            characteristics?: string[] | undefined;
        } | undefined;
        forbiddenStyles?: string[] | undefined;
        competitivePositioning?: string | undefined;
        brandPillars?: Record<string, string> | undefined;
        ecosystemProducts?: Record<string, string> | undefined;
        domains?: string[] | undefined;
    };
    id: string;
    version: string;
    status?: "draft" | "review" | "published" | "archived" | undefined;
}>;
export type BrandKitItem = z.infer<typeof BrandKitItemSchema>;
/**
 * Mapping from YAML snake_case to TypeScript camelCase.
 *
 * The YAML files use snake_case (e.g., visual_identity) but
 * TypeScript schemas use camelCase. This utility helps transform.
 */
export declare const BRAND_KIT_FIELD_MAP: {
    readonly visual_identity: "visualIdentity";
    readonly abstract_concept: "abstractConcept";
    readonly mascot_personality: "mascotPersonality";
    readonly forbidden_styles: "forbiddenStyles";
    readonly competitive_positioning: "competitivePositioning";
    readonly brand_pillars: "brandPillars";
    readonly ecosystem_products: "ecosystemProducts";
};
/**
 * Transform a YAML-parsed brand kit (snake_case) to schema-compliant format.
 */
export declare function transformYamlBrandKit(yamlData: Record<string, unknown>): Record<string, unknown>;
//# sourceMappingURL=brand-kit.d.ts.map