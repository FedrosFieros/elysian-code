import { Link } from "react-router-dom";
import "./App.css";

const cards = [
  {
    title: "Code-L Phase 1 - Ahriman's Cave",
    subtitle: "First entry onto Arcadia and the mythos of Code-L begins in a digital cave.",
    path: "/codeLphase1",
    bgColor: "linear-gradient(135deg,rgb(212, 212, 212), #ffb347)",
    available: true,
  },
  {
    title: "Code-L Phase 2 - The Escape",
    subtitle:
      "On June 1st Ellys breaks into the cave to help prisoners escape giving them option to board on a boat and sail to ELSPARK.",
    path: "/CodeLPhase2",
    bgColor: "linear-gradient(135deg,rgb(212, 212, 212),rgb(255, 108, 71))",
    available: true,
  },
  {
    title: "Arcadia",
    subtitle:
      "A 3D digital planet where mythos of Code-L unfolds and a new society can be hosted...",
    path: "/elworld",
    bgColor: "linear-gradient(135deg,rgb(0, 0, 0),rgb(93, 210, 9))",
    available: true,
  },
  {
    title: "ELSPARK",
    subtitle:
      "A decentralised social digital park on Arcadia, but also accessible on earth.",
    path: "/elspark",
    bgColor: "linear-gradient(135deg,rgb(218, 201, 201),rgb(135, 135, 135))",
    available: true,
  },
  {
    title: "ELSPARKTV",
    subtitle: "A curated digital platform for original shows produced by ELTV.",
    path: "/elspark-tv",
    bgColor: "linear-gradient(135deg,rgb(212, 212, 212),rgb(95, 2, 136))",
    available: true,
  },
  {
    title: "ELCA",
    subtitle:
      "A live theatre festival broadcasted from ELSPARK TV. First edition on June 1st.",
    path: "/elworld",
    bgColor: "linear-gradient(135deg,rgb(0, 0, 0),rgb(175, 175, 175))",
    available: false,
  },
  {
    title: "ElCave",
    subtitle:
      "An experience ritualistic exhibition, for one person to experience at a time in 20 minutes.",
    path: "/elworld",
    bgColor: "linear-gradient(135deg,rgb(0, 0, 0),rgb(175, 175, 175))",
    available: false,
  },
  {
    title: "Elly's Code",
    subtitle:
      "Explore Elly's debut studio album, including tracklist, demos and gameplay notes.",
    path: "/elspark",
    bgColor: "linear-gradient(135deg,rgb(213, 213, 213), #00cc6a)",
    available: false,
  },
  {
    title: "Elcode Updates",
    subtitle: "Current projects, strategy and announcements.",
    path: "/elcode-updates",
    bgColor: "linear-gradient(135deg,rgb(21, 26, 28), #0077ff)",
    available: false,
  },
 
  {
    title: "ELTV updates",
    subtitle: "shows, scripts, dates, scheduling etc ",
    path: "/eltv",
    bgColor: "linear-gradient(135deg,rgb(255, 72, 0), #00cc6a)",
    available: false,
  },
];

// Your existing JSX stays exactly the same
export default function LandingNav() {
  return (
    <div className="landing-app intro">
      {/* CURTAINS */}
      <div className="curtain-left"></div>
      <div className="curtain-right"></div>

      {/* STAGE */}
      <div className="landing-stage">
        {/* SPOTLIGHT */}
        <div className="spotlight"></div>

        {/* HERO */}
        <div className="hero-section ">
          <div className="hero-content ">
            <h1 className="hero-title">Welcome to Elysian Code</h1>
            <p className="hero-subtitle">
              Explore:
              <li>the meta-mythos of Code-L</li>
              <li>the 3D digital planet of Arcadia</li>
              <li>ELSPARK </li>
              <li>ELSPARK TV and ELTV </li>
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="cards-container card ">
          {cards.map((card) => (
            <div
              key={card.path}
              className={`landing-card-wrapper ${card.available ? "" : "wip"}`}
            >
              {card.available ? (
                <Link
                  to={card.path}
                  className="landing-card live"
                  style={{ background: card.bgColor }}
                >
                  <h2>{card.title}</h2>
                  <p>{card.subtitle}</p>
                  <div className="card-arrow">→</div>
                </Link>
              ) : (
                <div
                  className="landing-card wip"
                  style={{ background: card.bgColor }}
                >
                  <h2>{card.title}</h2>
                  <p>{card.subtitle}</p>
                  <div className="wip-badge">WIP</div>
                  <div className="wip-overlay"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
