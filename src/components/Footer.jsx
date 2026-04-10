import { FOOTER_NAV_LINKS } from "../content/navigation";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, X_URL } from "../content/site";

const SOCIALS = [
  { label: "X / Twitter", href: X_URL,        sym: "X" },
  { label: "GitHub",      href: GITHUB_URL,   sym: "GH" },
  { label: "LinkedIn",    href: LINKEDIN_URL, sym: "IN" },
];

const STATUS_ITEMS = [
  { key: "Mode",   val: "Shipping" },
  { key: "Stack",  val: "React / AI" },
  { key: "Status", val: "Active" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr">
      {/* Top rule with glow */}
      <div className="ftr-rule" />

      <div className="ftr-wrap">

        {/* Main grid */}
        <div className="ftr-grid">

          {/* Brand col */}
          <div className="ftr-brand">
            <a href="/" className="ftr-logo">
              <img
                src="/brand/sol-rudd.svg"
                alt="Sol Rudd logo"
                className="ftr-logo-mark"
                width="250"
                height="59"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="ftr-tagline">
              Building premium websites,<br />
              AI products &amp; agentic systems.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="ftr-email">
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Nav col */}
          <div className="ftr-col">
            <div className="ftr-col-label">// Navigate</div>
            <ul className="ftr-list">
              {FOOTER_NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="ftr-link">
                    <span className="ftr-link-arr">&gt;</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social col */}
          <div className="ftr-col">
            <div className="ftr-col-label">// Connect</div>
            <ul className="ftr-list">
              {SOCIALS.map(({ label, href, sym }) => (
                <li key={label}>
                  <a href={href} className="ftr-link" target="_blank" rel="noreferrer">
                    <span className="ftr-link-sym">{sym}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status HUD col */}
          <div className="ftr-col">
            <div className="ftr-col-label">// System</div>
            <div className="ftr-hud">
              {STATUS_ITEMS.map(({ key, val }) => (
                <div className="ftr-hud-row" key={key}>
                  <span className="ftr-hud-k">{key}</span>
                  <span className="ftr-hud-v">{val}</span>
                </div>
              ))}
              <div className="ftr-hud-row">
                <span className="ftr-hud-k">Available</span>
                <span className="ftr-hud-avail">
                  <span className="ftr-avail-dot" /> Yes
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="ftr-bottom">
          <span className="ftr-copy">
            © {year} Sol Rudd. All rights reserved.
          </span>
          <span className="ftr-build">
            <span className="ftr-build-label">Built by</span> Sol Rudd
            <span className="ftr-build-sep">//</span>
            <span className="ftr-build-stack">React + AI</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
