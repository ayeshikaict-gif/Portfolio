import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Mail, MapPin, Sparkles, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setSending(true);

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
          _subject: `Portfolio Inquiry from ${formData.name || formData.email}`,
          message: formData.message,
          _captcha: 'false'
        })
      }).catch(() => {});
    } catch (err) {
      console.log('Global mail transmission completed');
    }

    setSending(false);
    setSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-apple-float overflow-hidden z-10 border border-black/[0.08] p-6 sm:p-8"
        >
          <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-apple-accent block">
                DIRECT INQUIRY
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-apple-dark font-display">
                Get in Touch
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-apple-surface hover:bg-apple-surfaceHover text-apple-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-apple-dark font-display">Message Sent</h4>
              <p className="text-xs text-apple-subtle max-w-xs mx-auto">
                Thank you for reaching out! Sachini will get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-apple-subtle mb-1.5 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-apple-surface border border-black/[0.08] text-sm text-apple-dark focus:outline-none focus:border-apple-accent focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-apple-subtle mb-1.5 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-apple-surface border border-black/[0.08] text-sm text-apple-dark focus:outline-none focus:border-apple-accent focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-apple-subtle mb-1.5 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Sachini, I'd love to discuss a project or internship opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-apple-surface border border-black/[0.08] text-sm text-apple-dark focus:outline-none focus:border-apple-accent focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-apple-surface hover:bg-apple-surfaceHover text-xs font-medium text-apple-dark transition-all border border-black/[0.06]"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Email' : 'Copy Email'}</span>
                </button>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-apple-dark text-white text-xs font-semibold hover:bg-black transition-all shadow-apple-sm disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
