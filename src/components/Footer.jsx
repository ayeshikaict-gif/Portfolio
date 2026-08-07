import React from 'react';
import { personalDetails } from '../data/portfolioData';

const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 bg-apple-surface border-t border-black/[0.06] text-apple-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-black/[0.06]">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="text-2xl font-extrabold tracking-tight font-display text-apple-dark block mb-2"
            >
              {personalDetails.name}
            </a>
            <p className="text-xs text-apple-subtle font-medium">
              ICT Undergraduate • Web Developer • Software Development Enthusiast
            </p>
            <p className="text-[11px] text-apple-subtle/80 mt-1">
              University of Vavuniya • Faculty of Technological Studies
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-apple-subtle">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-apple-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-apple-subtle">
          <p>© 2026 Sachini Ayeshika. All rights reserved.</p>
          <p className="text-[11px]">
            Designed with Apple minimalist design philosophy.
          </p>
        </div>
      </div>
    </footer>
  );
}
