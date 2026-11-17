import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TelemetrySidebar from './components/TelemetrySidebar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import { portfolioProjects } from './data/projects';
import { Check } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  const [activeSection, setActiveSection] = useState('about');
  const [copied, setCopied] = useState(false);
  const [inspectedProject, setInspectedProject] = useState(null);

  // Read current project ID from URL hash (e.g. #/project/3d-scene-reconstruction)
  const [currentProjectId, setCurrentProjectId] = useState(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/project/')) {
      return hash.replace('#/project/', '');
    }
    return null;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Synchronize hash changes with browser Back / Forward buttons & direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const id = hash.replace('#/project/', '');
        setCurrentProjectId(id);
        window.scrollTo(0, 0);
      } else {
        setCurrentProjectId(null);
        if (hash) {
          const sectionId = hash.replace('#', '');
          const el = document.getElementById(sectionId);
          if (el) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('yashpanchal1326@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const navigateToSection = (id) => {
    setActiveSection(id);
    if (currentProjectId) {
      // If currently on a project page, return to home and scroll to target section
      window.location.hash = `#${id}`;
    } else {
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
    }
  };

  const handleSelectProject = (project) => {
    window.location.hash = `#/project/${project.id}`;
  };

  const handleBackToProjects = () => {
    window.location.hash = '#projects';
  };

  const activeProject = currentProjectId
    ? portfolioProjects.find((p) => p.id === currentProjectId)
    : null;

  return (
    <div className="content-wrapper">
      {/* Mobile-only top header navbar */}
      <div className="mobile-header-only">
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          activeSection={currentProjectId ? '' : activeSection}
          onNavigate={navigateToSection}
        />
      </div>

      <div className="workbench-shell">
        <TelemetrySidebar
          theme={theme}
          toggleTheme={toggleTheme}
          activeSection={currentProjectId ? '' : activeSection}
          onNavigate={navigateToSection}
          inspectedProject={activeProject || inspectedProject}
          onCopyEmail={handleCopyEmail}
          copied={copied}
        />

        <div className="workbench-main">
          {activeProject ? (
            <main>
              <ProjectPage
                project={activeProject}
                onBack={handleBackToProjects}
                onSelectProject={handleSelectProject}
              />
            </main>
          ) : (
            <main>
              <Hero onNavigate={navigateToSection} />
              <Projects 
                onSelectProject={handleSelectProject}
                onHoverProject={setInspectedProject}
                onLeaveProject={() => setInspectedProject(null)}
              />
              <Experience />
            </main>
          )}

          <Footer onCopyEmail={handleCopyEmail} copied={copied} />
        </div>
      </div>

      {/* Copy Email Toast Notification */}
      {copied && (
        <div className="toast-notice" role="status" aria-live="polite">
          <Check size={16} color="var(--accent)" />
          <span>yashpanchal1326@gmail.com copied to clipboard!</span>
        </div>
      )}
    </div>
  );
}
