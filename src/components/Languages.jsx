import React from 'react';
import { motion } from 'framer-motion';
import { Languages as LangIcon, Globe2, CheckCircle2 } from 'lucide-react';
import { languagesData } from '../data/portfolioData';

export default function Languages() {
  return (
    <section className="py-20 md:py-28 bg-apple-bg relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-semibold text-apple-subtle block mb-2"
          >
            COMMUNICATION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-apple-dark tracking-tight font-display"
          >
            Languages
          </motion.h2>
        </div>

        {/* Clean Two-Column Minimal Specification Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languagesData.map((lang, idx) => (
            <motion.div
              key={lang.language}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-apple-surface border border-black/[0.06] flex items-start justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Globe2 className="w-4 h-4 text-apple-accent" />
                  <span className="text-xs uppercase tracking-wider font-bold text-apple-subtle">
                    {lang.proficiency}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-apple-dark font-display mb-1">
                  {lang.language}
                </h3>
                <p className="text-sm text-apple-subtle leading-relaxed">
                  {lang.desc}
                </p>
              </div>

              <div className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-apple-dark border border-black/[0.08] shrink-0">
                {lang.proficiency === 'Native' ? 'Native' : 'Professional'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
