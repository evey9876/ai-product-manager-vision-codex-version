import { SceneShell } from "@/app/demo/components/SceneShell";
import { SignalCard } from "@/app/demo/components/SignalCard";

export function HypothesisScene() {
  return (
    <SceneShell
      eyebrow="Root Cause Options"
      title="Three concise causes compete for attention."
      synthesis="The PM needs enough clarity to act, not a long investigative report."
      nextAction="Test the highest-confidence cause first."
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <SignalCard
            title="Permissions mismatch"
            detail="The setup guide uses terms that do not match the live product."
            emphasis="0.78 confidence"
          />
          <SignalCard
            title="Release notes gap"
            detail="The latest UAT flow is missing one critical environment setup step."
            emphasis="0.58 confidence"
          />
          <SignalCard
            title="Navigation dead end"
            detail="Users reach docs but fail to find the setup answer fast enough."
            emphasis="0.44 confidence"
          />
        </div>
        <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Selected path</p>
          <p className="mt-4 text-2xl font-medium leading-9 text-white">
            Fix the permissions mismatch first. It explains both onboarding loss and the UAT block.
          </p>
        </div>
      </div>
    </SceneShell>
  );
}
