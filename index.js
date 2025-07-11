function Navbar() {
    const [dark, setDark] = React.useState(false);
    React.useEffect(() => {
        document.body.className = dark ? 'bg-dark text-light' : 'bg-light text-dark';
    }, [dark]);
    return (
        <nav className={`navbar navbar-expand-lg ${dark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container">
                <div className="mx-auto">
                    <ul className="navbar-nav flex-row justify-content-center align-items-center gap-3">
                        <li className="nav-item">
                            <a className="nav-link fw-bold fs-5" href="#">Yash Panchal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/YashPanchal1012" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/yashwardhan-panchal-2829b8282/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-secondary ms-2" onClick={() => setDark(d => !d)}>
                                {dark ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function App() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <section id="experience">
                    <h2>Experience</h2>
                    <p>Add your work experience here.</p>
                </section>
                <section id="projects" className="mt-5">
                    <h2>Projects</h2>
                    <p>Add your projects here.</p>
                </section>
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));