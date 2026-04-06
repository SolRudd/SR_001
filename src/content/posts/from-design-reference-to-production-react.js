import { buildJournalPostPath } from "../../lib/routes.js";

const JIGMA_URL = "https://jigma.co.uk/";
const REACT_DOCS_URL = "https://react.dev/";
const VITE_GUIDE_URL = "https://vite.dev/guide/";

const post = {
  slug: "from-design-reference-to-production-react",
  title: "From design reference to production React",
  description:
    "A practical workflow for turning visual references into production React without flattening the design system or shipping brittle AI output.",
  excerpt:
    "The useful AI workflow is not image in, code out. It is constraint in, judgement through, and production code at the end.",
  category: "Workflow Note",
  readingTime: "8 min read",
  publishedAt: "2026-01-31",
  tags: ["AI workflows", "React", "System design"],
  relatedSlugs: [
    "shipping-buzzboost-without-bloat",
    "greentracer-building-a-signal-product",
  ],
  references: [
    {
      label: "Jigma",
      href: JIGMA_URL,
      external: true,
      note: "A live design-prompt tool built around the same image-to-frontend problem space.",
    },
    {
      label: "React documentation",
      href: REACT_DOCS_URL,
      external: true,
      note: "The implementation still has to land as maintainable React, not screenshot theatre.",
    },
    {
      label: "Vite guide",
      href: VITE_GUIDE_URL,
      external: true,
      note: "Useful when the generated output has to be normalised back into a lean build setup.",
    },
  ],
  content: [
    {
      type: "paragraph",
      text:
        "Most image-to-code demos fail the moment you point them at a real codebase. They can copy surface styling, but they do not know which visual decisions belong in tokens, which belong in components, and which should stay one-off.",
    },
    {
      type: "paragraph",
      segments: [
        "The workflow that holds up is closer to technical direction than prompt theatre. I use references to establish hierarchy, density, pacing, and interaction cues, then convert that into an explicit implementation brief before any serious generation happens. Tools like ",
        { label: "Jigma", href: JIGMA_URL, external: true },
        " are useful when they accelerate that translation step rather than pretending to replace it.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Turn the reference into constraints first",
    },
    {
      type: "paragraph",
      text:
        "A good reference is valuable because it gives you something to analyse, not because it gives you something to copy. I want to extract type hierarchy, density, spacing pressure, border logic, and interaction tone before any code is generated. Once those decisions are written down, the build can move faster without drifting.",
    },
    {
      type: "paragraph",
      segments: [
        "That is also the difference between using AI as an operator tool and using it as a shortcut. If the system matters, you still need to know how the final output will sit inside ",
        { label: "React", href: REACT_DOCS_URL, external: true },
        " and ",
        { label: "Vite", href: VITE_GUIDE_URL, external: true },
        ". Generated code is only useful if it can be normalised back into the repo cleanly.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "The handoff that keeps the build stable",
    },
    {
      type: "code",
      language: "txt",
      code:
        "Goal: Recreate the visual rhythm, not the screenshot.\nConstraints: Keep existing spacing scale, preserve border language, no new packages.\nOutput: React component changes only, plus scoped CSS updates where required.\nChecks: mobile integrity, reduced-motion safety, zero broken imports.",
    },
    {
      type: "paragraph",
      text:
        "That short brief does more work than a vague prompt ever will. It gives the model and the engineer the same frame. The build either meets those constraints or it does not.",
    },
    {
      type: "heading",
      level: 2,
      text: "Where the system usually gets damaged",
    },
    {
      type: "paragraph",
      text:
        "The common failure mode is not ugly code. It is subtle drift. New spacing values appear. Border language gets softened. Typography loses tension. The generated result looks close enough in isolation, but it weakens the product as soon as it sits beside the rest of the interface.",
    },
    {
      type: "paragraph",
      segments: [
        "That is why I treat the final pass as product work, not cleanup. The generated draft has to be interrogated against the actual system. The same judgement call shows up in founder-site work like ",
        {
          label: "Shipping BuzzBoost without bloat",
          href: buildJournalPostPath("shipping-buzzboost-without-bloat"),
        },
        ", where the code only succeeds if it protects the commercial structure rather than just approximating the screenshot.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Where the judgement still matters",
    },
    {
      type: "list",
      items: [
        "Choosing which pieces should become reusable components.",
        "Protecting type rhythm so generated code does not drift from the brand system.",
        "Refusing decorative patterns that make the interface feel generic.",
        "Normalising the final implementation so the repo stays maintainable after the experiment.",
      ],
    },
    {
      type: "paragraph",
      text:
        "That is the real opportunity. AI is good at acceleration when the structural decisions are already made. It is much worse as a replacement for those decisions. The operator advantage is knowing where to apply the speed and where to enforce discipline.",
    },
    {
      type: "paragraph",
      segments: [
        "That same rule becomes even more important when the product itself depends on trust and legibility, which is part of what sits behind ",
        {
          label: "GreenTracer and the discipline of a signal product",
          href: buildJournalPostPath("greentracer-building-a-signal-product"),
        },
        ". The build system, the interface, and the product claim all have to reinforce each other.",
      ],
    },
  ],
};

export default post;
