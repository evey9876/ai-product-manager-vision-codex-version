import { SceneShell } from "@/app/demo/components/SceneShell";

export function HypothesisScene() {
  return (
    <SceneShell
      eyebrow="Hypothesis Scene"
      title="Candidate explanations arrive with confidence and traceability"
      summary="The PM reviews structured reasoning, unknowns, and suggested tests instead of manually building the first draft of insight."
    >
      <div className="space-y-4">
        {[
          {
            title: "Permissions language mismatch",
            confidence: "0.78 confidence",
          },
          {
            title: "Invite flow is too complex for multi-admin setups",
            confidence: "0.64 confidence",
          },
          {
            title: "Competitive expectation shift raised setup standards",
            confidence: "0.47 confidence",
          },
        ].map((item) => (
          <div key={item.title} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg text-white">{item.title}</p>
              <p className="mt-1 text-sm text-slate-400">Linked to evidence from support, activation telemetry, and account structure.</p>
            </div>
            <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-sm text-cyan-100">{item.confidence}</span>
          </div>
        ))}
      </div>
    </SceneShell>
  );
}
