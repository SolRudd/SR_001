import { MARQUEE_ITEMS, MARQUEE_REPEATS } from "./homeData";

export default function HomeMarqueeBand() {
  return (
    <div className="marquee-band">
      <div className="marquee-track">
        {MARQUEE_REPEATS.map((repeatIndex) => (
          <span key={repeatIndex} className="marquee-content">
            {MARQUEE_ITEMS.map((item) => (
              <span className="mq-item" key={item}>
                <span className="mq-dot">◆</span>
                {item}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
