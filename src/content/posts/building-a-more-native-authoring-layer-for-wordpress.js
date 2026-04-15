import { buildJournalPostPath } from "../../lib/routes.js";

const post = {
  slug: "building-a-more-native-authoring-layer-for-wordpress",
  title: "Building a More Native Authoring Layer for WordPress",
  description:
    "Why we are exploring a structured markdown-to-block workflow for WordPress, and why cleaner, more portable native output matters more than another content gimmick.",
  excerpt:
    "The problem is not that WordPress lacks an editor. The problem is that too much content still gets passed through disconnected formats, hidden structures, and manual reconstruction before a team can actually own it.",
  category: "Product Direction",
  readingTime: "8 min read",
  publishedAt: "2026-04-16",
  authorName: "Sol Rudd",
  metaLabel: "Founder product note",
  articleImage: "/articles/heroes/markdown-native-wordpress-authoring-layer-hero.png",
  articleImageAlt:
    "A dark, technical workflow graphic showing structured markdown input being transformed into cleaner native block-style output.",
  tags: [
    "WordPress",
    "Structured authoring",
    "Markdown workflows",
    "Block output",
    "Editor handoff",
  ],
  relatedSlugs: [
    "what-actually-makes-modern-digital-delivery-work",
    "from-design-reference-to-production-react",
  ],
  heroVisual: {
    label: "Product Thesis",
    title: "Structured input should turn into output a WordPress team can still own.",
    body:
      "The aim is not more abstraction for its own sake. It is a cleaner authoring path, better portability, and a stronger editor handoff once the page lands inside WordPress.",
    items: [
      {
        value: "Native",
        label: "Closer to core block output means less hidden builder debt and easier long-term editing.",
      },
      {
        value: "Portable",
        label: "Content should survive redesigns, theme changes, and team turnover with less reconstruction.",
      },
      {
        value: "Structured",
        label: "Markdown is useful as an input layer because it keeps authored content readable and durable.",
      },
    ],
  },
  sideNote: {
    label: "// Direction",
    title: "This is an authoring workflow bet, not an AI-content bet.",
    body:
      "If the source is structured and the output stays clean, later builder workflows have a much better foundation to build on without trapping the content inside them.",
  },
  content: [
    {
      type: "paragraph",
      text:
        "WordPress publishing is in a better place than it was a few years ago, but the workflow around it is still more fragmented than it should be. Raw content often starts life in notes, docs, or chat. Layout intent gets discussed somewhere else. Final assembly then happens inside the editor, a builder, or a technical handoff process that reconstructs the page again from scratch.",
    },
    {
      type: "paragraph",
      text:
        "That gap is the reason we are building in this direction. Not because WordPress needs more novelty, and not because AI should sit in the middle of every publishing task. The goal is simpler than that: start from structured authored input, then produce cleaner, more native, more portable block output that remains usable inside WordPress after the first draft is generated.",
    },
    {
      type: "image",
      src: "/articles/heroes/markdown-native-wordpress-authoring-layer-hero.png",
      alt: "A branded workflow visual showing authored markdown moving through a structured transform into native block-style output.",
      caption:
        "The direction in one frame: authored structure on one side, native block-style output on the other, with the transformation layer kept visible in the middle.",
      priority: true,
    },
    {
      type: "heading",
      level: 2,
      text: "The workflow is still too fragmented",
    },
    {
      type: "paragraph",
      text:
        "A lot of page creation still behaves like a relay race. One person writes the copy. Another interprets structure. Another rebuilds it visually. Another tries to make the editor output manageable at the end. That slows the work down, but the bigger problem is drift. Each translation step can weaken hierarchy, loosen intent, or bury the original document under tooling decisions.",
    },
    {
      type: "paragraph",
      segments: [
        "It is the same handoff problem I touched on in ",
        {
          label: "What actually makes modern digital delivery work",
          href: buildJournalPostPath("what-actually-makes-modern-digital-delivery-work"),
        },
        ". The visible interface is only one part of the system. The seams between authoring, structure, implementation, and editorial ownership usually decide whether the result feels coherent or stitched together.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Why native block output matters",
    },
    {
      type: "paragraph",
      text:
        "For this kind of workflow, native block output is not a cosmetic preference. It changes what happens after generation. If the result lands in WordPress as something close to normal block structure, editors can inspect it, revise it, move it, and keep using it without needing to understand a proprietary internal format first.",
    },
    {
      type: "paragraph",
      text:
        "That does not mean every serious layout problem is solved by default blocks alone. It means the output should stay legible to the platform it is entering. Cleaner block trees, fewer opaque wrappers, and less hidden state create a healthier starting point for maintenance, redesign, and editorial handoff.",
    },
    {
      type: "list",
      items: [
        "The editing surface stays closer to what a WordPress team already recognises.",
        "Theme or layout changes do not automatically force a full content reconstruction.",
        "The page remains easier to audit when structure and presentation need to be separated later.",
        "Long-term ownership improves because the content is not trapped behind someone else's assembly logic.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Locked formats create friction later",
    },
    {
      type: "paragraph",
      text:
        "Most lock-in does not feel painful on day one. It becomes expensive later, when a site changes direction, a team changes hands, or someone wants to migrate content into a different theme or workflow. At that point, tightly coupled builder state, deeply nested wrappers, or opaque serialized data stop looking like convenience and start looking like liability.",
    },
    {
      type: "paragraph",
      text:
        "The issue is not that specialised tools should never exist. Some pages do need more expressive layout systems. The issue is whether authored content can still travel. If moving or reusing the content means rebuilding the page from interpretation rather than transforming a readable source, the workflow carries hidden debt from the start.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why markdown is a useful input format",
    },
    {
      type: "paragraph",
      text:
        "Markdown is interesting here because it is a good authoring boundary, not because it is the final destination. It is readable, portable, diffable, and simple enough that structure remains visible to the human writing it. That makes it useful as a source format for turning intent into a block tree later.",
    },
    {
      type: "list",
      items: [
        "Authors can focus on hierarchy, sequence, and meaning before visual assembly hardens.",
        "The source stays easy to version, review, and move between systems.",
        "Lightweight structural cues can travel with the content instead of being trapped in a canvas state.",
        "The transformation layer can stay explicit about what was authored versus what was inferred.",
      ],
    },
    {
      type: "paragraph",
      text:
        "That last point matters most. A good input layer gives us a cleaner separation between source content and rendered layout. Once that boundary exists, the output logic becomes easier to reason about and the handoff inside WordPress becomes much less brittle.",
    },
    {
      type: "heading",
      level: 2,
      text: "AI should assist structure, not become the product",
    },
    {
      type: "paragraph",
      text:
        "AI is useful here when it helps organise structure, map intent to the right block patterns, and reduce repetitive reconstruction work. It is not useful when it becomes the only place the document logic exists. The authored input still needs to matter, and the generated result still needs to be reviewable by a human editor.",
    },
    {
      type: "paragraph",
      segments: [
        "That is close to the implementation discipline behind ",
        {
          label: "From design reference to production React",
          href: buildJournalPostPath("from-design-reference-to-production-react"),
        },
        ". Generation is helpful when it accelerates a system without flattening it. The model should help with structure and translation, but it should not turn the page into a black box that only the generating tool can understand.",
      ],
    },
    {
      type: "paragraph",
      text:
        "So the point is not more AI for the sake of AI. The point is faster authoring, cleaner block generation, and a better editorial handoff once the work reaches WordPress.",
    },
    {
      type: "heading",
      level: 2,
      text: "What we are building carefully",
    },
    {
      type: "paragraph",
      text:
        "What we are exploring is a workflow where structured markdown and authored cues can be transformed into cleaner block output with less manual rebuilding in the middle. That includes document parsing, layout interpretation, block selection, and producing output that is closer to native WordPress structures than to a closed intermediate canvas.",
    },
    {
      type: "list",
      items: [
        "A clearer path from authored markdown into a usable block tree.",
        "Output that stays more inspectable and editable inside WordPress.",
        "A workflow that reduces technical handoff rather than hiding it.",
        "A foundation that can support future builder-style workflows without making portability worse.",
      ],
    },
    {
      type: "paragraph",
      text:
        "What is still early is just as important to say plainly. We are still testing edge cases, complex layout coverage, how much design intent should be expressed in the source itself, and where deterministic mapping should end and assisted inference should begin. This is not a finished replacement for every publishing workflow, and it is not being presented that way.",
    },
    {
      type: "heading",
      level: 2,
      text: "What comes next",
    },
    {
      type: "paragraph",
      text:
        "The immediate work is to keep tightening the transform: better structure in, cleaner block output out, and less friction when an editor takes over inside WordPress. If that layer becomes dependable, a more serious builder workflow can sit on top of it later without forcing the content into a dead end.",
    },
    {
      type: "paragraph",
      text:
        "That is the longer-term bet. Not a gimmick plugin, not another hype cycle, and not a claim that authoring should be automated away. A better authoring layer simply gives WordPress a cleaner path from structured intent to usable output, which feels like a foundation worth building carefully.",
    },
  ],
};

export default post;
