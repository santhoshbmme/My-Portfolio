import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import avatarImg from "../assets/avatar.jpg";
import { Hand, ArrowUpRight, MessageCircle } from "lucide-react";

/**
 * Portavia Framer-Inspired Hero Section.
 * Replaces the old split-screen layout with Portavia's clean, minimalist,
 * 3-column grid design: condensed giant split headlines ("WEB" / "DEVELOPER"),
 * central rounded portrait card, interactive blue greeting button, and sleek description.
 */
export const Hero: React.FC = () => {
  const [isWaving, setIsWaving] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#f3f3f3] text-[#121212] flex flex-col justify-between px-6 md:px-12 pt-28 pb-10 overflow-hidden select-none"
    >
      {/* ── MAIN 3-COLUMN GRID ───────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center my-auto">
        
        {/* Top Label (Left Aligned) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-4 md:mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-[#121212]/70 font-mono">
            {portfolioData.personalInfo.name}
          </span>
        </motion.div>

        {/* 3-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLUMN — GIANT "WEB" / "CREATIVE" HEADLINE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <h1 className="text-[18vw] sm:text-[14vw] lg:text-[9.5vw] font-black uppercase leading-[0.88] tracking-tighter text-[#121212]">
              WEB
            </h1>
            <span className="text-xs md:text-sm font-mono tracking-widest text-[#121212]/50 uppercase mt-2 font-semibold">
              // Creative Engineer
            </span>
          </motion.div>

          {/* CENTER COLUMN — VERTICAL PORTRAIT CARD WITH INTERACTIVE BLUE BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center relative my-6 lg:my-0"
          >
            {/* Portrait Image Frame */}
            <div className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[420px] rounded-[32px] overflow-hidden shadow-2xl bg-white border-4 border-white">
              <img
                src={avatarImg}
                alt={portfolioData.personalInfo.name}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Interactive Blue Circle Button */}
            <motion.a
              href={portfolioData.personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setIsWaving(true)}
              onMouseLeave={() => setIsWaving(false)}
              whileHover={{ scale: 1.12, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              className="absolute -bottom-5 left-4 sm:left-8 md:left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shadow-[0_12px_35px_rgba(79,70,229,0.45)] border-4 border-[#f3f3f3] z-20 cursor-pointer transition-colors hover:bg-[#4338CA]"
              title="Say Hi on WhatsApp!"
            >
              {isWaving ? (
                <span className="text-sm sm:text-base font-black font-mono uppercase tracking-wider">
                  Hi! 👋
                </span>
              ) : (
                <Hand className="w-7 h-7 sm:w-8 sm:h-8 animate-bounce" />
              )}
            </motion.a>
          </motion.div>

          {/* RIGHT COLUMN — GIANT "DEVELOPER" HEADLINE + DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-center lg:items-start text-left"
          >
            <h1 className="text-[14vw] sm:text-[12vw] lg:text-[7.5vw] font-black uppercase leading-[0.88] tracking-tighter text-[#121212] mb-4">
              DEVELOPER
            </h1>

            {/* Portavia Style Bio Description */}
            <p className="text-sm sm:text-base text-[#121212]/70 font-normal leading-relaxed max-w-sm mb-6">
              I’m a <span className="font-bold text-[#121212]">Coimbatore-based</span> digital web developer passionate about building visually striking, interactive, and high-converting web experiences.
            </p>

            {/* Quick Action Pills */}
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={portfolioData.personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121212] text-white text-xs font-bold tracking-widest uppercase hover:bg-black/80 transition-colors shadow-lg"
              >
                <span>Let's Talk</span>
                <MessageCircle size={14} />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#121212]/15 text-[#121212] text-xs font-bold tracking-widest uppercase hover:border-[#121212]/40 transition-colors shadow-sm"
              >
                <span>View Work</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

        </div>

      </div>

      {/* ── BOTTOM STATUS & METRICS FOOTER BAR ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="max-w-7xl mx-auto w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#121212]/10 z-10"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <p className="text-xs font-mono tracking-widest uppercase text-[#121212]/60 font-semibold">
            Available for freelance &amp; full-time · 2026
          </p>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-[#121212]/50 uppercase tracking-widest font-semibold">
            📍 Coimbatore, India
          </span>
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold tracking-widest uppercase text-[#121212]/60 hover:text-[#121212] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={portfolioData.personalInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold tracking-widest uppercase text-[#121212]/60 hover:text-[#121212] transition-colors"
          >
            Instagram ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
};
