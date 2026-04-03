import { Link } from "react-router-dom";
import { useState, useRef } from "react";

interface Character {
  title: string;
  role: string;
  kicker: string;
  text: string[];
  alignment: "creation" | "destruction" | "neutral" | "people";
}

const sections: Character[] = [
  {
    title: "Elco",
    role: "Myth Capturer",
    kicker: "Neutral \u00b7 Infrastructure",
    alignment: "neutral",
    text: [
      "First there was nothing, then information began. Every action and interaction is recorded by Elco on her data files.",
      "A neutral entity, solely recording and listening.",
      "Holds matrix coordinates for reality not to collapse and is the infrastructure for every character to connect.",
      "Arcadia is not a static game world. It is a living system of consequence. You do not observe it. You enter it \u2014 and Elco records it.",
    ],
  },
  {
    title: "Long-haired Goddess of Creation",
    role: "Origin Entity",
    kicker: "Creation \u00b7 Captive",
    alignment: "creation",
    text: [
      "For creation to begin and continue, this long-haired goddess orchestrated it first.",
      "She has been trapped by Ahriman and replaced by Shiva the Goddess of Destruction, who presents herself as Goddess of Creation.",
      "Her body remains captive in a hidden cave after she dies on the cross.",
    ],
  },
  {
    title: "Shiva",
    role: "Goddess of Destruction",
    kicker: "Destruction \u00b7 Agent of Ahriman",
    alignment: "destruction",
    text: [
      "An entity recruited by Ahriman to gain unregulated control over Arcadia.",
      "Promotes destruction, ignites conflict amongst people and demolishes systems till they are worthless, for Ahriman to capture them.",
    ],
  },
  {
    title: "Lady Dopamina",
    role: "Puppeteer of the Cave",
    kicker: "Destruction \u00b7 Captor",
    alignment: "destruction",
    text: [
      "All Arcadians begin inside The Cave \u2014 a closed system where they are meant to be born and then explore the rest of the planet.",
      "Ahriman took over these caves to trap people, hypnotising them to feed them to his wolves.",
      "Lady Dopamina acts as puppeteer, keeping prisoners engaged and enticed.",
      "Disguised as a dopamine centre with herself as a burlesque performer, Arcadians don\u2019t realise they are trapped.",
    ],
  },
  {
    title: "Ahriman",
    role: "The Coloniser",
    kicker: "Destruction \u00b7 Power",
    alignment: "destruction",
    text: [
      "Greedy entity who wants to gain power over God and take control of the whole planet.",
      "His plans with the caves worked and now he plans to expand across the rest of Arcadia.",
    ],
  },
  {
    title: "Altruisma",
    role: "Spirit of Collective Betterment",
    kicker: "Creation \u00b7 Society",
    alignment: "creation",
    text: [
      "An entity inviting characters to perform for the betterment of society, not just themselves.",
    ],
  },
  {
    title: "Ego \u2014 Ellys",
    role: "Creator of ELSPARK",
    kicker: "People \u00b7 Laocracy",
    alignment: "people",
    text: [
      "Creator of ELSPARK and breaker of the cave, Ellys invites participants to take ownership of their lives \u2014 becoming monarchs of their own body.",
      "Promotes laocracy: power to the people, through new governing systems in decentralised lands.",
    ],
  },
  {
    title: "Conscious Entropy",
    role: "The Creative Drive",
    kicker: "Neutral \u00b7 Exploration",
    alignment: "neutral",
    text: [
      "The intrinsic nature to create for the sake of exploration, not for a monetary goal.",
    ],
  },
  {
    title: "Nothingness",
    role: "The Void",
    kicker: "Neutral \u00b7 Buddhism",
    alignment: "neutral",
    text: [
      "Promotes emptiness, ultimate alignment and Buddhism.",
    ],
  },
  {
    title: "Elpida",
    role: "The Wish Granter",
    kicker: "Creation \u00b7 Hope",
    alignment: "creation",
    text: [
      "Means hope in Greek. A genie who grants wishes under certain conditions.",
    ],
  },
];

