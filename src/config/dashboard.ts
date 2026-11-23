import type { DashboardConfig } from "./dashboard-schema";
export type { DashboardItem } from "./dashboard-schema";

export const dashboard: DashboardConfig = {
  eyebrow: "CONTENT & COMMS · OPERATIONS",
  heading: "Amplify keeps the operating record visible, governed, and ready for action.",
  summary: "Multi-network content calendar, Asset and copy variants, Approval and separation of duties are backed by PostgreSQL records and explicit workflow history.",
  primaryAction: "Create post", secondaryAction: "Open workspace",
  secondaryNotice: "Workspace opened with current identity, role, and record filters.",
  managePermission: "post.manage", metricLabel: "Amplify operating health",
  metrics: [{"label":"Scheduled posts","value":"186","change":"next 30d","context":"current workspace","tone":"positive","progress":"82%"},{"label":"Approval time","value":"3.2h","change":"↓ 22%","context":"operational window","tone":"positive","progress":"76%"},{"label":"Publish success","value":"99.1%","change":"18 retries","context":"current workspace","tone":"warning","progress":"91%"},{"label":"Engagement","value":"4.8%","change":"↗ 0.6%","context":"operational window","tone":"positive","progress":"96%"}],
  trend: [46,52,49,64,71,78,86].map((value, index) => ({ label: String(index), value })),
  listTitle: "Active social posts", workspaceAction: "Open governed workspace",
  items: [{"id":1,"primary":"AMP-842 · Platform launch campaign","secondary":"Multi-network content calendar","tertiary":"Updated today","status":"Draft","accent":"violet"},{"id":2,"primary":"AMP-831 · Customer story series","secondary":"Asset and copy variants","tertiary":"Evidence current","status":"Review","accent":"lime"},{"id":3,"primary":"AMP-820 · Security research briefing","secondary":"Approval and separation of duties","tertiary":"Updated today","status":"Scheduled","accent":"cyan"},{"id":4,"primary":"AMP-809 · Executive event coverage","secondary":"Scheduled provider publishing","tertiary":"Evidence current","status":"Published","accent":"lime"}],
  sideTitle: "Control posture", sideSubtitle: "Derived from workflow and evidence",
  sideItems: [
    { title: "Multi-network content calendar", detail: "Policy and evidence current", value: "Healthy" },
    { title: "Asset and copy variants", detail: "A small review queue needs attention", value: "Review", warning: true },
    { title: "Approval and separation of duties", detail: "Within the configured operating target", value: "On track" },
  ],
  insightTitle: "Asset and copy variants has the clearest next action.",
  insightBody: "The recommendation is grounded in current post records, workflow events, and approved operating policy. It remains advisory until an authorised user acts.",
  insightNotice: "Recommendation opened with its supporting records and policy citations.",
  itemNoun: "Social post", modalEyebrow: "NEW SOCIAL POST", modalTitle: "Add social post",
  formFields: [
    { name: "title", label: "Social post title", placeholder: "Platform launch campaign" },
    { name: "owner", label: "Owner", placeholder: "Social publisher" },
    { name: "reference", label: "Reference", placeholder: "AMP-843" },
  ],
  defaultSecondary: "Multi-network content calendar", defaultTertiary: "Created now", newItemStatus: "Draft",
  policyPreview: "The post inherits workspace visibility, requires post.manage, and records its creator and changes in the audit trail.",
  submitLabel: "Create post",
};
