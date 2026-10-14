import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Check } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('yashpanchal1326@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="content-wrapper">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <main>
        <Hero
          onNavigate={scrollToSection}
          onCopyEmail={handleCopyEmail}
          copied={copied}
        />
        <Experience />
        <Projects onSelectProject={setSelectedProject} />
        <SkillsSection />
      </main>

      <Footer onCopyEmail={handleCopyEmail} copied={copied} />

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Copy Email Toast Notification */}
      {copied && (
        <div className="toast-notice" role="status" aria-live="polite">
          <Check size={18} color="var(--accent-emerald)" />
          <span>yashpanchal1326@gmail.com copied to clipboard!</span>
        </div>
      )}
    </div>
  );
}
