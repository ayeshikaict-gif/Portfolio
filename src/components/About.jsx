import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Layout, Lightbulb, Compass, Award } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

const highlightItems = [
  { icon: Layout, title: "Web Development", desc: "Crafting intuitive, responsive web platforms using modern web standards." },
  { icon: Code, title: "Software Engineering", desc: "Applying robust SDLC principles, clean OOP patterns, and quality code structures." },
  { icon: Lightbulb, title: "Modern UX Design", desc: "Focusing on simple, accessible visual hierarchies and delightful interactions." },
  { icon: Compass, title: "Continuous Learning", desc: "Actively gaining certifications in React, Full-Stack, and Python engineering." }
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-apple-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest font-semibold text-apple-subtle block mb-3"
          >
            ABOUT
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-apple-dark tracking-tight leading-[1.12] font-display"
          >
            Curious about technology. <br />
            <span className="text-apple-subtle font-normal">
              Focused on creating useful things.
            </span>
          </motion.h2>
        </div>

        {/* Storytelling Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Paragraphs Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-apple-sm space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
              >
                I am a motivated <strong className="font-semibold text-slate-900">ICT undergraduate</strong> with a strong interest in technology and software development. My academic journey has helped me build deep knowledge in <span className="font-medium text-slate-900">programming, web technologies, databases, software engineering</span>, and <span className="font-medium text-slate-900">system development</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
              >
                I enjoy building <strong className="font-semibold text-slate-900">practical projects</strong> that combine rich functionality with attractive and <span className="font-medium text-slate-900">user-friendly interfaces</span>. I have worked on web applications, desktop applications, database-related systems, and <span className="font-medium text-slate-900">UI/UX design</span> projects.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
              >
                I am a <strong className="font-semibold text-slate-900">continuous learner</strong> who enjoys exploring new technologies and strengthening my technical and professional skills through real-world projects, certifications, and independent learning.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-2 border-t border-slate-100"
              >
                My goal is to <strong className="font-semibold text-slate-900">build a successful career in the IT industry</strong> and contribute to innovative, impactful technology solutions.
              </motion.p>
            </div>

            {/* Quote Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-md border border-slate-800"
            >
              <p className="text-base sm:text-lg text-slate-100 font-medium leading-snug">
                "Technology works best when it removes friction. My goal is to build web applications that make complex problems feel simple and seamless."
              </p>
              <div className="mt-4 flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0 bg-slate-700 shadow-sm">
                  <img
                    src="/profile.png"
                    alt="Sachini Ayeshika"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">Sachini Ayeshika</span>
                  <span className="text-[11px] text-slate-400 block">ICT Undergraduate • University of Vavuniya</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlightItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-apple-sm hover:shadow-apple-md transition-all duration-300 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-apple-surface flex items-center justify-center text-apple-dark group-hover:bg-apple-dark group-hover:text-white transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-apple-dark mb-1 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-apple-subtle leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
