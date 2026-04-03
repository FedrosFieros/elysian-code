import { Link } from "react-router-dom";
import { useState, useRef } from "react";

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
  @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=IM+Fell+English:ital@0;1&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .arc-paper {
    background: #fff;
    font-family: 'IM Fell English', Georgia, serif;
    color: #1a1a1a;
    min-height: 100vh;
    width: 100%;
  }

  .arc-inner {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    border-left: 0.5px solid #ddd;
    border-right: 0.5px solid #ddd;
    min-height: 100vh;
  }

  .arc-masthead {
    text-align: center;
    border-bottom: 3px double #1a1a1a;
    padding-bottom: 0.75rem;
    margin-bottom: 0.4rem;
  }

  .arc-flag {
    font-family: 'UnifrakturMaguntia', cursive;
    font-size: clamp(2.4rem, 7vw, 4.8rem);
    line-height: 1;
    color: #1a1a1a;
  }

  .arc-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    color: #666;
    padding: 0.35rem 0;
    border-top: 0.5px solid #ccc;
    border-bottom: 0.5px solid #ccc;
    margin: 0.4rem 0 0.75rem;
    font-family: Georgia, serif;
    letter-spacing: 0.05em;
  }

  .arc-section-rule {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 1.5rem 0 1rem;
  }

  .arc-section-rule span {
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #888;
    white-space: nowrap;
  }

  .arc-section-rule::before,
  .arc-section-rule::after {
    content: '';
    flex: 1;
    height: 0.5px;
    background: #bbb;
  }

  /* Nav pills */
  .arc-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 0.5px solid #e0e0e0;
  }

  .arc-nav-btn {
    font-family: Georgia, serif;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 4px 10px;
    border: 0.5px solid #ccc;
    border-radius: 2px;
    background: transparent;
    color: #666;
    cursor: pointer;
    transition: all 0.18s ease;
  }

  .arc-nav-btn:hover {
    border-color: #1a1a1a;
    color: #1a1a1a;
  }

  .arc-nav-btn.active {
    background: #1a1a1a;
    color: #fff;
    border-color: #1a1a1a;
  }

  /* Article display */
  .arc-article {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    animation: slideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes slideIn {
    from { transform: translateX(40px); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
  }

  .arc-numeral {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    font-weight: 900;
    color: #e0e0e0;
    line-height: 1;
    min-width: 3rem;
    text-align: right;
    user-select: none;
    flex-shrink: 0;
    padding-top: 0.2rem;
  }

  .arc-vline {
    width: 0.5px;
    background: #e0e0e0;
    align-self: stretch;
    flex-shrink: 0;
  }

  .arc-body {
    flex: 1;
    min-width: 0;
  }

  .arc-back {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: Georgia, serif;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #888;
    text-decoration: none;
    margin-bottom: 1.25rem;
    transition: color 0.18s ease;
  }
  .arc-back:hover { color: #1a1a1a; }

  .arc-kicker {
    font-size: 12px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #888;
    font-family: Georgia, serif;
    margin-bottom: 0.5rem;
  }

  .arc-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 5vw, 2.6rem);
    font-weight: 900;
    line-height: 1.15;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }

  .arc-rule {
    width: 48px;
    height: 1px;
    background: #1a1a1a;
    margin-bottom: 1.25rem;
  }

  .arc-body-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .arc-body-text p {
    font-size: clamp(23px, 2.2vw, 18px);
    line-height: 1.85;
    color: #333;
    font-style: italic;
    font-weight: 300;
  }

  .arc-body-text p:first-child {
    font-size: clamp(17px, 2.5vw, 19px);
    font-style: normal;
    font-weight: 400;
    color: #1a1a1a;
  }

  .arc-signal {
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #bbb;
    text-align: center;
    margin: 2rem 0;
    font-style: normal;
  }

  /* Navigation controls */
  .arc-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.5rem;
    padding-top: 1rem;
    border-top: 0.5px solid #e0e0e0;
  }

  .arc-ctrl-btn {
    font-family: Georgia, serif;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 8px 18px;
    border: 0.5px solid #ccc;
    border-radius: 2px;
    background: transparent;
    color: #666;
    cursor: pointer;
    transition: all 0.18s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .arc-ctrl-btn:hover:not(:disabled) {
    border-color: #1a1a1a;
    color: #1a1a1a;
  }

  .arc-ctrl-btn:disabled {
    opacity: 0.25;
    cursor: default;
  }

  .arc-ctrl-btn.primary {
    background: #1a1a1a;
    color: #fff;
    border-color: #1a1a1a;
  }

  .arc-ctrl-btn.primary:hover {
    background: #333;
  }

  .arc-pips {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .arc-pip {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 0.5px solid #bbb;
    background: transparent;
    cursor: pointer;
    transition: all 0.18s ease;
  }

  .arc-pip.active {
    background: #1a1a1a;
    border-color: #1a1a1a;
  }

  .arc-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 1.5rem;
    font-family: Georgia, serif;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #1a1a1a;
    text-decoration: none;
    padding: 10px 20px;
    border: 1px solid #1a1a1a;
    border-radius: 2px;
    transition: all 0.2s ease;
  }

  .arc-cta:hover {
    background: #1a1a1a;
    color: #fff;
  }

  .arc-footer-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    color: #aaa;
    padding: 0.35rem 0;
    border-top: 0.5px solid #e0e0e0;
    margin-top: 3rem;
    font-family: Georgia, serif;
    letter-spacing: 0.05em;
  }

  @media (max-width: 600px) {
    .arc-article { flex-direction: column; gap: 0.75rem; }
    .arc-numeral { font-size: 2.5rem; text-align: left; }
    .arc-vline { display: none; }
  }
