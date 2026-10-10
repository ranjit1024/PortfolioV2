import { useEffect, useState, type ReactNode } from "react";
import {
  CERTIFICATES,
  EMAIL,
  ENGINEERING_NOTES,
  EXPERIENCE,
  NAV,
  NAV_IDS,
  PROJECTS,
  SKILLS,
  SOCIAL,
  type Project,
} from "./data";
import { useActiveSection, useScrolled } from "./lib/hooks";
import {
  ArchitectureDiagram,
  ArrowRight,
  ArrowUpRight,
  FadeIn,
  GitHubIcon,
  MailIcon,
  SectionHeader,
  StatusDot,
  Tag,
  ThemeToggle,
} from "./components/ui";

const GITHUB_URL = SOCIAL.find((s) => s.label === "github")?.href ?? "https://github.com/ranjit1024";
const YEAR = new Date().getFullYear();

/* ------------------------------------------------------------------ Nav */

function Nav() {
  const scrolled = useScrolled();
  const active = useActiveSection(NAV_IDS);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-canvas/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-sm text-ink"
          aria-label="Ranjit Das — back to top"
        >
          <img
            src="/favicon.svg"
            alt=""
            width={32}
            height={32}
            draggable={false}
            className="h-8 w-8 select-none transition-transform duration-200 ease-out group-hover:-translate-y-0.5"
          />
          <span className="transition-colors group-hover:text-accent">ranjit.das</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`group px-3 py-2 font-mono text-[13px] transition-colors ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                <span className={isActive ? "text-accent" : "text-faint group-hover:text-accent"}>/</span>
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center border border-line font-mono text-xs text-ink lg:hidden"
          >
            {open ? "esc" : "≡"}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-0 top-16 z-30 flex flex-col bg-canvas transition-opacity duration-200 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-6 py-6">
          {NAV.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 border-b border-line py-4 font-mono text-lg text-ink"
            >
              <span className="text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ----------------------------------------------------------------- Hero */

function KRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-6 py-3.5">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right text-ink">{children}</dd>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-16">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-14 md:grid-cols-12 md:gap-12 md:py-20">
        <div className="md:col-span-7">
          <FadeIn>
            <p className="font-mono text-xs text-muted">Software Engineer · Pune, India</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
              I build <span className="text-accent">backend systems</span> and real-world products.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
              Software engineer focused on backend engineering, distributed workflows, and production
              infrastructure — with the full-stack range to ship the product on top.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-sm font-medium text-canvas transition-colors hover:bg-accent-soft"
              >
                View selected work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-line-strong hover:bg-surface"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-line-strong hover:bg-surface"
              >
                <MailIcon className="h-4 w-4" />
                Contact
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="md:col-span-5">
          <FadeIn delay={0.12}>
            <div className="border border-line bg-panel">
              <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[11px] text-faint">
                <span>./profile</span>
                <span className="flex items-center gap-2 text-ok">
                  <StatusDot />
                  available
                </span>
              </div>
              <dl className="divide-y divide-line px-5 font-mono text-[13px]">
                <KRow label="role">software engineer</KRow>
                <KRow label="focus">backend · distributed systems</KRow>
                <KRow label="currently">DeepEcom — backend & infra</KRow>
                <KRow label="location">Pune, India · IST</KRow>
                <KRow label="status">open to full-time roles</KRow>
              </dl>
              <div className="border-t border-line px-5 py-3.5 font-mono text-[11px] text-muted">
                kubernetes · postgres · typescript
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Work */

function CaseBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-3 sm:grid-cols-[168px_minmax(0,1fr)] sm:gap-6">
      <h4 className="font-mono text-[11px] uppercase tracking-wider text-accent sm:pt-0.5">{label}</h4>
      <div className="text-sm leading-relaxed text-body">{children}</div>
    </div>
  );
}

function ProjectCase({ project }: { project: Project }) {
  return (
    <article className="grid gap-8 border-t border-line py-14 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] md:gap-12">
      <div className="self-start md:sticky md:top-24">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-faint">{project.index}</span>
          <span className="flex items-center gap-2 font-mono text-[11px] text-ok">
            <StatusDot />
            {project.status}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-ink">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>

        <div className="mt-5 flex flex-col gap-2 font-mono text-[13px]">
          {project.links.map((link) => (
            <a
              key={link.kind}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-1.5 text-ink transition-colors hover:text-accent"
            >
              {link.kind === "live" ? "live demo" : "source"}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <li key={item}>
              <Tag>{item}</Tag>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-8">
        <CaseBlock label="Problem">{project.problem}</CaseBlock>
        <CaseBlock label="Approach">{project.approach}</CaseBlock>
        <CaseBlock label="Architecture">
          <span className="font-mono text-[12.5px] leading-relaxed text-muted">
            {project.architecture}
          </span>
        </CaseBlock>
        <CaseBlock label="Decisions & trade-offs">
          <ul className="space-y-3">
            {project.decisions.map((decision) => (
              <li key={decision} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{decision}</span>
              </li>
            ))}
          </ul>
        </CaseBlock>
        <CaseBlock label="Challenges & learnings">
          <ul className="space-y-3">
            {project.learnings.map((learning) => (
              <li key={learning} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong" aria-hidden="true" />
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </CaseBlock>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <FadeIn>
          <SectionHeader
            index="01"
            title="Selected work"
            description="Systems I designed and shipped end to end — with the decisions and trade-offs that shaped them."
          />
        </FadeIn>
        {PROJECTS.map((project) => (
          <ProjectCase key={project.name} project={project} />
        ))}
        <p className="border-t border-line pt-8 font-mono text-xs text-muted">
          More experiments on{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            GitHub
            <ArrowUpRight className="h-3 w-3" />
          </a>
          .
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- Engineering */

function Engineering() {
  return (
    <section id="engineering" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <FadeIn>
          <SectionHeader
            index="02"
            title="How I engineer"
            description="The parts of the job I care about: making systems that survive load, failure, and whoever has to debug them next."
          />
        </FadeIn>

        <FadeIn>
          <figure className="border border-line bg-panel">
            <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-5 py-3 font-mono text-[11px]">
              <span className="text-ink">fig. 01 — distributed report ingestion</span>
              <span className="text-faint">DeepEcom · internal system</span>
            </figcaption>
            <div className="overflow-x-auto p-5 md:p-7">
              <ArchitectureDiagram />
            </div>
          </figure>
        </FadeIn>

        <div className="hairline-grid mt-6 sm:grid-cols-2">
          {ENGINEERING_NOTES.map((note) => (
            <div key={note.title} className="p-6 md:p-7">
              <h3 className="text-base font-medium text-ink">{note.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{note.detail}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {note.tags.map((tag) => (
                  <li key={tag}>
                    <Tag>{tag}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- Experience */

function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <FadeIn>
          <SectionHeader index="03" title="Experience" />
        </FadeIn>
        {EXPERIENCE.map((job) => (
          <div
            key={job.company}
            className="grid gap-8 border-t border-line pt-10 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-12"
          >
            <div>
              <h3 className="text-xl font-semibold text-ink">{job.company}</h3>
              <p className="mt-1 text-sm text-body">{job.role}</p>
              <p className="mt-4 font-mono text-xs text-muted">{job.period}</p>
              <p className="mt-1 font-mono text-xs text-muted">{job.location}</p>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-body">{job.summary}</p>
              <ul className="mt-6 space-y-4">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-body">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Skills */

function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <FadeIn>
          <SectionHeader
            index="04"
            title="Capabilities"
            description="Grouped by what I can own, rather than a wall of logos."
          />
        </FadeIn>
        <FadeIn>
          <div className="hairline-grid md:grid-cols-2">
            {SKILLS.map((group) => (
              <div key={group.title} className="p-6 md:p-7">
                <h3 className="text-base font-medium text-ink">{group.title}</h3>
                <p className="mt-1 text-sm text-muted">{group.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- About */

function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <FadeIn>
          <SectionHeader index="05" title="About" />
        </FadeIn>
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,300px)]">
          <FadeIn className="space-y-5">
            <p className="leading-relaxed text-body">
              I learn by building things end to end — designing the schema, writing the worker,
              deploying it, and debugging it when it breaks at the wrong time. Most of what I know
              came from shipping and then fixing, not from tutorials.
            </p>
            <p className="leading-relaxed text-body">
              I am most at home on the backend: queues and workers, database access paths, and the
              unglamorous reliability work that makes a system operable. I care about software that
              holds up under load and can be understood by the next person who has to touch it.
            </p>
            <p className="leading-relaxed text-body">
              Right now I am going deeper on distributed systems and infrastructure, and turning that
              into production systems I can stand behind.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="space-y-4">
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-accent">
              Certifications
            </h3>
            {CERTIFICATES.map((cert) => (
              <a
                key={cert.label}
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                className="group block border border-line p-4 transition-colors hover:border-line-strong hover:bg-surface"
              >
                <span className="flex items-center justify-between text-sm text-ink">
                  {cert.label}
                  <ArrowUpRight className="h-3.5 w-3.5 text-faint transition-colors group-hover:text-accent" />
                </span>
                <span className="mt-1 block font-mono text-[11px] text-muted">{cert.detail}</span>
              </a>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Contact */

function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <FadeIn>
          <SectionHeader
            index="06"
            title="Contact"
            description="Open to full-time backend and infrastructure roles. If you are building something with hard systems problems, I would like to hear about it."
          />
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-ink transition-colors hover:text-accent sm:text-3xl"
          >
            {EMAIL}
            <ArrowUpRight className="h-5 w-5 text-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent sm:h-6 sm:w-6" />
          </a>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
            {SOCIAL.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Shell */

export default function App() {
  return (
    <div className="relative min-h-screen bg-canvas">
      <div className="grain pointer-events-none fixed inset-0 z-50" aria-hidden="true" />
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Work />
        <Engineering />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 font-mono text-[11px] text-faint md:flex-row md:items-center">
          <span>© {YEAR} Ranjit Das</span>
          <span>React · Vite · Tailwind CSS</span>
          <span className="flex items-center gap-2">
            <StatusDot />
            process exited 0
          </span>
        </div>
      </footer>
    </div>
  );
}
