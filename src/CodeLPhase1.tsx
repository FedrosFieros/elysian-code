import { Link } from "react-router-dom";
import { useState, useRef, useMemo } from "react";

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
  {
    title: "Go to Phase-2",
    kicker: "Character · Lady Dopamina",
    text: [
        ],

  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #050505;
    --bg2: #09090b;
    --panel: rgba(255,255,255,0.05);
    --line: rgba(255,255,255,0.1);
    --text: #f5f5f5;
    --muted: rgba(245,245,245,0.72);
    --muted2: rgba(245,245,245,0.46);
    --accent: #8ce0ff;
    --warm: #f0d7a1;
  }

  body {
    background:
      radial-gradient(circle at 50% 0%, rgba(140,224,255,0.14), transparent 24%),
      radial-gradient(circle at 20% 15%, rgba(240,215,161,0.08), transparent 18%),
      linear-gradient(180deg, var(--bg), var(--bg2));
    color: var(--text);
    font-family: Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif;
  }

  .cave-paper {
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .cave-paper::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.45) 100%),
      linear-gradient(to bottom, rgba(255,255,255,0.03), transparent 18%, transparent 82%, rgba(255,255,255,0.02));
    z-index: 0;
  }

  .cave-inner {
    position: relative;
    z-index: 1;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1.25rem 4rem;
  }

  .cave-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2.2rem;
  }

  .cave-back {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    text-decoration: none;
    color: rgba(245,245,245,0.7);
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    transition: color 0.2s ease, transform 0.2s ease;
  }

  .cave-back:hover {
    color: #fff;
    transform: translateX(-2px);
  }

  .cave-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.55rem 0.8rem;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: rgba(255,255,255,0.03);
    color: var(--muted);
    font-size: 0.7rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    backdrop-filter: blur(16px);
  }

  .cave-chip-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 18px rgba(140,224,255,0.8);
  }

  .cave-hero {
    min-height: 18vh;
    display: grid;
    place-items: center;
    text-align: center;
    padding: 2rem 0 3rem;
  }

  .cave-flag {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(2.8rem, 8vw, 6rem);
    line-height: 0.95;
    letter-spacing: -0.04em;
    font-weight: 700;
    text-wrap: balance;
    text-shadow: 0 0 24px rgba(255,255,255,0.05);
  }

  .cave-hero-sub {
    max-width: 62ch;
    margin: 1.1rem auto 0;
    color: var(--muted);
    font-size: clamp(1rem, 2vw, 1.15rem);
    line-height: 1.65;
  }

  .cave-meta {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: rgba(255,255,255,0.02);
    backdrop-filter: blur(16px);
  }

  .cave-meta-item {
    padding: 1rem;
    text-align: center;
    border-right: 1px solid var(--line);
  }

  .cave-meta-item:last-child { border-right: none; }

  .cave-meta-num {
    display: block;
    font-family: "Playfair Display", serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text);
    line-height: 1;
  }

  .cave-meta-label {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--muted2);
  }

  .cave-layout {
    display: grid;
    grid-template-columns: 240px minmax(0, 1fr);
    gap: 1.25rem;
    margin-top: 3rem;
    align-items: start;
  }

  .cave-nav {
    position: sticky;
    top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    padding: 1rem;
    border: 1px solid var(--line);
    border-radius: 24px;
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(18px);
  }

  .cave-nav-label {
    font-size: 0.68rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--muted2);
    margin-bottom: 0.35rem;
  }

  .cave-nav-btn {
    font-family: Inter, sans-serif;
    font-size: 0.82rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.85rem 0.9rem;
    border: 1px solid transparent;
    border-radius: 14px;
    background: transparent;
    color: rgba(245,245,245,0.68);
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .cave-nav-btn:hover {
    background: rgba(255,255,255,0.05);
    color: #fff;
  }

  .cave-nav-btn.active {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.1);
    color: #fff;
  }

  .cave-stage {
    border: 1px solid var(--line);
    border-radius: 28px;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
    backdrop-filter: blur(22px);
    box-shadow:
      0 30px 80px rgba(0,0,0,0.35),
      inset 0 1px 0 rgba(255,255,255,0.06);
    padding: 1.5rem;
    overflow: hidden;
  }

  .cave-article {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
    animation: slideIn 0.45s cubic-bezier(0.25,0.46,0.45,0.94) both;
  }

  @keyframes slideIn {
    from { transform: translateX(24px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  .cave-numeral {
    font-family: "Playfair Display", serif;
    font-size: clamp(2.4rem, 5vw, 4.8rem);
    font-weight: 700;
    color: rgba(245,245,245,0.18);
    line-height: 1;
    min-width: 3.25rem;
    text-align: right;
    flex-shrink: 0;
    user-select: none;
    padding-top: 0.1rem;
  }

  .cave-vline {
    width: 1px;
    background: var(--line);
    align-self: stretch;
    flex-shrink: 0;
  }

  .cave-body {
    flex: 1;
    min-width: 0;
  }

  .cave-kicker {
    font-size: 0.72rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.52);
    margin-bottom: 0.7rem;
  }

  .cave-headline {
    font-family: "Playfair Display", serif;
    font-size: clamp(1.8rem, 4.8vw, 3rem);
    line-height: 1.08;
    letter-spacing: -0.03em;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #fff;
    max-width: 16ch;
  }

  .cave-rule {
    width: 64px;
    height: 1px;
    background: linear-gradient(90deg, rgba(255,255,255,0.9), transparent);
    margin-bottom: 1.2rem;
  }

  .cave-media {
    width: 100%;
    max-height: 520px;
    object-fit: cover;
    border-radius: 20px;
    border: 1px solid var(--line);
    margin-bottom: 1.5rem;
    display: block;
  }

  .cave-body-text {
    display: flex;
    flex-direction: column;
    gap: 0.95rem;
    max-width: 72ch;
  }

  .cave-body-text p {
    font-size: clamp(1rem, 2vw, 1.08rem);
    line-height: 1.8;
    color: var(--muted);
  }

  .cave-body-text p:first-child {
    color: rgba(245,245,245,0.92);
    font-size: clamp(1.03rem, 2vw, 1.12rem);
  }

  .cave-signal {
    margin-top: 1.5rem;
    font-size: 0.68rem;
    letter-spacing: 0.34em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.38);
  }

  .cave-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.4rem;
    padding-top: 1.2rem;
    border-top: 1px solid var(--line);
  }

  .cave-ctrl-btn {
    font-family: Inter, sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 0.8rem 1rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: transparent;
    color: rgba(245,245,245,0.72);
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .cave-ctrl-btn:hover:not(:disabled) {
    color: #fff;
    border-color: rgba(140,224,255,0.25);
    background: rgba(255,255,255,0.04);
  }

  .cave-ctrl-btn:disabled {
    opacity: 0.28;
    cursor: default;
  }

  .cave-ctrl-btn.primary {
    background: rgba(255,255,255,0.08);
    color: #fff;
  }

  .cave-pips {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cave-pip {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid rgba(245,245,245,0.35);
    background: transparent;
    cursor: pointer;
    transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease;
  }

  .cave-pip.active {
    background: #fff;
    border-color: #fff;
    transform: scale(1.08);
  }

  .cave-phase2-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 1.5rem;
    padding: 0.95rem 1.25rem;
    border-radius: 999px;
    border: 1px solid rgba(140,224,255,0.25);
    background: rgba(140,224,255,0.08);
    color: #fff;
    text-decoration: none;
    font-size: 0.74rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  }

  .cave-phase2-link:hover {
    transform: translateY(-1px);
    background: rgba(140,224,255,0.12);
    border-color: rgba(140,224,255,0.4);
  }

  .cave-footer-meta {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.34);
    padding-top: 1.4rem;
    margin-top: 2rem;
    border-top: 1px solid var(--line);
  }

  @media (max-width: 920px) {
    .cave-layout {
      grid-template-columns: 1fr;
    }

    .cave-nav {
      position: static;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .cave-nav-label {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    .cave-inner {
      padding: 1rem 0.9rem 3rem;
    }

    .cave-hero {
      min-height: 28vh;
      padding: 2rem 0 2.25rem;
    }

    .cave-meta {
      grid-template-columns: 1fr;
    }

    .cave-meta-item {
      border-right: none;
      border-bottom: 1px solid var(--line);
    }

    .cave-meta-item:last-child {
      border-bottom: none;
    }

    .cave-stage {
      padding: 1rem;
      border-radius: 22px;
    }

    .cave-article {
      flex-direction: column;
      gap: 0.8rem;
    }

    .cave-numeral {
      text-align: left;
      min-width: auto;
    }

    .cave-vline {
      display: none;
    }

    .cave-controls {
      flex-direction: column;
      align-items: stretch;
    }

    .cave-pips {
      order: -1;
    }

    .cave-footer-meta {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

const toRoman = (n: number): string => {
  const map = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return map[n] || String(n + 1);
};

export default function TheCave() {
  const [index, setIndex] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const section = useMemo(() => sections[index], [index]);

  const goTo = (i: number) => {
    setIndex(i);
    window.setTimeout(() => {
      bodyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const isLast = index === sections.length - 1;

  return (
    <>
      <style>{styles}</style>
      <div className="cave-paper">
        <div className="cave-inner">
          <div className="cave-topbar">
            <Link to="/" className="cave-back">← All Worlds</Link>
            <div className="cave-chip">
              <span className="cave-chip-dot" />
              Code-L Phase 1
            </div>
          </div>

          <header className="cave-hero">
            <div>
              <div className="cave-flag">Code-L Phase 1</div>
            
            </div>
          </header>

          

          <div className="cave-layout">
            <nav className="cave-nav" aria-label="Phase sections">
              <div className="cave-nav-label">Sections</div>
              {sections.map((sec, i) => (
                <button
                  key={i}
                  className={`cave-nav-btn ${i === index ? "active" : ""}`}
                  onClick={() => goTo(i)}
                  type="button"
                >
                  {sec.title}
                </button>
              ))}
            </nav>

            <main className="cave-stage">
              <article className="cave-article" key={index} ref={bodyRef}>
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
                      type="button"
                    >
                      ← Previous
                    </button>

                    <div className="cave-pips" aria-label="Section dots">
                      {sections.map((_, i) => (
                        <button
                          key={i}
                          className={`cave-pip ${i === index ? "active" : ""}`}
                          onClick={() => goTo(i)}
                          type="button"
                          aria-label={`Go to section ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      className={`cave-ctrl-btn ${!isLast ? "primary" : ""}`}
                      onClick={() => goTo(Math.min(sections.length - 1, index + 1))}
                      disabled={isLast}
                      type="button"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </article>
            </main>
          </div>

          <div className="cave-footer-meta">
            <span>Elysian Code</span>
            <span>All worlds connected</span>
            <span>Arcadia Standard Time</span>
          </div>
        </div>
      </div>
    </>
  );
}