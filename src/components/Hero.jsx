import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal, Cpu, Sparkles, ChevronRight, Layers, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Hero({ onOpenContactModal }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // max tilt deg
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-apple-surface/50 to-white"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-apple-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.06] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-apple-accent animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-apple-subtle">
            {personalDetails.eyebrow}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-apple-dark tracking-tight leading-[1.08] max-w-5xl mx-auto mb-8 font-display"
        >
          Building digital experiences <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-dark via-black/80 to-apple-subtle">
            that feel simple.
          </span>
        </motion.h1>

        {/* Bio Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-apple-subtle font-normal max-w-3xl mx-auto mb-10 leading-relaxed tracking-tight"
        >
          {personalDetails.bioShort}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-apple-dark text-white font-medium text-base hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-apple-md group"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-apple-surface hover:bg-apple-surfaceHover text-apple-dark font-medium text-base border border-black/[0.06] transition-all duration-300"
          >
            <span>About Me</span>
          </a>
        </motion.div>

        {/* Apple-Style Abstract 3D Developer Workspace Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto perspective-1000"
        >
          <div
            style={{
              transform: `rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)`,
              transition: 'transform 0.2s ease-out'
            }}
            className="relative rounded-3xl p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-xl border border-black/[0.08] shadow-apple-float overflow-hidden"
          >
            {/* Top Bar of Code Editor Mock */}
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs font-mono text-apple-subtle">
                  SachiniAyeshika.portfolio // React + Tailwind
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live System Ready
                </span>
              </div>
            </div>

            {/* Content Grid Inside Workspace Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
              {/* Code Snippet Box */}
              <div className="lg:col-span-7 bg-apple-dark text-white/90 rounded-2xl p-5 sm:p-6 font-mono text-xs sm:text-sm shadow-inner relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-sans text-5xl font-bold select-none">
                  ICT
                </div>
                <div className="flex items-center gap-2 text-apple-accent mb-3 font-sans text-xs uppercase tracking-wider font-semibold">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Developer Identity</span>
                </div>
                <pre className="text-gray-300 leading-relaxed overflow-x-auto">
                  <code>{`const developer = {
  name: "Sachini Ayeshika",
  role: "Web Developer & ICT Student",
  institution: "University of Vavuniya",
  focus: ["React.js", "Full-Stack UI", "Software Eng."],
  passion: "Creating simple & intuitive digital experiences",
  status: "Available for internships & projects"
};`}</code>
                </pre>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                  <span>compiled in 0.04s</span>
                  <span className="text-apple-accent">UTF-8 • ES2024</span>
                </div>
              </div>

              {/* Stats & Capability Floating Cards */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                <div className="p-5 rounded-2xl bg-apple-surface border border-black/[0.06] hover:shadow-apple-sm transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-apple-subtle font-semibold">
                      Academic Track
                    </span>
                    <Cpu className="w-4 h-4 text-apple-accent" />
                  </div>
                  <h4 className="text-lg font-bold text-apple-dark font-display">
                    BSc in ICT (Undergraduate)
                  </h4>
                  <p className="text-xs text-apple-subtle mt-1">
                    Faculty of Technological Studies • Vavuniya
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-apple-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-apple-accent/10 text-apple-accent">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-apple-dark">Core Focus</h4>
                      <p className="text-xs text-apple-subtle">Clean Code & Modern UX</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['React.js', 'Python', 'Java', 'SQL', 'Software Architecture'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/[0.04] text-apple-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
