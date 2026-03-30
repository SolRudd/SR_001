import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  BOOKING_URL,
  CONTACT_EMAIL,
  buildPageTitle,
  DEFAULT_DESCRIPTION,
} from "../content/site";
import { usePageMetadata } from "../lib/metadata";
import { getBaseSchema } from "../lib/schema";
import {
  IconArrow,
  IconBolt,
  IconCode,
  IconRadar,
  IconPen,
  IconWrench,
  IconShield,
  IconTerm
} from "../components/Icons";

const PROJECTS = [
  {
    num: "01", tag: "Agency", name: "BuzzBoost", url: "https://buzzboost.co.uk/",
    body: "Digital marketing and founder-led web development focused on sharper landing pages and commercial clarity.",
    icon: <IconBolt size={20} color="currentColor" />, accent: "#ffcc00"
  },
  {
    num: "02", tag: "AI Tool", name: "Jigma", url: "https://jigma.co.uk/",
    body: "Design prompt tool. Upload a design screenshot, get a valid high-fidelity prompt to generate the frontend.",
    icon: <IconPen size={20} />, accent: "#00d4ff"
  },
  {
    num: "03", tag: "SaaS / Tool", name: "GreenTracer", url: "https://www.greentracer.org/",
    body: "Website carbon footprint analysis, credibility tooling, and infrastructure around digital sustainability.",
    icon: <IconShield size={20} />, accent: "#00ff88"
  },
  {
    num: "04", tag: "AI App", name: "GardenVisionary", url: "https://gardenvisionary.co.uk/",
    body: "An experimental AI-powered application for garden design, vision, and exterior spatial planning.",
    icon: <IconRadar size={20} />, accent: "#00ff88"
  },
  {
    num: "05", tag: "Plugin", name: "LoveCookies", url: "https://lovecookies.co.uk/",
    body: "A clean, compliant, and developer-friendly GDPR cookie consent plugin built for modern web applications.",
    icon: <IconCode size={20} color="currentColor" />, accent: "#ff00ff"
  },
  {
    num: "06", tag: "Open Source", name: "Agents & Workflows", url: "#",
    body: "Continuous R&D building autonomous AI agents and operational logic. Shipping experiments out in the open.",
    icon: <IconTerm size={20} />, accent: "#a855f7"
  },
];

const CAPS = [
  "Frontend systems", "AI Agent Logic", "Product design", "Image-to-Code flows",
  "Automation", "Tech positioning", "Offer structure", "Operator tooling",
  "Dashboards", "Growth systems", "Rapid prototyping", "Production builds",
];

const HUD_ROWS = [
  { key: "Mode", val: "Shipping Products + Agents" },
  { key: "Stack", val: "React / AI / Repos" },
  { key: "Output", val: "Founder-led" },
];

const STATS = [
  { label: "Products", val: "05" },
  { label: "AI Agents", val: "Active" },
  { label: "Client Work", val: "Agency" },
  { label: "Focus", val: "Dev" },
];

const CONTACT_ITEMS = [
  { label: "Founder sites + landing pages" },
  { label: "Product builds + agent systems" },
  { label: "AI workflows + automation" },
];

const REVIEWS = [
  {
    name: "Steve Robertson",
    quote:
      "It's been a great experience working with Sol. Everything we've thrown at him he's tackled without any issues. Very prompt and reliable.",
  },
  {
    name: "Rayyan Karim",
    quote:
      "Professional, slick, sales and conversion driven websites with some really smart marketing tactics we hadn't considered.",
  },
  {
    name: "Greg Allen",
    quote:
      "We used Sol to make a website and his service was brilliant. He explained everything well and put so much effort in.",
  },
  {
    name: "Jack Paradise",
    quote:
      "Great customer service and a real pleasure to work with Sol. Always there to help and thorough from start to finish.",
  },
];

