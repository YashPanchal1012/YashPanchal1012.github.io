import React from 'react';
import { ArrowDown, Mail, Check, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onNavigate, onCopyEmail, copied }) {
  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Main Bio Column */}
          <div className="hero-intro">
            <div className="hero-header-block">
              <span className="hero-kicker">Robotics & Vision Engineering</span>
              <h1 className="hero-name">Yash Panchal</h1>
              <p className="hero-role">Robotics, Vision & Systems Engineer</p>
              <p className="hero-school">B.S. in Computer Science — University of Minnesota, Twin Cities</p>
            </div>

            <p className="hero-bio">
              Engineering real-time robotic perception, 3D computer vision pipelines, and deterministic industrial motion control.
              Combining PyTorch, ROS2, and TwinCAT 3 to connect machine learning inference directly to physical hardware.
            </p>

            <div className="hero-cta-group">
              <button 
                type="button" 
                className="btn-primary" 
                onClick={() => onNavigate('projects')}
              >
                <span>View Projects</span>
                <ArrowDown size={15} />
              </button>

              <a
                href="Documents/Yash_Panchal_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                title="Open Resume PDF"
              >
                <FileText size={15} />
                <span>Resume</span>
              </a>

              <button 
                type="button" 
                className="btn-secondary" 
                onClick={onCopyEmail}
                title="Copy email address"
              >
                {copied ? <Check size={15} color="var(--accent)" /> : <Mail size={15} />}
                <span>{copied ? 'Copied' : 'Email'}</span>
              </button>

              <div className="hero-social-links">
                <a
                  href="https://github.com/YashPanchal1012"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={17} />
                </a>

                <a
                  href="https://www.linkedin.com/in/yashwardhan-panchal-2829b8282/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Minimalist Hardware / Vision Video Showcase */}
          <div className="hero-media-panel">
            <div className="hero-video-frame">
              <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                poster="images/Vision + XTS (Thumbnail).png"
              >
                <source src="Videos/Vision + XTS.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <div className="hero-video-caption">
                <span className="caption-tag">Beckhoff XTS Mover</span>
                <span className="caption-meta">TwinCAT 3 + ONNX • 30 Hz Real-Time Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
