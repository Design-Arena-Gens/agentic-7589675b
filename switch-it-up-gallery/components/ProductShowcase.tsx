type Product = {
  name: string;
  subtitle: string;
  description: string;
  usage: string;
  notes: string[];
  tone: "sunrise" | "amber" | "cocoa" | "lumina";
};

const productToneStyles: Record<Product["tone"], string> = {
  sunrise:
    "from-[rgba(255,247,240,0.85)] via-[rgba(249,230,206,0.75)] to-[rgba(240,203,158,0.75)]",
  amber:
    "from-[rgba(255,247,240,0.9)] via-[rgba(228,203,176,0.75)] to-[rgba(204,167,129,0.75)]",
  cocoa:
    "from-[rgba(252,244,236,0.92)] via-[rgba(211,180,148,0.8)] to-[rgba(186,148,111,0.7)]",
  lumina:
    "from-[rgba(255,247,240,0.92)] via-[rgba(238,225,208,0.75)] to-[rgba(216,190,160,0.7)]",
};

const products: Product[] = [
  {
    name: "Facial Cleanser",
    subtitle: "Pearl Enzyme Purifier",
    description:
      "A cushiony gel-to-foam that lifts impurities while respecting your barrier, leaving skin velvety-soft and fresh.",
    usage: "Cleanse morning & night with lukewarm water, massage for 60 seconds.",
    notes: [
      "Triple-phase botanical surfactants ward off dullness.",
      "Niacinamide refines pores without tightness.",
      "Pearl ferment instantly brightens.",
    ],
    tone: "sunrise",
  },
  {
    name: "Extreme Lightening Face Cream",
    subtitle: "Luminary Corrective Cream",
    description:
      "Smart brightening complex targets discoloration while buffering hydration locks in suppleness for lasting clarity.",
    usage: "Press into skin after serum. Glide along cheekbones for a lifted sheen.",
    notes: [
      "Alpha arbutin + tranexamic acid even tone.",
      "24-hour hydration with desert algae polysaccharides.",
      "Soft-focus minerals blur imperfections instantly.",
    ],
    tone: "amber",
  },
  {
    name: "Caramel Glowing Shower Gel",
    subtitle: "Velvet Glow Bath Elixir",
    description:
      "Silken caramel oils and vitamin C microcapsules bathe skin in a lavish lather that reveals satin radiance from head to toe.",
    usage: "Massage onto damp skin with circular motions, rinse with cool water to seal luminosity.",
    notes: [
      "Encapsulated C illuminates with every rinse.",
      "Silk amino acids drape skin in moisture.",
      "Warm amber accord envelopes the senses.",
    ],
    tone: "cocoa",
  },
  {
    name: "Glowing Oil",
    subtitle: "Radiance Sealing Elixir",
    description:
      "A featherlight dry oil that seals hydration, infuses glow, and leaves skin lit-from-within with a cashmere finish.",
    usage: "Press 2-3 drops onto high points after moisturizer or mix into foundation.",
    notes: [
      "Micro-shimmer minerals filter light softly.",
      "Camellia & marula cushion elasticity.",
      "Luxury citrus bloom lifts mood and skin.",
    ],
    tone: "lumina",
  },
];

export function ProductShowcase() {
  return (
    <section
      id="collections"
      aria-labelledby="collection-heading"
      className="mx-auto mt-24 w-full max-w-6xl px-6 md:px-8 lg:px-12"
    >
      <div className="mb-12 flex flex-col gap-6 text-center lg:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
          The Collection
        </p>
        <h2
          id="collection-heading"
          className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          A curated wardrobe for luminous, confident skin.
        </h2>
        <p className="mx-auto max-w-3xl text-base text-muted lg:mx-0">
          Each formula is meticulously crafted to layer seamlessly into a single
          ritual. Together they refine tone, flood the skin with hydration, and
          wrap you in the indulgent scent signature of Switch it Up Gallery.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {products.map((product) => (
          <article
            key={product.name}
            className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/75 p-8 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_35px_60px_-35px_rgba(27,17,13,0.45)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute -left-24 top-1/4 h-52 w-52 rounded-full bg-gradient-to-br ${productToneStyles[product.tone]} blur-2xl transition duration-500 group-hover:-translate-y-6`}
            />
            <div className="relative flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
                  {product.name}
                </h3>
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-muted">
                  {product.subtitle}
                </span>
              </div>
              <p className="text-base text-muted">{product.description}</p>
              <p className="rounded-2xl border border-white/50 bg-white/60 px-4 py-3 text-sm font-medium text-foreground/80">
                {product.usage}
              </p>
              <ul className="grid gap-3">
                {product.notes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-3 rounded-2xl bg-white/65 px-4 py-3 text-sm text-muted"
                  >
                    <span className="mt-2 h-[6px] w-[6px] rounded-full bg-foreground/50" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