const STACK_LANES = [
  {
    id: "frontend",
    label: "Frontend",
    title: "Interfaces, design systems, and frontend delivery.",
    copy: "The app-layer stack I reach for when speed, clarity, and production finish need to hold up.",
    items: [
      { name: "React", detail: "UI runtime" },
      { name: "Next.js", detail: "App layer" },
      { name: "TypeScript", detail: "Typed systems" },
      { name: "Tailwind", detail: "Utility styling" },
      { name: "Vite", detail: "Build tooling" },
    ],
  },
  {
    id: "ai",
    label: "AI / Models",
    title: "Model tooling for products, agents, and workflow logic.",
    copy: "The model layer behind prompt systems, automation logic, and agentic build experiments.",
    items: [
      { name: "OpenAI", detail: "APIs + agents" },
      { name: "Anthropic", detail: "Claude models" },
      { name: "Gemini", detail: "Multimodal runs" },
      { name: "Codex", detail: "Agentic coding" },
    ],
  },
  {
    id: "agent",
    label: "Agent / Automation",
    title: "Operator-side orchestration, agents, and execution glue.",
    copy: "The systems layer for live agent work, automation chains, and the internal workflow logic that keeps delivery moving.",
    items: [
      { name: "OpenCore", detail: "Agent runtime" },
      { name: "n8n", detail: "Workflow orchestration" },
      { name: "Internal Workflows", detail: "Ops glue" },
    ],
  },
  {
    id: "backend",
    label: "Backend / Infra",
    title: "Runtime, data, hosting, and edge infrastructure.",
    copy: "The backend and infra lane for APIs, deployment, and the stack that keeps sites and products dependable in production.",
    items: [
      { name: "Node.js", detail: "Server logic" },
      { name: "Supabase", detail: "Data + auth" },
      { name: "Docker", detail: "Containerised envs" },
      { name: "Cloudflare", detail: "Edge + DNS" },
      { name: "Vercel", detail: "Preview + hosting" },
      { name: "Caddy", detail: "Server proxy" },
    ],
  },
  {
    id: "delivery",
    label: "Delivery",
    title: "Repos, publishing, payments, and practical handoff.",
    copy: "The delivery layer for versioning, CMS handoff, and the commercial plumbing that turns builds into usable systems.",
    items: [
      { name: "GitHub", detail: "Repos + CI" },
      { name: "WordPress", detail: "CMS delivery" },
      { name: "Stripe", detail: "Billing + events" },
    ],
  },
];

const MARQUEE_ITEMS = [
  "SHIPPING PRODUCTS",
  "AI AGENTS ACTIVE",
  "OPEN FOR DEPLOYMENT",
  "FOUNDER LED",
  "REAL SOFTWARE",
  "ZERO FLUFF",
];

const MARQUEE_REPEATS = [0, 1, 2, 3];

const TERM_LINES = [
  { sym: "✓", cls: "term-green",  text: "Jigma v1.0 — shipped" },
  { sym: "✓", cls: "term-green",  text: "GardenVisionary — live" },
  { sym: "✓", cls: "term-green",  text: "GreenTracer — active" },
  { sym: "✓", cls: "term-green",  text: "LoveCookies — deployed" },
  { sym: "~", cls: "term-yellow", text: "Agent workflows — building" },
  { sym: "→", cls: "term-cyan",   text: "Public experiments — coming" },
  { sym: "→", cls: "term-cyan",   text: "Systems tutorials — queued" },
];

