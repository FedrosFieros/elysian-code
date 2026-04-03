import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const sections = [
  {
    title: "Preface",
    kicker: "Code-L · Introduction",
    text: [
      "Code-L is an interactive meta-mythos unfolding across Arcadia.",
      "Ahriman has bought majority of the land and trapped all Arcadians into caves.",
      "Distracting them so they dont think to leave, with Lady Dopamina as the puppeteer.",
      "This is the cave where every Arcadian is born into.",
      "These caves, used to offer space for new Arcadians feel safe and then explore the rest of the world.",
      "However Ahriman took advantage of it, designing them so the Arcadians dont escape.",
      "Distracting them, hypnotising them for his wolves to be fed.",
    ],
  },
  {
    title: "Code-L Phase 1",
    kicker: "Code-L · Phase 1",
    text: [
      "Players first experience the planet inside a 3D cave, accessed through arcadia.world available in April.",
    ],
    video: "/caveDraft.mp4",
  },
  {
    title: "The Cave",
    kicker: "Environment · Shared Space",
    text: [
      "Once inside, players control an avatar in a shared space alongside other online participants.",
      "Each avatar looks the same but carries a unique username and chat bubble.",
    ],
    image: "/cave-avatars.png",
  },
  {
    title: "Gameplay",
    kicker: "Mechanics · First Person",
    text: [
      "Players move in first-person perspective, interacting with the environment and each other in real time.",
    ],
    image: "/firstperspective.png",
  },
  {
    title: "Ahriman's Plan",
    kicker: "Antagonist · The Architect",
    text: [
      "These caves were designed by Ahriman to trap humans inside systems they cannot escape — a false reality holding them prisoner.",
    ],
    image: "/Ahriman.png",
  },
  {
    title: "Lady Dopamina, Puppeteer",
    kicker: "Character · Captor",
    text: [
      "A deceiving character capturing you inside the cave and constantly finding ways to distract the prisoners from exiting. She speaks of safety inside the cave and uncertainty outside.",
      "She maintains order. She entertains the prisoners.",
    ],
    image: "/cave-puppeteer.png",
  },
  {
    title: "The Blue Device",
    kicker: "Object · Hypnosis",
    text: [
      "Every player carries a device displaying intense blue light when looked on, constantly broadcasting hypnotising videos.",
      "All subliminal messages from Ahriman.",
    ],
    image: "/cave-bluedevice.png",
  },
  {
    title: "The Wolves Ritual",
    kicker: "Event · Dark Dungeon",
    text: [
      "The Puppeteer may invite prisoners toward a dark dungeon at the rear of the cave.",
      "Those who follow enter a ritual space. Chains bind their avatars. They can no longer move — only witness.",
      "Music builds. Shadows shift. The wolves arrive, and devour the Arcadians, watching as the wolves eat their bodies and their blood is dropping, until they vanish — but unable to move.",
    ],
    image: "/chained.png",
  },
  {
    title: "Ritual Leader",
    kicker: "Character · Lady Dopamina",
    text: [
      "Lady Dopamina hosts the ritual — singing as players watch their bodies consumed by wolves.",
      "They can turn their heads. They cannot run. They die in real time and cannot be stopped. A lived-in music video.",
    ],
    image: "/dominatrix.png",
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=IM+Fell+English:ital@0;1&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .cave-paper {
    background: #fff;
    font-family: 'IM Fell English', Georgia, serif;
    color: #1a1a1a;
    min-height: 100vh;
    width: 100%;
  }

  .cave-inner {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    border-left: 0.5px solid #ddd;
    border-right: 0.5px solid #ddd;
    min-height: 100vh;
  }

  .cave-back {
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
  .cave-back:hover { color: #1a1a1a; }

  .cave-masthead {
    text-align: center;
    border-bottom: 3px double #1a1a1a;
    padding-bottom: 0.75rem;
    margin-bottom: 0.4rem;
  }

  .cave-flag {
    font-family: 'UnifrakturMaguntia', cursive;
    font-size: clamp(2.4rem, 7vw, 4.8rem);
    line-height: 1;
    color: #1a1a1a;
  }

  .cave-meta {
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

  .cave-section-rule {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 1.5rem 0 1rem;
  }
  .cave-section-rule span {
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #888;
    white-space: nowrap;
  }
  .cave-section-rule::before,
  .cave-section-rule::after {
    content: '';
    flex: 1;
    height: 0.5px;
    background: #bbb;
  }

  .cave-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 0.5px solid #e0e0e0;
  }

  .cave-nav-btn {
    font-family: Georgia, serif;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 5px 12px;
    border: 0.5px solid #ccc;
    border-radius: 2px;
    background: transparent;
    color: #666;
    cursor: pointer;
    transition: all 0.18s ease;
  }
  .cave-nav-btn:hover { border-color: #1a1a1a; color: #1a1a1a; }
  .cave-nav-btn.active {
    background: #1a1a1a;
    color: #fff;
    border-color: #1a1a1a;
  }

  .cave-article {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    animation: slideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes slideIn {
    from { transform: translateX(40px); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
  }

  .cave-numeral {
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

  .cave-vline {
    width: 0.5px;
    background: #e0e0e0;
    align-self: stretch;
    flex-shrink: 0;
  }

  .cave-body {
    flex: 1;
    min-width: 0;
  }

  .cave-kicker {
    font-size: 12px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #888;
    font-family: Georgia, serif;
    margin-bottom: 0.5rem;
  }

  .cave-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 5vw, 2.6rem);
    font-weight: 900;
    line-height: 1.15;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }

  .cave-rule {
    width: 48px;
    height: 1px;
    background: #1a1a1a;
    margin-bottom: 1.25rem;
  }

  .cave-media {
    width: 100%;
    max-height: 520px;
    object-fit: cover;
    border-radius: 2px;
    border: 0.5px solid #e0e0e0;
    margin-bottom: 1.5rem;
    display: block;
  }

  .cave-body-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .cave-body-text p {
    font-size: clamp(16px, 2.2vw, 18px);
    line-height: 1.85;
    color: #333;
    font-style: italic;
    font-weight: 300;
  }

  .cave-body-text p:first-child {
    font-size: clamp(17px, 2.5vw, 19px);
    font-style: normal;
    font-weight: 400;
    color: #1a1a1a;
  }

  .cave-signal {
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #bbb;
    text-align: center;
    margin: 2rem 0;
    font-style: normal;
  }

  .cave-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.5rem;
    padding-top: 1rem;
    border-top: 0.5px solid #e0e0e0;
  }

  .cave-ctrl-btn {
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
  .cave-ctrl-btn:hover:not(:disabled) { border-color: #1a1a1a; color: #1a1a1a; }
  .cave-ctrl-btn:disabled { opacity: 0.25; cursor: default; }
  .cave-ctrl-btn.primary {
    background: #1a1a1a;
    color: #fff;
    border-color: #1a1a1a;
  }
  .cave-ctrl-btn.primary:hover { background: #333; }

  .cave-pips {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .cave-pip {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 0.5px solid #bbb;
    background: transparent;
    cursor: pointer;
    transition: all 0.18s ease;
  }
  .cave-pip.active { background: #1a1a1a; border-color: #1a1a1a; }

  .cave-phase2-link {
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
  .cave-phase2-link:hover { background: #1a1a1a; color: #fff; }

  .cave-footer-meta {
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
    .cave-article { flex-direction: column; gap: 0.75rem; }
    .cave-numeral { font-size: 2.5rem; text-align: left; }
    .cave-vline { display: none; }
    .cave-meta { font-size: 10px; gap: 4px; flex-wrap: wrap; justify-content: center; text-align: center; }
  }
`;

const toRoman = (n: number): string => {
  const map = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];
  return map[n] || String(n + 1);
};

export default function TheCave() {
  const [index, setIndex] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const section = sections[index];
 
  const goTo = (i: number) => {
    setIndex(i);
    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const isLast = index === sections.length - 1;

  return (
    <>
      <style>{styles}</style>
      <div className="cave-paper">
        <div className="cave-inner">

          {/* Back */}
          <Link to="/" className="cave-back">← All Worlds</Link>

          {/* Masthead */}
          <div className="cave-masthead">
            <div className="cave-flag">The Arcadian Record</div>
          </div>
          <div className="cave-meta">
            <span>Code-L Dispatch · Phase 1</span>
            <span>Ahriman's Cave · Field Notes</span>
            <span>All Frames Recorded</span>
          </div>

          <div className="cave-section-rule">
            <span>Code-L — Phase 1 · The Cave</span>
          </div>

          {/* Chapter nav */}
          <nav className="cave-nav">
            {sections.map((sec, i) => (
              <button
                key={i}
                className={`cave-nav-btn ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
              >
                {sec.title}
              </button>
            ))}
          </nav>

          {/* Article */}
          <div className="cave-article" key={index} ref={bodyRef}>
            <div className="cave-numeral">{toRoman(index)}</div>
            <div className="cave-vline" />
            <div className="cave-body">
              <div className="cave-kicker">{section.kicker}</div>
              <h1 className="cave-headline">{section.title}</h1>
              <div className="cave-rule" />

              {section.video && (
                <video
                  className="cave-media"
                  src={section.video}
                  controls
                  playsInline
                />
              )}
              {section.image && !section.video && (
                <img
                  src={section.image}
                  alt={section.title}
                  className="cave-media"
                />
              )}

              <div className="cave-body-text">
                {section.text.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              {isLast && (
                <Link to="/CodeLPhase2" className="cave-phase2-link">
                  Continue to Phase 2 →
                </Link>
              )}

              <p className="cave-signal">/// Signal Stable · Code-L Active ///</p>

              <div className="cave-controls">
                <button
                  className="cave-ctrl-btn"
                  onClick={() => goTo(Math.max(0, index - 1))}
                  disabled={index === 0}
                >
                  ← Previous
                </button>

                <div className="cave-pips">
                  {sections.map((_, i) => (
                    <div
                      key={i}
                      className={`cave-pip ${i === index ? "active" : ""}`}
                      onClick={() => goTo(i)}
                    />
                  ))}
                </div>

                <button
                  className={`cave-ctrl-btn ${!isLast ? "primary" : ""}`}
                  onClick={() => goTo(Math.min(sections.length - 1, index + 1))}
                  disabled={isLast}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

          <div className="cave-footer-meta">
            <span>Elysian Code</span>
            <span>· · ·</span>
            <span>All worlds connected</span>
          </div>

        </div>
      </div>
    </>
  );
}