import { MetricCard } from "@/app/demo/components/MetricCard";
import { SceneShell } from "@/app/demo/components/SceneShell";
import { SignalCard } from "@/app/demo/components/SignalCard";

export function ArtefactScene() {
  return (
    <SceneShell
      eyebrow="Artefact Scene"
      title="One decision generates the execution pack."
      synthesis="AI creates the PRD, the experiment scripts, and the stakeholder update from the same source of truth."
      nextAction="Send the pack and start measurement."
    >
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 md:grid-cols-2">
          <SignalCard
            title="AI-generated PRD"
            detail="Problem, audience, success metrics, and rollout plan drafted instantly."
            emphasis="Ready for review"
          />
          <SignalCard
            title="AI-generated experiment script"
            detail="Test cases, traffic split, and measurement plan generated automatically."
            emphasis="Ready for launch"
          />
          <SignalCard
            title="Stakeholder update generation"
            detail="Leadership summary written for speed, risk, and projected impact."
            emphasis="Narration-ready"
          />
          <SignalCard
            title="Documentation experience metrics"
            detail="Search success, onboarding completion, and support tickets tied to the change."
            emphasis="Live measurement"
          />
        </div>
        <div className="grid gap-4">
          <MetricCard label="PRD draft time" value="5 min" delta="Previously 2 hours" tone="positive" />
          <MetricCard label="Decision-to-brief cycle" value="Same day" delta="Previously multi-day" tone="positive" />
        </div>
      </div>
    </SceneShell>
  );
}
