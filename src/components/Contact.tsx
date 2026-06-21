import React, { useState } from "react";
import { Mail, Github, Twitter, Building, MessageSquare, Send, CheckCircle, Smartphone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      // reset form
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const contactMethods = [
    {
      name: "Direct Email",
      value: "muniir669@gmail.com",
      href: "mailto:muniir669@gmail.com",
      icon: <Mail className="h-5 w-5 text-primary" id="icon-contact-email" />,
      tagline: "General & contracting discussions"
    },
    {
      name: "WhatsApp Secure",
      value: "+252 615 XXX XXX",
      href: "https://wa.me/252615000000", // placeholder as instructed
      icon: <Smartphone className="h-5 w-5 text-primary" id="icon-contact-wp" />,
      tagline: "Instant project chat"
    },
    {
      name: "GitHub Hub",
      value: "github.com/Muniir-abdullahi",
      href: "https://github.com/Muniir-abdullahi",
      icon: <Github className="h-5 w-5 text-primary" id="icon-contact-github" />,
      tagline: "Explore architectural repositories"
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
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto container relative">
      <div className="absolute bottom-0 right-[20%] h-[350px] w-[350px] rounded-full bg-primary/5 opacity-10 blur-[120px]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 gap-y-16 items-start">
        
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
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2"
            >
              Let's Build Something Valuable
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Have a complex business workflow or a multi-tenant platform requirement? Schedule a detailed system discovery consultation to map out the technical architecture.
            </p>
          </div>

          {/* Social connections list */}
          <div className="grid grid-cols-1 gap-4 pt-4" id="contact-methods-stack">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                id={`contact-method-link-${idx}`}
                href={method.href}
                target={method.name !== "Direct Email" ? "_blank" : undefined}
                rel={method.name !== "Direct Email" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/[0.05] hover:border-primary/20 hover:bg-white/[0.03] transition-all group"
              >
                <div className="p-3 bg-primary-light border border-primary/10 rounded-xl group-hover:scale-105 transition-transform duration-300">
                  {method.icon}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[10px] uppercase font-bold text-gray-500 tracking-wider font-mono">
                    {method.name}
                  </h4>
                  <p className="text-[#2ee59d] font-bold text-xs">
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

        {/* Right Column Custom Contact Form */}
        <div className="lg:col-span-7 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8 relative" id="contact-form-block">
          {/* Top glowing focus element */}
          <div className="absolute top-0 left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {isSubmitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4" id="form-success-alert">
              <div className="h-14 w-14 rounded-full bg-primary-light border border-primary/20 flex items-center justify-center text-primary">
                <CheckCircle className="h-7 w-7 text-[#2ee59d]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white">Transmission Successful</h3>
                <p className="text-xs text-gray-400 max-w-sm">
                  Your corporate advisory inquiry has been locked. Munir's team will contact your department within 12 business hours.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" id="consultation-form">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2 border-b border-white/[0.04] pb-3 mb-4">
                <MessageSquare className="h-4 w-4 text-primary" /> Direct Consultation Form
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="form-name" className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">
                    Your Name / Corporate entity
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#030712] border border-white/[0.08] hover:border-white/15 focus:border-primary focus:outline-none rounded-xl px-4 py-3 text-xs text-white transition-colors"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-email" className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">
                    Business Email
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#030712] border border-white/[0.08] hover:border-white/15 focus:border-primary focus:outline-none rounded-xl px-4 py-3 text-xs text-white transition-colors"
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="form-msg" className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">
                  Architectural Specifications / Project Scope
                </label>
                <textarea
                  id="form-msg"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#030712] border border-white/[0.08] hover:border-white/15 focus:border-primary focus:outline-none rounded-xl px-4 py-3 text-xs text-white transition-colors resize-none"
                  placeholder="Tell me about your tech stack, database constraints, or pipeline deadline..."
                />
              </div>

              <button
                id="btn-form-submit"
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-slate-950 font-bold px-6 py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-primary/15 hover:shadow-primary/25 hover:scale-[1.01] transition-all cursor-pointer"
              >
                Send Request Specs
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
