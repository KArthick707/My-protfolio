"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "Projects", "Experience", "Skills", "Contact"];

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full nav-glass z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold name-hover hover:scale-110 transition-transform duration-500">
            KG
          </a>

          <div className="hidden md:flex gap-10">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link text-sm tracking-wider uppercase py-1 ${
                  activeSection === item.toLowerCase() ? "active" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 hover:bg-red-500/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-red-400" /> : <Menu className="w-6 h-6 text-red-400" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-slide-up">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-400 hover:text-red-400 transition-colors duration-300 pl-4 border-l-2 border-transparent hover:border-red-500 text-sm tracking-wider uppercase font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
