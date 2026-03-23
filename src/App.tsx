
import './App.css'

import { useState } from "react";


const sections = [
  { 
    title: "Preface", 
    phase: "intro", 
    text: [
      "Welcome to Code-L: A 3D meta-verse mythos unfolding across phases.",
      "Use this document to vavigate through the different phases, and how players will escape Ahriman's trap to discover ELSPARK (a 3D extension of elspark.online).",
      "Use the left navbar or Next/Back buttons to explore."
    ]
  },
  { title: "Code-L Phase 1 ", phase: "cave", text: ["Users first experience the mythos and alternative world of Code-L, through inside a 3D cave, accessed through a website."],     image: "/cave1.png" },
  { title: "The Cave", phase: "cave", text: ["Once a player is inside, they can control an avatar.", "But they are not alone. Other online participants will be there in the same room.", "Each player has the same looking avatar but different usernames and a chat bubble to chat to all."], image: "/cave-avatars.png"  },
  { title: "GamePlay", phase: "cave", text: ["Players can view screen from first perspective and move their characters to interact with environment and other online players..", ], image: "/firstperspective.png"  },
  { title: "Backstory - Ahriman's plan", phase: "cave", text: ["These caves have been designed by Ahriman to trap humans inside systems which they cannot escape. Deceiving them with a false idea of reality, he holds them prisoners."], image: "/Ahriman.png"  },
{ title: "The Puppeteer", phase: "cave", text: ["controlled by a person in ElCode from backend, puppeteer speaks of safety inside the cave and chaos outside..", "She maintains order and calms the participants."] ,image: "/cave-puppeteer.png"},
  { title: "The Blue Device", phase: "cave", text: ["A live feed of events posted by puppeteers from backend explaining events happening in mythos Code-L, from an Ahriman perspective."],image: "/cave-bluedevice.png" },
  { title: "The Wolves Ritual", phase: "cave", text: ["At certain moments the puppeteer may invite prisoners to follow her toward a dark dungeon located at the back of the cave.",
"Participants who follow enter a ritual space.",
"Within the dungeon a disturbing ceremony unfolds:",
"Prisoners are bound to chains while the sound of wolves echoes through the chamber. They can no longer move their characters and are bounded to what is happening.",
"The ritual builds in intensity through music and sound as shadows move through the darkness.", "The wolves start coming with a lead cunty singer as their leader."] ,image: "/chained.png"},
{ title: "Ritual Leader", phase: "cave", text: ["A cunty individual hosts the ritual where she sings and players watch as their bodies are being eaten by wolves. they can move their heads to look, but not move their bodies. They end up dying. A lived in music video."], image: "/dominatrix.png" },
  { title: "Phase 2 -The Escape: June 1st", phase: "escape", text: ["The wall facing the sea breaks open.", "Ellys steps in and performs a song, giving option for prisoners to join him to ELSPARK and escape from Ahriman's trap."] , video:"/escape.avi"},
  { title: "my heart cant take another bleed", phase: "escape",     text: ["“my heart cant take another bleed.”. (ACT II, track 6)"],lyrics:[
"verse 1:“urgency! my heart cant take another bleed.",
"Ahriman’s war, threatens to kill our inner kids.",
"urgency! a scar she stabbed for my blood to freeze.",
"Bases she built on my heart, without my permit.” ", 
"verse 2: “dizzy boy I thought I found her" ,
"the one to be with me when it darkens.",
"foolish of me to trust the puppeteer.",
"this cave we need to leave she sold us the wrong idea.",

"my hand i extend to the monarch inside",
"ego laid the soil for the self now to drive.",
"foolish of me to let you inside my gear,",
"we could had sailled away, the sea feels so sincere.",

"verse 3: “I strip myself from all my fears.",
"I choose to escape, to this trap I will not adhere.",
"they are lying to you, Ahriman, and his wolves are here.",
"come come escape with me away from the slaughter. mental guillotina. ",

"verse 4: “Our attention turned into a mechanical coil",
"we cant speak from God, our brains have no choice.",
"I refuse to stay, to an algorithm to obey.",
"where does the surplus go why do I have to slave, for the wolves to eat the cake?",
"power to the people, a laocratic world.",
"we dont need violence, we need new ecosystems.",
"we need infrastructures to distribute gold.",
"then ahriman has no worth, then ahriman has no worth",

"verse 5: light a spark and throw it down my spine,",
"you can start a wildfire when you smile.",
"melt my heart, posses me if you want me",
"I try to lift the anchor, my hand you are holding",
"how can we sail to a new life to a system I dont believe in, I wont oblige.",
"I choose not to stay to this cave here to hide.",
"my hand let go, I choose to take control",
"the wheel i rotated, I lift the anchor for the sea I sail",
"looking for a new world, i welcome you to come with me ",
"the tides we face but we stay still, whether you come or not, ",
"I will still go, thank you for the lessons you have given me,",
"my heart cant bleed no more.'", "actions: Ellys invites puppeteer to come with him but she doesnt"] , audio: "/MHCTAB18.wav",},
  
  { title: "The  Boat", phase: "escape", text: ["Players who join Ellys, board on the boat and sail to island of Pandora, arriving on ELSPARK."] , image:"/boat.png"},

  { title: "ELSPARK 3D", phase: "elspark", text: ["A new decentralised world emerges on the island of Pandora.", "An extension of elspark.online, but on a 3D world with every user having their own avatar"], image:"/ELSPARK.png" },
  { title: "ELSPARK Theatre", phase: "elspark", text: ["They are imemdiately guided to ELSPARK Theatre where, Ellys takes on the stage.","when the lights dim and curtains open, he reveals a screen"], image:"/ELSPARKTheatre.png" },
  { title: "ELSPARK TV", phase: "elspark", text: ["The screen is ELSPARK TV, a digital platform broadcasting live from Apothiki, our first edition of ELCA -  a live theatrical performance we execute in physical space."], image:"/ELSPARKTV.png" },

  { title: "ELSPARK NEWS", phase: "elspark", text: ["ELTV is our media production company and we connect creatives across Europe to produce independent shows, like ELSPARK NEWS, which are broadcasted onto ELSPARK TV. A curated channel only for our original shows.."],image:"/ELSPARKNEWS.png" },
  { title: "What happens after? Phase 3", phase: "elspark", text: ["ELSPARK continues being live in 3D, welcoming new audiences away from Ahriman's corrupted social media spaces.",] },
  { title: "ELTV", phase: "elspark", text: ["We continue producing more shows, broadcasting through ELSPARK TV compensating creators with profits.",] },
  { title: "Elly's Code", phase: "elspark", text: ["Elly's debut studio album is available to be experienced through an interactive website through which users can observe the prequel to the events on June 1st..","split in two ACTS, ACTI follows story of a caterpillar transforming to a white moth, while ACT II follows story of Ellys breaking out of the cave for the first time and his journey to find ELSPARK.Then on the 6th track  he comes back and invites other prisoners to join him on ELSPARK."] },


];





