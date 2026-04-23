import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type React from "react";

type Status = "live" | "soon" | "planned";

type Project = {
  title: string;
  kicker: string;
  headline: string;
  subtitle: string;
  path: string;
  status: Status;
  numeral: string;
  phase: string;
  primary?: boolean;
};

const primaryBranches: Project[] = [
  {
    kicker: "Branch I",
    title: "Arcadia",
    headline: "A 3D Virtual Planet for Digital Residents",
    subtitle:
      "Arcadians move through Arcadia as digital residents. They remain static until a conscious player connects, making an accessible infrastructure for the world to come alive only through participation.",
    path: "/elworld",
    status: "live",
    numeral: "I",
    phase: "Arcadia",
    primary: true,
  },
  {
    kicker: "Elly's Code",
    title: "Elly's Code",
    headline: "An Interactive Musical in the Mythos",
    subtitle:
      "A narrative performance that unfolds in real time, revealing the Cave, the escape, the sacrifice, and the transformation at the heart of Code-L.",
    path: "/ellyscode",
    status: "live",
    numeral: "II",
    phase: "Musical",
    primary: true,
  },
  {
    kicker: "Elco",
    title: "Comic Books",
    headline: "The Serialized Mythos Chapters",
    subtitle:
      "A parallel storyline told through comic books, expanding the universe frame by frame and revealing the deeper chapters of the myth.",
    path: "/comics",
    status: "live",
    numeral: "III",
    phase: "Comics",
    primary: true,
  },
];

const furtherReading: Project[] = [
  {
    title: "The Cave",
    kicker: "Metaphysical Experiment",
    headline: "A Living Threshold Under Development by ElCode",
    subtitle:
      "The Cave is an entry point into Arcadia and a conceptual experiment about presence, participation, and the conditions under which the mythos becomes active.",
    path: "/codeLphase1",
    status: "live",
    numeral: "IV",
    phase: "Lore",
  },
  {
    title: "Characters",
    kicker: "Mythology · Characters",
    headline: "The 12 Entities Shaping the World",
    subtitle:
      "A cast of mythical figures operating at the intersection of code and consciousness, shaping the mythos from within.",
    path: "/characters",
    status: "live",
    numeral: "V",
    phase: "Mythology",
  },
  {
    title: "ELSPARK",
    kicker: "Digital Park",
    headline: "A Sanctuary Beyond the Cave",
    subtitle:
      "A decentralised social digital park where players gather, persist, and respawn as versions of themselves.",
    path: "/elspark",
    status: "live",
    numeral: "VI",
    phase: "Platform",
  },
  {
    title: "meta-metamorphosis",
    kicker: "Ritual",
    headline: "An Initiation Game of Transformation",
    subtitle:
      "A symbolic journey from caterpillar to white moth, where each playthrough becomes part of the mythic becoming.",
    path: "/metametamorphosis",
    status: "live",
    numeral: "VII",
    phase: "Game",
  },
  {
    title: "ELSPARKTV",
    kicker: "Broadcast",
    headline: "Original Programming From Arcadia's Signal Layer",
    subtitle:
      "A curated broadcast platform for shows, live performances, and experimental media from the wider universe.",
    path: "/elspark-tv",
    status: "live",
    numeral: "VIII",
    phase: "Media",
  },
  {
    title: "ELCA",
    kicker: "Live Theatre Festival",
    headline: "A Performance Chapter Coming Into View",
    subtitle:
      "A theatrical extension of the mythos, broadcast through the network and staged as a live experience.",
    path: "/elworld",
    status: "soon",
    numeral: "IX",
    phase: "Event",
  },
  {
    title: "ElCave",
    kicker: "Exhibition",
    headline: "A One-Visitor Ritual on Earth",
    subtitle:
      "An intimate physical installation designed as a private, time-bound ritual experience.",
    path: "/elworld",
    status: "soon",
    numeral: "X",
    phase: "IRL",
  },
  {
    title: "Elcode",
    kicker: "Infrastructure",
    headline: "The Engine Funding the Mythos",
    subtitle:
      "Builds customised platforms and sustains the wider project through production, services, and creative infrastructure.",
    path: "/elcode-updates",
    status: "planned",
    numeral: "XI",
    phase: "Business",
  },
  {
    title: "ELTV",
    kicker: "Production",
    headline: "A Media Network Connecting Creatives Across Europe",
    subtitle:
      "Shows, skits, live festivals, music, and cultural production made in-house for the wider universe.",
    path: "/eltv",
    status: "planned",
    numeral: "XII",
    phase: "Media",
  },
];

