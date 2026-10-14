import React from 'react';
import { ArrowDown, Mail, Check, Sparkles, Terminal, FileText } from 'lucide-react';

export default function Hero({ onNavigate, onCopyEmail, copied }) {
  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="bento-grid">
          {/* Main Bio Card */}
          <div className="bento-card bento-intro">
            <div>
              <div className="status-badge">
                <span className="pulse-circle" />
                <span>Available for Full-Time Roles • Minneapolis, MN</span>
              </div>

              <h1 className="hero-title">
                Building Real-Time <br />
                <span className="gradient-text">Robotics & Vision</span> Systems
              </h1>

              <div className="hero-subtitle">
                Computer Science @ University of Minnesota - Twin Cities
              </div>

              <p className="hero-bio">
                I specialize in real-time computer vision, intelligent robotic manipulation, and machine learning pipelines. 
                My experience bridges machine vision models directly into industrial deterministic control loops (Beckhoff TwinCAT) 
                and ROS2 robotic simulation, translating raw camera pixels into responsive kinematic motion.
              </p>
            </div>

            <div className="hero-cta-group">
              <button 
                type="button" 
                className="btn-primary" 
                onClick={() => onNavigate('projects')}
              >
                <span>Explore Projects</span>
                <ArrowDown size={16} />
              </button>

              <a
                href="Documents/Yash_Panchal_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                title="View Resume PDF"
              >
                <FileText size={16} />
                <span>View Resume</span>
              </a>

              <button 
                type="button" 
                className="btn-secondary" 
                onClick={onCopyEmail}
              >
                {copied ? <Check size={16} color="var(--accent-emerald)" /> : <Mail size={16} />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Hardware / Video Teaser Card */}
          <div className="bento-card bento-teaser">
            <div className="teaser-video-container">
              <video
                className="teaser-video"
                autoPlay
                muted
                loop
                playsInline
                poster="images/Vision + XTS (Thumbnail).png"
              >
                <source src="Videos/Vision + XTS.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>

              <div className="teaser-overlay">
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  <span className="telemetry-chip">
                    <Terminal size={12} />
                    <span>TwinCAT 3 + ONNX</span>
                  </span>
                  <span className="telemetry-chip">
                    <Sparkles size={12} />
                    <span>30 Hz Real-Time</span>
                  </span>
                </div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>
                  Beckhoff XTS Gesture Tracking
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.82rem' }}>
                  Hand-landmark inference feeding deterministic PLC motion logic
                </div>
              </div>
            </div>
          </div>

          {/* Stat Cards Strip */}
          <div className="bento-card bento-stats">
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years of Engineering Study</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Core Perception & AI Systems</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Industry & Campus Roles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
