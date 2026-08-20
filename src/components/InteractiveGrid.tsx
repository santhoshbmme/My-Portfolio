import React, { useRef, useEffect } from "react";

/**
 * An interactive background grid component that overlays a fine mesh of grid lines
 * and a radial spotlight glow that follows the user's cursor.
 * Optimizes performance by directly editing CSS Custom Properties instead of
 * triggering React state re-renders on mousemove.
 */
export const InteractiveGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if the device has pointer/hover capabilities
    const hasHover = window.matchMedia("(hover: hover)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!hasHover || prefersReducedMotion) {
      // Set static spotlight positions for mobile/tablet/reduced-motion
      container.style.setProperty("--mouse-x", "50%");
      container.style.setProperty("--mouse-y", "40%");
      return;
    }

    /**
     * Mousemove event listener to update CSS custom variables directly on the DOM ref.
     * Prevents expensive React virtual DOM updates.
     */
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "30%",
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          radial-gradient(
            circle 600px at var(--mouse-x) var(--mouse-y),
            rgba(168, 85, 247, 0.09) 0%,
            rgba(236, 72, 153, 0.03) 40%,
            transparent 80%
          )
        `,
        backgroundSize: "60px 60px, 60px 60px, 100% 100%",
        backgroundPosition: "center center",
      } as React.CSSProperties}
    >
      {/* Abstract radial ambient glows to add depth to the dark canvas */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-fuchsia-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[15%] w-[40vw] h-[40vw] rounded-full bg-orange-500/3 blur-[140px] pointer-events-none" />
    </div>
  );
};
