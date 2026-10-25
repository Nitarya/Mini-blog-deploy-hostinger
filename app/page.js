const GITHUB_PROFILE = "https://github.com/Nitarya";
const EMAIL = "niittss27@gmail.com";

const skillGroups = [
  {
    label: "Frontend",
    gradient: "from-sky-500 to-cyan-400",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    label: "Backend",
    gradient: "from-violet-500 to-fuchsia-400",
    skills: ["Node.js", "Express", "FastAPI"],
  },
  {
    label: "Data",
    gradient: "from-emerald-500 to-teal-400",
    skills: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    label: "DevOps",
    gradient: "from-amber-500 to-orange-400",
    skills: ["Docker", "GitHub Actions", "Nginx", "PM2", "Linux VPS"],
  },
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

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.1c-3.17.69-3.84-1.36-3.84-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.33-5.21 5.62.41.36.78 1.07.78 2.15v3.19c0 .31.21.66.79.55 4.51-1.51 7.77-5.76 7.77-10.78C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#05050c] text-slate-100">
      {/* Nav */}
      <nav className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div className="flex w-full max-w-xl items-center justify-between rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 backdrop-blur-xl shadow-lg shadow-black/20">
          <a
            href="#home"
            className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text font-semibold tracking-tight text-transparent"
          >
            Nitya
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Say hi
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
      >
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" />
          <div className="animate-blob animation-delay-2000 absolute right-0 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl" />
          <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="mb-8 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300">
            Open to full-stack &amp; frontend roles
          </span>

          <div className="relative mb-8">
            <div className="animate-spin-slow absolute -inset-2 rounded-full bg-gradient-to-tr from-sky-400 via-purple-400 to-pink-400 opacity-70 blur-md" />
            <div className="relative rounded-full bg-[#05050c] p-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.jpg"
                alt="Nitya"
                className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
              />
              <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-[#05050c] bg-emerald-400" />
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hi, I&apos;m Nitya
          </h1>
          <p className="animate-gradient-x mt-3 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300 bg-[length:200%_auto] bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
            Full-Stack Developer
          </p>

          <p className="mt-6 max-w-xl text-balance text-base text-slate-400 sm:text-lg">
            I build and ship small, focused web projects end to end —
            React &amp; Next.js on the front, Node/FastAPI on the back,
            and a pipeline that actually gets it onto a live server.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-105"
            >
              Get in touch
            </a>
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10"
            >
              <GithubIcon className="h-4 w-4" />
              View GitHub
            </a>
          </div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
        >
          <ChevronDownIcon className="h-6 w-6" />
        </a>
      </section>

      {/* About */}
      <section id="about" className="relative border-t border-white/5 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            About
          </h2>
          <p className="mt-4 max-w-2xl text-2xl font-medium text-white sm:text-3xl">
            I like building small projects well rather than big projects
            halfway — clean structure, a pipeline that actually deploys,
            and no more moving parts than the project needs.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span
                  className={`inline-block rounded-full bg-gradient-to-r ${group.gradient} px-3 py-1 text-xs font-semibold text-slate-950`}
                >
                  {group.label}
                </span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative border-t border-white/5 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
            Projects
          </h2>
          <p className="mt-4 text-2xl font-medium text-white sm:text-3xl">
            A few things I&apos;ve shipped.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20"
              >
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-500/0 via-fuchsia-500/0 to-amber-500/0 opacity-0 blur transition duration-300 group-hover:from-sky-500/10 group-hover:via-fuchsia-500/10 group-hover:to-amber-500/10 group-hover:opacity-100" />

                <div className="relative">
                  <h3 className="text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:scale-105"
                      >
                        Live demo
                        <ArrowUpRightIcon className="h-3 w-3" />
                      </a>
                    )}
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-white/30 hover:text-white"
                    >
                      <GithubIcon className="h-3 w-3" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 py-6 text-sm text-slate-400 transition hover:border-white/30 hover:text-white"
          >
            See more on github.com/Nitarya
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/5 py-28 text-center"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-blob absolute left-1/4 top-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="animate-blob animation-delay-2000 absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s build something
          </h2>
          <p className="mt-4 text-slate-400">
            Want to work together or just say hi? My inbox is open.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-105"
            >
              <MailIcon className="h-4 w-4" />
              {EMAIL}
            </a>
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Nitya — built with Next.js &amp; Tailwind CSS
      </footer>
    </main>
  );
}
