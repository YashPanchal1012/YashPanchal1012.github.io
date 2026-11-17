import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero({ onNavigate }) {
  return (
    <section id="about" className="hero-section hero-workbench-stage">
      <div className="container">
        <div className="hero-grid">
          {/* Main Statement Column */}
          <div className="hero-intro">
            <h1 className="hero-statement">
              Engineering real-time robotic perception, 3D computer vision, and industrial motion control.
            </h1>

            <p className="hero-bio">
              Connecting PyTorch and ROS2 neural pipelines directly to deterministic TwinCAT automation.
              Building from spatial mathematical formulations to physical hardware execution.
            </p>

            <div className="hero-cta-group">
              <button 
                type="button" 
                className="btn-primary" 
                onClick={() => onNavigate('projects')}
              >
                <span>Explore Projects</span>
                <ArrowDown size={15} />
              </button>
            </div>
          </div>

          {/* Clean Hardware Video Showcase */}
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
                Closed-loop Beckhoff XTS mover tracking with TwinCAT 3 and ONNX inference.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
