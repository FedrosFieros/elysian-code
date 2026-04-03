import { Link } from "react-router-dom";

const cards = [
  {
    title: "Arcadia",
    kicker: "Arcadia · Foundation",
    headline: "Arcadia: An Autonomous 3D Planet Shaped by Conscious Beings",
    subtitle:
      "Resided by Arcadians, whose body remains static until a conscious being connects with them. Arcadian Records capture the mythos Code-L created by the people — a character's trajectory shaped entirely by the consciousness which lifts it from inertia.",
    path: "/elworld",
    available: true,
    numeral: "I",
  },
  {
    title: "Code-L Phase 1",
    kicker: "Code-L · Phase 1",
    headline: "Ahriman's Cave: Where Every Arcadian First Spawns",
    subtitle:
      "Initially every Arcadian emerges inside a 3D digital cave, with only few at a time able to escape out to the rest of the world.",
    path: "/codeLphase1",
    available: true,
    numeral: "II",
  },
  {
    title: "June 1st",
    kicker: "June 1st · The Escape",
    headline: "Ellys Opens the Door, Pays With His Life",
    subtitle:
      "Ellys breaks into the cave, but Lady Dopamina traps and kills him. Yet in his sacrifice he opens the door for every prisoner to escape — advising them to find ELSPARK for shelter and safe spawn.",
    path: "/CodeLPhase2",
    available: true,
    numeral: "III",
  },
  {
    title: "Characters of this world",
    kicker: "Mythology · Cast",
    headline: "The 12 Entities Who Built This World",
    subtitle:
      "Real-time influencing mythical figures — characters who operate at the intersection of code and consciousness, shaping Arcadia from the inside.",
    path: "/characters",
    available: true,
    numeral: "IV",
  },
];

