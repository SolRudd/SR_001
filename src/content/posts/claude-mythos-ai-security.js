import {
  JOURNAL_INDEX_PATH,
  buildHomeSectionPath,
  buildInsightsPostPath,
} from "../../lib/routes.js";

const ANTHROPIC_GLASSWING_URL = "https://www.anthropic.com/glasswing";
const ANTHROPIC_MYTHOS_WRITEUP_URL = "https://red.anthropic.com/2026/mythos-preview/";
const IBM_X_FORCE_2026_URL =
  "https://newsroom.ibm.com/2026-02-25-ibm-2026-x-force-threat-index-ai-driven-attacks-are-escalating-as-basic-security-gaps-leave-enterprises-exposed";

const post = {
  slug: "claude-mythos-ai-security",
  pathname: buildInsightsPostPath("claude-mythos-ai-security"),
  title: "Claude Mythos and the new AI security reality",
  metaTitle: "Claude Mythos, Project Glasswing and the AI security shift",
  metaDescription:
    "Anthropic's Claude Mythos Preview signals a major shift in cybersecurity. Here is what it means for patching, risk and technical leadership.",
  description:
    "Anthropic's latest security announcement lands as a business signal, not just a model story: AI is accelerating vulnerability discovery faster than most organisations can patch.",
  excerpt:
    "The real significance of Claude Mythos is not that one company has a strong model. It is that the speed of finding serious weaknesses is starting to outrun the speed of fixing them. That changes how security leaders should think about risk, remediation, and technical resilience.",
  category: "Security Insight",
  readingTime: "5 min read",
  publishedAt: "2026-04-10",
  authorName: "Sol Rudd",
  schemaType: "Article",
  articleImage: "/articles/heroes/claude-mythos-ai-security-hero.jpg",
  articleImageAlt:
    "Code, telemetry, and security panels representing AI-driven vulnerability discovery and technical oversight.",
  tags: [
    "Claude Mythos",
    "Project Glasswing",
    "AI security",
    "Cybersecurity",
    "Patching",
    "Technical leadership",
  ],
  relatedSlugs: [
    "what-actually-makes-modern-digital-delivery-work",
    "why-good-digital-work-usually-comes-from-specialist-teams",
  ],
  heroVisual: {
    label: "Editorial View",
    title: "Discovery is speeding up faster than remediation.",
    body:
      "That is the practical shift security leaders should take from the Claude Mythos announcement.",
    items: [
      {
        value: "7 Apr 2026",
        label: "Anthropic launched Project Glasswing on 7 April 2026.",
      },
      {
        value: "Gated",
        label: "Claude Mythos Preview is a gated preview, not a general public release.",
      },
      {
        value: "99%+",
        label: "Anthropic's technical write-up says over 99% of the vulnerabilities found were still unpatched at publication time.",
      },
    ],
  },
  sideNote: {
    label: "// Core Point",
    title: "This is less about one model and more about a new operating tempo for security.",
    body:
      "If serious vulnerability discovery is accelerating while patching stays slow, the real management problem becomes remediation speed, ownership, and execution discipline.",
  },
  references: [
    {
      label: "Anthropic: Project Glasswing",
      href: ANTHROPIC_GLASSWING_URL,
      external: true,
      note: "Primary source for the 7 April 2026 launch, the gated-preview framing, and Anthropic's claims about thousands of high-severity vulnerabilities across major operating systems and browsers.",
    },
    {
      label: "Anthropic Frontier Red Team: Mythos Preview technical write-up",
      href: ANTHROPIC_MYTHOS_WRITEUP_URL,
      external: true,
      note: "Primary source for Anthropic's statement that over 99% of the vulnerabilities it found were still unpatched at publication time.",
    },
    {
      label: "IBM 2026 X-Force Threat Intelligence Index summary",
      href: IBM_X_FORCE_2026_URL,
      external: true,
      note: "Primary source for IBM's reported 44% increase in attacks beginning with exploitation of public-facing applications.",
    },
  ],
  footerReferences: true,
  cta: {
    headline: "Need help improving technical resilience?",
    body:
      "We help businesses strengthen digital performance, technical quality and resilience with practical implementation.",
    primary: {
      label: "Talk to us",
      href: buildHomeSectionPath("contact"),
    },
    secondary: {
      label: "Read more insights",
      href: JOURNAL_INDEX_PATH,
    },
  },
  content: [
    {
      type: "heading",
      level: 2,
      text: "Intro",
    },
    {
      type: "paragraph",
      text:
        "Anthropic's Claude Mythos Preview should not be read as just another AI product milestone. The sharper reading is operational. If AI systems can identify severe weaknesses across widely used software faster than organisations can remediate them, the security conversation changes from detection alone to pace, ownership, and response.",
    },
    {
      type: "paragraph",
      segments: [
        "That also fits the wider direction of this site: turning technical complexity into something commercially legible, whether through the ",
        { label: "journal", href: JOURNAL_INDEX_PATH },
        ", the build layer, or practical delivery work.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "What Anthropic announced",
    },
    {
      type: "paragraph",
      text:
        "On 7 April 2026, Anthropic launched Project Glasswing and framed Claude Mythos Preview as a gated preview rather than a general public release. That distinction matters. This was presented as a controlled security effort, not as a normal commercial rollout.",
    },
    {
      type: "paragraph",
      text:
        "Anthropic said Mythos found thousands of high-severity vulnerabilities across major operating systems and browsers. Its technical write-up added the most important line for security leaders: over 99% of those vulnerabilities were still unpatched at publication time.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why this matters for businesses",
    },
    {
      type: "paragraph",
      text:
        "For businesses, the point is not to get distracted by model branding. The point is that vulnerability discovery is getting faster. If the discovery side accelerates while most companies still remediate through long queues, fragmented ownership, and cautious release cycles, exposure grows even if security teams are doing reasonable work.",
    },
    {
      type: "paragraph",
      segments: [
        "That is especially relevant for teams thinking about technical quality and implementation discipline more broadly. The closest equivalent on this site is the ",
        { label: "build section", href: buildHomeSectionPath("build") },
        ", where the emphasis is on systems that can actually hold up under real pressure.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "The real problem: patching is still too slow",
    },
    {
      type: "paragraph",
      text:
        "The most revealing fact in Anthropic's write-up is not that Mythos found serious issues. It is that over 99% of them were still unpatched when the technical details were published. That is the gap leaders should focus on. Most organisations do not mainly fail because they have zero visibility. They fail because fixing, validating, and rolling out changes across live systems still takes too long.",
    },
    {
      type: "paragraph",
      text:
        "IBM's reported 44% increase in attacks beginning with exploitation of public-facing applications points in the same direction. If exposed software remains a reliable entry point, then slow patching is not an administrative inconvenience. It is a resilience problem.",
    },
    {
      type: "heading",
      level: 2,
      text: "What leaders should do now",
    },
    {
      type: "paragraph",
      text:
        "The sensible response is not panic and it is not AI theatre. Leaders should tighten remediation ownership, reduce time-to-patch where exposure is highest, and stop treating patching as a background maintenance task. Faster discovery raises the value of better prioritisation, cleaner engineering handoffs, and secure-by-default delivery discipline.",
    },
    {
      type: "paragraph",
      segments: [
        "If that is already on your agenda, the next practical step is usually a clearer technical plan rather than another strategy deck. The ",
        { label: "contact page", href: buildHomeSectionPath("contact") },
        " is the cleanest route in if you want help turning that into implementation.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Final takeaway",
    },
    {
      type: "paragraph",
      text:
        "Claude Mythos does not mean every business suddenly faces a brand-new category of threat overnight. It does mean the security baseline is shifting. AI is helping push vulnerability discovery forward quickly, while patching inside most organisations still runs at human speed. The businesses that adapt fastest will be the ones that treat remediation as a strategic capability rather than a slow technical afterthought.",
    },
  ],
};

export default post;
