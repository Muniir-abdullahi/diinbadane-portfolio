import React from "react";
import { ownProjects, clientProjects } from "../lib/data";

export default function StatsBar() {
  const stats = [
    {
      value: "5+",
      label: "YEARS EXPERIENCE"
    },
    {
      value: clientProjects.length.toString(),
      label: "CLIENT PROJECTS"
    },
    {
      value: ownProjects.length.toString(),
      label: "PRODUCTS SHIPPED"
    },
    {
      value: "Rukun",
      label: "FOUNDER",
      isHighlighted: true
    }
  ];

  return (
    <section className="bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-white/5 py-10 px-6 w-full transition-colors duration-300">
      <div className="mx-auto max-w-5xl flex flex-row flex-wrap justify-center items-center gap-12 md:gap-14 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[120px]">
            <span
              className={`text-2xl md:text-3xl font-extrabold tracking-tight ${
                stat.isHighlighted ? "text-emerald-600 dark:text-emerald-500" : "text-slate-900 dark:text-white"
              }`}
            >
              {stat.value}
            </span>
            <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-[0.5px] mt-1 font-semibold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
