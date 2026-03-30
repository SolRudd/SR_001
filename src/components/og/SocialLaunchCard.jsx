const WORK_ITEMS = [
  { name: "BuzzBoost", detail: "Agency site + frontend build" },
  { name: "Jigma", detail: "AI prompt tool" },
  { name: "GreenTracer", detail: "Signal product" },
  { name: "GardenVisionary", detail: "AI app" },
];

const DELIVERY_ITEMS = [
  { title: "Founder sites", detail: "Sharper positioning and cleaner execution" },
  { title: "Product builds", detail: "Interfaces and systems built to ship" },
  { title: "AI workflows", detail: "Automation and operator tooling" },
];

const STACK_ROWS = [
  { label: "Frontend", value: "React / TypeScript" },
  { label: "Systems", value: "Node / Supabase / Vercel" },
  { label: "Automation", value: "OpenAI / n8n / Stripe" },
];

const MINIMAL_WORK_ITEMS = ["BuzzBoost", "Jigma", "GreenTracer"];

function BrowserPanel({ minimal = false, exportMode = false }) {
  const iframeSrc = exportMode ? "/?surface=og-homepage&export=1" : "/?surface=og-homepage";

  return (
    <div className={`og-browser${minimal ? " og-browser-minimal" : ""}`}>
      <div className="og-browser-bar">
        <div className="og-browser-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="og-browser-url">solrudd.co.uk</div>
      </div>

      <div className="og-browser-live-stage">
        <div className={`og-browser-viewport${minimal ? " og-browser-viewport-minimal" : ""}`}>
          <iframe
            title="Sol Rudd homepage preview"
            src={iframeSrc}
            className={`og-browser-iframe${minimal ? " og-browser-iframe-minimal" : ""}`}
            loading="eager"
          />
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

function PrimarySupportPanels() {
  return (
    <div className="og-support-grid">
      <SupportPanel label="// Selected Work" title="Live products, websites, and launch systems">
        <div className="og-support-list">
          {WORK_ITEMS.map(({ name, detail }) => (
            <div className="og-support-item" key={name}>
              <span className="og-support-item-name">{name}</span>
              <span className="og-support-item-detail">{detail}</span>
            </div>
          ))}
        </div>
      </SupportPanel>

      <SupportPanel label="// Delivery" title="Founder-led frontend systems and technical delivery">
        <div className="og-support-note-list">
          {DELIVERY_ITEMS.map(({ title, detail }) => (
            <div className="og-support-note" key={title}>
              <span className="og-support-note-title">{title}</span>
              <span className="og-support-note-detail">{detail}</span>
            </div>
          ))}
        </div>
      </SupportPanel>

      <SupportPanel label="// Core Stack" title="Build, automation, and infrastructure">
        <div className="og-support-rows">
          {STACK_ROWS.map(({ label, value }) => (
            <div className="og-support-row" key={label}>
              <span>{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </SupportPanel>
    </div>
  );
}

function MinimalProofStrip() {
  return (
    <div className="og-minimal-proof">
      <div className="og-minimal-proof-label">// Selected Work</div>
      <div className="og-minimal-proof-list">
        {MINIMAL_WORK_ITEMS.map((item) => (
          <span className="og-minimal-proof-chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SocialLaunchCard({ variant = "primary", exportMode = false }) {
  const isMinimal = variant === "minimal";

  return (
    <div className={`og-launch-card og-launch-card--${variant}${exportMode ? " og-launch-card--export" : ""}`}>
      <div className="og-launch-noise" />
      <div className="og-launch-grid" />
      <div className="og-launch-blob og-launch-blob-a" />
      <div className="og-launch-blob og-launch-blob-b" />

      <div className="og-launch-layout">
        <div className="og-launch-copy">
          <div className="og-launch-kicker">solrudd.co.uk // launch</div>

          <div className="og-launch-copy-main">
            <h1 className="og-launch-headline">
              <span>Sol Rudd</span>
              <span>Websites, products &amp; AI systems</span>
            </h1>
            <p className="og-launch-support">
              Founder-led frontend systems, automation, digital products, and technical delivery.
            </p>
          </div>

          <div className="og-launch-tags">
            <span>Founder-led</span>
            <span>Websites</span>
            <span>Products</span>
            <span>AI workflows</span>
          </div>

          {isMinimal ? <MinimalProofStrip /> : null}
        </div>

        <div className="og-launch-visual">
          <BrowserPanel minimal={isMinimal} exportMode={exportMode} />
          {!isMinimal ? <PrimarySupportPanels /> : null}
        </div>
      </div>
    </div>
  );
}
