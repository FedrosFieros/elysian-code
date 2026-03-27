import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./el.css"; // Your shared CSS file

const sections = [
  {
    title: "ARCADIA",
    phase: "arcadia",
    text: [
      "▮ PLANETARY SYSTEM INITIALISED",
      "Arcadia is a persistent 3D simulated planet governed by deterministic physics and autonomous residents - the Arcadians.",
      "Every action, body and interaction they do is recorded into Code-L; a continuous causal myth of coordinates and narrative.",

      "This is not a static game world.",
      "It is a living system of consequence.",
      "You do not observe it.",
      "You enter it.",
    ],
  },
  {
    title: "Arcadians",
    phase: "arcadia",
    text: [
      "Arcadians exist solely on the 3D planet of Arcadia. ",
      "They are vehicles for conscious players (humans) to intervene, and drive them .",
      "Their body remains in Arcadia at all times.",
      "Their intependent and persistent bodies are constantly updating the mythos of Code-L.",
     
      "When the conscious player disconnects, the Arcadian stays behind. Static.",
      "The motionless body can be kidnapped, harmed or killed if their blood is out.",
      "When conscious player returns, they resume from the Arcadian's last known state, or if dead as a new character",
      "Code-L continues — with or without you. But it remembers you.",
    ],
  },
  {
    title: "The Cave",
    phase: "arcadia",
    text: [
      "All players begin inside The Cave.",
      "A closed system designed to contain and distract.",
      "Ahriman designed these caves to trap people, hypnotising them to then feed them to his wolves.",
      " Lady Dopamina, acting as puppeteer kept the prisoners engaged and enticed. ",
      "For a player to escape, they need to find a hidden key.",
      "A hidden key unlocks the gate away from cave to outside world.",
      "If players find it, they can exit.",
      "But when they exit, the guard will stop them and ask for a bribe of €20.If player refuses, guard will fight him to death. .",
    
      "Most dont make it. But few step out.",
    ],
  },
  {
    title: "Survival",
    phase: "arcadia",
    text: [
      "Bodies in Arcadia breathe in heart beats which requires blood to keep runing. Blood count can increase when you hug someone however stabs can make you lose blood.",
      "Players start with blood count 100 and can move their bodies to make dance moves, but if directed at a person, it stabs them, causing to lose blood.",
      "If conflict is real. So is consequence.",
      "If your body is destroyed, it is lost.",
      "You may return, but not as the same identity.",
      "Account is reset.",
      "Everything is remembered in Code-L, but you are a new person.",
    ],
  },
  {
    title: "ELSPARK",
    phase: "arcadia",
    text: [
      "ELSPARK is a protected subspace within Arcadia.",
      "A refuge outside the open system.",
      "A park where all residents can gain continuity and shelter when the conscious player exits the Arcadian.",
      "Players signed up under ELSPARK can respawn if killed.",
      "They persist.",
      "They also stay sheltered when consciousness disconnects. In a safe space so none can harm their body.",
    ],
  },
  {
    title: "Land & Creation",
    phase: "arcadia",
    text: [
      "Arcadia is finite.",
      "All land is owned by Ahriman, but if you just kill the scarecrows he sends to you (because he thinks he owns the land) you will be safe.",
      "Unclaimed regions are open for expansion.",
      "Players can claim, shape and define territory.",
      "Structures, systems and spaces can be built.",
      "ElCode can help with the construction across the planet.",
    ],
  },
  {
    title: "Governance",
    phase: "arcadia",
    text: [
      "Arcadia has no central authority.",
      "Order emerges from player interaction.",
      "Territories form. Alliances emerge.",
      "Control is earned, not assigned.",
      "ELSPARK operates as an independent sovereign zone.",
      "Other regions may fall under different rule.",
    ],
  },
  {
    title: "Phase 1",
    phase: "arcadia",
    text: [
      "Click for the first chapter of Arcadia.",
      ".",
    ],
    subheading: true,
  },
];
const phaseColors = {
  arcadia: { accent: "#fa9aaf", glow: "rgba(255,159,255,0.16)" },
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
  .ec-phase-tag.arcadia { 
    font-size: 0.55rem; 
    letter-spacing: 0.5em; 
  }
  .ec-phase-tag.huge {
    font-size: 1.2rem !important;
    letter-spacing: 0.8em;
  }
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
    font-size: 2.5rem; /* Base large size */
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: var(--accent);
    opacity: 0.6;
    margin: 2rem 0;
    text-align: center;
    line-height: 1;
    font-weight: 300;
  }
  .ec-text-block .signal-break.huge {
    font-size: 4rem !important; /* Massive override */
    letter-spacing: 1em;
    margin: 3rem 0;
    opacity: 0.8;
  }
  li.signal-break {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
  }
.ec-subheading-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  font-family: 'Cinzel', serif;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #000;
  background: var(--accent);
  text-decoration: none;
  padding: 0.65em 1.4em;
  margin-bottom: 1.5rem;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);
  transition: opacity 0.2s ease, gap 0.2s ease;
  font-weight: 600;
}

.ec-subheading-link::after {
  content: '→';
  transition: transform 0.2s ease;
}

.ec-subheading-link:hover {
  opacity: 0.85;
  gap: 1em;
}

.ec-subheading-link:hover::after {
  transform: translateX(4px);
}
  @media (max-width: 768px) {
    .ec-text-block p.arcadia-signal { font-size: 0.7rem; }
    .ec-text-block .signal-break { font-size: 1.75rem; }
    .ec-text-block .signal-break.huge { font-size: 2.5rem !important; }
    .ec-phase-tag.huge { font-size: 0.9rem !important; }
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
          <Link to="/" className="ec-logo">ARCADIA</Link>
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

            {/* Mobile toggle - ADD THIS BACK */}
  <button 
    className="ec-toggle" 
    onClick={() => setNavOpen(o => !o)}
    style={{zIndex: 100}}  // ensures it's clickable
  >
    ☰
  </button>
 {/* Background Video */}
 <video
          className="ec-bg-video"
          autoPlay
          loop
          muted
          playsInline
          src="/caveDraft.mp4" // ← swap this path
        />
          {/* Screen */}
          <div className="ec-screen">
            

            <div className="ec-content">
              
              <p className="ec-phase-tag arcadia huge">Code-L · ARCADIA</p>

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
              
              {section.subheading && (
                <Link to="/codeLphase1" className="signal-break huge">
                 <h1 className="codeLarcadia-signal"> Code-L: Phase 1</h1>
                </Link>
              )}
                <li className="signal-break huge ">/// SIGNAL STABLE ///</li>

                <div className="ec-btn-group ">
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
          </div>
        </div>
      </div>
    </>
  );
}
