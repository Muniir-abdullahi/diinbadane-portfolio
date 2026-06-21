import React from "react";
import { experienceTimeline } from "../lib/data";
import { Briefcase, Calendar, Star, Building2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto container relative">
      <div className="absolute top-[20%] right-0 h-[220px] w-[220px] rounded-full bg-primary/5 opacity-10 blur-[80px]" />

      {/* Section Header */}
      <div className="mb-16">
        <span 
          id="experience-label"
          className="text-xs font-bold tracking-widest text-primary uppercase block mb-2"
        >
          CAREER ARCHITECTURE
        </span>
        <h2 
          id="experience-heading"
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2"
        >
          Senior milestones & SaaS leadership timeline
        </h2>
        <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
          Five years of systems engineering, team management, and secure technical consultancy.
        </p>
      </div>

      {/* Timeline core blocks */}
      <div className="relative border-l border-white/[0.08] ml-3 md:ml-6 space-y-12" id="experience-timeline-container">
        {experienceTimeline.map((item, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 group" id={`experience-timeline-item-${idx}`}>
            
            {/* Pulsing indicator node */}
            <div className="absolute -left-[9.5px] top-1.5 h-[18px] w-[18px] bg-[#030712] border-2 border-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="h-1.5 w-1.5 rounded-full bg-[#2ee59d]" />
            </div>

            {/* Timeframe indicator */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 mb-4 border-b border-white/[0.03] pb-3">
              <div>
                <span className="text-primary font-mono text-xs font-semibold uppercase tracking-widest block mb-1">
                  {item.period}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {item.role}
                </h3>
                <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5 mt-0.5">
                  <Building2 className="h-3.5 w-3.5 text-gray-500" />
                  {item.company}
                </p>
              </div>
            </div>

            {/* Accomplishment highlights list */}
            <div className="space-y-3" id={`exp-highlights-${idx}`}>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                KEY OUTCOMES & ACHIEVEMENTS:
              </p>
              {item.highlights.map((highlight, idy) => (
                <div key={idy} className="flex items-start gap-3 text-xs md:text-sm text-gray-400 leading-normal">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
