"use client";

import { motion } from "framer-motion";

type ControlBarProps = {
  currentIndex: number;
  total: number;
  canGoPrevious: boolean;
  canGoNext: boolean;
  currentLabel: string;
  onPrevious: () => void;
  onNext: () => void;
};

export function ControlBar({
  currentIndex,
  total,
  canGoPrevious,
  canGoNext,
  currentLabel,
  onPrevious,
  onNext,
}: ControlBarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-[28px] border border-panel-border bg-panel px-5 py-4 backdrop-blur xl:flex-row xl:items-center xl:justify-between">
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Demo Controller</p>
        <p className="mt-2 text-sm text-slate-300">
          Scene {currentIndex + 1} of {total}: {currentLabel}
        </p>
        <div className="mt-4 flex gap-2">
          {Array.from({ length: total }).map((_, index) => (
            <div key={index} className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
              <motion.div
                className="h-full rounded-full bg-accent"
                animate={{
                  width:
                    index < currentIndex ? "100%" : index === currentIndex ? "65%" : "0%",
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
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
          Next
        </button>
      </div>
    </div>
  );
}
