import React, { useState, useEffect, useRef, type ReactNode } from "react";

// --- Types & Interfaces ---

type NavLink = "About" | "Experience" | "Projects" | "Skills" | "Contact";

interface JobExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

interface Project {
  name: string;
  desc: string;
  problem: string;
  stack: string[];
  bullets: string[];
  link: string;
  status: string;
}

interface SocialLink {
  label: string;
  href: string;
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

// --- Data ---

const NAV_LINKS: NavLink[] = ["About", "Experience", "Projects", "Skills", "Contact"];

const SKILLS: Record<string, string[]> = {
  backend: ["bun", "typescript", "fastify", "express", "hono", "cloudflare-workers", "grpc", "websockets", "webrtc"],
  infrastructure: ["kubernetes", "docker", "keda", "cloudnativepg", "nginx-ingress", "digitalocean", "linux-mint"],
  "data-cloud": ["postgresql", "prisma-orm", "redis", "pgbouncer", "sqlite", "cloudflare-r2"],
  "devops-observability": ["github-actions", "prometheus", "grafana", "loki", "opentelemetry", "ci-cd", "rbac"],
  frontend: ["next.js", "react", "typescript", "tailwindcss", "redux-toolkit", "framer-motion"],
};

const EXPERIENCE: JobExperience[] = [
  {
    title: "Software Engineer Intern",
    company: "DeepEcom",
    location: "Pune, India",
    period: "2026-01 — Present",
    bullets: [
      "Migrated cloud infrastructure from Azure to DigitalOcean, deploying self-hosted CloudNativePG and a Prometheus/Grafana/Loki observability stack on Kubernetes, reducing upfront infrastructure costs by 40%",
      "Engineered 'Maruti Machine,' a distributed queue-processing system (TypeScript, XState v5) coordinating data ingestion and synchronization across Amazon and Flipkart, scaling via KEDA to process 200+ daily reports",
      "Resolved PostgreSQL connection exhaustion in a high-load execution engine by implementing PgBouncer pooling and a SqlMessageStorage layer, ensuring strict shard isolation and system stability",
      "Developed 'DeepTrack,' an internal CQRS-style issue tracker utilizing TypeScript, XState v5, and a Web Worker-driven SQLite database with OPFS persistence",
    ],
  },
];

const PROJECTS: Project[] = [
  {
    name: "CoreGrasp",
    desc: "Multi-tenant policy evaluation & compliance platform",
    problem: "Large organizations lack scalable ways to verify employee comprehension of internal policies. Compliance is often enforced via manual checks or generic tools that cannot reason about specific document content.",
    stack: ["Next.js", "Cloudflare Workers", "TypeScript", "PostgreSQL", "Prisma", "Cloudflare AI"],
    bullets: [
      "Implemented a real-time WebSocket notification system using hibernatable Cloudflare Durable Objects, minimizing compute costs for persistent connections",
      "Designed a scalable PostgreSQL schema on Supabase, preventing duplicate concurrent submissions using composite constraints and eliminating N+1 queries via Prisma aggregations",
      "Built a multi-tenant policy evaluation platform featuring a serverless PDF processing pipeline that extracts content and generates dynamic MCQs via Cloudflare AI (Llama 3.2)",
      "Shipped secure authentication (Better Auth, OAuth), bulk candidate onboarding via CSV, and token-based password reset flows",
    ],
    link: "https://coregrasp.vercel.app/",
    status: "operational",
  },
  {
    name: "ChessMate",
    desc: "Real-time multiplayer chess with video calling",
    problem: "A responsive chess game connecting players worldwide with built-in video conferencing for live player interaction.",
    stack: ["React", "Bun", "TailwindCSS", "WebSocket", "WebRTC", "Docker", "AWS EC2"],
    bullets: [
      "Developed a real-time multiplayer chess application featuring WebRTC-based peer-to-peer live video calling between players",
      "Integrated a WebSocket signaling channel (Bun) to synchronize live match moves and establish seamless WebRTC peer connections",
      "Containerized the high-performance backend with Docker and deployed to AWS EC2 via an automated GitHub Actions CI/CD pipeline",
    ],
    link: "http://chess-nt9u.vercel.app/",
    status: "operational",
  },
];

const SOCIAL: SocialLink[] = [
  { label: "github", href: "https://github.com/ranjit1024" },
  { label: "linkedin", href: "https://www.linkedin.com/in/ranjit-das-31b866352/" },
  { label: "twitter", href: "https://x.com/ranjitd18755665" },
  { label: "site", href: "https://ranjitdas.in/" },
];

// --- Hooks & Utility Components ---

function useInView(threshold: number = 0.12): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]: IntersectionObserverEntry[]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function StatusDot({ color = "#4F9D69" }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping" style={{ backgroundColor: color }} />
      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: color }} />
    </span>
  );
}

