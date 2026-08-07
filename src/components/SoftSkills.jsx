import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Users, MessageSquare, Clock, Zap, Network } from 'lucide-react';
import { softSkillsData } from '../data/portfolioData';

const iconMap = {
  "Problem Solving": Brain,
  "Communication": MessageSquare,
  "Teamwork": Users,
  "Time Management": Clock,
  "Adaptability": Zap,
  "Quick Learning": Sparkles,
  "Professional Networking": Network
};

export default function SoftSkills() {
  return (
    <section className="py-24 md:py-32 bg-apple-surface border-y border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-semibold text-apple-subtle block mb-3"
          >
            INTERPERSONAL ATTRIBUTES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-apple-dark tracking-tight leading-[1.12] font-display"
          >
            Beyond the code.
          </motion.h2>
        </div>

        {/* Kinetic Word & Attribute Cloud */}
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {softSkillsData.map((skill, idx) => {
            const Icon = iconMap[skill] || Sparkles;
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-black/[0.08] shadow-apple-sm hover:shadow-apple-md hover:border-black/20 transition-all duration-300 cursor-default"
              >
                <div className="w-8 h-8 rounded-xl bg-apple-surface group-hover:bg-apple-dark group-hover:text-white flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-apple-dark group-hover:text-white transition-colors" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-apple-dark font-display">
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
