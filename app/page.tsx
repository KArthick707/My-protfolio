"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  Mail,
  ChevronDown,
  ArrowUpRight,
  Download,
  Network,
  Brain,
  ShieldCheck,
  LifeBuoy,
  Wifi,
  Wrench,
  FileText,
  Newspaper,
} from "lucide-react";
import Navbar from "./components/Navbar";
import { GithubIcon, LinkedinIcon } from "./components/BrandIcons";

type Project = {
  title: string;
  desc: string;
  metric: string;
  tags: string[];
  linkText: string;
  link: string;
  icon: ReactNode;
};

type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  time: string;
  bullets: string[];
};

type StudyItem = {
  degree: string;
  org: string;
  location: string;
  time: string;
  highlights: string[];
};

const rotatingTexts = [
  "Reduce risk, keep systems usable",
  "1st/2nd line IT support, security-minded",
  "M.Sc. in IT — Machine Learning & Cybersecurity, SRH Heidelberg",
];

const projects: Project[] = [
  {
    metric: "Network Analysis",
    title: "Dante Network Analysis (Wireshark)",
    desc: "Diagnosed Dante AV audio dropouts through deep packet inspection. Found congestion, multicast flooding, and PTP sync issues; recommended VLAN segmentation, IGMP snooping, and QoS plus a long-term monitoring approach.",
    tags: ["Wireshark", "Multicast", "PTP", "VLAN", "IGMP Snooping", "QoS"],
    linkText: "View Report",
    link: "#", // TODO: add a link to the write-up/report for this project
    icon: <Network className="w-5 h-5" />,
  },
  {
    metric: "Research / ML Security",
    title: "Dynamic Malware Classification (Hybrid Models)",
    desc: "Hybrid experimentation using feature extraction (TF-IDF, embeddings) and model combinations (CNN/LSTM/RF) with benchmark metrics and analysis.",
    tags: ["Python", "ML", "TF-IDF", "CNN/LSTM", "Random Forest"],
    linkText: "GitHub",
    link: "https://github.com/KArthick707/DYNAMIC-MALWARE-ANALYSIS-USING-MACHINE-LEARING-AND-FEATURE-EXTRACTION",
    icon: <Brain className="w-5 h-5" />,
  },
];

const studies: StudyItem[] = [
  {
    degree: "Master's in Information Technology",
    org: "SRH Hochschule Heidelberg",
    location: "Heidelberg, Germany",
    time: "2023 – 2025",
    highlights: [
      "Focus: Machine learning, cybersecurity, systems, and applied research.",
      "Thesis: Dynamic Malware Classification using ML (hybrid CNN/LSTM/RF).",
    ],
  },
];

