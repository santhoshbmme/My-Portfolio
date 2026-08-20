import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

/**
 * Contact / CTA section — redesigned to match the "LET'S BUILD SOMETHING EXTRAORDINARY" reference.
 * Dark grid background, massive left-aligned headline, and a gradient WhatsApp pill button on the right.
 */
export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0d0d12]"
      style={{ borderTop: "1.5px solid #3a0a0a" }}
    >
      {/* ── Subtle grid overlay ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient purple glow (centre-right) ──────────────────────── */}
      <div className="absolute right-0 top-0 w-[50vw] h-full bg-purple-700/10 blur-[120px] pointer-events-none" />

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10">

        {/* LEFT — headline block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* Availability badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[11px] font-black tracking-[0.28em] uppercase text-green-400">
              Available for new projects
            </span>
          </div>

          {/* Main headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-[1.0] tracking-tight mb-5">
            Let's build<br />
            something<br />
            extraordinary.
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-white/45 font-light leading-relaxed max-w-md">
            Have an ambitious project in mind? From custom corporate websites to
            immersive 3D experiences, let's create a digital masterpiece for your brand.
          </p>
        </motion.div>

        {/* RIGHT — WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0"
        >
          <a
            href={portfolioData.personalInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full font-black text-[13px] tracking-[0.18em] uppercase text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40 focus:outline-none"
            style={{
              background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
            }}
          >
            {/* WhatsApp icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.824L.057 23.428a.5.5 0 0 0 .612.612l5.604-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.013-1.374l-.36-.214-3.724.976.993-3.614-.235-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>

            Start a project on WhatsApp

            {/* Cursor emoji */}
            <span className="text-base group-hover:translate-x-1 transition-transform">🖱</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
