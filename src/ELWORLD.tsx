import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./el.css"; // Your shared CSS file

const sections = [
    {
      title: "ARCADIA",
      phase: "arcadia",
      text: [
        "▮ PLANETARY SYSTEM INITIALISED",
        "Arcadia is a persistent 3D simulated planet governed by deterministic physics.",
        "Every action, body and interaction is recorded into Code-L — a continuous causal ledger.",
        "This is not a static game world.",
        "It is a living system of consequence.",
        "You do not observe it.",
        "You enter it.",
      ],
    },
    {
      title: "EXISTENCE",
      phase: "arcadia",
      text: [
        "You are not your character.",
        "You are the consciousness controlling a persistent body.",
        "Your body remains in Arcadia at all times.",
        "When you leave, it stays behind.",
        "It can be moved. Harmed. Destroyed.",
        "When you return, you resume from its last known state.",
        "Code-L continues — with or without you.",
      ],
    },
    {
      title: "THE CAVE",
      phase: "arcadia",
      text: [
        "All players begin inside The Cave.",
        "A closed system designed to contain and distract.",
        "You can explore but not exit freely.",
        "Escape requires discovery.",
        "Or acceleration.",
        "A hidden key unlocks the outside world.",
        "If players find it, they can exit, but only if they bribe the guard £20.",
        "Most remain. Few step out.",
      ],
    },
    {
      title: "SURVIVAL",
      phase: "arcadia",
      text: [
        "Bodies in Arcadia are finite.",
        "Damage accumulates. Vitality depletes.",
        "Conflict is real. So is consequence.",
        "If your body is destroyed, it is lost.",
        "You may return — but not as the same identity.",
        "Nothing is reset.",
        "Everything is remembered in Code-L.",
      ],
    },
    {
      title: "ELSPARK",
      phase: "arcadia",
      text: [
        "ELSPARK is a protected subspace within Arcadia.",
        "A refuge outside the open system.",
        "Bodies stored here cannot be harmed.",
        "Players bound to ELSPARK retain continuity after death.",
        "They respawn. They persist.",
        "It is not just safety.",
        "It is sovereignty over your existence.",
      ],
    },
    {
      title: "LAND & CREATION",
      phase: "arcadia",
      text: [
        "Arcadia is finite.",
        "All land exists within fixed planetary limits.",
        "Unclaimed regions are open for expansion.",
        "Players can claim, shape and define territory.",
        "Structures, systems and spaces can be built.",
        "ElCode enables construction across the planet.",
     
      ],
    },
    {
      title: "GOVERNANCE",
      phase: "arcadia",
      text: [
        "Arcadia has no central authority.",
        "Order emerges from player interaction.",
        "Territories form. Alliances emerge.",
        "Control is earned, not assigned.",
        "ELSPARK operates as an independent sovereign zone.",
        "Other regions may fall under different rule.",
        "Power is not given.",
        "It is taken, built, or negotiated.",
      ],
    },
    {
      title: "JUNE 1ST",
      phase: "arcadia",
      text: [
        "A system-wide event.",
        "The Cave barrier breaks.",
        "All players gain access to the open world.",
        "A new phase of Arcadia begins.",
        "Early actors define the structure of power.",
        "Late actors enter a shaped world.",
        "This is the beginning of the living myth.",
      ],
    },
  ];
const phaseColors = {
  arcadia: { accent: "#ff9fff", glow: "rgba(255,159,255,0.16)" },
};

export default function Arcadia() {
  const [index, setIndex] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const section = sections[index];
  const { accent } = phaseColors.arcadia;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const handler = (e: MediaQueryListEvent) => {
        if (e.matches) setNavOpen(false);
      };
      
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const goTo = (i: number) => {
    setIndex(i);
    setNavOpen(false);
  };
  return (
    <>
      <style>{`
        .ec-phase-tag.arcadia { font-size: 0.55rem; letter-spacing: 0.5em; }
        .ec-text-block p:nth-child(1).arcadia-signal {
          font-family: 'Cinzel', serif;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-size: 0.75rem;
          opacity: 0.6;
        }
        .ec-text-block p.arcadia-emphasis {
          font-weight: 400;
          letter-spacing: 0.02em;
        }
        .ec-text-block .signal-break {
          font-family: 'Cinzel', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
          opacity: 0.5;
          margin: 1.5rem 0;
          text-align: center;
        }

        @media (max-width: 768px) {
          .ec-text-block p.arcadia-signal { font-size: 0.7rem; }
        }
      `}</style>

      <div
        className="ec-shell"
        style={
            {
              "--accent": accent,
              "--accent-rgb": accent
                .replace("#", "")
                .match(/.{2}/g)!
                .map((h: string) => parseInt(h, 16))
                .join(","),
            } as React.CSSProperties
          }
      >
        {/* Mobile overlay */}
        <div
          className={`ec-overlay ${navOpen ? "open" : ""}`}
          onClick={() => setNavOpen(false)}
        />

        {/* Sidebar */}
        <nav className={`ec-sidebar ${navOpen ? "open" : ""}`}>
          <Link to="/" className="ec-logo">
            Elysian Code
          </Link>
          <ul className="ec-nav-list">
            {sections.map((sec, i) => (
              <li key={i}>
                <button
                  className={`ec-nav-item ${i === index ? "active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  {sec.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Stage */}
        <div className="ec-stage">
          <div className="ec-spotlight" />

          {/* Mobile toggle */}
          <button className="ec-toggle" onClick={() => setNavOpen(true)}>
            ☰
          </button>

          {/* Screen */}
          <div className="ec-screen">
            <div className="ec-content">
              <p className="ec-phase-tag arcadia">
                Code-L · ARCADIA
              </p>

              <h1 className="ec-title">{section.title}</h1>
              <div className="ec-rule" />

              <div className="ec-text-block">
                {section.text.map((line, i) => (
                  <p
                    key={i}
                    className={`${
                      i === 0 && section.title === "ARCADIA"
                        ? "arcadia-signal"
                        : ""
                    } ${
                      line.includes("You are inside it.")
                        ? "arcadia-emphasis"
                        : ""
                    }`}
                  >
                    {line}
                  </p>
                ))}
                <div className="signal-break">/// SIGNAL STABLE ///</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="ec-controls">
            <div className="ec-progress">
              {sections.map((_, i) => (
                <div
                  key={i}
                  className={`ec-pip ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <div className="ec-btn-group">
              <button
                className="ec-btn"
                onClick={() => setIndex(Math.max(0, index - 1))}
                disabled={index === 0}
              >
                ← Back
              </button>
              <button
                className="ec-btn ec-btn-next"
                onClick={() =>
                  setIndex(Math.min(sections.length - 1, index + 1))
                }
                disabled={index === sections.length - 1}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
