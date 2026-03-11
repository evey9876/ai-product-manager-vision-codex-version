"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ControlBar } from "@/app/demo/components/ControlBar";
import { demoScenes } from "@/app/demo/data/scenes";
import { ArtefactScene } from "@/app/demo/scenes/ArtefactScene";
import { HypothesisScene } from "@/app/demo/scenes/HypothesisScene";
import { ImpactScene } from "@/app/demo/scenes/ImpactScene";
import { MorningBriefScene } from "@/app/demo/scenes/MorningBriefScene";
import { SignalScene } from "@/app/demo/scenes/SignalScene";
import { SimulationScene } from "@/app/demo/scenes/SimulationScene";
import { StartScene } from "@/app/demo/scenes/StartScene";

const sceneComponents = [
  StartScene,
  MorningBriefScene,
  SignalScene,
  HypothesisScene,
  SimulationScene,
  ArtefactScene,
  ImpactScene,
];

export default function DemoController() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const SceneComponent = sceneComponents[sceneIndex];
  const scene = demoScenes[sceneIndex];

  const nextScene = () => {
    setSceneIndex((current) => Math.min(current + 1, sceneComponents.length - 1));
  };

  const previousScene = () => {
    setSceneIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <main className="min-h-screen px-5 py-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6">
        <header className="rounded-[32px] border border-panel-border bg-[linear-gradient(135deg,_rgba(140,240,255,0.16),_rgba(9,17,31,0.72))] p-6 backdrop-blur-xl lg:p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-300">AI Product Manager Vision</p>
          <div className="mt-5 grid gap-6 xl:grid-cols-[1.3fr_0.8fr]">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-white lg:text-6xl">
                A cinematic demo of AI-native product decision making.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
                Start with documentation metrics. End with stronger outcomes and a faster decision cycle.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-slate-950/45 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{scene.eyebrow}</p>
              <p className="mt-3 text-2xl font-medium text-white">{scene.label}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{scene.insight}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-cyan-200/80">Action</p>
              <p className="mt-2 text-sm leading-6 text-white">{scene.action}</p>
            </div>
          </div>
        </header>

        <ControlBar
          currentIndex={sceneIndex}
          total={sceneComponents.length}
          canGoPrevious={sceneIndex > 0}
          canGoNext={sceneIndex < sceneComponents.length - 1}
          currentLabel={scene.label}
          onPrevious={previousScene}
          onNext={nextScene}
        />

        <AnimatePresence mode="wait">
          <SceneComponent key={scene.id} />
        </AnimatePresence>
      </div>
    </main>
  );
}
