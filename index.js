const portfolioProjects = [
  {
    id: "gesture-controlled-xts",
    title: "Gesture Controlled XTS System",
    category: "robotics",
    categoryLabel: "Robotics",
    tech: "TwinCAT, MediaPipe, ONNX",
    summary:
      "Integrated a MediaPipe hand-landmark model in ONNX format into the TwinCAT Machine Learning Manager to execute real-time gesture detection and finger-spacing tracking.",
    highlights: [
      "Mapped ML inference outputs directly to PLC state logic for dynamic Beckhoff XTS mover behaviors such as Tractor Beam and Accordion modes.",
      "Implemented real-time position-sorting algorithms to prevent mover deadlocks and enforce collision avoidance during gesture-driven tracking.",
      "Connected computer vision and control logic in a real-time industrial motion workflow.",
    ],
    link: "#",
    media: [
      {
        type: "video",
        src: "Videos/Vision + XTS.mp4",
        poster: "images/Vision + XTS (Thumbnail).png",
      },
      {
        type: "video",
        src: "Videos/Final Project.mp4",
        poster: "images/Final Project (Thumbnail).png",
      },
      {
        type: "video",
        src: "Videos/Vision.mp4",
        poster: "images/Vision (Thumbnail).png",
      },
    ],
    preview: "Videos/Vision + XTS.mp4",
    thumbnail: "images/Vision + XTS (Thumbnail).png",
    mediaType: "video",
  },
  {
    id: "vision-robotic-arm",
    title: "Vision-Operated Robotic Arm",
    category: "robotics",
    categoryLabel: "Robotics",
    tech: "ROS2, MediaPipe, Gazebo, OpenCV, Python",
    summary:
      "Built a real-time ROS 2 pipeline translating webcam-tracked human motion into robotic joint commands.",
    highlights: [
      "Implemented 30 Hz MediaPipe skeletal tracking and computed joint angles using vector mathematics.",
      "Simulated physics-enabled URDF models in Gazebo and tuned motion profiles for stable trajectory execution.",
      "Connected human movement data to robotic control logic for responsive, real-time motion translation.",
    ],
    link: "#",
    media: [
      {
        type: "video",
        src: "Videos/Demo-video.mp4",
      },
    ],
    preview: "Videos/Demo-video.mp4",
    mediaType: "video",
  },
  {
    id: "traffic-sign-recognition",
    title: "Traffic Sign Recognition",
    category: "ml",
    categoryLabel: "Machine Learning",
    tech: "PyTorch, DINOv2, Qwen3-VL, Python",
    summary:
      "Developed a GTSRB traffic sign perception pipeline achieving 76.6% accuracy across 43 classes.",
    highlights: [
      "Built a 3-layer PyTorch MLP classifier on top of a frozen DINOv2 vision transformer backbone.",
      "Evaluated a zero-shot Qwen3-VL baseline to analyze real-time latency and reliability trade-offs.",
      "Focused on performance analysis and perception accuracy in a computer vision pipeline.",
    ],
    link: "#",
    media: [
      {
        type: "image",
        src: "images/MLP_misclassifcations.png",
        label: "Model results",
      },
      {
        type: "document",
        src: "Documents/Final Project Poster - GTSRB.pdf",
        label: "Poster PDF",
      },
      {
        type: "document",
        src: "Documents/Final Project - GTSRB.pdf",
        label: "Project report",
      },
    ],
    preview: "images/MLP_misclassifcations.png",
    mediaType: "image",
  },
  {
    id: "recipe-hub",
    title: "Recipe Hub",
    category: "web",
    categoryLabel: "Full Stack",
    tech: "Django, React, Bootstrap, SQLite",
    summary:
      "Developed a full-stack recipe web app letting users search and filter based on on-hand ingredients.",
    highlights: [
      "Integrated TheMealDB and Spoonacular APIs to fetch and normalize recipe data.",
      "Built a responsive front end with React and a Django backend to manage data access logic.",
      "Stored curated recipe data in SQLite for fast local retrieval and inventory-based filtering.",
    ],
    link: "https://github.com/YashPanchal1012/recipe_hub",
    media: [
      {
        type: "video",
        src: "Videos/recipe-hub-demo.mp4",
      },
    ],
    preview: "Videos/recipe-hub-demo.mp4",
    mediaType: "video",
  },
  {
    id: "doorbell",
    title: "Bell-less Doorbell System",
    category: "iot",
    categoryLabel: "IoT",
    tech: "C++, HTML, CSS, IFTTT",
    summary: "Built an IoT doorbell system using Photon and IFTTT.",
    highlights: [
      "Designed the HTML interface and circuit schematics in Fritzing.",
      "Programmed the microcontroller in C++ and helped with hardware assembly.",
      "Connected the system to notification workflows to create a practical smart doorbell experience.",
    ],
    link: "#",
    preview:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
  },
];

