export const rbacConfig = {
  roles: {
    owner: { label: "Owner", description: "Full control of security, policy, and workspace data." },
    admin: { label: "Admin", description: "Manages configuration, integrations, identities, and access." },
    social_admin: { label: "Social administrator", description: "Owns multi-network content calendar and asset and copy variants." },
    publisher: { label: "Social publisher", description: "Operates authorised post workflows and records." },
    viewer: { label: "Viewer", description: "Reads permitted operational data." },
    auditor: { label: "Auditor", description: "Reads immutable history, controls, and evidence." },
  },
  permissions: {
    "dashboard.view": "View operational dashboard",
    "post.manage": "Create and update post records",
    "workflow.approve": "Approve controlled workflow transitions",
    "reports.view": "View operational reports",
    "sensitive.export": "Export sensitive workspace data",
    "assistant.ask": "Ask the Amplify knowledge guide",
    "audit.view": "Read audit history",
    "access.manage": "Configure roles and identity mappings",
    "settings.manage": "Manage workspace settings and integrations",
  },
  rolePermissions: {
    owner: ["*"], admin: ["*"],
    social_admin: ["dashboard.view", "post.manage", "workflow.approve", "reports.view", "assistant.ask", "audit.view"],
    publisher: ["dashboard.view", "post.manage", "reports.view", "assistant.ask"],
    viewer: ["dashboard.view", "reports.view"], auditor: ["dashboard.view", "reports.view", "audit.view"],
  } as Record<string, readonly string[]>,
  identityGroupMappings: {
    "amplify-owners": "owner", "amplify-admins": "admin",
    "amplify-managers": "social_admin", "amplify-operators": "publisher",
    "amplify-viewers": "viewer", "internal-audit": "auditor",
  } as Record<string, string>,
  defaultRole: "viewer",
};
