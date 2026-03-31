import { Link } from "react-router-dom";
import "./el.css"; // Your shared CSS file
const cards = [
    {
        title: "Arcadia",
        label: "An autonomous 3D Planet",
        subtitle: "Resided by Arcadians, whose body remains static until a conscious being connects with them. Arcadian Records record the history at every frame, capturing the mythos Code-L created by the people. A character's trajectory is shaped by the consciousness which lifts it from a static state (inertia) .",
        path: "/elworld",
        accent: "#4ecb6b",
        available: true,
        icon: "⬡",
      },
  {
    title: "Code-L Phase 1",
    label: "Ahriman's Cave (available in May)",
    subtitle: "Initially every Arcadian spawns  inside a 3D digital cave, with only few at a time able to escape out to the rest of the world.",
    path: "/codeLphase1",
    accent: "#e8c97a",
    available: true,
    icon: "◈",
  },
  {
    title: "June 1st",
    label: "The Escape",
    subtitle: "Ellys breaks into the cave, but Lady Dopamina traps him and kills him. However he opens door for every prisoner to escape. He advises them that if they are looking for shelter and spawn safely they need to find ELSPARK.",
    path: "/CodeLPhase2",
    accent: "#ff7c5c",
    available: true,
    icon: "◎",
  },

];
const cards1 = [
  {
    title: "ELSPARK",
    label: "Digital Park",
    subtitle: "A decentralised social digital park on Arcadia, safe from Ahriman's wolves and scarecorps. Players who sign up are granted safe shelter away from Ahriman, whose scarecrows attack sleeping bodies if left exposed. In addition, ELSPARK grants immortality. When an ELSPARK player dies, they can always respawn, but as a new version of them.",
    path: "/elspark",
    accent: "#c0bfbf",
    available: true,
    icon: "✦",
  },
 
  {
    title: "Elly's Code",
    label: "An interactive musical",
    subtitle: "Commencing from the first time Ellys escapes The Cave and his journey to find ELSPARK, to then go back to The Cave where Lady Dopamina kills him. But he then gets ressurected as Ellysv1 at ELSPARK. Players can experience it in real-time, watching the events unfold, around them but they cannot influence them. What was done at the time of the events, stays.",
    path: "/ellyscode",
    accent: "#00cc6a",
    available: true,
    icon: "♫",
  },
  {
    title: "meta-metamorphosis",
    label: "Initiation Ritual ",
    subtitle: "For the conscious player to gain immortality, they can play through an interactive game of a caterpillar transforming into a white moth and then later transforming to a symbol determined by how the game was played.",
    path: "/metametamorphosis",
    accent: "#00cc6a",
    available: true,
    icon: "♫",
  },
  {
    title: "ELSPARKTV",
    label: "Original Programming",
    subtitle: "A curated digital platform for original shows produced by ELTV. Our media production network, pairing creatives across different fields to create shows, live performances or other experimental media.",
    path: "/elspark-tv",
    accent: "#b07fff",
    available: true,
    icon: "▣",
  },
  {
    title: "ELCA",
    label: "Live Theatre Festival",
    subtitle: "A live theatre festival broadcasted from ELSPARK TV. First edition June 5th.",
    path: "/elworld",
    accent: "#888",
    available: false,
    icon: "◇",
  },
  {
    title: "ElCave",
    label: "Ritual Exhibition",
    subtitle: "An experiential ritualistic private exhibition on Earth, with only one person at a time for 20 minutes.",
    path: "/elworld",
    accent: "#888",
    available: false,
    icon: "◉",
  },
  {
    title: "Elcode ",
    label: "Source of Funding for Arcadia",
    subtitle: "ElCode helps independent enterpreneurs or small-medium businesses build a customised platform, to digitise their service, reaching a wider audience and controlling their personal operational requirements. Tailored to their needs to accomodate automation of the manual. Profit coming back to ElCode is shared as 20% for operations of ELSPARK (which is the heart of Arcadia and what keeps it breathing), 20% for ELTV (funding to original media, shows and interactive software built in-house), 10% to ElCare with rest of 50% shared to members of ElCode Core team who all distribute this amount equally. ",
    path: "/elcode-updates",
    accent: "#0077ff",
    available: false,
    icon: "⌘",
  },
  {
    title: "ELTV ",
    label: "Our media production network, connecting creatives across Europe to film digital shows and broadcast on ELSPARK TV. .",
    subtitle: "Shows, skits, live festivals, music and a general cultural tsunami.",
    path: "/eltv",
    accent: "#ff4800",
    available: false,
    icon: "⊕",
  },]

