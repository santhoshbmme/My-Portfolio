import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

/**
 * Footer component containing brand taglines, links, copyrights,
 * and a smooth back-to-top anchor trigger.
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  /**
   * Scroll view smoothly back to top.
   */
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="py-12 md:py-16 bg-[#090909] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 items-center border-b border-white/5 pb-12 mb-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="text-center md:text-left flex flex-col gap-2">
            <a 
              href="#home" 
              className="text-lg font-bold tracking-[0.2em] text-white flex items-center justify-center md:justify-start gap-1.5 focus:outline-none"
            >
              <span>SANTHOSH M</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-cta"></span>
            </a>
            <p className="text-xs text-white/50 font-light mt-1">
              {portfolioData.personalInfo.title}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-xs text-white/60 hover:text-white uppercase tracking-widest transition-colors font-medium">About</a>
            <a href="#services" className="text-xs text-white/60 hover:text-white uppercase tracking-widest transition-colors font-medium">Services</a>
            <a href="#work" className="text-xs text-white/60 hover:text-white uppercase tracking-widest transition-colors font-medium">Work</a>
            <a href="#contact" className="text-xs text-white/60 hover:text-white uppercase tracking-widest transition-colors font-medium">Contact</a>
          </div>

          {/* Column 3: Social Links */}
          <div className="flex justify-center md:justify-end items-center gap-4">
            <a 
              href={portfolioData.personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href={portfolioData.personalInfo.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              aria-label="Instagram Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a 
              href={`mailto:${portfolioData.personalInfo.email}`} 
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail size={16} />
            </a>
          </div>

        </div>

        {/* Footer Meta Row */}
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-6">
          <div className="text-center sm:text-left flex flex-col gap-1.5">
            <p className="text-xs text-white/40">
              &copy; {currentYear} Santhosh M. All rights reserved.
            </p>
            <p className="text-[10px] text-white/30 italic">
              Designed & built with intention.
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer focus:outline-none"
            aria-label="Scroll Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};
