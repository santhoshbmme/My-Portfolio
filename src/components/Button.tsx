import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gradient";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

/**
 * A premium, interactive button component built with Framer Motion.
 * Supports anchor link navigation and standard button actions with tactile hover and click effects.
 *
 * @param props - ButtonProps containing render settings, styling variants, click handlers, and accessibility details.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "secondary",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold text-sm tracking-wider uppercase rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 overflow-hidden";
  
  const variantStyles = {
    primary: "px-6 py-3 md:px-8 md:py-4 bg-white text-black hover:bg-white/90 border border-white/20",
    secondary: "px-6 py-3 md:px-8 md:py-4 bg-[#0C0C0C] text-white border border-white/10 hover:border-white/30 hover:bg-[#121212]",
    outline: "px-6 py-3 md:px-8 md:py-4 bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/5",
    gradient: "px-7 py-3.5 md:px-9 md:py-4.5 bg-gradient-cta text-white shadow-glow hover:shadow-glow-hover border border-white/10"
  };

  const interactiveProps = {
    whileHover: { scale: 1.02, transition: { duration: 0.2, ease: "easeOut" as any } },
    whileTap: { scale: 0.98, transition: { duration: 0.1, ease: "easeIn" as any } }
  };

  const fullStyles = `${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`;

  if (href) {
    // If it's an anchor, render as a motion link
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={fullStyles}
        {...interactiveProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={fullStyles}
      {...interactiveProps}
    >
      {children}
    </motion.button>
  );
};
