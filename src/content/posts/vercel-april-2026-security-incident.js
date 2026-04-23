import {
  JOURNAL_INDEX_PATH,
  buildHomeSectionPath,
  buildInsightsPostPath,
  buildJournalPostPath,
} from "../../lib/routes.js";

const VERCEL_INCIDENT_URL = "https://vercel.com/kb/bulletin/vercel-april-2026-security-incident";
const VERCEL_ACTIVITY_LOG_URL = "https://vercel.com/docs/activity-log/";
const VERCEL_ROTATING_ENV_VARS_URL =
  "https://vercel.com/docs/environment-variables/rotating-secrets";
const VERCEL_SENSITIVE_ENV_VARS_URL =
  "https://vercel.com/docs/environment-variables/sensitive-environment-variables";
const VERCEL_DEPLOYMENT_PROTECTION_URL = "https://vercel.com/docs/security/deployment-protection";
const VERCEL_MANAGING_DEPLOYMENTS_URL = "https://vercel.com/docs/deployments/managing-deployments";

const post = {
  slug: "vercel-april-2026-security-incident",
  title: "Vercel April 2026 security incident: what happened and what users should do",
  metaTitle: "Vercel April 2026 Security Incident: What Happened and What Users Should Do",
  metaDescription:
    "A measured breakdown of the Vercel April 2026 security incident, what is confirmed about Vercel environment variables and secrets, and what users should do now.",
  description:
    "A measured breakdown of the Vercel April 2026 security incident, what is confirmed about environment variable exposure, and what Vercel users should do now.",
  excerpt:
    "The useful response to the Vercel incident is not blanket panic. It is precise language, secrets hygiene, deployment review, and a harder look at OAuth and third-party AI tool exposure.",
  category: "Security Insight",
  readingTime: "8 min read",
  publishedAt: "2026-04-20",
  authorName: "Sol Rudd",
  schemaType: "Article",
  metaLabel: "Security incident analysis",
  articleImage: "/articles/heroes/journal-cover.jpg",
  articleImageAlt:
    "A dark signal-monitoring interface representing deployment exposure, secret review, and incident response.",
  tags: [
    "Vercel security incident",
    "Vercel April 2026",
    "Secrets management",
    "OAuth security",
    "Deployment protection",
  ],
  relatedSlugs: [
    "claude-mythos-ai-vulnerability-arms-race",
    "why-ai-agents-need-guardrails",
    "what-actually-makes-modern-digital-delivery-work",
  ],
  heroVisual: {
    label: "Confirmed Now",
    title: "This is a real incident, but precision matters more than panic.",
    body:
      "Vercel has confirmed unauthorized access, a limited potentially affected subset, and possible exposure of some environment variables not marked as sensitive. That is enough to justify immediate review without inventing a larger story than the evidence supports.",
    items: [
      {
        value: "20 Apr 2026",
        label: "The Vercel bulletin was updated on April 20, 2026 with additional detail.",
      },
      {
        value: "Limited subset",
        label: "Vercel says a limited subset of customers may be affected.",
      },
      {
        value: "Sensitive protected",
        label: "Vercel says it has no evidence sensitive environment variable values were accessed.",
      },
    ],
  },
  sideNote: {
    label: "// Working View",
    title: "Treat this as an operational response problem, not an internet drama cycle.",
    body:
      "If your team uses Vercel, the immediate job is to review exposure, rotate the secrets that matter, tighten deployment controls, and audit OAuth access with clear priorities.",
  },
  faq: [
    {
      question: "Was Vercel hacked in April 2026?",
      answer:
        "Vercel described the event as unauthorized access to certain internal systems. The shorthand 'Vercel hacked' is understandable, but the more accurate framing is a confirmed security incident with a still-limited published blast radius.",
    },
    {
      question: "Were all Vercel environment variables exposed?",
      answer:
        "No. Vercel said some environment variables not marked as sensitive may have been accessible. It also said environment variables marked sensitive are stored in a way that prevents them from being read, and it has no evidence those values were accessed.",
    },
    {
      question: "What should Vercel users do first?",
      answer:
        "Start with activity logs, recent deployments, and rotation of any non-sensitive variables that contain real secrets. Then review sensitivity settings, tighten Deployment Protection, rotate relevant bypass tokens, and audit third-party OAuth access.",
    },
  ],
  references: [
    {
      label: "Vercel: April 2026 security incident bulletin",
      href: VERCEL_INCIDENT_URL,
      external: true,
      note: "Primary source for the confirmed incident details, the affected-scope language, the third-party AI tool and Google Workspace OAuth app connection, and Vercel's customer recommendations.",
    },
    {
      label: "Vercel docs: Using the Activity Log",
      href: VERCEL_ACTIVITY_LOG_URL,
      external: true,
      note: "Useful for reviewing team-level events, user activity, and configuration changes during incident response.",
    },
    {
      label: "Vercel docs: Rotating environment variables",
      href: VERCEL_ROTATING_ENV_VARS_URL,
      external: true,
      note: "Useful for rotating exposed credentials safely without breaking live deployments unnecessarily.",
    },
    {
      label: "Vercel docs: Sensitive environment variables",
      href: VERCEL_SENSITIVE_ENV_VARS_URL,
      external: true,
      note: "Useful for understanding how sensitive values are stored unreadably and how to tighten future secret handling.",
    },
    {
      label: "Vercel docs: Deployment Protection",
      href: VERCEL_DEPLOYMENT_PROTECTION_URL,
      external: true,
      note: "Useful for reviewing Standard Protection and the broader deployment access-control model.",
    },
    {
      label: "Vercel docs: Managing deployments",
      href: VERCEL_MANAGING_DEPLOYMENTS_URL,
      external: true,
      note: "Useful for inspecting recent deployments, filtering suspicious changes, and redeploying from a trusted state.",
    },
  ],
  footerReferences: true,
  cta: {
    headline: "Need help tightening secrets, deployment, or operational controls?",
    body:
      "I help teams turn technical risk into clear implementation work across frontend, content, and delivery systems.",
    primary: {
      label: "Start a project",
      href: buildHomeSectionPath("contact"),
    },
    secondary: {
      label: "Read more notes",
      href: JOURNAL_INDEX_PATH,
    },
  },
  content: [
    {
      type: "paragraph",
      text:
        "The Vercel April 2026 security incident matters because Vercel sits close to deployment pipelines, environment variables, preview surfaces, and the operational trust boundary many teams rely on every day. When a platform that close to production confirms unauthorized internal access, the right response is not theatre. It is to work through exposure carefully and act on the controls that actually reduce risk.",
    },
    {
      type: "paragraph",
      text:
        "Precise language matters here. Searches for 'Vercel hacked' are understandable, but they compress several different questions into one blunt phrase: what was accessed, whose data may have been exposed, which Vercel environment variables were readable, and what users should do next. Those details decide the response plan.",
    },
    {
      type: "paragraph",
      segments: [
        "That is also the bias behind other notes on this site, including ",
        {
          label: "Why AI Agents Need Guardrails",
          href: buildJournalPostPath("why-ai-agents-need-guardrails"),
        },
        ", ",
        {
          label: "Claude Mythos and the AI Vulnerability Arms Race",
          href: buildInsightsPostPath("claude-mythos-ai-vulnerability-arms-race"),
        },
        ", and ",
        {
          label: "What actually makes modern digital delivery work",
          href: buildJournalPostPath("what-actually-makes-modern-digital-delivery-work"),
        },
        ". The useful move is to turn a messy technical event into a clean operating response.",
      ],
    },
    {
      type: "stat",
      value: "Review now",
      body:
        "If you keep secrets in Vercel environment variables, rely on preview deployments, or grant external OAuth apps into Google Workspace, this is worth checking now rather than later.",
    },
    {
      type: "heading",
      level: 2,
      text: "What is actually confirmed",
    },
    {
      type: "heading",
      level: 3,
      text: "Vercel confirmed unauthorized access to certain internal systems",
    },
    {
      type: "paragraph",
      text:
        "That is the baseline fact, and it is enough on its own to take seriously. Vercel published the initial bulletin on April 19, 2026 and updated it on April 20, 2026 while saying the company was still investigating with incident-response support.",
    },
    {
      type: "heading",
      level: 3,
      text: "Vercel said a limited subset of customers may be affected",
    },
    {
      type: "paragraph",
      text:
        "That wording matters. It is materially different from saying every Vercel customer was exposed, and it is also different from saying the impact is definitely trivial. The confirmed position is narrower: a limited subset may be affected, and Vercel says it is engaging that subset directly.",
    },
    {
      type: "heading",
      level: 3,
      text: "The incident involved a third-party AI tool and a Google Workspace OAuth app",
    },
    {
      type: "paragraph",
      text:
        "Vercel said the incident originated from a compromise connected to Context.ai, a third-party AI tool used by a Vercel employee, and that the attack path involved the employee's Vercel Google Workspace account. It also published an indicator tied to the compromised Google Workspace OAuth app and recommended affected administrators check for it immediately.",
    },
    {
      type: "heading",
      level: 3,
      text: "Some environment variables not marked as sensitive may have been accessible",
    },
    {
      type: "paragraph",
      text:
        "This is the part teams should read carefully rather than emotionally. Vercel said some environment variables not marked as sensitive may have been accessible. It also said environment variables marked sensitive are stored in a way that prevents them from being read, and that it has no evidence those sensitive values were accessed.",
    },
    {
      type: "heading",
      level: 2,
      text: "What people should not assume",
    },
    {
      type: "heading",
      level: 3,
      text: "This is not the same as saying every .env file leaked",
    },
    {
      type: "paragraph",
      text:
        "That is the biggest unhelpful jump in the current conversation. The confirmed point is narrower: some Vercel environment variables not marked sensitive may have been accessible. That is serious, especially if teams stored real secrets there, but it is not the same claim as 'everyone's .env files were leaked.'",
    },
    {
      type: "heading",
      level: 3,
      text: "The phrase 'Vercel hacked' is shorthand, not a complete diagnosis",
    },
    {
      type: "paragraph",
      text:
        "For search, the phrase Vercel hacked will keep appearing because it is how people look for fast answers. For operators, it is too blunt. The practical issue is an identity and access incident that crossed into internal systems and some non-sensitive environment-variable exposure. That leads to a more specific response than vague platform panic.",
    },
    {
      type: "heading",
      level: 3,
      text: "No evidence of access to sensitive values is not a reason to do nothing",
    },
    {
      type: "paragraph",
      text:
        "Vercel's statement on sensitive values is reassuring and worth taking seriously. It is not a free pass to skip review. If your team treated non-sensitive fields as a convenient place to store real secrets, the distinction between Vercel secrets and ordinary configuration is now part of your response scope. Misclassification is an exposure path too.",
    },
    {
      type: "heading",
      level: 2,
      text: "What Vercel users should do today",
    },
    {
      type: "paragraph",
      text:
        "Start at the account and project layer before you disappear into code archaeology. The first questions are simple: did any non-sensitive Vercel environment variables contain real secrets, did anything suspicious happen in the activity trail, and have there been deployments you cannot account for cleanly?",
    },
    {
      type: "paragraph",
      text:
        "If a value could unlock something important, rotate it. That usually means API keys, database credentials, signing keys, webhook secrets, service-account tokens, and any secret embedded in Vercel environment variables without the sensitive setting enabled. Rotation should be prioritised by blast radius, not done blindly in random order.",
    },
    {
      type: "paragraph",
      text:
        "Then look at the deployment surface. Review recent deployments, check whether Deployment Protection is at least Standard, and rotate Deployment Protection tokens or automation bypass secrets where relevant. If your team uses Google Workspace, audit third-party OAuth app access as part of the same incident-response pass rather than treating it as a separate admin chore.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why this is bigger than Vercel",
    },
    {
      type: "heading",
      level: 3,
      text: "Third-party AI tool risk is now identity risk",
    },
    {
      type: "paragraph",
      text:
        "The detail that should stay with teams is not just that an attacker reached Vercel. It is that the path ran through a third-party AI tool and an OAuth relationship. If a tool can touch employee identity, workspace access, or connected systems, it belongs inside the real trust boundary whether or not the tool feels experimental.",
    },
    {
      type: "heading",
      level: 3,
      text: "OAuth sprawl is an access-control problem, not admin clutter",
    },
    {
      type: "paragraph",
      text:
        "A lot of teams grant Google Workspace or Google Account access once, then never revisit it unless something breaks. That is too casual for the current tool chain. OAuth grants have become part of the security perimeter, and attackers only need one soft edge to start chaining access together.",
    },
    {
      type: "heading",
      level: 3,
      text: "Secret handling discipline has to be literal",
    },
    {
      type: "paragraph",
      text:
        "This incident is also a good reminder that secret handling is not a naming convention exercise. If a value is materially sensitive, it should be stored and treated as such. Teams often use Vercel environment variables as a convenient bucket for everything from feature flags to signing keys. That convenience only works when the classification discipline is real.",
    },
    {
      type: "heading",
      level: 3,
      text: "Modern platforms concentrate trust very quickly",
    },
    {
      type: "paragraph",
      text:
        "The deeper lesson is structural. Build, deploy, preview, logs, domains, environment variables, and access control often sit close together now. That is commercially efficient, but it also means platform trust concentration gets high fast. Convenience compounds. So does exposure when identity or secrets handling slips.",
    },
    {
      type: "heading",
      level: 2,
      text: "Practical checklist",
    },
    {
      type: "list",
      variant: "checklist",
      items: [
        "Review activity logs across team and project scope for suspicious events, especially user-access changes, environment-variable changes, and unexpected deployment activity.",
        "Rotate the secrets that matter first, especially any non-sensitive Vercel environment variables that actually held API keys, tokens, database credentials, or signing material.",
        "Inspect recent deployments for unexpected branches, promotions, configuration changes, or deploys you cannot explain quickly.",
        "Review environment-variable sensitivity settings and move high-value values into sensitive storage going forward.",
        "Tighten Deployment Protection to at least Standard and rotate Deployment Protection or automation-bypass tokens where they are in use.",
        "Audit third-party OAuth access in Google Workspace or connected Google accounts, including the compromised app Vercel published if it could be relevant to your environment.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Closing",
    },
    {
      type: "paragraph",
      text:
        "The right reading of the Vercel April 2026 security incident is not that every team should panic and rebuild its stack tomorrow. It is that identity links, AI tool access, deployment controls, and secret classification now deserve more literal attention than many teams have been giving them.",
    },
    {
      type: "paragraph",
      text:
        "If you build on Vercel, this is a good week to review the system properly. If you build platforms, it is another reminder that OAuth hygiene, unreadable secret storage, and sensible deployment defaults are not secondary details. They are part of the product.",
    },
  ],
};

export default post;

/*
Editorial notes for publication:

Alternative SEO-capable titles:
1. Vercel April 2026 security incident: what builders should review now
2. Vercel security incident in April 2026: confirmed facts, env-var risk, and next steps
3. Vercel hacked? A precise guide to the April 2026 security incident

LinkedIn teaser:
Vercel's April 2026 security incident is real, but the useful response is not panic posting. The practical job is to separate confirmed facts from speculation, review non-sensitive env vars that held real secrets, inspect recent deployments, tighten Deployment Protection, and audit OAuth exposure now.

Pull quote:
The useful response to a platform incident is not broader panic. It is narrower certainty and faster operational hygiene.

Suggested internal links:
- Why AI Agents Need Guardrails
  /journal/why-ai-agents-need-guardrails/
- Claude Mythos and the new AI security reality
  /insights/claude-mythos-ai-vulnerability-arms-race/
- What actually makes modern digital delivery work
  /journal/what-actually-makes-modern-digital-delivery-work/

Publish note:
- A dedicated hero image can still be added later if you want a more bespoke card and archive visual.
*/
