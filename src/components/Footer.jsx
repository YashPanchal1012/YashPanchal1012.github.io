import React from 'react';
import { ArrowUp, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer({ onCopyEmail, copied }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
              Yash Panchal
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
              Robotics & Computer Vision Engineer • Minneapolis, MN
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button 
              type="button" 
              className="btn-secondary" 
              onClick={onCopyEmail}
            >
              <Mail size={16} />
              <span>{copied ? 'Email Copied!' : 'panch063@umn.edu'}</span>
            </button>

            <a
              href="Documents/Yash Panchal's Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="Resume PDF"
            >
              <FileText size={18} />
            </a>

            <a
              href="https://github.com/YashPanchal1012"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/yashwardhan-panchal-2829b8282/"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>

            <button
              type="button"
              className="icon-btn"
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p className="footer-copy">
            © {new Date().getFullYear()} Yash Panchal. All rights reserved.
          </p>
          <p className="footer-copy">
            Built with React & Vite • Optimized for Performance
          </p>
        </div>
      </div>
    </footer>
  );
}
