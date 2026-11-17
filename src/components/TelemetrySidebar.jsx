import React from 'react';
import { 
  FileText, 
  Mail, 
  Check, 
  Sun, 
  Moon, 
  Layers, 
  Activity, 
  Cpu, 
  Terminal,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function TelemetrySidebar({
  theme,
  toggleTheme,
  activeSection,
  onNavigate,
  inspectedProject,
  onCopyEmail,
  copied,
}) {
  // Generate telemetry rows based on inspected project or global default
  const getTelemetryRows = () => {
    if (!inspectedProject) {
      return [
        { key: 'Status', val: 'STANDBY // READY' },
        { key: 'Loop Rate', val: '30 Hz Deterministic' },
        { key: 'Indexed', val: '8 Verified Systems' },
        { key: 'Domain', val: 'Spatial AI & Robotics' },
        { key: 'Pipeline', val: 'Sensors → ML → TwinCAT' },
      ];
    }

    switch (inspectedProject.id) {
      case 'gesture-controlled-xts':
        return [
          { key: 'Target', val: 'Beckhoff XTS Linear Mover' },
          { key: 'Loop Rate', val: '30 Hz Real-Time' },
          { key: 'Precision', val: 'Sub-millimeter' },
          { key: 'Inference', val: 'MediaPipe ONNX' },
          { key: 'Motion PLC', val: 'TwinCAT 3 / ST' },
        ];
      case 'vision-robotic-arm':
        return [
          { key: 'Environment', val: 'Gazebo Physics Sim' },
          { key: 'Tracking', val: '30 FPS MediaPipe' },
          { key: 'Kinematics', val: '3 Revolute + Gripper' },
          { key: 'Middleware', val: 'ROS2 Humble' },
          { key: 'Debounce', val: 'Hysteresis Window' },
        ];
      case 'flow-matching':
        return [
          { key: 'Architecture', val: '3.91M Residual U-Net' },
          { key: 'Eval Score', val: '89.1% Recognition' },
          { key: 'ODE Solver', val: '50-Step Heun' },
          { key: 'Coupling', val: 'Optimal Transport' },
          { key: 'Embeddings', val: '32-dim Sinusoidal' },
        ];
      case '3d-scene-reconstruction':
        return [
          { key: 'Gaussians', val: '190,356 Splats' },
          { key: 'Reprojection', val: '0.338 px RMS' },
          { key: 'Novel PSNR', val: '25.74 dB' },
          { key: 'SfM Model', val: '15,129 Pts / 38 Views' },
          { key: 'Refinement', val: 'Levenberg-Marquardt' },
        ];
      case 'panoramic-image-stitching':
        return [
          { key: 'Descriptor', val: "SIFT (Lowe's 0.7)" },
          { key: 'RANSAC', val: 'p = 0.99 Confidence' },
          { key: 'Projection', val: 'Cylindrical Warp' },
          { key: 'Blending', val: 'Feather Distance Map' },
          { key: 'Estimation', val: 'Normalized DLT' },
        ];
      case 'traffic-sign-recognition':
        return [
          { key: 'Dataset', val: 'GTSRB (43 Classes)' },
          { key: 'Top-1 Acc', val: '76.6%' },
          { key: 'Backbone', val: 'Frozen DINOv2 Large' },
          { key: 'Classifier', val: '3-Layer PyTorch MLP' },
          { key: 'Baseline', val: 'Qwen-VL Zero-Shot' },
        ];
      case 'semantic-image-search':
        return [
          { key: 'Encoder', val: 'OpenAI CLIP ViT' },
          { key: 'Vectors', val: '512-dim Normalized' },
          { key: 'Latency', val: '< 50ms Cosine Search' },
          { key: 'Modality', val: 'Text & Image-to-Image' },
          { key: 'Interface', val: 'Gradio Real-Time UI' },
        ];
      case 'recipe-hub':
        return [
          { key: 'Architecture', val: 'Decoupled React SPA' },
          { key: 'Backend', val: 'Django REST Framework' },
          { key: 'Database', val: 'Relational SQLite' },
          { key: 'External API', val: 'TheMealDB & Spoonacular' },
          { key: 'Client Stack', val: 'React 18 + Vite' },
        ];
      default:
        return [
          { key: 'Category', val: inspectedProject.categoryLabel || 'Engineering' },
          { key: 'Tech Stack', val: inspectedProject.tech?.slice(0, 3).join(', ') },
          { key: 'Status', val: 'Verified & Documented' },
        ];
    }
  };

  const telemetryRows = getTelemetryRows();

  return (
    <aside className="workbench-sidebar" aria-label="Engineer Sidebar">
      <div className="sidebar-inner">
        {/* Identity & Academic Credentials */}
        <div className="sidebar-identity">
          <h1 className="sidebar-name">Yash Panchal</h1>
          <p className="sidebar-role">Robotics & Computer Vision Engineer</p>
          <p className="sidebar-school">University of Minnesota • B.S. CS '26 (3.8 GPA)</p>
        </div>

        {/* Navigation Quick-Links */}
        <nav className="sidebar-nav" aria-label="Section Navigation">
          <button
            type="button"
            className={`sidebar-nav-btn ${activeSection === 'projects' || activeSection === 'about' ? 'active' : ''}`}
            onClick={() => onNavigate('projects')}
          >
            <span className="nav-title">Projects</span>
            <ChevronRight size={13} className="nav-arrow" />
          </button>

          <button
            type="button"
            className={`sidebar-nav-btn ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => onNavigate('experience')}
          >
            <span className="nav-title">Experience</span>
            <ChevronRight size={13} className="nav-arrow" />
          </button>
        </nav>

        {/* Clean Project Telemetry Inspector */}
        <div className={`telemetry-hud-card ${inspectedProject ? 'active' : 'idle'}`}>
          {inspectedProject ? (
            <>
              <div className="hud-project-name">{inspectedProject.title}</div>
              <div className="telemetry-table">
                {telemetryRows.map((row) => (
                  <div key={row.key} className="telemetry-row">
                    <span className="telemetry-key">{row.key}</span>
                    <span className="telemetry-dots" aria-hidden="true" />
                    <span className="telemetry-val">{row.val}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="hud-idle-state">
              <span className="hud-idle-label">System Metrics</span>
              <p className="hud-idle-hint">Hover any project to inspect verified telemetry</p>
            </div>
          )}
        </div>

        {/* Action Controls & Social Links */}
        <div className="sidebar-actions">
          <div className="actions-primary">
            <a
              href="Documents/Yash_Panchal_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="sidebar-btn-action"
              title="Open Resume PDF"
            >
              <FileText size={14} />
              <span>Resume PDF</span>
            </a>

            <button
              type="button"
              className="sidebar-btn-action"
              onClick={onCopyEmail}
              title="Copy Email Address"
            >
              {copied ? <Check size={14} color="var(--accent)" /> : <Mail size={14} />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>
          </div>

          <div className="actions-footer">
            <div className="sidebar-socials">
              <a
                href="https://github.com/YashPanchal1012"
                target="_blank"
                rel="noreferrer"
                className="sidebar-icon-btn"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/yashwardhan-panchal-2829b8282/"
                target="_blank"
                rel="noreferrer"
                className="sidebar-icon-btn"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>

            <button
              type="button"
              className="sidebar-theme-toggle"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
