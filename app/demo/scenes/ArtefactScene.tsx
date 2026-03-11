import { SceneShell } from "@/app/demo/components/SceneShell";

export function ArtefactScene() {
  return (
    <SceneShell
      eyebrow="Artefact Scene"
      title="Approved direction becomes aligned artefacts with minimal translation loss"
      summary="Once the PM commits, the system drafts the core execution artefacts so alignment can happen at decision speed."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {["PRD draft", "Experiment brief", "Stakeholder update", "Design prompt packet"].map((item) => (
          <div key={item} className="rounded-3xl border border-cyan-300/20 bg-cyan-400/8 p-5 text-center text-sm font-medium text-cyan-50">
            {item}
          </div>
        ))}
      </div>
    </SceneShell>
  );
}
