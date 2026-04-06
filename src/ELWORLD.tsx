import { Link } from "react-router-dom";
import { useMemo, useRef, useState } from "react";

const sections = [
  {
    title: "ARCADIA",
    kicker: "Planetary System · Initialised",
    text: [
      "Arcadia is a persistent 3D simulated planet governed by deterministic physics and autonomous residents — the Arcadians.",
      "Every action, body and interaction they do is recorded into Code-L; a continuous causal myth of coordinates and narrative.",
      "This is not a static game world. It is a living system of consequence.",
      "You do not observe it. You enter it.",
    ],
  },
  {
    title: "Arcadians",
    kicker: "Residents · Consciousness Vehicles",
    text: [
      "Arcadians exist solely on the 3D planet of Arcadia. They are vehicles for conscious players to intervene, and drive them.",
      "Their body remains in Arcadia at all times. Their independent and persistent bodies are constantly updating the mythos of Code-L.",
      "When the conscious player disconnects, the Arcadian stays behind. Static.",
      "The motionless body can be kidnapped, harmed or killed if they run out of heart blood.",
      "When the conscious player returns, they resume from their Arcadian's last known state — or if dead, as a new character.",
      "They always spawn inside The Cave.",
    ],
  },
  {
    title: "The Cave",
    kicker: "Ahriman's Domain · Containment System",
    text: [
      "All Arcadians begin inside The Cave. A closed system designed to contain and distract.",
      "Ahriman designed these caves to trap people, hypnotising them to then feed them to his wolves.",
      "Lady Dopamina, acting as puppeteer, keeps the prisoners engaged and enticed.",
      "For an Arcadian to escape, they need to find a hidden key. A hidden key unlocks the gate away from the cave to the outside world.",
      "However, when they exit, the guard called Conforma will stop them and ask for a bribe of €20. If the player refuses, Conforma will fight him to death. She is a good fighter.",
      "Most don't make it. But few step out.",
      "Ones who do can explore Arcadia — build things and follow their own rules, given the physics they have available.",
      "When consciousness exits, bodies are left static. Exposed to scarecrows sent by Ahriman who eat them.",
      "When the Arcadian of a signed-up consciousness dies, the player respawns as a new Arcadian.",
    ],
  },
  {
    title: "Survival",
    kicker: "Mechanics · Blood & Consequence",
    text: [
      "Bodies in Arcadia breathe in heartbeats, which requires blood to keep running. Blood count can increase when you hug someone — however stabs can make you lose blood.",
      "Players start with a blood count of 100 and can move their bodies to make dance moves. But if directed at a person, it stabs them, causing blood loss.",
      "If conflict is real. So is consequence.",
      "If your body is destroyed, it is lost. You may return, but not as the same identity.",
      "Account is reset. Everything is remembered in Code-L, but you are a new Arcadian.",
    ],
  },
  {
    title: "ELSPARK",
    kicker: "Protected Subspace · Refuge",
    text: [
      "ELSPARK is a protected subspace within Arcadia. A refuge outside the open system.",
      "A park where all residents can gain continuity and shelter when the conscious player exits their Arcadian.",
      "ELSPARK offers direct access for consciousness to engage with an Arcadian for the long-term.",
      "Engage in a society of open-minded people, looking to build a new Arcadia and take it back from Ahriman.",
      "Running on LAOCRACY, it is an infrastructure to offer power to every person — who can create and become part of its economic distribution structure.",
    ],
  },
  {
    title: "Land & Creation",
    kicker: "Territory · Expansion",
    text: [
      "Arcadia is finite. Majority of the land is owned by Ahriman — but if Arcadians kill the scarecrows he sends, they can be safe.",
      "Unclaimed regions are open for expansion.",
      "Arcadians can claim, shape and define territory. Structures, systems and spaces can be built.",
      "ElCode offers help with the construction of the planet.",
    ],
  },
  {
    title: "Governance",
    kicker: "Authority · Emergent Order",
    text: [
      "Arcadia has no central authority. Order emerges from player interaction.",
      "Territories form. Alliances emerge. Control is earned, not assigned.",
      "ELSPARK operates as an independent sovereign zone.",
      "Other regions can create their own rules.",
    ],
  },
  {
    title: "Phase 1",
    kicker: "Code-L · First Chapter",
    text: [
      "The first chapter of Arcadia begins here.",
      "Enter the initial conditions. Witness the first events unfold.",
    ],
    isLast: true,
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #050505;
    --bg2: #09090b;
    --panel: rgba(255,255,255,0.05);
    --panel-2: rgba(255,255,255,0.08);
    --line: rgba(255,255,255,0.1);
    --text: #f5f5f5;
    --muted: rgba(245,245,245,0.72);
    --muted2: rgba(245,245,245,0.46);
    --accent: #8ce0ff;
    --warm: #f0d7a1;
  }

  body {
    background:
      radial-gradient(circle at 50% 0%, rgba(140,224,255,0.14), transparent 22%),
      radial-gradient(circle at 18% 14%, rgba(240,215,161,0.08), transparent 18%),
      linear-gradient(180deg, var(--bg), var(--bg2));
    color: var(--text);
    font-family: Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif;
  }

  .arc-paper {
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .arc-paper::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.42) 100%),
      linear-gradient(to bottom, rgba(255,255,255,0.03), transparent 18%, transparent 82%, rgba(255,255,255,0.02));
    z-index: 0;
  }

  .arc-inner {
    position: relative;
    z-index: 1;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1.25rem 4rem;
  }

  .arc-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2.2rem;
  }

  .arc-back {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    text-decoration: none;
    color: rgba(245,245,245,0.7);
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    transition: color 0.2s ease, transform 0.2s ease;
  }

  .arc-back:hover {
    color: #fff;
    transform: translateX(-2px);
  }

  .arc-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.55rem 0.8rem;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: rgba(255,255,255,0.03);
    color: var(--muted);
    font-size: 0.7rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    backdrop-filter: blur(16px);
  }

  .arc-chip-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 18px rgba(140,224,255,0.8);
  }

  .arc-hero {
    min-height: 10vh;
    display: grid;
    place-items: center;
    text-align: center;
    padding: 2rem 0 3rem;
  }

  .arc-flag {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(2.8rem, 8vw, 6rem);
    line-height: 0.95;
    letter-spacing: -0.04em;
    font-weight: 700;
    text-wrap: balance;
    text-shadow: 0 0 24px rgba(255,255,255,0.05);
  }

  .arc-hero-sub {
    max-width: 62ch;
    margin: 1.1rem auto 0;
    color: var(--muted);
    font-size: clamp(1rem, 2vw, 1.15rem);
    line-height: 1.65;
  }

  .arc-meta {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: rgba(255,255,255,0.02);
    backdrop-filter: blur(16px);
  }

  .arc-meta-item {
    padding: 1rem;
    text-align: center;
    border-right: 1px solid var(--line);
  }

  .arc-meta-item:last-child { border-right: none; }

  .arc-meta-num {
    display: block;
    font-family: "Playfair Display", serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text);
    line-height: 1;
  }

  .arc-meta-label {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--muted2);
  }

  .arc-layout {
    display: grid;
    grid-template-columns: 240px minmax(0, 1fr);
    gap: 1.25rem;
    margin-top: 3rem;
    align-items: start;
  }

  .arc-nav {
    position: sticky;
    top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    padding: 1rem;
    border: 1px solid var(--line);
    border-radius: 24px;
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(18px);
  }

  .arc-nav-label {
    font-size: 0.68rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--muted2);
    margin-bottom: 0.35rem;
  }

  .arc-nav-btn {
    font-family: Inter, sans-serif;
    font-size: 0.82rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.85rem 0.9rem;
    border: 1px solid transparent;
    border-radius: 14px;
    background: transparent;
    color: rgba(245,245,245,0.68);
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .arc-nav-btn:hover {
    background: rgba(255,255,255,0.05);
    color: #fff;
  }

  .arc-nav-btn.active {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.1);
    color: #fff;
  }

  .arc-stage {
    border: 1px solid var(--line);
    border-radius: 28px;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
    backdrop-filter: blur(22px);
    box-shadow:
      0 30px 80px rgba(0,0,0,0.35),
      inset 0 1px 0 rgba(255,255,255,0.06);
    padding: 1.5rem;
    overflow: hidden;
  }

  .arc-article {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
    animation: slideIn 0.45s cubic-bezier(0.25,0.46,0.45,0.94) both;
  }

  @keyframes slideIn {
    from { transform: translateX(24px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  .arc-numeral {
    font-family: "Playfair Display", serif;
    font-size: clamp(2.4rem, 5vw, 4.8rem);
    font-weight: 700;
    color: rgba(245,245,245,0.18);
    line-height: 1;
    min-width: 3.25rem;
    text-align: right;
    flex-shrink: 0;
    user-select: none;
    padding-top: 0.1rem;
  }

  .arc-vline {
    width: 1px;
    background: var(--line);
    align-self: stretch;
    flex-shrink: 0;
  }

  .arc-body {
    flex: 1;
    min-width: 0;
  }

  .arc-kicker {
    font-size: 0.72rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.52);
    margin-bottom: 0.7rem;
  }

  .arc-headline {
    font-family: "Playfair Display", serif;
    font-size: clamp(1.8rem, 4.8vw, 3rem);
    line-height: 1.08;
    letter-spacing: -0.03em;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #fff;
    max-width: 14ch;
  }

  .arc-rule {
    width: 64px;
    height: 1px;
    background: linear-gradient(90deg, rgba(255,255,255,0.9), transparent);
    margin-bottom: 1.2rem;
  }

  .arc-body-text {
    display: flex;
    flex-direction: column;
    gap: 0.95rem;
    max-width: 72ch;
  }

  .arc-body-text p {
    font-size: clamp(1rem, 2vw, 1.08rem);
    line-height: 1.8;
    color: var(--muted);
  }

  .arc-body-text p:first-child {
    color: rgba(245,245,245,0.92);
    font-size: clamp(1.03rem, 2vw, 1.12rem);
  }

  .arc-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    padding: 0.95rem 1.25rem;
    border-radius: 999px;
    border: 1px solid rgba(140,224,255,0.25);
    background: rgba(140,224,255,0.08);
    color: #fff;
    text-decoration: none;
    font-size: 0.74rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  }

  .arc-cta:hover {
    transform: translateY(-1px);
    background: rgba(140,224,255,0.12);
    border-color: rgba(140,224,255,0.4);
  }

  .arc-signal {
    margin-top: 1.5rem;
    font-size: 0.68rem;
    letter-spacing: 0.34em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.38);
  }

  .arc-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.4rem;
    padding-top: 1.2rem;
    border-top: 1px solid var(--line);
  }

  .arc-ctrl-btn {
    font-family: Inter, sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 0.8rem 1rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: transparent;
    color: rgba(245,245,245,0.72);
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .arc-ctrl-btn:hover:not(:disabled) {
    color: #fff;
    border-color: rgba(140,224,255,0.25);
    background: rgba(255,255,255,0.04);
  }

  .arc-ctrl-btn:disabled {
    opacity: 0.28;
    cursor: default;
  }

  .arc-ctrl-btn.primary {
    background: rgba(255,255,255,0.08);
    color: #fff;
  }

  .arc-pips {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .arc-pip {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid rgba(245,245,245,0.35);
    background: transparent;
    cursor: pointer;
    transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease;
  }

  .arc-pip.active {
    background: #fff;
    border-color: #fff;
    transform: scale(1.08);
  }

  .arc-footer-meta {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.34);
    padding-top: 1.4rem;
    margin-top: 2rem;
    border-top: 1px solid var(--line);
  }

  @media (max-width: 920px) {
    .arc-layout {
      grid-template-columns: 1fr;
    }

    .arc-nav {
      position: static;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .arc-nav-label {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    .arc-inner {
      padding: 1rem 0.9rem 3rem;
    }

    .arc-hero {
      min-height: 28vh;
      padding: 2rem 0 2.25rem;
    }

    .arc-meta {
      grid-template-columns: 1fr;
    }

    .arc-meta-item {
      border-right: none;
      border-bottom: 1px solid var(--line);
    }

    .arc-meta-item:last-child {
      border-bottom: none;
    }

    .arc-stage {
      padding: 1rem;
      border-radius: 22px;
    }

    .arc-article {
      flex-direction: column;
      gap: 0.8rem;
    }

    .arc-numeral {
      text-align: left;
      min-width: auto;
    }

    .arc-vline {
      display: none;
    }

    .arc-controls {
      flex-direction: column;
      align-items: stretch;
    }

    .arc-pips {
      order: -1;
    }

    .arc-footer-meta {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

const toRoman = (n: number): string => {
  const map = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return map[n] || String(n + 1);
};

export default function Arcadia() {
  const [index, setIndex] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const section = useMemo(() => sections[index], [index]);

  const goTo = (i: number) => {
    setIndex(i);
    window.setTimeout(() => {
      bodyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="arc-paper">
        <div className="arc-inner">
          <div className="arc-topbar">
            <Link to="/" className="arc-back">← Arcadian World</Link>
            <div className="arc-chip">
              <span className="arc-chip-dot" />
              Code-L Chapter One
            </div>
          </div>

          <header className="arc-hero">
            <div>
              <div className="arc-flag">The Arcadian Record</div>
           
            </div>
          </header>

          

          <div className="arc-layout">
            <nav className="arc-nav" aria-label="Chapter sections">
              <div className="arc-nav-label">Sections</div>
              {sections.map((sec, i) => (
                <button
                  key={i}
                  className={`arc-nav-btn ${i === index ? "active" : ""}`}
                  onClick={() => goTo(i)}
                  type="button"
                >
                  {sec.title}
                </button>
              ))}
            </nav>

            <main className="arc-stage">
              <article className="arc-article" key={index} ref={bodyRef}>
                <div className="arc-numeral">{toRoman(index)}</div>
                <div className="arc-vline" />
                <div className="arc-body">
                  <div className="arc-kicker">{section.kicker}</div>
                  <h1 className="arc-headline">{section.title}</h1>
                  <div className="arc-rule" />

                  <div className="arc-body-text">
                    {section.text.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>

                  {section.isLast && (
                    <Link to="/codeLphase1" className="arc-cta">
                      Enter Code-L: Phase 1 →
                    </Link>
                  )}

                  <p className="arc-signal">/// Signal Stable · Code-L Active ///</p>

                  <div className="arc-controls">
                    <button
                      className="arc-ctrl-btn"
                      onClick={() => goTo(Math.max(0, index - 1))}
                      disabled={index === 0}
                      type="button"
                    >
                      ← Previous
                    </button>

                    <div className="arc-pips" aria-label="Section dots">
                      {sections.map((_, i) => (
                        <button
                          key={i}
                          className={`arc-pip ${i === index ? "active" : ""}`}
                          onClick={() => goTo(i)}
                          type="button"
                          aria-label={`Go to section ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      className={`arc-ctrl-btn ${index < sections.length - 1 ? "primary" : ""}`}
                      onClick={() => goTo(Math.min(sections.length - 1, index + 1))}
                      disabled={index === sections.length - 1}
                      type="button"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </article>
            </main>
          </div>

          <div className="arc-footer-meta">
            <span>Elysian Code</span>
            <span>All worlds connected</span>
            <span>Arcadia Standard Time</span>
          </div>
        </div>
      </div>
    </>
  );
}