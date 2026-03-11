import { MetricCard } from "@/app/demo/components/MetricCard";
import { SceneShell } from "@/app/demo/components/SceneShell";

export function SimulationScene() {
  return (
    <SceneShell
      eyebrow="Simulation Scene"
      title="The PM chooses the fastest credible move."
      synthesis="Simulation shows which documentation intervention can lift the funnel without slowing delivery."
      nextAction="Select the AI-written setup rewrite for launch."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard
          label="Predicted completion lift"
          value="+11 pts"
          delta="AI-written setup rewrite"
          tone="positive"
        />
        <MetricCard
          label="Predicted ticket reduction"
          value="-24%"
          delta="Within 2 weeks"
          tone="positive"
        />
        <MetricCard label="Time to launch" value="2 days" delta="No product code change" />
      </div>
    </SceneShell>
  );
}
