import Nav from "./Nav";
import Reveal from "./Reveal";

const GITHUB_PROFILE = "https://github.com/Nitarya";
const LINKEDIN_PROFILE = "https://www.linkedin.com/in/nitya-agarwal-developer";
const EMAIL = "niittss27@gmail.com";

const skillGroups = [
  { label: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", skills: ["Node.js", "Express", "FastAPI"] },
  { label: "Data", skills: ["MongoDB", "PostgreSQL", "Redis"] },
  { label: "DevOps", skills: ["Docker", "GitHub Actions", "Nginx", "PM2"] },
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

function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent-dim)] text-xs font-semibold text-[var(--accent)]">
        {index}
      </span>
      <span className="text-sm font-semibold text-[var(--text)]">{children}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] font-sans text-[var(--text)] selection:bg-[var(--accent)] selection:text-white">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[var(--btn-bg)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--btn-text)]"
      >
        Skip to content
      </a>

      <Nav />

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--accent-dim),_transparent_60%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-[1.3fr_0.7fr]">
          <div className="animate-fade-up">
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-dim)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
              Full-Stack Developer
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-[var(--accent)]">Nitya</span>.
            </h1>
            <p className="text-balance mt-6 max-w-md text-base leading-relaxed text-[var(--text-muted)]">
              I build and ship small, focused web products end to end —
              React &amp; Next.js on the front, Node and FastAPI on the
              back, and a deployment pipeline that actually works.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 rounded-md bg-[var(--btn-bg)] px-5 py-3 text-sm font-semibold text-[var(--btn-text)] transition hover:opacity-90"
              >
                Get in touch
                <ArrowUpRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                View GitHub
              </a>
              <a
                href={LINKEDIN_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[260px] md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.jpg"
                alt="Nitya"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-6 hidden flex-col items-center gap-4 sm:flex">
          <span
            className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--text-faint)]"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <span className="h-16 w-px bg-gradient-to-b from-[var(--text-faint)] to-transparent" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative border-t border-[var(--border)] px-6 py-28">
        <Reveal className="mx-auto max-w-5xl">
          <SectionLabel index="01">About</SectionLabel>

          <p className="text-balance mt-10 max-w-3xl text-2xl font-semibold leading-snug text-[var(--text)] sm:text-3xl">
            I like building small projects well rather than big projects
            halfway — clean structure, a pipeline that actually deploys, and
            no more moving parts than the project needs.
          </p>

          <div className="mt-16 grid gap-8 border-t border-[var(--border)] pt-10 sm:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Work */}
      <section id="work" className="relative border-t border-[var(--border)] px-6 py-28">
        <Reveal className="mx-auto max-w-5xl">
          <SectionLabel index="02">Selected Work</SectionLabel>

          <div className="mt-10 grid gap-5">
            {projects.map((project, index) => (
              <Reveal
                key={project.name}
                delay={Math.min(index, 5) * 60}
                className="group/row rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--accent)] hover:shadow-lg"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-dim)] text-[11px] font-semibold text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text)] transition group-hover/row:text-[var(--accent)]">
                        {project.name}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--text-muted)]">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] font-medium text-[var(--text-muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-4 pl-10 sm:pl-0">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--accent)]"
                      >
                        Live
                        <ArrowUpRightIcon className="h-3.5 w-3.5" />
                      </a>
                    )}
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--accent)]"
                    >
                      Code
                      <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] transition hover:text-[var(--text)]"
          >
            See all repositories
            <ArrowUpRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-[var(--border)] px-6 py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--accent-dim),_transparent_60%)]" />

        <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionLabel index="03">Contact</SectionLabel>
          </div>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-[var(--text)] sm:text-5xl">
            Let&apos;s build
            <br className="hidden sm:block" /> something good.
          </h2>

          <div className="mt-12 flex flex-col items-center gap-7">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-md bg-[var(--btn-bg)] px-6 py-3 text-base font-semibold text-[var(--btn-text)] transition hover:opacity-90"
            >
              {EMAIL}
              <ArrowUpRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex items-center gap-3 text-sm font-medium text-[var(--text-muted)]">
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-[var(--border)] px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                GitHub
              </a>
              <a
                href={LINKEDIN_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-[var(--border)] px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-[var(--border)] px-6 py-8 text-center text-sm text-[var(--text-faint)]">
        © {new Date().getFullYear()} Nitya — Built with Next.js &amp; Tailwind CSS
      </footer>
    </main>
  );
}
