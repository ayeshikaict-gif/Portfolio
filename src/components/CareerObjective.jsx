import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Target } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function CareerObjective() {
  const obj = personalDetails.careerObjective;

  return (
    <section className="py-32 md:py-48 bg-apple-dark text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-apple-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-semibold uppercase tracking-widest text-apple-accent mb-8"
        >
          <Target className="w-3.5 h-3.5" />
          <span>{obj.label}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.08] mb-12 font-display"
        >
          Learning today. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Building tomorrow.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-2xl md:text-3xl text-gray-300 font-normal max-w-4xl mx-auto leading-relaxed tracking-tight"
        >
          "{obj.statement}"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-gray-400 font-mono"
        >
          <span>UNIVERSITY OF VAVUNIYA</span>
          <span>•</span>
          <span>FACULTY OF TECHNOLOGICAL STUDIES</span>
          <span>•</span>
          <span>2026 HORIZON</span>
        </motion.div>
      </div>
    </section>
  );
}
