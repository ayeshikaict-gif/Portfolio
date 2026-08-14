import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, ArrowRight, GraduationCap, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Hero({ onOpenContactModal }) {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-100"
    >
      {/* Background Soft Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-1/4 w-[500px] h-[350px] bg-gradient-to-r from-blue-300/30 via-indigo-300/30 to-purple-300/30 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Top Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f172a] text-white text-xs font-bold tracking-wider uppercase shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{personalDetails.tagline}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-display"
            >
              Hi, I'm{' '}
              <span className="relative inline-block text-slate-900 underline decoration-slate-300 underline-offset-8 decoration-4">
                Sachini Ayeshika.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight font-display"
            >
              {personalDetails.subheadline}
            </motion.p>

            {/* Bio Paragraph Quote */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl"
            >
              "{personalDetails.bioShort}"
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              {/* Button 1: View My Projects */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#0f172a] text-white font-semibold text-sm hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <Eye className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                <span>View My Projects</span>
              </motion.a>

              {/* Button 2: Download Resume */}
              <motion.a
                href="/resume/Sachini-Ayeshika-CV.pdf"
                download="Sachini-Ayeshika-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-slate-800 font-semibold text-sm border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Download Resume</span>
              </motion.a>

              {/* Button 3: Let's Connect */}
              <motion.button
                onClick={onOpenContactModal}
                whileHover={{ scale: 1.04, x: 2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 px-3 py-3.5 text-slate-800 font-bold text-sm hover:text-black transition-all duration-300"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Profile Photo Showcase Card with Dotted Orbit Ring & Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] flex items-center justify-center shrink-0 my-4"
            >
              {/* Outer Dotted Orbit Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dotted border-slate-400 pointer-events-none"
              />

              {/* Inner Dark Photo Frame Container */}
              <div className="relative w-[230px] h-[230px] sm:w-[290px] sm:h-[290px] rounded-full p-2 bg-[#0f172a] shadow-2xl overflow-hidden shrink-0 z-10">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 border-2 border-white">
                  <img
                    src="/profile.png"
                    alt={personalDetails.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Orbit Badge 1: Top Right - BSc (Hons) ICT */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 0.5, duration: 0.4 },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="absolute -top-3 right-4 sm:top-1 sm:right-6 z-20"
              >
                <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0f172a] text-white text-xs font-bold shadow-lg border border-slate-700 hover:scale-105 transition-transform">
                  <GraduationCap className="w-4 h-4 text-sky-400" />
                  <span>BSc (Hons) ICT</span>
                </div>
              </motion.div>

              {/* Orbit Badge 2: Middle Right - Available */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, y: [0, 6, 0] }}
                transition={{
                  opacity: { delay: 0.6, duration: 0.4 },
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
                }}
                className="absolute top-1/2 -right-3 sm:-right-4 -translate-y-1/2 z-20"
              >
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-xs font-semibold shadow-lg border border-slate-200 hover:scale-105 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available</span>
                </div>
              </motion.div>

              {/* Orbit Badge 3: Bottom Left - Web Developer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -5, 0] }}
                transition={{
                  opacity: { delay: 0.7, duration: 0.4 },
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }
                }}
                className="absolute -bottom-3 left-4 sm:bottom-1 sm:left-6 z-20"
              >
                <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-xs font-semibold shadow-lg border border-slate-200 hover:scale-105 transition-transform">
                  <Code2 className="w-4 h-4 text-slate-700" />
                  <span>Web Developer</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
