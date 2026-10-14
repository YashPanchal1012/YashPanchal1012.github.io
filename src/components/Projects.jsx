import React, { useState } from 'react';
import { portfolioProjects } from '../data/projects';
import { ExternalLink, Play, Sparkles, ArrowRight } from 'lucide-react';

export default function Projects({ onSelectProject }) {
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
    <section id="projects" className="projects-section" style={{ padding: '2rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Engineered Solutions</span>
          <h2 className="section-title">Technical Projects</h2>
          <p className="section-desc">
            Production-grade automation, machine vision algorithms, neural perception models, and full-stack software.
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
            >
              <div className="card-media-wrapper">
                <span className="category-badge">{project.categoryLabel}</span>
                {project.featured && <span className="featured-pill">Featured</span>}

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
                <h3 className="card-title">{project.title}</h3>
                <p className="card-summary">{project.summary}</p>

                {/* Telemetry Chips */}
                {project.telemetry && (
                  <div className="telemetry-row">
                    {Object.entries(project.telemetry).map(([key, val]) => (
                      <span key={key} className="telemetry-chip">
                        <Sparkles size={11} />
                        <span>{val}</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Chips */}
                <div className="tech-tag-row">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                </div>

                <div className="card-footer" onClick={(e) => e.stopPropagation()}>
                  <button 
                    type="button" 
                    className="btn-inspect"
                    onClick={() => onSelectProject(project)}
                  >
                    <span>Inspect System</span>
                    <ArrowRight size={15} />
                  </button>

                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-btn"
                      title="View GitHub Repository"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
