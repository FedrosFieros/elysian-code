
import { Link } from 'react-router-dom';
import './App.css'

import { useState } from "react";


const sections = [
  { 
    title: "Preface", 
    phase: "intro", 
    text: [
      "Welcome to Code-L: An interactive meta-mythos unfolding across ElWord, a new 3D digital world.",
      "Use this document to vavigate through the different phases of development for this new world, the backstory and how players will escape Ahriman's trap to discover ELSPARK (a 3D extension of elspark.online).",
      "Use the left navbar or Next/Back buttons to explore."
    ],   presenterPosition: "center-right"
  },
  { title: "Code-L Phase 1 ", phase: "cave", text: ["Users first experience the mythos and alternative 3D ElWorld,  inside a 3D cave, accessed through a website el.world."],     image: "/cave1.png",   presenterPosition: "top-right" },
  { title: "The Cave", phase: "cave", text: ["Once a player is inside, they can control an avatar.", "But they are not alone. Other online participants will be there in the same room.", "Each player has the same looking avatar but different usernames and a chat bubble to chat to all. They cannot create an account yet, so everytime they spawn as a new character."], image: "/cave-avatars.png"  },
  { title: "GamePlay", phase: "cave", text: ["Players can view screen from first perspective and move their characters to interact with environment and other online players..", ], image: "/firstperspective.png"  },
  { title: "Backstory - Ahriman's plan", phase: "cave", text: ["These caves have been designed by Ahriman to trap humans inside systems which they cannot escape. Deceiving them with a false idea of reality, he holds them prisoners.","The trap represents the financial system which has been designed to trap people into working as slaves to pay debt they are born into."], image: "/Ahriman.png"  },
{ title: "The Puppeteer", phase: "cave", text: ["Assigned by Ahriman and controlled by a person in ElCode from backend, the puppeteer speaks of safety inside the cave and chaos outside..", "She maintains order and calms the participants."] ,image: "/cave-puppeteer.png"},
  { title: "The Blue Device", phase: "cave", text: ["A device every player has with live feed of events posted by puppeteers from backend explaining events happening in mythos Code-L, from an Ahriman perspective. ","This gives opportunity for live participants to talk about them. Room for discussion."],image: "/cave-bluedevice.png" },
  { title: "The Wolves Ritual", phase: "cave", text: ["At certain moments the puppeteer may invite prisoners to follow her toward a dark dungeon located at the back of the cave.",
"Participants who follow enter a ritual space.",
"Within the dungeon a disturbing ceremony unfolds:",
"Prisoners are bound to chains while the sound of wolves echoes through the chamber. They can no longer move their characters and are bounded to what is happening.",
"The ritual builds in intensity through music and sound as shadows move through the darkness.", "The wolves start coming with a lead cunty singer as their leader."] ,image: "/chained.png"},
{ title: "Ritual Leader", phase: "cave", text: ["A cunty individual hosts the ritual where she sings and players watch as their bodies are being eaten by wolves. they can move their heads to look, but not move their bodies. They end up dying. A lived in music video."], image: "/dominatrix.png" },
  

];





export default function TheCave() {
  const [index, setIndex] = useState(0);
  const section = sections[index];

  return (
    <div className={`app ${section.phase} `}>
      {/* LEFT NAVBAR */}
      <nav className="navbar">
      <div>   <Link 
                    to={'/'} 
                    className="logo" 
                   
                  >
                   ELYSIAN CODE
       
               
                  </Link>
                  </div>

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
          {/* ELC0 PRESENTER - MOVES PER SECTION */}
  
        <div className="tv">
          <div className="content">
            <div className="card">
              <h1 className="cardh">{section.title}</h1>
              {section.text.map((line, i) => (
                <p className="text-font" key={i}>{line}</p>
              ))}
              
           
            </div>
          </div>

          {/* IMAGE/VIDEO */}
          {section.image && <img src={section.image} className="bg-image" />}
         
        </div>

        <div className="controls ">
          <button onClick={() => setIndex(Math.max(0, index - 1))}>Back</button>
          <button  onClick={() => setIndex(Math.min(sections.length - 1, index + 1))}>Next</button>
        </div>
      </div>
    </div>
  );
}

