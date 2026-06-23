import React from "react";
import { ArrowUpRight } from "lucide-react";
import { OwnProject } from "../lib/data";

interface ProjectCardProps {
  key?: React.Key;
  project: OwnProject;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isLive = project.link && project.link !== "#";
  const category = project.id === "nidaamflow" ? "CORE SAAS" : "CLOUD POINT-OF-SALE";

  return (
    <div 
      id={`project-card-${index}`}
      className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 rounded-xl p-7 hover:border-slate-300 dark:hover:bg-slate-800/60 transition-colors flex flex-col justify-between min-h-[320px]"
    >
      <div className="space-y-4">
        {/* Eyebrow Label */}
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500 block">
          {category}
        </span>

        {/* Project Name */}
        <h3 id={`project-title-${index}`} className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
          {project.name}
        </h3>

        {/* Description */}
        <p id={`project-desc-${index}`} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {/* Stack Badges */}
        <div id={`project-stack-${index}`} className="flex flex-wrap gap-1.5 pt-2">
          {project.stack.map((tech, i) => (
            <span 
              key={i} 
              id={`project-tech-${index}-${i}`}
              className="bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/5 px-2 py-0.5 rounded text-[10px] font-mono font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Link Row */}
      <div className="pt-6 border-t border-slate-100 dark:border-white/5 mt-6">
        {isLive ? (
          <a 
            id={`project-link-${index}`}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors group"
          >
            Visit project
            <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <span className="text-sm text-slate-500 font-medium">
            Coming soon
          </span>
        )}
      </div>
    </div>
  );
}
