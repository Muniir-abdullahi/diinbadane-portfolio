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
      className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none rounded-xl hover:border-slate-300 dark:hover:bg-slate-800/50 transition-colors"
    >
      {/* Left Column: Lock, Name, Description */}
      <div className="space-y-1.5 flex-1 w-full pr-4">
        <div className="flex items-center gap-2.5">
          <Lock className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500 flex-shrink-0" />
          <h4 className="font-semibold text-slate-900 dark:text-white text-base">
            {project.name}
          </h4>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
          {project.description}
        </p>
      </div>

      {/* Right Column: Role Badge */}
      <div className="flex-shrink-0 pl-6 md:pl-0">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 px-2.5 py-1 rounded-md shadow-sm dark:shadow-none">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-500/80" />
          {project.role}
        </span>
      </div>
    </div>
  );
}
