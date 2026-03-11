import { MetricCard } from "@/app/demo/components/MetricCard";
import { SceneShell } from "@/app/demo/components/SceneShell";

export function SimulationScene() {
  return (
    <SceneShell
      eyebrow="Intervention Simulation"
      title="The PM chooses between fast and strategic fixes."
      synthesis="One path protects this release. The other resets the documentation system."
      nextAction="Ship the fast fix now and queue the strategic follow-up."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-100/80">Fast fix</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-white">Setup rewrite + UAT patch</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <MetricCard label="Launch time" value="2 days" delta="Fits release window" tone="positive" />
            <MetricCard label="Confidence gain" value="+18 pts" delta="Release readiness" tone="positive" />
          </div>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Strategic fix</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-white">Taxonomy and IA reset</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <MetricCard label="Launch time" value="3 weeks" delta="Misses current release" />
            <MetricCard label="Long-term lift" value="+24 pts" delta="Broader docs quality gain" />
          </div>
        </div>
      </div>
    </SceneShell>
  );
}
