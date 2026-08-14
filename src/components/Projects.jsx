import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plane, Coffee, Database, Layers, Terminal, Sparkles, Eye, BookOpen } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const categoryIcons = {
  "sky-nova": Plane,
  "ceylon-tea": Coffee,
  "study-dashboard": BookOpen,
  "univav-sis": Database,
  "taskflow-pro": Layers,
  "eco-weather-analytics": Terminal
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'WEB', 'FULL-STACK', 'DESKTOP', 'UI/UX'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-apple-surface relative border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest font-semibold text-apple-subtle block mb-2"
            >
              SELECTED WORK
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-apple-dark tracking-tight font-display"
            >
              Ideas turned into <span className="text-apple-subtle font-normal">digital experiences.</span>
            </motion.h2>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight whitespace-nowrap transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-apple-dark text-white shadow-apple-sm scale-[1.02]'
                    : 'bg-white text-apple-dark hover:bg-apple-surfaceHover border border-black/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Small Tiles Grid Layout with Image Previews */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const Icon = categoryIcons[project.id] || Sparkles;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl bg-white border border-black/[0.08] p-4 sm:p-5 shadow-apple-sm hover:shadow-apple-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Project Image Header Tile */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden mb-4 cursor-pointer bg-apple-surface border border-black/[0.04]"
                    >
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      {/* Top Badges over Image */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                          {project.number} // {project.category}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-white/80 backdrop-blur-md text-apple-dark flex items-center justify-center shadow-apple-sm">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Bottom Overlay Label */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                        <span className="truncate pr-2">{project.subtitle}</span>
                        <span className="shrink-0 p-1.5 rounded-full bg-apple-accent text-white group-hover:scale-110 transition-transform">
                          <Eye className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                    {/* Tile Content */}
                    <div className="px-1">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-lg font-bold text-apple-dark font-display mb-1.5 group-hover:text-apple-accent transition-colors leading-snug cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs text-apple-subtle font-normal line-clamp-2 mb-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-apple-surface text-apple-dark border border-black/[0.04]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-apple-subtle">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Tile Bottom Action Bar */}
                  <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs px-1">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="font-semibold text-apple-dark hover:text-apple-accent flex items-center gap-1 group/btn"
                    >
                      <span>Interactive Preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-apple-subtle hover:text-apple-dark transition-colors flex items-center gap-1 text-[11px] font-medium"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
