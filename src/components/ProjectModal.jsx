import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Monitor, Smartphone, Plane, Coffee, ShieldCheck, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('desktop');

  if (!isOpen || !project) return null;

  const isSkyNova = project.id === 'sky-nova';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-apple-float overflow-hidden z-10 border border-black/[0.08] max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-black/[0.06] flex items-center justify-between bg-apple-surface/60">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-apple-accent block mb-1">
                PROJECT DEMO & INTERACTIVE PREVIEW
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-apple-dark font-display">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-apple-surface hover:bg-apple-surfaceHover text-apple-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* View Mode Toggle (Desktop / Mobile Preview Mock) */}
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
              <span className="text-xs text-apple-subtle font-medium">
                Simulated Responsive Viewport
              </span>
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-apple-surface border border-black/[0.06]">
                <button
                  onClick={() => setViewMode('desktop')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    viewMode === 'desktop' ? 'bg-apple-dark text-white shadow-apple-sm' : 'text-apple-subtle'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setViewMode('mobile')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    viewMode === 'mobile' ? 'bg-apple-dark text-white shadow-apple-sm' : 'text-apple-subtle'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile View</span>
                </button>
              </div>
            </div>

            {/* Interactive Browser Device Frame Mock */}
            <div className="flex justify-center">
              <div
                className={`transition-all duration-500 rounded-2xl bg-apple-dark text-white overflow-hidden border border-black/20 shadow-apple-md ${
                  viewMode === 'desktop' ? 'w-full' : 'w-[320px] sm:w-[360px]'
                }`}
              >
                {/* Browser Address Bar */}
                <div className="px-4 py-3 bg-[#2A2A2C] flex items-center gap-3 border-b border-white/10 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex-1 bg-[#1E1E20] px-3 py-1 rounded-md text-[11px] font-mono text-gray-300 text-center truncate">
                    {project.demoUrl}
                  </div>
                </div>

                {/* Simulated UI Content Screen */}
                <div className="p-6 sm:p-8 bg-gradient-to-b from-gray-900 via-gray-950 to-black min-h-[280px] flex flex-col justify-between">
                  {isSkyNova ? (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 text-sky-400">
                          <Plane className="w-5 h-5" />
                          <span className="font-bold tracking-wider text-sm">SKY NOVA AIRWAYS</span>
                        </div>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                          Flight Search Active
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                        Elevate Your Journey Across the World
                      </h4>
                      <p className="text-xs text-gray-400 mb-6">
                        Book premium international flights with seamless online check-in & destination experiences.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-[11px]">
                        <div>
                          <span className="text-gray-400 block text-[10px]">From</span>
                          <span className="font-semibold text-white">Colombo (CMB)</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block text-[10px]">To</span>
                          <span className="font-semibold text-white">Singapore (SIN)</span>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <span className="text-gray-400 block text-[10px]">Cabin Class</span>
                          <span className="font-semibold text-sky-400">Business Class</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 text-emerald-400">
                          <Coffee className="w-5 h-5" />
                          <span className="font-bold tracking-wider text-sm">CEYLON HERBAL TEA</span>
                        </div>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Organic Collection
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                        Handpicked Sri Lankan Natural Herbal Blends
                      </h4>
                      <p className="text-xs text-gray-400 mb-6">
                        Experience authentic wellness infused with rich heritage and natural ingredients.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {['Single Origin', '100% Organic', 'Eco Packaging'].map((tag) => (
                          <div key={tag} className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/20 text-[11px] text-emerald-300 text-center font-medium">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Responsive Layout • Fluid Grid</span>
                    <span className="text-apple-accent font-semibold">Live Interactive Concept</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description & Key Features */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-apple-subtle mb-3">
                Project Overview
              </h4>
              <p className="text-base text-apple-dark leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-apple-subtle mb-3">
                Key Features & Architecture
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-apple-surface text-xs font-medium text-apple-dark">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-apple-subtle mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-apple-dark text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 bg-apple-surface/60 border-t border-black/[0.06] flex items-center justify-end gap-3">
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-apple-surface hover:bg-apple-surfaceHover text-apple-dark font-semibold text-xs sm:text-sm border border-black/[0.08] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Code</span>
            </a>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-apple-dark text-white hover:bg-black font-semibold text-xs sm:text-sm transition-all"
            >
              <span>View Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
