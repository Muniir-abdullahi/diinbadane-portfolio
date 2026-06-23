import React from "react";
import { skills } from "../lib/data";

export default function Skills() {
  return (
    <div className="w-full bg-white dark:bg-transparent transition-colors duration-300">
      <section id="stack" className="py-24 px-6 max-w-5xl mx-auto container relative">
        {/* Section Header */}
        <div className="mb-14">
          <span 
            id="skills-label"
            className="text-xs font-bold tracking-widest text-primary uppercase block mb-2"
          >
            TECHNOLOGY STACK
          </span>
          <h2 
            id="skills-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2"
          >
            Carefully curated, modern stack optimized for horizontal scaling
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            I build modular solutions utilizing fast frameworks, structured relational databases, and secure virtualized servers.
          </p>
        </div>

        {/* Unified Table-like Grid */}
        <div className="border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden bg-white dark:bg-slate-800/30 shadow-sm dark:shadow-none" id="skills-grid">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {skills.map((skillGroup, index) => {
              // Calculate borders dynamically to prevent double borders
              const isLastRowMobile = index >= 6;
              const isLastRowDesktop = index >= 4;
              const isRightColMobile = index % 2 === 1;
              const isRightColDesktop = (index + 1) % 4 === 0;

              const borderClasses = `
                p-6 flex flex-col 
                ${isLastRowMobile ? "border-b-0" : "border-b"} 
                ${isLastRowDesktop ? "md:border-b-0" : "md:border-b"} 
                ${isRightColMobile ? "border-r-0" : "border-r"} 
                ${isRightColDesktop ? "md:border-r-0" : "md:border-r"} 
                border-slate-200 dark:border-white/5
              `.replace(/\s+/g, " ").trim();

              return (
                <div 
                  key={index}
                  id={`skill-category-${index}`}
                  className={borderClasses}
                >
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    {skillGroup.category}
                  </h3>
                  
                  <div className="flex flex-col" id={`skill-pills-list-${index}`}>
                    {skillGroup.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        id={`skill-pill-${index}-${itemIdx}`}
                        className="text-sm font-semibold text-slate-900 dark:text-slate-200 leading-[1.9]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
