import React from 'react';
import { workExperience } from '../data/experience';
import { MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="experience-section" style={{ padding: '2rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career History</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-desc">
            Industry robotics engineering, undergraduate teaching, lab operations, and hardware testing.
          </p>
        </div>

        <div className="timeline-container">
          {workExperience.map((exp) => (
            <div key={exp.title + exp.role} className="experience-card">
              <div className="exp-header">
                <div className="exp-logo-shell">
                  <img
                    src={exp.logo}
                    alt={`${exp.title} logo`}
                    loading="lazy"
                  />
                </div>

                <div className="exp-meta">
                  <div className="exp-title-row">
                    <h3 className="exp-company">{exp.title}</h3>
                    <span className="exp-period">
                      <Calendar size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                      {exp.period}
                    </span>
                  </div>

                  <div className="exp-role-row">
                    <span className="exp-role">{exp.role}</span>
                    <span className="exp-location">
                      <MapPin size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="exp-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

              <div className="tech-tag-row" style={{ marginTop: '1rem' }}>
                {exp.tags.map((tag) => (
                  <span key={tag} className="tech-chip">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
