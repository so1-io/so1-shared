/**
 * Content management permissions.
 *
 * Each cluster has view and manage permissions.
 * Pattern: content:{cluster-id}:{action}
 */
export var ContentPermission;
(function (ContentPermission) {
    // Brand Kits
    ContentPermission["VIEW_BRAND_KITS"] = "content:brand-kits:view";
    ContentPermission["MANAGE_BRAND_KITS"] = "content:brand-kits:manage";
    // Prompts (Veritas)
    ContentPermission["VIEW_PROMPTS"] = "content:prompts:view";
    ContentPermission["MANAGE_PROMPTS"] = "content:prompts:manage";
    // Blogs
    ContentPermission["VIEW_BLOGS"] = "content:blogs:view";
    ContentPermission["MANAGE_BLOGS"] = "content:blogs:manage";
    // Cheatsheets
    ContentPermission["VIEW_CHEATSHEETS"] = "content:cheatsheets:view";
    ContentPermission["MANAGE_CHEATSHEETS"] = "content:cheatsheets:manage";
    // Admin - full access to all content
    ContentPermission["CONTENT_ADMIN"] = "content:*:admin";
})(ContentPermission || (ContentPermission = {}));
/**
 * Map cluster IDs to their required permissions.
 */
export const CLUSTER_PERMISSIONS = {
    "brand-kits": {
        view: ContentPermission.VIEW_BRAND_KITS,
        manage: ContentPermission.MANAGE_BRAND_KITS,
    },
    prompts: {
        view: ContentPermission.VIEW_PROMPTS,
        manage: ContentPermission.MANAGE_PROMPTS,
    },
    blogs: {
        view: ContentPermission.VIEW_BLOGS,
        manage: ContentPermission.MANAGE_BLOGS,
    },
    cheatsheets: {
        view: ContentPermission.VIEW_CHEATSHEETS,
        manage: ContentPermission.MANAGE_CHEATSHEETS,
    },
};
/**
 * Check if a permission set includes access to a cluster action.
 *
 * @param permissions - User's permissions
 * @param clusterId - Target cluster
 * @param action - Required action ('view' or 'manage')
 * @returns true if access is granted
 */
export function hasContentPermission(permissions, clusterId, action) {
    // Admin has full access
    if (permissions.includes(ContentPermission.CONTENT_ADMIN)) {
        return true;
    }
    const clusterPerms = CLUSTER_PERMISSIONS[clusterId];
    if (!clusterPerms) {
        // Unknown cluster - deny by default
        return false;
    }
    const required = clusterPerms[action];
    return permissions.includes(required);
}
//# sourceMappingURL=content.js.map