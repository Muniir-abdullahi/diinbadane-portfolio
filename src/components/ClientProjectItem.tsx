import React from "react";
import { Lock } from "lucide-react";
import { ClientProject } from "../lib/data";

interface ClientProjectItemProps {
  key?: React.Key;
  project: ClientProject;
  index: number;
}

export default function ClientProjectItem({ project, index }: ClientProjectItemProps) {
  return (
    <div 
      id={`client-project-item-${index}`}
      className="bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-white/5 rounded-xl p-5 mb-3 hover:border-slate-300 dark:hover:bg-slate-800/50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
    >
      {/* Left Column: Lock, Name, Description, and Stack */}
      <div className="space-y-2 flex-1 w-full">
        <div className="flex items-center gap-2">
          <Lock className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500 flex-shrink-0" />
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">
            {project.name}
          </h4>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>
        
        {/* Full Integration Stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech, i) => (
            <span 
              key={i} 
              className="bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/5 px-2 py-0.5 rounded text-[10px] font-mono font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right Column: Role Badge */}
      <div className="flex-shrink-0 md:self-center">
        <span className="bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300 text-xs px-2.5 py-1 rounded-full font-medium">
          {project.role}
        </span>
      </div>
    </div>
  );
}
