import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { buildPageTitle, DEFAULT_DESCRIPTION } from "../content/site";
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
    num: "01", tag: "AI Tool", name: "Jigma", url: "https://jigma.co.uk/",
    body: "Design prompt tool. Upload a design screenshot, get a valid high-fidelity prompt to generate the frontend.",
    icon: <IconPen size={20} />, accent: "#00d4ff"
  },
  {
    num: "02", tag: "AI App", name: "GardenVisionary", url: "https://gardenvisionary.co.uk/",
    body: "An experimental AI-powered application for garden design, vision, and exterior spatial planning.",
    icon: <IconRadar size={20} />, accent: "#00ff88"
  },
  {
    num: "03", tag: "Agency", name: "BuzzBoost", url: "https://buzzboost.co.uk/",
    body: "Digital marketing and founder-led web development focused on sharper landing pages and commercial clarity.",
    icon: <IconBolt size={20} color="currentColor" />, accent: "#ffcc00"
  },
  {
    num: "04", tag: "SaaS / Tool", name: "GreenTracer", url: "https://www.greentracer.org/",
    body: "Website carbon footprint analysis, credibility tooling, and infrastructure around digital sustainability.",
    icon: <IconShield size={20} />, accent: "#00ff88"
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

const OPERATOR_STACK = [
  "React",
  "Node.js",
  "TypeScript",
  "Supabase",
  "WordPress",
  "Astro",
  "GitHub",
  "Vercel",
  "Docker",
  "OpenAI",
  "Claude",
  "Gemini",
  "n8n",
  "Stripe",
  "Cloudflare",
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

export default function SolRuddLanding() {
  usePageMetadata({
    title: buildPageTitle(),
    description: DEFAULT_DESCRIPTION,
    pathname: "/",
    schema: getBaseSchema(),
  });

  useEffect(() => {
    const root = document.documentElement;
    const revealElements = document.querySelectorAll(".reveal:not(.revealed)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsPointerEffects =
      window.matchMedia("(pointer: fine)").matches && !prefersReducedMotion;

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("revealed"));
      return undefined;
    }

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const flushMousePosition = () => {
      frame = 0;
      root.style.setProperty("--mx", `${nextX}px`);
      root.style.setProperty("--my", `${nextY}px`);
    };

    const onMove = (e) => {
      nextX = e.clientX;
      nextY = e.clientY;

      if (!frame) {
        frame = window.requestAnimationFrame(flushMousePosition);
      }
    };

    if (supportsPointerEffects) {
      window.addEventListener("mousemove", onMove, { passive: true });
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("revealed");
          io.unobserve(entry.target);
        }),
      { threshold: 0.08 }
    );
    revealElements.forEach((element) => io.observe(element));

    return () => {
      if (supportsPointerEffects) {
        window.removeEventListener("mousemove", onMove);
      }

      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      io.disconnect();
    };
  }, []);

  return (
    <>
      <div className="noise" />
      <div className="bg-grid" />
      <div className="cursor-glow" />
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

      <section className="stack-sec" aria-labelledby="operator-stack-title">
        <div className="wrap">
          <div className="stack-shell reveal">
            <div className="stack-layout">
              <div className="stack-head">
                <div className="eyebrow"><IconCode /> Stack Rail</div>
                <h2 className="stack-title" id="operator-stack-title">OPERATOR STACK</h2>
                <p className="stack-copy">
                  Core tooling across frontend builds, infrastructure, automation, and AI delivery.
                </p>
              </div>

              <div className="stack-grid" role="list" aria-label="Operator stack">
                {OPERATOR_STACK.map((item, index) => (
                  <div className="stack-item" key={item} role="listitem">
                    <span className="stack-item-mark" aria-hidden="true" />
                    <span className="stack-item-label">{item}</span>
                    <span className="stack-item-num">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr" />

      {/* ── WORK ── */}
      <section id="work" className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow"><IconRadar /> Selected Work</div>
            <h2 className="h2">Products, Agents<br />&amp; Systems.</h2>
            <p className="body">
              I don't just design screens. I build real software, autonomous AI agents,
              and founder-led products that ship into the world.
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

      {/* ── CAPABILITIES ── */}
      <section id="build" className="sec">
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
      <section id="signal" className="sec">
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
      <section id="contact" className="sec">
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
                <a href="mailto:hello@solrudd.com" className="btn btn-cta">
                  Init Project <IconArrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
