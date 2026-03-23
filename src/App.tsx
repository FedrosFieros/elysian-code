
import './App.css'

import { useState } from "react";


const sections = [
  { title: "Elysian Code - Phase 1", phase: "cave", text: ["Users first experience starts in a 3D cave, accessed through a website"],     image: "/cave1.png" },
  { title: "The Cave", phase: "cave", text: ["Once a player is inside, they can control an avatar.", "You are not alone. Other online participants will be there with you.", "Each player has the same looking avatar but different usernames and a chat bubble to chat to all."], image: "/cave-avatars.png"  },
{ title: "Backstory - Ahriman's plan", phase: "cave", text: ["These caves have been designed by Ahriman to trap humans inside systems which they cannot escape. Deceiving them with a false idea of reality, he holds them prisoners."], image: "/Ahriman.png"  },
{ title: "The Puppeteer", phase: "cave", text: ["controlled by a person in ElCode from backend, puppeteer speaks of safety inside the cave and chaos outside..", "She maintains order and calms the participants."] ,image: "/cave-puppeteer.png"},
  { title: "The Blue Device", phase: "cave", text: ["With events posted by us on backend explaining events happening in mythos Code-L, from an Ahriman perspective."],image: "/cave-bluedevice.png" },
  { title: "The Ritual", phase: "cave", text: ["At certain moments the puppeteer may invite prisoners to follow her toward a dark dungeon located at the back of the cave.",
"Participants who follow enter a ritual space.",
"Within the dungeon a disturbing ceremony unfolds:",
"Prisoners are bound to chains while the sound of wolves echoes through the chamber. They can no longer move their characters and are bounded to what is happening.",
"The ritual builds in intensity through music and sound as shadows move through the darkness.", "The wolves start coming with a lead cunty singer as their leader."] ,image: "/chained.png"},
{ title: "Ritual Leader", phase: "cave", text: ["A cunty individual to host the ritual where she sings and players watch as their bodies are being eaten by wolves. they can move their heads to look, but not move their bodies. They end up dying."], image: "/dominatrix.png" },
  { title: "Phase 2 -The Escape: June 1st", phase: "escape", text: ["The wall breaks open.", "Ellys steps in and performs a song, giving option for prisoners to join him on a boat to ELSPARK for an escape from Ahriman's trap."] , video:"/escape.avi"},
  { title: "The  Boat", phase: "escape", text: ["Players who join Ellys board on the boat and sail to island of Pandora, to join ELSPARK."] , image:"/boat.png"},

  { title: "ELSPARK 3D", phase: "elspark", text: ["A new decentralised world emerges on the island of Pandora.", "An extension of elspark.online, but on a 3D world with every user having their own avatar"], image:"/ELSPARK.png" },
  { title: "ELSPARK Theatre", phase: "elspark", text: ["They are imemdiately guided to ELSPARK Theatre where, Ellys takes on the stage.","when the lights dim and curtains open, he reveals a screen"], image:"/ELSPARKTheatre.png" },
  { title: "ELSPARK TV", phase: "elspark", text: ["The screen is ELSPARK TV, a digital platform broadcasting live from Apothiki, our first edition of ELCA -  a live theatrical performance we execute in physical space."], image:"/ELSPARKTV.png" },

  { title: "ELSPARK NEWS", phase: "elspark", text: ["ELTV is our media production company and we connect creatives across Europe to produce independent shows, like ELSPARK NEWS, which are broadcasted onto ELSPARK TV. A curated channel only for our original shows.."],image:"/ELSPARKNEWS.png" },
  { title: "What happens after? Phase 3", phase: "elspark", text: ["ELSPARK continues being live in 3D, welcoming new audiences away from Ahriman's corrupted social media spaces.","we make more shows through ELTV to broadcast on ELSPARK TV.",] },
];





export default function App() {
  const [index, setIndex] = useState(0);
  const section = sections[index];

  const next = () => {
    if (index < sections.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
  
    <div className={`app ${section.phase}`}>
    <div className="tv">
      <div className="content">
        <div className="card">
          <h1 className="cardh ">{section.title}</h1>
          {section.text.map((line, i) => (
            <p className=" text-font "key={i}>{line}</p>
          ))}
        </div>
      </div>
  
      {section.image && (
        <img src={section.image} className="bg-image" />
      )}
  
      {section.video && (
        <video
          className="bg-video"
          autoPlay
          loop
          muted
          src={section.video}
        />
      )}
    </div>
  
    <div className="controls">
      <button onClick={prev}>Back</button>
      <button onClick={next}>Next</button>
    </div>
  </div>
  

  );
}