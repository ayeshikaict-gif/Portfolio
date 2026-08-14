import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, BookOpen, ChevronRight, Building2, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Education() {
  const [expandedArea, setExpandedArea] = useState(null);
  const edu = personalDetails.education;

  return (
    <section id="education" className="py-24 md:py-36 bg-apple-surface relative border-y border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-bold text-slate-600 block mb-3"
          >
            EDUCATION & QUALIFICATIONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-display"
          >
            Building a strong foundation in technology.
          </motion.h2>
        </div>

        {/* Clean White Spec Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {edu.qualifications.map((q, idx) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-7 border border-black/[0.08] shadow-apple-sm hover:shadow-apple-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Top Row: Logo & Status Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-black/[0.08] p-1.5 shrink-0 flex items-center justify-center overflow-hidden shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={q.logoUrl}
                      alt={q.institution}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>

                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border ${
                    q.status === 'Undergraduate'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-slate-100 text-slate-800 border-slate-200'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${q.status === 'Undergraduate' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-500'}`} />
                    {q.status}
                  </span>
                </div>

                {/* Badge Period */}
                <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-bold text-slate-600 bg-slate-100 border border-black/[0.04] mb-3">
                  {q.badge}
                </span>

                {/* Qualification Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display leading-tight group-hover:text-slate-700 transition-colors duration-300">
                  {q.degree}
                </h3>

                {/* Institution Name */}
                <p className="text-xs sm:text-sm font-bold text-slate-800 mt-2 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>{q.institution}</span>
                </p>
                <p className="text-xs text-slate-500 font-medium mt-0.5 pl-5">
                  {q.subText}
                </p>
              </div>

              {/* Bottom Academic Scope Card */}
              <div className="mt-6 pt-4 border-t border-black/[0.06]">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-black/[0.04]">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                    Academic Scope
                  </span>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {q.focus}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
