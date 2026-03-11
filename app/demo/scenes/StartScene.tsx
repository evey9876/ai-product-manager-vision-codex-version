import { MetricCard } from "@/app/demo/components/MetricCard";
import { SceneShell } from "@/app/demo/components/SceneShell";

export function StartScene() {
  return (
    <SceneShell
      eyebrow="Start Scene"
      title="One operating loop for documentation decisions."
      synthesis="The PM sees the problem, chooses the test, and ships the artefacts in one pass."
      nextAction="Open the live documentation dashboard."
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Detect", "AI surfaces the documentation issue."],
            ["Decide", "AI proposes the strongest fix path."],
            ["Deploy", "AI drafts the full execution pack."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium text-white">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
            </div>
          ))}
        </div>
        <MetricCard label="Narration length" value="< 5 min" delta="Executive-ready pacing" tone="positive" />
      </div>
    </SceneShell>
  );
}
