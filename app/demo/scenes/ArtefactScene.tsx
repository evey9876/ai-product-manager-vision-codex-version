import { MetricCard } from "@/app/demo/components/MetricCard";
import { SceneShell } from "@/app/demo/components/SceneShell";
import { SignalCard } from "@/app/demo/components/SignalCard";

export function ArtefactScene() {
  return (
    <SceneShell
      eyebrow="AI-Generated Artefacts"
      title="The release pack is generated from the chosen intervention."
      synthesis="The PM moves directly from decision to execution."
      nextAction="Send the pack and track launch confidence."
    >
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 md:grid-cols-2">
          <SignalCard
            title="AI-generated PRD"
            detail="Scope, release risk, success metrics, and rollout notes drafted instantly."
            emphasis="Ready for review"
          />
          <SignalCard
            title="AI-generated test script"
            detail="UAT steps, acceptance checks, and measurement plan generated automatically."
            emphasis="Ready for launch"
          />
          <SignalCard
            title="Stakeholder update"
            detail="A concise release note for engineering, support, and leadership."
            emphasis="Narration-ready"
          />
          <SignalCard
            title="Documentation experience metrics"
            detail="Search success, onboarding completion, support tickets, and release confidence tied to launch."
            emphasis="Live measurement"
          />
        </div>
        <div className="grid gap-4">
          <MetricCard label="PRD draft time" value="5 min" delta="Previously 2 hours" tone="positive" />
          <MetricCard label="Release brief cycle" value="Same day" delta="Previously multi-day" tone="positive" />
        </div>
      </div>
    </SceneShell>
  );
}
