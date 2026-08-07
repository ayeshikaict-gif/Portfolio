import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Sparkles, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalDetails } from '../data/portfolioData';

export default function Contact({ onOpenContactModal }) {
  const [copied, setCopied] = useState(false);
  const contact = personalDetails.contact;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-apple-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Section Header */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest font-semibold text-apple-subtle block mb-4"
        >
          INITIATE COLLABORATION
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-apple-dark tracking-tight leading-[1.08] max-w-4xl mx-auto mb-8 font-display"
        >
          Let's build something <br />
          <span className="text-apple-subtle font-normal">meaningful.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-apple-subtle font-normal max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          "I'm always interested in learning, collaborating, and creating innovative digital experiences."
        </motion.p>

        {/* Buttons Trio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-apple-dark text-white font-medium text-base hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-apple-md"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-apple-surface hover:bg-apple-surfaceHover text-apple-dark font-medium text-base border border-black/[0.08] transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub</span>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-apple-surface hover:bg-apple-surfaceHover text-apple-dark font-medium text-base border border-black/[0.08] transition-all"
          >
            <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* Minimal Non-Traditional Contact Specs Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-apple-surface border border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6 text-left"
        >
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-apple-subtle block">
              Direct Contact & Status
            </span>
            <span className="text-base font-bold text-apple-dark font-display block">
              {contact.email}
            </span>
            <span className="text-xs text-emerald-600 font-medium flex items-center gap-1.5 pt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {contact.availability}
            </span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-black/5 text-apple-dark text-xs font-semibold border border-black/[0.08] shadow-apple-sm transition-all shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Email Copied' : 'Copy Email Address'}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
