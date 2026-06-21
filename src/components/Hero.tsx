import React from "react";
import { ArrowRight, Code, Shield, Terminal, Users, Database, Server, Star, Github, Twitter, Mail, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

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

  const metrics = [
    {
      icon: <Terminal className="h-5 w-5 text-primary" id="metric-ico-exp" />,
      value: "5+ Years",
      label: "Professional Exp",
      desc: "Architecting backend, full-stack & mobile platforms"
    },
    {
      icon: <Server className="h-5 w-5 text-primary" id="metric-ico-sys" />,
      value: "20+ Enterprise",
      label: "Systems Built",
      desc: "Fintech, embassy, ERP, & government infrastructure"
    },
    {
      icon: <Code className="h-5 w-5 text-primary" id="metric-ico-saas" />,
      value: "2 Active SaaS",
      label: "Products Founded",
      desc: "NidaamFlow CRM & RukunPOS cloud terminal"
    },
    {
      icon: <Users className="h-5 w-5 text-primary" id="metric-ico-users" />,
      value: "Thousands",
      label: "Active Users Served",
      desc: "Supporting daily critical retail and admin tasks"
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-4.5 w-4.5" id="social-hero-github" />, name: "GitHub", href: "https://github.com/Muniir-abdullahi" },
    { icon: <Twitter className="h-4.5 w-4.5" id="social-hero-twitter" />, name: "X / Twitter", href: "https://x.com/diinbadane" },
    { icon: <Mail className="h-4.5 w-4.5" id="social-hero-mail" />, name: "muniir669@gmail.com", href: "mailto:muniir669@gmail.com" }
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex flex-col justify-center px-6 py-16 md:py-28 overflow-hidden"
    >
      {/* Background Glow Mesh (Linear Style) */}
      <div className="absolute inset-0 -z-10" id="hero-background-effects">
        <div className="absolute top-[10%] left-[10%] h-[400px] w-[400px] rounded-full bg-primary/5 opacity-[0.06] blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[15%] h-[350px] w-[350px] rounded-full bg-[#2ee59d]/5 opacity-[0.05] blur-[100px]" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        {/* Double grid structure representing modern SaaS dashboards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column Text details */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            
            {/* Avaialbility Tag */}
            <div className="inline-flex">
              <span 
                className="inline-flex items-center gap-1.5 rounded-full bg-primary-light border border-primary/20 px-3.5 py-1 text-xs font-bold text-[#2ee59d]"
                id="badge-hero-available"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for software contracts & consulting
              </span>
            </div>

            {/* Overarching Main Title */}
            <h1 
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
              id="hero-main-title"
            >
              Building Software <br className="hidden sm:inline" />
              That Solves <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#2ee59d] to-emerald-400">
                Real Business Problems.
              </span>
            </h1>

            {/* Professional subheadlines emphasizing seniority */}
            <p 
              className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl"
              id="hero-intro-text"
            >
              Hi, I'm <strong className="text-white">Munir Abdullahi (Diinbadane)</strong>. I'm a full-stack developer, SaaS founder, and consultant in Mogadishu. I engineer robust backends and performance-optimized web systems that scale.
            </p>

            {/* Premium CTA triggers */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2" id="hero-action-buttons">
              <button
                id="btn-hero-projects"
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-slate-950 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] cursor-pointer"
              >
                View Selected Systems
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                id="btn-hero-consult"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>

            {/* Social accounts shortcut links */}
            <div className="flex items-center gap-5 pt-4 border-t border-white/[0.05]" id="hero-socials-row">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Secure Channels:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 p-2 bg-white/[0.02] hover:bg-primary-light border border-white/[0.05] hover:border-primary/20 rounded-lg text-xs text-gray-400 hover:text-primary transition-all duration-200"
                    id={`hero-social-${idx}`}
                  >
                    {link.icon}
                    <span className="hidden sm:inline">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High Fidelity Architectural Blueprint Card Widget */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" id="hero-interactive-dashboard">
            <div className="w-full max-w-[380px] glass-panel-heavy rounded-2xl p-6 shadow-2xl relative overflow-hidden group border border-white/[0.08]">
              
              {/* Dynamic top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/35 via-[#2ee59d]/50 to-emerald-500/35" />
              
              {/* Interactive Visual Shell */}
              <div className="flex items-center justify-between mb-6 border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  Available For Hire
                </div>
              </div>

              {/* Developer Avatar Shell */}
              <div className="flex flex-col items-center text-center space-y-4 mb-6">
                <div className="relative">
                  {/* Outer spinning ring effect */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-[#2ee59d] opacity-50 blur-[4px]" />
                  <div className="relative h-20 w-20 rounded-full bg-slate-900 border-2 border-primary overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
                      alt="Munir Abdullahi"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">Munir Abdullahi</h3>
                  <p className="text-[11px] font-mono text-primary uppercase tracking-wider mt-0.5">Systems Architect & SaaS Founder</p>
                </div>
              </div>

              {/* Status Ledger */}
              <div className="space-y-3 font-mono text-[11px] text-gray-400 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
                <div className="flex justify-between">
                  <span>Host:</span>
                  <span className="text-white font-medium">diinbadane.so</span>
                </div>
                <div className="flex justify-between">
                  <span>Role focus:</span>
                  <span className="text-emerald-400 font-medium">Full Stack Architect</span>
                </div>
                <div className="flex justify-between">
                  <span>In Production:</span>
                  <span className="text-white font-medium">2 SaaS Products Live</span>
                </div>
                <div className="flex justify-between">
                  <span>Expertise:</span>
                  <span className="text-white font-medium">Laravel & React API</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-primary font-bold">Mogadishu, Somalia</span>
                </div>
              </div>

              {/* Floating terminal visual badge */}
              <div className="mt-4 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>Mogadishu HQ</span>
                <span className="text-primary">Rukun Studio</span>
              </div>

            </div>
          </div>

        </div>

        {/* 2. Credibility Metrics Trust Area */}
        <div className="border-t border-white/[0.06] pt-12" id="trust-metrics-anchor">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
              PROVEN TRACK RECORD
            </h2>
            <p className="text-sm text-gray-400">
              Measurable metrics behind five years of technical consultation
            </p>
          </div>

          <div 
            id="credibility-bento-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                id={`metric-card-${idx}`}
                className="bg-white/[0.02] border border-white/[0.06] hover:border-primary/20 rounded-2xl p-5 md:p-6 transition-all duration-300 group hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary-light border border-primary/10 rounded-xl group-hover:scale-105 transition-transform">
                    {metric.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight leading-none group-hover:text-primary transition-colors">
                      {metric.value}
                    </h3>
                  </div>
                </div>
                <h4 className="text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wide">
                  {metric.label}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
