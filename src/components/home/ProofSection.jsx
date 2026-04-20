import { IconShield } from "../Icons";
import { REVIEWS } from "./homeData";

export default function ProofSection() {
  return (
    <section id="proof" className="sec defer-section">
      <div className="wrap">
        <div className="proof-top reveal">
          <div className="proof-copy">
            <div className="eyebrow">
              <IconShield /> Client Proof
            </div>
            <h2 className="h2">Clear feedback from real client work.</h2>
            <p className="body">
              Selected excerpts from recent 5-star client reviews. Sharp feedback from
              businesses I have built for, shipped with, and supported through delivery.
            </p>
          </div>

          <div className="proof-signal">
            <div className="proof-signal-label">// Review Signal</div>
            <div className="proof-signal-score">5.0 / 5</div>
            <div className="proof-stars" aria-hidden="true">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <div className="proof-signal-note">Selected from recent live client reviews.</div>
          </div>
        </div>

        <div className="proof-grid">
          {REVIEWS.map(({ name, quote }, index) => (
            <article
              className="proof-card reveal reveal-tight"
              key={name}
              style={{ "--reveal-delay": `${Math.min(index, 4) * 80}ms` }}
            >
              <div className="proof-card-top">
                <div className="proof-card-stars" aria-hidden="true">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <div className="proof-card-label">Client review</div>
              </div>
              <p className="proof-quote">{quote}</p>
              <div className="proof-name">{name}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
