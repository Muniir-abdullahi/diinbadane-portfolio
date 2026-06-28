import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };



  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] flex flex-col justify-center px-6 py-16 md:py-24 overflow-hidden bg-white dark:bg-transparent transition-colors duration-300"
    >
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] -z-20" />

      <div className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 gap-12 items-center">
          
          {/* Left Column Text details (now taking full available width or constrained by max-w) */}
          <div className="flex flex-col text-left space-y-6">
            
            {/* Availability Pill */}
            <div className="inline-flex">
              <span 
                className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 dark:bg-emerald-900/30 border border-emerald-500/15 dark:border-emerald-800/50 px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400"
                id="badge-hero-available"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                Available for software contracts
              </span>
            </div>

            {/* Eyebrow and Headline */}
            <div>
              <span className="text-slate-500 uppercase tracking-widest text-[11px] font-bold block mb-4">
                MUNIIR ABDULLAHI — MOGADISHU, SOMALIA
              </span>
              <h1 
                className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]"
                id="hero-main-title"
              >
                Building Software <br className="hidden sm:inline" />
                That Solves <br className="hidden sm:inline" />
                <span className="text-emerald-500">
                  Real Business Problems.
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p 
              className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-[500px]"
              id="hero-intro-text"
            >
              Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Munir Abdullahi (Diinbadane)</strong>. I'm a full-stack developer, SaaS founder, and consultant in Mogadishu. I engineer robust backends and performance-optimized web systems that scale.
            </p>

            {/* Premium CTA triggers */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2" id="hero-action-buttons">
              <button
                id="btn-hero-projects"
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-500 text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors cursor-pointer"
              >
                View Selected Systems
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                id="btn-hero-consult"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>



          </div>

        </div>
      </div>
    </section>
  );
}
