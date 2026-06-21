import React from "react";
import { ArrowUpRight } from "lucide-react";
import { OwnProject } from "../lib/data";

interface ProjectCardProps {
  project: OwnProject;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isLive = project.link && project.link !== "#";
  const category = project.id === "nidaamflow" ? "ENTERPRISE CORE SAAS" : "CLOUD POINT-OF-SALE";

  return (
    <div 
      id={`project-card-${index}`}
      className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between min-h-[320px]"
    >
      <div className="space-y-4">
        {/* Eyebrow Label */}
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
          {category}
        </span>

        {/* Project Name */}
        <h3 id={`project-title-${index}`} className="text-xl font-bold text-slate-900 leading-tight">
          {project.name}
        </h3>

        {/* Description */}
        <p id={`project-desc-${index}`} className="text-sm text-slate-600 leading-relaxed">
          {project.description}
        </p>

        {/* Stack Badges */}
        <div id={`project-stack-${index}`} className="flex flex-wrap gap-1.5 pt-2">
          {project.stack.map((tech, i) => (
            <span 
              key={i} 
              id={`project-tech-${index}-${i}`}
              className="bg-slate-100 text-slate-700 border border-slate-200/40 px-2.5 py-1 rounded text-[10px] font-mono font-bold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Link Row */}
      <div className="pt-6 border-t border-slate-100 mt-6">
        {isLive ? (
          <a 
            id={`project-link-${index}`}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-all group"
          >
            Visit project
            <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <span className="text-sm text-slate-400 font-medium">
            Coming soon
          </span>
        )}
      </div>
    </div>
  );
}
