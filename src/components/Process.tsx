import React from "react";
import { processSteps } from "../lib/data";
import { Compass, Palette, Code, Server, HeartHandshake } from "lucide-react";

export default function Process() {
  const stepIcons = [
    <Compass className="h-6 w-6 text-primary" key={1} id="proc-ico-1" />,
    <Palette className="h-6 w-6 text-primary" key={2} id="proc-ico-2" />,
    <Code className="h-6 w-6 text-primary" key={3} id="proc-ico-3" />,
    <Server className="h-6 w-6 text-primary" key={4} id="proc-ico-4" />,
    <HeartHandshake className="h-6 w-6 text-primary" key={5} id="proc-ico-5" />
  ];

  return (
    <section id="process" className="py-24 px-6 max-w-5xl mx-auto container relative">
      <div className="absolute bottom-[20%] left-1/4 h-[250px] w-[250px] rounded-full bg-primary/5 opacity-20 blur-[90px]" />

      {/* Section Header */}
      <div className="mb-16">
        <span 
          id="process-label"
          className="text-xs font-bold tracking-widest text-primary uppercase block mb-2"
        >
          Delivery Pipeline
        </span>
        <h2 
          id="process-heading"
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2"
        >
          A methodical blueprint from discovery to global deployment
        </h2>
        <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
          I apply a predictable, multi-phase methodology that mitigates design discrepancies, maximizes compilation speeds, and secures structural integrity.
        </p>
      </div>

      {/* Steps visual flow */}
      <div 
        id="process-steps-container"
        className="grid grid-cols-1 md:grid-cols-5 gap-6 relative"
      >
        {processSteps.map((step, idx) => (
          <div 
            key={idx}
            className="flex flex-col p-6 bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.02] hover:border-primary/15 rounded-2xl relative transition-all duration-300 group"
            id={`process-step-item-${idx}`}
          >
            {/* Horizontal dash connect pipeline for desktop */}
            {idx < 4 && (
              <div className="hidden md:block absolute top-12 left-full w-6 h-[1.5px] bg-gradient-to-r from-primary/30 to-transparent z-10 -translate-x-[2px]" />
            )}

            {/* Step Number Badge */}
            <span className="text-[10px] font-mono font-bold text-primary tracking-widest block mb-4 uppercase">
              PHASE {step.step}
            </span>

            {/* Icon Block */}
            <div className="p-3 bg-primary-light border border-primary/10 rounded-xl mb-6 w-max group-hover:scale-105 transition-transform">
              {stepIcons[idx]}
            </div>

            {/* Text description */}
            <div className="space-y-1.5 flex-grow">
              <h3 className="text-[13px] md:text-sm font-bold text-white tracking-tight">
                {step.title}
              </h3>
              <p className="text-[11px] lg:text-xs text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
