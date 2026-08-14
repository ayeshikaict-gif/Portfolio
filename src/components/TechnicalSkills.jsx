import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Cpu, Wrench, Database, Box, Palette, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  all: Sparkles,
  languages: Code2,
  web: Globe,
  frameworks: Box,
  database: Database,
  engineering: Cpu,
  design: Palette,
  tools: Wrench
};

export default function TechnicalSkills() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Prepare categories list with 'All' at the start
  const categoriesList = [
    {
      id: 'all',
      title: 'All Technologies',
      description: 'A comprehensive suite of modern web engineering stack, programming paradigms, databases, software practices, and UI/UX design tools.',
    },
    ...skillsData.categories
  ];

  const currentCategoryObj = categoriesList.find(c => c.id === activeCategory) || categoriesList[0];

  // Get skills to display: either all skills flattened or category-specific skills
  const skillsToDisplay = activeCategory === 'all'
    ? skillsData.categories.flatMap(c => c.skills.map(s => ({ ...s, categoryTitle: c.title })))
    : (currentCategoryObj.skills || []);

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
          {categoriesList.map((cat) => {
            const Icon = categoryIcons[cat.id] || Layers;
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

        {/* List-Type Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {(activeCategory === 'all'
              ? skillsData.categories
              : skillsData.categories.filter(c => c.id === activeCategory)
            ).map((category, catIdx) => {
              const Icon = categoryIcons[category.id] || Layers;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.05 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] shadow-apple-sm hover:shadow-apple-md transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Category Title & Icon */}
                    <div className="lg:col-span-4 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-apple-surface flex items-center justify-center text-apple-dark shrink-0 border border-black/[0.04]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-apple-dark font-display">
                          {category.title}
                        </h3>
                        <p className="text-xs text-apple-subtle leading-relaxed mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills Compact List Grid */}
                    <div className="lg:col-span-8 flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-apple-surface border border-black/[0.06] hover:bg-white hover:shadow-apple-sm hover:border-black/10 transition-all group"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="text-sm font-semibold text-apple-dark group-hover:text-apple-accent transition-colors font-display">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-black/[0.04] text-apple-subtle font-mono">
                            {skill.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
