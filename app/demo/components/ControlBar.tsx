"use client";

import { motion } from "framer-motion";

type ControlBarProps = {
  currentIndex: number;
  total: number;
  canGoPrevious: boolean;
  canGoNext: boolean;
  currentLabel: string;
  currentTime: string;
  timeline: Array<{ time: string; label: string }>;
  onPrevious: () => void;
  onNext: () => void;
};

export function ControlBar({
  currentIndex,
  total,
  canGoPrevious,
  canGoNext,
  currentLabel,
  currentTime,
  timeline,
  onPrevious,
  onNext,
}: ControlBarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-[28px] border border-panel-border bg-panel px-5 py-4 backdrop-blur xl:flex-row xl:items-center xl:justify-between">
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Workday Timeline</p>
        <p className="mt-2 text-sm text-slate-300">
          {currentTime} {currentLabel}
        </p>
        <div className="mt-4 flex gap-2">
          {timeline.map(({ time, label }, index) => (
            <div key={time} className="group relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
              <motion.div
                className="h-full rounded-full bg-accent"
                animate={{
                  width:
                    index < currentIndex ? "100%" : index === currentIndex ? "65%" : "0%",
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
              <div className="pointer-events-none absolute left-0 top-3 hidden whitespace-nowrap rounded-full border border-white/10 bg-slate-950/90 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300 group-hover:block">
                {time} {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 disabled:cursor-not-allowed disabled:opacity-40 hover:border-white/20 hover:bg-white/5"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canGoNext}
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-slate-950 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-accent-strong"
        >
          {currentIndex === 0 ? "Start the morning" : currentIndex === total - 1 ? "Complete the day" : "Next moment"}
        </button>
      </div>
    </div>
  );
}
