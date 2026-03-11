import { MetricCard } from "@/app/demo/components/MetricCard";
import { SceneShell } from "@/app/demo/components/SceneShell";

export function MorningBriefScene() {
  return (
    <SceneShell
      eyebrow="Morning Signal"
      title="Three overnight signals raise release risk."
      synthesis="The PM does not start with dashboards. They start with the signals that matter."
      nextAction="Open the metrics behind the spike."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <MetricCard label="Onboarding risk" value="High" delta="Completion dropped overnight" tone="warning" />
        <MetricCard label="UAT issue" value="Open" delta="Release checklist blocked" tone="warning" />
        <MetricCard label="Support spike" value="+31" delta="Documentation-related tickets" tone="warning" />
      </div>
    </SceneShell>
  );
}
