import { MetricCard } from "@/app/demo/components/MetricCard";
import { SceneShell } from "@/app/demo/components/SceneShell";
import { motion } from "framer-motion";

export function StartScene() {
  return (
    <SceneShell
      eyebrow="Entry Command Centre"
      title="One surface for onboarding failure and release risk."
      synthesis="Execution loops are already running. The PM steps in where judgment matters."
      nextAction="Start the morning."
    >
      <div className="relative grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="pointer-events-none absolute inset-x-8 top-4 h-px bg-gradient-to-r from-transparent via-cyan-200/15 to-transparent" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Signals", "Docs, support, and UAT are already moving."],
            ["Judgment", "The PM decides what threatens the release."],
            ["Action", "The day starts with one clear risk call."],
          ].map(([title, body], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + index * 0.08, duration: 0.28 }}
              className="rounded-[24px] border border-white/10 bg-white/5 p-5"
            >
              <p className="text-sm font-medium text-white">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
            </motion.div>
          ))}
        </div>
        <MetricCard label="Release status" value="At risk" delta="Docs linked to onboarding failure" tone="warning" />
      </div>
    </SceneShell>
  );
}