export default function LandingNav() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .el-landing {
          min-height: 100vh;
          width: 100%;
          background:rgb(106, 106, 106);
          color: #f0ece4;
          font-family: 'Cormorant Garamond', Georgia, serif;
          position: relative;
          overflow-x: hidden;
          overflow-y:auto;
        }

        /* ── CURTAINS ── */
        .el-curtain {
          position: fixed;
          top: 0;
          height: 100%;
          width: 52%;
          z-index: 50;
          pointer-events: none;
          background: linear-gradient(160deg, #1c0810 0%, #080308 50%, #1a0512 100%);
        }
        .el-curtain::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 28px,
            rgba(255,255,255,0.012) 29px,
            rgba(255,255,255,0.012) 30px
          );
        }
        .el-curtain-left {
          left: 24%;
          border-right: 2px solid rgba(180,130,60,0.4);
          animation: curtainLeft 1.8s cubic-bezier(0.77,0,0.18,1) 0.2s forwards;
        }
        .el-curtain-right {
          right: 24%;
          border-left: 2px solid rgba(180,130,60,0.4);
          animation: curtainRight 1.8s cubic-bezier(0.77,0,0.18,1) 0.2s forwards;
        }
        @keyframes curtainLeft  { to { left: -55%;  } }
        @keyframes curtainRight { to { right: -55%; } }

        /* ── STAGE REVEAL ── */
        .el-stage {
          opacity: 0;
          animation: stageIn 0.6s ease 0.9s forwards;
        }
        @keyframes stageIn { to { opacity: 1; } }

        /* ── SPOTLIGHT ── */
        .el-spotlight {
          position: fixed;
          top: -30%;
          left: 50%;
          transform: translateX(-50%);
          width: 70vw;
          height: 90vh;
          pointer-events: none;
          z-index: 1;
          background: radial-gradient(
            ellipse at 50% 0%,
            rgba(240,220,160,0.08) 0%,
            rgba(255,200,100,0.04) 30%,
            transparent 65%
          );
        }

        /* ── HEADER ── */
        .el-header {
          text-align: center;
          padding: 6rem 2rem 3rem;
          position: relative;
          z-index: 10;
        }
        .el-eyebrow {
          font-family: 'Cinzel', serif;
          font-size: clamp(0.6rem, 2.5vw, 1.95rem);
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: rgba(228,200,120,0.6);
          margin-bottom: 1.5rem;
        }
        .el-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2.4rem, 7vw, 5.5rem);
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          line-height: 1;
          background: linear-gradient(135deg, #e8c97a 0%, #fff8ee 45%, #c9a84c 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
        }
        .el-rule {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(228,200,120,0.5), transparent);
          margin: 1.5rem auto;
        }
        .el-subtitle {
          font-size: clamp(1rem, 2vw, 2.25rem);
          color: rgba(240,236,228,0.6);
          font-style: italic;
          font-weight: 300;
          letter-spacing: 0.05em;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* ── GRID ── */
        .el-grid {
          display: flex;
          flex-direction:column;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
          gap: 1.5px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem 1.5rem 6rem;
          position: relative;
          z-index: 10;
        }

        /* ── CARD ── */
        .el-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2.5rem 2rem 2rem;
          min-height: 280px;
          margin-top:100px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          border: 1px solid rgba(255,255,255,0.04);
          background:rgb(0, 0, 0);
          transition: background 0.4s ease;
          cursor: pointer;
        }
        .el-card:first-child { border-radius: 1.5rem 0 0 0; }
        .el-card:nth-child(3) { border-radius: 0 1.5rem 0 0; }
        .el-card:nth-last-child(1) { border-radius: 0 0 1.5rem 1.5rem; }

        .el-card-bg {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
          
        }
        .el-card:hover .el-card-bg { opacity: 1; }

        .el-card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          transition: width 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .el-card:hover .el-card-accent { width: 100%; }

        .el-card-icon {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          opacity: 0.25;
          transition: opacity 0.3s ease, transform 0.4s ease;
        }
        .el-card:hover .el-card-icon {
          opacity: 0.9;
          transform: scale(1.1);
        }

        .el-card-label {
          font-family: 'Cinzel', serif;
          font-size: 1.6rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(240,236,228,0.35);
          margin-bottom: 0.4rem;
          transition: color 0.3s ease;
        }
        .el-card:hover .el-card-label { color: rgba(240,236,228,0.7); }

        .el-card-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .el-card-desc {
          font-size: 2.275rem;
          line-height: 1.7;
          color: rgb(196, 196, 196);
          font-style: italic;
          font-weight: 300;
          transition: color 0.3s ease;
        }
        .el-card:hover .el-card-desc { color: rgba(240,236,228,0.8); }

        .el-card-arrow {
          position: absolute;
          top: 2rem;
          right: 2rem;
          font-size: 1.2rem;
          opacity: 0;
          transform: translate(-6px, 6px);
          transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .el-card:hover .el-card-arrow {
          opacity: 0.9;
          transform: translate(0, 0);
        }

        /* LIVE BADGE */
        .el-badge {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          font-family: 'Cinzel', serif;
          font-size: 0.55rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          border: 1px solid;
        }
        .el-badge-live {
          color: #4ecb6b;
          border-color: rgba(78,203,107,0.3);
          background: rgba(78,203,107,0.08);
        }
        .el-badge-wip {
          color: rgba(240,236,228,0.3);
          border-color: rgba(240,236,228,0.1);
          background: rgba(0,0,0,0.3);
        }

        /* WIP STATE */
        .el-card-wip {
          cursor: default;
          filter: saturate(0.3) brightness(0.6);
        }
        .el-card-wip:hover { background: #0d090c !important; }
        .el-card-wip:hover .el-card-bg { opacity: 0 !important; }
        .el-card-wip:hover .el-card-accent { width: 0 !important; }
        .el-card-wip:hover .el-card-icon { opacity: 0.25 !important; transform: none !important; }

        /* ── FOOTER ── */
        .el-footer {
          text-align: center;
          padding: 2rem;
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.4em;
          color: rgba(240,236,228,0.15);
          position: relative;
          z-index: 10;
          border-top: 1px solid rgba(255,255,255,0.04);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 600px) {
          .el-header { padding: 4rem 1.5rem 2rem; }
          .el-grid { grid-template-columns: 1fr; gap: 1px; padding: 1rem 0 4rem; }
          .el-card { min-height: 220px; }
          .el-card:first-child, .el-card:nth-child(3), .el-card:nth-last-child(1) { border-radius: 0; }
        }

        @media (min-width: 601px) and (max-width: 900px) {
          .el-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 901px) {
          .el-grid { grid-template-columns: repeat(3, 1fr); }
        }

}

      `}</style>

      <div className="el-landing">
        {/* Curtains */}
   



        <div className="">
          {/* Header */}
          <header className="el-header">
            

            <h1 className="el-title">Arcadian CODE</h1>
          
            <div className="el-rule" />
            <p className="">
 <h1 className="cinematic">Arcadia is a digitally rendered planet, shaped by its residents, the Arcadians.</h1>
 <h2 className="cinematic">and Code -L is an infinitely auto-generative mythos, measured every frame through matrix coordinates and memories. </h2>
            </p>
          
          </header>

          {/* Cards Grid */}
          <div className="el-grid ">
          <h2 className="cinematic">Arcadian History </h2>
        
            {cards.map((card, i) => {
              const inner = (
                <div className="">
                  <div
                    className="el-card-bg "
                    style={{
                      background: `radial-gradient(ellipse at 80% 120%, ${card.accent}18 0%, transparent 60%)`,
                    }}
                  />
                  <div
                    className="el-card-accent"
                    style={{ background: card.accent }}
                  />
              
                  <h2 className="el-card-title" style={{ color: card.available ? "#f0ece4" : "rgba(240,236,228,0.4)" }}>
                    {card.title}
                  </h2>
                  <span className={`"" ${card.available ? "el-badge-live" : "el-badge-wip"}`}>
                    {card.available ? "click to read" : "Soon"}
                  </span>
                  <div className="el-card-icon" style={{ color: card.accent }}>
                    {card.icon}
                  </div>
                  <p className="el-card-label">{card.label}</p>
              
                  <p className="el-card-desc">{card.subtitle}</p>
                  {card.available && (
                    <span className="el-card-arrow" style={{ color: card.accent }}>↗</span>
                  )}
                </div>
              );

              return card.available ? (
                <Link
                  key={i}
                  to={card.path}
                  className="el-card"
                  style={{ animationDelay: `${i * 0.05 + 1.8}s`, opacity: 0, animation: `stageIn 0.5s ease ${i * 0.05 + 1.8}s forwards` }}
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={i}
                  className="el-card el-card-wip"
                  style={{ animationDelay: `${i * 0.05 + 1.8}s`, opacity: 0, animation: `stageIn 0.5s ease ${i * 0.05 + 1.8}s forwards` }}
                >
                  {inner}
                </div>
              );
            })}
<h1 className="cinematic " > Experiences on Arcadia:</h1>
{cards1.map((card, i) => {
              const inner = (
                <div className="">
                  <div
                    className="el-card-bg "
                    style={{
                      background: `radial-gradient(ellipse at 80% 120%, ${card.accent}18 0%, transparent 60%)`,
                    }}
                  />
                  <div
                    className="el-card-accent"
                    style={{ background: card.accent }}
                  />
              
                  <h2 className="el-card-title" style={{ color: card.available ? "#f0ece4" : "rgba(240,236,228,0.4)" }}>
                    {card.title}
                  </h2>
                  <span className={`"" ${card.available ? "el-badge-live" : "el-badge-wip"}`}>
                    {card.available ? "click to read" : "Soon"}
                  </span>
                  <div className="el-card-icon" style={{ color: card.accent }}>
                    {card.icon}
                  </div>
                  <p className="el-card-label">{card.label}</p>
              
                  <p className="el-card-desc">{card.subtitle}</p>
                  {card.available && (
                    <span className="el-card-arrow" style={{ color: card.accent }}>↗</span>
                  )}
                </div>
              );

              return card.available ? (
                <Link
                  key={i}
                  to={card.path}
                  className="el-card"
                  style={{ animationDelay: `${i * 0.05 + 1.8}s`, opacity: 0, animation: `stageIn 0.5s ease ${i * 0.05 + 1.8}s forwards` }}
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={i}
                  className="el-card el-card-wip"
                  style={{ animationDelay: `${i * 0.05 + 1.8}s`, opacity: 0, animation: `stageIn 0.5s ease ${i * 0.05 + 1.8}s forwards` }}
                >
                  {inner}
                </div>
              );
            })}
          </div>

          <footer className="el-footer">Elysian Code · All worlds connected</footer>
        </div>
      </div>
    </>
  );
}