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
    label: "Start",
    eyebrow: "Entry Point",
    insight: "This is a live product vision, not a homepage.",
    action: "Enter the operating loop.",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    eyebrow: "08:05",
    insight: "Documentation performance is visible in one executive view.",
    action: "Open the highest-cost documentation issue.",
  },
  {
    id: "signal",
    label: "Signal",
    eyebrow: "08:30",
    insight: "Signals collapse into one ranked problem statement.",
    action: "Commit to the top opportunity.",
  },
  {
    id: "hypothesis",
    label: "Hypothesis",
    eyebrow: "09:20",
    insight: "AI generates the likely cause and the test path.",
    action: "Select the highest-confidence hypothesis.",
  },
  {
    id: "simulation",
    label: "Simulation",
    eyebrow: "11:10",
    insight: "The team chooses a path before spending delivery time.",
    action: "Approve the fastest credible experiment.",
  },
  {
    id: "artefact",
    label: "Artefact",
    eyebrow: "14:40",
    insight: "One decision generates every execution artefact.",
    action: "Ship the pack to design, engineering, and leadership.",
  },
  {
    id: "impact",
    label: "Impact",
    eyebrow: "End State",
    insight: "Better documentation decisions lift the core funnel fast.",
    action: "Scale the operating model across more PM workflows.",
  },
];
