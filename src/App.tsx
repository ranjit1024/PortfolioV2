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

interface ArrowUpRightProps {
  size?: number;
}

// --- Data ---

const NAV_LINKS: NavLink[] = ["About", "Experience", "Projects", "Skills", "Contact"];

const SKILLS: Record<string, string[]> = {
  Frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
  Backend: ["Bun", "TypeScript", "Fastify", "Express", "Hono", "Cloudflare Workers", "gRPC", "WebSockets", "WebRTC"],
  Infrastructure: ["Kubernetes", "Docker", "KEDA", "CloudNativePG", "NGINX Ingress", "DigitalOcean", "Linux (Mint)"],
  "Data & Cloud": ["PostgreSQL", "Prisma ORM", "Redis", "PgBouncer", "SQLite", "Cloudflare R2"],
  "DevOps & Obs": ["GitHub Actions", "Prometheus", "Grafana", "Loki", "OpenTelemetry", "CI/CD", "RBAC"],
};

const EXPERIENCE: JobExperience[] = [
  {
    title: "Software Engineer Intern",
    company: "DeepEcom",
    location: "Pune, India",
    period: "Jan 2026 – July 2026",
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
      "Built a multi-tenant policy evaluation platform featuring a serverless PDF processing pipeline that extracts content and generates dynamic MCQs via Cloudflare AI (Llama 3.2)",
      "Designed a scalable PostgreSQL schema on Supabase, preventing duplicate concurrent submissions using composite constraints and eliminating N+1 queries via Prisma aggregations",
      "Implemented a real-time WebSocket notification system using hibernatable Cloudflare Durable Objects, minimizing compute costs for persistent connections",
      "Shipped secure authentication (Better Auth, OAuth), bulk candidate onboarding via CSV, and token-based password reset flows",
    ],
    link: "https://coregrasp.vercel.app/",
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
  },
];

const SOCIAL: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ranjit1024" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ranjit-das-31b866352/" },
  { label: "Twitter", href: "https://x.com/ranjitd18755665" },
  { label: "Portfolio", href: "https://ranjitdas.in/" },
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
          obs.disconnect(); // Disconnect after triggering once for a cleaner experience
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
 
  return [ref , inView];
}

