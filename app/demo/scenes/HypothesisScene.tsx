import { SceneShell } from "@/app/demo/components/SceneShell";
import { SignalCard } from "@/app/demo/components/SignalCard";

export function HypothesisScene() {
  return (
    <SceneShell
      eyebrow="Hypothesis Scene"
      title="AI proposes the fix path and the proof plan."
      synthesis="The model ranks the likely cause and attaches the test to run next."
      nextAction="Approve the top hypothesis and generate a test script."
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <SignalCard
            title="Top hypothesis"
            detail="Permissions terminology in the docs does not match the product UI."
            emphasis="0.78 confidence"
          />
          <SignalCard
            title="AI-generated test script"
            detail="Serve a rewritten setup guide to new admins and measure completion, search reformulation, and ticket volume."
            emphasis="Ready to run"
          />
        </div>
        <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Why this wins</p>
          <p className="mt-4 text-2xl font-medium leading-9 text-white">
            The PM reviews a recommendation, not a blank page.
          </p>
        </div>
      </div>
    </SceneShell>
  );
}
