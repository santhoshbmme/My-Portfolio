import React from "react";
import { motion } from "framer-motion";
import AccordionGallery from "../components/AccordionGallery";
import { portfolioData } from "../data/portfolioData";

/**
 * Projects section — Selected Work.
 * Replaces the old slider with a GSAP-powered AccordionGallery from React Bits.
 * Each panel maps to a real project entry from portfolioData.
 */
export const Projects: React.FC = () => {
  const galleryItems = portfolioData.projects.map((p) => ({
    image: p.image,
    label: p.title,
    link: p.link,
    alt: p.title,
  }));

  return (
    <section id="work" className="py-20 md:py-32 bg-[#0C0C0C] relative">
      {/* Decorative ambient glow */}
      <div className="absolute left-1/4 top-1/2 w-[35vw] h-[35vw] bg-fuchsia-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ── Section Header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-center mb-12 md:mb-16"
        >

          {/* Eyebrow — "— SELECTED WORKS —" */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-white/30" />
            <span className="text-[10px] font-black tracking-[0.35em] uppercase text-white/50">
              Selected Works
            </span>
            <span className="h-px w-10 bg-white/30" />
          </div>

          {/* Giant heading */}
          <h2
            className="text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] font-black uppercase leading-none tracking-tight"
            style={{
              background: "linear-gradient(180deg, #ffffff 30%, #888888 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Projects
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-white/40">
            From high-converting corporate &amp; e-commerce sites to
            <br className="hidden sm:block" /> immersive 3D web experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <AccordionGallery
            items={galleryItems}
            defaultIndex={2}
            expandRatio={0.52}
            height={520}
            gap={12}
            radius={20}
            trigger="hover"
            grayscale={true}
            showLabels={true}
            accentColor="#a855f7"
            overlayColor="#060010"
            textColor="#ffffff"
            duration={0.6}
            ease="power3.out"
            parallax={0.5}
            tilt={8}
          />
        </motion.div>
      </div>
    </section>
  );
};
