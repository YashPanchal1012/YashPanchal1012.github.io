import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, FileText, Video, Image as ImageIcon, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioProjects } from '../data/projects';

export default function ProjectPage({ project, onBack, onSelectProject }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  useEffect(() => {
    setActiveMediaIndex(0);
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return null;

  // Find index for Next / Previous navigation
  const currentIndex = portfolioProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? portfolioProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < portfolioProjects.length - 1 ? portfolioProjects[currentIndex + 1] : null;

  const mediaList = project.media?.length
    ? project.media
    : [
        {
          type: project.mediaType || 'image',
          src: project.preview,
          poster: project.thumbnail,
          label: project.title,
        },
      ];

  const activeMedia = mediaList[activeMediaIndex] || mediaList[0];

  // Check if there is a document in the media list
  const docMedia = mediaList.find((m) => m.type === 'document');

  return (
    <div className="project-page-view">
      <div className="container">
        {/* Breadcrumb / Back Link */}
        <div className="page-breadcrumb-row">
          <button 
            type="button" 
            className="btn-back"
            onClick={onBack}
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </button>

          <span className="breadcrumb-category">
            {project.categoryLabel}
          </span>
        </div>

        {/* Project Header Banner */}
        <header className="project-page-header">
          <h1 className="project-page-title">{project.title}</h1>
          <p className="project-page-summary">{project.summary}</p>

          <div className="project-page-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={15} />
                <span>Open Live Demo</span>
              </a>
            )}

            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <GithubIcon size={15} />
                <span>GitHub Repository</span>
              </a>
            )}

            {docMedia && (
              <a
                href={docMedia.src}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                title="Open Technical Report PDF in new tab"
              >
                <FileText size={15} />
                <span>Technical Report (PDF)</span>
              </a>
            )}
          </div>

          {/* Telemetry Chips Banner */}
          {project.telemetry && (
            <div className="telemetry-banner">
              {Object.entries(project.telemetry).map(([k, v]) => (
                <div key={k} className="telemetry-banner-card">
                  <span className="telemetry-banner-label">{k}</span>
                  <span className="telemetry-banner-value">{v}</span>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Media Showcase Stage */}
        <section className="project-media-stage">
          <div className="stage-viewport">
            {activeMedia.type === 'video' && (
              <video
                key={activeMedia.src}
                controls
                autoPlay
                playsInline
                poster={activeMedia.poster || project.thumbnail}
                className="stage-video"
              >
                <source src={activeMedia.src} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            )}

            {activeMedia.type === 'image' && (
              <img
                key={activeMedia.src}
                src={activeMedia.src}
                alt={activeMedia.label || project.title}
                className={activeMedia.src?.endsWith('.gif') ? 'stage-img-gif' : 'stage-img'}
              />
            )}

            {activeMedia.type === 'document' && (
              <iframe
                key={activeMedia.src}
                src={activeMedia.src}
                title={activeMedia.label || 'Project Document'}
                className="stage-iframe"
              />
            )}
          </div>

          {/* Media Switcher Strip */}
          {mediaList.length > 1 && (
            <div className="stage-switcher-bar">
              <span className="stage-switcher-label">
                <Layers size={14} />
                <span>Views ({mediaList.length}):</span>
              </span>
              <div className="stage-switcher-buttons">
                {mediaList.map((media, idx) => (
                  <button
                    key={media.src + idx}
                    type="button"
                    className={`stage-tab-btn ${activeMediaIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveMediaIndex(idx)}
                  >
                    {media.type === 'video' && <Video size={13} />}
                    {media.type === 'image' && <ImageIcon size={13} />}
                    {media.type === 'document' && <FileText size={13} />}
                    <span>{media.label || `Media ${idx + 1}`}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Case Study Deep-Dive Sections */}
        <div className="project-details-grid">
          {/* Main Column: System Implementation & Highlights */}
          <div className="project-main-col">
            {project.highlights?.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-title">
                  System Architecture & Implementation Highlights
                </h2>
                <ul className="project-highlights-list">
                  {project.highlights.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar Column: Tech Stack & Metadata */}
          <aside className="project-sidebar-col">
            <div className="detail-section">
              <h3 className="detail-sidebar-title">Technologies & Tools</h3>
              <div className="tech-tag-row">
                {project.tech.map((t) => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h3 className="detail-sidebar-title">Engineering Discipline</h3>
              <span className="sidebar-meta-text">{project.categoryLabel}</span>
            </div>
          </aside>
        </div>

        {/* Pagination Navigation: Previous & Next Project */}
        <nav className="project-pagination-row" aria-label="Project Navigation">
          {prevProject ? (
            <button
              type="button"
              className="pagination-btn pagination-prev"
              onClick={() => onSelectProject(prevProject)}
            >
              <ArrowLeft size={16} />
              <div className="pagination-text">
                <span className="pagination-sub">Previous Project</span>
                <span className="pagination-title">{prevProject.title}</span>
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextProject ? (
            <button
              type="button"
              className="pagination-btn pagination-next"
              onClick={() => onSelectProject(nextProject)}
            >
              <div className="pagination-text" style={{ textAlign: 'right' }}>
                <span className="pagination-sub">Next Project</span>
                <span className="pagination-title">{nextProject.title}</span>
              </div>
              <ArrowRight size={16} />
            </button>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </div>
  );
}
