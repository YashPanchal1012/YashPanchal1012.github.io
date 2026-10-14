import React from 'react';
import { technicalSkills } from '../data/skills';
import { Cpu, Eye, Bot, Code } from 'lucide-react';

export default function SkillsSection() {
  const getIcon = (cat) => {
    if (cat.includes('Vision')) return <Eye size={20} color="var(--accent-cyan)" />;
    if (cat.includes('Robotics')) return <Bot size={20} color="var(--accent-cyan)" />;
    if (cat.includes('AI')) return <Cpu size={20} color="var(--accent-cyan)" />;
    return <Code size={20} color="var(--accent-cyan)" />;
  };

  return (
    <section id="skills" className="skills-section" style={{ padding: '2rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Core Competencies</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-desc">
            Categorized engineering skills developed through industrial internships, robotics coursework, and research.
          </p>
        </div>

        <div className="skills-grid">
          {technicalSkills.map((domain) => (
            <div key={domain.category} className="skill-domain-card">
              <div className="domain-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  {getIcon(domain.category)}
                  <h3 className="domain-name">{domain.category}</h3>
                </div>
                <p className="domain-desc">{domain.description}</p>
              </div>

              <div className="skills-pill-group">
                {domain.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
