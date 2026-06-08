import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

const SKILLS = {
  Frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
  Backend: ["Bun", "Fastify", "Effect-TS", "Express", "Hono", "gRPC", "WebSockets", "WebRTC"],
  Infrastructure: ["Kubernetes (AKS)", "Docker", "KEDA", "Prometheus", "Grafana", "OpenTelemetry", "Nginx", "GitHub Actions"],
  "Cloud & Data": ["Azure", "AWS (EC2, S3, EKS)", "PostgreSQL", "Redis", "Prisma ORM", "PgBouncer"],
  Other: ["XState", "GetStream", "Effect Cluster", "RBAC", "CI/CD", "StatefulSets"],
};

const EXPERIENCE = [
  {
    title: "Full Stack Engineer Intern",
    company: "DeepEcom",
    location: "Pune, India",
    period: "Jan 2025 – Present",
    bullets: [
      "Built reconciliation and reporting dashboards in Next.js — server components, dynamic data tables, and real-time status views for Amazon and Flipkart order pipelines",
      "Designed and built REST APIs using Bun and Fastify, handling ecommerce data ingestion, transformation, and reconciliation logic with PostgreSQL and Prisma ORM",
      "Deployed distributed workflow orchestration on Kubernetes StatefulSets (Azure AKS) — four-stage import/build/write/export pipeline running in production",
      "Built Effect-TS cluster layer with SqlMessageStorage, PgBouncer connection pooling, and shard group isolation — resolved a critical production incident where shard ownership corruption caused workflow messages to stall",
      "Implemented KEDA autoscaling watching PostgreSQL messages table to dynamically scale worker pods based on real-time queue depth",
      "Architected Maruti, a Kubernetes orchestrator using XState v5 parallel state machines with Effect Queue/Ref primitives, responding to GetStream events in real time",
      "Configured Kubernetes RBAC, headless services for stable DNS-based pod registration, and CI/CD pipelines for a multi-service Bun monorepo",
    ],
  },
];