const cards1 = [
  {
    title: "ELSPARK",
    kicker: "ELSPARK · Digital Park",
    headline: "The Decentralised Sanctuary That Grants Immortality",
    subtitle:
      "A decentralised social digital park, safe from Ahriman's wolves and scarecorps. Players granted shelter away from Ahriman's scarecrows — and when an ELSPARK player dies, they respawn as a new version of themselves.",
    path: "/elspark",
    available: true,
    numeral: "V",
  },
  {
    title: "Elly's Code",
    kicker: "Elly's Code · Musical",
    headline: "An Interactive Musical Where the Past Cannot Be Changed",
    subtitle:
      "Players experience events in real-time — watching Ellys escape The Cave, his journey to ELSPARK, his death, his resurrection as Ellysv1. What was done at the time of the events, stays.",
    path: "/ellyscode",
    available: true,
    numeral: "VI",
  },
  {
    title: "meta-metamorphosis",
    kicker: "Meta-Metamorphosis · Ritual",
    headline: "From Caterpillar to White Moth: An Initiation Game",
    subtitle:
      "To gain immortality, the conscious player plays through an interactive transformation — caterpillar to white moth, then into a final symbol determined by how the game was played.",
    path: "/metametamorphosis",
    available: true,
    numeral: "VII",
  },
  {
    title: "ELSPARKTV",
    kicker: "ELSPARK TV · Programming",
    headline: "Original Programming From Arcadia's Broadcast Network",
    subtitle:
      "A curated digital platform for original shows produced by ELTV — pairing creatives across different fields to create shows, live performances, and experimental media.",
    path: "/elspark-tv",
    available: true,
    numeral: "VIII",
  },
  {
    title: "ELCA",
    kicker: "ELCA · Theatre",
    headline: "Live Theatre Festival, First Edition June 5th",
    subtitle: "Broadcasted from ELSPARK TV. A live theatre festival coming to the platform.",
    path: "/elworld",
    available: false,
    numeral: "IX",
  },
  {
    title: "ElCave",
    kicker: "ElCave · Exhibition",
    headline: "One Visitor, Twenty Minutes, One Ritual on Earth",
    subtitle:
      "An experiential ritualistic private exhibition — only one person at a time for 20 minutes.",
    path: "/elworld",
    available: false,
    numeral: "X",
  },
  {
    title: "Elcode",
    kicker: "Elcode · Infrastructure",
    headline: "The Economic Engine Funding Arcadia's Existence",
    subtitle:
      "Elcode builds customised platforms for independent entrepreneurs and small businesses. Profit sustains ELSPARK (20%), ELTV (20%), ElCare (10%), with the remaining 50% shared equally among Elcode core team members.",
    path: "/elcode-updates",
    available: false,
    numeral: "XI",
  },
  {
    title: "ELTV",
    kicker: "ELTV · Production",
    headline: "A Media Network Connecting Creatives Across Europe",
    subtitle:
      "Shows, skits, live festivals, music, and a general cultural tsunami — produced in-house and broadcast on ELSPARK TV.",
    path: "/eltv",
    available: false,
    numeral: "XII",
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=IM+Fell+English:ital@0;1&display=swap');

  .paper {
    background: #fff;
    font-family: 'IM Fell English', Georgia, serif;
    color: #1a1a1a;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1.5rem 3rem;
    border-left: 0.5px solid #ddd;
    border-right: 0.5px solid #ddd;
    min-height: 100vh;
  }

  .masthead {
    text-align: center;
    border-bottom: 3px double #1a1a1a;
    padding-bottom: 0.75rem;
    margin-bottom: 0.4rem;
  }

  .masthead-flag {
    font-family: 'UnifrakturMaguntia', cursive;
    font-size: clamp(2.6rem, 7vw, 4.8rem);
    line-height: 1;
    color: #1a1a1a;
    letter-spacing: 0.01em;
  }

  .masthead-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    color: #666;
    padding: 0.35rem 0;
    border-top: 0.5px solid #ccc;
    border-bottom: 0.5px solid #ccc;
    margin: 0.4rem 0 0.75rem;
    font-family: Georgia, serif;
    letter-spacing: 0.05em;
  }

  .section-rule {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 1.25rem 0 1rem;
  }

  .section-rule span {
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #888;
    white-space: nowrap;
  }

  .section-rule::before,
  .section-rule::after {
    content: '';
    flex: 1;
    height: 0.5px;
    background: #bbb;
  }

  .articles-container {
    display: flex;
    flex-direction: column;
  }

  .article {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1rem 0;
    border-bottom: 0.5px solid #e0e0e0;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transform: translateX(60px);
    opacity: 0;
    transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                opacity 0.45s ease,
                background 0.2s ease,
                padding 0.2s ease,
                margin 0.2s ease;
    position: relative;
  }

  .article.visible {
    transform: translateX(0);
    opacity: 1;
  }

  .article:hover {
    background: #f7f5f0;
    margin: 0 -1.5rem;
    padding: 1rem 1.5rem;
  }

  .article-wip {
    cursor: default;
    opacity: 0.45;
  }

  .article-wip:hover {
    background: transparent !important;
    margin: 0 !important;
    padding: 1rem 0 !important;
  }

  .article-number {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 900;
    color: #ccc;
    line-height: 1;
    min-width: 2rem;
    text-align: right;
    user-select: none;
    padding-top: 0.1rem;
  }

  .article-divider {
    width: 0.5px;
    background: #e0e0e0;
    align-self: stretch;
    flex-shrink: 0;
  }

  .article-body {
    flex: 1;
    min-width: 0;
  }

  .article-kicker {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #888;
    font-family: Georgia, serif;
    margin-bottom: 0.25rem;
  }

  .article-headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.05rem, 2.5vw, 1.5rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.4rem;
    color: #1a1a1a;
  }

  .article-lead .article-headline {
    font-size: clamp(1.4rem, 4vw, 2.2rem);
  }

  .article-deck {
    font-size: 13px;
    line-height: 1.6;
    color: #555;
    font-style: italic;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .article-lead .article-deck {
    -webkit-line-clamp: 5;
    font-size: 14px;
  }

  .article-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .article-tag {
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-family: Georgia, serif;
    padding: 2px 8px;
    border: 0.5px solid currentColor;
    border-radius: 2px;
  }

  .article-tag-live {
    color: #2d6a3f;
    border-color: rgba(45, 106, 63, 0.35);
    background: rgba(45, 106, 63, 0.06);
  }

  .article-tag-soon {
    color: #999;
    border-color: #ddd;
  }

  .article-arrow {
    font-size: 14px;
    color: #bbb;
    align-self: center;
    flex-shrink: 0;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .article:hover .article-arrow {
    transform: translateX(4px);
    color: #1a1a1a;
  }

  .article-lead {
    border-bottom: 2px solid #1a1a1a;
    padding-bottom: 1.25rem;
    margin-bottom: 0.25rem;
  }

  .col-divider {
    border: none;
    border-top: 3px double #ccc;
    margin: 1.5rem 0 0.5rem;
  }
`;

interface CardType {
  title: string;
  kicker: string;
  headline: string;
  subtitle: string;
  path: string;
  available: boolean;
  numeral: string;
}

interface ArticleCardProps {
  card: CardType;
  isLead: boolean;
  index: number;
}

function ArticleCard({ card, isLead, index }: ArticleCardProps) {
  const delay = index * 80;

  const inner = (
    <>
      <div className="article-number">{card.numeral}</div>
      <div className="article-divider" />
      <div className="article-body">
        <div className="article-kicker">{card.kicker}</div>
        <div className="article-headline">{card.headline}</div>
        <div className="article-deck">{card.subtitle}</div>
        <div className="article-meta">
          <span className={`article-tag ${card.available ? "article-tag-live" : "article-tag-soon"}`}>
            {card.available ? "Available" : "Coming Soon"}
          </span>
        </div>
      </div>
      {card.available && <span className="article-arrow">→</span>}
    </>
  );

  const baseClass = `article${isLead ? " article-lead" : ""}${!card.available ? " article-wip" : ""}`;

  const ref = (el: HTMLElement | null) => {
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  };

  if (card.available) {
    return (
      <Link to={card.path} className={baseClass} ref={ref}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={baseClass} ref={ref}>
      {inner}
    </div>
  );
}

export default function LandingNav() {
  return (
    <>
      <style>{styles}</style>
      <div className="paper">
        <div className="masthead">
          <div className="masthead-flag">The Arcadian Record</div>
        </div>

        <div className="masthead-meta">
          <span>Established in the First Frame</span>
          <span>Code-L Dispatch · All Worlds</span>
          <span>Arcadia Standard Time</span>
        </div>

        <div className="section-rule">
          <span>Arcadian History</span>
        </div>

        <div className="articles-container">
          {cards.map((card, i) => (
            <ArticleCard key={card.title} card={card} isLead={i === 0} index={i} />
          ))}
        </div>

        <hr className="col-divider" />

        <div className="section-rule">
          <span>Experiences on Arcadia</span>
        </div>

        <div className="articles-container">
          {cards1.map((card, i) => (
            <ArticleCard key={card.title} card={card} isLead={i === 0} index={i + cards.length} />
          ))}
        </div>

        <div className="masthead-meta" style={{ marginTop: "2rem", marginBottom: 0 }}>
          <span>Elysian Code</span>
          <span>· · ·</span>
          <span>All worlds connected</span>
        </div>
      </div>
    </>
  );
}