import { Link } from "react-router-dom";
import "./EllysCode.css";
import { useEffect, useRef, useState } from "react";

const SONGS = [
  {
    title: "preface",
    act: "I",
    lyrics: (
      <>
        <p className="cinematic">
          ACT I explores the birth of Carl, a white caterpillar transforming
          onto a white moth and then ends the ACT burning into ashes and coming
          out as a red butterfly.
        </p>
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

export default function EllysCode() {
  const [index, setIndex] = useState(0);
  const [audioReady, setAudioReady] = useState(false);
  const audioRef = useRef(null); // ✅ Now works with import

  const song = SONGS[index];
  const hasWav = song.audio && song.audio !== "";
  const useSoundcloud = !hasWav || !audioReady;

  // Test if WAV loads ✅
  useEffect(() => {
    if (hasWav && audioRef.current) {
      const audio = audioRef.current;
      audio.oncanplay = () => setAudioReady(true);
      audio.onerror = () => setAudioReady(false);
      audio.preload = "metadata";
      audio.src = song.audio;
    } else {
      setAudioReady(false);
    }
  }, [index, song.audio]); // ✅ Fixed deps array
  return (
    <div className="app">
      {/* LEFT NAVBAR - same structure as ELWORLD */}
      <nav className="navbar">
        <div className="logo" onClick={() => setIndex(0)}>
          <Link to="/" className="logo">
            ELYSIAN CODE
          </Link>
        </div>

        <ul className="nav-list">
          {SONGS.map((song, i) => (
            <li key={i}>
              <button
                className={`nav-item ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              >
                {song.act} • {song.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* MAIN CONTENT */}
      <div className="main-content">
        <div className="tv">
          <div className="content">
            <div className="card">
              {/* SONG HEADER */}
              <div className="song-header">
                <h1 className="cardh ">{song.title.toUpperCase()}</h1>
                <p className="act-tag">
                  {song.act === "I" ? "WHITE MOTH" : "RED BUTTERFLY"}
                </p>
              </div>

              {/* LYRICS / NARRATIVE */}
              <div className="lyrics-container">{song.lyrics}</div>

              <div className="audio-player">
                {useSoundcloud ? (
                  /* Fixed Soundcloud Embed */
                  <div className="soundcloud-embed">
                    {song.soundcloud ? (
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
                      />
                    ) : (
                      <div className="no-audio-fallback"></div>
                    )}
                  </div>
                ) : (
                  /* WAV Player - unchanged */
                  <>
                    <audio
                      ref={audioRef}
                      controls
                      preload="auto"
                      className="song-audio"
                    >
                      Your browser doesn't support audio.
                    </audio>
                    <p className="audio-note">▮ Local WAV Ready ▮</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="controls">
            <button onClick={() => setIndex(Math.max(0, index - 1))}>
              Back
            </button>
            <button
              onClick={() => setIndex(Math.min(SONGS.length - 1, index + 1))}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