function Navbar({ onNavigate, dark, setDark }) {
  const links = [
    { label: "Home", value: "home" },
    { label: "Work", value: "Work" },
    { label: "Projects", value: "projects" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top ${
        dark ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
      style={{
        borderBottom: dark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div className="container">
        <button
          className={`btn btn-link nav-link fw-bold fs-5 p-0 ${dark ? "text-light" : "text-dark"}`}
          type="button"
          onClick={() => onNavigate("home")}
        >
          Yash Panchal
        </button>

        <div className="ms-auto d-flex align-items-center gap-3">
          {links.map((link) => (
            <button
              key={link.value}
              type="button"
              className={`btn btn-link nav-link ${dark ? "text-light-50" : "text-dark"}`}
              onClick={() => onNavigate(link.value)}
            >
              {link.label}
            </button>
          ))}

          <a
            className="nav-link"
            href="https://github.com/YashPanchal1012"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/yashwardhan-panchal-2829b8282/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <button
            type="button"
            className={`btn btn-link nav-link ${dark ? "text-light" : "text-dark"}`}
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
          >
            <i
              className={
                dark ? "bi bi-brightness-high" : "bi bi-brightness-high-fill"
              }
            ></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  const skills = [
    "Python",
    "C",
    "C++",
    "Java",
    "ROS2",
    "OpenCV",
    "MediaPipe",
    "PyTorch",
    "TwinCAT",
    "ONNX",
    "Computer Vision",
    "Robotics",
    "AI / ML",
    "Django",
    "React",
    "Next.js",
    "SQL",
    "JavaScript",
    "Git",
    "MATLAB",
  ];

  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-4 text-center">
          <div className="profile-frame mx-auto">
            <img
              src="images/Headshot1.jpg"
              alt="Yash Panchal"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>

        <div className="col-lg-8">
          <span className="badge rounded-pill px-3 py-2 mb-3 accent-pill">
            Robotics • Computer Vision • AI / ML
          </span>
          <h1 className="display-5 fw-bold mb-3">Yash Panchal</h1>
          <h4 className="text-secondary mb-3">
            Computer Science Student @ University of Minnesota - Twin Cities
          </h4>
          <p className="lead mb-4">
            I build software for robotics and intelligent systems with a focus
            on machine vision, real-time perception, and practical automation.
            My work spans computer vision, AI/ML, embedded control, and
            software-driven robotics applications.
          </p>

          <div className="d-flex flex-wrap gap-2 mb-4">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>

          <div className="row g-3">
            <div className="col-sm-4">
              <div className="stat-card">
                <div className="stat-number">4+</div>
                <div className="stat-label">Years of study</div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technical projects</div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="stat-card">
                <div className="stat-number">4+</div>
                <div className="stat-label">Work roles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkPage() {
  const positions = [
    {
      title: "Beckhoff Automation",
      role: "Automation Engineering Intern",
      location: "Savage, MN",
      logo: "images/Beckhoff_logo.jpg",
      logoBg: "linear-gradient(135deg, #1d4ed8, #60a5fa)",
      bullets: [
        "Developed a gesture-controlled TwinCAT Vision system to manipulate XTS linear movers in real time.",
        "Created technical solution proposals and proof-of-concept demos for enterprise client projects.",
        "Assisted application engineers in technical meetings and managed client project data within CRM.",
      ],
    },
    {
      title:
        "Department of Electrical and Computer Engineering, University of Minnesota",
      role: "Depot Assistant",
      location: "Minneapolis, MN",
      logo: "images/ece_umn.jpg",
      logoBg: "linear-gradient(135deg, #7c3aed, #a78bfa)",
      bullets: [
        "Maintained lab equipment for multiple ECE courses.",
        "Assembled 300+ lab kits and performed basic soldering and repairs.",
        "Advised students on part selection and inventory options.",
      ],
    },
    {
      title:
        "Department of Computer Science and Engineering, University of Minnesota",
      role: "Undergraduate Teaching Assistant",
      location: "Minneapolis, MN",
      logo: "images/cs_umn_logo.jpg",
      logoBg: "linear-gradient(135deg, #0f766e, #2dd4bf)",
      bullets: [
        "Led weekly labs for 20+ students and hosted exam prep sessions for Machine Architecture and DSA.",
        "Held office hours and graded assignments with detailed feedback.",
      ],
    },
    {
      title: "Housing and Residential Life, University of Minnesota",
      role: "Hospitality Specialist",
      location: "Minneapolis, MN",
      logo: "images/hrl_umn.jpg",
      logoBg: "linear-gradient(135deg, #b45309, #f59e0b)",
      bullets: [
        "Supported residents, enforced policies, and ensured hall safety.",
        "Conducted rounds, collaborated with staff, and used IRIS for admin tasks.",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <div className="mb-4">
        <h2 className="fw-bold mb-3">Work Experience</h2>
      </div>

      <div className="row g-4">
        {positions.map((position) => (
          <div key={position.role} className="col-12">
            <div className="experience-card">
              <div className="d-flex align-items-start gap-3 mb-3">
                <div
                  className="company-logo"
                  aria-label={`${position.title} logo`}
                >
                  {position.logo && position.logo.includes("/") ? (
                    <img
                      src={position.logo}
                      alt={`${position.title} logo`}
                      className="company-logo-image"
                    />
                  ) : (
                    position.logo
                  )}
                </div>

                <div className="flex-grow-1">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-2 mb-2">
                    <div>
                      <h4 className="fw-bold mb-1 experience-company">
                        {position.title}
                      </h4>
                      <div className="experience-role">{position.role}</div>
                    </div>
                    <span className="experience-location small">
                      {position.location}
                    </span>
                  </div>
                  <ul className="mb-0">
                    {position.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [filter, setFilter] = React.useState("all");
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = React.useState(0);

  const filters = [
    { label: "All", value: "all" },
    { label: "Web", value: "web" },
    { label: "Systems", value: "systems" },
    { label: "Robotics", value: "robotics" },
    { label: "Machine Learning", value: "ml" },
    { label: "IoT", value: "iot" },
  ];

  const visibleProjects =
    filter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === filter);

  const openProject = (project) => {
    setSelectedProject(project);
    setSelectedMediaIndex(0);
  };

  const projectMedia = selectedProject?.media?.length
    ? selectedProject.media
    : selectedProject
      ? [
          selectedProject.mediaType === "video"
            ? {
                type: "video",
                src: selectedProject.preview,
                poster: selectedProject.thumbnail || selectedProject.preview,
              }
            : {
                type: "image",
                src: selectedProject.thumbnail || selectedProject.preview,
              },
        ]
      : [];
  const activeMedia = projectMedia[selectedMediaIndex] || projectMedia[0];

  const renderMedia = (mediaItem, options = {}) => {
    if (!mediaItem) {
      return null;
    }

    if (mediaItem.type === "video") {
      return (
        <video
          key={options.key || mediaItem.src}
          controls={!options.thumbnail}
          autoPlay={Boolean(options.autoPlay)}
          muted={Boolean(options.thumbnail)}
          loop={Boolean(options.thumbnail)}
          playsInline
          preload={options.thumbnail ? "metadata" : "auto"}
          poster={mediaItem.poster || mediaItem.src}
          className={options.className}
          style={options.style}
        >
          <source src={mediaItem.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    if (mediaItem.type === "document") {
      return (
        <iframe
          key={options.key || mediaItem.src}
          src={mediaItem.src}
          title={mediaItem.label || mediaItem.src}
          className={options.className}
          style={options.style}
        />
      );
    }

    return (
      <img
        key={options.key || mediaItem.src}
        src={mediaItem.src}
        alt={mediaItem.label || selectedProject?.title || "Project media"}
        className={options.className}
        style={options.style}
      />
    );
  };

  return (
    <div className="container py-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <h2 className="fw-bold mb-0">Projects</h2>

        <div className="d-flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`btn btn-sm ${
                filter === item.value ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="row g-4">
        {visibleProjects.map((project) => (
          <div key={project.id} className="col-md-6 col-xl-4">
            <div className="project-card h-100">
              <div className="project-image">
                {project.mediaType === "video" ? (
                  <div className="project-video-preview">
                    <img
                      src={project.thumbnail || project.preview}
                      alt={project.title}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                    <span className="project-play-badge">Play video</span>
                  </div>
                ) : (
                  <img
                    src={project.thumbnail || project.preview}
                    alt={project.title}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <span className="project-tag">{project.categoryLabel}</span>
              </div>

              <div className="p-3">
                <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                  <h4 className="fw-bold mb-0">{project.title}</h4>
                  {project.link && project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="small text-primary"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>

                <div className="project-tech small mb-3">{project.tech}</div>
                <p className="mb-3">{project.summary}</p>

                <ul className="mb-3 small">
                  {project.highlights.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => openProject(project)}
                >
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject ? (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3"
              aria-label="Close"
              onClick={() => setSelectedProject(null)}
            ></button>

            <div className="project-modal-media">
              {renderMedia(activeMedia, {
                key: activeMedia?.src,
                className: "w-100 h-100",
                style: { objectFit: "cover" },
              })}
            </div>

            {projectMedia.length > 1 ? (
              <div className="project-media-strip px-4 pt-3 d-flex flex-wrap gap-2">
                {projectMedia.map((mediaItem, index) => (
                  <button
                    key={`${selectedProject.id}-${index}`}
                    type="button"
                    className={`project-media-thumb ${
                      index === selectedMediaIndex ? "active" : ""
                    }`}
                    onClick={() => setSelectedMediaIndex(index)}
                  >
                    {mediaItem.type === "document" ? (
                      <div className="project-document-thumb">
                        <span>PDF</span>
                        <small>{mediaItem.label || "Document"}</small>
                      </div>
                    ) : mediaItem.type === "video" ? (
                      <img
                        src={mediaItem.poster || mediaItem.src}
                        alt={`${selectedProject.title} media ${index + 1}`}
                        className="w-100 h-100"
                      />
                    ) : (
                      <img
                        src={mediaItem.src}
                        alt={`${selectedProject.title} media ${index + 1}`}
                        className="w-100 h-100"
                      />
                    )}
                  </button>
                ))}
              </div>
            ) : null}

            <div className="p-4">
              <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
                <h3 className="fw-bold mb-0">{selectedProject.title}</h3>
                <span className="project-tag">
                  {selectedProject.categoryLabel}
                </span>
              </div>

              <div className="project-tech mb-3">{selectedProject.tech}</div>
              <p>{selectedProject.summary}</p>

              <ul>
                {selectedProject.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {selectedProject.link && selectedProject.link !== "#" ? (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  View project
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function App() {
  const [page, setPage] = React.useState("home");
  const [dark, setDark] = React.useState(true);

  React.useEffect(() => {
    document.body.className = dark
      ? "bg-dark text-light"
      : "bg-light text-dark";
    document.body.style.transition = "background 0.2s ease, color 0.2s ease";
  }, [dark]);

  let content;
  if (page === "home") content = <Home />;
  else if (page === "Work") content = <WorkPage />;
  else if (page === "projects") content = <ProjectsPage />;

  return (
    <>
      <style>
        {`
          body {
            min-height: 100vh;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          a {
            text-decoration: none;
          }

          .nav-link {
            cursor: pointer;
          }

          .profile-frame {
            width: min(90%, 260px);
            border-radius: 50%;
            padding: 12px;
            background: linear-gradient(135deg, rgba(125, 211, 252, 0.9), rgba(59, 130, 246, 0.9));
            box-shadow: 0 18px 45px rgba(59, 130, 246, 0.25);
          }

          .profile-frame img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .accent-pill {
            background: rgba(125, 211, 252, 0.14);
            color: #5cc9ff;
            border: 1px solid rgba(125, 211, 252, 0.45);
          }

          .skill-pill {
            padding: 0.5rem 0.8rem;
            border-radius: 999px;
            background: rgba(148, 163, 184, 0.12);
            border: 1px solid rgba(148, 163, 184, 0.22);
            font-size: 0.82rem;
            font-weight: 600;
          }

          .stat-card,
          .experience-card,
          .project-card {
            border: 1px solid rgba(148, 163, 184, 0.18);
            border-radius: 18px;
            background: rgba(15, 23, 42, 0.03);
            transition: transform 0.25s ease, box-shadow 0.25s ease;
            color: inherit;
          }

          .experience-company {
            color: #0f172a;
            font-size: 1.35rem;
            line-height: 1.2;
          }

          .experience-role {
            color: #2563eb;
            font-size: 1.05rem;
            font-weight: 700;
          }

          .experience-location {
            color: #475569;
          }

          .company-logo {
            width: 52px;
            height: 52px;
            border-radius: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 800;
            font-size: 1rem;
            letter-spacing: 0.04em;
            flex-shrink: 0;
            overflow: hidden;
            background: transparent;
            box-shadow: none;
          }

          .company-logo-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            background: transparent;
            border-radius: 0;
          }

          .dark .stat-card,
          .dark .experience-card,
          .dark .project-card {
            background: rgba(15, 23, 42, 0.42);
          }

          .stat-card {
            padding: 1.2rem;
            min-height: 110px;
          }

          .stat-number {
            font-size: 2rem;
            font-weight: 800;
            color: #60a5fa;
          }

          .stat-label {
            font-size: 0.85rem;
            opacity: 0.8;
          }

          .experience-card,
          .project-card {
            overflow: hidden;
            box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
          }

          .experience-card {
            padding: 1.5rem;
          }

          .experience-card:hover,
          .project-card:hover,
          .stat-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 18px 35px rgba(15, 23, 42, 0.12);
          }

          .project-card {
            background: rgba(15, 23, 42, 0.02);
          }

          .project-image {
            height: 210px;
            position: relative;
            overflow: hidden;
          }

          .project-image img,
          .project-image video {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
          }

          .project-tag {
            display: inline-block;
            padding: 0.4rem 0.7rem;
            border-radius: 999px;
            background: rgba(15, 23, 42, 0.72);
            color: white;
            font-size: 0.72rem;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            position: absolute;
            left: 1rem;
            bottom: 1rem;
          }

          .project-video-preview {
            width: 100%;
            height: 100%;
            position: relative;
          }

          .project-play-badge {
            position: absolute;
            inset: auto auto 1rem 1rem;
            padding: 0.35rem 0.7rem;
            border-radius: 999px;
            background: rgba(15, 23, 42, 0.8);
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.04em;
            text-transform: uppercase;
          }

          .project-card .p-3,
          .project-modal .p-4 {
            color: inherit;
          }

          .project-tech {
            color: #64748b;
          }

          .project-modal {
            color: #0f172a;
          }

          .project-modal h3,
          .project-modal p,
          .project-modal li {
            color: #0f172a;
          }

          .project-modal .btn-primary {
            color: #fff;
          }

          .project-media-strip {
            background: rgba(15, 23, 42, 0.02);
          }

          .project-media-thumb {
            width: 78px;
            height: 54px;
            padding: 0;
            border: 2px solid transparent;
            border-radius: 10px;
            overflow: hidden;
            background: transparent;
            flex: 0 0 auto;
          }

          .project-media-thumb img,
          .project-media-thumb video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .project-media-thumb.active {
            border-color: #2563eb;
          }

          .project-document-thumb {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2px;
            background: linear-gradient(135deg, #dbeafe, #bfdbfe);
            color: #1e3a8a;
            font-weight: 700;
          }

          .project-document-thumb span {
            font-size: 0.82rem;
          }

          .project-document-thumb small {
            font-size: 0.6rem;
            line-height: 1;
            text-align: center;
            padding: 0 4px;
          }

          .project-modal-media iframe {
            width: 100%;
            height: 100%;
            border: 0;
            display: block;
            background: #fff;
          }

          .project-modal .project-tag {
            background: rgba(37, 99, 235, 0.9);
          }

          .dark .project-card,
          .dark .project-modal {
            color: #e5e7eb;
          }

          .dark .project-card .project-tech,
          .dark .project-modal .project-tech,
          .dark .project-card .text-secondary,
          .dark .project-modal .text-secondary {
            color: #cbd5e1 !important;
          }

          .dark .project-card p,
          .dark .project-card li,
          .dark .project-modal p,
          .dark .project-modal li {
            color: #f8fafc;
          }

          .dark .project-card a,
          .dark .project-modal a {
            color: #93c5fd !important;
          }

          .dark .project-modal {
            color: #f8fafc;
          }

          .dark .project-modal h3,
          .dark .project-modal p,
          .dark .project-modal li {
            color: #f8fafc;
          }

          .dark .project-media-strip {
            background: rgba(148, 163, 184, 0.08);
          }

          .dark .project-media-thumb.active {
            border-color: #93c5fd;
          }

          .dark .project-document-thumb {
            background: linear-gradient(135deg, #1e293b, #334155);
            color: #e2e8f0;
          }

          .dark .project-play-badge {
            background: rgba(2, 6, 23, 0.85);
          }

          .dark .project-modal .project-tag {
            background: rgba(59, 130, 246, 0.9);
          }

          .dark .experience-company {
            color: #f8fafc;
          }

          .dark .experience-role {
            color: #93c5fd;
          }

          .dark .experience-location {
            color: #cbd5e1;
          }

          .modal-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(15, 23, 42, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1040;
            padding: 1rem;
          }

          .project-modal {
            position: relative;
            width: min(900px, 100%);
            max-height: 90vh;
            overflow: auto;
            border-radius: 20px;
            background: var(--bs-body-bg);
            border: 1px solid rgba(148, 163, 184, 0.18);
            box-shadow: 0 28px 70px rgba(0, 0, 0, 0.35);
          }

          .project-modal-media {
            height: 310px;
            background: #0f172a;
          }

          .project-modal-media img,
          .project-modal-media video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          @media (max-width: 768px) {
            .project-modal-media {
              height: 220px;
            }
          }
        `}
      </style>

      <Navbar onNavigate={setPage} dark={dark} setDark={setDark} />
      {content}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
