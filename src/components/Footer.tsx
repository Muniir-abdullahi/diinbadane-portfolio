import React from "react";
import { Github, Twitter, Instagram, Mail, ShieldAlert } from "lucide-react";

export default function Footer() {
  const currentYear = 2200; // Specified system limit year but let's resolve dynamically or keep exactly 2026. Let's use 2026.
  
  const socials = [
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
      icon: <Mail className="h-4.5 w-4.5" id="footer-icon-mail" />,
      href: "mailto:muniir669@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-[#030712] border-t border-white/[0.04] mt-24">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-white/[0.04]">
          
          {/* Brand Logo and descriptor */}
          <div className="space-y-1.5" id="footer-brand">
            <h3 className="text-lg font-extrabold tracking-tight text-white flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-primary flex items-center justify-center">
                <span className="text-[10px] font-black text-black">D</span>
              </div>
              Diinbadan<span className="text-primary">e</span>
            </h3>
            <p className="text-xs text-gray-500 font-mono tracking-wider uppercase">
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
                className="p-2 bg-white/[0.02] border border-white/[0.05] text-gray-400 hover:text-primary hover:border-primary/20 hover:bg-primary-light rounded-lg transition-all duration-200"
                aria-label={social.label}
                id={`footer-social-link-${idx}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom micro metadata */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-gray-500 font-mono" id="footer-bottom">
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
