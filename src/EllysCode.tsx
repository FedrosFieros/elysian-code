import { Link } from "react-router-dom";
import "./EllysCode.css";
import { useCallback, useEffect, useRef, useState } from "react";

const SONGS = [
 
  {
    title: " preface",
    act: "II",
    lyrics: (
      <>
        <p className="cinematic">
          The birth of the red butterfly symbolised Elly's conscious awakening in the
          physical world. With ACT I exploring his spiritual transformation from a
          caterpillar to a butterfly, he now wakes up inside of Ahriman's cave
          and realises it's a trap.
        </p>

        <div className="signal-break">/// AWAKENING ///</div>
      </>
    ),
    audio: "/audio/red-butterfly-rebirth.wav",
  },
  {
    title: "Red Butterfly ",
    act: "II",
    lyrics: (
      <span>
        
        <p className="cinematic">Ellys awakens in Ahriman's prison cave. </p>
        <p className="highlight">He sees the blue screens hypnotizing people around and realises there is life outside the cave. </p>
    <p>He prays to Elco who orchestrates a storm, breaking the wall where he sees the sea for the first time.  His perfect time to escape.</p>
      </span>
    ),
    soundcloud:
"//soundcloud.com/conscious-entropy/red-butterfly?in=conscious-entropy/sets/red-butterfly&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",

  },
  {
    title: "Arcadian Hawai",
    act: "II",
    lyrics: (
      <>
        <p className="cinematic">
        In his ElCave he finds freedom to express, create and plan how to find ELSPARK.
        </p>
        <p className="text">Sets sail for true freedom. ELSPARK calls.</p>
        <div className="signal-break">/// ILLUSION BROKEN ///</div>
      </>
    ),
    audio: "/audio/arcadia-hawai.wav",
  },
  {
    title: "Passive slave of dopamine",
    act: "II",
    lyrics: (
      <>
        <p className="cinematic">
On his pursuit to ELSPARK he finds a job at a garden, responsible to treat the wheats. He builds biggest seeds they have seen, which he finds out Lord Beauraux would come and collect it. Ellys picks it up and travels to ELSPARK where he plants them to become mooshis

        </p>
   
        <div className="signal-break">/// ILLUSION BROKEN ///</div>
      </>
    ),
    audio: "/audio/arcadia-hawai.wav",
  },
  {
    title: "Idle Saint, flawed idols",
    act: "II",
    lyrics: (
      <>
        <p className="cinematic">
         On his pursuit to find the way to reach ELSPARK he seeks for guidance and doesnt know who to pray to.
        </p>
       
        <div className="signal-break">///  spiritual confusion ///</div>
      </>
    ),
    audio: "/audio/arcadia-hawai.wav",
  },
  {
    title: "Buddha Buddha come rescue me",
    act: "II",
    lyrics: (
      <>
        <p className="cinematic">
       He finds boat and sails to ELSPARK.
        </p>
    
      
      </>
    ),
    audio: "/audio/arcadia-hawai.wav",
  },
  {
    title: "my heart cant take another bleed",
    act: "II",
    lyrics: (
      <>
        <p className="cinematic">
He goes back to The Cave to tell Lady Dopamina and the others, but she ends up killing him.
        </p>
        <p className="text">Sets sail for true freedom. ELSPARK calls.</p>
        <div className="signal-break">/// ILLUSION BROKEN ///</div>
      </>
    ),
    audio: "/audio/arcadia-hawai.wav",
  },
  {
    title: "Monarch of My Body",
    act: "II",
    lyrics: (
      <>
        <p className="cinematic emphasis">
 Ellys ressurected but in ELSPARK, proves Elco granted him immortality and she can perform miracles.
        </p>
   
      </>
    ),
    audio: "/audio/monarch-of-my-body.wav",
  },
  // Add other Act II songs...
];
const phaseColors = {
    I: { accent: "#ffffff", glow: "rgba(255,255,255,0.16)" },
    II: { accent: "#ff4444", glow: "rgba(255,68,68,0.16)" },
  };
  
  export default function EllysCode() {
    const [index, setIndex] = useState(0);
    const [navOpen, setNavOpen] = useState(false);
    const [audioReady, setAudioReady] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
  
    const song = SONGS[index];
    const hasWav = song.audio && song.audio !== "";
    const useSoundcloud = !hasWav || !audioReady;
    const { accent, glow } = phaseColors[song.act as "I" | "II"];
  
    // Handle audio src switching (no setState here)
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
          // Reset readiness before src change (safe since audio resets anyway)
          audio.src = hasWav ? song.audio : "";
          audio.load();
          // Remove setAudioReady(false) - let events handle it naturally
        }
      }, [index, song.audio, hasWav]);
      
      // Add this cleanup effect to explicitly reset on unmount/song change:
      useEffect(() => {
        return () => {
          setAudioReady(false);
        };
      }, [index]);
  
    // Mobile nav responsive
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
          .ec-text-block .cinematic { 
            font-style: italic; 
            opacity: 0.9; 
          }
          .ec-text-block .emphasis { 
            font-weight: 700; 
            color: var(--accent); 
          }
          .ec-text-block .highlight { 
            background: var(--glow); 
            padding: 0.25rem 0.5rem; 
            border-radius: 4px; 
          }
          .ec-text-block .signal-break {
            font-family: 'Cinzel', monospace;
            font-size: 0.65rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: var(--accent);
            opacity: 0.7;
            margin: 1.5rem 0;
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
          {/* Mobile overlay */}
          <div
            className={`ec-overlay ${navOpen ? "open" : ""}`}
            onClick={() => setNavOpen(false)}
          />
  
          {/* Sidebar */}
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
  
          {/* Stage */}
          <div className="ec-stage">
            <div className="ec-spotlight" />
  
            {/* Mobile toggle */}
            <button className="ec-toggle" onClick={() => setNavOpen(true)}>
              ☰
            </button>
  
            {/* Screen */}
            <div className="ec-screen">
              <div className="ec-content">
                <p className={`ec-phase-tag act-${song.act.toLowerCase()}`}>
                  {song.act === "I" ? "WHITE MOTH" : "RED BUTTERFLY"}
                </p>
  
                <h1 className="ec-title">{song.title.toUpperCase()}</h1>
                <div className="ec-rule" />
  
                {/* Lyrics */}
                <div className="ec-text-block">{song.lyrics}</div>
  
                {/* Audio Player */}
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
  
            {/* Controls */}
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
                  onClick={() =>
                    setIndex(Math.min(SONGS.length - 1, index + 1))
                  }
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