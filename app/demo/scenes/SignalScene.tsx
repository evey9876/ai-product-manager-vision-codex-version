import { SceneShell } from "@/app/demo/components/SceneShell";

export function SignalScene() {
  return (
    <SceneShell
      eyebrow="Signal Scene"
      title="Disparate inputs collapse into one orchestrated signal layer"
      summary="AI-native tooling does the aggregation and ranking work first, allowing the PM to spend time on judgment rather than mechanical synthesis."
    >
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Orchestrated Inputs</p>
          <div className="mt-4 grid gap-3">
            {[
              "Telemetry anomalies",
              "Support transcript themes",
              "GTM and revenue exposure",
              "Competitor movement",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-slate-950/50 p-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Result</p>
          <p className="mt-4 text-xl leading-8 text-white">
            A ranked problem brief with linked evidence, impact bands, and recommended follow-up questions.
          </p>
        </div>
      </div>
    </SceneShell>
  );
}
