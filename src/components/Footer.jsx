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
            <h3 className="footer-title">Yash Panchal</h3>
            <p className="footer-subtitle">
              Robotics & Computer Vision Engineer • Minneapolis, MN
            </p>
          </div>

          <div className="footer-actions">
            <button 
              type="button" 
              className="btn-secondary" 
              onClick={onCopyEmail}
            >
              <Mail size={15} />
              <span>{copied ? 'Email Copied!' : 'yashpanchal1326@gmail.com'}</span>
            </button>

            <a
              href="Documents/Yash_Panchal_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="Resume PDF"
              aria-label="Resume PDF"
            >
              <FileText size={16} />
            </a>

            <a
              href="https://github.com/YashPanchal1012"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/yashwardhan-panchal-2829b8282/"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>

            <button
              type="button"
              className="icon-btn"
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            © {new Date().getFullYear()} Yash Panchal. All rights reserved.
          </p>
          <p className="footer-copy">
            Minneapolis, MN • University of Minnesota
          </p>
        </div>
      </div>
    </footer>
  );
}
