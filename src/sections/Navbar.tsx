import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

/**
 * Sticky navigation bar component with fluid mobile overlays.
 * Only visible when the user is within the Hero (home) section.
 * Smoothly fades out once the user scrolls past it.
 */
export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  /** True only while the viewport is inside the #home section */
  const [isOnHome, setIsOnHome] = useState(true);

  // Theme Mode State ("dark" | "light")
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "dark" | "light") || "dark";
    }
    return "dark";
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
  ];

  useEffect(() => {
    /**
     * Scroll listener: updates isScrolled (for glass bg) and isOnHome
     * (to show/hide the whole navbar).
     */
    const handleScroll = () => {
      const heroEl = document.getElementById("home");
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      setIsScrolled(window.scrollY > 20);
      setIsOnHome(window.scrollY < heroHeight - 80);
    };

    // Run once on mount so initial state is correct
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
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

  /**
   * Closes the mobile navigation drawer.
   */
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
            ? "bg-bg-dark/75 backdrop-blur-md border-b border-border-subtle py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center">
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => {
              // Split background when un-scrolled: idx 0,1 over white (black text), idx 2,3 over black (white text)
              let textColorClass = "";
              if (!isScrolled) {
                if (idx < 2) {
                  textColorClass = "text-black/70 hover:text-black";
                } else {
                  textColorClass = "text-white/70 hover:text-white";
                }
              } else {
                textColorClass = "text-white/60 hover:text-white";
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-xs font-semibold tracking-widest uppercase py-2 transition-colors duration-300 focus:outline-none ${textColorClass}`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Theme Toggle Button (Dark / Light mode) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/15 bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none cursor-pointer ml-2 shadow-sm"
              aria-label="Toggle Theme Mode"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            >
              {theme === "dark" ? (
                <Sun size={15} className="text-amber-400" />
              ) : (
                <Moon size={15} className="text-purple-600" />
              )}
            </button>
          </nav>

          {/* Hamburger Menu Toggle for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded transition-colors duration-300 ${
              mobileMenuOpen 
                ? "text-white" 
                : isScrolled 
                  ? "text-white/80 hover:text-white" 
                  : "text-black/80 hover:text-black"
            }`}
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
            className="fixed inset-0 z-40 bg-bg-dark/98 backdrop-blur-lg flex flex-col justify-center items-center lg:hidden"
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
                    className="text-xl font-bold tracking-widest uppercase transition-colors focus:outline-none text-white/70 hover:text-white"
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.4 }}
                className="mt-6 flex items-center gap-3"
              >
                <button
                  onClick={toggleTheme}
                  className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun size={15} className="text-amber-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon size={15} className="text-purple-400" />
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
