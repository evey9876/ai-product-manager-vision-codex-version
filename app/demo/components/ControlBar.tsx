"use client";

type ControlBarProps = {
  currentIndex: number;
  total: number;
  canGoPrevious: boolean;
  canGoNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

export function ControlBar({
  currentIndex,
  total,
  canGoPrevious,
  canGoNext,
  onPrevious,
  onNext,
}: ControlBarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-[28px] border border-panel-border bg-panel px-5 py-4 backdrop-blur xl:flex-row xl:items-center xl:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Demo Controller</p>
        <p className="mt-2 text-sm text-slate-300">
          Scene {currentIndex + 1} of {total}. Autoplay is intentionally left as a later extension point.
        </p>
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
