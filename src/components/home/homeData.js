import {
  IconBolt,
  IconCode,
  IconPen,
  IconRadar,
  IconShield,
  IconTerm,
  IconWrench,
} from "../Icons";

export const PROJECTS = [
  {
    num: "01",
    tag: "Agency",
    name: "BuzzBoost",
    url: "https://buzzboost.co.uk/",
    body: "Digital marketing and founder-led web development focused on sharper landing pages and commercial clarity.",
    Icon: IconBolt,
    iconProps: { size: 20, color: "currentColor" },
    accent: "#ffcc00",
  },
  {
    num: "02",
    tag: "AI Tool",
    name: "Jigma",
    url: "https://jigma.co.uk/",
    body: "Design prompt tool. Upload a design screenshot, get a valid high-fidelity prompt to generate the frontend.",
    Icon: IconPen,
    iconProps: { size: 20 },
    accent: "#00d4ff",
  },
  {
    num: "03",
    tag: "SaaS / Tool",
    name: "GreenTracer",
    url: "https://www.greentracer.org/",
    body: "Website carbon footprint analysis, credibility tooling, and infrastructure around digital sustainability.",
    Icon: IconShield,
    iconProps: { size: 20 },
    accent: "#00ff88",
  },
  {
    num: "04",
    tag: "AI App",
    name: "GardenVisionary",
    url: "https://gardenvisionary.co.uk/",
    body: "An experimental AI-powered application for garden design, vision, and exterior spatial planning.",
    Icon: IconRadar,
    iconProps: { size: 20 },
    accent: "#00ff88",
  },
  {
    num: "05",
    tag: "Plugin",
    name: "LoveCookies",
    url: "https://lovecookies.co.uk/",
    body: "A clean, compliant, and developer-friendly GDPR cookie consent plugin built for modern web applications.",
    Icon: IconCode,
    iconProps: { size: 20, color: "currentColor" },
    accent: "#ff00ff",
  },
  {
    num: "06",
    tag: "Open Source",
    name: "Agents & Workflows",
    url: "#",
    body: "Continuous R&D building autonomous AI agents and operational logic. Shipping experiments out in the open.",
    Icon: IconTerm,
    iconProps: { size: 20 },
    accent: "#a855f7",
  },
];

export const CAPS = [
  "Frontend systems",
  "AI Agent Logic",
  "Product design",
  "Image-to-Code flows",
  "Automation",
  "Tech positioning",
  "Offer structure",
  "Operator tooling",
  "Dashboards",
  "Growth systems",
  "Rapid prototyping",
  "Production builds",
];

export const HUD_ROWS = [
  { key: "Mode", val: "Shipping Products + Agents" },
  { key: "Stack", val: "React / AI / Repos" },
  { key: "Output", val: "Founder-led" },
];

export const STATS = [
  { label: "Products", val: "05" },
  { label: "AI Agents", val: "Active" },
  { label: "Client Work", val: "Agency" },
  { label: "Focus", val: "Dev" },
];

export const CONTACT_ITEMS = [
  { label: "Founder sites + landing pages", Icon: IconWrench, iconProps: {} },
  { label: "Product builds + agent systems", Icon: IconShield, iconProps: {} },
  {
    label: "AI workflows + automation",
    Icon: IconBolt,
    iconProps: { size: 14, color: "var(--cyan)" },
  },
];

export const REVIEWS = [
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

export const STACK_LANES = [
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

export const MARQUEE_ITEMS = [
  "SHIPPING PRODUCTS",
  "AI AGENTS ACTIVE",
  "OPEN FOR DEPLOYMENT",
  "FOUNDER LED",
  "REAL SOFTWARE",
  "ZERO FLUFF",
];

export const MARQUEE_REPEATS = [0, 1, 2, 3];

export const TERM_LINES = [
  { sym: "✓", cls: "term-green", text: "Jigma v1.0 — shipped" },
  { sym: "✓", cls: "term-green", text: "GardenVisionary — live" },
  { sym: "✓", cls: "term-green", text: "GreenTracer — active" },
  { sym: "✓", cls: "term-green", text: "LoveCookies — deployed" },
  { sym: "~", cls: "term-yellow", text: "Agent workflows — building" },
  { sym: "→", cls: "term-cyan", text: "Public experiments — coming" },
  { sym: "→", cls: "term-cyan", text: "Systems tutorials — queued" },
];