const experience: ExperienceItem[] = [
  {
    role: "IT Support & Security",
    org: "Just Access e.V.",
    location: "Heidelberg, Germany",
    time: "Jun 2025 – Present",
    bullets: [
      "Deliver 1st and 2nd line IT support for Windows and macOS (onsite + remote) with minimal downtime.",
      "Log, prioritize, and resolve incidents/service requests in a ticketing system; proactive follow-ups to meet SLAs.",
      "Configure, deploy, and maintain laptops, desktops, mobile devices, and printers; support onboarding/offboarding.",
      "Provide first-line network support (LAN & Wi-Fi), troubleshooting connectivity, access, and basic configuration issues.",
      "Manage IT asset inventory (lifecycle, assignments, replacements) with accurate documentation.",
      "Perform vendor security due diligence; review ISO 27001, SOC 2, and GDPR compliance factors and mitigation notes.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    org: "Cybersocial Pvt Ltd",
    location: "India",
    time: "Jul 2022 – Sep 2022",
    bullets: [
      "Assist the security team in monitoring systems and security alerts, identifying and escalating potential threats.",
      "Analyze phishing emails and suspicious activities, supporting investigation and mitigation efforts.",
      "Perform basic vulnerability checks and support secure configuration reviews across systems and networks.",
      "Document security incidents, findings, and remediation actions clearly and accurately.",
    ],
  },
  {
    role: "IT Support",
    org: "Sevika Tech Pvt Ltd",
    location: "Chennai, India",
    time: "Oct 2020 – May 2021",
    bullets: [
      "Provided remote and onsite support for Windows client devices; diagnosed hardware and software issues.",
      "Configured and maintained Microsoft Windows client-server environments.",
      "Coordinated software rollouts, workstation deployments, and network troubleshooting.",
      "Managed mobile device configurations and printing facilities; improved user experience via root-cause fixes.",
    ],
  },
];

const skills: Record<string, { icon: ReactNode; items: string[] }> = {
  "Security & Compliance": {
    icon: <ShieldCheck className="w-5 h-5 text-red-400" />,
    items: [
      "Email security (phishing reduction)",
      "Vendor risk due diligence",
      "ISO 27001 / SOC 2 review",
      "GDPR awareness",
      "Documentation & policy basics",
    ],
  },
  "IT Support": {
    icon: <LifeBuoy className="w-5 h-5 text-red-400" />,
    items: [
      "1st/2nd line support",
      "Windows & macOS troubleshooting",
      "Ticketing systems & SLAs",
      "Device provisioning (onboarding/offboarding)",
      "Printer & endpoint support",
    ],
  },
  Networking: {
    icon: <Wifi className="w-5 h-5 text-red-400" />,
    items: ["LAN / Wi-Fi basics", "DHCP/DNS fundamentals", "Connectivity troubleshooting"],
  },
  "Tools & Platforms": {
    icon: <Wrench className="w-5 h-5 text-red-400" />,
    items: ["Microsoft 365 / Office 365", "VMware (basics)", "Python (scripting)"],
  },
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(["home"]));
  const [rotatingTextIndex, setRotatingTextIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);

      const sections = ["home", "projects", "experience", "skills", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextVisible(false);
      setTimeout(() => {
        setRotatingTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsTextVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-200 relative overflow-x-hidden">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.035), transparent 40%)`,
        }}
      />

      <Navbar activeSection={activeSection} />

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 pb-12 md:pt-20 md:pb-0 glow-section">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className={`mb-4 md:mb-8 ${visibleSections.has("home") ? "animate-slide-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-zinc-300 text-sm tracking-widest uppercase font-medium">
                IT Support & Security
              </span>
            </div>
          </div>

          <h1
            className={`text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 md:mb-8 ${
              visibleSections.has("home") ? "animate-slide-up delay-100" : "opacity-0"
            }`}
          >
            <span className="name-hover">Karthick Ganapathy</span>
          </h1>

          <p
            className={`text-lg sm:text-xl md:text-2xl text-zinc-400 mb-4 md:mb-6 font-light tracking-wide ${
              visibleSections.has("home") ? "animate-slide-up delay-300" : "opacity-0"
            }`}
          >
            <span className="text-zinc-200 font-semibold">IT Support</span> &{" "}
            <span className="text-zinc-200 font-semibold">Security Professional</span>
          </p>

          <div className={`mb-6 md:mb-12 h-10 ${visibleSections.has("home") ? "animate-slide-up delay-400" : "opacity-0"}`}>
            <p
              className={`text-xl md:text-2xl text-zinc-100 font-bold transition-all duration-500 ${
                isTextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {rotatingTexts[rotatingTextIndex]}
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-16 ${
              visibleSections.has("home") ? "animate-slide-up delay-500" : "opacity-0"
            }`}
          >
            <a href="mailto:karthick.ganapathy2104@gmail.com" className="btn-red px-10 py-4 rounded-full text-sm uppercase tracking-wider">
              Get In Touch
            </a>
            <a href="#projects" className="btn-blue px-10 py-4 rounded-full text-sm uppercase tracking-wider">
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download="Karthick-Ganapathy-Resume.pdf"
              className="btn-ghost px-10 py-4 rounded-full text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          <div className={`flex gap-5 justify-center ${visibleSections.has("home") ? "animate-slide-up delay-600" : "opacity-0"}`}>
            {[
              { icon: <LinkedinIcon className="w-5 h-5" />, href: "https://www.linkedin.com/in/karthick-ganapathy/" },
              { icon: <GithubIcon className="w-5 h-5" />, href: "https://github.com/KArthick707" },
              { icon: <Mail className="w-5 h-5" />, href: "mailto:karthick.ganapathy2104@gmail.com" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="social-icon w-14 h-14 flex items-center justify-center rounded-full"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
            <ChevronDown className="w-8 h-8 text-red-400/60 animate-bounce" />
          </div>
        </div>
      </section>

      <div className="gradient-divider-thick" />

      {/* Projects */}
      <section id="projects" className="py-32 px-6 relative glow-section">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 ${visibleSections.has("projects") ? "animate-slide-up" : "opacity-0"}`}>
            <p className="kicker-label text-sm tracking-widest uppercase mb-4 font-semibold">Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-bold section-heading">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className={`project-card rounded-2xl p-6 ${visibleSections.has("projects") ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="icon-box w-12 h-12 rounded-xl flex items-center justify-center text-red-400">
                    {project.icon}
                  </div>
                  <span className="text-xs text-red-300 px-3 py-1.5 bg-red-500/10 rounded-full border border-red-500/20 font-semibold">
                    {project.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-3 text-zinc-100">{project.title}</h3>
                <p className="text-zinc-400 mb-5 text-sm leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tech) => (
                    <span key={tech} className="tech-tag text-xs px-3 py-1.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="project-link text-sm"
                  >
                    {project.linkText} <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider-thick" />

      {/* Experience */}
      <section id="experience" className="py-32 px-6 relative glow-section-blue">
        <div className="max-w-6xl mx-auto relative">
          <div className={`text-center mb-20 ${visibleSections.has("experience") ? "animate-slide-up" : "opacity-0"}`}>
            <p className="kicker-label text-sm tracking-widest uppercase mb-4 font-semibold">Career</p>
            <h2 className="text-4xl md:text-6xl font-bold section-heading">Experience</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, idx) => (
              <div
                key={exp.role + exp.org}
                className={`experience-card rounded-2xl p-8 shadow-lg ${
                  visibleSections.has("experience") ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex flex-col mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold gradient-red">{exp.role}</h3>
                    <p className="text-lg text-zinc-300 font-semibold">{exp.org}</p>
                    <p className="text-sm text-zinc-500">{exp.location}</p>
                  </div>
                  <span className="text-zinc-400 mt-2 text-sm tracking-wider bg-white/5 px-4 py-2 rounded-full font-medium w-fit">
                    {exp.time}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-4 text-zinc-400 group">
                      <span className="text-red-400 mt-1.5 text-sm font-bold">●</span>
                      <span className="text-sm leading-relaxed group-hover:text-zinc-200 transition-colors">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div
            className={`mt-12 experience-card rounded-2xl p-8 shadow-lg ${
              visibleSections.has("experience") ? "animate-slide-up delay-300" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-box p-3 rounded-xl">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-red-400">Education</h3>
            </div>

            {studies.map((study) => (
              <div key={study.degree}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-zinc-100">{study.degree}</h4>
                    <p className="text-lg text-zinc-300 font-semibold">{study.org}</p>
                    <p className="text-sm text-zinc-500">{study.location}</p>
                  </div>
                  <span className="text-zinc-400 mt-2 md:mt-0 text-sm tracking-wider bg-white/5 px-4 py-2 rounded-full font-medium w-fit">
                    {study.time}
                  </span>
                </div>

                <ul className="space-y-2">
                  {study.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-zinc-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/80" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider-glow" />

      {/* Skills */}
      <section id="skills" className="py-32 px-6 glow-section-mixed">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 ${visibleSections.has("skills") ? "animate-slide-up" : "opacity-0"}`}>
            <p className="kicker-label text-sm tracking-widest uppercase mb-4 font-semibold">Expertise</p>
            <h2 className="text-4xl md:text-6xl font-bold section-heading">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(skills).map(([category, { icon, items }], idx) => (
              <div
                key={category}
                className={`skill-card rounded-xl p-4 shadow-lg ${visibleSections.has("skills") ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-sm font-bold mb-3 text-red-400 flex items-center gap-2">
                  {icon}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span key={skill} className="tech-tag px-3 py-1 rounded-md text-xs cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider-glow" />

      {/* Contact */}
      <section id="contact" className="py-32 px-6 relative glow-section">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className={`mb-16 ${visibleSections.has("contact") ? "animate-slide-up" : "opacity-0"}`}>
            <p className="kicker-label text-sm tracking-widest uppercase mb-4 font-semibold">Get In Touch</p>
            <h2 className="text-4xl md:text-6xl font-bold section-heading mb-6">Let&apos;s Connect</h2>
            <p className="text-zinc-300 font-bold max-w-xl mx-auto text-lg">
              Reliable support and practical security improvements.
            </p>
          </div>

          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ${
              visibleSections.has("contact") ? "animate-slide-up delay-200" : "opacity-0"
            }`}
          >
            <a
              href="https://www.linkedin.com/in/karthick-ganapathy/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card flex flex-col items-center justify-center gap-4 p-8 rounded-2xl shadow-lg"
            >
              <LinkedinIcon className="contact-icon w-8 h-8" />
              <span className="text-sm text-zinc-300 font-semibold">LinkedIn</span>
            </a>
            <a
              href="mailto:karthick.ganapathy2104@gmail.com"
              className="contact-card flex flex-col items-center justify-center gap-4 p-8 rounded-2xl shadow-lg"
            >
              <Mail className="contact-icon w-8 h-8" />
              <span className="text-sm text-zinc-300 font-semibold">Email</span>
            </a>
            <a
              href="https://github.com/KArthick707"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card flex flex-col items-center justify-center gap-4 p-8 rounded-2xl shadow-lg"
            >
              <GithubIcon className="contact-icon w-8 h-8" />
              <span className="text-sm text-zinc-300 font-semibold">GitHub</span>
            </a>
            <a
              href="https://medium.com/@karthickg070"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card flex flex-col items-center justify-center gap-4 p-8 rounded-2xl shadow-lg"
            >
              <Newspaper className="contact-icon w-8 h-8" />
              <span className="text-sm text-zinc-300 font-semibold">Medium</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-red-500/10">
        <p className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
          © {new Date().getFullYear()}{" "}
          <span className="gradient-red-blue font-semibold">Karthick Ganapathy</span> • Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
