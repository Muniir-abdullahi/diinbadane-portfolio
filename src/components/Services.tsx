import React from "react";
import { services } from "../lib/data";
import { Check, Cpu, Landmark, Network, Sparkles, Database } from "lucide-react";

export default function Services() {
  const serviceIcons = [
    <Cpu className="h-6 w-6 text-primary" key={1} id="srv-ico-cpu" />,
    <Network className="h-6 w-6 text-primary" key={2} id="srv-ico-net" />,
    <Landmark className="h-6 w-6 text-primary" key={3} id="srv-ico-gov" />,
    <Database className="h-6 w-6 text-primary" key={4} id="srv-ico-dev" />
  ];

  return (
    <div className="bg-white w-full">
      <section id="services" className="py-24 px-6 max-w-5xl mx-auto container relative">
        <div className="absolute top-[30%] left-0 h-[250px] w-[250px] rounded-full bg-primary/10 opacity-15 blur-[80px]" />

        {/* Section Header */}
        <div className="mb-14">
          <span 
            id="services-label"
            className="text-xs font-bold tracking-widest text-primary uppercase block mb-2"
          >
            Specialized Services
          </span>
          <h2 
            id="services-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3"
          >
            High-performance engineering aligned to core business growth
          </h2>
          <p className="text-sm text-slate-650 max-w-2xl leading-relaxed">
            I provide dedicated technical advisory, platform architecture, and custom code implementation that bridges operational gaps.
          </p>
        </div>

        {/* Grid wrapper */}
        <div 
          id="services-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, idx) => (
            <div 
              key={idx}
              id={`service-card-${idx}`}
              className="bg-white border border-slate-200/60 hover:border-primary/20 rounded-2xl p-6 md:p-8 hover:bg-slate-50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon and Metric Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-primary-light border border-primary/10 rounded-xl group-hover:scale-105 transition-transform duration-300">
                    {serviceIcons[idx] || <Sparkles className="h-6 w-6 text-primary" id={`srv-ico-fallback-${idx}`} />}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-primary-light text-primary-darker px-2.5 py-1 rounded-md border border-primary/20">
                    {service.metric}
                  </span>
                </div>
   
                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors flex items-center gap-1.5">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
   
              {/* Deliverables List */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100" id={`service-deliv-${idx}`}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                  SYSTEM DELIVERABLES:
                </p>
                {service.deliverables.map((item, idy) => (
                  <div key={idy} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
   
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
