import { SceneShell } from "@/app/demo/components/SceneShell";

export function StartScene() {
  return (
    <SceneShell
      eyebrow="Start Scene"
      title="A direct entry point into the AI PM experience"
      summary="There is no homepage detour. The user lands directly inside the simulation, where the product manager starts the day with a machine-assisted operating layer."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          "Signal orchestration before dashboards",
          "Hypothesis generation before meetings",
          "Execution artefacts before coordination drag",
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm leading-6 text-slate-200">{item}</p>
          </div>
        ))}
      </div>
    </SceneShell>
  );
}
