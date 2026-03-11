import { motion } from "framer-motion";

type MetricCardProps = {
  label: string;
  value: string;
  delta?: string;
  tone?: "default" | "positive" | "warning";
};

const toneClasses = {
  default: "border-white/10 bg-white/5 text-slate-200",
  positive: "border-emerald-300/20 bg-emerald-400/10 text-emerald-50",
  warning: "border-amber-300/20 bg-amber-400/10 text-amber-50",
};

export function MetricCard({ label, value, delta, tone = "default" }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`rounded-[28px] border p-5 ${toneClasses[tone]}`}
    >
      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{label}</p>
      <p className="mt-4 text-4xl font-semibold tracking-tight text-white">{value}</p>
      {delta ? <p className="mt-2 text-sm">{delta}</p> : null}
    </motion.div>
  );
}
