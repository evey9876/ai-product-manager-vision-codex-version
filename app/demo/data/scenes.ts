export type DemoSceneDefinition = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  summary: string;
};

export const demoScenes: DemoSceneDefinition[] = [
  {
    id: "start",
    label: "Start",
    eyebrow: "Entry Point",
    title: "The PM lands inside an AI-native control room",
    summary:
      "This experience skips the marketing layer and drops the user directly into a future operating environment for product decision-making.",
  },
  {
    id: "morning-brief",
    label: "Morning Brief",
    eyebrow: "08:05",
    title: "A morning brief assembles overnight product movement",
    summary:
      "Signal clusters, customer friction, and market shifts are pre-synthesized before the PM opens individual tools.",
  },
  {
    id: "signal",
    label: "Signal",
    eyebrow: "08:30",
    title: "Signals are orchestrated into one ranked decision surface",
    summary:
      "Product telemetry, support transcripts, revenue exposure, and competitor movement are condensed into one response-ready layer.",
  },
  {
    id: "hypothesis",
    label: "Hypothesis",
    eyebrow: "09:20",
    title: "AI proposes hypotheses with traceable evidence",
    summary:
      "Instead of manually stitching fragments together, the PM reviews candidate explanations with confidence scores and unknowns.",
  },
  {
    id: "simulation",
    label: "Simulation",
    eyebrow: "11:10",
    title: "Experiments are pressure-tested before execution begins",
    summary:
      "Scenario models estimate likely impact, implementation cost, and segment-specific tradeoffs before engineering work is pulled in.",
  },
  {
    id: "artefact",
    label: "Artefact",
    eyebrow: "14:40",
    title: "Decision artefacts are generated from the reasoning trail",
    summary:
      "The chosen direction becomes a PRD, a stakeholder brief, and an execution packet with minimal manual translation work.",
  },
];
