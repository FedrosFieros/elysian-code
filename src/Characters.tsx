import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./el.css"; // Your shared CSS file

const sections = [
  {
    title: "Elco",
    phase: "arcadia",
    text: [
      "▮ Myth Capturer",
      "First there was nothing, then information began.",
      "Every action and interaction, is recorded by Elco on her data files.",

      "Arcadia is not a static game world.",
      "It is a living system of consequence.",
      "You do not observe it.",
      "You enter it and Elco records it",
      "A neutral entity, solely recording and listening.",
      "Holds matrix coordinates for reality not to collapse and is the infrastructure for every character to connect."
    ],
  },
  {
    title: "Long-haired Goddess of Creation",
    phase: "arcadia",
    text: [
      "For creation to begin and continue, this long-haired goddess orchestrated it first.",
      "However, she has been trapped by Ahriman and replaced by shiva the Goddess of Destruction, who presents herself as Goddess of Creation.",
      "Her body remains captive in a hidden cave after she dies on the cross. ",
   
    ],
  },
  {
    title: "Shiva - Goddess of Destruction",
    phase: "arcadia",
    text: [
      "An entity recruited by Ahriman to gain unregulated control over Arcadia.",
   "Promotes destruction, ignites conflict amongst people and demolishes systems till they are worthless, for Ahriman to capture them."   ],
  },
  {
    title: "Lady Dopamina",
    phase: "arcadia",
    text: [
      "All Arcadians begin inside The Cave.",
      "A closed system where they are meant to be born and then explore the rest of the planet ",
      "Ahriman however, took over these caves to trap people, hypnotising them to then feed them to his wolves.",
      " Lady Dopamina, acting as puppeteer keeps the prisoners engaged and enticed. ",
   "Disguised as a dopamine centre with her being a bourlesque performer, keeping everyone entertained, Arcadians dont realise they are trapped."  ],
  },
  {
    title: "Ahriman",
    phase: "arcadia",
    text: [
      "Greedy entity, who wants to gain power over God and take control of the whole planet.",
      "His plans with the caves worked and now plans to expand across the rest of the planet.",

    ],
  },

  {
    title: "Altruisma",
    phase: "arcadia",
    text: [
      "An entity inviting characters to perform for the betterment of society not just themselves.",
    ],
  },
  {
    title: "Ego - Ellys",
    phase: "arcadia",
    text: [
      "Creator of ELSPARK and breaker of the cave, Ellys invites participants to take owenership of their lives becoming monarchs of their own body..",
"Promotes laocracy - power to the people, through new governing systems in decentralised lands."    ],
  },
  {
    title: "conscious entropy",
    phase: "arcadia",
    text: [
      "The intrinsic nature to create for the sake of exploration,not for a monetary goal.",
    ]
  },
  {
    title: "nothingness",
    phase: "arcadia",
    text: [
      "Promotes emptiness, ultimate alignment and buddhism",
    
    ],
  },
  {
    title: "Elpida",
    phase: "arcadia",
    text: [
      "Means hope in Greek and is a genie who grants wishes under certain conditions are met..",

    ],
  },
  
];
const phaseColors = {
  arcadia: { accent: "#fa9aaf", glow: "rgba(255,159,255,0.16)" },
};

export default function Characters() {
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
       
                <Link to="/codeLphase1" className="codeL ec-btn ">
                 <h1 className="codeLarcadia-signal"> Code-L: Phase 1</h1>
                </Link>
     
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

              <div className="ec-text-block ">
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
                <Link to="/codeLphase1" className="codeL ec-btn ">
                 <h1 className="codeLarcadia-signal"> Code-L: Phase 1</h1>
                </Link>
              )}
                <li className="signal-break  ">/// SIGNAL STABLE ///</li>

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
