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
          <div className="lg:col-span-7 space-y-8">
            {personalDetails.bioStory.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="text-lg sm:text-xl md:text-2xl text-apple-dark font-normal leading-relaxed tracking-tight"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Quote Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="p-6 sm:p-8 rounded-3xl bg-apple-surface border border-black/[0.06] mt-10"
            >
              <p className="text-base sm:text-lg text-apple-dark font-medium leading-snug">
                "Technology works best when it removes friction. My goal is to build web applications that make complex problems feel simple and seamless."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-apple-dark text-white flex items-center justify-center font-bold text-xs">
                  SA
                </div>
                <div>
                  <span className="text-xs font-semibold text-apple-dark block">Sachini Ayeshika</span>
                  <span className="text-[11px] text-apple-subtle block">ICT Undergraduate • University of Vavuniya</span>
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
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-apple-sm hover:shadow-apple-md transition-all duration-300 group"
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
