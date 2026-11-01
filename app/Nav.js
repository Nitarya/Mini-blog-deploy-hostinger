"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const EMAIL = "niittss27@gmail.com";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "work", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-nav)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="text-lg font-bold tracking-tight text-[var(--text)]"
        >
          Nitya
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--text-muted)] sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition hover:text-[var(--text)] ${
                active === link.href.slice(1) ? "text-[var(--accent)]" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${EMAIL}`}
            className="hidden items-center rounded-md bg-[var(--btn-bg)] px-4 py-2 text-sm font-medium text-[var(--btn-text)] transition hover:opacity-90 sm:inline-flex"
          >
            Say hello
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] sm:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-200 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-4 bg-current transition-transform duration-200 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-[var(--border)] transition-[max-height] duration-300 ease-out sm:hidden ${
          open ? "max-h-72" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-2 text-sm font-medium text-[var(--text-muted)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-[var(--border)] py-4 transition hover:text-[var(--text)] ${
                active === link.href.slice(1) ? "text-[var(--accent)]" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${EMAIL}`}
            onClick={() => setOpen(false)}
            className="my-4 inline-flex items-center justify-center rounded-md bg-[var(--btn-bg)] px-4 py-3 text-[var(--btn-text)] transition hover:opacity-90"
          >
            Say hello
          </a>
        </nav>
      </div>
    </header>
  );
}
