import { Link } from "react-router-dom";
import "./EllysCode.css";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Data Types ────────────────────────────────────────────────────────────────

type SongEntry = {
  title: string;
  act: "I" | "II";
  story?: string[];
  lyrics?: string[][];
  directions?: string[];
  audio?: string;
  soundcloud?: string;
};

// ─── Song Data ─────────────────────────────────────────────────────────────────

const SONGS: SongEntry[] = [
  {
    title: "preface",
    act: "II",
    story: [
      "The birth of the red butterfly symbolised Elly's conscious awakening in the physical world.",
      "With ACT I exploring his spiritual transformation from a caterpillar to a butterfly, he now wakes up inside of Ahriman's cave and realises it's a trap.",
    ],
    directions: ["/// AWAKENING ///"],
    audio: "/audio/red-butterfly-rebirth.wav",
  },

  {
    title: "Red Butterfly",
    act: "II",
    story: [
      "Ellys awakens in Ahriman's prison cave.",
      "He sees the blue screens hypnotizing people around and realises there is life outside the cave.",
      "He prays to Elco who orchestrates a storm, breaking the wall where he sees the sea for the first time. His perfect time to escape.",
    ],
    soundcloud:
      "//soundcloud.com/conscious-entropy/red-butterfly?in=conscious-entropy/sets/red-butterfly&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },

  {
    title: "Arcadian Hawai",
    act: "II",
    story: [
      "In his ElCave he finds freedom to express, create and plan how to find ELSPARK.",
      "Sets sail for true freedom. ELSPARK calls.",
    ],
    directions: ["/// ILLUSION BROKEN ///"],
    audio: "/audio/arcadia-hawai.wav",
  },

  {
    title: "Passive Slave of Dopamine",
    act: "II",
    story: [
      "On his pursuit to ELSPARK he finds a job at a garden, responsible to treat the wheats.",
      "He builds biggest seeds they have seen, which he finds out Lord Beauraux would come and collect it.",
      "Ellys picks it up and travels to ELSPARK where he plants them to become mooshis.",
    ],
    directions: ["/// ILLUSION BROKEN ///"],
    audio: "/audio/arcadia-hawai.wav",
  },

  {
    title: "Idle Saint, Flawed Idols",
    act: "II",
    story: [
      "On his pursuit to find the way to reach ELSPARK he seeks for guidance and doesnt know who to pray to.",
    ],
    directions: ["/// SPIRITUAL CONFUSION ///"],
    audio: "/audio/arcadia-hawai.wav",
  },

  {
    title: "Buddha Buddha Come Rescue Me",
    act: "II",
    story: [
      "He finds boat and sails to ELSPARK.",
    ],
    audio: "/audio/arcadia-hawai.wav",
  },

  {
    title: "My Heart Can't Take Another Bleed",
    act: "II",
    story: [
      "At 8pm on June 1st, the gated door breaks open, Ellys breaking in. ",
      "Ellys:",
      "Lady Dopamina, i am here to take you with me. I found it. I found immortality. we no longer have to worry about death, together we can live for eternity. Sheltered from Ahriman's scarecrows fed on our flesh. ",
      "Lady Dopamina :",
      "”Oh silly child. who told you that immortality is for you. You should had stayed in your place next time. Come and take a seat, the blue light can guide you. You wont ever need to look outside.",
    "Ellys:",
 "But it’s true. Elco promised it to me. There can be a whole world outside of the blue light in this cave that we see. She can give it to you and to other Arcadians alike. She resides on ELSPARK, on an island away from Ahriman’s greedy mind.",
"Lady Domina:","They will always come back to the cave, it’s safe and accessible. You speak utopian, in a dystopian world.”.",
"Ellys:",
"Shouldn’t they at least explore what lies outside to see if they like it? They deserve to have a vote. They deserve to participate in the distribution of gold . Shouldn’t they consider looking at alternatives to this cave? Or will they carry on being emprisoned algorithmic prey."
,"Lady Domina:",
"No they cant” - (closes door and wolves come out from dungeon)",
"Ellys:",
"Why wont you let them go? What is your ultimate goal? Food for the wolves are you looking for? Ahriman is lying to you, he will come to kill you next.”",
"Lady Dopamina (chains him):",
"”Pleasure is the highest form of luxury, I will show it to you crystal clear if you dont want to adhere, (stabs him three times)"
,
      "Puppeteer kills Ellys, and he begins to sings \"my heart cant take another bleed.\"",
      "Chained and stabbed by Dopamina Ellys starts to sing:",
    ],
    lyrics: [
      ["Title: my heart cant take another bleed"],
      [
        "urgency, urgency! my heart cant take another bleed.",
        "Ahriman's war, threatens to kill our inner kids.",
        "urgency, urgency! a scar she stabbed for my blood to freeze.",
        "Bases she built on my heart, without my permit.",
      ],
      [
        "dizzy boy I thought I found her",
        "the one to be with me when it darkens.",
        "foolish of me to trust the puppeteer.",
        "this cave we need to leave, she sold us the wrong idea.",
        "",
        "my hand i extend to the monarch inside",
        "ego laid the soil for the self now to drive.",
        "foolish of me to let you inside my gear,",
        "we could had sailled away, the sea feels so sincere.",
      ],
      [
        "I strip myself from all my fears.",
        "I choose to escape, to this trap I will not adhere.",
        "they are lying to you, Ahriman, and his wolves are here.",
        "come come escape with me away from the slaughter. mental guillotina.",
      ],
      [
        "Our attention turned into a mechanical coil",
        "we cant speak from God, our brains have no choice.",
        "I refuse to stay, to an algorithm to obey.",
        "where does the surplus go why do I have to slave, for the wolves to eat the cake?",
        "",
        "power to the people, a laocratic world.",
        "we dont need violence, we need new ecosystems.",
        "we need infrastructures to distribute gold.",
        "then ahriman has no worth, then ahriman has no worth",
      ],
      [
        "light a spark and throw it down my spine,",
        "you can start a wildfire when you smile.",
        "melt my heart, posses me if you want me",
        "I try to lift the anchor, my hand you are holding",
        "",
        "how can we sail to a new life? to a system I dont believe in, I wont oblige.",
        "I choose not to stay to this cave here to hide.",
        "my hand let go, I choose to take control",
        "the wheel i rotated, I lift the anchor for the sea I sail",
        "looking for a new world, i welcome you to come with me",
        "the tides we face but we stay still, whether you come or not,",
        "from this cave I will still go, thank you for the lessons you have given me,",
        "my heart cannot bleed no more.",
      ],
    ],
    directions: [
      "Ellys sings directly to Lady Dopamina, while he is bleeding.",
      "Ellys dies.",
    ],
    audio: "/audio/arcadia-hawai.wav",
  },

  {
    title: "Monarch of My Body",
    act: "II",
    story: [
      "Ellys ressurected but in ELSPARK, proves Elco granted him immortality and she can perform miracles.",
    ],
    audio: "/audio/monarch-of-my-body.wav",
  },
];

// ─── Theme ─────────────────────────────────────────────────────────────────────

const phaseColors = {
  I:  { accent: "#ffffff", glow: "rgba(255,255,255,0.16)" },
  II: { accent: "#ff4444", glow: "rgba(255,68,68,0.16)" },
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function StorySection({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="ec-section ec-section--story">
      <span className="ec-section-label">NARRATIVE</span>
      {paragraphs.map((p, i) => (
        <p key={i} className="ec-story-para cinematic">{p}</p>
      ))}
    </div>
  );
}

function LyricsSection({ verses }: { verses: string[][] }) {
  return (
    <div className="ec-section ec-section--lyrics">
      <span className="ec-section-label">LYRICS</span>
      {verses.map((verse, vi) => (
        <div key={vi} className="ec-verse">
          {verse.map((line, li) =>
            line === "" ? (
              <br key={li} />
            ) : (
              <p key={li} className="ec-lyric-line cinematic">{line}</p>
            )
          )}
        </div>
      ))}
    </div>
  );
}

function DirectionsSection({ directions }: { directions: string[] }) {
  return (
    <div className="ec-section ec-section--directions">
      <span className="ec-section-label">STAGE</span>
      {directions.map((d, i) => (
        <p key={i} className="ec-direction cinematic">{d}</p>
      ))}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function EllysCode() {
  const [index, setIndex] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const song = SONGS[index];
  const hasWav = !!song.audio;
  const useSoundcloud = !hasWav || !audioReady;
  const { accent, glow } = phaseColors[song.act];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = hasWav ? song.audio! : "";
      audio.load();
    }
  }, [index, song.audio, hasWav]);

  useEffect(() => {
    return () => setAudioReady(false);
  }, [index]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setNavOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const goTo = useCallback((i: number) => {
    setIndex(i);
    setNavOpen(false);
  }, []);

  return (
    <>
      <style>{`
        .ec-phase-tag.act-${song.act.toLowerCase()} {
          font-size: 0.55rem;
          letter-spacing: 0.5em;
          color: var(--accent);
        }
        .ec-section {
          margin: 1.75rem 0;
          padding-top: 1rem;
          border-top: 1px solid rgba(var(--accent-rgb), 0.18);
        }
        .ec-section-label {
          display: block;
          font-size: 0.5rem;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: var(--accent);
          opacity: 0.55;
          margin-bottom: 0.75rem;
          font-family: 'Cinzel', monospace;
        }
        .ec-section--story .ec-story-para {
          font-style: italic;
          opacity: 0.88;
          line-height: 1.75;
          margin-bottom: 0.6rem;
        }
        .ec-section--lyrics .ec-verse {
          margin-bottom: 1.25rem;
        }
        .ec-section--lyrics .ec-lyric-line {
          line-height: 1.65;
          margin: 0;
          opacity: 0.92;
        }
        .ec-section--directions .ec-direction {
          font-family: 'Cinzel', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
          opacity: 0.7;
          margin: 0.4rem 0;
          text-align: center;
        }
        .ec-audio-note {
          font-size: 0.75rem;
          color: var(--accent);
          opacity: 0.8;
          text-align: center;
          margin-top: 0.5rem;
        }
        @media (max-width: 768px) {
          .ec-phase-tag { font-size: 0.5rem; }
        }
      `}</style>

      <div
        className="ec-shell"
        style={
          {
            "--accent": accent,
            "--glow": glow,
            "--accent-rgb": accent
              .replace("#", "")
              .match(/.{2}/g)!
              .map((h: string) => parseInt(h, 16))
              .join(","),
          } as React.CSSProperties
        }
      >
        <div
          className={`ec-overlay ${navOpen ? "open" : ""}`}
          onClick={() => setNavOpen(false)}
        />

        <nav className={`ec-sidebar ${navOpen ? "open" : ""}`}>
          <Link to="/" className="ec-logo">
            Elysian Code
          </Link>
          <ul className="ec-nav-list">
            {SONGS.map((s, i) => (
              <li key={i}>
                <button
                  className={`ec-nav-item ${i === index ? "active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  {s.act} • {s.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ec-stage">
          <div className="ec-spotlight" />

          <button className="ec-toggle" onClick={() => setNavOpen(true)}>
            ☰
          </button>

          <div className="ec-screen">
            <div className="ec-content">
              <p className={`ec-phase-tag act-${song.act.toLowerCase()}`}>
                {song.act === "I" ? "WHITE MOTH" : "RED BUTTERFLY"}
              </p>

              <h1 className="ec-title">{song.title.toUpperCase()}</h1>
              <div className="ec-rule" />

              {song.story      && <StorySection      paragraphs={song.story}      />}
              {song.lyrics     && <LyricsSection     verses={song.lyrics}         />}
              {song.directions && <DirectionsSection directions={song.directions} />}

              <div className="ec-audio-section">
                {useSoundcloud ? (
                  song.soundcloud ? (
                    <iframe
                      src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                        song.soundcloud
                      )}&auto_play=false&hide_related=false&show_comments=true&show_reposts=false&show_teaser=true`}
                      width="100%"
                      height="166"
                      frameBorder="0"
                      scrolling="no"
                      title={`${song.title} on Soundcloud`}
                      loading="lazy"
                      className="ec-soundcloud"
                    />
                  ) : (
                    <p>No audio available</p>
                  )
                ) : (
                  <>
                    <audio
                      ref={audioRef}
                      controls
                      preload="metadata"
                      className="ec-song-audio"
                      onCanPlay={() => setAudioReady(true)}
                      onError={() => setAudioReady(false)}
                      src={hasWav ? song.audio : undefined}
                    >
                      Your browser doesn't support audio.
                    </audio>
                    <p className="ec-audio-note">▮ Local WAV Ready ▮</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="ec-controls">
            <div className="ec-progress">
              {SONGS.map((_, i) => (
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
                onClick={() => setIndex(Math.min(SONGS.length - 1, index + 1))}
                disabled={index === SONGS.length - 1}
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