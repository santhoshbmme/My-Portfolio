import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { portfolioData } from "../data/portfolioData";

/**
 * Skills section detailing Santhosh M's technical expertise.
 * Groups tags into category blocks (Dev, Design, Tools) that react to mouse hover.
 */
export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-[#0C0C0C] relative">
      {/* Subtle decorative glowing spot */}
      <div className="absolute right-10 bottom-10 w-[20vw] h-[20vw] bg-purple-600/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-3xl">
          <SectionHeader 
            num="05" 
            title="Expertise & Technologies" 
            subtitle="My stack is chosen for flexibility, execution speed, and high-fidelity rendering. I continuously update my capabilities to align with modern best practices."
          />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {portfolioData.skills.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col h-full"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "rgba(168, 85, 247, 0.4)",
                      backgroundColor: "rgba(168, 85, 247, 0.05)"
                    }}
                    className="px-3.5 py-2 rounded-xl bg-white/3 border border-white/8 text-xs sm:text-sm text-white/80 font-light transition-all select-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
