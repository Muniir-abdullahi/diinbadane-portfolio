import React from "react";
import { MapPin, Calendar, Code, Building, Cpu, Globe, Zap, Database } from "lucide-react";

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

  const focusAreas = [
    { icon: <Cpu className="w-6 h-6" />, title: "Systems Architecture", description: "Designing scalable multi-tenant infrastructure." },
    { icon: <Globe className="w-6 h-6" />, title: "Cloud Deployment", description: "Efficient server management and CI/CD." },
    { icon: <Zap className="w-6 h-6" />, title: "Modern Frontend", description: "Responsive interfaces with React and Next.js." },
    { icon: <Database className="w-6 h-6" />, title: "Data Integrity", description: "Secure, reliable database design." }
  ];

  return (
    <div className="w-full bg-white dark:bg-transparent transition-colors duration-300">
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto container relative">
        <div className="absolute right-0 top-[20%] h-[300px] w-[300px] rounded-full bg-primary/10 opacity-20 -z-10" />

        <div className="mb-12">
          <span 
            id="about-label"
            className="text-xs font-bold tracking-widest text-emerald-600 uppercase block mb-2"
          >
            Capabilities
          </span>
          <h2 
            id="about-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Independent software consultancy based in Mogadishu.
          </h2>

          <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed" id="about-paragraphs">
            <p>
              I'm <strong className="text-slate-900 dark:text-white">Munir Abdullahi (Diinbadane)</strong>. Over the past five years, I have delivered critical digital infrastructure for government databases, multi-tenant booking platforms, compliance portals, and high-volume retail systems.
            </p>
            <p>
              I prioritize clean, maintainable code using <strong className="text-slate-900 dark:text-white">Laravel, React, Inertia, Next.js</strong>, and <strong className="text-slate-900 dark:text-white">Flutter</strong>. I handle the full system lifecycle, from designing high-security user portals to deploying on customized cloud nodes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="about-focus-areas">
          {focusAreas.map((area, idx) => (
            <div 
              key={idx}
              id={`about-focus-card-${idx}`}
              className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 p-6 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              <div className="mb-4 text-emerald-600 dark:text-slate-500">
                {area.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                {area.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
