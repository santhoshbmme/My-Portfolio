import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

/**
 * Process section presenting Santhosh M's workflow timeline.
 * Implements an interactive immersive layout where users click steps
 * to reveal dynamic generative SVG/canvas animations matching the process stage.
 */
export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Generative SVG visuals based on the process step
  const renderStepVisual = (stepIdx: number) => {
    switch (stepIdx) {
      case 0: // Discover: Radar/Scanning Grid
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Radar scanner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-56 h-56 rounded-full border border-purple-500/30 flex items-center justify-center"
              style={{
                background: "conic-gradient(from 0deg, rgba(168, 85, 247, 0.15) 0%, transparent 40%)"
              }}
            />
            {/* Concentric circles */}
            <div className="w-40 h-40 rounded-full border border-purple-500/20 absolute" />
            <div className="w-24 h-24 rounded-full border border-purple-500/10 absolute" />
            {/* Target dots */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"
            />
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50"
            />
          </div>
        );

      case 1: // Plan: Structural Node Architecture
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <svg className="w-64 h-64 text-purple-500/20" viewBox="0 0 200 200">
              {/* Structural lines */}
              <motion.line
                x1="40" y1="100" x2="100" y2="50"
                stroke="currentColor" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
              />
              <motion.line
                x1="40" y1="100" x2="100" y2="150"
                stroke="currentColor" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
              />
              <motion.line
                x1="100" y1="50" x2="160" y2="100"
                stroke="currentColor" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
              />
              <motion.line
                x1="100" y1="150" x2="160" y2="100"
                stroke="currentColor" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
              />
              {/* Central cross-connect */}
              <motion.line
                x1="100" y1="50" x2="100" y2="150"
                stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }}
              />

              {/* Node nodes */}
              <motion.circle cx="40" cy="100" r="5" fill="#a855f7" />
              <motion.circle cx="100" cy="50" r="5" fill="#f97316" />
              <motion.circle cx="100" cy="150" r="5" fill="#a855f7" />
              <motion.circle cx="160" cy="100" r="5" fill="#f97316" />
            </svg>
          </div>
        );

      case 2: // Design: Morphing UI Blob & Glassmorphic Preview
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Backdrop Morphing Blob */}
            <motion.div
              animate={{
                borderRadius: ["42% 58% 70% 30% / 45% 45% 55% 55%", "70% 30% 52% 48% / 60% 40% 60% 40%", "42% 58% 70% 30% / 45% 45% 55% 55%"]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-48 h-48 bg-gradient-to-tr from-purple-600/30 to-pink-500/20 absolute blur-md"
            />
            {/* Glass panel */}
            <motion.div
              whileHover={{ rotateY: 15, rotateX: -10 }}
              style={{ perspective: 1000 }}
              className="w-36 h-48 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 flex flex-col justify-between shadow-2xl relative z-10"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-2/3 bg-white/20 rounded" />
                <div className="h-2 w-full bg-white/10 rounded" />
                <div className="h-2 w-1/2 bg-white/10 rounded" />
              </div>
              <div className="h-8 w-full bg-purple-500/20 rounded border border-purple-500/30 flex items-center justify-center">
                <span className="text-[8px] uppercase tracking-widest text-purple-300 font-bold">Button</span>
              </div>
            </motion.div>
          </div>
        );

      case 3: // Build: Falling Code Blocks / Matrix-ish
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-8 font-mono text-[10px] text-purple-400/40 select-none overflow-hidden">
            <div className="w-64 space-y-1.5">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white/80"
              >
                const process = async () =&gt; &#123;
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="pl-4"
              >
                await initializeDesignSystem();
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pl-4 text-orange-400/80"
              >
                const components = buildReactComponents();
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="pl-4 text-purple-300/80"
              >
                return animateWithFramerMotion(components);
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-white/80"
              >
                &#125;;
              </motion.div>
            </div>
            {/* Simulated compiler line */}
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"
            />
          </div>
        );

      case 4: // Refine: Sine wave / pulse analyzer
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <svg className="w-64 h-32 text-orange-500" viewBox="0 0 200 100">
              <motion.path
                d="M 10 50 Q 50 10 90 50 T 170 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: 1,
                  d: [
                    "M 10 50 Q 50 10 90 50 T 170 50",
                    "M 10 50 Q 50 80 90 50 T 170 50",
                    "M 10 50 Q 50 10 90 50 T 170 50"
                  ]
                }}
                transition={{
                  pathLength: { duration: 1.5, ease: "easeOut" },
                  d: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              {/* Clean flat grid line */}
              <line x1="10" y1="50" x2="190" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            </svg>
            <div className="absolute bottom-4 flex gap-4 text-[9px] font-mono tracking-widest text-white/40">
              <span>SEO: 100%</span>
              <span>PERF: 98+</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="process" className="py-20 md:py-32 bg-[#0C0C0C] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute right-0 bottom-0 w-[45vw] h-[45vw] bg-purple-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="relative text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-white/30" />
            <span className="text-[10px] font-black tracking-[0.35em] uppercase text-white/50">
              Workflow
            </span>
            <span className="h-px w-10 bg-white/30" />
          </div>

          <h2
            className="text-[10vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[5.5vw] font-black uppercase leading-none tracking-tight"
            style={{
              background: "linear-gradient(180deg, #ffffff 40%, #777777 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Development Process
          </h2>

          <p className="mt-4 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-white/40">
            A structured interactive approach translating vision into clean performance
          </p>
        </div>

        {/* Immersive Dynamic Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch min-h-[480px]">
          
          {/* Left Column: Interactive Steps List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {portfolioData.process.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className="w-full text-left p-5 rounded-2xl border transition-all duration-300 focus:outline-none flex items-center gap-6 cursor-pointer group"
                  style={{
                    backgroundColor: isActive ? "rgba(255, 255, 255, 0.03)" : "transparent",
                    borderColor: isActive ? "rgba(168, 85, 247, 0.25)" : "rgba(255, 255, 255, 0.03)"
                  }}
                >
                  {/* Step number marker */}
                  <span
                    className={`font-mono text-xl md:text-2xl font-black transition-colors ${
                      isActive ? "text-purple-400" : "text-white/20 group-hover:text-white/45"
                    }`}
                  >
                    {step.num}
                  </span>

                  {/* Step Title info */}
                  <div>
                    <h3
                      className={`text-sm md:text-base font-bold uppercase tracking-wider transition-colors ${
                        isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-[10px] font-mono tracking-widest uppercase mt-0.5 transition-colors ${
                        isActive ? "text-purple-300" : "text-white/30 group-hover:text-white/50"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Immersive Visualization Display Panel (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full bg-white/[0.015] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden backdrop-blur-sm">
              
              {/* Corner decor coordinates */}
              <div className="absolute top-4 left-6 text-[8px] font-mono text-white/20 tracking-widest">
                SYS.PROC // NODE_{activeStep + 1}
              </div>

              {/* Dynamic animation slot (Left half of display panel) */}
              <div className="w-full md:w-1/2 aspect-square flex items-center justify-center border border-white/5 bg-white/[0.005] rounded-2xl overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    {renderStepVisual(activeStep)}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dynamic text slot (Right half of display panel) */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <span className="text-[10px] font-black font-mono tracking-[0.25em] uppercase text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded">
                      Deliverable
                    </span>
                    <h4 className="text-xl font-black uppercase text-white tracking-wider">
                      {portfolioData.process[activeStep].description}
                    </h4>
                    <p className="text-sm text-white/55 font-light leading-relaxed">
                      {portfolioData.process[activeStep].details}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
