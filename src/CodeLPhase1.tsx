import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const sections = [
  {
    title: "Preface",
    phase: "intro",
    text: [
      " Code-L is an interactive meta-mythos unfolding across a new 3D digital planet, called Arcadia.",
      "In this world, Ahriman has bought over all the land and trapped all Arcadians into caves. ",
      "And this is where players spawn inside when they enter arcadia.world.",

    ],
  },
  {
    title: "Code-L Phase 1",
    phase: "cave",
    text: [
      "Users first experience the planet inside a 3D cave, accessed through el.world available in April.",
    ],
    video: "/caveDraft.mp4",
  },
  {
    title: "The Cave",
    phase: "cave",
    text: [
      "Once inside, players control an avatar in a shared space alongside other online participants.",
      "Each avatar looks the same but carries a unique username and chat bubble. ",
    ],
    image: "/cave-avatars.png",
  },
  {
    title: "Gameplay",
    phase: "cave",
    text: [
      "Players move in first-person perspective, interacting with the environment and each other in real time.",
    ],
    image: "/firstperspective.png",
  },
  {
    title: "Ahriman's Plan",
    phase: "cave",
    text: [
      "These caves were designed by Ahriman to trap humans inside systems they cannot escape — a false reality holding them prisoner.",

    ],
    image: "/Ahriman.png",
  },
  {
    title: "Lady Dopamina, Puppeteer",
    phase: "cave",
    text: [
      "A deceiving character inside the cave who will constanty find ways to distract the prisoners so they dont exit. She speaks of safety inside the cave and uncertainty outside.",
      "She maintains order. She calms the prisoners.",
    ],
    image: "/cave-puppeteer.png",
  },
  {
    title: "The Blue Device",
    phase: "cave",
    text: [
      "Every player carries a device displaying intense blue light when looked on, constantly broadcasting hypnotising videos.",
      "all subbliminal messages from Ahriman ",
    ],
    image: "/cave-bluedevice.png",
  },
  {
    title: "The Wolves Ritual",
    phase: "cave",
    text: [
      "The Puppeteer may invite prisoners toward a dark dungeon at the rear of the cave.",
      "Those who follow enter a ritual space. Chains bind their avatars. They can no longer move — only witness.",
      "Music builds. Shadows shift. The wolves arrive, led by a cunty singer as their sovereign.",
    ],
    image: "/chained.png",
  },
  {
    title: "Ritual Leader",
    phase: "cave",
    text: [
      "Lady Dopamina hosts the ritual — singing as players watch their bodies consumed by wolves.",
      "They can turn their heads. They cannot run. They die in real time and cannot be stopped.. A lived-in music video.",
    ],
    image: "/dominatrix.png",
  },
];

type Phase = "intro" | "cave";

const phaseColors: Record<Phase, { accent: string; glow: string }> = {
  intro: { accent: "#...", glow: "#..." },
  cave: { accent: "#...", glow: "#..." },
};


