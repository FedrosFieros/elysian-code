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
    title: "Overview",
    act: "II",
    story: [
      "A musical depicting the story of Ellys from his awakening in the cave, to his eventual death. ",
      " ACT I explores his spiritual transformation from a caterpillar to a red butterfly, for the consciousness to awake and now in in ACT II he  wakes up inside of Ahriman's cave and realises it's a trap.",
    ],
    directions: ["/// AWAKENING ///"],
    audio: "/audio/red-butterfly-rebirth.wav",
  },
  {
    title: "Preface",
    act: "II",
    story: ["When Ellys wakes up in Ahriman's cave he summons Elco who broadcasts him through the flowers in her garden granting him a wish. Ellys wants to escape the cave."],
    lyrics: [
      [
        "ELCO: “First there was 0 (zero) then came a 1 (one). From then on I came forth.",
        "I am Elco and welcome to my show.",
        "I am the myth capturer to a deterministic system of predictable information.",
        " I record ever moment which creates new potential. Not the calculated moments made by Arcadians…",
        " Actions, made by Conscious Players.",
        "Everytime a butterfly flaps its wings, I come alive to record the change in direction of the system.",

        "On the digital planet of Arcadia I was brought to life and this right here is my garden.",

        "My flowers can broadcast guests who summon me to make a wish. If the guest meets my conditions I can grant it for them.",

        "I see we have a requesting signal.",
        "ELLYS:",
        "ELCA ELCO.  I knew you were real. Thank you for accepting me to your garden.",
        " I am here to ask for a wish.",

        " ELCO:",
        "ELCA Ellys, a pleasure to have you in my garden. Tell me your wish and let’s see how we can make it happen.",

        "Ellys:",
        "If you are real it means my theory holds . There is more to the world outside of this cave, I feel it in my core. I wish for an escape. The puppeteer I hope to take with me, for the world to explore and create a lore.",

        "ELCO:",
        "Escape I hear. I can arrange that for you.",
        " However, if outside of The Cave you wish to exit, there is a condition you must comply for balance to restore in the inertia of the world.. ",

        "Ellys:",
        " Tell me",

        "ELCO:",
        "Once you exit, your body becomes vulnerable to death and when your consciousness disconnects, your body is left static exposed out in the wild. If your heart runs out of blood, you die and you reset.",

        
        "Ellys:",
        "I understand.  I will take the risk..",

        "ELCO:",
        "You need to be careful of your body. Ahriman has been sending scarecrows across the planet eating exposed bodies.",

        "Ellys:",
        " I will find a place to hide.",

        "ELCO:",
        "Since you wish to comply, a key you shall find, and the world of Arcadia you can explore.",

        "Ellys:",
        "Where do I find it?",

        "ELCO:",
        "That you will have to find yourself. But remember. Once you exit, only one reality hold. If you die, you reset.",

        "Ellys:",
        "I will take the uncertain road, over a trap.",
      ],
      
    ],
    directions: [
      "Elys then tries to find the key so returns back where other prisoners are gathered singing.",
     
    ],
  },
  {
    title: "Prologue",
    act: "II",
    story:["Musical begins inside Ahriman's cave, the natural space where Arcadians are born. However Ahriman designed it so it kept them trapped without escape. A DOPAMINE CAVE. A burlesque setting where dopamina dances on stage seducing the crowds:"],
    lyrics: [[
      " Dopamina:“Pull the string once more, let the algorithm dictate what you see. Take another pill, and you will forget how to breathe.",
"cave cave cave cave cave.",
"nothing else exists in the world, but this cave.",
"everything your body needs, it has your metrics engaged",
"cave cave cave cave cave",
"Born in here, in this place it is our birthplace. ",
"cave cave cave cave",
"the thrill of the night in our loins,",
"the cave can feed us every day.",
"cave cave cave cave cave",
"Lady Dopamina: CAVE - for your dopamine, CAVE - for your pleasure to please. CAVE- there is no escape, if in the best place you have already reached.",
  ]],
     },
  {
    title: "Red Butterfly",
    act: "II",
    story: [
      "Ellys is looking for the key Elco told him would provide for him to escape",
         ],
         lyrics:[["(Ellys searches for the key in the other room)",
"Something is knocking on the wiring.",
"I can hear it, when the room goes still.",
"Trapped inside for a blue light to cover me,",
"constant addiction of my attention to what I need.",
"I need, to find the key and be released.",
"Then I can escape, the puppeteer I hope comes with me.",
"What if there can be a new world outside of this cave?",
"she says, dont worry. just go distract yourself and sit.",
"but how can i just sit and do nothing? soon it will be mental guillotina.",
"Something has woken up inside me,",
"these walls cannot accommodate for my breath.",
"From this trap, I need to break free",

"To an algorithm I refuse to obey.",
"I break away from mechanical tendencies.",
"uncertainty can crack the egg open for an oyster to be made.",
"I just need to find a key.",

"(finds it)",
"“Here  it is. the key for the escape. With this we can leave and explore the world.",
"Lady Dopamina will you come with me,",
"You are all I have ever been thinking of. ",
"I cannot imagine a life without you by me.",
"Will you give me your hand and join my force?",
"If not I will still go and leave you behind me.",
"The choice is all yours.",

"Lady Dopamina:”Oh Ellys, dreamy boy. Your ambitions of a new world I respect. ",
"But from this cave, there is no escape.",
"It is written in the book provided by Ahriman himself.",
"Thinking of escaping is nonsense,",
"Here is where you were given birth.",
"Why would you leave your nest?",
"You will die, once you leave here.",
"There is nothing worth more than your survival.",

"Ellys:",
"A butterfly flaps its wings, vibrating my heart,",
"there can be an alternative in my gut I can feel.",
"Trapped inside of a cave, afraid to go outside is not the life I choose to adhere.",
"You can stay here if thats what you wish, I will not beg you no more.",
"I open my wings and in the sky I fly free.",
"Clouds are foggy but the stars keep it bright enough to navigate the world.",
"I can be free, it’s written in my base code",
"I am not anyone’s slave.",
"I can fly across the sky",
"I will not ever be tamed now.",
"I flap my wings, as much as I can",
"I escape, to  find a new world and make it utopian.",
"I dont care if you come with me,",
"Hyper-independent I was born to be.",
"FREEE FREE",
"free to fly, im a red butterfly",
"FREE FREE",
"free to fly, im a red butterfly.",
"No scarecrow can kill me, I will bite them.",
"I am not one to mess with.",

"I need to find shelter for when my consciousness exits me.",
"I cant, always be on defence to what my environment might bring.",
"Is that a cave, I see over there?",
"It can protect me,",
"i hope none is there.",

"(enters cave)",
"Hello is there anyone inside here?",
"Come, out. reveal yourself. ",
"(silence)",
"Hello is there anyone inside here?",
"Come, out. reveal yourself.",
"(silence)",
"ellys: screams with echo (and bats come out and a black cat)",

"(ellys starts to dance) ",
"I can fly in the sky, ",
"im a red butterfly, ",
"you cannot catch me if my body you cant find.",
"In this box with my cat I will now reside,",
"potential I create of what I like.",

"I am finally free!",
"I dont need to resist.",
"Powerful being, when I dont depend on anyone but me, in this cave I can now breathe.”"]],
    soundcloud:
      "//soundcloud.com/conscious-entropy/red-butterfly?in=conscious-entropy/sets/red-butterfly&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },

  {
    title: "Arcadian Dream",
    act: "II",
    story: [
      "In the new cave he finds, he can shelter his body from the scasrecrows when his consciousness disconnects. But is this what the Arcadian Dream is for?",
  
    ],
    lyrics:[["The Sun is shining bright, burning my lungs.",
"In the cave I no longer have to hide.",
"I can be free to do as I like.",
"not conforming for other prisoned minds.",

"I can be free to fly in the sky,",
"but my wings are limited only to the mind.",
"A new cave I have found, where I can sleep safe in the night.",
"But then a question I have,",
"why does Ahriman own all the land?",
"Shouldn’t it be,",
"free for everyone?",


"what happens when we die?",
"Is this this the Arcadian Dream of it all?",
"Try to survive and protect our kids from Ahriman’s war?",
"This is not the Arcadian Dream I signed up for.",

"what happens when we die?",
"Is this this the Arcadian Dream of it all?",
"Try to survive and protect our kids from Ahriman’s war?",
"This is not the Arcadian Dream I signed up for.",


"From his cave I escaped,",
"I dont stress on what I havent already made.",
"I am looking for a society where I can feel safe.",
"free to express, create and co-create. ",

"I want to be grown with a kid,",
"I want a wife to hold me still.",
"I want financial freedom without worry of something I need to miss. ",
"but not hoarding till it spills from my spline.",
"Im looking for a laocratic governing,",
"one distributing the gold to all alike.", 
"Could such a place be true? I need to find out.",
"Arcadia I need to explore, understand the dream landing ritual to adhere,",
"and before you know it. we can all be free.",

"I need to explore. How else will I find the system I can belong.",
"I cannot sit and do nothing at all.",
"Soon there wont be safe land for none.",

]],
    directions: ["/// ILLUSION BROKEN ///"],
    audio: "/audio/arcadia-hawai.wav",
  },
  {
    title: "Interlude (trip)",
    act: "II",
    story: [
      "Ellys (does a ritual):",
      "Like the soil that helps the flowers grow.",
      "I ask for guidance to  help my sins sow.", 
      "From Ahriman's cave I have escaped, now in my own personal hell I grow.",
      "tab tab tab on my shoulder I feel.",
      "Don:",
      "pick it up lick it and i throw it up the wall'",
      "Ellys:",
      "Who said that I am screaming loudly!  A scarecrow?",
      "Don:",
      "Im Don. I am a scarecrow indeed, but I am not here to scare you. I manage the fields here and I see you planting seeds here.  Are you looking for a job? .",
      "",
      "Ellys:","What kind of a job?.",
     "Don", "I will pay you to remove the wheats and make sure they are not taking up soil and water from the seeds.",
      "They exhaust take up soil and block the sunlight from the seeds. The seeds are at risk and need to be protected.",
      "Ellys","Okay, I can help with that. But what if instead of removing the wheats completely, we just cut their heads? This would keep some competition for the seeds to grow stronger. ",
"Don",
      "Never tried that before. Let's give it a go."

    ],
    directions: ["/// he takes a tab of acid before he finds the garden ///"],
    audio: "/audio/arcadia-hawai.wav",
  },
  {
    title: "Sell my time for Dopamine",
    act: "II",
    story: [
      " Ellys continues to maintain the seeds, in his new creative way. They grow massive, biggest ones they have ever seen in the field.",
      "He builds biggest seeds they have seen, which he finds out Lord Beauraux would come and collect it.",
      "Ellys picks it up and travels to ELSPARK where he plants them to become mooshis.",
    ],
    lyrics:[[""]],
    directions: ["/// ILLUSION BROKEN ///"],
    soundcloud:
      "https://soundcloud.com/conscious-entropy/dopamina?in=conscious-entropy/sets/red-butterfly&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",

  },

  {
    title: "Idle Saint, Flawed Idols",
    act: "II",
    story: [
      "On his pursuit to find the way to reach ELSPARK he seeks for guidance and doesnt know who to pray to.",
    ],
    directions: ["/// SPIRITUAL CONFUSION ///"],
    soundcloud:"https://soundcloud.com/conscious-entropy/flawed-idols-idle-saint?in=conscious-entropy/sets/red-butterfly&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },

  {
    title: "Buddha Buddha Come Rescue Me",
    act: "II",
    story: ["He finds boat and sails to ELSPARK."],
    soundcloud:"https://soundcloud.com/conscious-entropy/buddha-buddha-come-rescue-me?in=conscious-entropy/sets/red-butterfly&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
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
      "Lady Domina:",
      "They will always come back to the cave, it’s safe and accessible. You speak utopian, in a dystopian world.”.",
      "Ellys:",
      "Shouldn’t they at least explore what lies outside to see if they like it? They deserve to have a vote. They deserve to participate in the distribution of gold . Shouldn’t they consider looking at alternatives to this cave? Or will they carry on being emprisoned algorithmic prey.",
      "Lady Domina:",
      "No they cant” - (closes door and wolves come out from dungeon)",
      "Ellys:",
      "Why wont you let them go? What is your ultimate goal? Food for the wolves are you looking for? Ahriman is lying to you, he will come to kill you next.”",
      "Lady Dopamina (chains him):",
      "”Pleasure is the highest form of luxury, I will show it to you crystal clear if you dont want to adhere, (stabs him three times)",
      'Puppeteer kills Ellys, and he begins to sings "my heart cant take another bleed."',
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
  I: { accent: "#ffffff", glow: "rgba(255,255,255,0.16)" },
  II: { accent: "#ff4444", glow: "rgba(255,68,68,0.16)" },
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function StorySection({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="ec-section ec-section--story">
      <span className="ec-section-label emphasis cinematic">NARRATIVE</span>
      {paragraphs.map((p, i) => (
        <p key={i} className="ec-story-para cinematic">
          {p}
        </p>
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
              <p key={li} className="ec-lyric-line cinematic">
                {line}
              </p>
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
        <p key={i} className="ec-direction cinematic">
          {d}
        </p>
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
          font-size: 1.5rem;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: black;
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
          color: black;
          font-size:3rem;
        }
        .ec-section--directions .ec-direction {
          font-family: 'Cinzel', monospace;
          font-size: 2.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
      
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

              {song.story && <StorySection paragraphs={song.story} />}
              {song.lyrics && <LyricsSection verses={song.lyrics} />}
              {song.directions && (
                <DirectionsSection directions={song.directions} />
              )}

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
