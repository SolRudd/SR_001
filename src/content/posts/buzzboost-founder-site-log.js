import { buildHomeSectionPath, buildJournalPostPath } from "../../lib/routes.js";

const BUZZBOOST_URL = "https://buzzboost.co.uk/";
const NNG_INFO_SCENT_URL = "https://www.nngroup.com/articles/information-scent/";

const post = {
  slug: "shipping-buzzboost-without-bloat",
  title: "Shipping BuzzBoost without bloat",
  description:
    "Founder-side notes on tightening a service site around clarity, proof, and commercial signal instead of generic agency theatre.",
  excerpt:
    "BuzzBoost was a good reminder that most service sites do not have a design problem first. They have a signal problem, and the interface either sharpens that signal or buries it.",
  category: "Build Log",
  readingTime: "7 min read",
  publishedAt: "2026-03-12",
  tags: ["Founder notes", "Positioning", "Frontend systems"],
  relatedSlugs: [
    "greentracer-building-a-signal-product",
    "from-design-reference-to-production-react",
  ],
  references: [
    {
      label: "BuzzBoost",
      href: BUZZBOOST_URL,
      external: true,
      note: "The live founder-led service site this note is grounded in.",
    },
    {
      label: "Information scent",
      href: NNG_INFO_SCENT_URL,
      external: true,
      note: "A useful framing from Nielsen Norman Group for how people follow cues through a page.",
    },
    {
      label: "From design reference to production React",
      href: buildJournalPostPath("from-design-reference-to-production-react"),
      note: "The workflow note behind keeping implementation sharp once the structure is decided.",
    },
  ],
  content: [
    {
      type: "paragraph",
      segments: [
        "On ",
        { label: "BuzzBoost", href: BUZZBOOST_URL, external: true },
        ", the useful constraint was simple: do not make it look like a louder agency. Make it feel more credible the longer someone spends with it. That changes the work immediately. You stop thinking in decorative sections and start thinking in operator-level sequencing.",
      ],
    },
    {
      type: "paragraph",
      text:
        "Most service sites fail because they try to sound established before they sound clear. The result is familiar: expensive-looking surfaces, vague claims, and no obvious path for a serious buyer to decide whether the person behind the site can actually ship.",
    },
    {
      type: "heading",
      level: 2,
      text: "The actual brief",
    },
    {
      type: "paragraph",
      text:
        "The real build brief was to remove ambiguity. Visitors needed to understand the offer, the style of work, and the founder footprint quickly. Every layer that weakened that reading had to go, even if it looked conventionally polished.",
    },
    {
      type: "paragraph",
      segments: [
        "That is where ideas like ",
        { label: "information scent", href: NNG_INFO_SCENT_URL, external: true },
        " become useful in practice. You are not trying to entertain people into trusting you. You are giving them enough clean signals to keep moving deeper into the page with confidence.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "What changed in the build logic",
    },
    {
      type: "list",
      items: [
        "Removed filler sections that explained nothing new.",
        "Tightened the hierarchy so offers, proof, and contact intent surfaced faster.",
        "Kept the palette disciplined so the page looked deliberate rather than over-produced.",
        "Built the frontend to stay easy to revise as the commercial offer changes.",
      ],
    },
    {
      type: "paragraph",
      text:
        "The deeper lesson is that a founder site should carry the same weight as a product surface. It is not supporting material. It is a live interface for trust, context, and commercial filtering. That is why the structure matters more than whether the page feels trendy.",
    },
    {
      type: "heading",
      level: 2,
      text: "Where authority actually comes from",
    },
    {
      type: "paragraph",
      segments: [
        "Authority came from showing the work clearly, not from inflating the tone. That same discipline shows up in product notes like ",
        {
          label: "GreenTracer and the discipline of a signal product",
          href: buildJournalPostPath("greentracer-building-a-signal-product"),
        },
        ", where the interface has to feel precise enough to earn belief.",
      ],
    },
    {
      type: "paragraph",
      segments: [
        "It also depends on implementation quality. Once the page structure is right, the frontend has to stay disciplined all the way through production. That is the logic behind ",
        {
          label: "From design reference to production React",
          href: buildJournalPostPath("from-design-reference-to-production-react"),
        },
        ": generation can accelerate the build, but it cannot be allowed to flatten the system.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "The operator takeaway",
    },
    {
      type: "paragraph",
      text:
        "When the service itself depends on sharp judgement, the site has to demonstrate judgement in the structure. Tight copy helps, but architecture matters more. Good sequencing does more work than another claims grid ever will.",
    },
    {
      type: "paragraph",
      segments: [
        "If I were auditing the next pass, I would look at whether the page makes the right people convert faster and the wrong people self-select out sooner. That is the actual commercial test, and it is easier to measure when the structure is clean. The broader site already supports that logic through the ",
        { label: "Selected Work", href: buildHomeSectionPath("work") },
        " and journal layers.",
      ],
    },
  ],
};

export default post;
