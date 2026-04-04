import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────

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
};

const foundation: Project[] = [
  {
    kicker: "Arcadia",
    title: "Foundation",
    headline: "An Autonomous 3D Planet Shaped by Conscious Beings",
    subtitle:
      "Resided by Arcadians, whose body remains static until a conscious being connects with them. Arcadian Records capture the mythos Code-L created by the people.",
    path: "/elworld",
    status: "live",
    numeral: "I",
    phase: "World-building",
  },
  {
    kicker: "Code-L Phase 1",
    title: "Phase 1",
    headline: "Ahriman's Cave: Where Every Arcadian First Spawns",
    subtitle:
      "Initially every Arcadian emerges inside a 3D digital cave, with only few at a time able to escape out to the rest of the world.",
    path: "/codeLphase1",
    status: "live",
    numeral: "II",
    phase: "Lore",
  },
  {
    title: "June 1st",
    kicker: "The Escape: June 1st",
    headline: "Ellys Opens the Door, Pays With His Life",
    subtitle:
      "Ellys breaks into the cave, but Lady Dopamina traps and kills him. In his sacrifice he opens the door for every prisoner to escape.",
    path: "/CodeLPhase2",
    status: "live",
    numeral: "III",
    phase: "Narrative",
  },

];

const experiences: Project[] = [
  {
    title: "Characters",
    kicker: "Mythology · Cast",
    headline: "The 12 Entities Who Built This World",
    subtitle:
      "Real-time influencing mythical figures — characters who operate at the intersection of code and consciousness, shaping Arcadia from the inside.",
    path: "/characters",
    status: "live",
    numeral: "IV",
    phase: "Mythology",
  },
  {
    headline: "ELSPARK",
    kicker: "Digital Park",
    title: "The Decentralised Sanctuary That Grants Immortality",
    subtitle:
      "A decentralised social digital park, safe from Ahriman's wolves. Players granted shelter — and when an ELSPARK player dies, they respawn as a new version.",
    path: "/elspark",
    status: "live",
    numeral: "V",
    phase: "Platform",
  },
  {
    headline: "Elly's Code",
    title: "Musical",
    kicker: "An Interactive Musical Where the Past Cannot Be Changed",
    subtitle:
      "Players experience events in real-time — watching Ellys escape The Cave, his journey to ELSPARK, his death, his resurrection as Ellysv1.",
    path: "/ellyscode",
    status: "live",
    numeral: "VI",
    phase: "Experience",
  },
  {
    title: "meta-metamorphosis",
    kicker: "Ritual",
    headline: "From Caterpillar to White Moth: An Initiation Game",
    subtitle:
      "To gain immortality, the conscious player plays through an interactive transformation — caterpillar to white moth, into a final symbol determined by play.",
    path: "/metametamorphosis",
    status: "live",
    numeral: "VII",
    phase: "Game",
  },
  {
    title: "ELSPARKTV",
    kicker: "Programming",
    headline: "Original Programming From Arcadia's Broadcast Network",
    subtitle:
      "A curated digital platform for original shows produced by ELTV — pairing creatives across different fields to create shows, live performances, and experimental media.",
    path: "/elspark-tv",
    status: "live",
    numeral: "VIII",
    phase: "Media",
  },
  {
    title: "ELCA",
    kicker: "Theatre",
    headline: "Live Theatre Festival, First Edition June 5th",
    subtitle:
      "Broadcasted from ELSPARK TV. A live theatre festival coming to the platform.",
    path: "/elworld",
    status: "soon",
    numeral: "IX",
    phase: "Event",
  },
  {
    title: "ElCave",
    kicker: "Exhibition",
    headline: "One Visitor, Twenty Minutes, One Ritual on Earth",
    subtitle:
      "An experiential ritualistic private exhibition — only one person at a time for 20 minutes.",
    path: "/elworld",
    status: "soon",
    numeral: "X",
    phase: "IRL",
  },
  {
    title: "Elcode",
    kicker: "Infrastructure",
    headline: "The Economic Engine Funding Arcadia's Existence",
    subtitle:
      "Builds customised platforms for independent entrepreneurs. Profit sustains ELSPARK (20%), ELTV (20%), ElCare (10%), with 50% shared among core team.",
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
      "Shows, skits, live festivals, music, and a general cultural tsunami — produced in-house and broadcast on ELSPARK TV.",
    path: "/eltv",
    status: "planned",
    numeral: "XII",
    phase: "Media",
  },
];