const statusConfig: Record<Status, { label: string; color: string; bg: string; dot: string }> = {
  live: { label: "Live", color: "#d9d9d9", bg: "rgba(255,255,255,0.06)", dot: "#8ce0ff" },
  soon: { label: "Coming Soon", color: "#f0d7a1", bg: "rgba(240,215,161,0.08)", dot: "#f0d7a1" },
  planned: { label: "Planned", color: "#b0b0b0", bg: "rgba(255,255,255,0.04)", dot: "#b0b0b0" },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

  :root {
    --bg: #050505;
    --bg2: #0b0b0d;
    --panel: rgba(255,255,255,0.04);
    --panel-strong: rgba(255,255,255,0.07);
    --line: rgba(255,255,255,0.09);
    --text: #f5f5f5;
    --muted: rgba(245,245,245,0.68);
    --muted2: rgba(245,245,245,0.45);
    --accent: #8ce0ff;
    --warm: #f0d7a1;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { min-height: 100%; }
  body {
    background:
      radial-gradient(circle at 50% -10%, rgba(140,224,255,0.14), transparent 28%),
      radial-gradient(circle at 20% 15%, rgba(240,215,161,0.08), transparent 22%),
      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06), transparent 18%),
      linear-gradient(180deg, var(--bg), var(--bg2));
    color: var(--text);
    font-family: Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif;
  }

  .pmo-root {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at top center, rgba(255,255,255,0.06), transparent 24%),
      linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.00));
  }

  .pmo-root::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(to bottom, rgba(255,255,255,0.03), transparent 18%, transparent 82%, rgba(255,255,255,0.02)),
      radial-gradient(circle at center, transparent 56%, rgba(0,0,0,0.42) 100%);
    z-index: 0;
  }

  .pmo-shell {
    position: relative;
    z-index: 1;
  }

  .pmo-masthead {
    min-height: 72vh;
    display: grid;
    place-items: center;
    text-align: center;
    padding: 5rem 1.5rem 3rem;
    position: relative;
  }

  .pmo-masthead::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 2.5rem;
    transform: translateX(-50%);
    width: min(56vw, 420px);
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(140,224,255,0.75), rgba(240,215,161,0.7), transparent);
    filter: blur(0.1px);
  }

  .pmo-kicker {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.5rem 0.9rem;
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 999px;
    background: rgba(255,255,255,0.03);
    color: var(--muted);
    font-size: 0.72rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    backdrop-filter: blur(14px);
  }

  .pmo-kicker-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 18px rgba(140,224,255,0.8);
  }

  .pmo-flag {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(3rem, 8vw, 6.5rem);
    line-height: 0.95;
    font-weight: 700;
    letter-spacing: -0.04em;
    max-width: 13ch;
    margin: 0 auto;
    text-wrap: balance;
    text-shadow: 0 0 24px rgba(255,255,255,0.05);
  }

  .pmo-tagline {
    max-width: 60ch;
    margin: 1.3rem auto 0;
    font-size: clamp(1rem, 2vw, 1.15rem);
    line-height: 1.6;
    color: var(--muted);
  }

  .pmo-statsbar {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: 1100px;
    margin: 0 auto;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: rgba(255,255,255,0.02);
    backdrop-filter: blur(18px);
  }

  .pmo-stat {
    padding: 1rem 1.1rem;
    text-align: center;
    border-right: 1px solid var(--line);
  }

  .pmo-stat:last-child { border-right: none; }

  .pmo-stat-num {
    display: block;
    font-family: "Playfair Display", serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--text);
    line-height: 1;
  }

  .pmo-stat-label {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.7rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--muted2);
  }

  .pmo-body {
    max-width: 1120px;
    margin: 0 auto;
    padding: 3.5rem 1.25rem 6rem;
  }

  .pmo-section + .pmo-section {
    margin-top: 3.5rem;
  }

  .pmo-section-head {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .pmo-section-title {
    font-family: "Inter", sans-serif;
    font-size: 0.78rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.9);
  }

  .pmo-section-desc {
    font-size: 0.85rem;
    color: var(--muted2);
    letter-spacing: 0.08em;
  }

  .pmo-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.95rem;
  }

  .pmo-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }

  .pmo-card {
    position: relative;
    display: block;
    text-decoration: none;
    color: inherit;
    padding: 1.35rem 1.35rem 1.2rem 1.35rem;
    border: 1px solid var(--line);
    border-radius: 22px;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
    backdrop-filter: blur(20px);
    box-shadow:
      0 24px 60px rgba(0,0,0,0.24),
      inset 0 1px 0 rgba(255,255,255,0.05);
    opacity: 0;
    transform: translateY(14px) scale(0.985);
    transition:
      transform 0.35s ease,
      border-color 0.35s ease,
      box-shadow 0.35s ease,
      background 0.35s ease,
      opacity 0.55s ease;
    overflow: hidden;
    min-height: 260px;
  }

  .pmo-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top right, rgba(140,224,255,0.12), transparent 34%);
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  .pmo-card.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .pmo-card:hover {
    transform: translateY(-3px) scale(1.005);
    border-color: rgba(140,224,255,0.22);
    box-shadow:
      0 30px 70px rgba(0,0,0,0.35),
      0 0 0 1px rgba(140,224,255,0.08),
      inset 0 1px 0 rgba(255,255,255,0.06);
  }

  .pmo-card:hover::before { opacity: 1; }

  .pmo-card-inactive {
    opacity: 0.78;
    cursor: default;
  }

  .pmo-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.85rem;
  }

  .pmo-card-meta-left {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    min-width: 0;
  }

  .pmo-card-num {
    font-family: "Playfair Display", serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: rgba(245,245,245,0.75);
    flex-shrink: 0;
  }

  .pmo-card-phase {
    font-size: 0.72rem;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.42);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pmo-status {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.42rem 0.72rem;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.08);
    background: var(--status-bg);
    color: var(--status-color);
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    flex-shrink: 0;
  }

  .pmo-status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--card-dot);
    box-shadow: 0 0 16px color-mix(in srgb, var(--card-dot) 70%, transparent);
  }

  .pmo-card-kicker {
    font-size: 0.72rem;
    letter-spacing: 0.34em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.55);
    margin-bottom: 0.55rem;
  }

  .pmo-card-title {
    font-family: "Playfair Display", serif;
    font-size: clamp(1.45rem, 4vw, 2.05rem);
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-bottom: 0.65rem;
    max-width: 16ch;
  }

  .pmo-card-desc {
    max-width: 70ch;
    font-size: clamp(0.98rem, 2vw, 1.04rem);
    line-height: 1.65;
    color: var(--muted);
  }

  .pmo-card-arrow {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    margin-top: 1rem;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.65);
    transition: color 0.2s ease, transform 0.2s ease;
  }

  .pmo-card-active:hover .pmo-card-arrow {
    color: #ffffff;
    transform: translateX(2px);
  }

  .pmo-footer {
    max-width: 1120px;
    margin: 0 auto;
    padding: 1.5rem 1.25rem 3rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    border-top: 1px solid var(--line);
    color: rgba(245,245,245,0.4);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-size: 0.7rem;
  }

  .pmo-readmore {
    margin-top: 2rem;
    padding: 1rem 1.1rem;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: rgba(255,255,255,0.03);
    color: var(--muted);
    line-height: 1.7;
  }

  .pmo-readmore a {
    color: var(--text);
    text-decoration: none;
    border-bottom: 1px solid rgba(140,224,255,0.35);
  }

  @media (max-width: 980px) {
    .pmo-grid {
      grid-template-columns: 1fr;
    }
    .pmo-statsbar {
      grid-template-columns: 1fr;
    }
    .pmo-stat {
      border-right: none;
      border-bottom: 1px solid var(--line);
    }
    .pmo-stat:last-child {
      border-bottom: none;
    }
    .pmo-section-head {
      align-items: start;
      flex-direction: column;
    }
    .pmo-footer {
      flex-direction: column;
    }
  }

  @media (max-width: 640px) {
    .pmo-masthead {
      min-height: 60vh;
      padding: 4.5rem 1rem 2.5rem;
    }
    .pmo-flag {
      font-size: clamp(2.6rem, 12vw, 4rem);
    }
    .pmo-tagline {
      font-size: 0.98rem;
    }
    .pmo-body {
      padding: 2.25rem 1rem 5rem;
    }
    .pmo-card {
      padding: 1.15rem;
      border-radius: 18px;
      min-height: 240px;
    }
    .pmo-card-title {
      max-width: none;
    }
  }
