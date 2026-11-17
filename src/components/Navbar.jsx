import React from 'react';
import { Sun, Moon, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ theme, toggleTheme, activeSection, onNavigate }) {
  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
  ];

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-bar" aria-label="Main Navigation">
        <a 
          href="#about" 
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('about');
          }}
        >
          <span className="brand-name">Yash Panchal</span>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`nav-item-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href="Documents/Yash_Panchal_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-nav-resume"
            title="View Resume PDF"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>

          <a
            href="https://github.com/YashPanchal1012"
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <GithubIcon size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/yashwardhan-panchal-2829b8282/"
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>

          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
