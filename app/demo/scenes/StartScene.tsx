import { MetricCard } from "@/app/demo/components/MetricCard";
import { SceneShell } from "@/app/demo/components/SceneShell";

export function StartScene() {
  return (
    <SceneShell
      eyebrow="Entry Command Centre"
      title="One surface for onboarding failure and release risk."
      synthesis="The documentation PM enters the day through a single control room built for fast release decisions."
      nextAction="Scan the overnight signal queue."
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Risk", "Onboarding and release health in one view."],
            ["Signals", "UAT, support, and docs tracked together."],
            ["Decision", "One path from issue to artefacts."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium text-white">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
            </div>
          ))}
        </div>
        <MetricCard label="Release status" value="At risk" delta="Docs linked to onboarding failure" tone="warning" />
      </div>
    </SceneShell>
  );
}
