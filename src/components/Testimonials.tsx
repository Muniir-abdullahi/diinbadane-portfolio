import React from "react";
import { testimonials } from "../lib/data";
import { Quote, MessageSquareQuote, ShieldAlert } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-5xl mx-auto container relative">
      <div className="absolute top-[20%] right-[10%] h-[200px] w-[200px] rounded-full bg-[#2ee59d]/5 opacity-15 blur-[90px]" />

      {/* Section Header */}
      <div className="mb-14">
        <span 
          id="testimonials-label"
          className="text-xs font-bold tracking-widest text-primary uppercase block mb-2"
        >
          CLIENT ENDORSEMENTS
        </span>
        <h2 
          id="testimonials-heading"
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2"
        >
          Praise from local founders & platform coordinators
        </h2>
        <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
          See what company leads say about my custom systems architecture, delivery velocity, and support.
        </p>
      </div>

      {/* Grid of client quotes */}
      <div 
        id="testimonials-grid"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map((test, idx) => (
          <div 
            key={idx}
            className="flex flex-col justify-between p-6 md:p-8 bg-white/[0.01] border border-white/[0.04] rounded-2xl relative group hover:border-primary/20 transition-all duration-300 hover:bg-white/[0.03]"
            id={`testimonial-card-${idx}`}
          >
            {/* Quote Visual Accents */}
            <div className="absolute top-6 right-6 text-white/[0.02] group-hover:text-primary/5 transition-colors">
              <Quote className="h-10 w-10 rotate-180" />
            </div>

            {/* Testimonial Message Body */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 italic relative z-10">
              "{test.quote}"
            </p>

            {/* Author details card */}
            <div className="flex items-center gap-3.5 pt-5 border-t border-white/[0.04]">
              {/* Initials circle avatar */}
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary/20 to-[#2ee59d]/20 border border-primary/30 flex items-center justify-center font-bold text-xs text-primary font-mono flex-shrink-0">
                {test.avatar}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-tight">{test.name}</h4>
                <p className="text-[10px] text-gray-500 font-mono mt-0.5 uppercase tracking-wide">
                  {test.role}, <span className="text-[#2ee59d]">{test.company}</span>
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
