import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { DeveloperTerminal } from "../components/DeveloperTerminal";
import { portfolioData } from "../data/portfolioData";

/**
 * Split-screen Immersive Hero Section (Half White / Half Black).
 * Features mouse parallax floating glassmorphic cards customized per side,
 * a giant background watermark, and vector grid details (photo cutout removed).
 */
export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [rawCoords, setRawCoords] = useState({ x: 0, y: 0 });

  const springCfg = { damping: 28, stiffness: 90, mass: 0.7 };
  const smoothX = useSpring(0, springCfg);
  const smoothY = useSpring(0, springCfg);

  useEffect(() => { smoothX.set(rawCoords.x); }, [rawCoords.x, smoothX]);
  useEffect(() => { smoothY.set(rawCoords.y); }, [rawCoords.y, smoothY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    setRawCoords({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
  };

  // Parallax layers (slow → fast)
  const s1x = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const s1y = useTransform(smoothY, [-0.5, 0.5], [-8,  8]);
  const s2x = useTransform(smoothX, [-0.5, 0.5], [-26, 26]);
  const s2y = useTransform(smoothY, [-0.5, 0.5], [-16, 16]);
  const s3x = useTransform(smoothX, [-0.5, 0.5], [-44, 44]);
  const s3y = useTransform(smoothY, [-0.5, 0.5], [-28, 28]);

  // Title ghost text shift
  const titleX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const titleY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  // ---------- Floating card definitions ----------
  interface CardDef {
    id: string;
    side: "left" | "right";
    sx: typeof s1x; sy: typeof s1y;
    pos: string;
    bob: number;
    delay: number;
    content: React.ReactNode;
  }

  const cards: CardDef[] = [
    {
      id: "exp",
      side: "left",
      sx: s1x, sy: s1y,
      pos: "top-[16%] left-[8%]",
      bob: 3.8, delay: 0,
      content: (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shrink-0">
            <span className="text-white text-base">🚀</span>
          </div>
          <div>
            <p className="text-[10px] text-black/40 font-bold tracking-widest uppercase">Performance</p>
            <p className="text-sm font-black text-black leading-tight">Fast Delivery</p>
            <p className="text-[9px] text-black/50 font-medium">High-Perf &amp; Responsive</p>
          </div>
        </div>
      ),
    },
    {
      id: "avail",
      side: "right",
      sx: s3x, sy: s3y,
      pos: "top-[14%] right-[10%]",
      bob: 4.5, delay: 0.3,
      content: (
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
          <div>
            <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase">Status</p>
            <p className="text-sm font-black text-white">Available for hire</p>
          </div>
        </div>
      ),
    },
    {
      id: "projects",
      side: "left",
      sx: s2x, sy: s2y,
      pos: "top-[42%] left-[12%]",
      bob: 5.2, delay: 0.7,
      content: (
        <div>
          <p className="text-[10px] text-black/40 font-bold tracking-widest uppercase mb-1">Projects</p>
          <div className="flex items-end gap-1.5">
            <span className="text-4xl font-black text-black">5+</span>
            <span className="text-[11px] text-black/50 font-semibold pb-1.5">delivered</span>
          </div>
        </div>
      ),
    },
    {
      id: "stack",
      side: "left",
      sx: s1x, sy: s1y,
      pos: "bottom-[22%] left-[10%]",
      bob: 4.2, delay: 1.1,
      content: (
        <div>
          <p className="text-[10px] text-black/40 font-bold tracking-widest uppercase mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {["React", "TS", "Vite", "GSAP", "Tailwind"].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-black/5 rounded-md text-[10px] font-bold text-black/75 border border-black/8">
                {t}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "design",
      side: "right",
      sx: s3x, sy: s3y,
      pos: "bottom-[22%] right-[10%]",
      bob: 4.8, delay: 0.5,
      content: (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
            <span className="text-white text-base">✦</span>
          </div>
          <div>
            <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase">Specialty</p>
            <p className="text-sm font-black text-white">UI / UX Design</p>
          </div>
        </div>
      ),
    },
    {
      id: "location",
      side: "right",
      sx: s2x, sy: s2y,
      pos: "top-[40%] right-[12%]",
      bob: 3.5, delay: 1.4,
      content: (
        <div className="flex items-center gap-2.5">
          <span className="text-xl">📍</span>
          <div>
            <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase">Based in</p>
            <p className="text-sm font-black text-white">Coimbatore, India</p>
          </div>
        </div>
      ),
    },
    {
      id: "rating",
      side: "right",
      sx: s1x, sy: s1y,
      pos: "bottom-[12%] right-[30%]",
      bob: 5.0, delay: 0.9,
      content: (
        <div>
          <div className="flex gap-0.5 mb-1">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-amber-400 text-sm">★</span>
            ))}
          </div>
          <p className="text-[11px] font-black text-white">Client Satisfaction</p>
          <p className="text-[10px] text-white/40">100% positive reviews</p>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRawCoords({ x: 0, y: 0 })}
      className="relative min-h-screen w-full overflow-hidden select-none flex flex-col lg:flex-row"
    >
      {/* ── HALF WHITE / HALF BLACK BACKGROUND ─────────────────────────────────── */}
      {/* LEFT HALF — WHITE */}
      <div 
        className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-white relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px"
        }}
      >
        {/* Soft pink ambient glow on left */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-pink-200/30 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* RIGHT HALF — BLACK */}
      <div 
        className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-[#0C0C0C] relative overflow-hidden border-t lg:border-t-0 border-white/10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px"
        }}
      >
        {/* Soft purple ambient glow on right */}
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* ── GHOST WATERMARK TITLE (Centred across split) ────────────────────── */}
      <motion.div
        style={{ x: titleX, y: titleY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
      >
        <h1
          className="text-[19vw] font-black uppercase leading-none tracking-tighter whitespace-nowrap opacity-20"
          style={{
            background: "linear-gradient(90deg, #000000 0%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          SANTHOSH
        </h1>
      </motion.div>

      {/* ── CENTERED INTERACTIVE DEVELOPER TERMINAL ───────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 px-4">
        <motion.div
          style={{ x: s1x, y: s1y }}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full pointer-events-auto"
        >
          <DeveloperTerminal />
        </motion.div>
      </div>

      {/* ── FLOATING PARALLAX CARDS ────────────────────────────────────────── */}
      {cards.map((card, i) => (
        <motion.div
          key={card.id}
          style={{ x: card.sx, y: card.sy }}
          className={`absolute ${card.pos} z-20`}
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: card.bob, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
            className={`rounded-2xl px-4 py-3.5 min-w-[144px] backdrop-blur-md border ${
              card.side === "left"
                ? "bg-white/85 border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] text-black"
                : "bg-[#161618]/85 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] text-white"
            }`}
          >
            {card.content}
          </motion.div>
        </motion.div>
      ))}

      {/* ── BOTTOM TAGLINE BAR (Split color) ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-4 flex items-center justify-between z-30 border-t border-black/10 lg:border-t-0"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-black/50 lg:text-black/60">
            Open to work · 2026
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-[10px] font-black tracking-widest uppercase text-white/50 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href={portfolioData.personalInfo.instagram} target="_blank" rel="noreferrer" className="text-[10px] font-black tracking-widest uppercase text-white/50 hover:text-white transition-colors">
            Instagram
          </a>
        </div>
      </motion.div>
    </section>
  );
};
