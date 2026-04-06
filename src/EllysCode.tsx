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
      "Ellys was told by Elco to find a key to escape from The Cave. The song is about escaping from your addictions and mechanical tendencies. A red butterfly is not bounded by reality. it creates chaos with every flap of its wings.",
         ],
         lyrics:[["(Ellys searches for the key in the other room)",
"Something is knocking on the wiring.",
"I can hear it, I can hear it , when the room goes still.",
"Trapped inside the cave with a blue light to cover me,",
" addiction to what my attention seeks.",
"",
"Im looking for the key to be released.",
"Then I can escape, the puppeteer cannot trick me.",
"What if there is a new world outside of this cave?",
"dopamina says dont worry. just scroll yourself to sleep.",
"but how can i just sit and do nothing? soon it will be mental guillotina.",
"Something has woken up inside of me,",
"these walls cannot accommodate for my breath.",
"v3",
"This is trap, there is more to life than this",

"I am not gonna be an algorithmic prey.",
"I strip myself from mechanical tendencies.",
"I crack the egg open even if the oyster bleeds in pain.",
"I just need to find the key and I will be on my way",

"(finds it)",
"“Here  it is - the key for the escape.",
"Lady Dopamina will you come with me,",
"with this key, we can fly away ",



"Lady Dopamina v4:”Oh Ellys, dreamy boy. Your ambitions I respect. ",
"But from this cave, there is no escape.",
"Ahriman wrote it on the book himself.",

"If you exit, food for the crows you will be made.",

"Here is where you were given birth.",
"You will die, once you leave from your safety nest.",
"your body is certain when you can predict what comes next.",

"dont go feed yourself in the uncertainty hell",
" let the blue light  hypnotise and all your needs will be met",
"if you leave this cave",
" you will be stranded by yourself.",
" Many have tried before you but all failed, you will die and your soul will be reset.",

"v5:",
"A butterfly flaps, vibrates my heart,",
"there can be an alternative I can feel it in my gut.",
"Trapped inside  a cave,  attention fragments the mind.",
"You can stay here if thats what you like, ",
"v6",
"I open my wings and I choose to fly.",
"Clouds are foggy but the stars keep it bright .",
"I can be free, my consciousness is my guide",
"my attention I protect only to things I desire.",
"I  fly across the world, the storm washes my feet.",
"",
"I only operate in systems I own and I believe in.",
"",





"I dont care if you come with me,",
"Hyper-independent I was born to be.",
"You cannot trick me again, I choose escape. I am free I am free I open the box for the truth to get to",
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
"I dont need to hide.",
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
  I:  { accent: "#e8dcc8", dim: "#a89880", glow: "rgba(232,220,200,0.12)" },
  II: { accent: "#c8412a", dim: "#8a2d1e", glow: "rgba(200,65,42,0.15)" },
};
 
// ─── Sub-components ────────────────────────────────────────────────────────────
 
function StorySection({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div style={sectionStyle}>
      <SectionLabel>NARRATIVE</SectionLabel>
      {paragraphs.map((p, i) => (
        <p key={i} style={storyParaStyle}>{p}</p>
      ))}
    </div>
  );
}
 
function LyricsSection({ verses }: { verses: string[][] }) {
  return (
    <div style={sectionStyle}>
      <SectionLabel>LYRICS</SectionLabel>
      {verses.map((verse, vi) => (
        <div key={vi} style={{ marginBottom: "2rem" }}>
          {verse.map((line, li) =>
            line === "" ? (
              <br key={li} />
            ) : (
              <p key={li} style={lyricLineStyle}>{line}</p>
            )
          )}
        </div>
      ))}
    </div>
  );
}
 
function DirectionsSection({ directions }: { directions: string[] }) {
  return (
    <div style={{ ...sectionStyle, textAlign: "center" as const }}>
      <SectionLabel>STAGE DIRECTION</SectionLabel>
      {directions.map((d, i) => (
        <p key={i} style={directionStyle}>{d}</p>
      ))}
    </div>
  );
}
 
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "block",
      fontFamily: "'Cormorant Garamond', 'Georgia', serif",
      fontSize: "0.6rem",
      letterSpacing: "0.55em",
      textTransform: "uppercase" as const,
      color: "var(--ec-dim)",
      marginBottom: "1.25rem",
      paddingBottom: "0.5rem",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
    }}>
      {children}
    </span>
  );
}
 
