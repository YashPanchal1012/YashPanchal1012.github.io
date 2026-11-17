import React from 'react';
import { technicalSkills } from '../data/skills';
import { Cpu, Eye, Bot, Code } from 'lucide-react';

export default function SkillsSection() {
  const getIcon = (cat) => {
    if (cat.includes('Vision')) return <Eye size={18} />;
    if (cat.includes('Robotics')) return <Bot size={18} />;
    if (cat.includes('AI')) return <Cpu size={18} />;
    return <Code size={18} />;
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-desc">
            Core technical competencies developed through industrial engineering, academic research, and system implementation.
          </p>
        </div>

        <div className="skills-grid">
          {technicalSkills.map((domain) => (
            <div key={domain.category} className="skill-domain-card">
              <div className="domain-header">
                <div className="domain-title-row">
                  <span className="domain-icon">{getIcon(domain.category)}</span>
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
