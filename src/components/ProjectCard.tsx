import React, { useState } from "react";
import { ExternalLink, Check, ShieldAlert, BadgeInfo, CheckCircle, ChevronRight, Sparkles } from "lucide-react";
import { OwnProject } from "../lib/data";

interface ProjectCardProps {
  key?: React.Key | number | string;
  project: OwnProject;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "case-study">("overview");
  const isNidaam = project.id === "nidaamflow";

  const renderVisualMock = () => {
    return (
      <div 
        className={`w-full h-56 flex items-center justify-center relative overflow-hidden rounded-t-2xl border-b border-white/[0.06] transition-all duration-300 ${
          isNidaam 
            ? "bg-gradient-to-br from-[#0F172A] to-[#1E293B]" 
            : "bg-gradient-to-br from-[#0b0c10] to-[#1f2833]"
        }`}
      >
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1D9E75_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
        
        {/* Glowing orb background */}
        <div className={`absolute h-40 w-40 rounded-full blur-[60px] opacity-20 ${isNidaam ? "bg-[#2ee59d]/60" : "bg-emerald-500/50"}`} />

        {/* High-Fidelity UI Simulator Dashboard */}
        <div className="relative z-10 w-11/12 max-w-[420px] bg-[#030712]/90 border border-white/[0.08] rounded-xl shadow-2xl p-4 transform translate-y-3 hover:translate-y-1 transition-all duration-300 group-hover:scale-[1.01]">
          {/* Header */}
          <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.04]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
              <span className="text-[9px] font-mono text-gray-500 mt-0.5 tracking-wider">
                {isNidaam ? "nidaamflow.app" : "rukunpos.com"}
              </span>
            </div>
            <div className="h-4.5 bg-primary-light/20 border border-primary/20 rounded px-2 flex items-center">
              <span className="text-[8px] font-bold text-primary font-mono select-none">Production Live</span>
            </div>
          </div>

          {/* Body Content according to app type */}
          {isNidaam ? (
            <div className="space-y-3">
              {/* Stats meters */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/[0.02] border border-white/[0.04] rounded p-1.5 text-center">
                  <span className="block text-[8px] text-gray-500 uppercase">Sales Leads</span>
                  <span className="text-[11px] font-black font-mono text-primary">84 Active</span>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.04] rounded p-1.5 text-center">
                  <span className="block text-[8px] text-gray-500 uppercase">Monthly Rev</span>
                  <span className="text-[11px] font-black font-mono text-[#2ee59d]">$4,850</span>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.04] rounded p-1.5 text-center">
                  <span className="block text-[8px] text-gray-500 uppercase">WhatsApp API</span>
                  <span className="text-[11px] font-black font-mono text-white">99% Sent</span>
                </div>
              </div>
              {/* Progress visual bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[8px] text-gray-500 font-mono">
                  <span>API LATENCY</span>
                  <span>95ms Response</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-[#2ee59d] rounded-full w-[14%]" />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Retail cart grid */}
              <div className="bg-white/[0.01] border border-white/[0.04] rounded-lg p-2 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-bold text-white block">Stock Item #596</span>
                  <span className="text-[8px] text-gray-500 font-mono">15 Units / Retail Basket</span>
                </div>
                <span className="text-[11px] font-black font-mono text-primary">$35.00</span>
              </div>
              {/* Register cash details */}
              <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 pt-1">
                <span>Response: 0.15s</span>
                <span className="text-[#2ee59d]">EVC Plus Gateway Live</span>
              </div>
            </div>
          )}

        </div>
      </div>
    );
  };

  return (
    <div 
      id={`project-card-${index}`}
      className="bg-white/[0.02] border border-white/[0.06] rounded-2xl shadow-2xl flex flex-col hover:border-primary/20 transition-all duration-300 group overflow-hidden"
    >
      {/* Decorative vector showcase */}
      {renderVisualMock()}

      {/* Tabs navigation for high-fidelity case study toggle */}
      <div className="flex bg-white/[0.01] border-b border-white/[0.04] px-6 py-2.5 justify-between items-center text-xs">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "overview" 
                ? "bg-primary text-black" 
                : "text-gray-400 hover:text-white"
            }`}
          >
            Overview
          </button>
          
          <button
            onClick={() => setActiveTab("case-study")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1 ${
              activeTab === "case-study" 
                ? "bg-white/[0.06] text-primary" 
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Case Study
          </button>
        </div>

        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
          ACTIVE SAAS SYSTEM
        </span>
      </div>

      {/* Main Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        
        {activeTab === "overview" ? (
          /* OVERVIEW LAYOUT */
          <div className="flex-grow flex flex-col" id={`project-overview-${index}`}>
            <div className="mb-4">
              <h3 id={`project-title-${index}`} className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-xs text-primary font-semibold mt-0.5">{project.tagline}</p>
            </div>

            <p id={`project-desc-${index}`} className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            {/* Metrics pills */}
            <div className="grid grid-cols-3 gap-2.5 mb-6" id={`project-metrics-${index}`}>
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-2.5 text-center">
                  <span className="block text-[10px] font-bold text-[#2ee59d]">{metric.value}</span>
                  <span className="block text-[8px] text-gray-500 font-medium uppercase mt-0.5">{metric.label}</span>
                </div>
              ))}
            </div>

            {/* Tech badges stack */}
            <div id={`project-stack-${index}`} className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.04]">
              {project.stack.map((tech, i) => (
                <span 
                  key={i} 
                  className="bg-white/[0.03] text-gray-400 border border-white/[0.05] px-2.5 py-1 rounded text-[10px] font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ) : (
          /* CASE STUDY DETAILS (Problem, Solution, Results) */
          <div className="flex-grow flex flex-col text-left space-y-5" id={`project-casestudy-${index}`}>
            {/* Problem Card block */}
            <div className="bg-red-950/15 border border-red-900/25 rounded-xl p-4">
              <span className="text-[9px] font-bold text-red-400 uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                <ShieldAlert className="h-3.5 w-3.5" /> Operational Challenge
              </span>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution Block */}
            <div className="bg-emerald-950/15 border border-emerald-900/20 rounded-xl p-4">
              <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                <CheckCircle className="h-3.5 w-3.5" /> Engineered Solution
              </span>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Measurable Impact Results */}
            <div className="space-y-2 pt-2">
              <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">
                MEASURED BUSINESS IMPACT:
              </span>
              {project.results.map((res, i) => (
                <div key={i} className="flex items-start gap-2 text-[11px] text-gray-400">
                  <Check className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{res}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Live System Anchor */}
        <a 
          id={`project-link-${index}`}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark hover:scale-[1.01] text-black px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 shadow-md"
        >
          Access Active System Panel
          <ExternalLink className="h-3.5 w-3.5 text-black" />
        </a>
      </div>
    </div>
  );
}
