import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  num: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

/**
 * A uniform typographic header component for page sections.
 * Combines an index marker, a main heading, and an optional subtitle description.
 *
 * @param props - SectionHeaderProps containing index, title, description, and alignment rules.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  num,
  title,
  subtitle,
  align = "left"
}) => {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-18 flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >

      
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.1]">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-white/70 max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