function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        filter: inView ? "blur(0px)" : "blur(8px)",
        transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function ArrowUpRight({ size = 14 }: ArrowUpRightProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

// --- Main Portfolio Component ---

export default function Portfolio() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("About");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      
      // Update active nav based on scroll position
      const sections = NAV_LINKS.map(link => document.getElementById(link.toLowerCase()));
      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
          setActive(section.id.charAt(0).toUpperCase() + section.id.slice(1));
        }
      });
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 relative selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { 
          -webkit-font-smoothing: antialiased; 
          background-color: #050505; 
          font-family: 'Inter', sans-serif;
        }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        /* Brutalist Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #050505; border-left: 1px solid #1a1a1a; }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::-webkit-scrollbar-thumb:hover { background: #fff; }

        /* Background Animations */
        @keyframes pan {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        .bg-grid {
          background-size: 4rem 4rem;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          animation: pan 60s linear infinite;
        }
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.04;
          mix-blend-mode: overlay;
        }
      `}</style>

      {/* Textural Backgrounds */}
      <div className="fixed inset-0 pointer-events-none bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)] z-0" />
      <div className="fixed inset-0 pointer-events-none bg-noise z-50" />

      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent border-b border-transparent py-6"}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <span className="text-sm font-bold tracking-tighter text-white font-mono uppercase group cursor-pointer" onClick={() => scrollTo("About")}>
            Ranjit<span className="text-zinc-600 group-hover:text-white transition-colors">.SYS</span>
          </span>
          
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`text-xs tracking-widest font-mono uppercase transition-all duration-300 ${active === l ? "text-white" : "text-zinc-500 hover:text-zinc-200"}`}
              >
                {l}
              </button>
            ))}
            <a
              href="mailto:ranjitdas2048@gmail.com"
              className="text-xs font-mono px-5 py-2.5 bg-white text-black hover:bg-zinc-200 transition-colors uppercase font-bold tracking-widest"
            >
              Init_Contact
            </a>
          </div>

          <button className="md:hidden text-zinc-300 hover:text-white transition-colors z-50 relative" onClick={() => setMenuOpen((o) => !o)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" className="animate-in fade-in duration-300" />
                  <line x1="6" y1="6" x2="18" y2="18" className="animate-in fade-in duration-300" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-2xl z-40 transition-all duration-500 flex flex-col items-center justify-center md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center gap-8 text-center">
          {NAV_LINKS.map((l, i) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-3xl font-bold tracking-tighter text-white uppercase"
              style={{ transitionDelay: `${i * 100}ms`, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: menuOpen ? 1 : 0, transition: 'all 0.4s ease' }}
            >
              {l}
            </button>
          ))}
          <a
             href="mailto:ranjitdas2048@gmail.com"
             className="mt-8 text-sm font-mono px-8 py-4 bg-white text-black uppercase font-bold tracking-widest"
             style={{ transitionDelay: '500ms', transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: menuOpen ? 1 : 0, transition: 'all 0.4s ease' }}
          >
             Contact
          </a>
        </div>
      </div>

      {/* Hero */}
      <section id="about" className="min-h-screen flex items-center border-b border-white/5 relative z-10 pt-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Left text */}
            <div className="md:col-span-7 lg:col-span-8">
              <FadeIn>
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 mb-10 backdrop-blur-md">
                  <div className="w-2 h-2 bg-white animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-300">Available for full-time roles</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-7xl md:text-[8.5rem] font-bold leading-[0.85] tracking-tighter mb-8 text-white uppercase select-none">
                  Ranjit <br/> Das.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-sm tracking-widest font-mono uppercase text-zinc-500 mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-white/20 block" />
                  Software Engineer // SYS_ARCH
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-12 font-medium">
                  Building resilient backend systems, distributed queues, and scalable infrastructure. Recently wrapped up an engineering internship at DeepEcom. Currently building <span className="text-white font-bold bg-white/10 px-1.5 py-0.5 rounded-sm">CoreGrasp</span>.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 mb-14">
                  <button
                    onClick={() => scrollTo("Projects")}
                    className="px-8 py-4 bg-white text-black text-xs font-mono font-bold tracking-widest uppercase hover:bg-zinc-200 transition-colors"
                  >
                    Deployments
                  </button>
                  <a
                    href="mailto:ranjitdas2048@gmail.com"
                    className="px-8 py-4 border border-white/20 text-white text-xs font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-all backdrop-blur-sm"
                  >
                    Contact
                  </a>
                </div>
                <div className="flex items-center gap-8">
                  {SOCIAL.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono font-bold tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group uppercase"
                    >
                      {s.label}
                      <span className="opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">
                        <ArrowUpRight size={14} />
                      </span>
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right: Brutalist Glassmorphic Logo */}
            <FadeIn delay={0.2} className="md:col-span-5 lg:col-span-4 hidden md:block">
              <div className="relative aspect-square w-full max-w-[340px] ml-auto group perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-xl p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(255,255,255,0.03)] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full mix-blend-screen transition-opacity group-hover:opacity-100 opacity-50" />
                  
                  <div className="absolute top-5 right-5 text-[10px] font-mono text-zinc-500">v2.0.26</div>
                  <div className="absolute bottom-5 right-5 text-[10px] font-mono text-zinc-500 flex items-center gap-2">
                    SYS_OK <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  </div>
                  
                  <div className="z-10 mt-6 mix-blend-difference">
                    <div className="text-[8rem] font-bold leading-none tracking-tighter text-white">R_</div>
                    <div className="text-[8rem] font-bold leading-none tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>D.</div>
                  </div>

                  <div className="border-t border-white/20 pt-4 flex justify-between items-center z-10 w-full mt-auto">
                     <span className="text-xs font-mono text-white tracking-widest">PUNE_IND</span>
                  </div>
                </div>
                {/* Offset Shadow Box */}
                <div className="absolute inset-0 border border-white/10 translate-x-5 translate-y-5 -z-10 bg-[#050505] transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6" />
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-b border-white/5 relative z-10 bg-[#070707]">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <FadeIn>
            <div className="flex items-end gap-6 mb-24 border-b border-white/10 pb-6">
              <span className="text-sm font-mono font-bold text-zinc-500 mb-1.5">01.</span>
              <h2 className="text-5xl font-bold tracking-tighter text-white uppercase">Experience</h2>
            </div>
          </FadeIn>
          {EXPERIENCE.map((job, i) => (
            <FadeIn key={i} delay={0.1}>
              <div className="group relative border border-white/10 bg-[#050505] p-10 hover:border-white/30 transition-all duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-white scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500 ease-out" />
                <div className="grid md:grid-cols-12 gap-10">
                  <div className="md:col-span-3">
                    <p className="text-base font-bold tracking-widest uppercase text-white mb-2">{job.company}</p>
                    <p className="text-xs font-mono text-zinc-500 mb-3">{job.period}</p>
                    <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono bg-white/5 inline-block px-2 py-1">{job.location}</p>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-tight">{job.title}</h3>
                    <ul className="space-y-5">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-4 text-sm text-zinc-400 leading-relaxed font-medium">
                          <span className="text-white shrink-0 mt-1 font-mono opacity-50 group-hover:opacity-100 transition-opacity">::</span>
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
      <section id="projects" className="border-b border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <FadeIn>
            <div className="flex items-end gap-6 mb-24 border-b border-white/10 pb-6">
              <span className="text-sm font-mono font-bold text-zinc-500 mb-1.5">02.</span>
              <h2 className="text-5xl font-bold tracking-tighter text-white uppercase">Deployments</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#050505] border border-white/10 p-10 h-full flex flex-col hover:border-white/40 hover:-translate-y-1 transition-all duration-500 relative group overflow-hidden">
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-white">
                     <ArrowUpRight size={28} />
                  </div>
                  
                  <div className="mb-10 z-10">
                    <h3 className="text-3xl font-bold tracking-tighter text-white uppercase mb-3 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500 tracking-wide uppercase">{p.desc}</p>
                  </div>

                  <div className="bg-white/[0.02] border-l-2 border-white/50 p-5 mb-10 backdrop-blur-sm z-10 group-hover:border-white transition-colors duration-500">
                    <p className="text-sm text-zinc-300 leading-relaxed font-medium">{p.problem}</p>
                  </div>

                  <ul className="space-y-4 flex-1 mb-10 z-10">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex gap-4 text-sm text-zinc-400 leading-relaxed font-medium">
                        <span className="text-zinc-600 shrink-0 font-mono group-hover:text-white transition-colors">{'>'}</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-white/10 z-10">
                    {p.stack.map((s) => (
                      <span key={s} className="text-[10px] font-mono font-bold px-2.5 py-1.5 bg-white/10 text-white uppercase tracking-wider group-hover:bg-white group-hover:text-black transition-colors duration-300">
                        {s}
                      </span>
                    ))}
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="absolute inset-0 z-20"><span className="sr-only">View {p.name}</span></a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-b border-white/5 relative z-10 bg-[#070707]">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <FadeIn>
            <div className="flex items-end gap-6 mb-24 border-b border-white/10 pb-6">
              <span className="text-sm font-mono font-bold text-zinc-500 mb-1.5">03.</span>
              <h2 className="text-5xl font-bold tracking-tighter text-white uppercase">Architecture</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(SKILLS).map(([cat, items], i) => (
              <FadeIn key={cat} delay={i * 0.1}>
                <div className="bg-[#050505] border border-white/10 p-8 h-full hover:border-white/30 transition-colors">
                  <p className="text-sm font-bold font-mono tracking-widest uppercase text-white mb-8 flex items-center gap-4">
                    {cat}
                    <span className="flex-1 h-px bg-white/10" />
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono px-3 py-1.5 bg-white/5 text-zinc-400 hover:bg-white hover:text-black transition-colors cursor-default"
                      >
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
      <section className="border-b border-white/5 relative z-10 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <FadeIn>
            <div className="flex flex-wrap gap-8">
              {[
                { label: "100xDevs Cohort", sub: "Full-stack & Systems Engineering", href: "https://app.100xdevs.com/certificate/verify/Y80IQ59P" },
                { label: "Scaler JavaScript", sub: "Certificate of completion", href: "https://moonshot.scaler.com/s/sl/nin-Jm30KW" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-5 px-8 py-6 border border-white/10 bg-[#050505] hover:bg-white transition-all duration-300 group w-full md:w-auto"
                >
                  <div className="text-zinc-600 group-hover:text-black transition-colors">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                     </svg>
                  </div>
                  <div>
                    <p className="text-base font-bold font-mono uppercase text-white group-hover:text-black transition-colors">{c.label}</p>
                    <p className="text-xs font-mono text-zinc-500 group-hover:text-zinc-700 uppercase mt-1.5 tracking-wider">{c.sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 bg-white text-black">
        <div className="max-w-6xl mx-auto px-6 py-40">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-end gap-6 mb-16 border-b border-black/10 pb-6">
                <span className="text-sm font-mono font-bold text-zinc-400 mb-1.5">04.</span>
                <h2 className="text-5xl font-bold tracking-tighter uppercase">Initialize Protocol</h2>
              </div>
              <p className="text-2xl text-zinc-800 leading-normal mb-16 font-medium tracking-tight">
                My engineering internship concluded in July 2026. I am currently open to full-time Software Engineer positions. Let's discuss backend systems and infrastructure.
              </p>
              <a
                href="mailto:ranjitdas2048@gmail.com"
                className="inline-flex items-center gap-6 text-2xl md:text-3xl font-bold font-mono hover:bg-black hover:text-white px-8 py-6 border-4 border-black transition-all duration-300 group uppercase"
              >
                ranjitdas2048@gmail.com
                <span className="transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
                  <ArrowUpRight size={32} />
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900">
         <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <span className="text-sm font-bold text-white font-mono uppercase tracking-widest">RANJIT_DAS // PORTFOLIO</span>
              <span className="text-xs text-zinc-600 font-mono">PUNE_MAHARASHTRA_IND</span>
            </div>
            <span className="text-xs font-mono font-bold text-zinc-500 bg-white/5 px-4 py-2">SYS.OUT // 2026</span>
         </div>
      </footer>
    </div>
  );
}