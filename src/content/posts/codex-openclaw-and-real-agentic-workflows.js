import {
  JOURNAL_INDEX_PATH,
  buildHomeSectionPath,
  buildJournalPostPath,
} from "../../lib/routes";

const OPENAI_CODEX_URL = "https://openai.com/index/codex-now-generally-available/";
const ANTHROPIC_AGENTS_URL = "https://www.anthropic.com/engineering/building-effective-agents";
const MCP_SPEC_URL = "https://modelcontextprotocol.io/specification/2024-11-05/index";
const OPENAI_CUA_URL = "https://openai.com/index/computer-using-agent/";

const post = {
  slug: "codex-openclaw-and-real-agentic-workflows",
  title: "Codex, OpenClaw and real agentic workflows",
  description:
    "A founder-led view on Codex, OpenClaw, multi-agent workflows, and why serious operators are building supervised agent systems for real work, not demos.",
  excerpt:
    "The real shift is not AI producing another clever answer. It is operators learning to coordinate bounded agents across research, build, review, QA, content, and visual execution with human judgement still in charge.",
  category: "Agent Systems Note",
  readingTime: "12 min read",
  publishedAt: "2026-03-31",
  tags: ["Agentic workflows", "Codex", "Multi-agent systems", "Operator thinking"],
  relatedSlugs: [
    "from-design-reference-to-production-react",
    "what-actually-makes-modern-digital-delivery-work",
  ],
  references: [
    {
      label: "Codex is now generally available",
      href: OPENAI_CODEX_URL,
      external: true,
      note: "Useful for how Codex is evolving from coding assistant into a broader engineering workflow surface.",
    },
    {
      label: "Building effective agents",
      href: ANTHROPIC_AGENTS_URL,
      external: true,
      note: "A clear public framing for the distinction between workflows, agents, and the tradeoffs between them.",
    },
    {
      label: "Model Context Protocol specification",
      href: MCP_SPEC_URL,
      external: true,
      note: "Relevant when the agent layer needs dependable contracts for tools, services, and external context.",
    },
    {
      label: "Computer-Using Agent",
      href: OPENAI_CUA_URL,
      external: true,
      note: "Important for the interface-level future of agents beyond text-only tasks and API-only automation.",
    },
  ],
  faq: [
    {
      question: "Is Codex replacing engineers?",
      answer:
        "No. Codex is most useful as a supervised worker inside an engineering system, where a human still sets constraints, reviews tradeoffs, and approves what ships.",
    },
    {
      question: "Why use multi-agent workflows instead of one strong model?",
      answer:
        "Because role separation improves reliability. Smaller scopes, cleaner context, explicit handoffs, and clearer review points usually outperform one overloaded general agent.",
    },
    {
      question: "What do you mean by OpenClaw?",
      answer:
        "OpenClaw is my shorthand for an open, supervised execution layer where specialist agents coordinate through shared state, tool contracts, and human approval rather than acting like a black box.",
    },
    {
      question: "What is VisionClaw in practical terms?",
      answer:
        "VisionClaw is the visual sibling to that idea: agent systems that can interpret interface state, screenshots, rendered UI, and live software surfaces as part of real operational work.",
    },
  ],
  content: [
    {
      type: "paragraph",
      text:
        "The public story about AI is still too small. Most of the discourse is trapped in the demo layer: better answers, faster copy, cleaner code suggestions, one more chat window claiming it can do everything. The more interesting shift is happening one layer up. Operators can now coordinate systems of agents across real work.",
    },
    {
      type: "paragraph",
      segments: [
        "That changes how I think about the work on this site. The product layer on the ",
        { label: "homepage", href: "/" },
        " and the ",
        { label: "Selected Work", href: buildHomeSectionPath("work") },
        " section is not just about interfaces. It is also about the operating logic behind them: who researches, who drafts, who builds, who reviews, and how those handoffs stay legible when pressure shows up.",
      ],
    },
    {
      type: "paragraph",
      text:
        "Codex matters in that shift, but not as a party trick. It matters because it sits inside a wider movement from single-prompt assistants to supervised agentic workflows. That is where I place ideas like OpenClaw and VisionClaw: not as vague branding, but as names for the execution layer serious operators actually need.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why the tooling landscape is changing",
    },
    {
      type: "paragraph",
      segments: [
        "Two things changed at once. Models became more reliable at tool use, and the surrounding platforms started treating tools, state, and orchestration as first-class concerns. Anthropic's ",
        { label: "Building effective agents", href: ANTHROPIC_AGENTS_URL, external: true },
        " essay is still one of the clearest public descriptions of that shift: workflows are coded paths, while agents are model-directed actors operating inside them.",
      ],
    },
    {
      type: "paragraph",
      text:
        "That distinction matters because most commercial value does not come from unbounded autonomy. It comes from giving the model enough room to reason, enough tools to touch ground truth, and enough constraint that the output can be trusted, reviewed, and redirected when needed.",
    },
    {
      type: "paragraph",
      segments: [
        "If you already think in delivery systems, this should feel familiar. I made a similar point in ",
        {
          label: "What actually makes modern digital delivery work",
          href: buildJournalPostPath("what-actually-makes-modern-digital-delivery-work"),
        },
        ". Strong outcomes come from clear ownership, disciplined handoffs, and a reliable execution layer. Agents simply extend that logic into the cognitive part of the stack, which is why the ",
        { label: "build", href: buildHomeSectionPath("build") },
        " section on this site sits so close to the systems conversation.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Where Codex actually fits",
    },
    {
      type: "paragraph",
      segments: [
        "OpenAI's current ",
        { label: "Codex", href: OPENAI_CODEX_URL, external: true },
        " product matters because it moves the model closer to the repo, the terminal, and the execution environment. That is a different category of tool from autocomplete. The useful question is no longer 'can AI write code' but 'can a supervised agent take a scoped engineering task, work against the real environment, and return something reviewable?'",
      ],
    },
    {
      type: "paragraph",
      segments: [
        "That is also why Codex fits naturally beside the workflow discipline I described in ",
        {
          label: "From design reference to production React",
          href: buildJournalPostPath("from-design-reference-to-production-react"),
        },
        ". The model is valuable when it can operate inside constraints, not when it is allowed to spray generic output into a live codebase.",
      ],
    },
    {
      type: "list",
      items: [
        "Accept a bounded task with explicit constraints and clear ownership.",
        "Work against environment state instead of guessing from prose alone.",
        "Produce diffs, logs, and artefacts a human can inspect quickly.",
        "Hand work to a reviewer, tester, or deployment gate without pretending judgement is optional.",
      ],
    },
    {
      type: "paragraph",
      text:
        "In other words, Codex is best understood as one worker in a supervised system. Powerful, yes. Sufficient on its own, no.",
    },
    {
      type: "heading",
      level: 2,
      text: "What most people still get wrong about agents",
    },
    {
      type: "paragraph",
      text:
        "The first mistake is to treat 'agent' as a synonym for 'very good chatbot'. That is demo thinking. Real agent work lives inside permissions, environment state, deadlines, tool failures, review requirements, and commercial consequences. The more real the task becomes, the less useful generic prompt theatre feels.",
    },
    {
      type: "paragraph",
      text:
        "The second mistake is to over-centralise the system. One gigantic agent with every tool, every responsibility, and every context window quickly becomes hard to steer. Even if the model is strong, the operating model becomes weak. The human cannot see where quality drift began because the whole thing is happening inside one blurred role.",
    },
    {
      type: "list",
      items: [
        "Narrow scope improves reliability because each agent is solving one class of problem.",
        "Smaller context windows reduce noise and make evaluation cleaner.",
        "Role separation creates clearer audit trails and cleaner rollback paths.",
        "Human review becomes a control point rather than an afterthought.",
      ],
    },
    {
      type: "paragraph",
      segments: [
        "That is not far from why I wrote ",
        {
          label: "Why good digital work usually comes from specialist teams",
          href: buildJournalPostPath("why-good-digital-work-usually-comes-from-specialist-teams"),
        },
        ". Specialisation is not bureaucracy. It is how complex work stays legible under pressure.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "The move from single prompts to orchestrated systems",
    },
    {
      type: "paragraph",
      text:
        "The useful pattern now is orchestration. A research agent gathers context. A planning agent structures the task. A build agent executes. A review agent checks the output against standards. A QA agent probes the edges. A human owner signs off or redirects. The gain does not come from pretending the system is autonomous. It comes from reducing cognitive drag while keeping accountability visible.",
    },
    {
      type: "code",
      language: "txt",
      code:
        "Goal arrives\n  -> Research agent gathers sources, repo context, and constraints\n  -> Planning agent defines task graph and approvals\n  -> Specialist agents execute scoped work\n  -> Review / QA agents challenge the output\n  -> Human owner approves, edits, or re-routes",
    },
    {
      type: "paragraph",
      segments: [
        "That orchestration layer is where standards like the ",
        {
          label: "Model Context Protocol specification",
          href: MCP_SPEC_URL,
          external: true,
        },
        " start to matter. Once agents need consistent access to tools, files, services, and third-party systems, the boring interface work becomes strategic. It is also close to what I mean by the ",
        { label: "signal", href: buildHomeSectionPath("signal") },
        " layer here: the infrastructure that keeps execution clear enough to trust.",
      ],
    },
    {
      type: "paragraph",
      text:
        "The gap between demos and operator workflows lives right there. Demos hide the plumbing. Real systems live or die by it. If the handoffs are vague, the permissions are messy, or the logs are thin, the workflow does not scale just because the model looked clever in a five-minute clip.",
    },
    {
      type: "heading",
      level: 2,
      text: "OpenClaw as a model for practical agentic execution",
    },
    {
      type: "paragraph",
      text:
        "I use OpenClaw as shorthand for the kind of open, supervised execution layer I think serious operators need. It is not a claim that one framework will solve everything. It is a thesis about how the work should be structured when agent systems move from novelty into production.",
    },
    {
      type: "list",
      items: [
        "Explicit specialist agents with narrow remits instead of one blurred universal worker.",
        "Shared task state, logs, and handoff records so the system stays inspectable.",
        "Tool contracts that keep external systems readable instead of turning them into hidden prompts.",
        "Approval gates before high-risk actions, especially around code, money, data, and external publishing.",
        "Enough openness that the operator can swap models, tools, and runtimes as the stack changes.",
      ],
    },
    {
      type: "paragraph",
      segments: [
        "In practice, that means turning agent work into something closer to operations than magic. The ",
        { label: "journal", href: JOURNAL_INDEX_PATH },
        " is where I tend to write these system ideas in public, and the delivery note on ",
        {
          label: "what actually makes modern digital delivery work",
          href: buildJournalPostPath("what-actually-makes-modern-digital-delivery-work"),
        },
        " points at the same discipline from a non-AI angle.",
      ],
    },
    {
      type: "paragraph",
      text:
        "OpenClaw matters because the real bottleneck is rarely raw model intelligence. It is coordination: who owns the next step, what context they get, what tools they can touch, how errors are surfaced, and how the human stays in control without becoming the bottleneck.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why VisionClaw matters more than people think",
    },
    {
      type: "paragraph",
      text:
        "Most agent stacks are still too text-native. They assume the important state lives in documents, logs, code, and APIs. A surprising amount of operational reality still lives somewhere else: browser sessions, dashboards, admin panels, design files, spreadsheets, ticket queues, and odd internal tools nobody documented properly.",
    },
    {
      type: "paragraph",
      segments: [
        "That is why I think the visual layer is under-discussed. OpenAI's ",
        { label: "Computer-Using Agent", href: OPENAI_CUA_URL, external: true },
        " work points at a bigger shift: models that can see interface state, reason over it, and act inside it. Once that becomes dependable, automation stops meaning 'call the API if one exists' and starts meaning 'understand the software the way an operator does'.",
      ],
    },
    {
      type: "paragraph",
      text:
        "VisionClaw is the label I use for that direction inside my own thinking. It is the sibling to OpenClaw: the moment agent systems can inspect screenshots, compare rendered states, interpret visual anomalies, and navigate live interfaces as part of the workflow rather than as a separate experiment.",
    },
    {
      type: "list",
      items: [
        "QA agents checking real UI states instead of only DOM snapshots.",
        "Design agents comparing builds against references and flagging drift before release.",
        "Ops agents reading dashboards, incident panels, and admin surfaces in context.",
        "Support or compliance agents working through messy back-office software where no clean API exists.",
      ],
    },
    {
      type: "paragraph",
      segments: [
        "It also connects back to ",
        {
          label: "From design reference to production React",
          href: buildJournalPostPath("from-design-reference-to-production-react"),
        },
        " and the wider ",
        { label: "build layer", href: buildHomeSectionPath("build") },
        " on this site. Visual understanding is not a side feature. It is a missing input channel for real execution.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Real-world workflows that actually hold up",
    },
    {
      type: "heading",
      level: 3,
      text: "Product delivery loops",
    },
    {
      type: "paragraph",
      segments: [
        "A practical product loop can now look like this: a research agent reads tickets, competitor notes, and repo context; a planning agent turns that into scoped tasks; a Codex-style build agent ships the diff; a review agent audits for regressions; a QA agent runs through the interface and logs defects. The human intervenes at the decision points, not every keystroke. That is a better fit for the kind of founder-led product work shown in ",
        { label: "Selected Work", href: buildHomeSectionPath("work") },
        " and in notes like ",
        {
          label: "Shipping BuzzBoost without bloat",
          href: buildJournalPostPath("shipping-buzzboost-without-bloat"),
        },
        ".",
      ],
    },
    {
      type: "heading",
      level: 3,
      text: "Growth and content operations",
    },
    {
      type: "paragraph",
      segments: [
        "On the content side, one agent clusters search intent, another drafts the page structure, another checks internal links, and another packages assets or schema. The operator still owns the thesis and the final edit. The point is not to industrialise sludge. The point is to let machines handle the repetitive scaffolding so the human can spend time on judgement, positioning, and signal. That is close to how I think about the ",
        { label: "signal layer", href: buildHomeSectionPath("signal") },
        " and the publishing role of the ",
        { label: "journal", href: JOURNAL_INDEX_PATH },
        ".",
      ],
    },
    {
      type: "heading",
      level: 3,
      text: "QA, security, and messy operations",
    },
    {
      type: "paragraph",
      segments: [
        "The same pattern matters outside writing and code. A security agent can triage alerts, collect logs, and draft remediation notes. A QA agent can reproduce a checkout bug across screen sizes. A visual agent can inspect whether the live surface actually matches the shipped branch. None of this removes human accountability. It concentrates it where it matters. If you are building systems where those loops need to hold up under commercial pressure, the useful conversation starts at the operating model, not the prompt. That is the kind of work I want the ",
        { label: "contact route", href: buildHomeSectionPath("contact") },
        " on this site to filter for.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "What this means for founders, developers, and operators",
    },
    {
      type: "list",
      items: [
        "Founders should ask where the supervision model lives, not just which model is being used.",
        "Developers should care about task graphs, tool permissions, logging, and evals as much as prompt wording.",
        "Operators should treat multi-agent design as workflow engineering, not theatre.",
        "Teams should expect the strongest systems to combine human ownership with machine throughput.",
      ],
    },
    {
      type: "paragraph",
      text:
        "The people who get leverage here will not be the loudest online. They will be the ones who can coordinate research, build, review, QA, content, and execution with enough structure that quality goes up instead of drifting. That is the difference between an AI demo and operator infrastructure.",
    },
    {
      type: "heading",
      level: 2,
      text: "FAQ",
    },
    {
      type: "heading",
      level: 3,
      text: "Is Codex replacing engineers?",
    },
    {
      type: "paragraph",
      text:
        "No. Codex is most useful as a supervised worker inside an engineering system. A human still frames the task, decides the acceptable risk, reviews the tradeoffs, and approves what ships. The leverage comes from delegated execution, not from pretending judgement has disappeared.",
    },
    {
      type: "heading",
      level: 3,
      text: "Why use multi-agent workflows instead of one strong model?",
    },
    {
      type: "paragraph",
      text:
        "Because role separation improves reliability. Smaller scopes keep context cleaner, specialist prompts stay sharper, and review points become easier to enforce. One overloaded general agent can look impressive in a demo, but it is usually harder to steer once the work spans code, content, QA, design, and operations.",
    },
    {
      type: "heading",
      level: 3,
      text: "What do you mean by OpenClaw?",
    },
    {
      type: "paragraph",
      text:
        "OpenClaw is my shorthand for an open, supervised execution layer where specialist agents coordinate through shared state, tool contracts, and human approval. It is less about one named framework and more about a practical architecture for making agentic systems inspectable and reusable.",
    },
    {
      type: "heading",
      level: 3,
      text: "What is VisionClaw in practical terms?",
    },
    {
      type: "paragraph",
      text:
        "VisionClaw is the visual sibling to that idea. It describes agent systems that can interpret interface state, screenshots, rendered UI, and live software surfaces as part of real operational work. That matters anywhere the truth of the task is visible on screen before it is cleanly available through an API.",
    },
    {
      type: "heading",
      level: 2,
      text: "The next layer is supervision, not spectacle",
    },
    {
      type: "paragraph",
      text:
        "The future of AI work is not one chat window claiming it can do everything. It is supervised agent infrastructure: multiple workers, clearer handoffs, better tool contracts, tighter review, and more leverage for the human operator. That is a much less glamorous story than the demos, and much more useful.",
    },
    {
      type: "paragraph",
      segments: [
        "That is the direction I am interested in building around here. If you have been through the ",
        { label: "homepage", href: "/" },
        ", the ",
        { label: "Selected Work", href: buildHomeSectionPath("work") },
        " section, or the rest of the ",
        { label: "journal", href: JOURNAL_INDEX_PATH },
        ", you will have seen the same bias already: less demo theatre, more systems that can hold up when real work arrives. If that is the layer you need, ",
        { label: "start a project", href: buildHomeSectionPath("contact") },
        ".",
      ],
    },
  ],
};

export default post;
