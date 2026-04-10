import { buildJournalPostPath } from "../../lib/routes.js";

const GREENTRACER_URL = "https://www.greentracer.org/";
const SUSTAINABLE_WEB_DESIGN_URL = "https://sustainablewebdesign.org/";
const WEB_VITALS_URL = "https://web.dev/articles/vitals";

const post = {
  slug: "greentracer-building-a-signal-product",
  title: "GreenTracer and the discipline of a signal product",
  description:
    "Notes on shaping GreenTracer around evidence, legibility, and product trust instead of sustainability theatre.",
  excerpt:
    "GreenTracer is useful when it behaves like an instrument, not a campaign. That distinction shaped the product, the interface, and the way the work needs to be written about.",
  category: "Product Breakdown",
  readingTime: "8 min read",
  publishedAt: "2026-02-27",
  articleImage: "/articles/heroes/greentracer-signal-product-hero.jpg",
  articleImageAlt:
    "A green-toned digital dashboard visualisation suggesting measurement, signal, and product instrumentation.",
  tags: ["Product systems", "GreenTracer", "Operator thinking"],
  relatedSlugs: [
    "shipping-buzzboost-without-bloat",
    "from-design-reference-to-production-react",
  ],
  references: [
    {
      label: "GreenTracer",
      href: GREENTRACER_URL,
      external: true,
      note: "The live product this note is referring to.",
    },
    {
      label: "Sustainable Web Design",
      href: SUSTAINABLE_WEB_DESIGN_URL,
      external: true,
      note: "A useful reference model for the broader conversation around digital sustainability.",
    },
    {
      label: "Web Vitals",
      href: WEB_VITALS_URL,
      external: true,
      note: "Performance still matters when the product is built around measurement and trust.",
    },
  ],
  content: [
    {
      type: "paragraph",
      segments: [
        "Products that talk about sustainability usually drift into soft language very quickly. ",
        { label: "GreenTracer", href: GREENTRACER_URL, external: true },
        " only becomes credible if the interface feels measured, specific, and slightly severe. It needs to look like it can defend what it is telling you.",
      ],
    },
    {
      type: "paragraph",
      text:
        "That meant designing around signal density. The strongest screens were not the ones with the most explanation. They were the ones where a user could see a result, understand the grading logic, and know what to do next without narrative padding.",
    },
    {
      type: "heading",
      level: 2,
      text: "An instrument, not a campaign",
    },
    {
      type: "paragraph",
      text:
        "The trap with this category is moral performance. Once a product starts sounding like a campaign, users stop reading it as an instrument. GreenTracer needed the opposite posture. It had to feel like something you could interrogate, not something that was trying to flatter your values.",
    },
    {
      type: "paragraph",
      segments: [
        "That is why reference material like ",
        {
          label: "Sustainable Web Design",
          href: SUSTAINABLE_WEB_DESIGN_URL,
          external: true,
        },
        " is useful, but only up to a point. Frameworks help orient the conversation. The product still has to translate that conversation into an interface that feels testable and operational.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Product rules worth keeping",
    },
    {
      type: "list",
      items: [
        "Lead with measured output before interpretation.",
        "Keep trust cues close to the data that generated them.",
        "Make remediation paths concrete enough to act on the same session.",
        "Use visual restraint so the product feels analytical rather than moralising.",
      ],
    },
    {
      type: "paragraph",
      text:
        "The same rule applies to content around the product. Publishing should deepen authority by showing decisions, constraints, and operating tradeoffs. If the writing becomes vague, the product positioning starts to soften with it.",
    },
    {
      type: "heading",
      level: 2,
      text: "Trust surfaces matter",
    },
    {
      type: "paragraph",
      segments: [
        "A signal product has to earn trust in several places at once: through interface legibility, through explanatory writing, and through performance discipline. A product that scores websites cannot feel sluggish or careless itself, which is part of why core references like ",
        { label: "Web Vitals", href: WEB_VITALS_URL, external: true },
        " still matter around the edge of the product.",
      ],
    },
    {
      type: "paragraph",
      segments: [
        "There is also a commercial lesson here that overlaps with ",
        {
          label: "Shipping BuzzBoost without bloat",
          href: buildJournalPostPath("shipping-buzzboost-without-bloat"),
        },
        ". In both cases the page earns more trust when it removes theatre and lets the structure do the persuasion.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Why this matters for future case studies",
    },
    {
      type: "paragraph",
      text:
        "GreenTracer is the kind of project where a future project page can sit one layer above the journal. The journal can hold live operating notes. A case-study page can later condense the decisions that mattered after the product has more history behind it.",
    },
    {
      type: "paragraph",
      segments: [
        "That split is useful. The journal can stay close to the real decision stream, while deeper pages later package the strongest lessons more formally. The same approach also pairs well with the implementation discipline described in ",
        {
          label: "From design reference to production React",
          href: buildJournalPostPath("from-design-reference-to-production-react"),
        },
        ", where the frontend has to keep serving the product logic rather than overpowering it.",
      ],
    },
  ],
};

export default post;
