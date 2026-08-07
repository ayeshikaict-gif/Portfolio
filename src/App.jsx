import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import SoftSkills from './components/SoftSkills';
import CareerObjective from './components/CareerObjective';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-apple-bg text-apple-dark font-sans selection:bg-apple-accent/20 selection:text-apple-accent">
      {/* Sticky Translucent Blur Navigation Bar */}
      <Navbar onOpenContactModal={() => setContactModalOpen(true)} />

      <main>
        {/* Apple Product Launch Hero Section */}
        <Hero onOpenContactModal={() => setContactModalOpen(true)} />

        {/* Editorial Storytelling About Section */}
        <About />

        {/* Apple Tech Specification Style Education Section */}
        <Education />

        {/* Interactive Technical Skills Clusters */}
        <TechnicalSkills />

        {/* Selected Work / Apple Product Showcase Section */}
        <Projects />

        {/* Credentials & Expandable Certifications List */}
        <Certifications />

        {/* Interpersonal Attributes / Soft Skills */}
        <SoftSkills />

        {/* Cinematic Career Direction Statement */}
        <CareerObjective />

        {/* Contact CTA Section */}
        <Contact onOpenContactModal={() => setContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Direct Contact / Inquiry Modal Drawer */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
