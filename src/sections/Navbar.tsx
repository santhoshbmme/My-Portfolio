import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

interface NavLink {
  label: string;
  href: string;
}

/**
 * Editorial Navbar component matching high-end personal brand aesthetic.
 * Features top-left "Santhosh M.", centered navigation with active indicator,
 * and top-right "Let's Talk ↗" rounded button + theme toggle.
 */
export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOnHome, setIsOnHome] = useState(true);

  // Theme Mode State ("dark" | "light")
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "dark" | "light") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navLinks: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("home");
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      setIsScrolled(window.scrollY > 20);
      setIsOnHome(window.scrollY < heroHeight - 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: isOnHome ? 0 : -80,
          opacity: isOnHome ? 1 : 0,
          pointerEvents: isOnHome ? "auto" : "none"
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-[#F7F6F2]/90 backdrop-blur-md border-b border-[#111111]/10 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Top Left — Brand */}
          <a
            href="#home"
            className="text-lg md:text-xl font-black tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
          >
            Santhosh M.
          </a>

          {/* Top Center — Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => {
              const isHome = idx === 0;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-xs font-semibold tracking-wider text-[#111111]/70 hover:text-[#111111] py-1 transition-colors duration-300 focus:outline-none group"
                >
                  {link.label}
                  {/* Subtle active underline for Home */}
                  {isHome ? (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#111111] rounded-full" />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#111111] rounded-full transition-all duration-300 group-hover:w-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Top Right — Let's Talk CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[#111111]/15 bg-white/60 hover:bg-white transition-all duration-300 focus:outline-none cursor-pointer shadow-sm text-[#111111]"
              aria-label="Toggle Theme Mode"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            >
              {theme === "dark" ? (
                <Sun size={15} className="text-amber-500" />
              ) : (
                <Moon size={15} className="text-purple-600" />
              )}
            </button>

            <a
              href={portfolioData.personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#111111]/20 bg-transparent text-xs font-semibold tracking-wider text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300 focus:outline-none cursor-pointer"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Hamburger Menu Toggle for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#111111] focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </motion.header>

      {/* Mobile Navigation Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F7F6F2] flex flex-col justify-center items-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, index) => {
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={handleMobileLinkClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="text-xl font-bold tracking-wider text-[#111111] hover:opacity-70 transition-opacity"
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.4 }}
                className="mt-6 flex flex-col items-center gap-4"
              >
                <a
                  href={portfolioData.personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleMobileLinkClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-bold uppercase tracking-widest"
                >
                  <span>Let’s Talk</span>
                  <ArrowUpRight size={14} />
                </a>

                <button
                  onClick={toggleTheme}
                  className="px-5 py-2.5 rounded-full border border-[#111111]/20 bg-white text-[#111111] font-bold text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun size={15} className="text-amber-500" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon size={15} className="text-purple-600" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
