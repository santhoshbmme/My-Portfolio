import React from "react";
import { motion } from "framer-motion";
import { SpotlightCard } from "../components/SpotlightCard";
import { portfolioData } from "../data/portfolioData";
import { Layout, Palette, Zap, Cpu, Sparkles, CheckCircle, ArrowUpRight } from "lucide-react";

/**
 * Digicraft Digital Agency Style Services Section.
 * Features a bento grid with mouse-following spotlight glow cards,
 * interactive tech metrics, color swatch palettes, Lighthouse performance scores,
 * and high-converting CTA indicators.
 */
export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 md:py-36 bg-[#08080c] relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "44px 44px",
      }}
    >
      {/* ── Ambient Background Glows ────────────────────────────────────────── */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[60vw] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[35vw] h-[35vw] bg-pink-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ── Section Header ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-center mb-16 md:mb-20"
        >
          {/* Eyebrow — "— SERVICES & EXPERTISE —" */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-white/30" />
            <span className="text-[10px] font-black tracking-[0.35em] uppercase text-white/50">
              Services &amp; Expertise
            </span>
            <span className="h-px w-10 bg-white/30" />
          </div>

          {/* Giant heading */}
          <h2
            className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-black uppercase leading-none tracking-tight"
            style={{
              background: "linear-gradient(180deg, #ffffff 40%, #777777 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Services
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-white/40">
            End-to-end development &amp; creative UI design solutions
          </p>
        </motion.div>

        {/* ── Digicraft Agency Bento Grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* CARD 1: Website Development (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 flex"
          >
            <SpotlightCard className="w-full flex flex-col justify-between" spotlightColor="rgba(168, 85, 247, 0.18)">
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Layout size={20} />
                    </div>
                    <span className="text-xs font-mono text-purple-400 font-bold tracking-widest">
                      // 01
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-mono text-green-400 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    LIGHTHOUSE 100
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-3">
                  {portfolioData.services[0].title}
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                  {portfolioData.services[0].description}
                </p>

                {/* Tech Metrics Visual Widget */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 font-mono text-xs text-white/70 space-y-2 mb-6">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-purple-300 font-bold">engine.build</span>
                    <span className="text-green-400">PASSED</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-green-400 w-full rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-white/40 pt-1">
                    <span>Vite 8 · React 19</span>
                    <span>Fast Load Times</span>
                  </div>
                </div>
              </div>

              {/* Tag list */}
              <div className="flex flex-wrap gap-2 pt-2">
                {portfolioData.services[0].details.map((detail, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 font-mono font-light"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* CARD 2: UI / UX Design (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 flex"
          >
            <SpotlightCard className="w-full flex flex-col justify-between" spotlightColor="rgba(249, 115, 22, 0.18)">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                      <Palette size={20} />
                    </div>
                    <span className="text-xs font-mono text-orange-400 font-bold tracking-widest">
                      // 02
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">
                    FIGMA PRO
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-3">
                  {portfolioData.services[1].title}
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                  {portfolioData.services[1].description}
                </p>

                {/* Color Swatch Palette Visual Widget */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-6">
                  <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-3">
                    Curated Color System
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-9 rounded-xl bg-black border border-white/20 flex items-center justify-center text-[9px] font-mono text-white/60">
                      #000
                    </div>
                    <div className="flex-1 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-[9px] font-mono text-white font-bold">
                      #A855F7
                    </div>
                    <div className="flex-1 h-9 rounded-xl bg-orange-500 flex items-center justify-center text-[9px] font-mono text-white font-bold">
                      #F97316
                    </div>
                    <div className="flex-1 h-9 rounded-xl bg-white flex items-center justify-center text-[9px] font-mono text-black font-bold">
                      #FFF
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag list */}
              <div className="flex flex-wrap gap-2 pt-2">
                {portfolioData.services[1].details.map((detail, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 font-mono font-light"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* CARD 3: Landing Pages (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 flex"
          >
            <SpotlightCard className="w-full flex flex-col justify-between" spotlightColor="rgba(34, 197, 94, 0.18)">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                    <Zap size={20} />
                  </div>
                  <span className="text-xs font-mono text-green-400 font-bold tracking-widest">
                    // 03
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider mb-3">
                  {portfolioData.services[2].title}
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                  {portfolioData.services[2].description}
                </p>

                {/* Conversion metric badge */}
                <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono font-bold text-green-300">
                    High Conversion
                  </span>
                  <ArrowUpRight size={16} className="text-green-400" />
                </div>
              </div>

              {/* Tag list */}
              <div className="flex flex-wrap gap-2 pt-2">
                {portfolioData.services[2].details.map((detail, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/80 font-mono font-light"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* CARD 4: Web Applications (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-4 flex"
          >
            <SpotlightCard className="w-full flex flex-col justify-between" spotlightColor="rgba(59, 130, 246, 0.18)">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Cpu size={20} />
                  </div>
                  <span className="text-xs font-mono text-blue-400 font-bold tracking-widest">
                    // 04
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider mb-3">
                  {portfolioData.services[3].title}
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                  {portfolioData.services[3].description}
                </p>

                {/* API Status Widget */}
                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between mb-6 font-mono text-[11px]">
                  <span className="text-blue-300 font-bold">API Integration</span>
                  <CheckCircle size={14} className="text-blue-400" />
                </div>
              </div>

              {/* Tag list */}
              <div className="flex flex-wrap gap-2 pt-2">
                {portfolioData.services[3].details.map((detail, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/80 font-mono font-light"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* CARD 5: Creative Web Experiences (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-4 flex"
          >
            <SpotlightCard className="w-full flex flex-col justify-between" spotlightColor="rgba(236, 72, 153, 0.18)">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                    <Sparkles size={20} />
                  </div>
                  <span className="text-xs font-mono text-pink-400 font-bold tracking-widest">
                    // 05
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider mb-3">
                  {portfolioData.services[4].title}
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                  {portfolioData.services[4].description}
                </p>

                {/* 60 FPS Framer Motion Badge */}
                <div className="p-3.5 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-between mb-6 font-mono text-[11px]">
                  <span className="text-pink-300 font-bold">Framer Motion</span>
                  <span className="text-pink-400 font-bold">60 FPS</span>
                </div>
              </div>

              {/* Tag list */}
              <div className="flex flex-wrap gap-2 pt-2">
                {portfolioData.services[4].details.map((detail, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/80 font-mono font-light"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