// ─── Styles ────────────────────────────────────────────────────────────────────
 
const sectionStyle: React.CSSProperties = {
  marginBottom: "2.5rem",
};
 
const storyParaStyle: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  fontSize: "clamp(0.95rem, 2.2vw, 1.15rem)",
  fontStyle: "italic",
  lineHeight: 1.85,
  color: "rgba(232,220,200,0.78)",
  marginBottom: "0.75rem",
};
 
const lyricLineStyle: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
  lineHeight: 1.7,
  color: "rgba(232,220,200,0.92)",
  margin: "0 0 0.2rem",
  letterSpacing: "0.01em",
};
 
const directionStyle: React.CSSProperties = {
  fontFamily: "'Cinzel', 'Trajan Pro', serif",
  fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
  letterSpacing: "0.45em",
  textTransform: "uppercase" as const,
  color: "var(--ec-dim)",
  margin: "0.5rem 0",
};
 
// ─── Inline Styles Object ──────────────────────────────────────────────────────
 
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
 
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
  body { background: #0a0806; }
 
  .ec-shell {
    display: flex;
    min-height: 100dvh;
    background: #0a0806;
    color: var(--ec-accent);
    font-family: 'Cormorant Garamond', Georgia, serif;
    position: relative;
    overflow: hidden;
  }
 
  /* ── Ambient glow ── */
  .ec-shell::before {
    content: '';
    position: fixed;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 30% 20%, var(--ec-glow) 0%, transparent 70%),
      radial-gradient(ellipse 40% 60% at 80% 80%, rgba(60,20,10,0.4) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }
 
  /* ── Grain texture ── */
  .ec-shell::after {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    opacity: 0.35;
    pointer-events: none;
    z-index: 0;
  }
 
  /* ── Sidebar ── */
  .ec-sidebar {
    width: 260px;
    flex-shrink: 0;
    background: rgba(8,6,4,0.92);
    border-right: 1px solid rgba(255,255,255,0.06);
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: 100dvh;
    overflow-y: auto;
    z-index: 10;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.1) transparent;
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
  }
 
  .ec-sidebar::-webkit-scrollbar { width: 3px; }
  .ec-sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); }
 
  .ec-logo {
    display: block;
    font-family: 'Cinzel', serif;
    font-size: 0.7rem;
    letter-spacing: 0.55em;
    text-transform: uppercase;
    color: var(--ec-accent);
    text-decoration: none;
    padding: 2rem 1.5rem 1.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    opacity: 0.9;
    transition: opacity 0.2s;
  }
  .ec-logo:hover { opacity: 1; }
 
  .ec-nav-list {
    list-style: none;
    padding: 1rem 0;
    flex: 1;
  }
 
  .ec-nav-item {
    display: block;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.85rem;
    color: rgba(232,220,200,0.45);
    padding: 0.55rem 1.5rem;
    letter-spacing: 0.03em;
    transition: color 0.2s, background 0.2s;
    line-height: 1.4;
    border-left: 2px solid transparent;
  }
 
  .ec-nav-item:hover {
    color: rgba(232,220,200,0.8);
    background: rgba(255,255,255,0.03);
  }
 
  .ec-nav-item.active {
    color: var(--ec-accent);
    border-left-color: var(--ec-accent);
    background: rgba(255,255,255,0.04);
    font-weight: 600;
  }
 
  .ec-nav-act {
    font-family: 'Cinzel', serif;
    font-size: 0.5rem;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    opacity: 0.4;
    display: block;
    margin-bottom: 0.1rem;
  }
 
  /* ── Main stage ── */
  .ec-stage {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
 
  .ec-topbar {
    display: none;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    background: rgba(8,6,4,0.95);
    position: sticky;
    top: 0;
    z-index: 20;
    backdrop-filter: blur(8px);
  }
 
  .ec-topbar-title {
    font-family: 'Cinzel', serif;
    font-size: 0.6rem;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: var(--ec-accent);
    opacity: 0.7;
  }
 
  .ec-toggle {
    background: none;
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(232,220,200,0.7);
    cursor: pointer;
    font-size: 1rem;
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    transition: all 0.2s;
  }
  .ec-toggle:hover { border-color: var(--ec-accent); color: var(--ec-accent); }
 
  /* ── Content scroll area ── */
  .ec-scroll {
    flex: 1;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.08) transparent;
  }
  .ec-scroll::-webkit-scrollbar { width: 4px; }
  .ec-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }
 
  .ec-content {
    max-width: 720px;
    margin: 0 auto;
    padding: clamp(2rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem);
  }
 
  /* ── Header ── */
  .ec-eyebrow {
    font-family: 'Cinzel', serif;
    font-size: 0.55rem;
    letter-spacing: 0.6em;
    text-transform: uppercase;
    color: var(--ec-dim);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
 
  .ec-eyebrow::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, rgba(255,255,255,0.1), transparent);
  }
 
  .ec-title {
    font-family: 'Cinzel', serif;
    font-size: clamp(1.6rem, 5vw, 3.2rem);
    font-weight: 700;
    color: var(--ec-accent);
    letter-spacing: 0.06em;
    line-height: 1.1;
    margin-bottom: 2rem;
    text-shadow: 0 0 60px var(--ec-glow);
  }
 
  .ec-divider {
    width: 3rem;
    height: 1px;
    background: linear-gradient(to right, var(--ec-accent), transparent);
    margin-bottom: 2.5rem;
    opacity: 0.6;
  }
 
  /* ── Audio ── */
  .ec-audio-wrap {
    margin-top: 2.5rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.06);
  }
 
  .ec-audio-label {
    font-family: 'Cinzel', serif;
    font-size: 0.55rem;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: var(--ec-dim);
    margin-bottom: 1rem;
    display: block;
  }
 
  .ec-song-audio {
    width: 100%;
    height: 36px;
    filter: invert(0.85) sepia(0.2);
    opacity: 0.85;
  }
 
  .ec-soundcloud {
    border-radius: 4px;
    overflow: hidden;
  }
 
  .ec-no-audio {
    font-size: 0.8rem;
    color: rgba(232,220,200,0.25);
    font-style: italic;
  }
 
  /* ── Footer controls ── */
  .ec-footer {
    padding: 1.25rem clamp(1.25rem, 4vw, 3rem);
    border-top: 1px solid rgba(255,255,255,0.06);
    background: rgba(8,6,4,0.7);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
 
  .ec-pips {
    display: flex;
    gap: 0.35rem;
    flex-wrap: wrap;
    max-width: 60%;
  }
 
  .ec-pip {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    cursor: pointer;
    transition: all 0.2s;
    border: none;
    padding: 0;
    flex-shrink: 0;
  }
 
  .ec-pip.active {
    background: var(--ec-accent);
    box-shadow: 0 0 8px var(--ec-glow);
    transform: scale(1.3);
  }
 
  .ec-pip:hover:not(.active) { background: rgba(255,255,255,0.35); }
 
  .ec-btn-group {
    display: flex;
    gap: 0.5rem;
  }
 
  .ec-btn {
    font-family: 'Cinzel', serif;
    font-size: 0.6rem;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    background: none;
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(232,220,200,0.6);
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 2px;
    transition: all 0.2s;
  }
 
  .ec-btn:hover:not(:disabled) {
    border-color: var(--ec-accent);
    color: var(--ec-accent);
    box-shadow: 0 0 12px var(--ec-glow);
  }
 
  .ec-btn:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
 
  /* ── Overlay ── */
  .ec-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 8;
    backdrop-filter: blur(2px);
  }
 
  /* ── Mobile ── */
  @media (max-width: 768px) {
    .ec-shell { flex-direction: column; }
 
    .ec-sidebar {
      position: fixed;
      inset: 0 auto 0 0;
      width: min(280px, 85vw);
      transform: translateX(-100%);
      height: 100dvh;
    }
 
    .ec-sidebar.open { transform: translateX(0); }
 
    .ec-overlay { display: block; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
    .ec-overlay.open { opacity: 1; pointer-events: auto; }
 
    .ec-topbar { display: flex; }
 
    .ec-stage { min-height: 0; flex: 1; }
 
    .ec-footer {
      flex-direction: column;
      gap: 0.75rem;
      align-items: stretch;
    }
 
    .ec-pips { max-width: 100%; justify-content: center; }
    .ec-btn-group { justify-content: center; }
  }
 
  /* ── Song entry animation ── */
  @keyframes ec-fade-up {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
 
  .ec-content { animation: ec-fade-up 0.4s ease both; }
`;
 
// ─── Main Component ────────────────────────────────────────────────────────────
 
export default function EllysCode() {
  const [index, setIndex] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
 
  const song = SONGS[index];
  const hasWav = !!song.audio;
  const useSoundcloud = !hasWav || !audioReady;
  const { accent, dim, glow } = phaseColors[song.act];
 
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = hasWav ? song.audio! : "";
      audio.load();
    }
  }, [index, song.audio, hasWav]);
 
  useEffect(() => { setAudioReady(false); }, [index]);
 
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [index]);
 
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setNavOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
 
  const goTo = useCallback((i: number) => {
    setIndex(i);
    setNavOpen(false);
  }, []);
 
  return (
    <>
      <style>{css}</style>
 
      <div
        className="ec-shell"
        style={{
          "--ec-accent": accent,
          "--ec-dim": dim,
          "--ec-glow": glow,
        } as React.CSSProperties}
      >
        {/* Overlay for mobile nav */}
        <div
          className={`ec-overlay ${navOpen ? "open" : ""}`}
          onClick={() => setNavOpen(false)}
        />
 
        {/* Sidebar navigation */}
        <nav className={`ec-sidebar ${navOpen ? "open" : ""}`}>
          <Link to="/" className="ec-logo">Elysian Code</Link>
          <ul className="ec-nav-list">
            {SONGS.map((s, i) => (
              <li key={i}>
                <button
                  className={`ec-nav-item ${i === index ? "active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  <span className="ec-nav-act">{s.act === "I" ? "White Moth" : "Red Butterfly"}</span>
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
 
        {/* Stage */}
        <div className="ec-stage">
 
          {/* Mobile top bar */}
          <div className="ec-topbar">
            <span className="ec-topbar-title">Elysian Code</span>
            <button className="ec-toggle" onClick={() => setNavOpen(true)}>☰</button>
          </div>
 
          {/* Scrollable content */}
          <div className="ec-scroll" ref={scrollRef}>
            <div className="ec-content" key={index}>
              <p className="ec-eyebrow">
                {song.act === "I" ? "Act I · White Moth" : "Act II · Red Butterfly"}
              </p>
 
              <h1 className="ec-title">{song.title.toUpperCase()}</h1>
              <div className="ec-divider" />
 
              {song.story && <StorySection paragraphs={song.story} />}
              {song.lyrics && <LyricsSection verses={song.lyrics} />}
              {song.directions && <DirectionsSection directions={song.directions} />}
 
              {/* Audio */}
              <div className="ec-audio-wrap">
                <span className="ec-audio-label">Listen</span>
                {useSoundcloud ? (
                  song.soundcloud ? (
                    <iframe
                      src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(song.soundcloud)}&auto_play=false&hide_related=false&show_comments=false&show_reposts=false&show_teaser=false&visual=false&color=%23${accent.replace("#","")}`}
                      width="100%"
                      height="80"
                      frameBorder="0"
                      scrolling="no"
                      title={`${song.title} on Soundcloud`}
                      loading="lazy"
                      className="ec-soundcloud"
                    />
                  ) : (
                    <p className="ec-no-audio">No audio available for this scene</p>
                  )
                ) : (
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
                )}
              </div>
            </div>
          </div>
 
          {/* Footer controls */}
          <footer className="ec-footer">
            <div className="ec-pips">
              {SONGS.map((_, i) => (
                <button
                  key={i}
                  className={`ec-pip ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to ${SONGS[i].title}`}
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
                className="ec-btn"
                onClick={() => setIndex(Math.min(SONGS.length - 1, index + 1))}
                disabled={index === SONGS.length - 1}
              >
                Next →
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
 