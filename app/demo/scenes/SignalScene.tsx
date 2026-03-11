import { SceneShell } from "@/app/demo/components/SceneShell";
import { SignalCard } from "@/app/demo/components/SignalCard";

export function SignalScene() {
  return (
    <SceneShell
      eyebrow="Signal Scene"
      title="AI collapses noisy evidence into one clear problem."
      synthesis="Search failures, onboarding friction, and support load point to the same documentation breakdown."
      nextAction="Prioritize documentation setup guidance as the lead problem."
    >
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4">
          <SignalCard
            title="Support transcripts"
            detail="Users ask the same permissions question before completing setup."
            emphasis="Repeated signal"
          />
          <SignalCard
            title="Search behavior"
            detail="Most failed searches include setup, roles, and access language."
            emphasis="High intent"
          />
          <SignalCard
            title="Onboarding telemetry"
            detail="Completion drops sharply after the documentation handoff step."
            emphasis="Highest funnel loss"
          />
        </div>
        <div className="rounded-[28px] border border-cyan-300/20 bg-cyan-400/8 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">Synthesis</p>
          <p className="mt-4 text-2xl font-medium leading-9 text-white">
            The issue is not product capability. It is documentation clarity at the setup moment.
          </p>
        </div>
      </div>
    </SceneShell>
  );
}
