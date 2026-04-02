import { IconCode, IconPen } from "../Icons";
import { CAPS } from "./homeData";

export default function CapabilitiesSection() {
  return (
    <section id="build" className="sec defer-section">
      <div className="wrap">
        <div className="caps-layout">
          <div className="reveal">
            <div className="eyebrow">
              <IconPen /> Capabilities
            </div>
            <h2 className="h2">
              Zero Fluff
              <br />
              Infrastructure.
            </h2>
            <p className="body">
              Frontend systems, AI agent builds, product thinking, automation, and
              technical positioning. Clear scope. Clean execution.
            </p>
            <div className="caps-meta">
              <div className="caps-meta-item">
                <span className="caps-meta-num">5+</span>
                <span className="caps-meta-label">Live Products</span>
              </div>
              <div className="caps-meta-item">
                <span className="caps-meta-num">∞</span>
                <span className="caps-meta-label">Iteration Loops</span>
              </div>
              <div className="caps-meta-item">
                <span className="caps-meta-num">0</span>
                <span className="caps-meta-label">Fluff</span>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="hud-card">
              <div className="hud-head">
                <div>
                  <div className="hud-lbl">Matrix</div>
                  <div className="hud-ttl">System Output</div>
                </div>
                <IconCode />
              </div>
            </div>
            <div className="caps-grid">
              {CAPS.map((capability) => (
                <div className="cap" key={capability}>
                  <span className="arr">&gt;</span>
                  <span className="cap-text">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
