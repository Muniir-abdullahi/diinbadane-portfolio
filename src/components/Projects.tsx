import React from "react";
import { ArrowUpRight, Lock, ShieldCheck } from "lucide-react";
import { ownProjects, clientProjects } from "../lib/data";
import ProjectCard from "./ProjectCard";
import ClientProjectItem from "./ClientProjectItem";

export default function Projects() {
  return (
    <div className="bg-slate-50 w-full">
      <section id="projects" className="py-24 px-6 max-w-5xl mx-auto container space-y-24 relative">
        <div className="absolute top-[40%] right-0 h-[300px] w-[300px] rounded-full bg-primary/10 opacity-15 blur-[100px]" />

        {/* SECTION HEADER */}
        <div>
          <span 
            id="projects-label"
            className="text-xs font-bold tracking-widest text-primary uppercase block mb-2"
          >
            Selected Systems Portfolio
          </span>
          <h2 
            id="projects-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2"
          >
            Enterprise architecture & commercial SaaS engines
          </h2>
          <p className="text-sm text-slate-650 max-w-2xl leading-relaxed">
            Explore production-grade digital assets built as direct commercial products or secure client integrations under strict NDA.
          </p>
        </div>

        {/* SUBSECTION A: "My Work" */}
        <div id="projects-own-work" className="space-y-8">
          <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                Commercial Products
                <span className="inline-flex items-center gap-1 bg-primary-light border border-primary/20 text-primary-darker rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                  Active SaaS Suite
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Active web environments engineered under <strong className="text-primary">Rukun Software Studio</strong>.
              </p>
            </div>
            
            <a
              href="https://rukun.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-dark transition-all group"
              id="link-visit-rukun-header"
            >
              Explore Rukun Suite
              <ArrowUpRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Grid for RukunPOS and NidaamFlow */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ownProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* Inline footer CTA */}
          <div className="flex justify-center pt-4" id="own-projects-footer">
            <a
              href="https://rukun.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-primary transition-all group bg-white border border-slate-200 hover:border-primary/20 rounded-full px-5 py-2.5"
              id="link-visit-rukun-footer"
            >
              Explore the complete Rukun brand suite at rukun.app
              <ArrowUpRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-primary" />
            </a>
          </div>
        </div>

        {/* SUBSECTION B: "Client Work (Confidential)" */}
        <div id="projects-client-work" className="space-y-8 pt-10 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                Featured Projects & Integrations
                <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest">
                  <Lock className="h-3 w-3" /> Confidential
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Select contract works delivered under standard NDA. Described with focus on system architectures and specific technical outcomes.
              </p>
            </div>
          </div>

          {/* Multi-row list layout (always single column, full width) */}
          <div className="grid grid-cols-1 gap-5" id="client-projects-list">
            {clientProjects.map((project, index) => (
              <ClientProjectItem key={index} project={project} index={index} />
            ))}
          </div>

          {/* NDA notice */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start gap-3" id="nda-compliance-notice">
            <ShieldCheck className="h-4.5 w-4.5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Confidentiality Note:</strong> Names and branding have been altered under Non-Disclosure Agreements. System architectures and outcomes represent the actual delivery scope.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
