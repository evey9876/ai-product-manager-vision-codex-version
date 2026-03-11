import { ReactNode } from "react";
import { motion } from "framer-motion";

type SceneShellProps = {
  eyebrow: string;
  title: string;
  summary: string;
  children: ReactNode;
};

export function SceneShell({ eyebrow, title, summary, children }: SceneShellProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="rounded-[32px] border border-panel-border bg-panel p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl lg:p-8"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-accent/80">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 lg:text-lg">{summary}</p>
      <div className="mt-8">{children}</div>
    </motion.section>
  );
}
