import React from "react";
import { testimonials } from "../lib/data";
import { Quote, MessageSquareQuote, ShieldAlert } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="bg-slate-50 w-full">
      <section id="testimonials" className="py-24 px-6 max-w-5xl mx-auto container relative">
        <div className="absolute top-[20%] right-[10%] h-[200px] w-[200px] rounded-full bg-primary/10 opacity-10 blur-[90px]" />

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
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2"
          >
            Praise from local founders & platform coordinators
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
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
              className="flex flex-col justify-between p-6 md:p-8 bg-white border border-slate-200/60 rounded-2xl relative group hover:border-primary/20 transition-all duration-300 hover:bg-slate-50"
              id={`testimonial-card-${idx}`}
            >
              {/* Quote Visual Accents */}
              <div className="absolute top-6 right-6 text-slate-100 group-hover:text-primary/10 transition-colors">
                <Quote className="h-10 w-10 rotate-180" />
              </div>

              {/* Testimonial Message Body */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic relative z-10">
                "{test.quote}"
              </p>

              {/* Author details card */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-slate-100">
                {/* Initials circle avatar */}
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary/10 to-primary-light border border-primary/20 flex items-center justify-center font-bold text-xs text-primary font-mono flex-shrink-0">
                  {test.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 tracking-tight">{test.name}</h4>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5 uppercase tracking-wide">
                    {test.role}, <span className="text-primary-darker">{test.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
