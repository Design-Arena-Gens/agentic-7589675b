const ritualSteps = [
  {
    step: "01",
    title: "Cleanse to Awaken",
    detail:
      "Warm the Facial Cleanser between palms to activate pearl enzymes. Massage upwards for 60 seconds to dissolve buildup and revive glow.",
  },
  {
    step: "02",
    title: "Correct & Illuminate",
    detail:
      "Press the Extreme Lightening Face Cream onto damp skin. Focus on areas of uneven tone and allow brightening actives to settle in.",
  },
  {
    step: "03",
    title: "Hydrate Under the Veil",
    detail:
      "While pores are receptive, infuse body with the Caramel Glowing Shower Gel. Let the vitamin C microcapsules burst under cool water.",
  },
  {
    step: "04",
    title: "Seal the Radiance",
    detail:
      "Finish with two drops of Glowing Oil. Glide over cheekbones, décolleté, and shoulders for a cashmere sheen that lasts all day.",
  },
];

export function RitualSteps() {
  return (
    <section
      id="rituals"
      aria-labelledby="rituals-heading"
      className="mx-auto mt-28 w-full max-w-6xl rounded-3xl border border-white/50 bg-white/60 px-6 py-16 shadow-xl backdrop-blur-lg md:px-10 lg:px-16"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:gap-16">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Signature Ritual
          </p>
          <h2
            id="rituals-heading"
            className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            Luxury that fits effortlessly into the rhythm of your day.
          </h2>
          <p className="text-base text-muted">
            Switch it Up Gallery distills spa-grade treatments into an intuitive
            four-step ritual. Each phase elevates the next, transforming daily
            care into a meditative moment that coaxes out your natural radiance.
          </p>
          <div className="mt-10 rounded-2xl border border-white/60 bg-white/70 px-6 py-5 text-sm text-muted shadow-sm">
            <span className="font-semibold text-foreground">
              Pro Tip:&nbsp;
            </span>
            Pair the ritual with cool jade tools to boost circulation and unlock
            the fullest glow potential.
          </div>
        </div>

        <ol className="relative flex flex-col gap-6">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent md:block"
          />
          {ritualSteps.map((step) => (
            <li
              key={step.step}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 px-6 py-6 shadow-sm backdrop-blur"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/15 bg-white/75 text-sm font-semibold text-foreground/75 shadow-sm">
                  {step.step}
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted">{step.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
