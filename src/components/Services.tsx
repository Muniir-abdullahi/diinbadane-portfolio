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
    <section id="services" className="py-24 px-6 max-w-5xl mx-auto container relative">
      <div className="absolute top-[30%] left-0 h-[250px] w-[250px] rounded-full bg-primary/5 opacity-20 blur-[80px]" />

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
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3"
        >
          High-performance engineering aligned to core business growth
        </h2>
        <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
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
            className="bg-white/[0.02] border border-white/[0.06] hover:border-primary/20 rounded-2xl p-6 md:p-8 hover:bg-white/[0.03] transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              {/* Icon and Metric Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-primary-light border border-primary/10 rounded-xl group-hover:scale-105 transition-transform duration-300">
                  {serviceIcons[idx] || <Sparkles className="h-6 w-6 text-primary" id={`srv-ico-fallback-${idx}`} />}
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white/[0.04] text-[#2ee59d] px-2.5 py-1 rounded-md border border-white/[0.05]">
                  {service.metric}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors flex items-center gap-1.5">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="space-y-2.5 pt-4 border-t border-white/[0.04]" id={`service-deliv-${idx}`}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">
                SYSTEM DELIVERABLES:
              </p>
              {service.deliverables.map((item, idy) => (
                <div key={idy} className="flex items-center gap-2.5 text-xs text-gray-300">
                  <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
