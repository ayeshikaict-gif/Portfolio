import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowUpRight, CheckCircle2, ChevronRight, BookOpen, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-24 md:py-36 bg-apple-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-semibold text-apple-subtle block mb-3"
          >
            CERTIFICATIONS & CREDENTIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-apple-dark tracking-tight leading-[1.12] font-display"
          >
            Always learning. <br />
            <span className="text-apple-subtle font-normal">Always improving.</span>
          </motion.h2>
        </div>

        {/* Minimal Expandable Rows Container */}
        <div className="bg-apple-surface rounded-3xl p-6 sm:p-10 border border-black/[0.06] shadow-apple-sm">
          <div className="flex items-center justify-between pb-6 mb-2 border-b border-black/[0.08] text-xs font-bold text-apple-subtle uppercase tracking-wider">
            <span>Certification Name & Track</span>
            <span className="hidden sm:inline-block">Issuing Institution & Verification</span>
          </div>

          <div className="divide-y divide-black/[0.06]">
            {certificationsData.map((cert, idx) => {
              const isExpanded = activeCert === cert.id;

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  onClick={() => setActiveCert(isExpanded ? null : cert.id)}
                  className="py-6 group cursor-pointer transition-all duration-300 px-4 rounded-2xl hover:bg-white hover:shadow-apple-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-apple-subtle font-bold w-6">
                        0{cert.id}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-apple-dark group-hover:text-apple-accent transition-colors font-display">
                          {cert.title}
                        </h3>
                        <span className="sm:hidden text-xs text-apple-subtle block mt-0.5 font-medium">
                          {cert.provider} • {cert.year}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline-block text-sm font-semibold text-apple-dark">
                        {cert.provider}
                      </span>
                      <span className="hidden md:inline-block px-3 py-1 rounded-full text-xs font-mono bg-black/[0.04] text-apple-subtle">
                        {cert.badge}
                      </span>
                      
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-black/[0.04] group-hover:bg-apple-dark group-hover:text-white flex items-center justify-center transition-all"
                        title="Verify Certificate on LinkedIn"
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>

                  {/* Expandable Info Drawer */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-black/[0.06] text-xs text-apple-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1 text-apple-dark font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <span>Competencies & Modules Mastered:</span>
                        </div>
                        <p className="text-sm text-apple-dark font-medium pl-6">
                          {cert.skillsLearned}
                        </p>
                      </div>

                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-apple-dark text-white font-medium text-xs hover:bg-black transition-all shrink-0 self-start sm:self-auto shadow-apple-sm"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
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
