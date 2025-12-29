"use client";

import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-black/40 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          {/* Brand */}
          <Link
            href="#home"
            className="group flex items-center gap-3 text-sm font-semibold text-white"
          >
            <span className="relative grid h-7 w-7 place-items-center rounded-xl border border-white/10 bg-white/5">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              <span className="pointer-events-none absolute -inset-2 rounded-2xl bg-cyan-400/10 blur-xl opacity-0 transition group-hover:opacity-100" />
            </span>
            <span className="tracking-tight">
              KG<span className="text-white/60"></span>
            </span>
          </Link>

          {/* Links (desktop) */}
          <div className="hidden items-center gap-6 text-sm md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-white/70 hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-emerald-300 transition-all duration-300 hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 hover:bg-cyan-400/20"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
