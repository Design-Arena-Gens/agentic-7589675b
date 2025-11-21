const testimonials = [
  {
    quote:
      "My skin has never looked this even. The ritual feels like a spa treatment every single day.",
    name: "Zara M.",
    role: "Celebrity Makeup Artist",
  },
  {
    quote:
      "The Caramel Glowing Shower Gel left me with a satin finish that lasted through the red carpet. Divine.",
    name: "Adesuwa O.",
    role: "Fashion Muse",
  },
  {
    quote:
      "Within two weeks the Glowing Oil gave me the confidence to skip foundation. It’s effortless luxury.",
    name: "Noelle K.",
    role: "Beauty Editor",
  },
];

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mx-auto mt-28 w-full max-w-6xl rounded-3xl border border-white/50 bg-white/55 px-6 py-16 shadow-xl backdrop-blur-lg md:px-10 lg:px-16"
    >
      <div className="flex flex-col gap-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Loved by Luminaries
        </p>
        <h2
          id="testimonials-heading"
          className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          Stories of radiance from around the world.
        </h2>
        <p className="mx-auto max-w-3xl text-base text-muted">
          Switch it Up Gallery is trusted backstage, in editorials, and inside
          the vanities of modern muses who expect luminous results without
          compromise.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/75 p-8 text-left shadow-lg backdrop-blur"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(233,207,172,0.45),transparent_65%)] blur-2xl" />
            <blockquote className="relative text-base text-muted">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="relative mt-8 flex flex-col text-sm font-semibold text-foreground">
              {testimonial.name}
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
                {testimonial.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
