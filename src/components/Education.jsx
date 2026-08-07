import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, ChevronRight, Building2, Award } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Education() {
  const [expandedArea, setExpandedArea] = useState(null);
  const edu = personalDetails.education;

  return (
    <section id="education" className="py-24 md:py-36 bg-apple-surface relative border-y border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-semibold text-apple-subtle block mb-3"
          >
            EDUCATION & QUALIFICATIONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-apple-dark tracking-tight leading-[1.12] font-display"
          >
            {edu.headline}
          </motion.h2>
        </div>

        {/* Qualifications Stack - Apple Product Specification Cards */}
        <div className="space-y-6 mb-16">
          {edu.qualifications.map((q, idx) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.08] shadow-apple-md hover:shadow-apple-lg transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-white border border-black/[0.1] shadow-apple-sm p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={q.logoUrl}
                      alt={q.institution}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                        q.status === 'Undergraduate'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${q.status === 'Undergraduate' ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                        {q.status}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-apple-subtle bg-black/[0.04]">
                        {q.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-apple-dark font-display leading-tight">
                      {q.degree}
                    </h3>
                    <p className="text-base sm:text-lg text-apple-dark font-semibold mt-1 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-apple-accent" />
                      <span>{q.institution}</span>
                      <span className="text-apple-subtle font-normal">• {q.subText}</span>
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <div className="p-5 rounded-2xl bg-apple-surface border border-black/[0.06] text-left lg:text-right w-full lg:w-auto">
                    <span className="text-xs uppercase tracking-wider text-apple-subtle font-semibold block mb-1">
                      Academic Scope
                    </span>
                    <span className="text-xs sm:text-sm text-apple-dark font-medium leading-relaxed block">
                      {q.focus}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Specification Rows for Core Coursework */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/[0.08] shadow-apple-md">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/[0.08]">
            <h4 className="text-xs uppercase tracking-widest font-bold text-apple-subtle">
              Core Academic Focus Areas & Coursework
            </h4>
            <span className="text-xs text-apple-subtle">Click to view course detail</span>
          </div>

          <div className="divide-y divide-black/[0.06]">
            {edu.relevantAreas.map((area, idx) => {
              const isExpanded = expandedArea === area.id;
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  onClick={() => setExpandedArea(isExpanded ? null : area.id)}
                  className="py-5 cursor-pointer group transition-colors hover:bg-apple-surface/40 px-3 rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-apple-subtle w-6 font-semibold">
                        0{idx + 1}
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-apple-dark group-hover:text-apple-accent transition-colors font-display">
                        {area.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block text-xs font-medium text-apple-subtle">
                        Academic Module
                      </span>
                      <div className={`p-1.5 rounded-full bg-apple-surface text-apple-dark group-hover:bg-apple-dark group-hover:text-white transition-all transform ${isExpanded ? 'rotate-90' : ''}`}>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 ml-10 text-sm text-apple-subtle leading-relaxed pr-4"
                    >
                      <div className="p-4 rounded-xl bg-apple-surface border border-black/[0.04] text-apple-dark font-medium">
                        {area.desc}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
