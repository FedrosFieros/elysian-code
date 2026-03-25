import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

const sections = [
  {
    title: "ARCADIA",
    content: (
      <>
        <h1 className="cardh glitch">ARCADIA</h1>

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
      <>
        <h2 className="section-title flicker">CORE MECHANICS</h2>

        <p className="whisper">You may proceed:</p>

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
      </>
    ),
  },
  {
    title: "ELSPARK",
    content: (
      <>
        <h2 className="section-title">ELSPARK</h2>

        <p className="text cinematic">
          This planet runs differently.
        </p>

        <p className="text cinematic">
          No algorithms decide what you see.
        </p>

        <p className="text cinematic">
          No ads interrupt your experience.
        </p>

        <p className="text cinematic">
          No subscriptions gate your access.
        </p>

        <p className="text cinematic emphasis">
          Presence replaces manipulation.
        </p>

        <div className="signal-break">/// ECONOMY ONLINE ///</div>
      </>
    ),
  },
  {
    title: "ECONOMY",
    content: (
      <>
        <p className="text cinematic">
          Value flows through elcoins.
        </p>

        <p className="text cinematic">
          Trade your art. Offer your skill. Build your role.
        </p>

        <p className="text cinematic">
          Earn. Keep. Or extract it back into the real world.
        </p>
      </>
    ),
  },
  {
    title: "ENTER",
    content: (
      <>
        <div className="enter-container">
          <p className="system-msg">ACCESS POINT AVAILABLE</p>

          <a
            href="https://elspark.online"
            target="_blank"
            rel="noopener noreferrer"
            className="enter-link"
          >
            ENTER ELSPARK.ONLINE
          </a>
        </div>

        <div className="signal-break">
          /// END OF TRANSMISSION ///
        </div>
      </>
    ),
  },
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
          <div className="card">{section.content}</div>
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