`;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const sc = statusConfig[project.status];
  const isActive = project.status === "live" && project.primary !== false;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setVisible(true), index * 55);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const cardStyle = {
    "--card-dot": sc.dot,
    "--status-bg": sc.bg,
    "--status-color": sc.color,
  } as React.CSSProperties;

  const className = [
    "pmo-card",
    isActive ? "pmo-card-active" : "pmo-card-inactive",
    visible ? "visible" : "",
  ].join(" ");

  const inner = (
    <>
      <div className="pmo-card-top">
        <div className="pmo-card-meta-left">
          <span className="pmo-card-num">{project.numeral}</span>
          <span className="pmo-card-phase">{project.phase}</span>
        </div>
        <span className="pmo-status">
          <span className="pmo-status-dot" />
          {sc.label}
        </span>
      </div>

      <div className="pmo-card-kicker">{project.kicker}</div>
      <div className="pmo-card-title">{project.headline}</div>
      <div className="pmo-card-desc">{project.subtitle}</div>

      {isActive && <span className="pmo-card-arrow">Enter world →</span>}
    </>
  );

  if (isActive) {
    return (
      <Link
        to={project.path}
        className={className}
        style={cardStyle}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className={className} style={cardStyle} ref={ref}>
      {inner}
    </div>
  );
}

export default function LandingNav() {
  return (
    <>
      <style>{css}</style>
      <div className="pmo-root">
        <div className="pmo-shell">
          <header className="pmo-masthead">
            <div>
            
              <div className="pmo-flag">Code-L</div>
              <div className="pmo-tagline">One living mythos
        
                <li>Three branches to unfold through</li> A world where scripted narrative, conscious actions, and transformation unfold across a 3D digital planet, performance, and page.
              </div>
            </div>
          </header>

          <main className="pmo-body">
            <section className="pmo-section">
              <div className="pmo-section-head">
                <h2 className="pmo-section-title">The Three Branches</h2>
                <span className="pmo-section-desc">Primary entry points</span>
              </div>

              <div className="pmo-grid">
                {primaryBranches.map((p, i) => (
                  <ProjectCard key={p.title} project={p} index={i} />
                ))}
              </div>

              <div className="pmo-readmore">
                Code-L is a metaphysical experiment under development by ElCode. The Cave functions as an entry for Arcadians into Arcadia, while the wider story continues through the musical and the comics. <li>There is one hypothesis we aim to test.</li><span> Can consciousness access the world of Arcadia without the physical human body? We built the infrastructure to test it.</span>
              </div>
            </section>

           
          </main>

          <footer className="pmo-footer">
            <span>ELCODE / Mythos Code-L</span>
            <span>Built for story, stage, and signal</span>
          </footer>
        </div>
      </div>
    </>
  );
}