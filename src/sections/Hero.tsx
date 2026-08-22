import React from "react";
import { motion } from "framer-motion";
import avatarImg from "../assets/avatar.png";
import { ArrowUpRight } from "lucide-react";

/**
 * Portavia-inspired Luxury Editorial Hero Section.
 * Features a minimalist warm ivory canvas (#F7F6F2), bold typography,
 * monochrome tech stack indicators, cutout blazer portrait with warm beige
 * geometric blocks and handwritten script accents, and a bottom stats bar.
 */
export const Hero: React.FC = () => {
  const techStack = [
    {
      name: "HTML5",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-12.903-.002.69 8.057h8.766l-.37 4.233-3.23.874-3.256-.874-.207-2.392H5.64l.394 4.542 5.938 1.624 5.922-1.624.793-9.098H8.531z" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-12.903-.002.69 8.057h8.766l-.37 4.233-3.23.874-3.256-.874-.207-2.392H5.64l.394 4.542 5.938 1.624 5.922-1.624.793-9.098H8.531z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.465.735-.63 1.29-.525.54.12.96.48 1.275.945.315.465.735.615 1.155.33.405-.285.57-.735.255-1.275-.54-.885-1.395-1.41-2.46-1.56-1.125-.15-2.22.255-2.775 1.05-.51.72-.45 1.74.045 2.43.645.915 1.77 1.275 2.76 1.695.84.345 1.5.705 1.56 1.35.075.765-.54 1.245-1.515 1.245-1.02 0-1.65-.585-2.1-1.395-.27-.495-.735-.6-1.17-.345-.39.24-.51.72-.255 1.245.72 1.365 1.95 2.07 3.51 2.07 1.83 0 3.06-1.035 3.255-2.61.015-.09.015-.195 0-.285zm-8.85-4.47h-1.92v6.195c0 1.545-.795 2.265-2.16 2.265-.63 0-1.29-.195-1.695-.51-.315-.255-.48-.615-.315-1.005.18-.39.585-.495.96-.285.255.135.54.24.84.24.51 0 .765-.3.765-.96v-5.94H7.744v-1.635h5.44v1.635z" />
        </svg>
      ),
    },
    {
      name: "React",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10zm0-7c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 6c-3.86 0-7-1.19-7-2s3.14-2 7-2 7 1.19 7 2-3.14 2-7 2zm-8.66 9c-2.48 4.31.25 8.35 4.56 8.35 4.31 0 7.04-4.04 4.56-8.35-2.48-4.31-6.64-4.31-9.12 0zm1.73 1c1.93-3.34 5.07-3.34 7 0-1.93 3.34-5.07 3.34-7 0zm15.46-1c-2.48-4.31-6.64-4.31-9.12 0-2.48 4.31.25 8.35 4.56 8.35 4.31 0 7.04-4.04 4.56-8.35zm-1.73 1c-1.93 3.34-5.07 3.34-7 0 1.93-3.34 5.07-3.34 7 0z" />
        </svg>
      ),
    },
    {
      name: "WordPress",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 6.63 0 12-5.37 12-12C24 5.37 18.63 0 12 0zm-.66 21.78c-4.14 0-7.66-2.8-8.7-6.68L7.86 3.65c.34-.02.76-.04 1.1-.04.48 0 .84.08 1.34.08h.04v.68h-.76c-.46 0-.82.38-.82.84v6.86c0 .46.36.84.82.84h.76v.68h-3.38v-.68h.76c.46 0 .82-.38.82-.84V7.21l-3.3 9.49-1.1-3.17c.56-2.92 3.12-5.11 6.18-5.11 1.76 0 3.36.72 4.5 1.88l-2.02 5.82-1.98-4.34c-.16-.36-.5-.58-.9-.58h-.02c-.44 0-.82.26-.98.66l-2.04 5.12-2.14-5.78z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "5+", label: "Happy Clients" },
    { value: "2+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#F7F6F2] text-[#111111] overflow-hidden pt-28 md:pt-36 pb-16 flex flex-col justify-between"
    >
      {/* ── Main 2-Column Hero Content ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-1 my-auto">
        
        {/* LEFT COLUMN — Editorial Bio & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          {/* Eyebrow */}
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#666666] mb-3">
            HELLO, I’M
          </p>

          {/* Main Heading — Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight leading-[0.95] text-[#111111] mb-3">
            Santhosh M.
          </h1>

          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight mb-5">
            Web Developer &amp; Designer
          </h2>

          {/* Paragraph */}
          <p className="text-sm md:text-base text-[#666666] font-normal leading-relaxed max-w-[460px] mb-8">
            I design &amp; develop modern websites that are fast, responsive and built to perform.
          </p>

          {/* Primary CTA Button */}
          <div className="mb-10">
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#111111] text-white text-xs font-bold tracking-widest uppercase shadow-lg shadow-black/10 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none"
            >
              <span>View My Work</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Tech Stack Bar */}
          <div className="pt-4 border-t border-[#111111]/10 max-w-[460px]">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#666666] mb-3">
              TECH I WORK WITH
            </p>
            <div className="flex items-center gap-6 text-[#111111]/80">
              {techStack.map((tech) => (
                <div key={tech.name} className="hover:text-[#111111] hover:scale-110 transition-all duration-200" title={tech.name}>
                  {tech.svg}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — Blazer Cutout Portrait & Geometric Accents */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] md:min-h-[520px]"
        >
          {/* Decorative Warm Beige Block behind Portrait */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[82%] bg-[#E8DED0] rounded-3xl -rotate-2 z-0" />

          {/* Subtle Dotted Grid Pattern in Top-Right Corner */}
          <div
            className="absolute top-4 right-8 w-24 h-24 z-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#111111 1.5px, transparent 1.5px)",
              backgroundSize: "12px 12px",
            }}
          />

          {/* Subtle Radial Warm Glow */}
          <div className="absolute inset-0 bg-amber-200/20 rounded-full blur-[100px] pointer-events-none z-0" />

          {/* Main Portrait Cutout */}
          <div className="relative z-10 w-full flex justify-center">
            <img
              src={avatarImg}
              alt="Santhosh M. — Web Developer & Designer"
              className="h-[480px] sm:h-[560px] md:h-[620px] lg:h-[680px] w-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] select-none"
            />
          </div>

          {/* Handwritten Script Accent (Top-Right of Portrait) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute top-8 right-0 md:-right-4 z-20 pointer-events-none bg-[#F7F6F2]/90 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-[#111111]/10 shadow-sm"
          >
            <p className="font-brush text-sm md:text-base text-[#111111] leading-tight">
              Let’s build<br />something great.
            </p>
            <div className="h-[2px] w-12 bg-[#C9A982] rounded-full mt-1" />
          </motion.div>

        </motion.div>

      </div>

      {/* ── Bottom Horizontal Stats Bar ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-12 z-20"
      >
        <div className="bg-white rounded-2xl md:rounded-3xl border border-[#111111]/10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#111111]/10">
          {stats.map((stat, i) => (
            <div key={i} className={`${i > 0 ? "pt-4 md:pt-0" : ""}`}>
              <p className="text-3xl md:text-4xl font-black text-[#111111] tracking-tight mb-1">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm font-medium text-[#666666] tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};
