export function Hero() {
  const highlights = [
    { label: "Dermatologist Tested", value: "Clinically refined actives" },
    { label: "Glow, Simplified", value: "4 step everyday ritual" },
    { label: "Radiance Guaranteed", value: "Visible results in 14 days" },
  ];

  return (
    <section
      aria-labelledby="hero-title"
      className="relative mx-auto mt-12 w-full max-w-6xl overflow-hidden rounded-3xl border border-white/40 bg-white/70 px-6 py-16 shadow-xl backdrop-blur-3xl md:px-12 lg:flex lg:items-center lg:justify-between lg:gap-16 lg:px-16"
    >
      <div className="flex flex-col gap-8 lg:w-[55%]">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/60 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted shadow-sm">
          Luxury Skincare, Made Simple
        </div>
        <div className="space-y-6">
          <h1
            id="hero-title"
            className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Switch on the beauty in you &mdash; unveil your radiance.
          </h1>
          <p className="max-w-xl text-lg text-muted">
            Crafted rituals infused with gold-standard botanicals and
            brightening science. Every product delivers indulgent textures,
            instant luminosity, and long-lasting clarity for skin that feels as
            luxurious as it looks.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#collections"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background shadow-lg shadow-[rgba(176,135,82,0.35)] transition hover:bg-foreground/90"
          >
            Explore the Collection
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-foreground/30 px-7 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/60 hover:bg-white/60"
          >
            Book a Glow Consultation
          </a>
        </div>
        <dl className="grid gap-4 pt-4 sm:grid-cols-3" aria-label="Product highlights">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/60 bg-white/60 px-4 py-5 text-sm shadow-sm backdrop-blur"
            >
              <dt className="font-semibold text-foreground">{item.label}</dt>
              <dd className="mt-2 text-muted">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mt-16 w-full lg:mt-0 lg:w-[45%]">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[3rem] border border-white/40 bg-[linear-gradient(160deg,rgba(255,255,255,0.9),rgba(217,183,133,0.55))] shadow-[0_40px_80px_-45px_rgba(27,17,13,0.55)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_50%)]" />
          <div className="absolute inset-x-8 bottom-10 mx-auto flex flex-col items-center rounded-[2.5rem] border border-white/60 bg-white/80 px-6 py-10 text-center shadow-lg backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              The Ritual
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              Radiance Awakening Set
            </h2>
            <p className="mt-3 text-sm text-muted">
              Cleanse, correct, hydrate, and seal in luminosity with our iconic
              four-piece wardrobe of modern glow essentials.
            </p>
            <div className="mt-6 flex items-center gap-4 border-t border-white/60 pt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              <span>Brightens</span>
              <span className="h-px w-8 bg-foreground/20" />
              <span>Hydrates</span>
              <span className="h-px w-8 bg-foreground/20" />
              <span>Firms</span>
            </div>
          </div>
          <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),rgba(217,183,133,0.35))] blur-md" />
          <div className="absolute bottom-6 right-12 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(176,135,82,0.4),transparent_70%)] blur-lg" />
          <div className="absolute -right-8 bottom-1/4 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_center,rgba(246,226,205,0.6),transparent_70%)] blur-2xl" />
        </div>
      </div>
    </section>
  );
}
