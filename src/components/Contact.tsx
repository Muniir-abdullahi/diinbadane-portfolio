import React from "react";
import { Mail, Github, Twitter, Building } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      name: "Direct Email",
      value: "muniir669@gmail.com",
      href: "mailto:muniir669@gmail.com",
      icon: <Mail className="h-5 w-5 text-primary" id="icon-contact-email" />,
      tagline: "General & contracting discussions"
    },
    {
      name: "GitHub Hub",
      value: "github.com/Muniir-abdullahi",
      href: "https://github.com/Muniir-abdullahi",
      icon: <Github className="h-5 w-5 text-primary" id="icon-contact-github" />,
      tagline: "Explore architectural repositories"
    },
    {
      name: "X / Twitter",
      value: "@diinbadane",
      href: "https://x.com/diinbadane",
      icon: <Twitter className="h-5 w-5 text-primary" id="icon-contact-twitter" />,
      tagline: "Industry updates & discussions"
    },
    {
      name: "Corporate Suite",
      value: "rukun.app",
      href: "https://rukun.app",
      icon: <Building className="h-5 w-5 text-primary" id="icon-contact-company" />,
      tagline: "Commercial SaaS operations"
    }
  ];

  return (
    <div className="bg-brand-navy w-full text-white">
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Information Area */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span 
                id="contact-label"
                className="text-xs font-bold tracking-widest text-primary uppercase block mb-2"
              >
                COMMISSION AND QUERY
              </span>
              <h2 
                id="contact-heading"
                className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3"
              >
                Let's Build Something Valuable
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Have a complex business workflow or a multi-tenant platform requirement? Reach out via any of my secure channels to discuss the technical architecture.
              </p>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" id="contact-methods-stack">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                id={`contact-method-link-${idx}`}
                href={method.href}
                target={method.name !== "Direct Email" ? "_blank" : undefined}
                rel={method.name !== "Direct Email" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:scale-105 transition-transform duration-300">
                  {method.icon}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[10px] uppercase font-bold text-gray-400 tracking-wider font-mono">
                    {method.name}
                  </h4>
                  <p className="text-white font-medium text-sm">
                    {method.value}
                  </p>
                  <p className="text-[10px] text-gray-400">
                    {method.tagline}
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
