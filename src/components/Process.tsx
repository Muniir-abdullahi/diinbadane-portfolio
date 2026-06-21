import React from "react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      description: "Understanding the problem, the users, and what success looks like before writing any code."
    },
    {
      num: "02",
      title: "Planning",
      description: "Mapping out architecture, data models, and the right tech choices for the problem at hand."
    },
    {
      num: "03",
      title: "Build",
      description: "Clean, maintainable code with regular check-ins — no black-box development."
    },
    {
      num: "04",
      title: "Deploy & Support",
      description: "Shipping to production and staying available for fixes, improvements, and scaling needs."
    }
  ];

  return (
    <div className="bg-slate-50 w-full">
      <section id="process" className="py-24 px-6 max-w-5xl mx-auto container relative">
        {/* Section Header */}
        <div className="mb-16">
          <span 
            id="process-label"
            className="text-xs font-bold tracking-widest text-primary uppercase block mb-2"
          >
            How I Work
          </span>
          <h2 
            id="process-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2"
          >
            A methodical blueprint from discovery to global deployment
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            I apply a predictable, multi-phase methodology that mitigates design discrepancies, maximizes compilation speeds, and secures structural integrity.
          </p>
        </div>

        {/* Steps visual flow */}
        <div 
          id="process-steps-container"
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
        >
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="flex flex-col relative"
              id={`process-step-item-${idx}`}
            >
              {/* Number behind title */}
              <span className="text-5xl font-black text-gray-200 select-none opacity-80 block tracking-tight font-mono">
                {step.num}
              </span>

              {/* Title and Description */}
              <div className="mt-[-10px] space-y-2 z-10">
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
