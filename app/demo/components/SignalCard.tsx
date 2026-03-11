import { motion } from "framer-motion";

type SignalCardProps = {
  title: string;
  detail: string;
  emphasis?: string;
};

export function SignalCard({ title, detail, emphasis }: SignalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
      className="rounded-[24px] border border-white/10 bg-slate-950/45 p-5"
    >
      <p className="text-sm font-medium text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
      {emphasis ? <p className="mt-3 text-xs uppercase tracking-[0.25em] text-cyan-200/80">{emphasis}</p> : null}
    </motion.div>
  );
}
