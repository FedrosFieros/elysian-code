import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

const sections = [
  {
    title: "ELSPARK",
    content: (
      <>
        <h1 className="cardh ">ELSPARK</h1>

        <p className="text cinematic">A social digital park</p>

        <p className="text cinematic">
          Built on variety of attractions, it welcomes visitors to connect
          amongst strangers outside of algorithms.
        </p>

        <p className="text cinematic">
          Built on laocracy, with an in-house currency token it is the host of a
          decentralised society.
        </p>

        <p className="text cinematic emphasis">
          Visitors dont just watch, they participate.
        </p>

        <div className="signal-break">/// SIGNAL STABLE ///</div>
      </>
    ),
  },
  {
    title: "CORE MECHANICS",
    content: (
      <>
        <h2 className="cardh"> MECHANICS</h2>

        <ul className="bullet-list staged cinematic">
          <li>
            <span className="highlight">One park.</span> Open movement.
          </li>
          <li>
            A social infrastructure for people to come alone and make new
            friends.
          </li>
          <li>
            <span className="highlight">
              Open discussions with no censorship.
            </span>
          </li>
          <li>No algorithm to dictate who watches what..</li>
        </ul>
      </>
    ),
  },
  {
    title: "ATTRACTIONS",
    content: (
      <>
        <h2 className="cardh">ATTRACTIONS</h2>

        <p className="text cinematic">ELSPARK is composed of spaces.</p>

        <p className="text cinematic">Each one serves a different function.</p>

        <p className="text cinematic emphasis">Move between them freely.</p>

        <div className="signal-break glitch">/// SPACES AVAILABLE ///</div>

        <ul className="bullet-list staged cinematic ">
          <li>
            <span className="highlight">SOCIAL LABYRINTH</span> — Meet strangers
            instantly. Speak without identity pressure.
          </li>

          <li>
            <span className="highlight">PERSONAL PARK</span> — Track
            connections. Build your own circle from nothing.
          </li>

          <li>
            <span className="highlight">NEWSPAPER</span> — A shared digital
            chronicle. Everything unfolds in real time.
          </li>

          <li>
            <span className="highlight">DIGI-MARKET</span> — Book sessions.
            Interact with humans or AI entities.
          </li>
        </ul>

        <p className="text cinematic">Some spaces are built by the system.</p>

        <p className="text cinematic">Others will be built by users.</p>

        <p className="text cinematic emphasis">The map is not fixed.</p>

        <div className="signal-break">/// EXPANSION POSSIBLE ///</div>
      </>
    ),
  },
  {
    title: "ECONOMY",
    content: (
      <>
        <p className="cardh">Value flows through elcoins.</p>

        <p className="text cinematic">
          Trade your art. Offer your skill. Build your role.
        </p>

        <p className="text cinematic">
          Earn. Keep. Or extract it back into the real world.
        </p>

        <p className="text cinematic">
          elcoins can be purchased and sold based on the <span>euro</span>.
        </p>
      </>
    ),
  },

  {
    title: "ENTER",
    content: (
      <p className="cinematic">
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

          <p>
            This is only the social infrastructure. The 3D world is under
            construction.
          </p>
        </div>

        <div className="signal-break">/// END OF TRANSMISSION ///</div>
      </p>
    ),
  },
  {
    title: "LAOCRACY",
    content: (
      <>
        <h2 className="cardh">LAOCRACY</h2>

        <p className="text cinematic">ELSPARK is not governed from above.</p>

        <p className="text cinematic">It is shaped by its participants.</p>

        <p className="text cinematic">
          Systems evolve through collective decision.
        </p>

        <p className="text cinematic">Spaces define their own rules.</p>

        <p className="text cinematic emphasis">
          Power is distributed. Influence is earned through presence.
        </p>

        <p className="text cinematic">This is not democracy.</p>

        <p className="text cinematic emphasis">This is laocracy.</p>

        <div className="signal-break">/// GOVERNANCE DECENTRALISED ///</div>
      </>
    ),
  },
  {
    title: "ALTER EGOS",
    content: (
      <>
        <h2 className="section-title glitch">ALTER EGOS</h2>

        <p className="text cinematic">You do not enter ELSPARK as yourself.</p>

        <p className="text cinematic">You construct an identity.</p>

        <p className="text cinematic">
          A role. A presence. A version of you that can exist inside the system.
        </p>

        <p className="text cinematic">
          Some perform. Some build. Some observe.
        </p>

        <p className="text cinematic emphasis">
          Your alter ego becomes your interface with the world.
        </p>

        <div className="signal-break">/// IDENTITY LAYER ACTIVE ///</div>
      </>
    ),
  },
];

export default function ELSPARK() {
  const [index, setIndex] = useState(0);
  const section = sections[index];

  return (
    <div className="app">
      {/* LEFT NAVBAR */}
      <nav className="navbar">
        <div className="logo" onClick={() => setIndex(0)}>
          <div>
            <Link to={"/"} className="logo">
              ELYSIAN CODE
            </Link>
          </div>
        </div>

        <ul className="nav-list">
          {sections.map((sec, i) => (
            <li key={i}>
              <button
                className={`nav-item ${i === index ? "active" : ""}`}
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
      

        {/* CONTROLS */}
        <div className="controls">
          <button onClick={() => setIndex(Math.max(0, index - 1))}>Back</button>

          <button
            onClick={() => setIndex(Math.min(sections.length - 1, index + 1))}
          >
            Next
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
