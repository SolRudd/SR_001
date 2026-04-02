import { useState } from "react";
import { IconCode } from "../Icons";
import { STACK_LANES } from "./homeData";

export default function OperatorStackSection() {
  const [activeStackLane, setActiveStackLane] = useState(STACK_LANES[0].id);
  const currentStackLane =
    STACK_LANES.find((lane) => lane.id === activeStackLane) ?? STACK_LANES[0];

  return (
    <section className="stack-sec defer-section" aria-labelledby="operator-stack-title">
      <div className="wrap">
        <div className="stack-shell reveal">
          <div className="stack-layout">
            <div className="stack-head">
              <div className="eyebrow">
                <IconCode /> Stack Rail
              </div>
              <h2 className="stack-title" id="operator-stack-title">
                OPERATOR STACK
              </h2>
              <p className="stack-copy">
                Curated by delivery lane so the stack reads like an actual system, not
                a flat tool dump.
              </p>
            </div>

            <div className="stack-panel">
              <div className="stack-tabs" role="tablist" aria-label="Operator stack lanes">
                {STACK_LANES.map((lane) => {
                  const isActive = lane.id === currentStackLane.id;

                  return (
                    <button
                      key={lane.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`stack-tab${isActive ? " stack-tab--active" : ""}`}
                      onClick={() => setActiveStackLane(lane.id)}
                    >
                      {lane.label}
                    </button>
                  );
                })}
              </div>

              <div className="stack-panel-head">
                <div className="stack-panel-copy">
                  <div className="stack-panel-label">// {currentStackLane.label}</div>
                  <h3 className="stack-panel-title">{currentStackLane.title}</h3>
                  <p className="stack-panel-body">{currentStackLane.copy}</p>
                </div>

                <div
                  className="stack-panel-count"
                  aria-label={`${currentStackLane.items.length} tools in ${currentStackLane.label}`}
                >
                  <span className="stack-panel-count-label">Tools</span>
                  <strong>{String(currentStackLane.items.length).padStart(2, "0")}</strong>
                </div>
              </div>

              <div className="stack-grid" role="list" aria-label={`${currentStackLane.label} stack`}>
                {currentStackLane.items.map(({ name, detail }, index) => (
                  <div className="stack-item" key={name} role="listitem">
                    <span className="stack-item-mark" aria-hidden="true" />
                    <div className="stack-item-copy">
                      <span className="stack-item-label">{name}</span>
                      <span className="stack-item-detail">{detail}</span>
                    </div>
                    <span className="stack-item-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
