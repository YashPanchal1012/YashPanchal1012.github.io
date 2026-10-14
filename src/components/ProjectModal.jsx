import React, { useState, useEffect } from 'react';
import { X, ExternalLink, FileText, Video, Image as ImageIcon, Sparkles, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  useEffect(() => {
    setActiveMediaIndex(0);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

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

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close Project Modal"
        >
          <X size={20} />
        </button>

        {/* Media Viewport */}
        <div className="modal-media-viewport">
          {activeMedia.type === 'video' && (
            <video
              key={activeMedia.src}
              controls
              autoPlay
              playsInline
              poster={activeMedia.poster || project.thumbnail}
            >
              <source src={activeMedia.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {activeMedia.type === 'image' && (
            <img
              key={activeMedia.src}
              src={activeMedia.src}
              alt={activeMedia.label || project.title}
            />
          )}

          {activeMedia.type === 'document' && (
            <iframe
              key={activeMedia.src}
              src={activeMedia.src}
              title={activeMedia.label || 'Project Document'}
            />
          )}
        </div>

        {/* Multi-Media Switcher Strip */}
        {mediaList.length > 1 && (
          <div className="modal-media-strip">
            <span className="media-strip-label">
              <Layers size={14} />
              <span>Views:</span>
            </span>
            {mediaList.map((media, idx) => (
              <button
                key={media.src + idx}
                type="button"
                className={`media-thumbnail-btn ${activeMediaIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveMediaIndex(idx)}
              >
                {media.type === 'video' && <Video size={14} />}
                {media.type === 'image' && <ImageIcon size={14} />}
                {media.type === 'document' && <FileText size={14} />}
                <span>{media.label || `Media ${idx + 1}`}</span>
              </button>
            ))}
          </div>
        )}

        {/* Modal Content */}
        <div className="modal-body">
          <div className="modal-meta-row">
            <div>
              <span className="category-badge" style={{ position: 'static', marginBottom: '0.6rem', display: 'inline-block' }}>
                {project.categoryLabel}
              </span>
              <h2 className="modal-title">{project.title}</h2>
            </div>

            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <ExternalLink size={16} />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            {project.summary}
          </p>

          {/* Telemetry row in modal */}
          {project.telemetry && (
            <div className="telemetry-row" style={{ marginBottom: '1.5rem' }}>
              {Object.entries(project.telemetry).map(([k, v]) => (
                <span key={k} className="telemetry-chip" style={{ fontSize: '0.82rem', padding: '0.35rem 0.8rem' }}>
                  <Sparkles size={12} />
                  <span><strong>{k.toUpperCase()}:</strong> {v}</span>
                </span>
              ))}
            </div>
          )}

          {/* Highlights */}
          {project.highlights?.length > 0 && (
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.85rem', color: 'var(--text-primary)' }}>
                System Architecture & Key Implementations
              </h4>
              <ul className="exp-bullets">
                {project.highlights.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
              Technologies Utilized
            </h4>
            <div className="tech-tag-row">
              {project.tech.map((t) => (
                <span key={t} className="tech-chip" style={{ fontSize: '0.82rem', padding: '0.3rem 0.7rem' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
