export type DemoSceneDefinition = {
  id: string;
  label: string;
  eyebrow: string;
  insight: string;
  action: string;
};

export const demoScenes: DemoSceneDefinition[] = [
  {
    id: "start",
    label: "Command Centre",
    eyebrow: "07:55",
    insight: "The PM starts inside one release-risk command centre.",
    action: "Open the morning signal queue.",
  },
  {
    id: "dashboard",
    label: "Morning Signal",
    eyebrow: "08:05",
    insight: "Three signals point to documentation-driven onboarding risk.",
    action: "Review the operating metrics.",
  },
  {
    id: "signal",
    label: "Metrics",
    eyebrow: "08:30",
    insight: "The metrics confirm a real onboarding and release problem.",
    action: "Choose the most likely root cause.",
  },
  {
    id: "hypothesis",
    label: "Root Cause",
    eyebrow: "09:20",
    insight: "Three concise options narrow the investigation fast.",
    action: "Pick the most credible cause to test.",
  },
  {
    id: "simulation",
    label: "Simulation",
    eyebrow: "09:40",
    insight: "The PM chooses between a fast fix and a strategic fix.",
    action: "Approve the path for this release window.",
  },
  {
    id: "artefact",
    label: "Artefacts",
    eyebrow: "10:05",
    insight: "One decision becomes an execution-ready release pack.",
    action: "Send the pack to engineering, QA, and stakeholders.",
  },
  {
    id: "impact",
    label: "Impact",
    eyebrow: "15:20",
    insight: "Documentation changes improve metrics and release confidence.",
    action: "Roll the operating model into the next launch cycle.",
  },
];
