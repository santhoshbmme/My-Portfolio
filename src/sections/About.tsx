import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

/**
 * About section styled to match the WebCraft reference layout.
 * Features a massive "ABOUT US" heading, centered bio text, 3D corner icons,
 * and a contact CTA — all on a clean white background.
 */
export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen transition-colors duration-500 overflow-hidden flex flex-col items-center justify-center py-16 md:py-24"
    >
      {/* ------------------------------------------------------------------ */}
      {/* BACKGROUND GRID (faint)                                             */}
      {/* ------------------------------------------------------------------ */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* MAIN CONTENT                                                         */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* GIANT HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="about-heading text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] font-black uppercase leading-none tracking-tight mb-10 md:mb-14 select-none"
        >
          ABOUT US
        </motion.h2>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="about-tagline text-xs font-black tracking-[0.3em] uppercase mb-6"
        >
          More Than Just Code.
        </motion.p>

        {/* BIO PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="about-bio text-base md:text-lg font-normal leading-relaxed max-w-2xl"
        >
          I’m <span className="font-bold about-highlight">Santhosh M</span>, a web
          developer passionate about building visually striking, interactive, and
          modern digital experiences. From creative landing pages to custom
          websites and web applications, I turn ideas into fast, responsive, and
          engaging experiences. I combine thoughtful design, smooth animations,
          and functionality to create websites that stand out and connect with
          users.{" "}
          <span className="block font-bold about-highlight mt-4">
            Let’s turn your idea into an experience worth remembering!!
          </span>
        </motion.p>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-12"
        >
          <a
            href={portfolioData.personalInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="about-cta-btn inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-black tracking-[0.25em] uppercase transition-all duration-300 focus:outline-none shadow-xl cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};
