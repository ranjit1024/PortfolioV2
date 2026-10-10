export interface NavItem {
  id: string;
  label: string;
}

export interface ExternalLink {
  label: string;
  href: string;
  kind: "live" | "source";
}

export interface Project {
  index: string;
  name: string;
  tagline: string;
  status: string;
  problem: string;
  approach: string;
  decisions: string[];
  learnings: string[];
  stack: string[];
  links: ExternalLink[];
}

export interface SkillGroup {
  title: string;
  summary: string;
  items: string[];
}

export interface EngineeringNote {
  title: string;
  detail: string;
  tags: string[];
}

export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
}

export interface Certificate {
  label: string;
  detail: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const EMAIL = "ranjitdas2048@gmail.com";

export const NAV: NavItem[] = [
  { id: "work", label: "work" },
  { id: "engineering", label: "engineering" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "about", label: "about" },
  { id: "contact", label: "contact" },
];

export const NAV_IDS: string[] = NAV.map((item) => item.id);

export const SOCIAL: SocialLink[] = [
  { label: "github", href: "https://github.com/ranjit1024" },
  { label: "linkedin", href: "https://www.linkedin.com/in/ranjit-das-31b866352/" },
  { label: "x", href: "https://x.com/ranjitd18755665" },
];

export const PROJECTS: Project[] = [
  {
    index: "01",
    name: "CoreGrasp",
    tagline:
      "A multi-tenant platform that turns static policy documents into verifiable, AI-generated assessments.",
    status: "live",
    problem:
      "Organizations had no reliable way to confirm that employees actually understood an internal policy. Compliance was checked with manual sign-offs or generic quizzes that could not reason about the content of a specific document.",
    approach:
      "A serverless pipeline ingests a policy PDF, extracts its clauses, and generates multiple-choice assessments from them. Each organization is an isolated tenant. Candidates are onboarded by tokenized link or CSV, submissions are scored automatically, and results stream into a live dashboard.",
    decisions: [
      "Used hibernatable Cloudflare Durable Objects for real-time WebSocket notifications, so always-on connections cost nothing while a tenant is idle.",
      "Modeled Postgres with composite unique constraints so duplicate concurrent submissions are impossible at the database level rather than in application code.",
      "Collapsed N+1 access patterns into Prisma aggregations instead of issuing per-row lookups.",
      "Kept tenant isolation explicit in the schema so cross-tenant reads are not expressible.",
    ],
    learnings: [
      "LLM output is nondeterministic, so generated questions need validation and normalization before they are safe to persist.",
      "Serverless and persistent connections pull in opposite directions; hibernatable Durable Objects are the seam that lets both exist.",
      "Constraints enforced in the database survive concurrency bugs that application-level checks do not.",
    ],
    stack: [
      "TypeScript",
      "Cloudflare Workers",
      "Durable Objects",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Cloudflare AI",
    ],
    links: [
      { label: "live", href: "https://coregrasp.vercel.app/", kind: "live" },
      { label: "source", href: "https://github.com/ranjit1024/coregrasp", kind: "source" },
    ],
  },
  {
    index: "02",
    name: "ChessMate",
    tagline: "Real-time multiplayer chess with peer-to-peer video between opponents.",
    status: "live",
    problem:
      "Playing chess online is usually silent and impersonal. I wanted a match where you can see and talk to your opponent without standing up a media server.",
    approach:
      "A Bun WebSocket server synchronizes moves and doubles as the WebRTC signaling channel. Once peers negotiate, video flows directly between browsers. The backend is containerized and deployed to AWS EC2 through a GitHub Actions pipeline.",
    decisions: [
      "Used WebRTC peer connections for media and a single WebSocket channel for move sync and signaling, so no video ever touches the server.",
      "Containerized the server with Docker for a reproducible build and parity between local development and EC2.",
      "Automated deploys with GitHub Actions so a push builds the image and ships it to EC2.",
    ],
    learnings: [
      "WebRTC setup is fragile across NATs; STUN covers most peers but dependable calling needs a TURN fallback.",
      "Stateful WebSocket servers are harder to scale than stateless APIs — connection ownership becomes the core problem.",
      "Keeping media peer-to-peer instead of relaying it cut bandwidth and cost dramatically.",
    ],
    stack: [
      "React",
      "Bun",
      "TypeScript",
      "WebSocket",
      "WebRTC",
      "Docker",
      "AWS EC2",
      "GitHub Actions",
    ],
    links: [
      { label: "live", href: "https://chess-nt9u.vercel.app/", kind: "live" },
      { label: "source", href: "https://github.com/ranjit1024/chess", kind: "source" },
    ],
  },
];

export const ENGINEERING_NOTES: EngineeringNote[] = [
  {
    title: "Distributed queue processing",
    detail:
      "Designed a queue-processing system that coordinates report ingestion across marketplaces, with isolated queues per source and XState workflows acting as parent and per-shard actors. Workers scale horizontally on queue depth via KEDA instead of guessing at capacity.",
    tags: ["TypeScript", "XState", "KEDA", "Kubernetes"],
  },
  {
    title: "Database reliability under load",
    detail:
      "Diagnosed PostgreSQL connection exhaustion in a high-traffic execution engine and fixed it at the boundary: PgBouncer pooling plus a storage layer that keeps shard isolation strict, so one busy source can't starve the rest of the system.",
    tags: ["PostgreSQL", "PgBouncer", "Redis"],
  },
  {
    title: "Real-time and peer-to-peer",
    detail:
      "Built both server-driven real-time (hibernatable Durable Objects for notifications) and browser-to-browser media (WebRTC with a WebSocket signaling channel). The through-line is keeping long-lived connections cheap and pushing work to the edge where it belongs.",
    tags: ["WebSockets", "WebRTC", "Durable Objects"],
  },
  {
    title: "Observability and operations",
    detail:
      "Stood up a full Prometheus / Grafana / Loki stack alongside a Kubernetes migration to self-hosted CloudNativePG, so services are instrumented and traceable rather than debugged blind.",
    tags: ["Prometheus", "Grafana", "Loki", "OpenTelemetry"],
  },
];

export const EXPERIENCE: Job[] = [
  {
    company: "DeepEcom",
    role: "Software Engineer Intern",
    location: "Pune, India",
    period: "Jan 2026 — Present",
    summary:
      "Backend and infrastructure work on internal systems: distributed data processing, Kubernetes-hosted services, and the database and observability layers underneath them.",
    bullets: [
      "Migrated cloud infrastructure from Azure to DigitalOcean, deploying self-hosted CloudNativePG and a Prometheus / Grafana / Loki observability stack on Kubernetes.",
      "Engineered a distributed queue-processing system (TypeScript, XState v5) coordinating data ingestion and synchronization across Amazon and Flipkart, scaling via KEDA to process 200+ daily reports.",
      "Resolved PostgreSQL connection exhaustion in a high-load execution engine with PgBouncer pooling and a storage layer that enforces strict shard isolation.",
      "Developed an internal CQRS-style issue tracker using a Web Worker-driven SQLite database with OPFS persistence.",
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    title: "Backend Engineering",
    summary: "APIs, services, and the logic between them.",
    items: [
      "Go",
      "Node.js",
      "Bun",
      "TypeScript",
      "Hono",
      "Fastify",
      "Express",
      "gRPC",
      "REST",
      "WebSockets",
    ],
  },
  {
    title: "Databases & Data Systems",
    summary: "Schemas and access paths that hold up under concurrency.",
    items: ["PostgreSQL", "Prisma", "Redis", "PgBouncer", "SQLite (OPFS)", "CloudNativePG"],
  },
  {
    title: "Infrastructure & Observability",
    summary: "Build it, ship it, and see what it is doing in production.",
    items: [
      "Docker",
      "Kubernetes",
      "KEDA",
      "AWS",
      "DigitalOcean",
      "GitHub Actions",
      "NGINX Ingress",
      "Prometheus",
      "Grafana",
      "Loki",
      "OpenTelemetry",
    ],
  },
  {
    title: "Frontend & Product",
    summary: "The interface that makes the backend useful.",
    items: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit"],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    label: "100xDevs Cohort",
    detail: "Full-stack & systems engineering",
    href: "https://app.100xdevs.com/certificate/verify/Y80IQ59P",
  },
  {
    label: "Scaler JavaScript",
    detail: "Certificate of completion",
    href: "https://moonshot.scaler.com/s/sl/nin-Jm30KW",
  },
];
