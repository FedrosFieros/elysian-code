import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

const sections = [
  {
    title: "ELSPARK TV",
    content: (
      <>
                
        <h1 className="cardh ">ELSPARK TV</h1>

        <p className="broadcast-line">▮ LIVE SIGNAL DETECTED</p>

        <p className="text cinematic">
          You are now inside ELSPARK TV.
        </p>

        <p className="text cinematic">
          One stream. One room. Everyone watching together.
        </p>

        <p className="text cinematic">
          This is not content.
        </p>

        <p className="text cinematic emphasis">
          This is a broadcast moment.
        </p>

        <div className="signal-break">/// SIGNAL STABLE ///</div>
      </>
    ),
  },
  {
    title: "MECHANICS",
    content: (
      <>
        <h2 className="cardh ">CORE MECHANICS</h2>

        <p className="text cinematic">Observe:

        <ul className="bullet-list staged">
          <li>
            <span className="highlight">One stream.</span> One room.
          </li>
          <li>Everyone shares the same broadcast.</li>
          <li>
            <span className="highlight">Miss it, and it’s gone.</span>
          </li>
          <li>Chat is live. Presence is real.</li>
        </ul>
        </p>
        <div className="signal-break">/// ELVD DROP INCOMING ///</div>
      </>
    ),
  },
  {
    title: "ELVDS",
    content: (
      <>
        <h2 className="cardh ">ELVDs</h2>

        <p className="text cinematic">ELVDs don’t upload.</p>

        <p className="text cinematic emphasis ">They drop.</p>

        <p className="text cinematic">
          A moment appears. Everyone watches. Then it disappears into time.
        </p>

        <p className="text cinematic">Unless you claim it.</p>

        <p className="text glitch ">for 1 elcoin</p>

        <p className="text cinematic">
          That is all it takes to store a copy of the ELVD in your personal collection.
        </p>

        <p className="text cinematic">
          Own it. Archive it. Or let it vanish forever.
        </p>

        <div className="signal-break">/// SYSTEM INTERRUPTION ///</div>
      </>
    ),
  },
  {
    title: "WHY ELSPARKTV",
    content: (
      <>
        <h2 className="cardh">WHY THIS EXISTS</h2>

        <p className="text cinematic">
          Infinite content killed culture.
        </p>
        <p className="text cinematic">
          Algorithms replaced taste.
        </p>
        <p className="text cinematic">
          Ads replaced meaning.
        </p>
        <p className="text cinematic">
          Exposure replaced payment.
        </p>

        <p className="text cinematic emphasis">
          ELSPARK TV rejects all of it.
        </p>

        <div className="signal-break">/// TONIGHT’S SIGNAL ///</div>
      </>
    ),
  },
  {
    title: "LINEUP",
    content: (
      <>
        <h2 className="section-title ">
          LINEUP — original shows produced through ELTV
        </h2>

        <ul className="bullet-list shows">
          <li>
            <strong>ELSPARK NEWS</strong> — reality performed as theatre
          </li>
          <li>
            <strong>ELLY’S CODE</strong> — philosophy in motion
          </li>
          <li>
            <strong>GARDEN OF ELCO</strong> — conversations inside the system
          </li>
          <li>
            <strong>TWO AS ONE</strong> — nothing is censored
          </li>
          <li>
            <strong>ELCA</strong> — live stage broadcast
          </li>
        </ul>

        <div className="signal-break">/// JOIN THE SYSTEM ///</div>
      </>
    ),
  },
  {
    title: "ELSPARK NEWS",
    content: (
      <>
        <h2 className="section-title ">ELSPARK NEWS</h2>
  <span className="card">
        <img 
          src="/ELSPARKNEWS.png" 
          alt="ELSPARK NEWS"
          className="bg-image"
        />
  </span>
        <p className="text cinematic">
          A satirical depiction of news in the world,
          through the mythos of Code-L using human actors.
        </p>
  
        <p className="text cinematic">
          Archetypes. Satire. Reflection.
        </p>
  
        <p className="text cinematic">
          ELTV connects creatives across Europe to produce
          independent shows broadcast exclusively on ELSPARK TV.
        </p>
  
        <div className="signal-break">/// BROADCAST ARCHIVED ///</div>
      </>
    )
  },
  {
    title: "ELTV",
    content: (
      <>
        <h2 className="section-title glitch">ELTV</h2>

        <p className="text cinematic">
          A creative network to form teams and create original shows.
        </p>

        <p className="text cinematic">
          Own everything you make.
        </p>

        <p className="text cinematic emphasis">
          100% of the value to contributing teams of every project.
        </p>

<p className="text cinematic emphasis">
          One curated channel for viewers to watch
        </p>
        
        <div className="enter-container">
          <p className="system-msg">ACCESS POINT AVAILABLE</p>

          <a
            href="https://elspark.online/el-tv"
            target="_blank"
            rel="noopener noreferrer"
            className="enter-link"
          >
            ENTER ELSPARK.ONLINE/el-tv
          </a>
        </div>

        <div className="signal-break">
          /// END OF TRANSMISSION ///
        </div>
      </>
    ),
  },
];

export default function ELSPARKTV() {
  const [index, setIndex] = useState(0);
  const section = sections[index];

  return (
    <div className="app">
      {/* NAVBAR */}
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

      {/* CONTENT */}
      <div className="main-content">
        <div className="tv">
        <div className="content">
          <div className="card">{section.content}</div>
          </div>
        </div>

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