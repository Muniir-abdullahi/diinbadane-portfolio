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
      className="bg-white border border-gray-200 rounded-xl p-5 mb-3 hover:border-gray-300 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
    >
      {/* Left Column: Lock, Name, Description, and Stack */}
      <div className="space-y-2 flex-1 w-full">
        <div className="flex items-center gap-2">
          <Lock className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
          <h4 className="font-semibold text-slate-900 text-sm md:text-base">
            {project.name}
          </h4>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          {project.description}
        </p>
        
        {/* Full Integration Stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech, i) => (
            <span 
              key={i} 
              className="bg-slate-50 text-slate-600 border border-slate-200/50 px-2 py-0.5 rounded text-[10px] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right Column: Role Badge */}
      <div className="flex-shrink-0 md:self-center">
        <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
          {project.role}
        </span>
      </div>
    </div>
  );
}
