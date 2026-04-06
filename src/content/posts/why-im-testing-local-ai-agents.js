import { LINKEDIN_URL } from "../site.js";
import {
  JOURNAL_INDEX_PATH,
  buildHomeSectionPath,
  buildJournalPostPath,
} from "../../lib/routes.js";

const post = {
  slug: "why-im-testing-local-ai-agents",
  title: "Why I'm Testing Local AI Agents",
  metaTitle: "Why I'm Testing Local AI Agents",
  description:
    "A practical founder-led take on testing local AI agents, open models, Ollama, and why local-first experimentation matters for real AI systems.",
  excerpt:
    "I am interested in local AI for one reason: control. Not because local models replace everything, and not because open weights magically beat hosted frontier systems, but because serious builders should understand what can run locally, what still needs external intelligence, and how those layers can work together.",
  category: "Infrastructure Note",
  readingTime: "8 min read",
  publishedAt: "2026-04-06",
  tags: ["Local AI", "Ollama", "Open models", "Agent infrastructure"],
  relatedSlugs: [
    "why-ai-agents-need-guardrails",
    "codex-openclaw-and-real-agentic-workflows",
  ],
  content: [
    {
      type: "paragraph",
      text:
        "I am interested in local AI for one reason: control. Not because it replaces everything. Not because open models suddenly make hosted systems irrelevant. The reason is simpler than that. If you are serious about building real AI systems, you should understand what can run locally, what still needs hosted intelligence, and where the line between those two approaches actually sits.",
    },
    {
      type: "paragraph",
      text:
        "That is why I have been spending time testing local agents, Ollama, open-weight models, and smaller workflows that can run closer to the machine. Models like Gemma 4 make that conversation more serious, because the question is no longer just whether something technically runs on local hardware. The real question is what useful work it can do once it gets there.",
    },
    {
      type: "paragraph",
      segments: [
        "From a founder and operator perspective, this matters for the same reason the rest of this site does. The ",
        { label: "homepage", href: "/" },
        ", the ",
        { label: "build", href: buildHomeSectionPath("build") },
        ", and the ",
        { label: "signal", href: buildHomeSectionPath("signal") },
        " sections are all really about execution systems. Local inference is interesting because it changes the shape of those systems: privacy, cost, speed of iteration, infrastructure control, and how much of the workflow depends on external APIs.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Why local is worth testing properly",
    },
    {
      type: "paragraph",
      text:
        "There is a lazy version of this conversation that turns local AI into ideology. I am not interested in that. I do not think local models solve everything, and I do not think the smart move is to reject hosted models out of principle. I am interested because local testing tells you something important about system design. It shows you which parts of a workflow truly need frontier intelligence and which parts just need dependable, nearby compute.",
    },
    {
      type: "paragraph",
      text:
        "That distinction matters when you are building agent workflows. Some tasks need stronger reasoning, broader world knowledge, or more reliable long-context performance. Others are much narrower: classify this, extract that, rewrite this into a known format, triage a queue, run a small planning step, or keep an internal workflow moving without calling an external API for every turn.",
    },
    {
      type: "list",
      items: [
        "Local testing gives you tighter control over the execution environment.",
        "It reduces dependency on external latency and pricing changes.",
        "It creates options for privacy-sensitive or internal-only workflows.",
        "It forces clearer thinking about which layer of intelligence each task actually needs.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Why open models matter to builders",
    },
    {
      type: "paragraph",
      text:
        "Open-weight models matter because they widen the design space. They let builders inspect, compare, self-host, benchmark, swap runtimes, and prototype workflows without being fully locked into one external platform. That does not automatically make them better. It makes them strategically useful.",
    },
    {
      type: "paragraph",
      text:
        "That strategic value becomes clearer when you stop asking abstract leaderboard questions and start asking operational ones. Can I run this model cheaply enough to support a persistent internal workflow? Can I keep a sensitive process inside my own environment? Can I test agent behavior locally before wiring it into a broader system? Can I split responsibilities so local models handle routine work while hosted models take the heavier reasoning passes?",
    },
    {
      type: "paragraph",
      segments: [
        "That is part of the same wider point I made in ",
        {
          label: "Why AI Agents Need Guardrails",
          href: buildJournalPostPath("why-ai-agents-need-guardrails"),
        },
        ". Once you move beyond demos, the real question is not just model quality. It is system behavior under constraints.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Where Ollama fits in real workflows",
    },
    {
      type: "paragraph",
      text:
        "Ollama matters because it lowers the friction. Local model experimentation used to feel more like a research hobby. Now it is much easier to pull a model, run it, compare outputs, and start testing whether it can hold a role inside an actual workflow. That does not remove the hardware limits or the model-quality tradeoffs, but it does make local experimentation materially more accessible.",
    },
    {
      type: "paragraph",
      text:
        "For builders, that accessibility matters. You can sketch a local-first agent loop, try it against internal tasks, observe the failure modes, and make sharper infrastructure decisions afterwards. That is much more useful than having a vague opinion about local AI without ever putting it under operational pressure.",
    },
    {
      type: "code",
      language: "txt",
      code:
        "Hosted model for high-judgement planning\n  -> Local model for routine internal steps\n  -> Tool execution inside controlled environment\n  -> Human review on important outputs",
    },
    {
      type: "paragraph",
      text:
        "That hybrid shape is often more interesting than an all-local or all-hosted position. Real systems usually benefit from layered intelligence, not purity.",
    },
    {
      type: "heading",
      level: 2,
      text: "Testing models like Gemma 4 locally",
    },
    {
      type: "paragraph",
      text:
        "Models like Gemma 4 make local testing feel less like novelty and more like infrastructure exploration. The conversation gets more practical. You can start asking what the model is good at in a workflow, where it stays stable, how it handles instructions, and whether it can support a bounded agent role without constant babysitting.",
    },
    {
      type: "paragraph",
      text:
        "That still needs honesty. Running locally is not the same thing as being production-ready for every job. A model can be promising for summarisation, extraction, formatting, or narrow task execution and still fall short on tougher reasoning, reliability under ambiguity, or more demanding multi-step work. That is fine. The point of testing is to understand the fit, not to force a win.",
    },
    {
      type: "heading",
      level: 2,
      text: "What local models are already good for",
    },
    {
      type: "list",
      items: [
        "Internal drafting and structured rewrites where the format is well defined.",
        "Classification, extraction, tagging, and triage inside bounded pipelines.",
        "Agent sub-tasks that benefit from lower cost and tighter environmental control.",
        "Private or local-first experiments where sending every step to an external API is unnecessary.",
        "Workflow prototyping, benchmarking, and resilience testing for future system design.",
      ],
    },
    {
      type: "paragraph",
      text:
        "Those use cases are not glamorous, but that is exactly why they matter. Real leverage often comes from the boring operational layer: the repeatable steps, the internal routing, the glue logic, and the systems work that makes a wider product easier to run.",
    },
    {
      type: "heading",
      level: 2,
      text: "Where local still falls short",
    },
    {
      type: "paragraph",
      text:
        "Hosted frontier models still have real advantages. They are usually stronger on complex reasoning, more resilient across messy prompts, better at hard multi-step tasks, and often easier to rely on when the quality bar is high and the task surface is broad. That matters. Pretending otherwise is how people design brittle systems around wishful thinking.",
    },
    {
      type: "list",
      items: [
        "Local hardware constraints still shape what is realistic.",
        "Smaller open models can degrade faster on harder reasoning tasks.",
        "Tool use and long-context performance are not uniformly strong.",
        "Operational convenience can still favor hosted APIs for some production paths.",
      ],
    },
    {
      type: "paragraph",
      segments: [
        "That is why I do not see this as a local-versus-hosted argument. It is a routing question. The same operator mindset behind ",
        {
          label: "Codex, OpenClaw and real agentic workflows",
          href: buildJournalPostPath("codex-openclaw-and-real-agentic-workflows"),
        },
        " applies here too. Strong systems come from assigning the right role to the right worker with the right constraints.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Why this matters for future agent infrastructure",
    },
    {
      type: "paragraph",
      text:
        "I do not think every agent stack becomes fully local. I do think serious builders should understand local model workflows now, because future infrastructure decisions will depend on that literacy. Privacy requirements, cost envelopes, resilience planning, offline capabilities, and internal system design all look different once local inference is a viable option for part of the stack.",
    },
    {
      type: "paragraph",
      text:
        "If you only know how to build against hosted APIs, your system design will tend to mirror that assumption. If you understand both hosted and local model workflows, you have more room to design intelligently. That matters commercially as much as technically.",
    },
    {
      type: "paragraph",
      segments: [
        "That is the real reason I am testing local agents. Not to make sweeping claims, but to understand the architecture properly. If you are building in this direction too, the rest of the ",
        { label: "journal", href: JOURNAL_INDEX_PATH },
        ", the ",
        { label: "Selected Work", href: buildHomeSectionPath("work") },
        ", and my ",
        { label: "contact page", href: buildHomeSectionPath("contact") },
        " will show you the same bias clearly.",
      ],
    },
    {
      type: "paragraph",
      segments: [
        "I have also shared shorter notes on this kind of systems thinking on ",
        { label: "LinkedIn", href: LINKEDIN_URL, external: true },
        ".",
      ],
    },
  ],
};

export default post;
