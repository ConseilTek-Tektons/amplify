import type { ProductConfig } from "./types";

export const product: ProductConfig = {
  id: "amplify",
  name: "Amplify",
  category: "Content & Comms",
  tagline: "Scheduling, approvals and reporting on APIs you do not control.",
  description: "A social publishing control plane for connected accounts, content approval, scheduling, publishing, and analytics.",
  repositoryUrl: "https://github.com/ConseilTek-Tektons/amplify",
  nav: [
  {
    "label": "Calendar",
    "badge": "4"
  },
  {
    "label": "Compose"
  },
  {
    "label": "Approvals"
  },
  {
    "label": "Publishing"
  },
  {
    "label": "Analytics"
  }
],
  demoUsers: [
    { id: "demo-admin", name: "Morgan Lee", email: "morgan@northstar.example", role: "admin", label: "Workspace administrator" },
    { id: "demo-manager", name: "Avery Brooks", email: "avery@northstar.example", role: "social_admin", label: "Social administrator" },
    { id: "demo-operator", name: "Jordan Patel", email: "jordan@northstar.example", role: "publisher", label: "Social publisher" },
  ],
  ai: {
    name: "Amplify knowledge guide",
    description: "Ask grounded questions about multi-network content calendar, asset and copy variants, approval and separation of duties, or operating policy.",
    systemPrompt: "You are Amplify's grounded knowledge guide. Answer only from authorised workspace context and approved knowledge. Cite the supporting record or policy. Never mutate data, approve a workflow, or make a regulated decision.",
    suggestedQuestions: ["Explain social content approval.","Explain provider publishing.","Explain analytics normalisation."],
  },
};
