import React from "react";
import { MapPin, Calendar, Code, Building } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <MapPin className="h-4.5 w-4.5 text-primary" id="about-info-loc" />,
      label: "HQ Location",
      value: "Mogadishu, Somalia",
      desc: "Centrally positioned for regional business automation solutions."
    },
    {
      icon: <Calendar className="h-4.5 w-4.5 text-primary" id="about-info-exp" />,
      label: "Technical Tenure",
      value: "5+ Years",
      desc: "Continuous full-stack operation in complex system deployments."
    },
    {
      icon: <Code className="h-4.5 w-4.5 text-primary" id="about-info-core" />,
      label: "Arch Focus",
      value: "SaaS & Core Business Platforms",
      desc: "Re-engineering paper workflows into digital cloud ledgers."
    },
    {
      icon: <Building className="h-4.5 w-4.5 text-primary" id="about-info-company" />,
      label: "Enterprise Role",
      value: "Founder, Rukun Software Studio",
      desc: "Delivering packaged commercial SaaS products for Somali businesses."
    }
  ];

  return (
    <div className="bg-slate-50 w-full">
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto container relative">
        {/* Background glow node */}
        <div className="absolute right-0 top-[20%] h-[300px] w-[300px] rounded-full bg-primary/10 opacity-20 -z-10" />

        {/* Decorative vertical section tag */}
        <div className="mb-12">
          <span 
            id="about-label"
            className="text-xs font-bold tracking-widest text-primary uppercase block mb-2"
          >
            ABOUT THE ARCHITECT
          </span>
          <h2 
            id="about-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Translating business complexity into clean, performant software systems
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 gap-y-10 items-start">
          {/* Left Column Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 leading-[1.7] max-w-[520px]" id="about-bio">
            <p>
              I'm <strong className="text-slate-900">Munir Abdullahi (Diinbadane)</strong>. Over the past five years, I have delivered critical digital infrastructure for government databases, multi-tenant booking platforms, compliance portals, and high-volume retail systems.
            </p>
            <p>
              I prioritize clean, maintainable code using <strong className="text-slate-900">Laravel, React, Inertia, Next.js</strong>, and <strong className="text-slate-900">Flutter</strong>. I handle the full system lifecycle, from designing high-security user portals to deploying on customized cloud nodes.
            </p>
            <p>
              I also lead <strong className="text-slate-900">Rukun</strong>, an independent software studio in Somalia. Our central products, <strong className="text-primary font-bold">NidaamFlow</strong> and <strong className="text-primary font-bold">RukunPOS</strong>, streamline daily sales operations and management overhead for complex local businesses.
            </p>
          </div>

          {/* Right Column: Single Cohesive Bordered Panel */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm" id="about-facts-container">
            <div className="space-y-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  id={`about-fact-${idx}`}
                  className={`flex items-start gap-4 pb-4 ${idx < stats.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  <div className="p-2.5 bg-primary-light border border-primary/10 rounded-xl mt-0.5 flex-shrink-0">
                    {stat.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
                      {stat.label}
                    </h3>
                    <p className="text-sm font-bold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
