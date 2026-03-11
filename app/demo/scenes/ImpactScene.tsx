import { MetricCard } from "@/app/demo/components/MetricCard";
import { SceneShell } from "@/app/demo/components/SceneShell";

export function ImpactScene() {
  return (
    <SceneShell
      eyebrow="Impact Scene"
      title="The loop closes with stronger metrics and faster decisions."
      synthesis="Documentation quality improves, onboarding recovers, and the PM team moves from weeks to hours."
      nextAction="Scale the operating model across more PM workflows."
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard label="Search success rate" value="78%" delta="+17 pts" tone="positive" />
          <MetricCard label="Onboarding completion" value="79%" delta="+11 pts" tone="positive" />
          <MetricCard label="Doc-related support tickets" value="91" delta="-36%" tone="positive" />
        </div>
        <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Decision cycle</p>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-white">2 days to 4 hours</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Detect, decide, align, and launch inside one executive review window.
          </p>
        </div>
      </div>
    </SceneShell>
  );
}
