function Navbar({ onNavigate, dark, setDark }) {
  return (
    <nav
      className={`navbar navbar-expand-lg nav-underline ${
        dark ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <div className="mx-auto">
          <ul className="navbar-nav flex-row justify-content-center align-items-center gap-3">
            <li className="nav-item">
              <a
                className="nav-link fw-bold fs-5"
                onClick={() => onNavigate("home")}
              >
                Yash Panchal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => onNavigate("Work")}>
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => onNavigate("projects")}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/YashPanchal1012">
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/yashwardhan-panchal-2829b8282/"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon-link-hover">
                <i
                  className={`
                  ${
                    dark
                      ? "bi bi-brightness-high"
                      : "bi bi-brightness-high-fill"
                  }`}
                  onClick={() => setDark((d) => !d)}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src="images/Profile Picture.jpg"
            alt="Yash Panchal"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: "220px" }}
          />
        </div>
        <div className="col-md-8">
          <h2 className="fw-bold">About Me</h2>
          <h5 className="text-secondary mb-1">
            CS Student @ University of Minnesota - Twin Cities
          </h5>
          <p>
            I am a passionate computer science student with a strong interest in
            software engineering, web development, and data science. I enjoy
            building impactful projects, learning new technologies, and
            collaborating with others to solve real-world problems. I am always
            eager to take on new challenges and grow as a developer.
          </p>
        </div>
      </div>
    </div>
  );
}

function WorkPage() {
  return (
    <div className="container mt-5 align-items-center">
      <h2 className="mb-4">Work</h2>
      <div className="mb-4">
        <h5 className="fw-bold mb-1">
          ECE DEPARTMENT, UMN{" "}
          <span className="text-secondary">| Depot Assistant</span>
        </h5>
        <div className="text-secondary mb-1">
          Jan 2024 - Present | Minneapolis, MN
        </div>
        <ul>
          <li>Maintained lab equipment for multiple ECE courses.</li>
          <li>
            Assembled 300+ lab kits and performed basic soldering and repairs.
          </li>
          <li>Advised students on part selection and inventory options.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h5 className="fw-bold mb-1">
          CS&amp;E DEPARTMENT, UMN{" "}
          <span className="text-secondary">
            | Undergraduate Teaching Assistant
          </span>
        </h5>
        <div className="text-secondary mb-1">
          Sep 2024 - Dec 2024 | Minneapolis, MN
        </div>
        <ul>
          <li>
            Led weekly labs for 20+ students and hosted exam prep sessions.
          </li>
          <li>
            Held office hours and graded assignments with detailed feedback.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h5 className="fw-bold mb-1">
          HOUSING &amp; RESIDENTIAL LIFE, UMN{" "}
          <span className="text-secondary">
            | Hospitality Specialist
          </span>
        </h5>
        <div className="text-secondary mb-1">
          May 2024 - Aug 2024 | Minneapolis, MN
        </div>
        <ul>
          <li>
            Supported residents, enforced policies, and ensured hall safety.
          </li>
          <li>
            Conducted rounds, collaborated with staff, and used IRIS for admin
            tasks.
          </li>
        </ul>
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="container mt-5 align-items-center">
      <h2 className="mb-4">Projects</h2>
      <div className="mb-4">
        <h5 className="fw-bold mb-1">
          RECIPE HUB{" "}
          <span className="text-secondary">
            | Django, React, Bootstrap, SQLite
          </span>
        </h5>
        <div className="text-secondary mb-1">
          Jun 2025 - Present | Minneapolis, MN
        </div>
        <ul>
          <li>
            Developed a full-stack recipe web app that lets users search and
            filter recipes based on ingredients they have on hand.
          </li>
          <li>
            Integrated TheMealDB and Spoonacular APIs to fetch diverse recipe
            data, then cleaned and stored it in a local SQLite database using
            Python scripts.
          </li>
          <li>
            Built a responsive front end with React and Bootstrap, and
            implemented a Django backend to manage data access and filtering
            logic.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h5 className="fw-bold mb-1">
          CONCORDANCER <span className="text-secondary">| C</span>
        </h5>
        <div className="text-secondary mb-1">Feb 2025 | Minneapolis, MN</div>
        <ul>
          <li>
            Built a Concordancer using a hash table and linked list chaining.
          </li>
          <li>Added CLI support for adding, searching, and managing words.</li>
          <li>Enabled dictionary-based spell check with file I/O support.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h5 className="fw-bold mb-1">
          HUFFMAN ENCODER AND DECODER{" "}
          <span className="text-secondary">| Java</span>
        </h5>
        <div className="text-secondary mb-1">
          Feb – Mar 2024 | Minneapolis, MN
        </div>
        <ul>
          <li>Developed a file compressor using Huffman Coding Trees.</li>
          <li>Designed an OOP solution with 4 classes and 20+ methods.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h5 className="fw-bold mb-1">
          Othello <span className="text-secondary">| Python </span>
        </h5>
        <div className="text-secondary mb-1">Jan 2024 - Feb 2024</div>
        <ul>
          <li>
            Developed an Othello game with an AI opponent, playable in the
            terminal using Unicode characters.
          </li>
          <li>
            Implemented a random move player and an AI player utilizing
            strategic board evaluation for optimized decision-making.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h5 className="fw-bold mb-1">
          BELL-LESS DOORBELL SYSTEM{" "}
          <span className="text-secondary">
            | C++, HTML, CSS, IFTTT
          </span>
        </h5>
        <div className="text-secondary mb-1">
          Nov – Dec 2023 | Minneapolis, MN
        </div>
        <ul>
          <li>Built an IoT doorbell system using Photon and IFTTT.</li>
          <li>Designed HTML interface and circuit schematics in Fritzing.</li>
          <li>
            Programmed micro controller in C++ and helped with hardware
            assembly.
          </li>
        </ul>
      </div>
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
  }, [dark]);
  let content;
  if (page === "home") content = <Home />;
  else if (page === "Work") content = <WorkPage />;
  else if (page === "projects") content = <ProjectsPage />;
  return (
    <>
      <Navbar onNavigate={setPage} dark={dark} setDark={setDark} />
      {content}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
