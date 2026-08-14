import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, BookOpen, ChevronRight, Building2, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Education() {
  const [expandedArea, setExpandedArea] = useState(null);
  const edu = personalDetails.education;

  return (
    <section id="education" className="py-24 md:py-36 bg-[#090d16] text-white relative border-y border-slate-800/80 overflow-hidden">
      {/* Background Subtle Gradient Halos */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-bold text-sky-400 block mb-3"
          >
            EDUCATION & QUALIFICATIONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-display"
          >
            Building a strong foundation in technology.
          </motion.h2>
        </div>

        {/* Dark Accent Spec Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {edu.qualifications.map((q, idx) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#0f172a] rounded-3xl p-7 border border-slate-800 shadow-xl hover:border-slate-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle Card Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/15 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Top Row: Logo & Status Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white p-1.5 shrink-0 flex items-center justify-center overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={q.logoUrl}
                      alt={q.institution}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>

                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border ${
                    q.status === 'Undergraduate'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${q.status === 'Undergraduate' ? 'bg-emerald-400 animate-pulse' : 'bg-sky-400'}`} />
                    {q.status}
                  </span>
                </div>

                {/* Badge Period */}
                <span className="text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider block mb-1">
                  {q.badge}
                </span>

                {/* Qualification Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display leading-tight group-hover:text-sky-300 transition-colors duration-300">
                  {q.degree}
                </h3>

                {/* Institution Name */}
                <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-2 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{q.institution}</span>
                </p>
                <p className="text-xs text-slate-400 font-medium mt-0.5 pl-5">
                  {q.subText}
                </p>
              </div>

              {/* Bottom Academic Scope Card */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/80">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Academic Scope
                  </span>
                  <p className="text-xs text-slate-200 font-medium leading-relaxed">
                    {q.focus}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Coursework Modules Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f172a] rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-sky-400 block">
                SPECIALIZED MODULES
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mt-0.5">
                Core Academic Focus Areas & Coursework
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-400">
              Interactive Modules
            </span>
          </div>

          {/* Module Tiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {edu.relevantAreas.map((area, idx) => {
              const isExpanded = expandedArea === area.id;
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setExpandedArea(isExpanded ? null : area.id)}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 font-mono text-xs font-bold border border-slate-700 shadow-xs group-hover:bg-sky-500 group-hover:text-white transition-colors">
                        0{idx + 1}
                      </div>
                      <h4 className="text-base font-bold text-white font-display group-hover:text-sky-300 transition-colors">
                        {area.title}
                      </h4>
                    </div>

                    <div className={`p-1.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 transition-transform duration-300 ${isExpanded ? 'rotate-90 text-sky-400' : ''}`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-300 leading-relaxed font-medium"
                      >
                        {area.desc}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
