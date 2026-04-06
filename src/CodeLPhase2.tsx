import { Link } from "react-router-dom";
import { useState, useRef, useMemo } from "react";

const sections = [
  {
    title: "June 1st — Ellys Breaks the Cave Door",
    kicker: "Code-L · Phase 2 · The Escape",
    text: [
      "At 8pm, the gated door breaks open.",
      `Ellys: “Lady Domina, i am here to take you with me. I found it. I found immortality. we no longer have to worry about death, together we can live for eternity. Sheltered from Ahriman’s scarecrows fed on our flesh.”`,
      `Lady Dopamina: “Oh silly child. who told you that immortality is for you. You should had stayed in your place next time. Come and take a seat, the blue light can guide you. You wont ever need to look outside.”`,
      `Ellys: “But it’s true. Elco promised it to me. There can be a whole world outside of the blue light in this cave that we see. She can give it to you and to other Arcadians alike. She resides on ELSPARK, on an island away from Ahriman’s greedy mind.”`,
      `Lady Domina: “They will always come back to the cave, it’s safe and accessible. You speak utopian, in a dystopian world.”`,
      `Ellys: “Shouldn’t they at least explore what lies outside to see if they like it? They deserve to have a vote. They deserve to participate in the distribution of gold. Shouldn’t they consider looking at alternatives to this cave? Or will they carry on being imprisoned algorithmic prey.”`,
      "Lady Domina: “No they cant.” — (closes door, wolves come out from dungeon)",
      `Ellys: “Why wont you let them go? What is your ultimate goal? Food for the wolves are you looking for? Ahriman is lying to you, he will come to kill you next.”`,
      `Lady Dopamina (chains him): “Pleasure is the highest form of luxury, I will show it to you crystal clear if you dont want to adhere.” — (stabs him three times)`,
    ],
    video: "/escape.avi",
  },
  {
    title: "Puppeteer Kills Ellys, While He Sings 'My Heart Can't Take Another Bleed'",
    kicker: "Code-L · Phase 2 · The Song",
    text: [
      "Chained and stabbed by Dopamina, Ellys starts to sing.",
    ],
    image: "/Ellys-chained.png",
    lyrics: [
      "Verse 1",
      "“urgency, urgency! my heart cant take another bleed.",
      "Ahriman’s war, threatens to kill our inner kids.",
      "urgency, urgency! a scar she stabbed for my blood to freeze.",
      "Bases she built on my heart, without my permit.”",
      "",
      "Verse 2",
      "“dizzy boy I thought I found her",
      "the one to be with me when it darkens.",
      "foolish of me to trust the puppeteer.",
      "this cave we need to leave, she sold us the wrong idea.",
      "",
      "my hand i extend to the monarch inside",
      "ego laid the soil for the self now to drive.",
      "foolish of me to let you inside my gear,",
      "we could had sailed away, the sea feels so sincere.”",
      "",
      "Verse 3",
      "“I strip myself from all my fears.",
      "I choose to escape, to this trap I will not adhere.",
      "they are lying to you, Ahriman, and his wolves are here.",
      "come come escape with me away from the slaughter. mental guillotina.”",
      "",
      "Verse 4",
      "“Our attention turned into a mechanical coil",
      "we cant speak from God, our brains have no choice.",
      "I refuse to stay, to an algorithm to obey.",
      "where does the surplus go why do I have to slave, for the wolves to eat the cake?",
      "power to the people, a laocratic world.",
      "we dont need violence, we need new ecosystems.",
      "we need infrastructures to distribute gold.",
      "then ahriman has no worth, then ahriman has no worth.”",
      "",
      "(Action) Ellys sings directly to Lady Dopamina, while he is bleeding.",
      "",
      "Verse 5",
      "“light a spark and throw it down my spine,",
      "you can start a wildfire when you smile.",
      "melt my heart, possess me if you want me",
      "I try to lift the anchor, my hand you are holding",
      "how can we sail to a new life? to a system I dont believe in, I wont oblige.",
      "I choose not to stay to this cave here to hide.",
      "my hand let go, I choose to take control",
      "the wheel i rotated, I lift the anchor for the sea I sail",
      "looking for a new world, i welcome you to come with me",
      "the tides we face but we stay still, whether you come or not,",
      "from this cave I will still go, thank you for the lessons you have given me,",
      "my heart cannot bleed no more.’”",
      "",
      "(Action) Ellys dies.",
    ],
    audio: "/MHCTAB19.wav",
  },
  {
    title: "Prisoners Escape",
    kicker: "Code-L · Phase 2 · The Flight",
    text: [
      "People can escape from the cave and while exploring outside, some residents from ELSPARK are there to greet them and guide them to the island of Pandora.",
      "They can sail a boat to ELSPARK where they can join a new decentralised society. Residents are granted immortality and a safe shelter for when they go to sleep.",
    ],
    image: "/boat.png",
  },
  {
    title: "ELSPARK",
    kicker: "Destination · Island of Pandora",
    text: [
      "Ellys wakes up on ELSPARK.",
      "A decentralised park on the island of Pandora, free from Ahriman’s control or visibility.",
      "Hosted by Elco, it offers a new laocratic environment, where questions are posed every month and residents can vote, with everyone’s votes holding the same weight.",
      "ELSPARK also offers people who sign up a safe shelter to sleep when their consciousness is away.",
      "Fully protected from Ahriman’s scarecrows or wolves.",
    ],
 
  },
  {
    title: "Enter ELSPARK",
    kicker: "Destination · Island of Pandora",
    text: [
      "Explore the social digital park's position in Arcadia and Earth",
    ],
    isLast: true,
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
  }

  body {
    background:
      radial-gradient(circle at 50% 0%, rgba(140,224,255,0.14), transparent 24%),
      radial-gradient(circle at 20% 15%, rgba(240,215,161,0.08), transparent 18%),
      linear-gradient(180deg, var(--bg), var(--bg2));
    color: var(--text);
    font-family: Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif;
  }

  .p2-paper {
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .p2-paper::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.45) 100%),
      linear-gradient(to bottom, rgba(255,255,255,0.03), transparent 18%, transparent 82%, rgba(255,255,255,0.02));
    z-index: 0;
  }

  .p2-inner {
    position: relative;
    z-index: 1;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1.25rem 4rem;
  }

  .p2-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2.2rem;
  }

  .p2-back {
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

  .p2-back:hover {
    color: #fff;
    transform: translateX(-2px);
  }

  .p2-chip {
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

  .p2-chip-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 18px rgba(140,224,255,0.8);
  }

  .p2-hero {
    min-height: 38vh;
    display: grid;
    place-items: center;
    text-align: center;
    padding: 2rem 0 3rem;
  }

  .p2-flag {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(2.8rem, 8vw, 6rem);
    line-height: 0.95;
    letter-spacing: -0.04em;
    font-weight: 700;
    text-wrap: balance;
    text-shadow: 0 0 24px rgba(255,255,255,0.05);
  }

  .p2-hero-sub {
    max-width: 62ch;
    margin: 1.1rem auto 0;
    color: var(--muted);
    font-size: clamp(1rem, 2vw, 1.15rem);
    line-height: 1.65;
  }

  .p2-meta {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: rgba(255,255,255,0.02);
    backdrop-filter: blur(16px);
  }

  .p2-meta-item {
    padding: 1rem;
    text-align: center;
    border-right: 1px solid var(--line);
  }

  .p2-meta-item:last-child { border-right: none; }

  .p2-meta-num {
    display: block;
    font-family: "Playfair Display", serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text);
    line-height: 1;
  }

  .p2-meta-label {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--muted2);
  }

  .p2-layout {
    display: grid;
    grid-template-columns: 240px minmax(0, 1fr);
    gap: 1.25rem;
    margin-top: 3rem;
    align-items: start;
  }

  .p2-nav {
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

  .p2-nav-label {
    font-size: 0.68rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--muted2);
    margin-bottom: 0.35rem;
  }

  .p2-nav-btn {
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

  .p2-nav-btn:hover {
    background: rgba(255,255,255,0.05);
    color: #fff;
  }

  .p2-nav-btn.active {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.1);
    color: #fff;
  }

  .p2-stage {
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

  .p2-article {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
    animation: p2SlideIn 0.45s cubic-bezier(0.25,0.46,0.45,0.94) both;
  }

  @keyframes p2SlideIn {
    from { transform: translateX(24px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  .p2-numeral {
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

  .p2-vline {
    width: 1px;
    background: var(--line);
    align-self: stretch;
    flex-shrink: 0;
  }

  .p2-body {
    flex: 1;
    min-width: 0;
  }

  .p2-kicker {
    font-size: 0.72rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.52);
    margin-bottom: 0.7rem;
  }

  .p2-headline {
    font-family: "Playfair Display", serif;
    font-size: clamp(1.8rem, 4.8vw, 3rem);
    line-height: 1.08;
    letter-spacing: -0.03em;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #fff;
    max-width: 16ch;
  }

  .p2-rule {
    width: 64px;
    height: 1px;
    background: linear-gradient(90deg, rgba(255,255,255,0.9), transparent);
    margin-bottom: 1.2rem;
  }

  .p2-media {
    width: 100%;
    max-height: 520px;
    object-fit: cover;
    border-radius: 20px;
    border: 1px solid var(--line);
    margin-bottom: 1.5rem;
    display: block;
  }

  .p2-body-text {
    display: flex;
    flex-direction: column;
    gap: 0.95rem;
    margin-bottom: 1.5rem;
    max-width: 72ch;
  }

  .p2-body-text p {
    font-size: clamp(1rem, 2vw, 1.08rem);
    line-height: 1.8;
    color: var(--muted);
  }

  .p2-body-text p:first-child {
    color: rgba(245,245,245,0.92);
    font-size: clamp(1.03rem, 2vw, 1.12rem);
  }

  .p2-lyrics-label {
    font-family: "Playfair Display", serif;
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.55);
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid var(--line);
  }

  .p2-lyrics {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1.5rem;
    padding: 1.25rem 1.5rem;
    border-left: 2px solid rgba(140,224,255,0.5);
    background: rgba(255,255,255,0.03);
    border-radius: 0 16px 16px 0;
  }

  .p2-lyrics p {
    font-size: clamp(15px, 2vw, 17px);
    line-height: 1.8;
    color: rgba(245,245,245,0.82);
    font-style: italic;
    font-weight: 300;
  }

  .p2-lyrics p:empty { height: 0.6rem; }

  .p2-lyrics .p2-verse-label {
    font-family: Inter, sans-serif;
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.45);
    font-style: normal;
    margin-top: 0.5rem;
  }

  .p2-lyrics .p2-action {
    font-family: Inter, sans-serif;
    font-size: 12px;
    letter-spacing: 0.1em;
    color: rgba(245,245,245,0.6);
    font-style: normal;
    text-transform: uppercase;
  }

  .p2-audio {
    width: 100%;
    margin-bottom: 1.5rem;
    accent-color: #8ce0ff;
  }

  .p2-signal {
    font-size: 0.68rem;
    letter-spacing: 0.34em;
    text-transform: uppercase;
    color: rgba(245,245,245,0.38);
    margin-top: 1.5rem;
  }

  .p2-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.4rem;
    padding-top: 1.2rem;
    border-top: 1px solid var(--line);
  }

  .p2-ctrl-btn {
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

  .p2-ctrl-btn:hover:not(:disabled) {
    color: #fff;
    border-color: rgba(140,224,255,0.25);
    background: rgba(255,255,255,0.04);
  }

  .p2-ctrl-btn:disabled {
    opacity: 0.28;
    cursor: default;
  }

  .p2-ctrl-btn.primary {
    background: rgba(255,255,255,0.08);
    color: #fff;
  }

  .p2-pips {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .p2-pip {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid rgba(245,245,245,0.35);
    background: transparent;
    cursor: pointer;
    transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease;
  }

  .p2-pip.active {
    background: #fff;
    border-color: #fff;
    transform: scale(1.08);
  }

  .p2-cta {
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

  .p2-cta:hover {
    transform: translateY(-1px);
    background: rgba(140,224,255,0.12);
    border-color: rgba(140,224,255,0.4);
  }

  .p2-footer-meta {
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
    .p2-layout {
      grid-template-columns: 1fr;
    }

    .p2-nav {
      position: static;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .p2-nav-label {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    .p2-inner {
      padding: 1rem 0.9rem 3rem;
    }

    .p2-hero {
      min-height: 28vh;
      padding: 2rem 0 2.25rem;
    }

    .p2-meta {
      grid-template-columns: 1fr;
    }

    .p2-meta-item {
      border-right: none;
      border-bottom: 1px solid var(--line);
    }

    .p2-meta-item:last-child {
      border-bottom: none;
    }

    .p2-stage {
      padding: 1rem;
      border-radius: 22px;
    }

    .p2-article {
      flex-direction: column;
      gap: 0.8rem;
    }

    .p2-numeral {
      text-align: left;
      min-width: auto;
    }

    .p2-vline {
      display: none;
    }

    .p2-controls {
      flex-direction: column;
      align-items: stretch;
    }

    .p2-pips {
      order: -1;
    }

    .p2-footer-meta {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

const toRoman = (n: number): string => {
  const map = ["I", "II", "III", "IV"];
  return map[n] || String(n + 1);
};

const isVerseLabel = (line: string) => /^verse\s+\d+/i.test(line.trim());
const isAction = (line: string) => line.trim().startsWith("(Action)") || line.trim().startsWith("(action)");

export default function CodeLPhase2() {
  const [index, setIndex] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const section = useMemo(() => sections[index], [index]);
  const isLast = index === sections.length - 1;

  const goTo = (i: number) => {
    setIndex(i);
    window.setTimeout(() => {
      bodyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="p2-paper">
        <div className="p2-inner">
          <div className="p2-topbar">
            <Link to="/" className="p2-back">← All Worlds</Link>
            <div className="p2-chip">
              <span className="p2-chip-dot" />
              Code-L Phase 2
            </div>
          </div>

          <header className="p2-hero">
            <div>
              <div className="p2-flag">The Arcadian Record</div>
              <p className="p2-hero-sub">
                The escape sequence, staged like a keynote reveal: tension, performance, collapse, and the opening of a new world.
              </p>
            </div>
          </header>

          <section className="p2-meta" aria-label="Phase overview">
            <div className="p2-meta-item">
              <span className="p2-meta-num">04</span>
              <span className="p2-meta-label">Scenes</span>
            </div>
            <div className="p2-meta-item">
              <span className="p2-meta-num">02</span>
              <span className="p2-meta-label">Phase</span>
            </div>
            <div className="p2-meta-item">
              <span className="p2-meta-num">∞</span>
              <span className="p2-meta-label">Lore Threads</span>
            </div>
          </section>

          <div className="p2-layout">
            <nav className="p2-nav" aria-label="Phase sections">
              <div className="p2-nav-label">Sections</div>
              {sections.map((sec, i) => (
                <button
                  key={i}
                  className={`p2-nav-btn ${i === index ? "active" : ""}`}
                  onClick={() => goTo(i)}
                  type="button"
                >
                  {sec.title}
                </button>
              ))}
            </nav>

            <main className="p2-stage">
              <article className="p2-article" key={index} ref={bodyRef}>
                <div className="p2-numeral">{toRoman(index)}</div>
                <div className="p2-vline" />
                <div className="p2-body">
                  <div className="p2-kicker">{section.kicker}</div>
                  <h1 className="p2-headline">{section.title}</h1>
                  <div className="p2-rule" />

                  {section.video && (
                    <video
                      className="p2-media"
                      src={section.video}
                      controls
                      playsInline
                    />
                  )}

                  {section.image && !section.video && (
                    <img
                      src={section.image}
                      alt={section.title}
                      className="p2-media"
                    />
                  )}

                  {section.text && section.text.length > 0 && (
                    <div className="p2-body-text">
                      {section.text.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  )}

                  {section.audio && (
                    <audio
                      controls
                      src={section.audio}
                      className="p2-audio"
                    />
                  )}

                  {section.lyrics && (
                    <>
                      <div className="p2-lyrics-label">Lyrics</div>
                      <div className="p2-lyrics">
                        {section.lyrics.map((line, i) => {
                          if (isVerseLabel(line)) {
                            return <p key={i} className="p2-verse-label">{line}</p>;
                          }
                          if (isAction(line)) {
                            return <p key={i} className="p2-action">{line}</p>;
                          }
                          return <p key={i}>{line}</p>;
                        })}
                      </div>
                    </>
                  )}

                  {section.isLast && (
                    <Link to="/elspark" className="p2-cta">
                      Enter ELSPARK →
                    </Link>
                  )}

                  <p className="p2-signal">/// Signal Stable · Code-L Active ///</p>

                  <div className="p2-controls">
                    <button
                      className="p2-ctrl-btn"
                      onClick={() => goTo(Math.max(0, index - 1))}
                      disabled={index === 0}
                      type="button"
                    >
                      ← Previous
                    </button>

                    <div className="p2-pips" aria-label="Section dots">
                      {sections.map((_, i) => (
                        <button
                          key={i}
                          className={`p2-pip ${i === index ? "active" : ""}`}
                          onClick={() => goTo(i)}
                          type="button"
                          aria-label={`Go to section ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      className={`p2-ctrl-btn ${!isLast ? "primary" : ""}`}
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

          <div className="p2-footer-meta">
            <span>Elysian Code</span>
            <span>All worlds connected</span>
            <span>Arcadia Standard Time</span>
          </div>
        </div>
      </div>
    </>
  );
}