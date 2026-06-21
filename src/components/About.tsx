import React from "react";
import { MapPin, Calendar, Code, Building, ShieldCheck, Cpu, HardDrive } from "lucide-react";

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
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto container relative">
      {/* Background glow node */}
      <div className="absolute right-0 top-[20%] h-[300px] w-[300px] rounded-full bg-primary/5 opacity-30 blur-[90px] -z-10" />

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
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-white"
        >
          Translating business complexity into clean, performant software systems
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 gap-y-10 items-start">
        {/* Left Column Narrative */}
        <div className="lg:col-span-7 space-y-5 text-gray-400 leading-relaxed text-sm md:text-base" id="about-bio">
          <p>
            I'm <strong className="text-white">Munir Abdullahi (Diinbadane)</strong>. Over the past five years, I have delivered critical digital infrastructure for government databases, multi-tenant booking platforms, compliance portals, and high-volume retail systems.
          </p>
          <p>
            I prioritize clean, maintainable code using <strong className="text-white">Laravel, React, Inertia, Next.js</strong>, and <strong className="text-white">Flutter</strong>. I handle the full system lifecycle, from designing high-security user portals to deploying on customized cloud nodes.
          </p>
          <p>
            I also lead <strong className="text-white">Rukun</strong>, an independent software studio in Somalia. Our central products, <strong className="text-primary font-bold">NidaamFlow</strong> and <strong className="text-primary font-bold">RukunPOS</strong>, streamline daily sales operations and management overhead for complex local businesses.
          </p>
 
          {/* Secure system certification visual tag */}
          <div className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 mt-6">
            <ShieldCheck className="h-5 w-5 text-[#2ee59d]" id="about-shield-cert" />
            <span className="text-xs text-gray-400 font-mono">
              Engineered for absolute performance, intuitive UX, and clean developer handoff.
            </span>
          </div>
        </div>

        {/* Right Column Grid Stack */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4" id="about-facts-container">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              id={`about-fact-${idx}`}
              className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary-light border border-primary/10 rounded-xl mt-0.5">
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500">
                    {stat.label}
                  </h3>
                  <p className="text-sm font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400">
                    {stat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
