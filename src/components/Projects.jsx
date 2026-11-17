import React, { useState } from 'react';
import { portfolioProjects } from '../data/projects';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ onSelectProject, onHoverProject, onLeaveProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Robotics & Control', value: 'robotics' },
    { label: 'Computer Vision & ML', value: 'ml' },
    { label: 'Web & Systems', value: 'web' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Projects</h2>
          <p className="section-desc">
            Systems built across industrial motion control, robotic teleoperation, 3D scene reconstruction, generative modeling, and full-stack web apps.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-tabs" role="tablist">
          {filters.map((tab) => (
            <button
              key={tab.value}
              type="button"
              className={`filter-btn ${activeFilter === tab.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.value)}
              role="tab"
              aria-selected={activeFilter === tab.value}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article 
              key={project.id} 
              className="project-card"
              onClick={() => onSelectProject(project)}
              onMouseEnter={() => onHoverProject && onHoverProject(project)}
              onMouseLeave={() => onLeaveProject && onLeaveProject()}
            >
              <div className="card-media-wrapper">
                {project.mediaType === 'video' ? (
                  <video
                    src={project.preview}
                    poster={project.thumbnail}
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                ) : (
                  <img
                    src={project.preview}
                    alt={project.title}
                    loading="lazy"
                  />
                )}
              </div>

              <div className="card-content">
                <div className="card-title-row">
                  <h3 className="card-title">{project.title}</h3>
                </div>
                
                <p className="card-summary">{project.summary}</p>

                {/* Verified Metrics Line */}
                {project.telemetry && (
                  <div className="card-metrics-line">
                    {Object.values(project.telemetry).join('  ·  ')}
                  </div>
                )}

                {/* Core Tech Stack */}
                <div className="card-stack-line">
                  {project.tech.join('  ·  ')}
                </div>

                <div className="card-footer" onClick={(e) => e.stopPropagation()}>
                  <button 
                    type="button" 
                    className="btn-inspect"
                    onClick={() => onSelectProject(project)}
                  >
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </button>

                  <div className="card-actions-group">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn-compact"
                        title="Open Live Demo"
                        aria-label={`Open live demo for ${project.title}`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}

                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn-compact"
                        title="View GitHub Repository"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <GithubIcon size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
