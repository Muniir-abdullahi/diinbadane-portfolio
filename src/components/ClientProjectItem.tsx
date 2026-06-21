import React, { useState } from "react";
import { ShieldCheck, ChevronDown, ChevronUp, Lock, RefreshCw, KeyRound, BarChart2 } from "lucide-react";
import { ClientProject } from "../lib/data";

interface ClientProjectItemProps {
  key?: React.Key | number | string;
  project: ClientProject;
  index: number;
}

export default function ClientProjectItem({ project, index }: ClientProjectItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLead = project.role.toLowerCase().includes("lead");
  
  return (
    <div 
      id={`client-project-item-${index}`}
      className="bg-white/[0.01] border border-white/[0.05] rounded-2xl hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300"
    >
      {/* Visual Header Trigger Row */}
      <div 
        className="p-5 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="space-y-1.5 flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Padlock status */}
            <div className="p-1 px-2 rounded-md bg-white/[0.02] border border-white/[0.05] text-[10px] text-amber-500 font-mono tracking-widest uppercase flex items-center gap-1">
              <Lock className="h-3 w-3 text-amber-500" />
              Confidential Work
            </div>

            {/* Role Badge */}
            <span 
              id={`client-project-role-${index}`}
              className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-extrabold tracking-wide uppercase ${
                isLead ? "bg-primary-light text-[#2ee59d]" : "bg-slate-850 text-slate-400"
              }`}
            >
              {project.role}
            </span>
          </div>

          <h4 id={`client-project-title-${index}`} className="text-sm md:text-base font-bold text-white flex items-center gap-2">
            {project.name}
          </h4>

          <p id={`client-project-desc-${index}`} className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Desktop interactive stack column & trigger */}
        <div className="flex items-center gap-4 self-stretch md:self-auto justify-between border-t border-white/[0.04] md:border-none pt-3 md:pt-0">
          <div className="flex flex-wrap gap-1 md:justify-end max-w-[220px]">
            {project.stack.slice(0, 3).map((tech, i) => (
              <span 
                key={i} 
                id={`client-project-tech-${index}-${i}`}
                className="bg-white/[0.02] text-gray-400 border border-white/[0.04] px-2 py-0.5 rounded text-[9px] font-bold"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="bg-white/[0.01] text-gray-500 border border-transparent px-2 py-0.5 rounded text-[9px]">
                +{project.stack.length - 3} more
              </span>
            )}
          </div>

          <button 
            className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:text-primary transition-colors text-gray-400"
            aria-label="Toggle Details"
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Expanded Case-Study Block */}
      {isExpanded && (
        <div className="px-5 pb-6 md:px-6 md:pb-8 border-t border-white/[0.04] pt-6 space-y-6" id={`client-project-details-${index}`}>
          
          {/* Detailed challenge & solution parameters if they exist, otherwise summary cards */}
          {project.problem ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-red-950/10 border border-red-900/15 rounded-xl p-4">
                <h5 className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1.5">NDA Technical Challenge</h5>
                <p className="text-xs text-gray-300 leading-relaxed">{project.problem}</p>
              </div>
              <div className="bg-emerald-950/10 border border-emerald-900/15 rounded-xl p-4">
                <h5 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1.5">Architected Solution</h5>
                <p className="text-xs text-gray-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>
          ) : (
            <div className="bg-white/[0.01] border border-white/[0.03] rounded-xl p-4">
              <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Architecture Outline</h5>
              <p className="text-xs text-gray-300 leading-relaxed">
                System optimized for enterprise scale and multi-tenant isolation. Security layer isolates customer requests, authenticating endpoints in under 150ms.
              </p>
            </div>
          )}

          {/* Metrics & Performance records */}
          {project.metrics && (
            <div className="bg-[#030712]/40 rounded-xl p-4 border border-white/[0.04]">
              <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <BarChart2 className="h-3.5 w-3.5 text-primary" /> System Performance Records:
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="block text-lg font-black text-white font-mono">{metric.value}</span>
                    <span className="block text-[8px] text-gray-500 font-bold uppercase tracking-wider">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results checkoff */}
          {project.results && (
            <div className="space-y-2">
              <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Achieved Milestones:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.results.map((res, i) => (
                  <div key={i} className="flex gap-2 text-xs text-gray-300">
                    <ShieldCheck className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full stacks tag loop */}
          <div className="pt-4 border-t border-white/[0.04]">
            <h5 className="text-[9px] font-bold tracking-widest text-gray-500 uppercase mb-2">FULL INTEGRATION STACK:</h5>
            <div className="flex flex-wrap gap-1.5">
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

        </div>
      )}
    </div>
  );
}
