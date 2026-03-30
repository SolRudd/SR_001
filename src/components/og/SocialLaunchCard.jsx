import {
  IconBolt,
  IconCode,
  IconPen,
  IconRadar,
  IconShield,
  IconTerm,
} from "../Icons";

const WORK_ITEMS = [
  { name: "BuzzBoost", label: "Agency", icon: IconBolt },
  { name: "Jigma", label: "AI Tool", icon: IconPen },
  { name: "GreenTracer", label: "Signal Product", icon: IconShield },
  { name: "GardenVisionary", label: "AI App", icon: IconRadar },
  { name: "LoveCookies", label: "Plugin", icon: IconCode },
  { name: "Agents & Workflows", label: "R&D", icon: IconTerm },
];

const STACK_ITEMS = ["React", "TypeScript", "Node.js", "Supabase", "WordPress", "OpenAI"];

const SIGNAL_ITEMS = [
  "Founder-led frontend systems",
  "Automation and agent workflows",
  "Digital products and launch builds",
];

const HUD_ROWS = [
  { key: "Mode", value: "Shipping" },
  { key: "Focus", value: "Web + AI" },
  { key: "Status", value: "Live" },
];

function BrowserPanel() {
  return (
    <div className="og-browser">
      <div className="og-browser-bar">
        <div className="og-browser-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="og-browser-url">solrudd.co.uk</div>
      </div>

      <div className="og-browser-body">
        <div className="og-browser-copy">
          <div className="og-browser-badge">Live Operator Feed // Active</div>
          <div className="og-browser-title">
            <span>websites</span>
            <span>AI products</span>
            <span>agentic systems</span>
          </div>
          <p className="og-browser-text">
            Founder-led frontend systems, automation, digital products, and technical delivery.
          </p>
        </div>

        <div className="og-browser-hud">
          <div className="og-browser-hud-label">System HUD</div>
          <div className="og-browser-hud-grid">
            {HUD_ROWS.map(({ key, value }) => (
              <div className="og-browser-hud-row" key={key}>
                <span>{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="og-browser-work">
          <div className="og-browser-work-label">Selected Work</div>
          <div className="og-browser-work-list">
            {WORK_ITEMS.slice(0, 4).map(({ name }) => (
              <span className="og-browser-work-chip" key={name}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportPanel({ label, title, children }) {
  return (
    <div className="og-support-panel">
      <div className="og-support-label">{label}</div>
      <div className="og-support-title">{title}</div>
      {children}
    </div>
  );
}

export default function SocialLaunchCard({ variant = "primary" }) {
  const isMinimal = variant === "minimal";

  return (
    <div className={`og-launch-card og-launch-card--${variant}`}>
      <div className="og-launch-noise" />
      <div className="og-launch-grid" />
      <div className="og-launch-blob og-launch-blob-a" />
      <div className="og-launch-blob og-launch-blob-b" />

      <div className="og-launch-layout">
        <div className="og-launch-copy">
          <div className="og-launch-kicker">solrudd.co.uk // launch</div>
          <h1 className="og-launch-headline">
            <span>Sol Rudd</span>
            <span>Websites, products &amp; AI systems</span>
          </h1>
          <p className="og-launch-support">
            Founder-led frontend systems, automation, digital products, and technical delivery.
          </p>

          <div className="og-launch-tags">
            <span>Founder-led</span>
            <span>Frontend systems</span>
            <span>Technical delivery</span>
          </div>
        </div>

        <div className="og-launch-visual">
          <BrowserPanel />

          <div className={`og-support-grid${isMinimal ? " og-support-grid-minimal" : ""}`}>
            <SupportPanel label="// Selected Work" title="Products, websites, and live systems">
              <div className="og-support-list">
                {WORK_ITEMS.slice(0, isMinimal ? 3 : 4).map(({ name, label, icon }) => {
                  const WorkIcon = icon;

                  return (
                    <div className="og-support-item" key={name}>
                      <span className="og-support-item-icon">
                        <WorkIcon size={12} />
                      </span>
                      <span className="og-support-item-name">{name}</span>
                      <span className="og-support-item-label">{label}</span>
                    </div>
                  );
                })}
              </div>
            </SupportPanel>

            <SupportPanel label="// Operator Stack" title="Frontend, product, and automation">
              <div className="og-support-chip-row">
                {STACK_ITEMS.map((item) => (
                  <span className="og-support-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </SupportPanel>

            {!isMinimal ? (
              <SupportPanel label="// Signal" title="Built for real launch posts, not screenshots">
                <div className="og-support-note-list">
                  {SIGNAL_ITEMS.map((item) => (
                    <div className="og-support-note" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </SupportPanel>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
