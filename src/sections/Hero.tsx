import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { ArrowUpRight, Sparkles, MapPin } from "lucide-react";
import avatarImg from "../assets/avatar.png";

/**
 * Portavia Framer-inspired Editorial Hero Section.
 * Replaces the split screen with Portavia's iconic 3-column layout:
 * - Left Headline: "DIGITAL" with developer label
 * - Center Portrait: Vertical rounded card with interactive royal blue hover circle ("👋" -> "Hi!")
 * - Right Headline: "DEVELOPER" with bio description & direct CTAs
 */
export const Hero: React.FC = () => {
  const [isCircleHovered, setIsCircleHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full transition-colors duration-500 flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      {/* ── TOP META BAR (Subtle Status & Label) ────────────────────────── */}
      <div className="w-full flex items-center justify-between z-10 mb-6 lg:mb-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="portavia-subtitle text-xs font-bold uppercase tracking-[0.25em]">
            {portfolioData.personalInfo.name}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="portavia-pill px-4 py-1.5 rounded-full text-xs font-mono font-medium flex items-center gap-2 border shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Available for work · 2026</span>
        </motion.div>
      </div>

      {/* ── MAIN 3-COLUMN EDITORIAL HERO GRID ───────────────────────────── */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 my-auto py-4">
        
        {/* LEFT COLUMN: Eyebrow + "DIGITAL" */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col justify-center text-left"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles size={14} className="text-indigo-500" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-indigo-500">
              Creative Portfolio
            </span>
          </div>

          <h1 className="portavia-title text-[15vw] sm:text-[12vw] lg:text-[7vw] font-black uppercase tracking-tighter leading-[0.88] select-none">
            DIGITAL
          </h1>

          <p className="portavia-subtitle text-xs sm:text-sm font-medium mt-4 max-w-xs leading-relaxed hidden sm:block">
            Crafting high-end, responsive, and visually memorable digital interfaces.
          </p>
        </motion.div>

        {/* CENTER COLUMN: Vertical Portrait Card with Interactive Blue Accent Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex items-center justify-center relative my-4 lg:my-0"
        >
          <div className="relative group w-[270px] sm:w-[310px] lg:w-[340px] h-[370px] sm:h-[430px] lg:h-[470px]">
            {/* Main Rounded Portrait Frame */}
            <div className="w-full h-full rounded-[36px] overflow-hidden portavia-card-bg border shadow-2xl relative transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={avatarImg}
                alt="Santhosh M"
                className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Bottom Gradient Protection */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 right-6 text-white text-right">
                <p className="text-xs font-mono uppercase tracking-widest text-white/70">Coimbatore</p>
                <p className="text-sm font-extrabold uppercase tracking-tight">Santhosh M.</p>
              </div>
            </div>

            {/* Floating Royal Blue Accent Circle (Portavia Signature Element) */}
            <a
              href={portfolioData.personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setIsCircleHovered(true)}
              onMouseLeave={() => setIsCircleHovered(false)}
              className="absolute -bottom-4 -left-4 w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-2xl cursor-pointer z-30 transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white/20"
              aria-label="Connect on WhatsApp"
            >
              <motion.div
                key={isCircleHovered ? "hi" : "wave"}
                initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center justify-center font-black text-xl sm:text-2xl"
              >
                {isCircleHovered ? (
                  <span className="text-base sm:text-lg font-black tracking-tight uppercase">Hi! 👋</span>
                ) : (
                  <span>👋</span>
                )}
              </motion.div>
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: "DEVELOPER" + Bio Description & CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col justify-center text-left lg:text-left"
        >
          <h1 className="portavia-title text-[15vw] sm:text-[12vw] lg:text-[7vw] font-black uppercase tracking-tighter leading-[0.88] select-none">
            DEVELOPER
          </h1>

          <p className="portavia-subtitle text-sm sm:text-base font-normal mt-5 max-w-md leading-relaxed">
            I’m <strong className="font-extrabold portavia-title">Santhosh M</strong>, a web developer passionate about building visually striking, interactive, and modern digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={portfolioData.personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black uppercase tracking-[0.2em] shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#work"
              className="portavia-pill px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider border hover:border-indigo-500/50 transition-colors"
            >
              View Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── BOTTOM BAR (Location & Social Links) ────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/10 dark:border-white/10 z-10"
      >
        <div className="flex items-center gap-2 portavia-subtitle text-xs font-mono">
          <MapPin size={14} className="text-indigo-500" />
          <span>Coimbatore, India</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="portavia-subtitle text-xs font-mono font-bold uppercase tracking-widest hover:text-indigo-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.personalInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="portavia-subtitle text-xs font-mono font-bold uppercase tracking-widest hover:text-indigo-500 transition-colors"
          >
            Instagram
          </a>
        </div>
      </motion.div>
    </section>
  );
};
