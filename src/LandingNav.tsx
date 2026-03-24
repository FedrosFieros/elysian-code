import { Link } from "react-router-dom";
import "./App.css";

const cards = [
  {
    title: "Code-L",
    subtitle: "Explore a walkthrough of the meta-mythos Code-L taking place on the digital planet of Arcadia.",
    path: "/ellys-code",
    bgColor: "linear-gradient(135deg,rgb(212, 212, 212), #ffb347)",
    available: true
  },
  {
    title: "Arcadia",
    subtitle: "A 3D digital planet where Code-L unfolds..",
    path: "/elworld",
    bgColor: "linear-gradient(135deg,rgb(0, 0, 0),rgb(175, 175, 175))",
    available: true
  },  {
    title: "ELSPARKTV",
    subtitle: "A curated digital platform for original shows produced by ELTV.",
    path: "/elspark-tv",
    bgColor: "linear-gradient(135deg,rgb(212, 212, 212),rgb(175, 175, 175))",
    available: true
  },
  {
    title: "Elcode Updates", 
    subtitle: "Current projects, strategy and announcements.",
    path: "/elcode-updates",
    bgColor: "linear-gradient(135deg,rgb(21, 26, 28), #0077ff)",
    available: false
  },
  {
    title: "Elly's Code",
    subtitle: "Explore Elly's debut studio album, including tracklist, demos and gameplay notes.",
    path: "/elspark",
    bgColor: "linear-gradient(135deg,rgb(213, 213, 213), #00cc6a)",
    available: false
  },
  {
    title: "ELTV updates",
    subtitle: "shows, scripts, dates, scheduling etc ",
    path: "/eltv",
    bgColor: "linear-gradient(135deg,rgb(255, 72, 0), #00cc6a)",
    available: false
  }
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
          <div className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">Welcome to Elysian Code</h1>
              <p className="hero-subtitle">
                Explore notes and updates for projects.
              </p>
            </div>
          </div>
  
          {/* CARDS */}
          <div className="cards-container">
            {cards.map((card) => (
              <div key={card.path} className={`landing-card-wrapper ${card.available ? '' : 'wip'}`}>
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
                  <div className="landing-card wip" style={{ background: card.bgColor }}>
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