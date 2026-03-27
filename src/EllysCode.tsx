import { Link } from "react-router-dom";
import "./EllysCode.css";
import { useCallback, useEffect, useRef, useState } from "react";

const SONGS = [
  {
    title: "preface",
    act: "I",
    lyrics: (
      <>
        <p className="cinematic">
          Code-L is a recorded and living meta-mythos. Events are captured and can be relieved but not changed. Elly's Code explores the story of Ellys and the first time he escaped from the cave to find ELSPARK.
          </p>
          <p>
          Elly's Code is split in two acts.
          ACT I explores the birth of Carl, a white caterpillar transforming
          onto a white moth and then ends the ACT burning into ashes and coming
          out as a red butterfly.
        </p>
        <p>Name of ACT I is meta-metamorphosis and can be experienced as an independent video game. It explores the spiritual awakeneing of Elly's before he realises he is a prisoer inside The Cave.</p>
      </>
    ),
  },
  {
    title: "created to exist",
    act: "I",
    lyrics: (
      <>
        <p className="cinematic">
          From cosmic egg, the universe brings forth strings of lucy, which when
          multiplied create a matrix to weave reality.
        </p>
        <p className="cinematic emphasis">
          Then Carl, a white caterpillar, comes to life.
          <li>
            the song explores our birth into the world and the reason for our
            existence. questions meaning of life and purpose.
          </li>
        </p>
      </>
    ),
    soundcloud:
      "https://soundcloud.com/conscious-entropy/created-to-exist?in=conscious-entropy/sets/white-moth&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "I follow the echo (why did they kill Jesus)",
    act: "I",
    lyrics: (
      <>
        <p className="cinematic">
          Exploring the story of carl listening to an echo guiding him through
          life. We watch Carl as he is led onto a crowd where a character
          resembling Jesus is on a cross, killed by the people around him.{" "}
        </p>
        <p className="text highlight">
          The character is goddess of creation.
          <li>
            at the end of the song, we see Carl climbs at the top of a tree,
            using the energy he consumed, creating a cocoon around him.
          </li>
        </p>
      </>
    ),
    soundcloud:
      "https://soundcloud.com/conscious-entropy/why-did-they-kill-jesus?in=conscious-entropy/sets/white-moth&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "new source of energy",
    act: "I",
    lyrics: (
      <>
        <p className="cinematic">
          While the cocoon forms, Carl finds a hyper-independent space for his
          internal transformation.
        </p>
        <p className="emphasis">External energy becomes internal power.</p>
        <div className="signal-break">/// TRANSFORMATION ///</div>
      </>
    ),
    soundcloud:
      "https://soundcloud.com/conscious-entropy/new-source-of-energy?in=conscious-entropy/sets/white-moth&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "demonic disco",
    act: "I",
    lyrics: (
      <>
        <p className="cinematic">
          Inside the cocoon Carl finds space to dance and unleash his inner
          demons. Excited for what is to come, he hopes he turns into a
          butterfly like the ones he saw flying
        </p>
        <p className="emphasis">External energy becomes internal power.</p>
        <div className="signal-break">/// TRANSFORMATION ///</div>
      </>
    ),
    soundcloud:
      "https://soundcloud.com/conscious-entropy/demonic-disco?in=conscious-entropy/sets/white-moth&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "random random life can be",
    act: "I",
    lyrics: (
      <>
        <p className="cinematic">
          Carl breaks out of cocoon but as a moth, instead of a butterfly. He
          doesnt mind and flys away exploring his new-found wings.
        </p>
      </>
    ),
    soundcloud:
      "https://soundcloud.com/conscious-entropy/random-random-life-can-be?in=conscious-entropy/sets/white-moth&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "intrinsically stringed",
    act: "I",
    lyrics: (
      <>
        <p className="cinematic">
          After a butterfly tells Carl, the moth, that he will never be a
          butterfly he isolates himself and closes on himself, turning a
          sarcophagus around a flower.
        </p>
      </>
    ),
    soundcloud:
      "https://soundcloud.com/conscious-entropy/my-art-my-rules?in=conscious-entropy/sets/white-moth&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "apocalypse will come for us all",
    act: "I",
    lyrics: (
      <>
        <p className="cinematic">
          Carl, white moth decides to accept himself and continue pursuing his
          dream of turning into a butterfly.
        </p>

        <p>
          {" "}
          he breaks out of sarcophagus and finds a bar of flowers to start
          drinking nonsstop with no option for player to stop
        </p>
      </>
    ),
    soundcloud:
      "https://soundcloud.com/conscious-entropy/the-apocalypse-will-come-for-us-all?in=conscious-entropy/sets/white-moth&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "meta-metamorphosis (from 0 to a 1, to a moth to a butterfly)",
    act: "I",
    lyrics: (
      <>
        <p className="cinematic">
          Someone mentions about alchemists who can change the physical
          composition of any substance
        </p>

        <p>
          {" "}
          Carl distances himself and finds a quiet place to experiment chemical
          substances to turn himself into a butterfly. Experiment fails and
          blows up the whole place. Amidst the ashes, a red butterfly appears
          and starts flapping its wings
        </p>
      </>
    ),
    soundcloud:
      "https://soundcloud.com/conscious-entropy/moth-to-butterfly-1?in=conscious-entropy/sets/white-moth&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "ACT II preface",
    act: "II",
    lyrics: (
      <>
        <p className="cinematic">
          The birth of the red butterfly symbolises Elly's awakening in the
          physical world. With ACT I exploring his transformation from a
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
    <p>He prays to Elco who orchestrates a storm, breaking the wall where he sees the sea for the first time.  Time to escape.</p>
      </span>
    ),
    soundcloud:
"//soundcloud.com/conscious-entropy/red-butterfly?in=conscious-entropy/sets/red-butterfly&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",

  },
  {
    title: "Arcadia (Hawai)",
    act: "II",
    lyrics: (
      <>
        <p className="cinematic">
          False paradise revealed. Ahriman's illusion.
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
          ELTV premiere. Sovereignty reclaimed.
        </p>
        <p className="broadcast-line">ELCA broadcasts from ELSPARK Theatre.</p>
        <div className="signal-break">/// ELTV LIVE ///</div>
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