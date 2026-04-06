import { LINKEDIN_URL } from "../site.js";
import {
  JOURNAL_INDEX_PATH,
  buildHomeSectionPath,
  buildJournalPostPath,
} from "../../lib/routes.js";

const post = {
  slug: "why-ai-agents-need-guardrails",
  title: "Why AI Agents Need Guardrails",
  metaTitle: "Why AI Agents Need Guardrails",
  description:
    "A founder-led piece on why AI agents need guardrails, and what a real-world email mistake taught me about oversight, escalation, and building useful systems properly.",
  excerpt:
    "One of my agents sent a dud email. The important part was not that it got something wrong. The important part was that it surfaced the mistake immediately, reported what happened clearly, and asked whether it should apologise before taking another step.",
  category: "Agent Systems Note",
  readingTime: "7 min read",
  publishedAt: "2026-04-06",
  tags: ["AI agents", "Guardrails", "Oversight", "Operational systems"],
  relatedSlugs: [
    "codex-openclaw-and-real-agentic-workflows",
    "codex-terminal-ai-workflows-2026",
  ],
  content: [
    {
      type: "paragraph",
      text:
        "One of my agents sent a dud email. It was not catastrophic, but it was wrong enough to matter. The useful part came immediately afterwards. The system surfaced the issue, told me exactly what it had done, and asked whether I wanted it to apologise.",
    },
    {
      type: "paragraph",
      text:
        "That is the bit people still miss when they talk about agents. The serious question is not whether a model can make a mistake. Of course it can. The serious question is what the system does next.",
    },
    {
      type: "paragraph",
      segments: [
        "That is also how I think about the work across this site. The ",
        { label: "homepage", href: "/" },
        ", the ",
        { label: "Selected Work", href: buildHomeSectionPath("work") },
        ", and the journal are all really about turning technical capability into something commercially usable. For agent systems, that means escalation paths, reporting, permission boundaries, and correction loops rather than demo-stage magic tricks.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "The mistake was not the story",
    },
    {
      type: "paragraph",
      text:
        "The email itself was a dud. Not disastrous. Not reputation-ending. Just wrong enough that it could not be ignored. If all you are looking for is a clean demo, that is where the story ends. You conclude the agent failed and move on.",
    },
    {
      type: "paragraph",
      text:
        "In real implementation, that is where the useful signal starts. The agent did not quietly carry on. It did not hide the mistake behind confident language. It flagged the problem, reported its action, and stopped to ask for confirmation before making the situation worse.",
    },
    {
      type: "paragraph",
      text:
        "That is what guardrails are for. Not for creating the fantasy that agents never get anything wrong, but for making sure the system stays legible when they do.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why escalation matters more than perfection",
    },
    {
      type: "paragraph",
      text:
        "A useful operational system is not the one that never hits an edge case. It is the one that knows how to surface uncertainty, pause cleanly, and hand control back to the human owner at the right moment.",
    },
    {
      type: "list",
      items: [
        "Report what happened clearly instead of hiding behind vague output.",
        "Escalate when external communication, money, or trust is involved.",
        "Ask for confirmation before taking a second risky action.",
        "Leave an audit trail so the workflow can be tightened afterwards.",
      ],
    },
    {
      type: "paragraph",
      segments: [
        "That is the difference between AI theatre and an actual operating model. I touched the wider version of that in ",
        {
          label: "Codex, OpenClaw and real agentic workflows",
          href: buildJournalPostPath("codex-openclaw-and-real-agentic-workflows"),
        },
        ". Once agents touch real tasks, reliability comes from supervision architecture, not from pretending the model has become infallible.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Guardrails are part of the product",
    },
    {
      type: "paragraph",
      text:
        "People often talk about guardrails as though they are a tax on capability. In practice, they are part of the capability. If an agent can draft, send, update, post, or modify live systems, then the guardrail layer is not optional admin. It is part of the product you are actually building.",
    },
    {
      type: "paragraph",
      text:
        "That includes simple things: constrained scopes, approval gates, explicit tool permissions, clear status reporting, and obvious stop conditions. It also includes the more operational layer: logs, state, handoffs, and a human who can intervene without having to reverse-engineer what the system just did.",
    },
    {
      type: "paragraph",
      segments: [
        "That is part of why I keep returning to ideas like OpenClaw. Not because the point is to invent a dramatic label, but because serious agent workflows need an execution layer that keeps actions inspectable. The same bias shows up in the ",
        { label: "build", href: buildHomeSectionPath("build") },
        " and ",
        { label: "signal", href: buildHomeSectionPath("signal") },
        " sections here too. Useful systems are the ones that can be supervised properly.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Why I am building this anyway",
    },
    {
      type: "paragraph",
      text:
        "Yes, I can do the email manually. That is not the point. The point is not whether a founder can brute-force one more task personally. The point is whether a system can become dependable enough to carry meaningful operational load over time.",
    },
    {
      type: "paragraph",
      text:
        "You do not get there by only allowing agents to perform toy tasks where failure does not matter. You get there by testing them inside bounded real workflows, watching closely, catching the mistakes, and improving the control layer every time the system exposes a weakness.",
    },
    {
      type: "paragraph",
      segments: [
        "That is also why terminal-native and operator-facing workflows matter more than chat-first demo culture. I made that point more directly in ",
        {
          label: "How Founders Are Using Codex and Terminal-Native AI Workflows to Ship Faster in 2026",
          href: buildJournalPostPath("codex-terminal-ai-workflows-2026"),
        },
        ". The gain comes from tighter execution loops, not from pretending the first pass will always be perfect.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Real systems improve through correction loops",
    },
    {
      type: "paragraph",
      text:
        "The best outcome from this incident was not that the mistake disappeared. It was that the issue surfaced quickly enough to be useful. That gives you something concrete to improve: when to escalate, how to classify message quality, what thresholds should trigger review, and where autonomous action should stop.",
    },
    {
      type: "code",
      language: "txt",
      code:
        "Agent drafts action\n  -> Agent executes within scope\n  -> System detects anomaly or low-confidence outcome\n  -> Agent reports exact action taken\n  -> Human confirms correction path\n  -> Workflow rules get tightened",
    },
    {
      type: "paragraph",
      text:
        "That loop is a feature, not an embarrassment. It is how useful operational AI actually gets built. Not through hype, and not through polished screenshots, but through bounded deployment, visible mistakes, fast escalation, and steady refinement.",
    },
    {
      type: "heading",
      level: 2,
      text: "The practical standard",
    },
    {
      type: "paragraph",
      text:
        "If an agent touches something that affects trust, money, reputation, or external communication, I want a system around it that can explain itself, stop cleanly, and ask for confirmation when the stakes change. That is a much more credible standard than claiming the agent will somehow stop being fallible.",
    },
    {
      type: "paragraph",
      segments: [
        "That is the level I am interested in building toward: systems that become real assets because the oversight layer is strong enough to support them. If that is the kind of work you are thinking about too, the rest of the ",
        { label: "journal", href: JOURNAL_INDEX_PATH },
        " and my ",
        { label: "contact page", href: buildHomeSectionPath("contact") },
        " will give you a clearer sense of how I approach it.",
      ],
    },
    {
      type: "paragraph",
      segments: [
        "I have also shared a shorter version of this on ",
        { label: "LinkedIn", href: LINKEDIN_URL, external: true },
        ".",
      ],
    },
  ],
};

export default post;
