import { MetricCard } from "@/app/demo/components/MetricCard";
import { SceneShell } from "@/app/demo/components/SceneShell";

export function SignalScene() {
  return (
    <SceneShell
      eyebrow="Metrics Dashboard"
      title="The metrics make the risk undeniable."
      synthesis="Search, onboarding, and support all move in the same direction."
      nextAction="Review the root-cause options."
    >
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard label="Search success" value="61%" delta="-12 pts" tone="warning" />
          <MetricCard label="Onboarding completion" value="68%" delta="-9 pts" tone="warning" />
          <MetricCard label="Support tickets" value="143" delta="+31 this week" tone="warning" />
        </div>
        <div className="rounded-[28px] border border-cyan-300/20 bg-cyan-400/8 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">Synthesis</p>
          <p className="mt-4 text-2xl font-medium leading-9 text-white">
            Documentation is now a release-quality issue, not a content backlog item.
          </p>
        </div>
      </div>
    </SceneShell>
  );
}
