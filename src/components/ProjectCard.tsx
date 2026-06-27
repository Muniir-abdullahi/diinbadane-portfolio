import React from "react";
import { ArrowUpRight, ShoppingCart, LayoutGrid } from "lucide-react";
import { OwnProject } from "../lib/data";

interface ProjectCardProps {
  key?: React.Key;
  project: OwnProject;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isLive = project.link && project.link !== "#";
  const category = "SaaS - Monthly";
  const Icon = project.id === "nidaamflow" ? LayoutGrid : ShoppingCart;

  return (
    <article 
      id={`project-card-${index}`}
      className="group flex h-full flex-col rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-800/40 p-6 shadow-sm transition-all hover:-translate-y-1.5 hover:border-primary hover:shadow-soft dark:shadow-none dark:hover:bg-slate-800/60"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary dark:bg-primary/20">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {category}
        </span>
      </div>
      
      <h3 id={`project-title-${index}`} className="mt-6 font-sans text-xl font-bold text-brand-navy dark:text-white leading-tight">
        {project.name}
      </h3>
      
      <p id={`project-desc-${index}`} className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {project.description}
      </p>
      
      {isLive ? (
        <a 
          id={`project-link-${index}`}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-7 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group"
        >
          View system <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      ) : (
        <span className="mt-auto pt-7 text-sm text-slate-500 font-medium">
          Coming soon
        </span>
      )}
    </article>
  );
}
