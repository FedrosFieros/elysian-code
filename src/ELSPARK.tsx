import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const sections = [
  {
    title: "ELSPARK",
    kicker: "Signal Detected \u00b7 Digital Park",
    text: [
      "A digital park. Built for human presence.",
      "No algorithms. No forced feeds.",
      "Visitors don\u2019t just watch. They participate.",
      "Transparent Economic System with Laocratic Governance.",
    ],
  },
  {
    title: "Core Mechanics",
    kicker: "Infrastructure \u00b7 How It Works",
    text: [
      "One park. Open movement.",
      "Arrive alone. Leave connected.",
      "Conversations happen in real time.",
      "No censorship layers imposed.",
      "No algorithm decides visibility.",
    ],
  },
  {
    title: "Economy",
    kicker: "Elcoins \u00b7 OCBR \u00b7 Exchange",
    text: [
      "Value flows through elcoins. Trade your art. Offer your skill. Build your role. Earn. Keep. Or extract.",
      "One common bank reserve \u2014 OCBR. Residents can earn elcoins for their work.",
      "Users can also buy elcoins at a fixed rate: 1 euro = 1 elcoin. Funds go directly to OCBR.",
      "OCBR will always hold enough reserve for residents to exchange elcoins back to euros.",
      "Elcoins is the sole form of exchange on ELSPARK \u2014 where people can trade services or digi-posts.",
    ],
    facts: [
      { label: "Exchange Rate", value: "1\u20ac = 1 elcoin" },
      { label: "Reserve", value: "OCBR" },
      { label: "Backed by", value: "Euro" },
    ],
  },
  {
    title: "Digi-Posts",
    kicker: "Collectible Media \u00b7 Decentralised",
    text: [
      "Collectible, decentralised media with an integrated comment section on its hardware. Can only be accessed by those with a copy.",
      "Arcadians can buy a copy of a digi-post by giving the original creator one elcoin and storing it in their personal collection.",
      "Collectors can use copies of 3 digi-posts they purchased to create a digi-cura-post, worth 2 elcoins.",
      "When someone buys this digi-cura-post, it gives 0.5 elcoins to the curator and each of the original creators. Creators retain ownership.",
    ],
    facts: [
      { label: "Copy costs", value: "1 elcoin" },
      { label: "Cura-post worth", value: "2 elcoins" },
      { label: "Creator cut", value: "0.5 elcoins" },
    ],
  },
  {
    title: "Laocracy",
    kicker: "Governance \u00b7 Collective Power",
    text: [
      "ELSPARK is not governed from above. It is shaped by participants. Systems evolve collectively.",
      "Power is distributed. Influence is earned through presence. This is not democracy. This is laocracy.",
      "Elco, acting as the spirit of it all, interacts with residents \u2014 offering guidance or connecting them with relevant humans.",
      "Each month, Elco organises open elections. Residents vote on updates: new features, UX design, attractions, community-driven changes.",
      "Collective voting results directly shape the park\u2019s evolution.",
    ],
  },
  {
    title: "Alter Egos",
    kicker: "Identity \u00b7 Interface",
    text: [
      "You do not enter as yourself. You construct an identity. A role. A presence.",
      "Some perform. Some build. Some observe.",
      "Your alter ego is your interface.",
    ],
  },
  {
    title: "Digi-Market",
    kicker: "Marketplace \u00b7 Skills & Goods",
    text: [
      "DIGI-MARKET is the place for sellers to market private services they can offer, in exchange for elcoins.",
      "A digital marketplace for online sellers to offer a timed session, delivered digitally on the spot.",
      "Sellers can offer language coaching, life advice, consultations, or going on an adventure across Arcadia.",
      "Sellers can also offer physical products such as clothes, furniture and tools.",
    ],
  },
  {
    title: "Attractions",
    kicker: "Spaces \u00b7 The Map",
    text: [
      "ELSPARK is composed of spaces. Each space serves a function. Built for Arcadians to express, create and connect.",
      "SOCIAL LABYRINTH \u2014 Meet strangers instantly in a private room. Just the two of you.",
      "PERSONAL PARK \u2014 Subsidised, private and personally curated 3D space, home for the Arcadian.",
      "DIGI-MARKET \u2014 Exchange skills and timed sessions.",
      "Some spaces are system-built. Others will be user-created. The map is not fixed.",
    ],
  },
  {
    title: "ELSPARK Theatre",
    kicker: "Performance \u00b7 Live & Scheduled",
    text: [
      "A stage for scheduled or improvised shows. Open 24/7.",
    ],
    image: "/ELSPARKTV.png",
  },
  {
    title: "ELSPARK TV",
    kicker: "Broadcasting \u00b7 Original Content",
    text: [
      "When the lights dim and curtains open, a screen is revealed.",
      "ELSPARK TV is a digital platform of original content made by ELTV and performed by humans on Earth for Arcadians to watch \u2014 whether pre-recorded digital shows or live performances.",
    ],
    image: "/ELSPARKTheatre.png",
  },
  {
    title: "Phase 3",
    kicker: "What Happens After",
    text: [
      "Arcadia continues being accessible as a 3D world, and ELSPARK welcomes new audiences away from Ahriman\u2019s colonised land.",
      "New accounts always start in the cave, but ones who create an account on ELSPARK can always spawn from there.",
      "Other Arcadians are free to set up their own rules in lands across Arcadia too, following the physics provided.",
    ],
  },
  {
    title: "Enter",
    kicker: "Access Point \u00b7 Available Now",
    text: [
      "The social infrastructure of the park is ready.",
      "The 3D world is still forming.",
    ],
    link: "https://elspark.online",
  },
];

