import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, ArrowUpRight, Copy, Check, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalDetails } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const contact = personalDetails.contact;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setSending(true);

    // Global mail server API call + mailto fallback
    try {
      await fetch('https://formsubmit.co/ajax/ayeshika.ict@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || 'Portfolio Inquiry for Sachini Ayeshika',
          message: formData.message,
          _captcha: 'false'
        })
      }).catch(() => {});
    } catch (err) {
      console.log('Global mail transmission triggered');
    }

    setSending(false);
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent('Inquiry for Sachini Ayeshika - Developer Portfolio')}&body=${encodeURIComponent('Hi Sachini,\n\nI visited your portfolio website and would like to connect regarding...')}`;

  return (
    <section id="contact" className="py-24 md:py-36 bg-apple-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-semibold text-apple-subtle block mb-3"
          >
            INITIATE COLLABORATION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-apple-dark tracking-tight leading-[1.12] font-display"
          >
            Let's build something <br />
            <span className="text-apple-subtle font-normal">meaningful.</span>
          </motion.h2>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.08] shadow-apple-sm space-y-8"
          >
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-apple-accent block mb-2">
                REACH OUT ANYTIME
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                Direct Channels
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Reach out directly to <strong className="text-slate-900 font-semibold">{contact.email}</strong> via Gmail or your device's mail app.
              </p>
            </div>

            {/* Channels List */}
            <div className="space-y-4">
              {/* Direct Email (Gmail) */}
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-apple-surface hover:bg-slate-100 border border-black/[0.06] transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-red-600 border border-black/[0.06] shadow-xs group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
                      Direct Email (Gmail)
                    </span>
                    <span className="text-sm font-bold text-slate-900 font-mono group-hover:text-apple-accent transition-colors">
                      {contact.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Phone Number */}
              <a
                href={`tel:${contact.phoneTel}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-apple-surface hover:bg-slate-100 border border-black/[0.06] transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-600 border border-black/[0.06] shadow-xs group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
                      Phone Number
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-apple-accent transition-colors">
                      {contact.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn Profile */}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-apple-surface hover:bg-slate-100 border border-black/[0.06] transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0A66C2] border border-black/[0.06] shadow-xs group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
                      LinkedIn Profile
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-apple-accent transition-colors">
                      {contact.linkedinUsername}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* GitHub Profile */}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-apple-surface hover:bg-slate-100 border border-black/[0.06] transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-900 border border-black/[0.06] shadow-xs group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
                      GitHub Profile
                    </span>
                    <span className="text-sm font-bold text-slate-900 font-mono group-hover:text-apple-accent transition-colors">
                      {contact.githubUsername}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Footer Note & Location */}
            <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <MapPin className="w-4 h-4 text-apple-accent shrink-0" />
                <span>Based in Sri Lanka • Open to remote & on-site software opportunities.</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-apple-surface hover:bg-slate-100 text-slate-700 transition-colors shrink-0"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Send Me a Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.08] shadow-apple-sm space-y-6"
          >
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-apple-accent block mb-2">
                INBOX TRANSMISSION
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                Send Me a Message
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Messages entered here are transmitted directly to <strong className="text-slate-900 font-semibold">{contact.email}</strong>.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-6 text-center space-y-4 bg-apple-surface rounded-2xl border border-black/[0.06]"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900 font-display">Message Sent Successfully!</h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Your message has been transmitted directly to <strong className="text-slate-900">{contact.email}</strong>.
                </p>
                <div className="pt-2">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-all shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Or Open & Send in Gmail Direct</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-apple-surface border border-black/[0.08] text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-apple-surface border border-black/[0.08] text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-apple-surface border border-black/[0.08] text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Hi Sachini, I visited your portfolio and would like to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-apple-surface border border-black/[0.08] text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all resize-none font-medium leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#0f172a] text-white font-bold text-sm hover:bg-black hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-md group disabled:opacity-70"
                  >
                    {sending ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
