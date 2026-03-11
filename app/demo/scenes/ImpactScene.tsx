import { MetricCard } from "@/app/demo/components/MetricCard";
import { SceneShell } from "@/app/demo/components/SceneShell";

export function ImpactScene() {
  return (
    <SceneShell
      eyebrow="Impact Scene"
      title="The release lands with healthier metrics and higher confidence."
      synthesis="The documentation intervention improves onboarding and removes the release block."
      nextAction="Carry the same decision pattern into the next release cycle."
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard label="Search success rate" value="78%" delta="+17 pts" tone="positive" />
          <MetricCard label="Onboarding completion" value="81%" delta="+13 pts" tone="positive" />
          <MetricCard label="Support tickets" value="91" delta="-36%" tone="positive" />
        </div>
        <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Release confidence</p>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-white">62% to 86%</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Decision cycle drops from 2 days to 4 hours while UAT passes cleanly.
          </p>
        </div>
      </div>
    </SceneShell>
  );
}
