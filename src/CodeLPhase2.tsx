import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const sections = [
  {
    title: "June 1st \u2014 Ellys Breaks the Cave Door",
    kicker: "Code-L \u00b7 Phase 2 \u00b7 The Escape",
    text: [
      "At 8pm, the gated door breaks open.",
      `Ellys: \u201cLady Domina, i am here to take you with me. I found it. I found immortality. we no longer have to worry about death, together we can live for eternity. Sheltered from Ahriman\u2019s scarecrows fed on our flesh.\u201d`,
      `Lady Dopamina: \u201cOh silly child. who told you that immortality is for you. You should had stayed in your place next time. Come and take a seat, the blue light can guide you. You wont ever need to look outside.\u201d`,
      `Ellys: \u201cBut it\u2019s true. Elco promised it to me. There can be a whole world outside of the blue light in this cave that we see. She can give it to you and to other Arcadians alike. She resides on ELSPARK, on an island away from Ahriman\u2019s greedy mind.\u201d`,
      `Lady Domina: \u201cThey will always come back to the cave, it\u2019s safe and accessible. You speak utopian, in a dystopian world.\u201d`,
      `Ellys: \u201cShouldn\u2019t they at least explore what lies outside to see if they like it? They deserve to have a vote. They deserve to participate in the distribution of gold. Shouldn\u2019t they consider looking at alternatives to this cave? Or will they carry on being imprisoned algorithmic prey.\u201d`,
      "Lady Domina: \u201cNo they cant.\u201d \u2014 (closes door, wolves come out from dungeon)",
      `Ellys: \u201cWhy wont you let them go? What is your ultimate goal? Food for the wolves are you looking for? Ahriman is lying to you, he will come to kill you next.\u201d`,
      `Lady Dopamina (chains him): \u201cPleasure is the highest form of luxury, I will show it to you crystal clear if you dont want to adhere.\u201d \u2014 (stabs him three times)`,
    ],
    video: "/escape.avi",
  },
  {
    title: "Puppeteer Kills Ellys, While He Sings 'My Heart Can't Take Another Bleed'",
    kicker: "Code-L \u00b7 Phase 2 \u00b7 The Song",
    text: [
      "Chained and stabbed by Dopamina, Ellys starts to sing.",
    ],
    image: "/Ellys-chained.png",
    lyrics: [
      "Verse 1",
      "\u201curgency, urgency! my heart cant take another bleed.",
      "Ahriman\u2019s war, threatens to kill our inner kids.",
      "urgency, urgency! a scar she stabbed for my blood to freeze.",
      "Bases she built on my heart, without my permit.\u201d",
      "",
      "Verse 2",
      "\u201cdizzy boy I thought I found her",
      "the one to be with me when it darkens.",
      "foolish of me to trust the puppeteer.",
      "this cave we need to leave, she sold us the wrong idea.",
      "",
      "my hand i extend to the monarch inside",
      "ego laid the soil for the self now to drive.",
      "foolish of me to let you inside my gear,",
      "we could had sailed away, the sea feels so sincere.\u201d",
      "",
      "Verse 3",
      "\u201cI strip myself from all my fears.",
      "I choose to escape, to this trap I will not adhere.",
      "they are lying to you, Ahriman, and his wolves are here.",
      "come come escape with me away from the slaughter. mental guillotina.\u201d",
      "",
      "Verse 4",
      "\u201cOur attention turned into a mechanical coil",
      "we cant speak from God, our brains have no choice.",
      "I refuse to stay, to an algorithm to obey.",
      "where does the surplus go why do I have to slave, for the wolves to eat the cake?",
      "power to the people, a laocratic world.",
      "we dont need violence, we need new ecosystems.",
      "we need infrastructures to distribute gold.",
      "then ahriman has no worth, then ahriman has no worth.\u201d",
      "",
      "(Action) Ellys sings directly to Lady Dopamina, while he is bleeding.",
      "",
      "Verse 5",
      "\u201clight a spark and throw it down my spine,",
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
      "my heart cannot bleed no more.\u2019\u201d",
      "",
      "(Action) Ellys dies.",
    ],
    audio: "/MHCTAB19.wav",
  },
  {
    title: "Prisoners Escape",
    kicker: "Code-L \u00b7 Phase 2 \u00b7 The Flight",
    text: [
      "People can escape from the cave and while exploring outside, some residents from ELSPARK are there to greet them and guide them to the island of Pandora.",
      "They can sail a boat to ELSPARK where they can join a new decentralised society. Residents are granted immortality and a safe shelter for when they go to sleep.",
    ],
    image: "/boat.png",
  },
  {
    title: "ELSPARK",
    kicker: "Destination \u00b7 Island of Pandora",
    text: [
      "Ellys wakes up on ELSPARK.",
      "A decentralised park on the island of Pandora, free from Ahriman\u2019s control or visibility.",
      "Hosted by Elco, it offers a new laocratic environment, where questions are posed every month and residents can vote, with everyone\u2019s votes holding the same weight.",
      "ELSPARK also offers people who sign up a safe shelter to sleep when their consciousness is away.",
      "Fully protected from Ahriman\u2019s scarecrows or wolves.",
    ],
    isLast: true,
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=IM+Fell+English:ital@0;1&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .p2-paper {
    background: #fff;
    font-family: 'IM Fell English', Georgia, serif;
    color: #1a1a1a;
    min-height: 100vh;
    width: 100%;
  }

  .p2-inner {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    border-left: 0.5px solid #ddd;
    border-right: 0.5px solid #ddd;
    min-height: 100vh;
  }

  .p2-back {
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
  .p2-back:hover { color: #1a1a1a; }

  .p2-masthead {
    text-align: center;
    border-bottom: 3px double #1a1a1a;
    padding-bottom: 0.75rem;
    margin-bottom: 0.4rem;
  }

  .p2-flag {
    font-family: 'UnifrakturMaguntia', cursive;
    font-size: clamp(2.4rem, 7vw, 4.8rem);
    line-height: 1;
    color: #1a1a1a;
  }

  .p2-meta {
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

  .p2-section-rule {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 1.5rem 0 1rem;
  }
  .p2-section-rule span {
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #888;
    white-space: nowrap;
  }
  .p2-section-rule::before,
  .p2-section-rule::after {
    content: '';
    flex: 1;
    height: 0.5px;
    background: #bbb;
  }

  .p2-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 0.5px solid #e0e0e0;
  }

  .p2-nav-btn {
    font-family: Georgia, serif;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 5px 12px;
    border: 0.5px solid #ccc;
    border-radius: 2px;
    background: transparent;
    color: #666;
    cursor: pointer;
    transition: all 0.18s ease;
  }
  .p2-nav-btn:hover { border-color: #1a1a1a; color: #1a1a1a; }
  .p2-nav-btn.active { background: #1a1a1a; color: #fff; border-color: #1a1a1a; }

  .p2-article {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    animation: p2SlideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes p2SlideIn {
    from { transform: translateX(40px); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
  }

  .p2-numeral {
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

  .p2-vline {
    width: 0.5px;
    background: #e0e0e0;
    align-self: stretch;
    flex-shrink: 0;
  }

  .p2-body {
    flex: 1;
    min-width: 0;
  }

  .p2-kicker {
    font-size: 12px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #888;
    font-family: Georgia, serif;
    margin-bottom: 0.5rem;
  }

  .p2-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }

  .p2-rule {
    width: 48px;
    height: 1px;
    background: #1a1a1a;
    margin-bottom: 1.25rem;
  }

  .p2-media {
    width: 100%;
    max-height: 520px;
    object-fit: cover;
    border-radius: 2px;
    border: 0.5px solid #e0e0e0;
    margin-bottom: 1.5rem;
    display: block;
  }

  .p2-body-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .p2-body-text p {
    font-size: clamp(16px, 2.2vw, 18px);
    line-height: 1.85;
    color: #333;
    font-style: italic;
    font-weight: 300;
  }

  .p2-body-text p:first-child {
    font-size: clamp(17px, 2.5vw, 19px);
    font-style: normal;
    font-weight: 400;
    color: #1a1a1a;
  }

  /* Lyrics block */
  .p2-lyrics-label {
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    border-bottom: 0.5px solid #e0e0e0;
  }

  .p2-lyrics {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1.5rem;
    padding: 1.25rem 1.5rem;
    border-left: 2px solid #e0e0e0;
    background: #fafaf8;
  }

  .p2-lyrics p {
    font-size: clamp(15px, 2vw, 17px);
    line-height: 1.8;
    color: #444;
    font-style: italic;
    font-weight: 300;
  }

  .p2-lyrics p:empty {
    height: 0.6rem;
  }

  .p2-lyrics .p2-verse-label {
    font-family: Georgia, serif;
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #aaa;
    font-style: normal;
    margin-top: 0.5rem;
  }

  .p2-lyrics .p2-action {
    font-family: Georgia, serif;
    font-size: 12px;
    letter-spacing: 0.1em;
    color: #999;
    font-style: normal;
    text-transform: uppercase;
  }

  .p2-audio {
    width: 100%;
    margin-bottom: 1.5rem;
    accent-color: #1a1a1a;
  }

  .p2-signal {
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #bbb;
    text-align: center;
    margin: 2rem 0;
  }

  .p2-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.5rem;
    padding-top: 1rem;
    border-top: 0.5px solid #e0e0e0;
  }

  .p2-ctrl-btn {
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
  .p2-ctrl-btn:hover:not(:disabled) { border-color: #1a1a1a; color: #1a1a1a; }
  .p2-ctrl-btn:disabled { opacity: 0.25; cursor: default; }
  .p2-ctrl-btn.primary { background: #1a1a1a; color: #fff; border-color: #1a1a1a; }
  .p2-ctrl-btn.primary:hover { background: #333; }

  .p2-pips {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .p2-pip {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 0.5px solid #bbb;
    background: transparent;
    cursor: pointer;
    transition: all 0.18s ease;
  }
  .p2-pip.active { background: #1a1a1a; border-color: #1a1a1a; }

  .p2-cta {
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
  .p2-cta:hover { background: #1a1a1a; color: #fff; }

  .p2-footer-meta {
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
    .p2-article { flex-direction: column; gap: 0.75rem; }
    .p2-numeral { font-size: 2.5rem; text-align: left; }
    .p2-vline { display: none; }
    .p2-meta { font-size: 10px; flex-wrap: wrap; justify-content: center; text-align: center; gap: 4px; }
    .p2-lyrics { padding: 1rem; }
  }
`;

const toRoman = (n: number): string => {
  const map = ["I","II","III","IV"];
  return map[n] || String(n + 1);
};

const isVerseLabel = (line: string) =>
  /^verse\s+\d+/i.test(line.trim());

const isAction = (line: string) =>
  line.trim().startsWith("(Action)") || line.trim().startsWith("(action)");

export default function CodeLPhase2() {
  const [index, setIndex] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const section = sections[index];
  const isLast = index === sections.length - 1;

  const goTo = (i: number) => {
    setIndex(i);
    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="p2-paper">
        <div className="p2-inner">

          {/* Back */}
          <Link to="/" className="p2-back">← All Worlds</Link>

          {/* Masthead */}
          <div className="p2-masthead">
            <div className="p2-flag">The Arcadian Record</div>
          </div>
          <div className="p2-meta">
            <span>Code-L Dispatch · Phase 2</span>
            <span>The Escape · June 1st</span>
            <span>All Frames Recorded</span>
          </div>

          <div className="p2-section-rule">
            <span>Code-L — Phase 2 · The Escape</span>
          </div>

          {/* Chapter nav */}
          <nav className="p2-nav">
            {sections.map((sec, i) => (
              <button
                key={i}
                className={`p2-nav-btn ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
              >
                {sec.title}
              </button>
            ))}
          </nav>

          {/* Article */}
          <div className="p2-article" key={index} ref={bodyRef}>
            <div className="p2-numeral">{toRoman(index)}</div>
            <div className="p2-vline" />
            <div className="p2-body">
              <div className="p2-kicker">{section.kicker}</div>
              <h1 className="p2-headline">{section.title}</h1>
              <div className="p2-rule" />

              {/* Video */}
              {section.video && (
                <video
                  className="p2-media"
                  src={section.video}
                  controls
                  playsInline
                />
              )}

              {/* Image */}
              {section.image && !section.video && (
                <img
                  src={section.image}
                  alt={section.title}
                  className="p2-media"
                />
              )}

              {/* Body text */}
              {section.text && section.text.length > 0 && (
                <div className="p2-body-text">
                  {section.text.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}

              {/* Audio */}
              {section.audio && (
                <audio
                  controls
                  src={section.audio}
                  className="p2-audio"
                />
              )}

              {/* Lyrics */}
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

              {/* ELSPARK CTA on last section */}
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
                >
                  ← Previous
                </button>

                <div className="p2-pips">
                  {sections.map((_, i) => (
                    <div
                      key={i}
                      className={`p2-pip ${i === index ? "active" : ""}`}
                      onClick={() => goTo(i)}
                    />
                  ))}
                </div>

                <button
                  className={`p2-ctrl-btn ${!isLast ? "primary" : ""}`}
                  onClick={() => goTo(Math.min(sections.length - 1, index + 1))}
                  disabled={isLast}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

          <div className="p2-footer-meta">
            <span>Elysian Code</span>
            <span>· · ·</span>
            <span>All worlds connected</span>
          </div>

        </div>
      </div>
    </>
  );
}