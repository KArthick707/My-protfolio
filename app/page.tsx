import Navbar from "@/NavBar Compnents/Navbar";

type Project = {
  title: string;
  desc: string;
  metric: string;
  tags: string[];
  linkText: string;
  link: string;
};

type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  time: string;
  bullets: string[];
};

const projects: Project[] = [
  {
    metric: "Network Analysis",
    title: "Dante Network Analysis (Wireshark)",
    desc: "Diagnosed Dante AV audio dropouts through deep packet inspection. Found congestion, multicast flooding, and PTP sync issues; recommended VLAN segmentation, IGMP snooping, and QoS plus a long-term monitoring approach.",
    tags: ["Wireshark", "Multicast", "PTP", "VLAN", "IGMP Snooping", "QoS"],
    linkText: "View Report",
    link: "#", // replace with your report link
  },
  {
    metric: "Research / ML Security",
    title: "Dynamic Malware Classification (Hybrid Models)",
    desc: "Hybrid experimentation using feature extraction (TF-IDF, embeddings) and model combinations (CNN/LSTM/RF) with benchmark metrics and analysis.",
    tags: ["Python", "ML", "TF-IDF", "CNN/LSTM", "Random Forest"],
    linkText: "GitHub",
    link: "https://github.com/KArthick707/DYNAMIC-MALWARE-ANALYSIS-USING-MACHINE-LEARING-AND-FEATURE-EXTRACTION",
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

const skills = {
  "Security & Compliance": [
    "Email security (phishing reduction)",
    "Vendor risk due diligence",
    "ISO 27001 / SOC 2 review",
    "GDPR awareness",
    "Documentation & policy basics",
  ],
  "IT Support": [
    "1st/2nd line support",
    "Windows & macOS troubleshooting",
    "Ticketing systems & SLAs",
    "Device provisioning (onboarding/offboarding)",
    "Printer & endpoint support",
  ],
  Networking: ["LAN / Wi-Fi basics", "DHCP/DNS fundamentals", "Connectivity troubleshooting"],
  "Tools & Platforms": ["Microsoft 365 / Office 365", "VMware (basics)", "Python (scripting)"],
};

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {text}
    </span>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100/90">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
      {label}
    </span>
  );
}

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f16]/70 p-5 backdrop-blur " +
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02)] " +
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_55%)] before:opacity-80 " +
        className
      }
    >
      {children}
      <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle,rgba(217,70,239,0.14),transparent_60%)]" />
    </div>
  );
}

function SectionTitle({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="flex items-end justify-between gap-3">
      <div>
        <div className="text-xs text-white/45">SYSTEM</div>
        <h2 className="mt-1 text-xl font-semibold tracking-tight">{title}</h2>
        {hint ? <p className="mt-2 text-sm text-white/60">{hint}</p> : null}
      </div>
      <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60 md:flex">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
        operational
      </div>
    </div>
  );
}