`;
const toRoman = (n: number): string => {
  const map = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];
  return map[n] || String(n + 1);
};
export default function Arcadia() {
  const [index, setIndex] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const section = sections[index];
 
  const goTo = (i: number) => {
    setIndex(i);
    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  

  return (
    <>
      <style>{styles}</style>
      <div className="arc-paper">
        <div className="arc-inner">

          {/* Back to nav */}
          <Link to="/" className="arc-back">← Arcadian World</Link>

          {/* Masthead */}
          <div className="arc-masthead">
            <div className="arc-flag">The Arcadian Record</div>
          </div>
          <div className="arc-meta">
            <span>Code-L Dispatch · Chapter Archive</span>
            <span>Arcadia · World Documentation</span>
            <span>All Frames Recorded</span>
          </div>

          {/* Section label */}
          <div className="arc-section-rule">
            <span>Arcadia — World Guide</span>
          </div>

          {/* Chapter nav */}
          <nav className="arc-nav">
            {sections.map((sec, i) => (
              <button
                key={i}
                className={`arc-nav-btn ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
              >
                {sec.title}
              </button>
            ))}
          </nav>

          {/* Article */}
          <div className="arc-article" key={index} ref={bodyRef}>
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

              {/* Controls */}
              <div className="arc-controls">
                <button
                  className="arc-ctrl-btn"
                  onClick={() => goTo(Math.max(0, index - 1))}
                  disabled={index === 0}
                >
                  ← Previous
                </button>

                <div className="arc-pips">
                  {sections.map((_, i) => (
                    <div
                      key={i}
                      className={`arc-pip ${i === index ? "active" : ""}`}
                      onClick={() => goTo(i)}
                    />
                  ))}
                </div>

                <button
                  className={`arc-ctrl-btn ${index < sections.length - 1 ? "primary" : ""}`}
                  onClick={() => goTo(Math.min(sections.length - 1, index + 1))}
                  disabled={index === sections.length - 1}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

          <div className="arc-footer-meta">
            <span>Elysian Code</span>
            <span>· · ·</span>
            <span>All worlds connected</span>
          </div>

        </div>
      </div>
    </>
  );
}