export default function TheCave() {
  const [index, setIndex] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const section = sections[index];
  const { accent } =
  phaseColors[section.phase as keyof typeof phaseColors] || phaseColors.cave;

  // close nav on resize to desktop
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
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html, body, #root {
          width: 100%; height: 100%;
          overflow: hidden;
          background: #050208;
        }

        /* ── SHELL ── */
        .ec-shell {
          display: flex;
          width: 100vw;
          height: 100dvh;
          background: #070409;
          color: #f0ece4;
          font-family: 'Cormorant Garamond', Georgia, serif;
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.8s ease;
        }

        /* ── SIDEBAR ── */
        .ec-sidebar {
          width: 260px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          background: #06030a;
          border-right: 1px solid rgba(255,255,255,0.05);
          overflow-y: auto;
          overflow-x: hidden;
          z-index: 20;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.1) transparent;
        }

        .ec-logo {
          display: block;
          padding: 1.5rem 1.25rem 1rem;
          font-family: 'Cinzel', serif;
          font-size: 1.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(240,236,228,0.35);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          flex-shrink: 0;
          transition: color 0.2s ease;
        }
        .ec-logo:hover { color: rgba(240,236,228,0.7); }

        .ec-nav-list {
          list-style: none;
          padding: 1rem 0.75rem;
          flex: 1;
        }

        .ec-nav-item {
          width: 100%;
          padding: 0.7rem 1rem;
          background: transparent;
          border: none;
          color: rgba(240,236,228,0.45);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.95rem;
          font-style: italic;
          text-align: left;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 2px;
        }
        .ec-nav-item::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.4;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }
        .ec-nav-item:hover {
          color: rgba(240,236,228,0.85);
          background: rgba(255,255,255,0.03);
        }
        .ec-nav-item.active {
          color: var(--accent);
          background: rgba(var(--accent-rgb), 0.08);
          font-style: normal;
          font-weight: 600;
        }
        .ec-nav-item.active::before {
          opacity: 1;
          background: var(--accent);
          box-shadow: 0 0 6px var(--accent);
        }

        /* ── MOBILE TOGGLE ── */
        .ec-toggle {
          display: none;
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 100;
          background: rgba(6,3,10,0.9);
          border: 1px solid rgba(255,255,255,0.1);
          color: #f0ece4;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 2.1rem;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          transition: background 0.2s ease;
        }
        .ec-toggle:hover { background: rgba(20,10,30,0.95); }

        /* MOBILE OVERLAY */
        .ec-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 15;
          backdrop-filter: blur(2px);
        }

        /* ── STAGE AREA ── */
        .ec-stage {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* curtain wings */
        .ec-stage::before,
        .ec-stage::after {
          content: '';
          position: absolute;
          top: 0;
          width: clamp(30px, 5vw, 70px);
          height: 100%;
          z-index: 5;
          pointer-events: none;
          background: linear-gradient(160deg, #140a1c 0%, #06030a 60%);
          opacity: 0.85;
        }
        .ec-stage::before { left: 0; border-right: 1px solid rgba(255,255,255,0.03); }
        .ec-stage::after  { right: 0; border-left: 1px solid rgba(255,255,255,0.03); }

        /* spotlight */
        .ec-spotlight {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 70%;
          pointer-events: none;
          z-index: 1;
          background: radial-gradient(
            ellipse at 50% 0%,
            rgba(255,255,255,0.05) 0%,
            rgba(255,200,100,0.025) 35%,
            transparent 65%
          );
          transition: opacity 0.8s ease;
        }

        /* ── TV / SCREEN ── */
        .ec-screen {
          flex: 1;
          margin: clamp(0.75rem, 2vh, 1.5rem) clamp(2.5rem, 6vw, 5rem) 0;
          border-radius: 1rem 1rem 0 0;
          background: #0d0910;
          border: 1px solid rgba(255,255,255,0.04);
          border-bottom: none;
          position: relative;
          z-index: 2;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.08) transparent;
          display: flex;
          flex-direction: column;
        }

        .ec-content {
          flex: 1;
          padding: clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 5vw, 4rem);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* phase label */
        .ec-phase-tag {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: var(--accent);
          opacity: 0.7;
        }

        .ec-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.6rem, 4vw, 3rem);
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          line-height: 1.1;
          color: #f0ece4;
        }

        .ec-rule {
          width: 40px;
          height: 1px;
          background: var(--accent);
          opacity: 0.4;
        }

        .ec-text-block {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
        .ec-text-block p {
          font-size: clamp(1rem, 1.5vw, 2.15rem);
          line-height: 1.85;
          color: rgba(240,236,228,0.7);
          font-weight: 300;
        }

        .ec-image {
          border-radius: 0.75rem;
          max-width: 100%;
          max-height: 580px;
          object-fit: cover;
          align-self: flex-start;
          box-shadow: 0 30px 80px rgba(0,0,0,0.8);
          border: 1px solid rgba(255,255,255,0.06);
        }

        /* ── CONTROLS ── */
        .ec-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(0.75rem, 2vh, 1.25rem) clamp(2.5rem, 6vw, 5rem);
          background: rgba(6,3,10,0.8);
          border-top: 1px solid rgba(255,255,255,0.04);
          z-index: 2;
          backdrop-filter: blur(10px);
          position: relative;
        }

        .ec-progress {
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .ec-pip {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: transparent;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .ec-pip.active {
          background: var(--accent);
          border-color: var(--accent);
          box-shadow: 0 0 6px var(--accent);
        }
        .ec-pip:hover { border-color: rgba(255,255,255,0.5); }

        .ec-btn-group { display: flex; gap: 0.75rem; }

        .ec-btn {
          padding: 0.55rem 1.5rem;
          border-radius: 999px;
          border: 10px solid rgba(255,255,255,0.12);
          background: transparent;
          color: rgba(240,236,228,0.6);
          font-family: 'Cinzel', serif;
          font-size: 1.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .ec-btn:hover:not(:disabled) {
          color: #f0ece4;
          border-color: rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.04);
        }
        .ec-btn:disabled { opacity: 0.2; cursor: default; }

        .ec-btn-next {
          background: var(--accent);
          border-color: transparent;
          color:rgb(158, 158, 158);
          font-weight: 700;
          box-shadow: 0 6px 24px rgba(0,0,0,0.5);
        }
        .ec-btn-next:hover:not(:disabled) {
          filter: brightness(1.1);
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
          background: var(--accent);
          border-color: transparent;
          color: #0a0608;
          transform: translateY(-1px);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .ec-toggle  { display: flex; }
          .ec-overlay { display: block; }

          .ec-sidebar {
            position: fixed;
            top: 0; left: 0;
            height: 100dvh;
            width: 280px;
            transform: translateX(-100%);
            box-shadow: 4px 0 40px rgba(0,0,0,0.8);
          }
          .ec-sidebar.open { transform: translateX(0); }
          .ec-overlay { pointer-events: none; opacity: 0; transition: opacity 0.3s ease; }
          .ec-overlay.open { pointer-events: auto; opacity: 1; }

          .ec-stage::before,
          .ec-stage::after { display: none; }

          .ec-screen { margin: 0; border-radius: 0; border: none; }
          .ec-content { padding: 1.5rem 1.25rem 1rem; padding-top: 3.5rem; }
          .ec-controls { padding: 0.75rem 1.25rem; }
          .ec-progress { display: none; }

            .ec-text-block p {
    font-size: clamp(1.1rem, 4.2vw, 3.35rem);
    line-height: 1.9;
  }

  .ec-title {
    font-size: clamp(1.8rem, 6vw, 2.4rem);
  }

  .ec-phase-tag {
    font-size: 0.7rem;
    letter-spacing: 0.32em;
  }
        }
      `}</style>

      <div
        className={`ec-shell`}
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
          <Link to="/" className="ec-logo">Elysian Code</Link>
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
          <button className="ec-toggle" onClick={() => setNavOpen(true)}>☰</button>

          {/* Screen */}
          <div className="ec-screen">
            <div className="ec-content">
              <p className="ec-phase-tag">
                {section.phase === "intro" ? "Introduction" : "Code-L · Phase 1"}
              </p>
              <h1 className="ec-title">{section.title}</h1>
              <div className="ec-rule" />
              <div className="ec-text-block">
                {section.text.map((line, i) => <p key={i}>{line}</p>)}
              </div>
              {section.video ? (
  <video
    className="ec-image"
    src={section.video}
    controls
    playsInline
  />
) : section.image ? (
  <img
    src={section.image}
    alt={section.title}
    className="ec-image"
  />
) : null}
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
                onClick={() => setIndex(Math.min(sections.length - 1, index + 1))}
                disabled={index === sections.length - 1}
              >
                Next →
              </button>
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