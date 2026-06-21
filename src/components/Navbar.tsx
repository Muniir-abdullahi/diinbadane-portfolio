import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Process", href: "#process" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background dark tint scroll trigger
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120; // offset

      for (const link of navLinks) {
        const id = link.href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(id);
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3" 
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
        {/* Brand Wordmark with premium layout */}
        <a 
          href="#hero" 
          id="nav-logo"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="group flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900 focus:outline-none"
        >
          <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            <span className="text-[14px] font-black text-white">D</span>
          </div>
          <span>
            Diinbadan<span className="text-primary transition-all group-hover:text-primary-dark">e</span>
          </span>
        </a>

        {/* Desktop Navigation Link Cluster */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/80 border border-slate-200/60 rounded-full p-1.5">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                id={`nav-${id}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[13px] font-medium px-4 py-1.5 rounded-full transition-all duration-200 relative ${
                  isActive 
                    ? "text-primary bg-primary-light font-bold" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Floating Call To Action */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-primary/10 transition-all hover:scale-105"
          >
            Hire Contractor
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        {/* Mobile drawer toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-xl p-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 md:hidden border border-slate-200"
          aria-label="Toggle navigation drawer"
        >
          {isOpen ? <X className="h-5 w-5" id="icon-close" /> : <Menu className="h-5 w-5" id="icon-menu" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full w-full bg-white/95 border-b border-slate-200 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6 max-h-[80vh] overflow-y-auto">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Navigation System</p>
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.name}
                    id={`mobile-nav-${id}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-sm font-semibold py-3.5 px-4 rounded-xl transition-all flex items-center justify-between ${
                      isActive 
                        ? "bg-primary-light text-primary border-l-4 border-primary pl-4" 
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                  </a>
                );
              })}
              
              <div className="mt-4 pt-4 border-t border-white/[0.05]">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-black text-sm font-extrabold py-3.5 rounded-xl shadow-lg transition-transform"
                >
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
