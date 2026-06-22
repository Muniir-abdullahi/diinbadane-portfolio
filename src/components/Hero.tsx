import React from "react";
import { ArrowRight, Github, Twitter, Mail } from "lucide-react";

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

  const socialLinks = [
    { icon: <Github className="h-4.5 w-4.5" id="social-hero-github" />, name: "GitHub", href: "https://github.com/Muniir-abdullahi" },
    { icon: <Twitter className="h-4.5 w-4.5" id="social-hero-twitter" />, name: "X / Twitter", href: "https://x.com/diinbadane" },
    { icon: <Mail className="h-4.5 w-4.5" id="social-hero-mail" />, name: "muniir669@gmail.com", href: "mailto:muniir669@gmail.com" }
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] flex flex-col justify-center px-6 py-16 md:py-24 overflow-hidden bg-white"
    >
      {/* Subtle decorative blurred circle top-right */}
      <div className="absolute top-[-150px] right-[-150px] h-[550px] w-[550px] rounded-full bg-primary-light/40 blur-[100px] -z-10" />

      {/* Background grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] -z-20" />

      <div className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 gap-12 items-center">
          
          {/* Left Column Text details (now taking full available width or constrained by max-w) */}
          <div className="flex flex-col text-left space-y-6">
            
            {/* Availability Pill */}
            <div className="inline-flex">
              <span 
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-3.5 py-1.5 text-xs font-bold text-primary-light"
                id="badge-hero-available"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for software contracts & consulting
              </span>
            </div>

            {/* Eyebrow and Headline */}
            <div>
              <span className="text-primary uppercase tracking-wide text-[13px] font-semibold block mb-3">
                MUNIIR ABDULLAHI — MOGADISHU, SOMALIA
              </span>
              <h1 
                className="text-5xl md:text-6xl font-[800] tracking-[-1.5px] text-slate-900 leading-[1.05]"
                id="hero-main-title"
              >
                Building Software <br className="hidden sm:inline" />
                That Solves <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                  Real Business Problems.
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p 
              className="text-gray-600 text-sm md:text-base leading-[1.6] max-w-[480px]"
              id="hero-intro-text"
            >
              Hi, I'm <strong className="text-slate-900">Munir Abdullahi (Diinbadane)</strong>. I'm a full-stack developer, SaaS founder, and consultant in Mogadishu. I engineer robust backends and performance-optimized web systems that scale.
            </p>

            {/* Premium CTA triggers */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2" id="hero-action-buttons">
              <button
                id="btn-hero-projects"
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg shadow-gray-900/10 hover:scale-[1.02] cursor-pointer"
              >
                View Selected Systems
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                id="btn-hero-consult"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-900 hover:bg-gray-50 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>

            {/* Social accounts shortcut links */}
            <div className="flex items-center gap-5 pt-4" id="hero-socials-row">
              <div className="flex items-center gap-3">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 p-2 bg-white hover:bg-primary-light border border-slate-200 hover:border-primary/20 rounded-lg text-xs text-slate-600 hover:text-primary transition-all duration-200"
                    id={`hero-social-${idx}`}
                  >
                    {link.icon}
                    <span className="hidden sm:inline">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
