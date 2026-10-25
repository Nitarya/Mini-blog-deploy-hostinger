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

export default function HomePage() {
  return (
    <main className="bg-grain min-h-screen bg-ink font-sans text-[#f5f1ea] selection:bg-gold selection:text-ink">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="font-display text-lg italic text-[#f5f1ea]">
            Nitya
          </a>
          <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.25em] text-stone-400 sm:flex">
            <a href="#about" className="transition hover:text-[#f5f1ea]">
              About
            </a>
            <a href="#work" className="transition hover:text-[#f5f1ea]">
              Work
            </a>
            <a href="#contact" className="transition hover:text-[#f5f1ea]">
              Contact
            </a>
          </nav>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#f5f1ea] transition hover:border-gold hover:text-gold"
          >
            Say hello
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,163,106,0.1),_transparent_60%)]" />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-16 hidden select-none whitespace-nowrap font-display text-[11rem] font-medium uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(245,241,234,0.07)] lg:block xl:text-[13rem]"
        >
          Develop
        </span>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-[1.3fr_0.7fr]">
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">
              Full-Stack Developer
            </p>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] text-[#f5f1ea] sm:text-7xl lg:text-8xl">
              Hi, I&apos;m
              <br />
              <em className="italic text-gold">Nitya.</em>
            </h1>
            <p className="text-balance mt-8 max-w-md text-base leading-relaxed text-stone-400">
              I build and ship small, focused web products end to end —
              React &amp; Next.js on the front, Node and FastAPI on the
              back, and a deployment pipeline that actually works.
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-8">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 bg-[#f5f1ea] px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ink transition hover:bg-gold"
              >
                Get in touch
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-400 transition hover:text-[#f5f1ea]"
              >
                View GitHub
                <span className="h-px w-5 bg-stone-600 transition group-hover:w-8 group-hover:bg-gold" />
              </a>
              <a
                href={LINKEDIN_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-400 transition hover:text-[#f5f1ea]"
              >
                LinkedIn
                <span className="h-px w-5 bg-stone-600 transition group-hover:w-8 group-hover:bg-gold" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[260px] md:max-w-none">
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-gold/40" />
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.jpg"
                alt="Nitya"
                className="h-full w-full object-cover grayscale-[15%] contrast-[1.05]"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-6 hidden flex-col items-center gap-4 sm:flex">
          <span
            className="text-[10px] uppercase tracking-[0.3em] text-stone-600"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <span className="h-16 w-px bg-gradient-to-b from-stone-600 to-transparent" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-sm italic text-gold">01</span>
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500">
              About
            </span>
          </div>

          <p className="text-balance mt-10 max-w-3xl font-display text-2xl italic leading-snug text-[#f5f1ea] sm:text-3xl">
            &ldquo;I like building small projects well rather than big
            projects halfway — clean structure, a pipeline that actually
            deploys, and no more moving parts than the project needs.&rdquo;
          </p>

          <div className="mt-20 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs uppercase tracking-[0.25em] text-gold">
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-stone-400">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-sm italic text-gold">02</span>
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Selected Work
            </span>
          </div>

          <div className="mt-12 border-t border-white/10">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="group/row -mx-4 flex flex-col gap-5 border-b border-white/10 px-4 py-9 transition hover:bg-white/[0.02] sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="flex items-baseline gap-5">
                  <span className="shrink-0 font-display text-sm italic text-stone-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-[#f5f1ea] transition group-hover/row:text-gold sm:text-2xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-stone-400">
                      {project.description}
                    </p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-stone-600">
                      {project.stack.join(" · ")}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-5 pl-10 sm:pl-6">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-stone-400 transition hover:text-gold"
                    >
                      Live
                      <ArrowUpRightIcon className="h-3 w-3" />
                    </a>
                  )}
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-stone-400 transition hover:text-gold"
                  >
                    Code
                    <ArrowUpRightIcon className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 transition hover:text-[#f5f1ea]"
          >
            See all repositories
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-white/10 px-6 py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(201,163,106,0.08),_transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="font-display text-sm italic text-gold">03</span>
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Contact
            </span>
          </div>

          <h2 className="mt-8 font-display text-4xl italic leading-tight text-[#f5f1ea] sm:text-5xl">
            Let&apos;s build
            <br className="hidden sm:block" /> something good.
          </h2>

          <div className="mt-12 flex flex-col items-center gap-7">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 border-b border-stone-600 pb-1 text-lg text-[#f5f1ea] transition hover:border-gold hover:text-gold"
            >
              {EMAIL}
              <ArrowUpRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex items-center gap-5 text-xs uppercase tracking-[0.25em] text-stone-500">
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#f5f1ea]"
              >
                GitHub ↗
              </a>
              <span className="text-stone-700">·</span>
              <a
                href={LINKEDIN_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#f5f1ea]"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-[11px] uppercase tracking-[0.2em] text-stone-600">
        © {new Date().getFullYear()} Nitya — Built with Next.js &amp; Tailwind CSS
      </footer>
    </main>
  );
}
