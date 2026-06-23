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
    <footer className="bg-slate-100 dark:bg-slate-950 w-full transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-slate-200 dark:border-white/10">
          
          {/* Brand Logo and descriptor */}
          <div className="space-y-1.5" id="footer-brand">
            <h3 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-emerald-100 dark:bg-emerald-700/20 border border-emerald-200 dark:border-emerald-600/30 flex items-center justify-center">
                <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-500">D</span>
              </div>
              <span>
                Diinbadan<span className="text-emerald-600 dark:text-emerald-500">e</span>
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono tracking-wider uppercase">
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
                className="p-2 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200 rounded-lg shadow-sm"
                aria-label={social.label}
                id={`footer-social-link-${idx}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom micro metadata */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-slate-500 dark:text-slate-400 font-mono" id="footer-bottom">
          <p>© 2026 Diinbadane. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Designed & Engineered in Mogadishu, Somalia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
