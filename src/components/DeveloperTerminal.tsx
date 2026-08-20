import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code2, Cpu, Send, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

/**
 * DeveloperTerminal Component.
 * A glassmorphic interactive code console featuring live tab switching,
 * syntax-highlighted developer bio, interactive tech stack inspects,
 * and quick-action terminal execution triggers.
 */
export const DeveloperTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "stack" | "actions">("profile");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-lg md:max-w-xl mx-auto rounded-2xl border border-white/15 bg-[#0F0F12]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden font-mono text-xs select-text">
      {/* ── Terminal Header Bar ────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
        {/* Window Controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
        </div>

        {/* Terminal Title */}
        <div className="flex items-center gap-2 text-white/50 text-[11px]">
          <Terminal size={13} className="text-purple-400" />
          <span>santhosh@dev-console:~</span>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-2.5 py-1 rounded-md text-[10px] transition-colors cursor-pointer ${
              activeTab === "profile"
                ? "bg-purple-600/30 text-purple-300 border border-purple-500/40 font-bold"
                : "text-white/40 hover:text-white/80"
            }`}
          >
            profile.ts
          </button>
          <button
            onClick={() => setActiveTab("stack")}
            className={`px-2.5 py-1 rounded-md text-[10px] transition-colors cursor-pointer ${
              activeTab === "stack"
                ? "bg-purple-600/30 text-purple-300 border border-purple-500/40 font-bold"
                : "text-white/40 hover:text-white/80"
            }`}
          >
            stack.json
          </button>
          <button
            onClick={() => setActiveTab("actions")}
            className={`px-2.5 py-1 rounded-md text-[10px] transition-colors cursor-pointer ${
              activeTab === "actions"
                ? "bg-purple-600/30 text-purple-300 border border-purple-500/40 font-bold"
                : "text-white/40 hover:text-white/80"
            }`}
          >
            action.sh
          </button>
        </div>
      </div>

      {/* ── Terminal Body Content ──────────────────────────────────────── */}
      <div className="p-5 md:p-6 min-h-[210px] flex flex-col justify-between relative">
        <AnimatePresence mode="wait">
          {activeTab === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-2 text-white/90"
            >
              <div className="text-white/40">// Developer Bio &amp; Core Specs</div>
              <div>
                <span className="text-purple-400 font-bold">const</span>{" "}
                <span className="text-yellow-300">developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-purple-300">name</span>:{" "}
                <span className="text-green-300">"Santhosh M"</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-300">role</span>:{" "}
                <span className="text-green-300">"Web &amp; Creative Developer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-300">focus</span>:{" "}
                <span className="text-green-300">"3D Webcraft &amp; High-Perf UI"</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-300">status</span>:{" "}
                <span className="text-orange-300">"Available for Projects"</span>
              </div>
              <div>&#125;;</div>
            </motion.div>
          )}

          {activeTab === "stack" && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div className="text-white/40 flex items-center justify-between">
                <span>// Active Tech Stack Dependencies</span>
                <Cpu size={12} className="text-purple-400" />
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 bg-white/5 rounded-lg border border-white/5 flex justify-between items-center">
                  <span className="text-purple-300">React 19</span>
                  <span className="text-green-400 text-[9px] font-mono font-bold">LATEST</span>
                </div>
                <div className="p-2 bg-white/5 rounded-lg border border-white/5 flex justify-between items-center">
                  <span className="text-purple-300">TypeScript</span>
                  <span className="text-blue-400 text-[9px] font-mono font-bold">STRICT</span>
                </div>
                <div className="p-2 bg-white/5 rounded-lg border border-white/5 flex justify-between items-center">
                  <span className="text-purple-300">GSAP 3</span>
                  <span className="text-amber-400 text-[9px] font-mono font-bold">3D ACCEL</span>
                </div>
                <div className="p-2 bg-white/5 rounded-lg border border-white/5 flex justify-between items-center">
                  <span className="text-purple-300">Tailwind CSS</span>
                  <span className="text-cyan-400 text-[9px] font-mono font-bold">V4</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "actions" && (
            <motion.div
              key="actions"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="text-white/40">// Quick Commands</div>
              <div className="flex flex-col gap-2">
                <a
                  href="#work"
                  className="w-full py-2.5 px-4 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 rounded-xl text-purple-200 flex items-center justify-between transition-colors font-bold group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Code2 size={14} className="text-purple-400" />
                    <span>./explore_selected_works.sh</span>
                  </div>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={portfolioData.personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 bg-orange-600/20 hover:bg-orange-600/30 border border-orange-500/30 rounded-xl text-orange-200 flex items-center justify-between transition-colors font-bold group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Send size={14} className="text-orange-400" />
                    <span>./start_project_whatsapp.sh</span>
                  </div>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Terminal Command Prompt Footer ───────────────────────────── */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-white/50 text-[10px]">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-bold">$</span>
            <span className="animate-pulse">_</span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="text-purple-400 hover:text-purple-300 transition-colors uppercase font-mono tracking-wider cursor-pointer"
          >
            {copied ? "[ Copied Email! ]" : "[ Copy Email ]"}
          </button>
        </div>
      </div>
    </div>
  );
};
