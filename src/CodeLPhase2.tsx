import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./el.css";
const sections = [
  {
    title: "June 1st - Ellys breaks cave door.",
    phase: "escape",
    text: [
      "At 8pm, the gated door breaks open ",
      "Ellys:",
      "Lady Domina, i am here to take you with me. I found it. I found immortality. we no longer have to worry about death, together we can live for eternity. Sheltered from Ahriman's scarecrows fed on our flesh. ",
      "Lady Dopamina :",
      "”Oh silly child. who told you that immortality is for you. You should had stayed in your place next time. Come and take a seat, the blue light can guide you. You wont ever need to look outside.",
    "Ellys:",
 "But it’s true. Elco promised it to me. There can be a whole world outside of the blue light in this cave that we see. She can give it to you and to other Arcadians alike. She resides on ELSPARK, on an island away from Ahriman’s greedy mind.",
"Lady Domina:","They will always come back to the cave, it’s safe and accessible. You speak utopian, in a dystopian world.”.",
"Ellys:",
"Shouldn’t they at least explore what lies outside to see if they like it? They deserve to have a vote. They deserve to participate in the distribution of gold . Shouldn’t they consider looking at alternatives to this cave? Or will they carry on being emprisoned algorithmic prey."
,"Lady Domina:",
"No they cant” - (closes door and wolves come out from dungeon)",
"Ellys:",
"Why wont you let them go? What is your ultimate goal? Food for the wolves are you looking for? Ahriman is lying to you, he will come to kill you next.”",
"Lady Dopamina (chains him):",
"”Pleasure is the highest form of luxury, I will show it to you crystal clear if you dont want to adhere, (stabs him three times)"

]

    ,
    video: "/escape.avi",
  },
  {
    title: "Puppeteer kills Ellys, while he sings “my heart cant take another bleed.”",
    phase: "escape",
    image:"Ellys-chained.png",
    text: [
      "Chained and stabbed by Dopamina Ellys starts to sing:",
  ],
    lyrics: [
      "verse 1: “urgency “urgency! my heart cant take another bleed.",
      "Ahriman’s war, threatens to kill our inner kids.",
      "urgency “urgency! a scar she stabbed for my blood to freeze.",
      "Bases she built on my heart, without my permit.”",
      "verse 2: “dizzy boy I thought I found her",
      "the one to be with me when it darkens.",
      "foolish of me to trust the puppeteer.",
      "this cave we need to leave, she sold us the wrong idea.",
    
      "my hand i extend to the monarch inside",
      "ego laid the soil for the self now to drive.",
      "foolish of me to let you inside my gear,",
      "we could had sailled away, the sea feels so sincere.",
      "verse 3: “I strip myself from all my fears.",
      "I choose to escape, to this trap I will not adhere.",
      "they are lying to you, Ahriman, and his wolves are here.",
      "come come escape with me away from the slaughter. mental guillotina.",
      "verse 4: “Our attention turned into a mechanical coil",
      "we cant speak from God, our brains have no choice.",
      "I refuse to stay, to an algorithm to obey.",
      "where does the surplus go why do I have to slave, for the wolves to eat the cake?",
      "power to the people, a laocratic world.",
      "we dont need violence, we need new ecosystems.",
      "we need infrastructures to distribute gold.",
      "then ahriman has no worth, then ahriman has no worth",
      ".",
      "(Action)Ellys sings directly to Lady Dopamina, while he is bleeding.",
      ".",
      "verse 5: “light a spark and throw it down my spine,",
      "you can start a wildfire when you smile.",
      "melt my heart, posses me if you want me",
      "I try to lift the anchor, my hand you are holding",
      "how can we sail to a new life? to a system I dont believe in, I wont oblige.",
      "I choose not to stay to this cave here to hide.",
      "my hand let go, I choose to take control",
      "the wheel i rotated, I lift the anchor for the sea I sail",
      "looking for a new world, i welcome you to come with me",
      "the tides we face but we stay still, whether you come or not,",
      "from this cave I will still go, thank you for the lessons you have given me,",
      "my heart cannot bleed no more.'",
      "action: Ellys dies.",
    ],
    audio: "/MHCTAB19.wav",
  },
  {
    title: "Prisoners Escape",
    phase: "escape",
    text: [
      
      "people can escape from cave and while exploring outside some residents from ELSPARK are there to greet them abd guide them to the island of Pandora.",  
    "They can sail a boat to ELSPARK where they can join a new decentralised society. Residents are granted immortality and a safe shelter for when they go to sleep.",],
    image: "/boat.png",
  },
 
  {
    title: "ELSPARK ",
    phase: "elspark",
    text: [
      "Ellys wakes up on ELSPARK.", "A  decentralised park on the island of Pandora, free from Ahriman's control or visibility.",
      "Hosted by Elco,offers a new laocratic environment, where questions are posed every month and residents can vote, with everyone's votes holding the same weight.",
      "ELSPARK also offers people who sign up a safe shelter to sleep when their consciousness is away.",
      " Fully protected from Ahriman's scarecrows or wolves.", 
      

    ],
   
  },
 
];

