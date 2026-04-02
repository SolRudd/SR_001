import { IconArrow, IconBolt, IconTerm } from "../Icons";
import { HUD_ROWS, STATS } from "./homeData";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg-text" aria-hidden="true">
        SOL
      </div>
      <div className="wrap">
        <div className="hero-grid">
          <div className="reveal">
            <div className="badge">
              <div className="dot" />
              Live Operator Feed&nbsp;&nbsp;//&nbsp;&nbsp;Active
            </div>

            <h1 className="h1">
              I build
              <br />
              <span className="c" data-text="websites">
                websites
              </span>
              ,
              <br />
              <span className="m">AI products</span>,
              <br />
              <span className="d">&amp; agentic systems.</span>
            </h1>

            <div className="hero-body">
              <p>
                I'm Sol Rudd. I build premium websites, AI tools, autonomous agents,
                and technical infrastructure for founders and real-world businesses
                that need sharper execution.
              </p>
              <div className="ticker">
                <IconTerm />
                <span>Executing:</span>
                <span className="ticker-items">
                  Jigma / GardenVisionary / GreenTracer / LoveCookies / BuzzBoost
                </span>
                <div className="cursor" />
              </div>
            </div>

            <div className="actions">
              <a href="#work" className="btn btn-solid">
                Deploy Work <IconArrow />
              </a>
              <a href="#build" className="btn btn-ghost">
                Inspect Scope
              </a>
            </div>
          </div>

          <div className="hud-stack reveal">
            <div className="hud-card">
              <div className="hud-scan" />
              <div className="hud-head">
                <div>
                  <div className="hud-lbl">System HUD</div>
                  <div className="hud-ttl">Current Vector</div>
                </div>
                <IconBolt />
              </div>
              <div className="hud-rows">
                {HUD_ROWS.map(({ key, val }, index) => (
                  <div className="hud-row" key={key}>
                    <span className="hud-k">{key}</span>
                    <span className={index === 2 ? "hud-v-w" : "hud-v"}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="stats">
              {STATS.map(({ label, val }) => (
                <div className="stat" key={label}>
                  <div className="stat-lbl">{label}</div>
                  <div
                    className={`stat-val${
                      val.length > 5 ? " sm" : val === "Agency" ? " md" : ""
                    }`}
                  >
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
