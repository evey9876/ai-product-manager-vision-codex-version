import { SceneShell } from "@/app/demo/components/SceneShell";

export function SimulationScene() {
  return (
    <SceneShell
      eyebrow="Simulation Scene"
      title="Experiment choices are simulated before engineering capacity is consumed"
      summary="The PM compares likely outcomes, delivery cost, and risk before asking the team to commit implementation time."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Checklist variant", "Fastest to ship, moderate lift, lowest delivery risk."],
          ["Inline AI helper", "Highest upside for SMB, larger implementation surface."],
          ["Permissions step removal", "Potential activation gain with enterprise trust risk."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
            <p className="text-lg text-white">{title}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
          </div>
        ))}
      </div>
    </SceneShell>
  );
}