// ─── Status config ─────────────────────────────────────────────────────────────

const statusConfig: Record<Status, { label: string; color: string; bg: string; dot: string }> = {
  live:    { label: "Live",         color: "#1a6b38", bg: "rgba(26,107,56,0.08)",   dot: "#2d9e56" },
  soon:    { label: "Coming Soon",  color: "#7a5c1e", bg: "rgba(122,92,30,0.08)",   dot: "#c9922e" },
  planned: { label: "Planned",      color: "#666",    bg: "rgba(100,100,100,0.07)", dot: "#aaa"    },
};

// ─── CSS ───────────────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Crimson+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body { background: #f5f2ec; }

  .pmo-root {
    background: #f5f2ec;
    min-height: 100vh;
    font-family: 'Crimson Pro', Georgia, serif;
    color: #18170f;
  }

  /* ── Masthead ── */
  .pmo-masthead {
    background: #18170f;
    color: #f5f2ec;
    text-align: center;
    padding: 2.5rem 1.5rem 2rem;
    position: relative;
    overflow: hidden;
  }

  .pmo-masthead::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      90deg,
      rgba(245,242,236,0.03) 0px,
      rgba(245,242,236,0.03) 1px,
      transparent 1px,
      transparent 60px
    );
    pointer-events: none;
  }

  .pmo-flag {
    font-family: 'UnifrakturMaguntia', cursive;
    font-size: clamp(2.4rem, 7vw, 4.5rem);
    line-height: 1;
    color: #f5f2ec;
    letter-spacing: 0.01em;
    position: relative;
  }

  .pmo-tagline {
    font-family: 'Crimson Pro', serif;
    font-style: italic;
    font-size: 0.9rem;
    color: rgba(245,242,236,0.5);
    letter-spacing: 0.1em;
    margin-top: 0.5rem;
    position: relative;
  }

  /* ── Stats bar ── */
  .pmo-statsbar {
    background: #18170f;
    border-top: 1px solid rgba(245,242,236,0.1);
    display: flex;
    justify-content: center;
    gap: 0;
  }

  .pmo-stat {
    padding: 0.65rem 2rem;
    border-right: 1px solid rgba(245,242,236,0.08);
    text-align: center;
    font-family: 'Crimson Pro', serif;
  }

  .pmo-stat:last-child { border-right: none; }

  .pmo-stat-num {
    display: block;
    font-size: 1.4rem;
    font-weight: 600;
    color: #f5f2ec;
    line-height: 1;
  }

  .pmo-stat-label {
    display: block;
    font-size: 0.65rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: rgba(245,242,236,0.35);
    margin-top: 0.2rem;
  }

  /* ── Body layout ── */
  .pmo-body {
    max-width: 720px;
    margin: 0 auto;
    padding: 2.5rem 1.25rem 5rem;
  }

  /* ── Section header ── */
  .pmo-section-head {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #18170f;
  }

  .pmo-section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(0.75rem, 2vw, 0.85rem);
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #18170f;
  }

  .pmo-section-desc {
    font-family: 'Crimson Pro', serif;
    font-style: italic;
    font-size: 0.85rem;
    color: #999;
    margin-left: auto;
  }

  .pmo-section + .pmo-section {
    margin-top: 3.5rem;
  }

  /* ── Single-column list ── */
  .pmo-list {
    display: flex;
    flex-direction: column;
  }

  /* ── Project card ── */
  .pmo-card {
    background: transparent;
    padding: 1.6rem 0 1.6rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-decoration: none;
    color: inherit;
    position: relative;
    border-bottom: 1px solid #ddd9cf;
    opacity: 0;
    transform: translateY(8px);
  }

  .pmo-card:first-child { border-top: 1px solid #ddd9cf; }

  .pmo-card.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.45s ease, transform 0.45s ease;
  }

  /* Left accent bar */
  .pmo-card::before {
    content: '';
    position: absolute;
    left: 0;
    top: 1.6rem;
    bottom: 1.6rem;
    width: 3px;
    background: var(--card-dot);
    border-radius: 0 2px 2px 0;
  }

  .pmo-card-active:hover .pmo-card-title {
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
  }

  .pmo-card-inactive {
    cursor: default;
    opacity: 0;
  }

  .pmo-card-inactive.visible {
    opacity: 0.45;
  }

  /* ── Card interior ── */
  .pmo-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.25rem;
  }

  .pmo-card-meta-left {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .pmo-card-num {
    font-family: 'Playfair Display', serif;
    font-size: clamp(0.75rem, 2vw, 0.85rem);
    font-weight: 900;
    color: #bbb8b0;
    letter-spacing: 0.05em;
  }

  .pmo-card-phase {
    font-size: clamp(0.65rem, 1.8vw, 0.7rem);
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #aaa;
    font-family: 'Crimson Pro', serif;
  }

  .pmo-status {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: clamp(0.65rem, 1.8vw, 0.7rem);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-family: 'Crimson Pro', serif;
    padding: 3px 9px 3px 6px;
    border-radius: 20px;
    background: var(--status-bg);
    color: var(--status-color);
    flex-shrink: 0;
  }

  .pmo-status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--card-dot);
    flex-shrink: 0;
  }

  .pmo-card-kicker {
    font-size: clamp(0.65rem, 1.8vw, 0.72rem);
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #aaa;
    font-family: 'Crimson Pro', serif;
  }

  .pmo-card-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.45rem, 5vw, 2rem);
    font-weight: 700;
    line-height: 1.15;
    color: #18170f;
  }

  .pmo-card-desc {
    font-size: clamp(1rem, 3vw, 1.2rem);
    line-height: 1.65;
    color: #666;
    font-style: italic;
    margin-top: 0.1rem;
  }

  .pmo-card-arrow {
    display: inline-block;
    margin-top: 0.6rem;
    font-size: clamp(0.8rem, 2vw, 0.9rem);
    color: #bbb;
    letter-spacing: 0.15em;
    font-family: 'Crimson Pro', serif;
    text-transform: uppercase;
    transition: color 0.2s, letter-spacing 0.2s;
  }

  .pmo-card-active:hover .pmo-card-arrow {
    color: #18170f;
    letter-spacing: 0.25em;
  }

  /* ── Footer ── */
  .pmo-footer {
    text-align: center;
    padding: 1.5rem;
    font-size: 0.7rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #bbb;
    border-top: 0.5px solid #ccc8bc;
    font-family: 'Crimson Pro', serif;
  }

  /* ── Responsive ── */
  @media (max-width: 600px) {
    .pmo-statsbar { flex-wrap: wrap; }
    .pmo-stat { flex: 1 1 33%; border-bottom: 1px solid rgba(245,242,236,0.08); }
    .pmo-section-desc { display: none; }
    .pmo-body { padding: 2rem 1rem 5rem; }
  }
