/**
 * Content management permissions.
 *
 * Each cluster has view and manage permissions.
 * Pattern: content:{cluster-id}:{action}
 */
export declare enum ContentPermission {
    VIEW_BRAND_KITS = "content:brand-kits:view",
    MANAGE_BRAND_KITS = "content:brand-kits:manage",
    VIEW_PROMPTS = "content:prompts:view",
    MANAGE_PROMPTS = "content:prompts:manage",
    VIEW_BLOGS = "content:blogs:view",
    MANAGE_BLOGS = "content:blogs:manage",
    VIEW_CHEATSHEETS = "content:cheatsheets:view",
    MANAGE_CHEATSHEETS = "content:cheatsheets:manage",
    CONTENT_ADMIN = "content:*:admin"
}
/**
 * Map cluster IDs to their required permissions.
 */
export declare const CLUSTER_PERMISSIONS: Record<string, {
    view: ContentPermission;
    manage: ContentPermission;
}>;
/**
 * Check if a permission set includes access to a cluster action.
 *
 * @param permissions - User's permissions
 * @param clusterId - Target cluster
 * @param action - Required action ('view' or 'manage')
 * @returns true if access is granted
 */
export declare function hasContentPermission(permissions: string[], clusterId: string, action: "view" | "manage"): boolean;
//# sourceMappingURL=content.d.ts.map