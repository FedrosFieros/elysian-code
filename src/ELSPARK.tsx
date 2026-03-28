import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./el.css";

const sections = [
  {
    title: "ELSPARK",
    phase: "elspark",
   text: [
      "▮ SOCIAL SIGNAL DETECTED",
      "A digital park.",
      "Built for human presence.",
      "No algorithms.",
      "No forced feeds.",
      "Visitors don’t just watch.",
      "They participate.",
      "Transparent Economic System with Laocratic Governance.",
    ],
  },
  {
    title: "CORE MECHANICS",
    phase: "elspark",
    text: [
      "One park. Open movement.",
      "Arrive alone. Leave connected.",
      "Conversations happen in real time.",
      "No censorship layers imposed.",
      "No algorithm decides visibility.",
    ],
  },
 
  {
    title: "ECONOMY",
    phase: "elspark",
    text: [
      "Value flows through elcoins.",
      "Trade your art.",
      "Offer your skill.",
      "Build your role.",
      "Earn. Keep. Or extract.",
      "Linked to real-world currency.",
      "/// ECONOMIC BLUEPRINT ///",
      "Finite tokens — 1,000,000 elcoins.",
      "One common bank reserve — OCBR.",
      "Residents earn daily elcoins for their work.",
      "Alternatively, users can buy elcoins at a fixed rate: 1 euro = 1 elcoin (funds go directly to OCBR).",
      "OCBR funds derive from two sources: 20% of ElCode profits, and users purchasing elcoins.",
      "Elcoin holders can cash out proportionally to euros in OCBR.",
      "Example: If OCBR holds €2,000,000, selling 2 elcoins returns (2 ÷ 1,000,000) × €2,000,000 = €2.",
      "The sold elcoins are removed from circulation and returned to the bank reserve.",
      "Users can also trade their digital creations or services with others in elcoins.",
    ],
  },
  {
    title: "LAOCRACY",
    phase: "elspark",
    text: [
      "ELSPARK is not governed from above.",
      "It is shaped by participants.",
      "Systems evolve collectively.",
      "Spaces define their own rules.",
      "Power is distributed.",
      "Influence is earned through presence.",
      "This is not democracy.",
      "This is laocracy.",
      "/// GOVERNANCE STRUCTURE ///",
      "Elco, an AI host, interacts with residents — offering guidance or connecting them with relevant humans for assistance.",
      "Each month, Elco organises open elections.",
      "Residents vote on updates such as: new features, UX design, attractions, or other community-driven changes.",
      "Collective voting results directly shape the park's evolution.",
    ],
  },
  {
    title: "ALTER EGOS",
    phase: "elspark",
    text: [
      "You do not enter as yourself.",
      "You construct an identity.",
      "A role. A presence.",
      "Some perform.",
      "Some build.",
      "Some observe.",
      "Your alter ego is your interface.",
    ],
  },
  {
    title: "ATTRACTIONS",
    phase: "elspark",
    text: [
      "ELSPARK is composed of spaces.",
      "Each space serves a function.",
      "Move freely between them.",
      "/// SPACES AVAILABLE ///",
      "SOCIAL LABYRINTH — Meet strangers instantly.",
      "PERSONAL PARK — Safe space for shelter away from Ahriman's scarecrows.",
      "NEWSPAPER — A real-time chronicle.",
      "DIGI-MARKET — Exchange skills and sessions.",
      "Some spaces are system-built.",
      "Others will be user-created.",
      "The map is not fixed.",
    ],
  },
  {
    title: "ELSPARK Theatre",
    phase: "elspark",
    text: [
      "As soon as they arrive at ELSPARK, they are immediately guided to ELSPARK Theatre where Ellys takes on the stage.",
      "When the lights dim and curtains open, he reveals a screen.",
    ],
    image: "/ELSPARKTheatre.png",
  },
  {
    title: "ELSPARK TV",
    phase: "elspark",
    text: [
      "The screen is ELSPARK TV, a digital platform of original content made by ELTV. Whether pre-recorded digital shows or live performances.",
      "The first broadcast will be our first edition of ELCA – a live theatrical performance we execute in physical space broadcasting onto the channel.",
    ],
    image: "/ELSPARKTV.png",
  },


  {
    title: "What happens after? Phase 3",
    phase: "elspark",
    text: [
      "Arcadia continues being accessible as a 3D world, and ELSPARK welcomes new audiences away from Ahriman's corrupted social media spaces.",
      "New accounts always start in the cave, but ones who create an account on ELSPARK can always spawn from there.", 
   " Other players can set up their own rules in lands across Arcadia too.  .",
    ],
  },
 
  {
    title: "ENTER",
    phase: "elspark",
    text: [
      "▮ ACCESS POINT AVAILABLE",
      "The social infrastructure of the park is ready.",
      "https://elspark.online",

      "The 3D world is still forming.",
      "/// END OF TRANSMISSION ///",
    ],
  },
];

const phaseColors = {
  elspark: {
    accent: "#00e0ff",
    glow: "rgba(0,224,255,0.16)",
  },
};

export default function ELSPARK() {
  const [index, setIndex] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  const section = sections[index];
  const { accent } = phaseColors.elspark;

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
        .ec-phase-tag.elspark {
          font-size: 0.55rem;
          letter-spacing: 0.5em;
        }

        .ec-text-block p.signal {
          font-family: 'Cinzel', serif;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-size: 0.75rem;
          opacity: 0.6;
        }

        .ec-text-block p.emphasis {
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

        .ec-link {
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid var(--accent);
        }

        @media (max-width: 768px) {
          .ec-text-block p.signal {
            font-size: 0.7rem;
          }
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
        {/* Overlay */}
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
              <p className="ec-phase-tag elspark">
                Code-L · ELSPARK
              </p>

              <h1 className="ec-title">{section.title}</h1>
              <div className="ec-rule" />

              <div className="ec-text-block">
                {section.text.map((line, i) => {
                  const isSignal = i === 0 && line.includes("▮");
                  const isBreak = line.includes("///");

                  const isEmphasis =
                    line.toLowerCase().includes("participate") ||
                    line.toLowerCase().includes("laocracy") ||
                    line.toLowerCase().includes("not democracy");

                  // clickable link
                  const isLink = line.includes("http");

                  if (isBreak) {
                    return (
                      <div key={i} className="signal-break">
                        {line}
                      </div>
                    );
                  }

                  if (isLink) {
                    return (
                      <p key={i}>
                        <a
                          href={line}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ec-link"
                        >
                          ENTER ELSPARK
                        </a>
                      </p>
                    );
                  }

                  return (
                    <p
                      key={i}
                      className={`
                        ${isSignal ? "signal" : ""}
                        ${isEmphasis ? "emphasis" : ""}
                      `}
                    >
                      {line}
                    </p>
                  );
                })}
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