import React, { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

const SKILLS = {
  Frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
  Backend: ["Bun", "Elysia",, "Hono", "gRPC", "WebSockets", "WebRTC"],
  Infrastructure: ["Kubernetes (AKS)", "Docker", "KEDA", "Prometheus", "Grafana", "OpenTelemetry", "Nginx", "GitHub Actions"],
  "Cloud & Data": ["Azure", "AWS (EC2, S3, EKS)", "PostgreSQL", "Redis", "Prisma ORM", ],
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
      "Deployed distributed workflow orchestration on Kubernetes StatefulSets (Azure AKS) four-stage import/build/write/export pipeline running in production",
     
      "Implemented KEDA autoscaling watching PostgreSQL messages table to dynamically scale worker pods based on real-time queue depth",
      "Architected Maruti, a Kubernetes orchestrator using XState v5 parallel state machines with Effect Queue/Ref primitives, responding to GetStream events in real time",
      "Configured Kubernetes RBAC, headless services for stable DNS-based pod registration, and CI/CD pipelines for a multi-service Bun monorepo",
      "Configured Kubernetes RBAC, headless services for stable DNS-based pod registration, and CI/CD pipelines for a multi-service Bun monorepo",
    ],
  },
];

const PROJECTS = [
  {
    name: "coregrasp",
    desc: "Policy-aware quiz platform for large organisations",
    problem: "Large organisations have no scalable way to verify employee comprehension of internal policies — compliance is enforced via manual checks or generic LMS tools that cannot reason about document content.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Claude API", "Resend", "Docker"],
    bullets: [
      "Built a RAG-style pipeline that chunks uploaded policy PDFs, passes contextual segments to Claude API, and generates role-relevant MCQs that test understanding rather than surface recall",
      "Designed multi-tenant schema (orgs, policies, quizzes, attempts) with per-org shareable invite links, attempt deduplication, and real-time HR dashboard",
      "Engineered the prompt layer to produce plausible distractors — solving the key failure mode in naive LLM quiz generation",
    ],
    link: "https://coregrasp.vercel.app/",
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
  },
];

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/ranjit1024" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ranjit-das-31b866352/" },
  { label: "Twitter", href: "https://x.com/ranjitd18755665" },
  { label: "Portfolio", href: "https://ranjitdas.in/" },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function ArrowUpRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("About");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-200 relative selection:bg-white/20 selection:text-white" style={{ fontFamily: "'Inter', 'DM Sans', sans-serif" }}>
      {/* Subtle Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-[#09090b]/0 to-[#09090b]/0 pointer-events-none" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #09090b; }
        ::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #52525b; }
        body { -webkit-font-smoothing: antialiased; background-color: #09090b; }
      `}</style>

      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#09090b]/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-sm font-medium tracking-tight text-white" style={{ fontFamily: "'Space Mono', monospace" }}>
            ranjit.dev
          </span>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                className={`text-xs tracking-widest uppercase transition-colors ${active === l ? "text-white" : "text-zinc-500 hover:text-zinc-200"}`}>
                {l}
              </button>
            ))}
            <a href="mailto:ranjitdas2048@gmail.com"
              className="text-xs px-4 py-2 border border-white/20 text-zinc-300 hover:bg-white hover:text-black transition-all tracking-wide rounded-sm">
              Hire me
            </a>
          </div>
          <button className="md:hidden text-zinc-300 hover:text-white transition-colors" onClick={() => setMenuOpen(o => !o)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#09090b] border-t border-white/10 px-6 py-6 flex flex-col gap-6 shadow-2xl">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)} className="text-left text-sm uppercase tracking-widest text-zinc-400 hover:text-white">{l}</button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="about" className="min-h-screen flex items-center border-b border-white/10 relative z-10">
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 w-full">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            {/* Left text */}
            <div className="md:col-span-3">
              <FadeIn>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  <span className="text-xs tracking-widest uppercase text-zinc-400">Available for full-time roles</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.08}>
                <h1 className="text-6xl md:text-8xl font-light leading-none tracking-tighter mb-4 text-white" style={{ letterSpacing: "-0.03em" }}>
                  Ranjit<br />Das
                </h1>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="text-sm tracking-widest uppercase text-zinc-500 mb-10 mt-6">
                  Full Stack Engineer · Pune, India
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-base text-zinc-400 leading-relaxed max-w-md mb-10 font-light">
                  I build end-to-end systems — from Next.js dashboards to Kubernetes orchestrators running in production.
                  Currently shipping ecommerce reconciliation infra at DeepEcom and building{" "}
                  <span className="text-zinc-100 font-medium">coregrasp</span>, a policy compliance platform powered by Claude API.
                </p>
              </FadeIn>
              <FadeIn delay={0.26}>
                <div className="flex flex-wrap gap-4 mb-12">
                  <button onClick={() => scrollTo("Projects")}
                    className="px-7 py-3 bg-white text-black text-xs font-medium tracking-widest uppercase hover:bg-zinc-200 transition-colors rounded-sm shadow-lg shadow-white/5">
                    View projects
                  </button>
                  <a href="mailto:ranjitdas2048@gmail.com"
                    className="px-7 py-3 border border-white/20 text-zinc-300 text-xs tracking-widest uppercase hover:border-white hover:text-white transition-colors rounded-sm">
                    Get in touch
                  </a>
                </div>
                <div className="flex items-center gap-6">
                  {SOCIAL.map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                      className="text-xs tracking-wide text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group">
                      {s.label} <span className="opacity-50 group-hover:opacity-100 transition-opacity"><ArrowUpRight size={12} /></span>
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right: monogram + code snippet */}
            <FadeIn delay={0.1} className="md:col-span-2 hidden md:block">
              <div className="border border-white/10 bg-[#09090b]/50 backdrop-blur-sm rounded-sm overflow-hidden shadow-2xl">
                <div className="aspect-square flex items-center justify-center relative overflow-hidden bg-white/[0.02]">
                  <span className="text-[10rem] font-light text-white/[0.03] select-none" style={{ letterSpacing: "-0.05em", fontFamily: "'Inter', sans-serif" }}>RD</span>
                  <div className="absolute inset-0 flex items-end p-6">
                    <pre className="text-xs leading-relaxed text-zinc-400 font-mono">
                      <span className="text-purple-400">const</span> <span className="text-blue-400">dev</span> <span className="text-zinc-300">=</span> {'{\n'}
                      {'  '}role: <span className="text-emerald-400">"fullstack"</span>,\n
                      {'  '}infra: <span className="text-emerald-400">"k8s"</span>,\n
                      {'  '}open: <span className="text-orange-400">true</span>,\n
                      {'}'}
                    </pre>
                  </div>
                </div>
                <div className="border-t border-white/10 px-6 py-4 flex items-center justify-between bg-black/20">
                  <span className="text-xs text-zinc-500 tracking-wide">Building at DeepEcom</span>
                  <span className="text-xs text-zinc-600 font-mono">2025</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-32">
          <FadeIn>
            <div className="flex items-baseline gap-8 mb-20">
              <span className="text-xs font-mono text-zinc-600">02</span>
              <h2 className="text-3xl font-light tracking-tight text-white">Experience</h2>
            </div>
          </FadeIn>
          {EXPERIENCE.map((job, i) => (
            <FadeIn key={i} delay={0.08}>
              <div className="border-t border-white/10 pt-12 pb-12 group">
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-1">
                    <p className="text-xs tracking-widest uppercase text-zinc-400 mb-2">{job.company}</p>
                    <p className="text-xs text-zinc-500 mb-4">{job.location}</p>
                    <p className="text-xs font-mono text-zinc-600">{job.period}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-lg font-medium mb-6 text-zinc-100">{job.title}</h3>
                    <ul className="space-y-5">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-4 text-sm text-zinc-400 leading-relaxed font-light">
                          <span className="text-zinc-600 shrink-0 mt-0.5">—</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto px-6 py-32">
          <FadeIn>
            <div className="flex items-baseline gap-8 mb-20">
              <span className="text-xs font-mono text-zinc-600">03</span>
              <h2 className="text-3xl font-light tracking-tight text-white">Projects</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {PROJECTS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-[#09090b] p-10 flex flex-col h-full hover:bg-[#0f0f11] transition-colors group">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-emerald-400 transition-colors">{p.name}</h3>
                      <p className="text-sm text-zinc-500 mt-2 font-light">{p.desc}</p>
                    </div>
                    <a href={p.link} target="_blank" rel="noreferrer"
                      className="text-zinc-600 hover:text-white transition-colors mt-1 shrink-0 ml-4">
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <div className="border-l-2 border-white/10 pl-5 mb-8">
                    <p className="text-sm text-zinc-400 leading-relaxed font-light">{p.problem}</p>
                  </div>

                  <ul className="space-y-4 flex-1 mb-10">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-zinc-500 leading-relaxed font-light">
                        <span className="text-zinc-700 shrink-0 mt-0.5">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.stack.map(s => (
                      <span key={s} className="text-[11px] px-2.5 py-1 border border-white/10 text-zinc-400 tracking-wide rounded-sm bg-white/[0.02]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-32">
          <FadeIn>
            <div className="flex items-baseline gap-8 mb-20">
              <span className="text-xs font-mono text-zinc-600">04</span>
              <h2 className="text-3xl font-light tracking-tight text-white">Skills</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {Object.entries(SKILLS).map(([cat, items], i) => (
              <FadeIn key={cat} delay={i * 0.06}>
                <div className="bg-[#09090b] p-8 h-full hover:bg-[#0f0f11] transition-colors">
                  <p className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-6">{cat}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map(s => (
                      <span key={s} className="text-xs px-3 py-1.5 bg-white/5 text-zinc-300 hover:bg-white hover:text-black transition-colors cursor-default border border-white/5 rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certs */}
      <section className="border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <FadeIn>
            <div className="flex flex-wrap gap-5">
              {[
                { label: "100xDevs Cohort", sub: "Full-stack & Systems Engineering", href: "https://app.100xdevs.com/certificate/verify/Y80IQ59P" },
                { label: "Scaler JavaScript", sub: "Certificate of completion", href: "https://moonshot.scaler.com/s/sl/nin-Jm30KW" },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 px-6 py-4 border border-white/10 hover:border-white/30 bg-[#09090b] transition-colors group rounded-sm shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-600 group-hover:text-emerald-400 transition-colors">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{c.label}</p>
                    <p className="text-[11px] text-zinc-500 mt-1">{c.sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-32">
          <FadeIn>
            <div className="max-w-xl">
              <div className="flex items-baseline gap-8 mb-12">
                <span className="text-xs font-mono text-zinc-600">05</span>
                <h2 className="text-3xl font-light tracking-tight text-white">Let's build something</h2>
              </div>
              <p className="text-base text-zinc-400 leading-relaxed mb-12 font-light">
                I'm actively looking for SDE-1 roles. My internship wraps up soon — if you're building something interesting, let's talk.
              </p>
              <a href="mailto:ranjitdas2048@gmail.com"
                className="inline-flex items-center gap-3 text-lg font-medium text-white hover:text-emerald-400 hover:underline underline-offset-8 transition-all group">
                ranjitdas2048@gmail.com
                <ArrowUpRight size={18} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <span className="text-xs text-zinc-600 font-mono">ranjit.dev</span>
        <span className="text-xs text-zinc-600">Ranjit Das · 2025</span>
      </footer>
    </div>
  );
}