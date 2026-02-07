import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  ArrowUpRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Cpu, 
  Server,

} from "lucide-react";

// --- DATA ---
const PROJECTS = [
  {
    title: "Revisly ",
    role: "Founder & Lead Dev",
    desc: "An intelligent revision platform that enables HR teams to evaluate how well employees understand company policies. HRs can upload policy PDFs, automatically generate assessments, import employee email lists via CSV or other supported formats, and send tests directly to employees.",
    metrics: "100+ Active Users • Automated Pipeline",
    tags: ["Next.js", "Tailwind Css","framer motion", "redux toolkit", "Express", "Zod", "Postgress", "Prisma Orm",  "Redis", "OpenAI API", "AWS S3/EC2", "Docker", "Certbot", "Nginx"],
    status: "Dev",
    link: "https://www.revisly.in/",

  },

  
];

const STACK = {
  "Frontend": ["HTMl", "CSS", "JavaScript", "React","Next.js 14",  "TypeScript", "Tailwind", "Framer Motion"],
  "Backend": ["Node.js", "Zod", "Express", "gRPC", "WebSockets", "webRTC", "Cloudflare Workers", "Hono"],
  "Infra": ["Docker","GitHub Actions", "Kubernetes", "AWS (EC2, S3)", "ASG", "EKS", "Nginx", "CI/CD", "ASG"],
  "Data": ["PostgreSQL", "Redis", "Prisma", "ProtoBuf", "Grafana",]
};

// --- COMPONENTS ---

const SectionHeader = ({ title, icon: Icon }:any) => (
  <div className="flex items-center gap-2 mb-8 border-b border-zinc-800 pb-2">
    {Icon && <Icon className="w-4 h-4 text-emerald-500" />}
    <h2 className="text-xs font-mono font-bold text-zinc-400 tracking-widest uppercase">
      {title}
    </h2>
  </div>
);

const Badge = ({ children, color = "emerald" }:any) => (
  <span className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded border ${
    color === "emerald" 
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
      : "bg-amber-500/10 text-amber-400 border-amber-500/20"
  }`}>
    {children}
  </span>
);

function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">
      
      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <main className="max-w-3xl mx-auto px-6 py-24 relative z-10">
        
        {/* 1. HERO SECTION */}
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-2 mb-6"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-xs font-mono text-emerald-500 tracking-wider">SYSTEM ONLINE • PUNE, IN</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-zinc-100 tracking-tight mb-6"
          >
            Ranjit Das
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
           
         
               <span className="text-zinc-100 font-medium">Build </span> Not <span className="text-emerald-400 font-medium"> Code</span>.
            </p>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
            </p>

            {/* THE MANIFESTO: Reframed "No Life" */}
            
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 mt-10"
          >
            {[
              { Icon: Github, href: "https://github.com/ranjit1024" },
              { Icon: Twitter, href: "https://x.com/ranjitd18755665" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/ranjit-das-31b866352/" },
              { Icon: Instagram, href: "https://www.instagram.com/dev_ranjit1024/" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-emerald-400 transition-colors p-2 hover:bg-zinc-900 rounded-lg -ml-2"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </header>

        {/* 2. PROJECTS SECTION */}
        <section className="mb-24">
          <SectionHeader title="Selected Deployments" icon={Server} />
          <div className="grid grid-cols-1 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="group block relative bg-zinc-900/20 border border-zinc-800 hover:border-zinc-600 rounded-xl overflow-hidden transition-all hover:bg-zinc-900/40"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                        <Badge color={project.status === "Production" ? "emerald" : "amber"}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-xs font-mono text-zinc-500">{project.role}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono text-zinc-400 font-medium border border-zinc-800 px-2 py-1 rounded bg-zinc-950/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* 3. ARSENAL (TECH STACK) */}
        <section className="mb-24">
          <SectionHeader title="Infrastructure & Arsenal" icon={Cpu} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(STACK).map(([category, techs], i) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/10 hover:border-zinc-700 transition-colors"
              >
                <h4 className="text-xs font-bold text-zinc-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                  {category}
                </h4>
                <ul className="space-y-1.5">
                  {techs.map((tech) => (
                    <li key={tech} className="text-xs text-zinc-500 font-mono hover:text-emerald-400 transition-colors cursor-default">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. FOOTER */}
        <footer className="border-t border-zinc-900 pt-12 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-zinc-100 font-bold mb-1">Ready to scale?</h3>
              <p className="text-zinc-500 text-sm">Open for high-impact engineering roles.</p>
            </div>
            
            <a 
              href="mailto:ranjit@example.com"
              className="group flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 font-bold text-sm rounded hover:bg-emerald-400 hover:text-zinc-950 transition-all"
            >
              <Terminal className="w-4 h-4" />
              <span>Initialize_Protocol</span>
            </a>
          </div>
          
          <div className="mt-12 text-center text-[10px] font-mono text-zinc-700">
            © 2025 RANJIT DAS • SYSTEM NORMAL • 127.0.0.1
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;
