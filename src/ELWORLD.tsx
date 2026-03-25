import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

const sections = [
  {
    title: "ARCADIA",
    content: (
      <>
        <h1 className="cardh ">ARCADIA</h1>

        <p className="broadcast-line">▮ PLANETARY SIGNAL DETECTED</p>

        <p className="text cinematic">
          A digital planet. Alive through code.
        </p>

        <p className="text cinematic">Code-L is unfolding.</p>

        <p className="text cinematic">You are not watching it.</p>

        <p className="text cinematic emphasis">
          You are inside it.
        </p>

        <div className="signal-break">/// SIGNAL STABLE ///</div>
      </>
    ),
  },
  {
    title: "CORE MECHANICS",
    content: (
      <p className="cinematic">
        <h2 className="cardh">CORE MECHANICS</h2>

       

        <ul className="bullet-list staged">
          <li>
            <span className="highlight">One planet.</span> Open movement.
          </li>
          <li>Shape your own path. Form your own story.</li>
          <li>
            <span className="highlight">
              Events unfold in real time.
            </span>
          </li>
          <li>Miss them, and they are gone.</li>
        </ul>

        <div className="signal-break">/// SYSTEM INTERRUPTION ///</div>
      </p>
    ),
  },
  {
    title: "ELSPARK",
    content: (
      <>
        <h2 className="cardh">ELSPARK</h2>

        <p className="text cinematic">
          This planet runs differently.
        </p>

        <p className="text cinematic">
       Ahriman (an algorithm) has taken over a lot of the land across the planet, but ELSPARK exists as an ecosystem outside of his control.
        </p>

        <p className="text cinematic">
        On ELSPARK, no algorithms decide what you see.  No ads interrupt your experience.
        </p>

        <p className="text cinematic">
          No subscriptions gate your access.
        </p>

        <p className="text cinematic emphasis">
          Presence replaces manipulation.
        </p>
        <p className="text cinematic emphasis">
  And soon ELSPARK will help people take back power and claim Arcadia back.
        </p>

        <div className="signal-break">/// ECONOMY ONLINE ///</div>
      </>
    ),
  },
  
  
  {
    title: "Rest of the land",
    content: (
      <>
        <div className="enter-container">
          <p className="system-msg">
            ARCADIA IS FINITE
          </p>
  
          <p className="text cinematic">
            Land outside ELSPARK is unclaimed.
          </p>
  
          <p className="text cinematic">
            It is ready to be populated.
          </p>
  
          <p className="text cinematic">
          ElCode takes it back from Ahriman and helps individuals build exhibitions, launch businesses or form new societies.
          </p>
  
          <p className="text cinematic emphasis">
            Claim space. Define reality.
          </p>
  
          <p className="text cinematic">
            ElCode assists in constructing your world.
          </p>
  
          <p className="text cinematic">
            No purchase required.
          </p>
  
          <p className="text cinematic highlight">
            Each user receives credits to claim cm² of land.
          </p>
        </div>
  
        <div className="signal-break">
          /// TERRITORY UNLOCKED ///
        </div>
      </>
    )
  }
];

export default function ELWORLD() {
  const [index, setIndex] = useState(0);
  const section = sections[index];

  return (
    <div className="app">
      {/* LEFT NAVBAR */}
      <nav className="navbar">
        <div className="logo" onClick={() => setIndex(0)}>
        <div> 
        <Link 
                    to={'/'} 
                    className="logo" 
                   
                  >
           ELYSIAN CODE
       
               
                  </Link>
                  </div>
        </div>

        <ul className="nav-list">
          {sections.map((sec, i) => (
            <li key={i}>
              <button
                className={`nav-item ${
                  i === index ? "active" : ""
                }`}
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
          <div className="card">{section.content}</div>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="controls">
          <button
            onClick={() =>
              setIndex(Math.max(0, index - 1))
            }
          >
            Back
          </button>

          <button
            onClick={() =>
              setIndex(
                Math.min(sections.length - 1, index + 1)
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}