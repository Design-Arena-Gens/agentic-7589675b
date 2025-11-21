const pillars = [
  {
    title: "Science-Led Radiance",
    description:
      "We pair clinically proven brighteners with botanical ferments to target luminosity at every layer of the skin.",
  },
  {
    title: "Sustainable Luxury",
    description:
      "Our glass vessels and refill pods are crafted for longevity, reducing waste without compromising opulence.",
  },
  {
    title: "Inclusive Beauty",
    description:
      "Formulated for every complexion, each product respects melanin-rich skin while coaxing out its natural glow.",
  },
];

export function StorySection() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="mx-auto mt-28 w-full max-w-6xl px-6 md:px-8 lg:px-12"
    >
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/60 shadow-xl backdrop-blur-lg">
        <div className="grid gap-10 px-6 py-16 md:px-12 lg:grid-cols-[1.05fr,1fr] lg:gap-16 lg:px-16">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              Where artistry meets modern skin science.
            </h2>
            <p className="text-base text-muted">
              Switch it Up Gallery began backstage at international runway
              shows, where models craved a regimen that could reset travel-worn
              skin in minutes. Today, we blend couture-inspired ingredients with
              cutting-edge research to help you glow effortlessly in real life.
            </p>
            <div className="flex flex-col gap-6 rounded-2xl border border-white/50 bg-white/70 px-6 py-6 text-sm text-muted shadow-sm">
              <p>
                Every texture is meticulously crafted to feel decadent the
                moment it touches your skin. We believe ritual should be equal
                parts performance and pleasure.
              </p>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">
                &mdash; The Switch it Up Gallery Collective
              </span>
            </div>
          </div>

          <div className="grid gap-6 rounded-2xl bg-white/70 p-8 shadow-inner">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/70 bg-white/80 px-6 py-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