const PROJECTS = [
  {
    name: "CompliQ",
    desc: "Policy-aware quiz platform for large organisations",
    problem: "Large organisations have no scalable way to verify employee comprehension of internal policies — compliance is enforced via manual checks or generic LMS tools that cannot reason about document content.",
    stack: ["Next.js", "Effect-TS", "PostgreSQL", "Prisma", "Claude API", "Resend", "Docker"],
    bullets: [
      "Built a RAG-style pipeline that chunks uploaded policy PDFs, passes contextual segments to Claude API, and generates role-relevant MCQs that test understanding rather than surface recall",
      "Designed multi-tenant schema (orgs, policies, quizzes, attempts) with per-org shareable invite links, attempt deduplication, and real-time HR dashboard",
      "Engineered the prompt layer to produce plausible distractors — solving the key failure mode in naive LLM quiz generation",
    ],
    link: "https://github.com/ranjit1024",
    accent: "#6366f1",
  },
  {
    name: "ChessMate",
    desc: "Real-time multiplayer chess with video calling",
    problem: "A responsive chess game connecting players worldwide with built-in video conferencing for live interaction.",
    stack: ["React.js", "Bun", "WebSocket", "WebRTC", "GitHub Actions", "Nginx", "AWS EC2"],
    bullets: [
      "Real-time multiplayer chess with WebSocket-based game sync and peer-to-peer video calling via WebRTC",
      "CI/CD pipeline via GitHub Actions; deployed on AWS EC2 behind Nginx reverse proxy",
    ],
    link: "https://chess-lime-eta.vercel.app/",
    accent: "#10b981",
  },
];

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/ranjit1024", icon: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ranjit-das-31b866352/", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
  { label: "Twitter", href: "https://x.com/ranjitd18755665", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "Portfolio", href: "https://ranjitdas.in/", icon: "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 2c.55 0 1.217.392 1.854 1.328C14.51 6.299 15 7.993 15 10h-6c0-2.007.49-3.701 1.146-4.672C10.783 4.392 11.45 4 12 4zm-4.9 6h2.9v1h-2.9A7.96 7.96 0 017 10zm9.9 1H14v-1h2.9a7.96 7.96 0 01.1 1zM8.13 15.5A5.99 5.99 0 0112 20a5.99 5.99 0 013.87-4.5 7.03 7.03 0 01-3.87 1.5 7.03 7.03 0 01-3.87-1.5z" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [big, setBig] = useState(false);
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => setBig(!!e.target.closest("a,button,[data-hover]"));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, []);
  return (
    <div
      style={{
        position: "fixed", left: pos.x, top: pos.y, pointerEvents: "none", zIndex: 9999,
        width: big ? 40 : 12, height: big ? 40 : 12,
        borderRadius: "50%",
        background: big ? "rgba(99,102,241,0.15)" : "rgba(99,102,241,0.8)",
        border: big ? "1.5px solid rgba(99,102,241,0.6)" : "none",
        transform: "translate(-50%,-50%)",
        transition: "width 0.2s, height 0.2s, background 0.2s",
      }}
    />
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080810] text-white font-sans" style={{ fontFamily: "'DM Sans', sans-serif", cursor: "none" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080810; }
        ::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 4px; }
        .grad-text { background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 40%, #6366f1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .grid-bg { background-image: linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px); background-size: 64px 64px; }
        .glow { box-shadow: 0 0 40px rgba(99,102,241,0.15), 0 0 80px rgba(99,102,241,0.05); }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(99,102,241,0.15); }
        .tag { display: inline-block; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.25); color: #a5b4fc; font-size: 12px; padding: 3px 10px; border-radius: 100px; }
        .line-clamp { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(1.5);opacity:0} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .blink { animation: blink 1s step-end infinite; }
        .noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E"); }
      `}</style>

      <Cursor />

      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#080810]/90 backdrop-blur-md border-b border-white/5" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight grad-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ranjit.dev</span>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                className={`text-sm transition-colors ${active === l ? "text-indigo-400" : "text-white/50 hover:text-white/90"}`}>
                {l}
              </button>
            ))}
            <a href="mailto:ranjitdas2048@gmail.com"
              className="text-sm px-4 py-1.5 rounded-full border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 transition-colors">
              Hire me
            </a>
          </div>
          <button className="md:hidden text-white/70" onClick={() => setMenuOpen(o => !o)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0d0d1a] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)} className="text-left text-sm text-white/70 hover:text-white">{l}</button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="about" className="relative min-h-screen flex items-center grid-bg noise overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-600/8 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <div className="absolute inset-0 rounded-full bg-emerald-400" style={{ animation: "pulse-ring 1.5s ease-out infinite" }} />
                </div>
                <span className="text-sm text-white/50 tracking-wide">Available for full-time roles</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-none mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Ranjit<br />
                <span className="grad-text">Das</span>
              </h1>
              <p className="text-xl text-white/60 mb-2 font-light">Full Stack Engineer</p>
              <p className="text-white/40 text-sm mb-8">Pune, India · Building at DeepEcom</p>
              <p className="text-white/65 leading-relaxed max-w-lg mb-10 text-[15px]">
                I build end-to-end systems — from Next.js dashboards to Kubernetes orchestrators running in production. 
                Currently shipping ecommerce reconciliation infra at DeepEcom and building 
                <span className="text-indigo-400"> CompliQ</span>, a policy compliance platform powered by Claude API.
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => scrollTo("Projects")}
                  data-hover
                  className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all">
                  View Projects
                </button>
                <a href="mailto:ranjitdas2048@gmail.com"
                  data-hover
                  className="px-6 py-2.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 text-sm font-medium transition-all">
                  Get in touch
                </a>
              </div>
              <div className="flex items-center gap-5 mt-10">
                {SOCIAL.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" data-hover
                    className="text-white/30 hover:text-indigo-400 transition-colors" title={s.label}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d={s.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Avatar / Visual */}
            <div className="relative flex-shrink-0" style={{ animation: "float 5s ease-in-out infinite" }}>
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl glow relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)", border: "1px solid rgba(99,102,241,0.3)" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl lg:text-9xl font-black grad-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>RD</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#080810]/80 to-transparent p-5">
                  <div className="text-xs text-white/50 font-mono">
                    <span className="text-indigo-400">const</span> dev = {"{"}<br />
                    &nbsp;&nbsp;<span className="text-emerald-400">stack</span>: <span className="text-amber-400">"fullstack"</span>,<br />
                    &nbsp;&nbsp;<span className="text-emerald-400">infra</span>: <span className="text-amber-400">"k8s"</span><br />
                    {"}"}
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-xs text-indigo-300">
                Open to work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-indigo-400 text-sm font-mono mb-2">02. experience</p>
          <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Where I've worked</h2>
        </FadeIn>
        {EXPERIENCE.map((job, i) => (
          <FadeIn key={i} delay={0.1}>
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8 card-hover">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{job.title}</h3>
                  <p className="text-indigo-400 font-medium mt-0.5">{job.company} <span className="text-white/30">·</span> <span className="text-white/50 font-normal text-sm">{job.location}</span></p>
                </div>
                <span className="text-sm text-white/40 font-mono shrink-0 mt-1">{job.period}</span>
              </div>
              <ul className="space-y-3">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm text-white/65 leading-relaxed">
                    <span className="text-indigo-500 mt-1.5 shrink-0">▹</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-indigo-400 text-sm font-mono mb-2">03. projects</p>
            <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Things I've built</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/8 bg-[#0d0d1a] p-6 card-hover h-full flex flex-col"
                  style={{ borderTop: `2px solid ${p.accent}` }}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</h3>
                      <p className="text-white/50 text-sm mt-0.5">{p.desc}</p>
                    </div>
                    <a href={p.link} target="_blank" rel="noreferrer" data-hover
                      className="text-white/30 hover:text-indigo-400 transition-colors ml-3 shrink-0 mt-1">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </a>
                  </div>

                  <div className="bg-white/5 rounded-xl p-3 mb-4 border-l-2" style={{ borderColor: p.accent }}>
                    <p className="text-xs text-white/50 leading-relaxed">{p.problem}</p>
                  </div>

                  <ul className="space-y-2 flex-1 mb-5">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-white/60 leading-relaxed">
                        <span className="shrink-0 mt-1.5" style={{ color: p.accent }}>▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-indigo-400 text-sm font-mono mb-2">04. skills</p>
          <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>What I work with</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(SKILLS).map(([cat, items], i) => (
            <FadeIn key={cat} delay={i * 0.07}>
              <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5 card-hover">
                <h3 className="text-sm font-semibold text-indigo-400 mb-3 uppercase tracking-widest">{cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(s => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/65 border border-white/8 hover:border-indigo-500/40 hover:text-white transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Certs */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "100xDevs Cohort", sub: "Full-stack & Systems Engineering", href: "https://app.100xdevs.com/certificate/verify/Y80IQ59P" },
              { label: "Scaler JavaScript", sub: "Certificate of completion", href: "https://moonshot.scaler.com/s/sl/nin-Jm30KW" },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" data-hover
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/8 bg-white/[0.02] hover:border-indigo-500/40 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">{c.label}</p>
                  <p className="text-xs text-white/40">{c.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/8 blur-3xl rounded-full" />
        </div>
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-indigo-400 text-sm font-mono mb-4">05. contact</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Let's build something
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              I'm actively looking for SDE-1 roles. My internship wraps up soon — if you're building something interesting, let's talk.
            </p>
            <a href="mailto:ranjitdas2048@gmail.com" data-hover
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all text-sm glow">
              ranjitdas2048@gmail.com
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 text-center">
        <p className="text-white/25 text-xs">Designed & built by Ranjit Das · 2025</p>
      </footer>
    </div>
  );
}