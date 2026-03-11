/**
 * Content management permissions.
 *
 * Each cluster has view and manage permissions.
 * Pattern: content:{cluster-id}:{action}
 */
export enum ContentPermission {
  // Brand Kits
  VIEW_BRAND_KITS = "content:brand-kits:view",
  MANAGE_BRAND_KITS = "content:brand-kits:manage",

  // Prompts (Veritas)
  VIEW_PROMPTS = "content:prompts:view",
  MANAGE_PROMPTS = "content:prompts:manage",

  // Blogs
  VIEW_BLOGS = "content:blogs:view",
  MANAGE_BLOGS = "content:blogs:manage",

  // Cheatsheets
  VIEW_CHEATSHEETS = "content:cheatsheets:view",
  MANAGE_CHEATSHEETS = "content:cheatsheets:manage",

  // Admin - full access to all content
  CONTENT_ADMIN = "content:*:admin",
}

/**
 * Map cluster IDs to their required permissions.
 */
export const CLUSTER_PERMISSIONS: Record<
  string,
  { view: ContentPermission; manage: ContentPermission }
> = {
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
export function hasContentPermission(
  permissions: string[],
  clusterId: string,
  action: "view" | "manage"
): boolean {
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
