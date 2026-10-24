const GITHUB_PROFILE = "https://github.com/Nitarya";
const GITHUB_REPO = "https://github.com/Nitarya/Mini-blog-deploy-hostinger";
const EMAIL = "nitya@remasto.com";

const skills = [
  "Next.js",
  "React",
  "Node.js",
  "JavaScript",
  "GitHub Actions (CI/CD)",
  "Linux VPS deployment",
];

export default function HomePage() {
  return (
    <main>
      <nav className="nav container">
        <span className="nav-brand">Nitya</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero container">
        <p className="hero-kicker">Hi, I&apos;m</p>
        <h1 className="hero-title">Nitya</h1>
        <p className="hero-subtitle">
          Developer building and shipping small, focused web projects —
          end to end, from code to a live server.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
            Get in touch
          </a>
          <a
            className="btn btn-secondary"
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>
      </section>

      <section id="about" className="section container">
        <h2 className="section-title">About</h2>
        <p className="section-text">
          I like building small projects well rather than big projects
          halfway — clean file structure, a pipeline that actually deploys,
          and no more moving parts than the project needs.
        </p>
        <ul className="skills">
          {skills.map((skill) => (
            <li key={skill} className="skill-pill">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="section container">
        <h2 className="section-title">Projects</h2>
        <a
          href={GITHUB_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h3>Mini Blog — Deploy to Hostinger</h3>
          <p className="excerpt">
            A minimal Next.js blog with file-based routing, deployed via a
            GitHub Actions pipeline that SSHes into a Hostinger VPS, builds
            the app, and restarts it with pm2.
          </p>
          <span className="card-link">View on GitHub →</span>
        </a>
        <a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="card card-muted"
        >
          <h3>More on GitHub</h3>
          <p className="excerpt">
            Check out the rest of my repositories and what I&apos;m currently
            working on.
          </p>
          <span className="card-link">github.com/Nitarya →</span>
        </a>
      </section>

      <section id="contact" className="section container">
        <h2 className="section-title">Contact</h2>
        <p className="section-text">
          Want to work together or just say hi? Reach out.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <a
            className="btn btn-secondary"
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} Nitya</span>
      </footer>
    </main>
  );
}