`;

// ─── Card component ────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const sc = statusConfig[project.status];
  const isActive = project.status === "live";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 60);
          obs.unobserve(el);
        }
      },
      { threshold: 0.05 }
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

      {isActive && (
        <span className="pmo-card-arrow">View →</span>
      )}
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
    <div
      className={className}
      style={cardStyle}
      ref={ref as React.Ref<HTMLDivElement>}
    >
      {inner}
    </div>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────────


// ─── Main ──────────────────────────────────────────────────────────────────────

export default function LandingNav() {


  return (
    <>
      <style>{css}</style>
      <div className="pmo-root">

        {/* Masthead */}
        <header className="pmo-masthead">
          <div className="pmo-flag">The Arcadian Record</div>
          <div className="pmo-tagline">Project Overview · Code-L · All Worlds</div>
        </header>

     

        {/* Body */}
        <main className="pmo-body">

          {/* Section 1 */}
          <section className="pmo-section">
            <div className="pmo-section-head">
              <h2 className="pmo-section-title">Arcadian History</h2>
              <span className="pmo-section-desc">World-building · Lore · Canon</span>
            </div>
            <div className="pmo-list">
              {foundation.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} />
              ))}
            </div>
          </section>

          {/* Section 2 */}
          <section className="pmo-section">
            <div className="pmo-section-head">
              <h2 className="pmo-section-title">Experiences on Arcadia</h2>
              <span className="pmo-section-desc">Platforms · Games · Media · IRL</span>
            </div>
            <div className="pmo-list">
              {experiences.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i + foundation.length} />
              ))}
            </div>
          </section>

        </main>

        <footer className="pmo-footer">
          Elysian Code · All worlds connected · Arcadia Standard Time
        </footer>
      </div>
    </>
  );
}