function Glitch({ text }: { text: string }) {
  return (
    <span className="glitch inline-block" data-text={text}>
      {text}
    </span>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* neon haze */}
        <div className="absolute -top-52 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-cyan-500/14 blur-3xl" />
        <div className="absolute right-[-220px] top-[12%] h-[520px] w-[520px] rounded-full bg-fuchsia-500/12 blur-3xl" />
        <div className="absolute bottom-[-260px] left-[-220px] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl" />

        {/* cyber grid */}
        <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="absolute inset-0 opacity-[0.10] animate-[gridDrift_18s_linear_infinite] bg-[linear-gradient(to_right,rgba(34,211,238,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,70,239,0.10)_1px,transparent_1px)] [background-size:90px_90px]" />

        {/* scanline */}
        <div className="absolute inset-0 opacity-[0.08] animate-[scan_6s_linear_infinite] [background:repeating-linear-gradient(to_bottom,transparent_0px,transparent_7px,rgba(255,255,255,0.26)_8px)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
      </div>

      <Navbar />

      {/* content above background for clickable links */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-14 pt-10">
        {/* Top status bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
            <span className="text-sm text-white/80">
              status: <span className="text-emerald-200">connected</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip label="Heidelberg" />
            <Chip label="IT Support & Security" />
            <Chip label="Cybersecurity" />
          </div>
        </div>

        {/* Dashboard grid */}
        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          {/* LEFT: Profile panel */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <Panel className="group">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs text-white/45">IDENTITY</div>
                  <div className="mt-1 text-2xl font-semibold">
                    <Glitch text="Karthick" />{" "}
                    <span className="text-white/80">Ganapathy</span>
                  </div>
                  <div className="mt-2 text-sm text-white/65">
                    IT Support & Security Professional • Cybersecurity Enthusiast
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">
                  v1.0
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-xs text-white/70">
                <div className="flex items-center gap-2 text-white/45">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                  <span className="ml-2">security-console</span>
                </div>
                <div className="mt-3 space-y-1">
                  <div>
                    <span className="text-emerald-300">$</span> whoami
                  </div>
                  <div className="text-white/60">
                    support-first • security-minded • documentation-driven
                  </div>
                  <div>
                    <span className="text-emerald-300">$</span> echo "reduce risk, keep systems usable"
                  </div>
                  <div className="text-white/60">reduce risk, keep systems usable</div>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
                >
                  Jump to Projects
                </a>

                <a
                  href="#experience"
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Jump to Experience
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-400/20"
                >
                  Contact
                </a>
              </div>

              <div className="mt-5 text-xs text-white/45">
                Location: <span className="text-white/70">Heidelberg, Germany</span>
              </div>
            </Panel>
          </div>

          {/* RIGHT: Sections */}
          <div className="space-y-6">
            {/* ABOUT (new layout, same meaning) */}
            <section className="group" id="home">
              <Panel>
                <SectionTitle
                  title="Profile Summary"
                  hint="Reliable user support + practical security improvements."
                />
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70">
                  IT Support & Security Professional focused on delivering stable, user-friendly
                  support while strengthening security and compliance. Experience includes Microsoft
                  365 administration, LAN/Wi-Fi troubleshooting, and vendor security reviews aligned
                  with ISO 27001, SOC 2, and GDPR.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge text="Windows/macOS" />
                  <Badge text="Microsoft 365" />
                  <Badge text="Networking (LAN/Wi-Fi)" />
                  <Badge text="Vendor Risk" />
                  <Badge text="Documentation" />
                </div>
              </Panel>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="group">
              <Panel>
                <SectionTitle title="Projects" hint="Selected technical work." />
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {projects.map((p) => (
                    <div
                      key={p.title}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.08]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-xs text-white/45">{p.metric}</div>
                          <div className="mt-1 text-base font-semibold">{p.title}</div>
                        </div>
                        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                          active
                        </span>
                      </div>

                      <p className="mt-3 text-sm text-white/70">{p.desc}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <Badge key={t} text={t} />
                        ))}
                      </div>

                      <a
                        href={p.link || "#"}
                        target={p.link?.startsWith("http") ? "_blank" : undefined}
                        rel={p.link?.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                      >
                        {p.linkText} <span className="text-white/40">→</span>
                      </a>
                    </div>
                  ))}
                </div>
              </Panel>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="group">
              <Panel>
                <SectionTitle title="Experience" hint="Roles and impact." />
                <div className="mt-5 space-y-4">
                  {experience.map((e) => (
                    <div
                      key={e.role + e.org}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 hover:bg-white/[0.08] transition"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div>
                          <div className="text-base font-semibold">{e.role}</div>
                          <div className="text-sm text-white/60">
                            {e.org} • {e.location}
                          </div>
                        </div>
                        <div className="text-xs text-white/50">{e.time}</div>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm text-white/70">
                        {e.bullets.length ? (
                          e.bullets.map((b) => (
                            <li key={b} className="flex gap-2">
                              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                              <span>{b}</span>
                            </li>
                          ))
                        ) : (
                          <li className="text-white/55">(Details available on request)</li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </Panel>
            </section>

            {/* SKILLS */}
            <section id="skills" className="group">
              <Panel>
                <SectionTitle title="Skills" hint="Core strengths." />
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {Object.entries(skills).map(([groupName, items]) => (
                    <div key={groupName} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="text-sm font-semibold text-white/90">{groupName}</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {items.map((s) => (
                          <Badge key={s} text={s} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            </section>

            {/* CONTACT */}
            <section id="contact" className="group">
              <Panel>
                <SectionTitle title="Contact" hint="Reach out quickly." />
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-semibold">Quick links</div>
                    <div className="mt-4 space-y-3 text-sm">
                      <a
                        className="block text-cyan-200 hover:text-cyan-100"
                        href="mailto:karthick.ganapathy2104@gmail.com"
                      >
                        karthick.ganapathy2104@gmail.com →
                      </a>
                      <a
                        className="block text-cyan-200 hover:text-cyan-100"
                        href="https://www.linkedin.com/in/karthick-ganapathy/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn →
                      </a>
                      <a
                        className="block text-cyan-200 hover:text-cyan-100"
                        href="https://github.com/KArthick707"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub →
                      </a>
                      <a
                        className="block text-cyan-200 hover:text-cyan-100"
                        href="https://medium.com/@karthickg070"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Medium Blog →
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-semibold">One-liner</div>
                    <p className="mt-2 text-sm text-white/70">
                      Reliable support and practical security improvements.
                    </p>

                    <a
                      href="mailto:karthick.ganapathy2104@gmail.com?subject=Portfolio%20Contact"
                      className="mt-5 inline-block rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
                    >
                      Email me
                    </a>
                  </div>
                </div>
              </Panel>
            </section>

            <footer className="py-10 text-center text-xs text-white/50">
              © {new Date().getFullYear()} • Karthick Ganapathy • Next.js & Tailwind
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