type Phase = "intro" | "cave";

const phaseColors: Record<Phase, { accent: string; glow: string }> = {
  intro: { accent: "#...", glow: "#..." },
  cave: { accent: "#...", glow: "#..." },
};
export default function CodeLPhase2() {
  const [index, setIndex] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const section = sections[index];
  const { accent } =
  phaseColors[section.phase as keyof typeof phaseColors] || phaseColors.cave;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setNavOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  const goTo = (i: number) => {
    setIndex(i);
    setNavOpen(false);
  };

  return (
    <>
      {/* You can reuse the same <style> block from TheCave here,
          or move it to a shared CSS file and just keep the classNames identical. */}

      <div
        className="ec-shell"
        style={
          {
            "--accent": accent,
            "--accent-rgb": accent
              .replace("#", "")
              .match(/.{2}/g)!
              .map((h: string) => parseInt(h, 16))
              .join(","),
          } as React.CSSProperties
        }
      >
        {/* Mobile overlay */}
        <div
          className={`ec-overlay ${navOpen ? "open" : ""}`}
          onClick={() => setNavOpen(false)}
        />

        {/* Sidebar */}
        <nav className={`ec-sidebar ${navOpen ? "open" : ""}`}>
          <Link to="/" className="ec-logo">
          ARCADIA
          </Link>
          <h2 className="ec-logo "> Phase 2</h2>
          <ul className="ec-nav-list">
            {sections.map((sec, i) => (
              <li key={i}>
                <button
                  className={`ec-nav-item ${i === index ? "active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  {sec.title}
                </button>
              </li>
            ))}
                <Link to="/elspark" className=" ec-btn  "> <h1>Go to chapter</h1>ELSPARK</Link>
          </ul>
      
        </nav>

        {/* Stage */}
        <div className="ec-stage">
          
          <div className="ec-spotlight" />

          {/* Mobile toggle */}
          <button className="ec-toggle" onClick={() => setNavOpen(true)}>
            ☰
          </button>
{/* Background Video */}
<img
          className="ec-bg-video"
          
        
          src="/Ellys-chained.png" 
        />
          {/* Screen */}
          <div className="ec-screen">
            {/* Media: video first, otherwise image */}
 {section.video ? (
                <video
                  className="ec-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={section.video}
                />
              ) : section.image ? (
                <img
                  src={section.image}
                  alt={section.title}
                  className="ec-image"
                />
              ) : null}
              {/* Lyrics block */}
            <div className="ec-content">
              <p className="ec-phase-tag">
                {section.phase === "escape" ? "Code-L · Phase 2" : "ELSPARK"}
              </p>

              <h1 className="ec-title">{section.title}</h1>
              <div className="ec-rule" />

              <div className="ec-text-block">
                {section.text?.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                
              </div>
 
              {section.lyrics && (
                <div className="ec-text-block" style={{ marginTop: "1.5rem" }}>
                  <p
                    style={{
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                      opacity: 0.7,
                    }}
                  >
                    Lyrics
                  </p>
                  {section.lyrics.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}

              {/* Audio player */}
              {section.audio && (
                <div style={{ marginTop: "1.5rem" }}>
                  <audio
                    controls
                    src={section.audio}
                    style={{ width: "100%" }}
                  >
                    Your browser does not support audio.
                  </audio>
                </div>
              )}

             
            </div>
          </div>

          {/* Controls */}
          <div className="ec-controls">
            <div className="ec-progress">
              {sections.map((_, i) => (
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
                onClick={() =>
                  setIndex(Math.min(sections.length - 1, index + 1))
                }
                disabled={index === sections.length - 1}
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
