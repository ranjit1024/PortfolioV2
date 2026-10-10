import type { ReactNode } from "react";
import { useInView, useTheme } from "../lib/hooks";

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function StatusDot({ color = "var(--ok)" }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2" aria-hidden="true">
      <span
        className="absolute inline-flex h-full w-full rounded-full opacity-60 motion-safe:animate-ping"
        style={{ backgroundColor: color, animationDuration: "2.4s" }}
      />
      <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border border-line px-2 py-0.5 font-mono text-[11px] leading-5 text-muted">
      {children}
    </span>
  );
}

export function SectionHeader({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-body">{description}</p>}
    </div>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M8 1v1.6M8 13.4V15M1 8h1.6M13.4 8H15M3.05 3.05l1.13 1.13M11.82 11.82l1.13 1.13M12.95 3.05l-1.13 1.13M4.18 11.82l-1.13 1.13"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="m2 4 6 5 6-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="flex h-9 w-9 items-center justify-center border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
    >
      {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  );
}

interface DiagramNode {
  y: number;
  title: string;
  subtitle: string;
  note: string;
}

const DIAGRAM_NODES: DiagramNode[] = [
  { y: 16, title: "Ingestion", subtitle: "Amazon / Flipkart report feeds", note: "scheduled" },
  { y: 92, title: "Shard queues", subtitle: "isolated queue per marketplace", note: "one per source" },
  { y: 168, title: "XState workflow", subtitle: "parent + per-shard actors", note: "retries & ordering" },
  { y: 244, title: "Worker pool", subtitle: "idempotent processing", note: "KEDA scales on depth" },
  { y: 320, title: "Postgres", subtitle: "PgBouncer pooling", note: "strict shard isolation" },
];

const NODE_X = 56;
const NODE_W = 360;
const NODE_H = 48;
const CENTER_X = NODE_X + NODE_W / 2;

export function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 640 384"
      className="h-auto w-full min-w-[520px]"
      role="img"
      aria-label="Architecture of the distributed report ingestion system: marketplaces feed into ingestion, then shard queues, an XState workflow with parent and per-shard actors, a KEDA-scaled worker pool, and Postgres behind PgBouncer with strict shard isolation."
    >
      <defs>
        <marker id="arrow" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="var(--faint-color)" />
        </marker>
      </defs>

      {DIAGRAM_NODES.map((node, i) => {
        const midY = node.y + NODE_H / 2;
        return (
          <g key={node.title}>
            <rect
              x={NODE_X}
              y={node.y}
              width={NODE_W}
              height={NODE_H}
              rx="3"
              fill="var(--panel)"
              stroke="var(--line-strong)"
            />
            <text
              x={NODE_X + 16}
              y={node.y + 20}
              fill="var(--ink)"
              className="font-mono"
              fontSize="12.5"
              fontWeight="500"
            >
              {node.title}
            </text>
            <text
              x={NODE_X + 16}
              y={node.y + 36}
              fill="var(--muted-color)"
              className="font-mono"
              fontSize="10"
            >
              {node.subtitle}
            </text>

            {/* annotation off to the right */}
            <line
              x1={NODE_X + NODE_W}
              y1={midY}
              x2={NODE_X + NODE_W + 18}
              y2={midY}
              stroke="var(--line)"
              strokeDasharray="2 3"
            />
            <text
              x={NODE_X + NODE_W + 26}
              y={midY + 3.5}
              fill="var(--faint-color)"
              className="font-mono"
              fontSize="10"
            >
              {node.note}
            </text>

            {i < DIAGRAM_NODES.length - 1 && (
              <line
                x1={CENTER_X}
                y1={node.y + NODE_H}
                x2={CENTER_X}
                y2={node.y + NODE_H + 28}
                stroke="var(--line-strong)"
                markerEnd="url(#arrow)"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