export default function App() {
  const [index, setIndex] = useState(0);
  const section = sections[index];

  return (
    <div className={`app ${section.phase}`}>
      {/* LEFT NAVBAR */}
      <nav className="navbar">
        <ul className="nav-list">
          {sections.map((sec, i) => (
            <li key={i}>
              <button 
                className={`nav-item ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
              >
                {sec.title}
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
              <h1 className="cardh">{section.title}</h1>
              {section.text.map((line, i) => (
                <p className="text-font" key={i}>{line}</p>
              ))}
              
              {/* LYRICS */}
              {section.lyrics && (
                <div className="lyrics-section">
                  <h3>Lyrics</h3>
                  {section.lyrics.map((line, i) => (
                    <p className="lyrics-line" key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* IMAGE/VIDEO */}
          {section.image && <img src={section.image} className="bg-image" />}
          {section.video && (
            <video className="bg-video" autoPlay loop muted src={section.video} />
          )}

          {/* AUDIO PLAYER */}
          {section.audio && (
            <div className="audio-player flex flex-col">
             
              <audio 
                controls 
                src={section.audio}
                className="draft-audio"
              >
                Your browser doesn't support audio.
              </audio>
            </div>
          )}
        </div>

        <div className="controls">
          <button onClick={() => setIndex(Math.max(0, index - 1))}>Back</button>
          <button onClick={() => setIndex(Math.min(sections.length - 1, index + 1))}>Next</button>
        </div>
      </div>
    </div>
  );
}

