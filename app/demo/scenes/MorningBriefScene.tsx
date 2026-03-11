import { SceneShell } from "@/app/demo/components/SceneShell";

export function MorningBriefScene() {
  return (
    <SceneShell
      eyebrow="Morning Brief"
      title="The system opens with a synthesized overnight brief"
      summary="Instead of hunting across dashboards, notes, and Slack threads, the PM gets a pre-ranked morning perspective with urgency, confidence, and segment impact."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Top Signals</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <li>Activation drop detected for collaborative workspaces.</li>
            <li>Support friction increased around permissions and invites.</li>
            <li>Competitor launch signals a faster AI onboarding narrative.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-cyan-300/20 bg-cyan-400/8 p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-100/70">PM Readout</p>
          <p className="mt-4 text-lg leading-8 text-white">
            Review the highest-risk signal cluster first, because it combines activation risk,
            support load, and competitive urgency in one surface.
          </p>
        </div>
      </div>
    </SceneShell>
  );
}
