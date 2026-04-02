import { IconRadar } from "../Icons";
import { TERM_LINES } from "./homeData";

export default function SignalSection() {
  return (
    <section id="signal" className="sec defer-section">
      <div className="wrap">
        <div className="signal-layout">
          <div className="reveal">
            <div className="eyebrow">
              <IconRadar /> Signal
            </div>
            <h2 className="h2">
              Building in public,
              <br />
              teaching through output.
            </h2>
            <p className="body">
              Beyond client work and products, this site is becoming a publishing layer
              for experiments, AI workflows, systems thinking, and community-led build work.
            </p>
          </div>
          <div className="signal-terminal reveal">
            <div className="term-head">
              <div className="term-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="term-title">output.log</span>
            </div>
            <div className="term-body">
              {TERM_LINES.map(({ sym, cls, text }) => (
                <div className="term-line" key={text}>
                  <span className={cls}>{sym}</span> {text}
                </div>
              ))}
              <div className="term-line term-blink">
                <span className="term-cyan">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
