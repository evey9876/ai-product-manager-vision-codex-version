import { MetricCard } from "@/app/demo/components/MetricCard";
import { SceneShell } from "@/app/demo/components/SceneShell";

export function MorningBriefScene() {
  return (
    <SceneShell
      eyebrow="Metrics Dashboard"
      title="Documentation health is visible in one glance."
      synthesis="Three numbers explain the business problem before anyone opens a doc."
      nextAction="Investigate the onboarding drop linked to documentation."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <MetricCard label="Search success rate" value="61%" delta="-12 pts WoW" tone="warning" />
        <MetricCard label="Onboarding completion" value="68%" delta="-9 pts for new admins" tone="warning" />
        <MetricCard
          label="Doc-related support tickets"
          value="143"
          delta="+31 this week"
          tone="warning"
        />
      </div>
    </SceneShell>
  );
}