// --- Main Portfolio Component ---

export default function Portfolio() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("About");
  const [clock, setClock] = useState<string>("");

  useEffect(() => {
    const tick = () => setClock(new Date().toUTCString().slice(17, 25) + " UTC");
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      const sections = NAV_LINKS.map((link) => document.getElementById(link.toLowerCase()));
      const scrollPos = window.scrollY + window.innerHeight / 3;
      sections.forEach((section) => {
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActive(section.id.charAt(0).toUpperCase() + section.id.slice(1));
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#B7BCC6] relative selection:bg-[#E9A23B] selection:text-[#0A0C10] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; background-color: #0A0C10; font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0C10; }
        ::-webkit-scrollbar-thumb { background: #262B33; }
        ::-webkit-scrollbar-thumb:hover { background: #3A414C; }
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.025;
          mix-blend-mode: overlay;
        }
        @keyframes ping { 75%, 100% { transform: scale(1.8); opacity: 0; } }
        .animate-ping { animation: ping 1.8s cubic-bezier(0,0,0.2,1) infinite; }
        .panel { background: #10131A; border: 1px solid #1E232B; }
        .kv-row { display: flex; justify-content: space-between; gap: 1.5rem; padding: 0.55rem 0; border-bottom: 1px solid #1A1E25; }
        .kv-row:last-child { border-bottom: none; }
      `}</style>

      <div className="fixed inset-0 pointer-events-none grain z-50" />

      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 font-mono text-[13px] ${scrolled ? "bg-[#0A0C10]/90 backdrop-blur-md border-b border-[#1E232B]" : "border-b border-transparent"
          }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={() => scrollTo("About")} className="flex items-center gap-2 text-[#D8DCE3]">
            <StatusDot />
            <span>ranjit@das:~$</span>
          </button>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`transition-colors ${active === l ? "text-[#E9A23B]" : "text-[#6B7280] hover:text-[#D8DCE3]"}`}
              >
                ~/{l.toLowerCase()}
              </button>
            ))}
            <span className="text-[#3A414C]">{clock}</span>
          </div>

          <button className="md:hidden text-[#D8DCE3]" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? "close" : "menu"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-[#0A0C10]/97 backdrop-blur-lg z-30 transition-opacity duration-300 flex flex-col items-center justify-center md:hidden font-mono ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center gap-7">
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-2xl text-[#D8DCE3]">
              ~/{l.toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Hero — system info panel */}
      <section id="about" className="min-h-screen flex items-center relative z-10 pt-14">
        <div className="max-w-5xl mx-auto px-6 w-full py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <FadeIn>
                <h1 className="font-mono text-4xl md:text-5xl font-bold text-[#EDEFF3] mb-3 tracking-tight">
                  Ranjit Das
                </h1>
                <p className="text-[#8B909A] text-base mb-10 max-w-md leading-relaxed">
                  Backend engineer working in distributed queues, data infrastructure, and Kubernetes-hosted
                  services — with the full-stack range to ship the product on top.
                </p>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="panel px-5 font-mono text-[13px]">
                  <div className="kv-row">
                    <span className="text-[#6B7280]">role</span>
                    <span className="text-[#D8DCE3]">software engineer, backend</span>
                  </div>
                  <div className="kv-row">
                    <span className="text-[#6B7280]">location</span>
                    <span className="text-[#D8DCE3]">Pune, India</span>
                  </div>
                  <div className="kv-row">
                    <span className="text-[#6B7280]">last_role</span>
                    <span className="text-[#D8DCE3]">DeepEcom — Jan 2026 – Present</span>
                  </div>
                  <div className="kv-row">
                    <span className="text-[#6B7280]">building</span>
                    <span className="text-[#E9A23B]">CoreGrasp</span>
                  </div>
                  <div className="kv-row">
                    <span className="text-[#6B7280]">status</span>
                    <span className="flex items-center gap-2 text-[#4F9D69]">
                      <StatusDot />
                      open to full-time roles
                    </span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.16}>
                <div className="flex flex-wrap items-center gap-6 mt-10 font-mono text-[13px]">
                  <a
                    href="mailto:ranjitdas2048@gmail.com"
                    className="px-5 py-3 bg-[#E9A23B] text-[#0A0C10] font-bold hover:bg-[#F0B563] transition-colors"
                  >
                    contact →
                  </a>
                  {SOCIAL.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-[#6B7280] hover:text-[#D8DCE3] transition-colors">
                      {s.label}
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Experience — log style */}
      <section id="experience" className="relative z-10 border-t border-[#1A1E25]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <FadeIn>
            <p className="font-mono text-[13px] text-[#6B7280] mb-8">~/experience</p>
          </FadeIn>
          {EXPERIENCE.map((job, i) => (
            <FadeIn key={i} delay={0.05}>
              <div className="panel p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6 pb-5 border-b border-[#1A1E25] font-mono text-[13px]">
                  <span className="text-[#EDEFF3] text-base font-bold">{job.company}</span>
                  <span className="text-[#6B7280]">{job.title}</span>
                  <span className="text-[#4F9D69]">{job.period}</span>
                </div>
                <ul className="space-y-4">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-[#3A414C] font-mono shrink-0 mt-0.5">{`[${String(j + 1).padStart(2, "0")}]`}</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 border-t border-[#1A1E25]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <FadeIn>
            <p className="font-mono text-[13px] text-[#6B7280] mb-8">~/projects</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <a href={p.link} target="_blank" rel="noreferrer" className="block panel p-7 h-full hover:border-[#3A414C] transition-colors group">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-mono text-lg font-bold text-[#EDEFF3]">{p.name}</h3>
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#4F9D69]">
                      <StatusDot />
                      {p.status}
                    </span>
                  </div>
                  <p className="text-[#6B7280] text-xs font-mono mb-5">{p.desc}</p>

                  <p className="text-sm text-[#B7BCC6] leading-relaxed mb-5 border-l-2 border-[#262B33] pl-4 group-hover:border-[#E9A23B] transition-colors">
                    {p.problem}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed">
                        <span className="text-[#3A414C] font-mono shrink-0">$</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-5 border-t border-[#1A1E25]">
                    {p.stack.map((s) => (
                      <span key={s} className="text-[11px] font-mono px-2 py-1 bg-[#161A21] text-[#8B909A] border border-[#1E232B]">
                        {s}
                      </span>
                    ))}
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills — manifest style */}
      <section id="skills" className="relative z-10 border-t border-[#1A1E25]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <FadeIn>
            <p className="font-mono text-[13px] text-[#6B7280] mb-2">~/skills</p>
            <p className="font-mono text-[11px] text-[#3A414C] mb-8">stack.toml</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="panel p-7 md:p-8 font-mono text-[13px] overflow-x-auto">
              {Object.entries(SKILLS).map(([cat, items]) => (
                <div key={cat} className="mb-5 last:mb-0">
                  <p className="text-[#E9A23B] mb-2">[{cat}]</p>
                  <p className="text-[#B7BCC6] pl-4 leading-loose whitespace-pre-wrap">
                    {items.map((s) => `"${s}"`).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Certs */}
      <section className="relative z-10 border-t border-[#1A1E25]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-wrap gap-4 font-mono text-[13px]">
            {[
              { label: "100xDevs Cohort", sub: "full-stack & systems engineering", href: "https://app.100xdevs.com/certificate/verify/Y80IQ59P" },
              { label: "Scaler JavaScript", sub: "certificate of completion", href: "https://moonshot.scaler.com/s/sl/nin-Jm30KW" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="panel px-5 py-4 hover:border-[#3A414C] transition-colors flex-1 min-w-[240px]"
              >
                <p className="text-[#D8DCE3]">{c.label}</p>
                <p className="text-[#6B7280] text-[11px] mt-1">{c.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 border-t border-[#1A1E25]">
        <div className="max-w-5xl mx-auto px-6 py-28">
          <FadeIn>
            <p className="font-mono text-[13px] text-[#6B7280] mb-6">~/contact</p>
            <p className="text-xl text-[#D8DCE3] leading-relaxed max-w-xl mb-10">
              Currently working as a Software Engineer Intern at DeepEcom — happy to talk
              through distributed systems, infra, or backend work.
            </p>
            <a
              href="mailto:ranjitdas2048@gmail.com"
              className="inline-flex items-center gap-3 font-mono text-lg text-[#0A0C10] bg-[#E9A23B] px-6 py-4 font-bold hover:bg-[#F0B563] transition-colors"
            >
              ranjitdas2048@gmail.com
            </a>
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-[#1A1E25]">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[11px] text-[#3A414C]">
          <span>ranjit_das // pune, india</span>
          <span>process exited 0</span>
        </div>
      </footer>
    </div>
  );
}