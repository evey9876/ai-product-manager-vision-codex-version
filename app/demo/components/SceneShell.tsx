import { ReactNode } from "react";
import { motion } from "framer-motion";

type SceneShellProps = {
  eyebrow: string;
  title: string;
  synthesis: string;
  nextAction: string;
  children: ReactNode;
};

const headerVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function SceneShell({ eyebrow, title, synthesis, nextAction, children }: SceneShellProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -24, scale: 0.985 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-[32px] border border-panel-border bg-panel p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl lg:p-8"
    >
      <motion.div variants={headerVariants} initial="hidden" animate="show">
        <motion.p variants={itemVariants} className="text-xs uppercase tracking-[0.35em] text-accent/80">
          {eyebrow}
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white lg:text-5xl"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-2xl text-lg leading-8 text-slate-200"
        >
          {synthesis}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.3 }}
        className="mt-8"
      >
        {children}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.26, duration: 0.3 }}
        className="mt-8 rounded-[28px] border border-cyan-300/20 bg-cyan-400/8 p-5"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">Next action</p>
        <p className="mt-3 text-xl font-medium leading-8 text-white">{nextAction}</p>
      </motion.div>
    </motion.section>
  );
}
