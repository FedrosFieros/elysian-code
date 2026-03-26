import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./el.css"; // Your shared CSS file

const sections = [
  {
    title: "ARCADIA",
    phase: "arcadia",
    text: [
      "▮ PLANETARY SIGNAL DETECTED",
      "A 3D digital planet. Alive through code.",
      "Meta-mythos Code-L is unfolding.",
      "You are not watching it.",
      "You are inside it.",
    ],
  },
  {
    title: "CORE MECHANICS",
    phase: "arcadia",
    text: [
      "One planet. Open movement.",
      "Shape your own path. Form your own story.",
      "Events unfold in real time.",
      "Miss them, and they are gone.",
    ],
  },
  {
    title: "ELSPARK",
    phase: "arcadia",
    text: [
      "The planet of Arcadia runs differently.",
      "Ahriman (an algorithm) has taken over a lot of the land across the planet, but ELSPARK exists as an ecosystem outside of his control.",
      "On ELSPARK, no algorithms decide what you see. No ads interrupt your experience.",
      "No subscriptions gate your access.",
      "Presence replaces manipulation.",
      "And soon ELSPARK will help people take back power and claim Arcadia back.",
    ],
  },
  {
    title: "Rest of the land",
    phase: "arcadia",
    text: [
      "ARCADIA IS FINITE",
      "Land outside ELSPARK is unclaimed.",
      "It is ready to be populated.",
      "ElCode takes it back from Ahriman and helps individuals build exhibitions, launch businesses or form new societies.",
      "Claim space. Define reality.",
      "ElCode assists in constructing your world.",
      "No purchase required.",
      "Each user receives credits to claim cm² of land.",
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
