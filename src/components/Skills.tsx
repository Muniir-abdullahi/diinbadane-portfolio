import React from "react";
import { skills } from "../lib/data";
import { motion } from "motion/react";
import { Laptop, Database, Globe, Command, Layers, HardDrive } from "lucide-react";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  // Associate categories with cool relevant icons
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "languages":
        return <Globe className="h-5 w-5 text-[#2ee59d]" />;
      case "frontend hub":
        return <Laptop className="h-5 w-5 text-[#2ee59d]" />;
      case "backend services":
        return <Layers className="h-5 w-5 text-[#2ee59d]" />;
      case "database hub":
        return <Database className="h-5 w-5 text-[#2ee59d]" />;
      case "devops & infrastructure":
        return <HardDrive className="h-5 w-5 text-[#2ee59d]" />;
      default:
        return <Command className="h-5 w-5 text-[#2ee59d]" />;
    }
  };

  return (
    <section id="stack" className="py-24 px-6 max-w-5xl mx-auto container relative">
      <div className="absolute top-[15%] right-[20%] h-[200px] w-[200px] rounded-full bg-primary/5 opacity-20 blur-[80px]" />

      {/* Section Header */}
      <div className="mb-14">
        <span 
          id="skills-label"
          className="text-xs font-bold tracking-widest text-primary uppercase block mb-2"
        >
          TECHNOLOGY STACK
        </span>
        <h2 
          id="skills-heading"
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2"
        >
          Carefully curated, modern stack optimized for horizontal scaling
        </h2>
        <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
          I build modular solutions utilizing fast frameworks, structured relational databases, and secure virtualized servers.
        </p>
      </div>

      {/* Grid of Categories */}
      <motion.div 
        id="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={index}
            id={`skill-category-${index}`}
            variants={itemVariants}
            className="bg-white/[0.02] border border-white/[0.06] hover:border-primary/20 rounded-2xl p-6 shadow-xl hover:shadow-primary/5 hover:bg-white/[0.03] transition-all duration-300 group relative overflow-hidden"
          >
            {/* Top gradient highlight bar */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Category header */}
            <div className="flex items-center gap-3 mb-5 border-b border-white/[0.04] pb-3">
              <div className="p-2 bg-primary-light border border-primary/10 rounded-lg">
                {getCategoryIcon(skillGroup.category)}
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                {skillGroup.category}
              </h3>
            </div>
            
            {/* Pill wrap list */}
            <div className="flex flex-wrap gap-2" id={`skill-pills-list-${index}`}>
              {skillGroup.items.map((item, itemIdx) => (
                <span
                  key={itemIdx}
                  id={`skill-pill-${index}-${itemIdx}`}
                  className="bg-primary-light border border-primary/15 text-[#2ee59d] px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide hover:bg-primary/25 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
