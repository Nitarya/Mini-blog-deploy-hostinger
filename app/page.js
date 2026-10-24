const GITHUB_PROFILE = "https://github.com/Nitarya";
const EMAIL = "niittss27@gmail.com";

const skills = [
  "Next.js",
  "React",
  "Node.js",
  "JavaScript",
  "GitHub Actions (CI/CD)",
  "Linux VPS deployment",
];

const projects = [
  {
    name: "Mini Blog — Deploy to Hostinger",
    description:
      "A Next.js site deployed via a GitHub Actions pipeline that SSHes into a VPS, builds, and restarts it with pm2. This portfolio runs on the same pipeline.",
    stack: ["Next.js", "GitHub Actions", "PM2"],
    live: "https://nitya.tech",
    code: "https://github.com/Nitarya/Mini-blog-deploy-hostinger",
  },
  {
    name: "Local Business Directory",
    description:
      "A business directory with public search/category filters and a JWT-authenticated admin panel for managing listings.",
    stack: ["Next.js", "TypeScript", "MongoDB", "JWT"],
    live: "https://directory-listing-smoky.vercel.app/",
    code: "https://github.com/Nitarya/directory-listing",
  },
  {
    name: "JobFindKaro",
    description:
      "A job search app that filters open roles by job type, location, and experience level.",
    stack: ["React", "Vite", "Tailwind"],
    live: "https://job-find-karo.netlify.app/",
    code: "https://github.com/Nitarya/JobFindKaro",
  },
  {
    name: "AI Image Generator",
    description:
      "Generates images from a text prompt using the OpenAI API, with a simple React front end.",
    stack: ["React", "OpenAI API"],
    live: "https://self-ai-image-generator.netlify.app/",
    code: "https://github.com/Nitarya/AI-Image-Generator",
  },
  {
    name: "Inventory & Order Management",
    description:
      "Full-stack inventory system with product/customer/order CRUD, stock validation, and JWT auth — single Docker image, Railway-ready.",
    stack: ["FastAPI", "React", "PostgreSQL", "Docker"],
    code: "https://github.com/Nitarya/Inventory-Management",
  },
  {
    name: "Multi-Tenant SaaS Settings",
    description:
      "A business settings module with user profiles and role-based access control (RBAC) for managing users and permissions.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    code: "https://github.com/Nitarya/multi-tenant-saas-business",
  },
  {
    name: "QR Code Generator",
    description:
      "Server-side QR code generation with Redis caching and MongoDB-backed history, packaged with Docker Compose.",
    stack: ["React", "Express", "Redis", "MongoDB", "Docker"],
    code: "https://github.com/Nitarya/qr-code-generator",
  },
  {
    name: "Product Catalog",
    description:
      "A polished storefront-style product listing with search, category filters, sorting, and pagination against a live product API.",
    stack: ["React 19", "Vite", "Tailwind CSS"],
    code: "https://github.com/Nitarya/products-fetching",
  },
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/avatar.jpg" alt="Nitya" className="avatar" />
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
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.name} className="project-card">
              <h3>{project.name}</h3>
              <p className="excerpt">{project.description}</p>
              <ul className="skills project-stack">
                {project.stack.map((tech) => (
                  <li key={tech} className="skill-pill">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="project-links">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    Live demo →
                  </a>
                )}
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Code →
                </a>
              </div>
            </div>
          ))}
        </div>
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