interface Fact { label: string; value: string; }
interface Section {
  title: string;
  kicker: string;
  text: string[];
  facts?: Fact[];
  image?: string;
  link?: string;
  isLast?: boolean;
}

const toRoman = (n: number): string => {
  const map = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"];
  return map[n] || String(n + 1);
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=IM+Fell+English:ital@0;1&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .el-paper {
    background: #fff;
    font-family: 'IM Fell English', Georgia, serif;
    color: #1a1a1a;
    min-height: 100vh;
    width: 100%;
  }

  .el-inner {
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    border-left: 0.5px solid #ddd;
    border-right: 0.5px solid #ddd;
    min-height: 100vh;
  }

  .el-back {
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
  .el-back:hover { color: #1a1a1a; }

  .el-masthead {
    text-align: center;
    border-bottom: 3px double #1a1a1a;
    padding-bottom: 0.75rem;
    margin-bottom: 0.4rem;
  }

  .el-flag {
    font-family: 'UnifrakturMaguntia', cursive;
    font-size: clamp(2.4rem, 7vw, 4.8rem);
    line-height: 1;
    color: #1a1a1a;
  }

  .el-meta {
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

  .el-section-rule {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 1.5rem 0 1rem;
  }
  .el-section-rule span {
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #888;
    white-space: nowrap;
  }
  .el-section-rule::before,
  .el-section-rule::after {
    content: '';
    flex: 1;
    height: 0.5px;
    background: #bbb;
  }

  /* ── INDEX BAR (replaces nav pills) ── */
  .el-index {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 0;
    border: 0.5px solid #e0e0e0;
    margin-bottom: 2rem;
  }

  .el-index-btn {
    font-family: Georgia, serif;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-align: left;
    padding: 8px 10px;
    border: none;
    border-right: 0.5px solid #e0e0e0;
    border-bottom: 0.5px solid #e0e0e0;
    background: transparent;
    color: #666;
    cursor: pointer;
    transition: all 0.15s ease;
    line-height: 1.3;
    display: flex;
    align-items: flex-start;
    gap: 6px;
  }

  .el-index-btn:hover { background: #f7f5f0; color: #1a1a1a; }

  .el-index-btn.active {
    background: #1a1a1a;
    color: #fff;
  }

  .el-index-num {
    font-family: 'Playfair Display', serif;
    font-size: 13px;
    font-weight: 700;
    color: #ccc;
    flex-shrink: 0;
    line-height: 1;
    padding-top: 1px;
  }
  .el-index-btn.active .el-index-num { color: rgba(255,255,255,0.4); }

  /* ── ARTICLE ── */
  .el-article {
    display: grid;
    grid-template-columns: 3rem 0.5px 1fr;
    gap: 0 1.25rem;
    align-items: flex-start;
    animation: elSlideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes elSlideIn {
    from { transform: translateX(40px); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
  }

  .el-numeral {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    font-weight: 900;
    color: #e8e8e8;
    line-height: 1;
    text-align: right;
    user-select: none;
    padding-top: 0.15rem;
  }

  .el-vline {
    background: #e0e0e0;
    align-self: stretch;
  }

  .el-body { min-width: 0; }

  .el-kicker {
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #888;
    font-family: Georgia, serif;
    margin-bottom: 0.4rem;
  }

  .el-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 5vw, 2.8rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 0.85rem;
    color: #1a1a1a;
  }

  .el-rule {
    width: 48px;
    height: 1px;
    background: #1a1a1a;
    margin-bottom: 1.25rem;
  }

  .el-media {
    width: 100%;
    max-height: 480px;
    object-fit: cover;
    border-radius: 2px;
    border: 0.5px solid #e0e0e0;
    margin-bottom: 1.5rem;
    display: block;
  }

  /* two-col layout when there are facts */
  .el-content-grid {
    display: grid;
    grid-template-columns: 1fr 180px;
    gap: 2rem;
    align-items: start;
  }

  .el-facts {
    border: 0.5px solid #e0e0e0;
    border-radius: 2px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .el-facts-head {
    background: #1a1a1a;
    color: #fff;
    font-family: Georgia, serif;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    padding: 6px 10px;
  }

  .el-fact-row {
    display: flex;
    flex-direction: column;
    padding: 8px 10px;
    border-bottom: 0.5px solid #e0e0e0;
  }
  .el-fact-row:last-child { border-bottom: none; }

  .el-fact-label {
    font-family: Georgia, serif;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #aaa;
    margin-bottom: 2px;
  }

  .el-fact-value {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    font-weight: 700;
    color: #1a1a1a;
  }

  .el-body-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .el-body-text p {
    font-size: clamp(26px, 2.2vw, 18px);
    line-height: 1.85;
    color: #333;
    font-style: italic;
    font-weight: 300;
  }

  .el-body-text p:first-child {
    font-size: clamp(17px, 2.5vw, 19px);
    font-style: normal;
    font-weight: 400;
    color: #1a1a1a;
  }

  /* signal lines — all-caps lines get a different treatment */
  .el-body-text p.el-signal {
    font-family: Georgia, serif;
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #bbb;
    font-style: normal;
    text-align: center;
    margin: 0.5rem 0;
  }

  .el-enter-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 1.5rem;
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    padding: 14px 28px;
    background: #1a1a1a;
    border-radius: 2px;
    transition: all 0.2s ease;
  }
  .el-enter-btn:hover { background: #333; letter-spacing: 0.15em; }

  .el-signal-bar {
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #bbb;
    text-align: center;
    margin: 2rem 0;
  }

  .el-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.5rem;
    padding-top: 1rem;
    border-top: 0.5px solid #e0e0e0;
  }

  .el-ctrl-btn {
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
  .el-ctrl-btn:hover:not(:disabled) { border-color: #1a1a1a; color: #1a1a1a; }
  .el-ctrl-btn:disabled { opacity: 0.25; cursor: default; }
  .el-ctrl-btn.primary { background: #1a1a1a; color: #fff; border-color: #1a1a1a; }
  .el-ctrl-btn.primary:hover { background: #333; }

  .el-pips {
    display: flex;
    gap: 5px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 200px;
  }

  .el-pip {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    border: 0.5px solid #bbb;
    background: transparent;
    cursor: pointer;
    transition: all 0.18s ease;
  }
  .el-pip.active { background: #1a1a1a; border-color: #1a1a1a; }

  .el-footer-meta {
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

  @media (max-width: 640px) {
    .el-article { grid-template-columns: 2.5rem 0.5px 1fr; gap: 0 0.75rem; }
    .el-numeral { font-size: 2.2rem; }
    .el-content-grid { grid-template-columns: 1fr; }
    .el-facts { margin-top: 1rem; }
    .el-index { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }
  }
`;

export default function ELSPARK() {
  const [index, setIndex] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const section = sections[index] as Section;
  const isLast = index === sections.length - 1;

  const goTo = (i: number) => {
    setIndex(i);
    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const isSignalLine = (line: string) =>
    line.startsWith("///") || line.startsWith("\u25ae") || line === "";

  return (
    <>
      <style>{styles}</style>
      <div className="el-paper">
        <div className="el-inner">

          <Link to="/" className="el-back"> All Worlds</Link>

          <div className="el-masthead">
            <div className="el-flag">The Arcadian Record</div>
          </div>
          <div className="el-meta">
            <span>ELSPARK Dispatch  Digital Park</span>
            <span>Laocracy Elcoins Arcadia</span>
            <span>Signal Stable</span>
          </div>

          <div className="el-section-rule">
            <span>ELSPARK  World Guide</span>
          </div>

          {/* Grid index — more newspaper-like than pills */}
          <div className="el-index">
            {sections.map((sec, i) => (
              <button
                key={i}
                className={`el-index-btn ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
              >
                <span className="el-index-num">{toRoman(i)}</span>
                {sec.title}
              </button>
            ))}
          </div>

          {/* Article */}
          <div className="el-article" key={index} ref={bodyRef}>
            <div className="el-numeral">{toRoman(index)}</div>
            <div className="el-vline" />
            <div className="el-body">
              <div className="el-kicker">{section.kicker}</div>
              <h1 className="el-headline">{section.title}</h1>
              <div className="el-rule" />

              {section.image && (
                <img src={section.image} alt={section.title} className="el-media" />
              )}

              {/* Two-col when facts exist */}
              {section.facts ? (
                <div className="el-content-grid">
                  <div className="el-body-text">
                    {section.text.map((line, i) => (
                      <p key={i} className={isSignalLine(line) ? "el-signal" : ""}>{line}</p>
                    ))}
                  </div>
                  <div className="el-facts">
                    <div className="el-facts-head">At a glance</div>
                    {section.facts.map((f, i) => (
                      <div key={i} className="el-fact-row">
                        <span className="el-fact-label">{f.label}</span>
                        <span className="el-fact-value">{f.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="el-body-text">
                  {section.text.map((line, i) => (
                    <p key={i} className={isSignalLine(line) ? "el-signal" : ""}>{line}</p>
                  ))}
                </div>
              )}

              {section.link && (
                <a href={section.link} target="_blank" rel="noopener noreferrer" className="el-enter-btn">
                  Enter ELSPARK 
                </a>
              )}

              <p className="el-signal-bar">/// Signal Stable \u00b7 ELSPARK Active ///</p>

              <div className="el-controls">
                <button
                  className="el-ctrl-btn"
                  onClick={() => goTo(Math.max(0, index - 1))}
                  disabled={index === 0}
                >
                   Previous
                </button>

                <div className="el-pips">
                  {sections.map((_, i) => (
                    <div
                      key={i}
                      className={`el-pip ${i === index ? "active" : ""}`}
                      onClick={() => goTo(i)}
                    />
                  ))}
                </div>

                <button
                  className={`el-ctrl-btn ${!isLast ? "primary" : ""}`}
                  onClick={() => goTo(Math.min(sections.length - 1, index + 1))}
                  disabled={isLast}
                >
                  Next 
                </button>
              </div>
            </div>
          </div>

          <div className="el-footer-meta">
            <span>Elysian Code</span>

            <span>All worlds connected</span>
          </div>

        </div>
      </div>
    </>
  );
}