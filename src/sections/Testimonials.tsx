import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { portfolioData } from "../data/portfolioData";
import { Quote } from "lucide-react";

/**
 * Testimonials section displaying client endorsements and reviews.
 * Employs a continuous CSS marquee slider that adapts to dark/light theme modes.
 */
export const Testimonials: React.FC = () => {
  // Double the testimonials array to support seamless continuous loop animation
  const duplicatedTestimonials = [...portfolioData.testimonials, ...portfolioData.testimonials];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#0C0C0C] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <SectionHeader 
            num="06" 
            title="What Clients Say" 
            subtitle="Read feedback from founders and product leads about working together on custom projects."
          />
        </div>
      </div>

      {/* Marquee Row Container */}
      <div className="mt-8 relative w-full overflow-hidden select-none">
        {/* Left & Right gradient fade masks (theme adaptive) */}
        <div className="testimonial-fade-left absolute left-0 top-0 bottom-0 w-16 md:w-32 z-15 pointer-events-none transition-colors duration-300" />
        <div className="testimonial-fade-right absolute right-0 top-0 bottom-0 w-16 md:w-32 z-15 pointer-events-none transition-colors duration-300" />

        {/* CSS Scrolling Wrapper */}
        <div className="flex gap-6 animate-marquee py-4">
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="testimonial-card glass-card p-6 md:p-8 rounded-2xl w-[300px] sm:w-[400px] shrink-0 flex flex-col justify-between border border-white/5 relative group hover:border-purple-500/20 transition-all duration-300"
            >
              {/* Quote Icon decorative backdrop */}
              <Quote className="absolute right-6 top-6 text-purple-500/10 group-hover:text-purple-500/20 transition-colors" size={48} />
              
              <p className="testimonial-quote text-white/70 font-light italic leading-relaxed text-sm md:text-base mb-6 relative z-10">
                “{testimonial.quote}”
              </p>

              <div className="flex items-center gap-3">
                {/* Author Avatar Initial */}
                <div className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center text-white font-extrabold text-sm uppercase shrink-0 font-mono shadow-sm">
                  {testimonial.author.charAt(0)}
                </div>
                
                <div>
                  <h4 className="testimonial-author text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                    {testimonial.author}
                  </h4>
                  <p className="testimonial-role text-[11px] text-white/50 tracking-wider uppercase font-mono">
                    {testimonial.role}, <span className="opacity-90">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