function OperatorStackSection() {
  const [activeStackLane, setActiveStackLane] = useState(STACK_LANES[0].id);
  const currentStackLane =
    STACK_LANES.find((lane) => lane.id === activeStackLane) ?? STACK_LANES[0];

  return (
    <section className="stack-sec defer-section" aria-labelledby="operator-stack-title">
      <div className="wrap">
        <div className="stack-shell reveal">
          <div className="stack-layout">
            <div className="stack-head">
              <div className="eyebrow"><IconCode /> Stack Rail</div>
              <h2 className="stack-title" id="operator-stack-title">OPERATOR STACK</h2>
              <p className="stack-copy">
                Curated by delivery lane so the stack reads like an actual system, not a flat tool dump.
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

                <div className="stack-panel-count" aria-label={`${currentStackLane.items.length} tools in ${currentStackLane.label}`}>
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
                    <span className="stack-item-num">{String(index + 1).padStart(2, "0")}</span>
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

export default function SolRuddLanding() {
  const pageRef = useRef(null);
  const glowRef = useRef(null);
  const isOgHomepageSurface =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("surface") === "og-homepage";

  usePageMetadata({
    title: buildPageTitle(),
    description: DEFAULT_DESCRIPTION,
    pathname: "/",
    robots: isOgHomepageSurface ? "noindex, nofollow" : undefined,
    schema: getBaseSchema(),
  });

  useEffect(() => {
    if (!isOgHomepageSurface) {
      return undefined;
    }

    document.documentElement.classList.add("og-homepage-html");
    document.body.classList.add("og-homepage-body");

    return () => {
      document.documentElement.classList.remove("og-homepage-html");
      document.body.classList.remove("og-homepage-body");
    };
  }, [isOgHomepageSurface]);

  useEffect(() => {
    const pageElement = pageRef.current;
    const glowElement = glowRef.current;

    if (!pageElement) {
      return undefined;
    }

    const revealElements = pageElement.querySelectorAll(".reveal:not(.revealed)");
    const prefersReducedMotion =
      isOgHomepageSurface || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsPointerEffects =
      window.matchMedia("(pointer: fine)").matches && !prefersReducedMotion;

    if (!revealElements.length && !supportsPointerEffects) {
      return undefined;
    }

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("revealed"));
      return undefined;
    }

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const flushMousePosition = () => {
      frame = 0;

      if (glowElement) {
        glowElement.style.setProperty("--mx", `${nextX}px`);
        glowElement.style.setProperty("--my", `${nextY}px`);
      }
    };

    const onMove = (e) => {
      nextX = e.clientX;
      nextY = e.clientY;

      if (!frame) {
        frame = window.requestAnimationFrame(flushMousePosition);
      }
    };

    if (supportsPointerEffects && glowElement) {
      window.addEventListener("mousemove", onMove, { passive: true });
    }

    const io =
      revealElements.length > 0
        ? new IntersectionObserver(
            (entries) =>
              entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                  return;
                }

                entry.target.classList.add("revealed");
                io.unobserve(entry.target);
              }),
            { threshold: 0.08 }
          )
        : null;

    revealElements.forEach((element) => io?.observe(element));

    return () => {
      if (supportsPointerEffects && glowElement) {
        window.removeEventListener("mousemove", onMove);
      }

      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      io?.disconnect();
    };
  }, [isOgHomepageSurface]);

  return (
    <div ref={pageRef} className={isOgHomepageSurface ? "og-homepage-surface" : undefined}>
      <div className="noise" />
      <div className="bg-grid" />
      <div className="cursor-glow" ref={glowRef} />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <Header />

      {/* Marquee band */}
      <div className="marquee-band">
        <div className="marquee-track">
          {MARQUEE_REPEATS.map((i) => (
            <span key={i} className="marquee-content">
              {MARQUEE_ITEMS.map((t) => (
                <span className="mq-item" key={t}><span className="mq-dot">◆</span>{t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-text" aria-hidden="true">SOL</div>
        <div className="wrap">
          <div className="hero-grid">

            <div className="reveal">
              <div className="badge">
                <div className="dot" />
                Live Operator Feed&nbsp;&nbsp;//&nbsp;&nbsp;Active
              </div>

              <h1 className="h1">
                I build<br />
                <span className="c" data-text="websites">websites</span>,<br />
                <span className="m">AI products</span>,<br />
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
                  <span className="ticker-items">Jigma / GardenVisionary / GreenTracer / LoveCookies / BuzzBoost</span>
                  <div className="cursor" />
                </div>
              </div>

              <div className="actions">
                <a href="#work" className="btn btn-solid">Deploy Work <IconArrow /></a>
                <a href="#build" className="btn btn-ghost">Inspect Scope</a>
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
                  {HUD_ROWS.map(({ key, val }, i) => (
                    <div className="hud-row" key={key}>
                      <span className="hud-k">{key}</span>
                      <span className={i === 2 ? "hud-v-w" : "hud-v"}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="stats">
                {STATS.map(({ label, val }) => (
                  <div className="stat" key={label}>
                    <div className="stat-lbl">{label}</div>
                    <div className={`stat-val${val.length > 5 ? " sm" : val === "Agency" ? " md" : ""}`}>{val}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <OperatorStackSection />

      <div className="hr" />

      {/* ── WORK ── */}
      <section id="work" className="sec defer-section">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow"><IconRadar /> Selected Work</div>
            <h2 className="h2">Websites, Products<br />&amp; Systems.</h2>
            <p className="body">
              From agency sites and founder websites to products, AI agents,
              and technical systems, I build real software that ships into the world.
            </p>
          </div>

          <div className="proj-grid">
            {PROJECTS.map(({ num, tag, name, url, body, icon, accent }) => (
              <a
                key={num}
                className="proj reveal"
                href={url}
                target={url.startsWith("http") ? "_blank" : undefined}
                rel={url.startsWith("http") ? "noreferrer" : undefined}
                style={{ "--accent": accent }}
              >
                <div className="proj-corner tl" />
                <div className="proj-corner tr" />
                <div className="proj-header">
                  <div>
                    <div className="proj-tag">// {tag}</div>
                    <div className="proj-name">{name}</div>
                  </div>
                  <div className="proj-icon">{icon}</div>
                </div>
                <div className="proj-body">{body}</div>
                <div className="proj-footer">
                  <div className="proj-link">Inspect Node <IconArrow size={12} /></div>
                  <div className="proj-num">{num}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="hr" />

      {/* ── PROOF ── */}
      <section id="proof" className="sec defer-section">
        <div className="wrap">
          <div className="proof-top reveal">
            <div className="proof-copy">
              <div className="eyebrow"><IconShield /> Client Proof</div>
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
            {REVIEWS.map(({ name, quote }) => (
              <article className="proof-card reveal" key={name}>
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

      <div className="hr" />

      {/* ── CAPABILITIES ── */}
      <section id="build" className="sec defer-section">
        <div className="wrap">
          <div className="caps-layout">
            <div className="reveal">
              <div className="eyebrow"><IconPen /> Capabilities</div>
              <h2 className="h2">Zero Fluff<br />Infrastructure.</h2>
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
                {CAPS.map((c) => (
                  <div className="cap" key={c}>
                    <span className="arr">&gt;</span>
                    <span className="cap-text">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr" />

      {/* ── SIGNAL ── */}
      <section id="signal" className="sec defer-section">
        <div className="wrap">
          <div className="signal-layout">
            <div className="reveal">
              <div className="eyebrow"><IconRadar /> Signal</div>
              <h2 className="h2">Building in public,<br />teaching through output.</h2>
              <p className="body">
                Beyond client work and products, this site is becoming a publishing layer
                for experiments, AI workflows, systems thinking, and community-led build work.
              </p>
            </div>
            <div className="signal-terminal reveal">
              <div className="term-head">
                <div className="term-dots"><span /><span /><span /></div>
                <span className="term-title">output.log</span>
              </div>
              <div className="term-body">
                {TERM_LINES.map(({ sym, cls, text }) => (
                  <div className="term-line" key={text}>
                    <span className={cls}>{sym}</span> {text}
                  </div>
                ))}
                <div className="term-line term-blink"><span className="term-cyan">_</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr" />

      {/* ── CONTACT ── */}
      <section id="contact" className="sec defer-section">
        <div className="wrap">
          <div className="contact-card reveal">
            <div className="contact-glow" />
            <div className="contact-inner">
              <div className="contact-l">
                <div className="c-status">
                  <div className="c-dot" /> Open for deployment
                </div>
                <h2 className="c-h2">Need something<br />sharper?</h2>
                <p className="c-body">
                  I help founders and businesses build stronger websites, products,
                  automation systems, and technical infrastructure with better design,
                  better UX, and better execution.
                </p>
              </div>
              <div className="contact-r">
                <div className="c-items">
                  {CONTACT_ITEMS.map(({ label }, i) => (
                    <div className="c-item" key={label}>
                      <span className="c-icon">
                        {i === 0 ? <IconWrench /> : i === 1 ? <IconShield /> : <IconBolt size={14} color="var(--cyan)" />}
                      </span>
                      {label}
                    </div>
                  ))}
                </div>
                <div className="contact-actions">
                  <a
                    href={BOOKING_URL}
                    className="btn btn-cta"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book a Call <IconArrow />
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email-link">
                    Email {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
