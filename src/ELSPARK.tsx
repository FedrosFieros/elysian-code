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
      "Elcoins is the sole form of exchange on ELSPARK. Where people can trade services to each other, or trade digi-posts.",
    ],
  },
  {
    title: "DIGI-POSTS",
    phase: "elspark",
    text: [
      "Collectible, decentralised media with integrated comment section on its hardware.",
"Can only be accessed by those with a copy of it.",
"Arcadians can buy a copy of a digi-post by giving the original creator one elcoin and storing in their personal collection.",
"Then they can view on demand."     ,
    "If not digi-post can be lost in a sea of so many more.",
  "Collectors can also use copies of 3 digi-posts they purchased to create a digi-cura-post, worth 2 elcoins.",
"When someone buys this digi-cura-post, it gives 0.5 elcoins to the curator and each of the original creators.",
"creator retain ownership of their digi-posts."],
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
      "Elco, acting as the spirit of it all, interacts with residents — offers them guidance or connecting them with relevant humans for further assistance.",
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
    title: "DIGI-MARKET",
    phase: "elspark",
    text: [
      "DIGI-MARKET is the place for sellers to market private services they can offer, in exchange for elcoins.",
         "A digital marketplace for online sellers to offer a timed session, they can deliver digitally on the spot.",
         "Sellers can offer language coaching, life advice, consultations, or going on an adventure across Arcadia. - anything a seller offers, you can exchange for coins.",
         "Sellers can also offer products such as clothes, furniture and tools."

    ],
  },
  {
    title: "ATTRACTIONS",
    phase: "elspark",
    text: [
      "ELSPARK is composed of spaces.",
      "Each space serves a function.",
      "These attractions are built for Arcadians to express, create and connect.",
      
      "/// SPACES AVAILABLE ///",
      "SOCIAL LABYRINTH — Meet strangers instantly in a private room. Just the two of you.",
      "PERSONAL PARK — Subsidised, private and personally curated 3D space, home for the Arcadian.",
      "DIGI-MARKET — Exchange skills and timed sessions.",
      "Some spaces are system-built.",
      "Others will be user-created.",
      "The map is not fixed.",
    ],
  },
  {
    title: "ELSPARK Theatre",
    phase: "elspark",
    text: [
      "A stage for scheduled or improvised shows. Open 24/7.",
  
    ],
    image: "/ELSPARKTV.png",
  },
  {
    title: "ELSPARK TV",
    phase: "elspark",
    text: [    "When the lights dim and curtains open, however can reveals a screen.",
      "The screen is ELSPARK TV, a digital platform of original content made by ELTV and performed by humans on Earth. Whether pre-recorded digital shows or live performances.",
  ,
    ],
    image: "/ELSPARKTheatre.png",
  },


  {
    title: "What happens after? Phase 3",
    phase: "elspark",
    text: [
      "Arcadia continues being accessible as a 3D world, and ELSPARK welcomes new audiences away from Ahriman's collonized land.",
      "New accounts always start in the cave, but ones who create an account on ELSPARK can always spawn from there.", 
   " Other Arcadians are free to set up their own rules in lands across Arcadia too, following the physics provided.  .",
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
    glow: "rgba(223, 223, 223, 0.16)",
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
         ELSPARK CODE
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
              {section.image ? (
  <img
    src={section.image}
    alt={section.title}
    className="ec-image"
  />
) : null}
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