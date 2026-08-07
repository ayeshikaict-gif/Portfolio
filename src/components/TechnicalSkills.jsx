import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Cpu, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  languages: Code2,
  web: Globe,
  engineering: Cpu,
  tools: Wrench
};

export default function TechnicalSkills() {
  const [activeCategory, setActiveCategory] = useState(skillsData.categories[0].id);

  const currentCategoryObj = skillsData.categories.find(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-36 bg-apple-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-semibold text-apple-subtle block mb-3"
          >
            TECHNICAL CAPABILITIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-apple-dark tracking-tight leading-[1.12] font-display"
          >
            Technology I work with.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-apple-subtle font-normal mt-4"
          >
            A curated suite of modern web engineering stack, programming paradigms, and software practices.
          </motion.p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-12 border-b border-black/[0.06]">
          {skillsData.categories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code2;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold tracking-tight whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-apple-dark text-white shadow-apple-md scale-[1.02]'
                    : 'bg-apple-surface text-apple-dark hover:bg-apple-surfaceHover border border-black/[0.04]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Description Panel */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-apple-surface border border-black/[0.06]">
              <span className="text-xs uppercase tracking-widest font-bold text-apple-accent block mb-2">
                Category Specification
              </span>
              <h3 className="text-2xl font-bold text-apple-dark mb-3 font-display">
                {currentCategoryObj.title}
              </h3>
              <p className="text-sm text-apple-subtle leading-relaxed mb-6">
                {currentCategoryObj.description}
              </p>
              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-apple-subtle">
                <span>{currentCategoryObj.skills.length} Technical Units</span>
                <span className="font-mono">Updated 2026</span>
              </div>
            </div>

            {/* Right Interactive Skill Chips Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentCategoryObj.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-apple-sm hover:shadow-apple-md hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-apple-dark group-hover:text-apple-accent transition-colors font-display">
                      {skill.name}
                    </h4>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/[0.04] text-apple-subtle">
                      {skill.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-apple-subtle font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{skill.type}</span>
                  </div>

                  {/* Subtle hover gradient bar at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-apple-accent to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