const alignmentStyles: Record<string, { dot: string; tag: string; label: string }> = {
  creation: { dot: "#2d6a3f", tag: "rgba(45,106,63,0.08)", label: "Creation" },
  destruction: { dot: "#8b1a1a", tag: "rgba(139,26,26,0.08)", label: "Destruction" },
  neutral: { dot: "#555", tag: "rgba(80,80,80,0.08)", label: "Neutral" },
  people: { dot: "#1a3a6b", tag: "rgba(26,58,107,0.08)", label: "People" },
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=IM+Fell+English:ital@0;1&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ch-paper {
    background: #fff;
    font-family: 'IM Fell English', Georgia, serif;
    color: #1a1a1a;
    min-height: 100vh;
    width: 100%;
  }

  .ch-inner {
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    border-left: 0.5px solid #ddd;
    border-right: 0.5px solid #ddd;
    min-height: 100vh;
  }

  .ch-back {
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
  .ch-back:hover { color: #1a1a1a; }

  .ch-masthead {
    text-align: center;
    border-bottom: 3px double #1a1a1a;
    padding-bottom: 0.75rem;
    margin-bottom: 0.4rem;
  }

  .ch-flag {
    font-family: 'UnifrakturMaguntia', cursive;
    font-size: clamp(2.4rem, 7vw, 4.8rem);
    line-height: 1;
    color: #1a1a1a;
  }

  .ch-meta {
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
    flex-wrap: wrap;
    gap: 4px;
  }

  .ch-section-rule {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 1.5rem 0 1rem;
  }
  .ch-section-rule span {
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #888;
    white-space: nowrap;
  }
  .ch-section-rule::before,
  .ch-section-rule::after {
    content: '';
    flex: 1;
    height: 0.5px;
    background: #bbb;
  }

  /* ── CAST GRID (the creative bit) ── */
  .ch-cast {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 0;
    border-top: 0.5px solid #e0e0e0;
    border-left: 0.5px solid #e0e0e0;
    margin-bottom: 2rem;
  }

  .ch-cast-card {
    border-right: 0.5px solid #e0e0e0;
    border-bottom: 0.5px solid #e0e0e0;
    padding: 10px 12px;
    cursor: pointer;
    transition: background 0.15s ease;
    background: transparent;
    text-align: left;
    width: 100%;
    font-family: inherit;
    position: relative;
  }

  .ch-cast-card:hover { background: #f7f5f0; }

  .ch-cast-card.active {
    background: #1a1a1a;
  }

  .ch-cast-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-bottom: 6px;
  }

  .ch-cast-name {
    font-family: 'Playfair Display', serif;
    font-size: 13px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.2;
    margin-bottom: 2px;
  }
  .ch-cast-card.active .ch-cast-name { color: #fff; }

  .ch-cast-role {
    font-family: Georgia, serif;
    font-size: 10px;
    color: #999;
    font-style: italic;
    line-height: 1.3;
  }
  .ch-cast-card.active .ch-cast-role { color: rgba(255,255,255,0.5); }

  /* ── LEGEND ── */
  .ch-legend {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .ch-legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: Georgia, serif;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #888;
  }

  .ch-legend-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* ── ARTICLE ── */
  .ch-article {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    animation: chSlide 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes chSlide {
    from { transform: translateX(30px); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
  }

  .ch-numeral {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    font-weight: 900;
    color: #e8e8e8;
    line-height: 1;
    min-width: 3rem;
    text-align: right;
    user-select: none;
    flex-shrink: 0;
    padding-top: 0.15rem;
  }

  .ch-vline {
    width: 0.5px;
    background: #e0e0e0;
    align-self: stretch;
    flex-shrink: 0;
  }

  .ch-body { flex: 1; min-width: 0; }

  .ch-kicker {
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #888;
    font-family: Georgia, serif;
    margin-bottom: 0.4rem;
  }

  .ch-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 5vw, 2.8rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 0.4rem;
    color: #1a1a1a;
  }

  .ch-role-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: Georgia, serif;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 3px 10px 3px 8px;
    border-radius: 2px;
    margin-bottom: 1rem;
  }

  .ch-role-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .ch-rule {
    width: 48px;
    height: 1px;
    background: #1a1a1a;
    margin-bottom: 1.25rem;
  }

  .ch-body-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .ch-body-text p {
    font-size: clamp(26px, 2.2vw, 18px);
    line-height: 1.85;
    color: #333;
    font-style: italic;
    font-weight: 300;
  }

  .ch-body-text p:first-child {
    font-size: clamp(17px, 2.5vw, 19px);
    font-style: normal;
    font-weight: 400;
    color: #1a1a1a;
  }

  .ch-signal {
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #bbb;
    text-align: center;
    margin: 2rem 0;
  }

  .ch-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.5rem;
    padding-top: 1rem;
    border-top: 0.5px solid #e0e0e0;
  }

  .ch-ctrl-btn {
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
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .ch-ctrl-btn:hover:not(:disabled) { border-color: #1a1a1a; color: #1a1a1a; }
  .ch-ctrl-btn:disabled { opacity: 0.25; cursor: default; }
  .ch-ctrl-btn.primary { background: #1a1a1a; color: #fff; border-color: #1a1a1a; }
  .ch-ctrl-btn.primary:hover { background: #333; }

  .ch-pips {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 180px;
  }

  .ch-pip {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    border: 0.5px solid #bbb;
    background: transparent;
    cursor: pointer;
    transition: all 0.18s ease;
  }
  .ch-pip.active { background: #1a1a1a; border-color: #1a1a1a; }

  .ch-footer-meta {
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
    .ch-article { flex-direction: column; gap: 0.75rem; }
    .ch-numeral { font-size: 2.2rem; text-align: left; }
    .ch-vline { display: none; }
    .ch-cast { grid-template-columns: repeat(2, 1fr); }
    .ch-legend { gap: 0.75rem; }
  }
`;

const numerals = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];

export default function Characters() {
  const [index, setIndex] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const section = sections[index];
  const isLast = index === sections.length - 1;
  const align = alignmentStyles[section.alignment];

  const goTo = (i: number) => {
    setIndex(i);
    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="ch-paper">
        <div className="ch-inner">

          <Link to="/" className="ch-back"> All Worlds</Link>

          <div className="ch-masthead">
            <div className="ch-flag">The Arcadian Record</div>
          </div>
          <div className="ch-meta">
            <span>Characters  of Arcadian Mythology</span>
            <span>12 Entities in Code-L</span>
            <span>All Frames Recorded</span>
          </div>


          {/* Legend */}
          <div className="ch-legend">
            {Object.entries(alignmentStyles).map(([key, val]) => (
              <div key={key} className="ch-legend-item">
                <span className="ch-legend-dot" style={{ background: val.dot }} />
                {val.label}
              </div>
            ))}
          </div>

          {/* Cast grid — like a playbill */}
          <div className="ch-cast">
            {sections.map((sec, i) => {
              const a = alignmentStyles[sec.alignment];
              return (
                <button
                  key={i}
                  className={`ch-cast-card ${i === index ? "active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  <div
                    className="ch-cast-dot"
                    style={{ background: i === index ? "rgba(255,255,255,0.5)" : a.dot }}
                  />
                  <div className="ch-cast-name">{sec.title}</div>
                  <div className="ch-cast-role">{sec.role}</div>
                </button>
              );
            })}
          </div>

          {/* Article */}
          <div className="ch-article" key={index} ref={bodyRef}>
            <div className="ch-numeral">{numerals[index]}</div>
            <div className="ch-vline" />
            <div className="ch-body">
              <div className="ch-kicker">{section.kicker}</div>
              <h1 className="ch-headline">{section.title}</h1>
              <div
                className="ch-role-tag"
                style={{ background: align.tag, color: align.dot }}
              >
                <span className="ch-role-dot" style={{ background: align.dot }} />
                {section.role}
              </div>
              <div className="ch-rule" />

              <div className="ch-body-text">
                {section.text.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <p className="ch-signal">/// Signal Stable  Code-L Active ///</p>

              <div className="ch-controls">
                <button
                  className="ch-ctrl-btn"
                  onClick={() => goTo(Math.max(0, index - 1))}
                  disabled={index === 0}
                >
                   Previous
                </button>

                <div className="ch-pips">
                  {sections.map((_, i) => (
                    <div
                      key={i}
                      className={`ch-pip ${i === index ? "active" : ""}`}
                      onClick={() => goTo(i)}
                    />
                  ))}
                </div>

                <button
                  className={`ch-ctrl-btn ${!isLast ? "primary" : ""}`}
                  onClick={() => goTo(Math.min(sections.length - 1, index + 1))}
                  disabled={isLast}
                >
                  Next 
                </button>
              </div>
            </div>
          </div>

          <div className="ch-footer-meta">
            <span>Elysian Code</span>
 
            <span>All worlds connected</span>
          </div>

        </div>
      </div>
    </>
  );
}