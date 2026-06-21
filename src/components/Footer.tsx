import React from "react";
import { Github, Twitter, Mail, Building } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      icon: <Mail className="h-4.5 w-4.5" id="footer-icon-mail" />,
      href: "mailto:muniir669@gmail.com",
      label: "Email"
    },
    {
      icon: <Github className="h-4.5 w-4.5" id="footer-icon-github" />,
      href: "https://github.com/Muniir-abdullahi",
      label: "GitHub"
    },
    {
      icon: <Twitter className="h-4.5 w-4.5" id="footer-icon-twitter" />,
      href: "https://x.com/diinbadane",
      label: "X / Twitter"
    },
    {
      icon: <Building className="h-4.5 w-4.5" id="footer-icon-company" />,
      href: "https://rukun.app",
      label: "Corporate Suite"
    }
  ];

  return (
    <footer className="bg-brand-navy w-full text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-white/10">
          
          {/* Brand Logo and descriptor */}
          <div className="space-y-1.5" id="footer-brand">
            <h3 className="text-lg font-extrabold tracking-tight text-white flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-primary flex items-center justify-center">
                <span className="text-[10px] font-black text-white">D</span>
              </div>
              <span>
                Diinbadan<span className="text-primary">e</span>
              </span>
            </h3>
            <p className="text-xs text-gray-400 font-mono tracking-wider uppercase">
              Full-Stack Developer & Systems Architect
            </p>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-3" id="footer-socials">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-2 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/10 rounded-lg transition-all duration-200"
                aria-label={social.label}
                id={`footer-social-link-${idx}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom micro metadata */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-gray-400 font-mono" id="footer-bottom">
          <p>© 2026 Diinbadane. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            <span>Designed & Engineered in Mogadishu, Somalia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
