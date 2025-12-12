import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Terminal,
  ExternalLink,
  LinkedinIcon,
  LucideInstagram,
  LucideTwitter,
} from "lucide-react";


// --- DATA: Easy to update ---
const PROJECTS = [
  {
    title: "Revisly",
    desc: "Quiz & Revision Platform. Automated PDF-to-Quiz generation.",
    tags: ["Next Js", "PostgreSQL", "AWS S3", "AWS EC2", "Redis", "TailwindCss","Docker"],
    status: "Live",
    link: "https://www.revisly.in/"
  },
  {
  title: "ChessMate",
  desc: "Multiplayer chess with live video calling between opponents using WebRTC.",
  tags: ["React.js", "WebRTC", "WebSocket", "TailwindCSS", "Node.js", "gRPC", "Express.js"],
  status: "Development",
  link: "" // Add your deployed link when ready
}

];

const TECH_STACK = {
  "Core": ["React", "TypeScript", "Next.js", "Tailwind", "Vitest"],
  "Backend": ["Node.js", "Express", "gRPC", "Prisma"],
  "Infra": ["Docker", "AWS EC2", "Redis", "Postgres", "Prometheus", "Grafana"],
};

// --- COMPONENTS ---

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-sm font-bold text-neutral-500 mb-6 tracking-wider uppercase">
    {title}
  </h2>
);

function App() {
  // Simple "on mount" animation trigger
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 selection:bg-white selection:text-black">
      
      {/* 1. HERO: The "No Life" Declaration */}
      <header className="mb-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-500 text-xs font-mono font-bold tracking-widest ">ONLINE</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ranjit Das
        </h1>
        
        <p className="text-lg text-neutral-400 leading-relaxed max-w-lg">
          Full-stack developer architecting scalable digital products.
          <span className="block mt-6 text-white font-medium border-l-2 border-green-500 pl-4 ">
             "I don't have hobbies. I build Product."
          </span>
        </p>

        {/* The Intensity Grid */}
        <div className="flex  max-md:grid max-md:grid-cols-1 gap-3 mt-10">
         
          {[
            { icon: LucideTwitter, label: "X", link:"https://x.com/ranjitd18755665" },
            { icon: LinkedinIcon, label: "Linkedin", link:"https://www.linkedin.com/in/ranjit-das-31b866352/"},
            { icon: LucideInstagram, label: "Instagram",link:"https://www.instagram.com/dev_ranjit1024/" },
          ].map((item) => (
            <div key={item.label} onClick={()=>{
              window.open(item.link, '_blank')
            }} className="flex hover:cursor-pointer hover:scale-101 transition-all items-center gap-2 text-md font-bold text-neutral-500 border border-neutral-800 px-5 py-1.5 w-fit rounded-xl bg-gradient-to-bl to-neutral-950 from-neutral-800 ">
              <item.icon className=" text-white" />
              {item.label}
            </div>
          ))}
        </div>
      </header>

      {/* 2. WORK: The Evidence */}
      <section className="mb-24">
        <SectionHeader title="01_Deployments" />
        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <motion.a
              href={project.link}
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="block group p-6 border border-neutral-800  bg-neutral-900/30 rounded-lg hover:border-neutral-600 transition-all hover:bg-neutral-900"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className={`${project.status === "Live" ? "bg-green-500 p-1 rounded-2xl animate-pulse": "bg-amber-500 p-1 rounded-2xl animate-pulse"}`}></span>
                <ExternalLink className="w-5 h-5 text-neutral-600 group-hover:text-white" />
                </div>
              </div>
              
              <p className="text-neutral-400 text-sm mb-6">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 bg-neutral-800 text-neutral-300 rounded border border-neutral-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* 3. STACK: The Tools */}
      <section className="mb-20 ">
        <SectionHeader title="02_Arsenal" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(TECH_STACK).map(([category, techs]) => (
            <div key={category}>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-green-500" /> {category}
              </h4>
              <ul className="space-y-2">
                {techs.map((tech) => (
                  <li key={tech} className="text-sm text-neutral-500 hover:text-white transition-colors cursor-default">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOOTER: Direct Action */}
      <footer className="pt-12 border-t border-neutral-900">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-white font-bold mb-2">Ready to ship?</h2>
            <p className="text-neutral-500 text-sm">Open for high-intensity product roles.</p>
          </div>
          <a 
            href="mailto:ranjit@example.com" 
            className="px-6 py-3 bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors rounded"
          >
            Start a Project
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
