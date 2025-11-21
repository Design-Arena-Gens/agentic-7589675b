export function ConsultationCTA() {
  return (
    <section
      id="contact"
      className="mx-auto mt-28 w-full max-w-6xl px-6 md:px-8 lg:px-12"
    >
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-r from-[rgba(255,247,240,0.94)] via-[rgba(239,217,188,0.8)] to-[rgba(211,176,138,0.8)] px-8 py-16 shadow-2xl backdrop-blur">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr,0.85fr]">
          <div className="space-y-5 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Personalized Radiance
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Book a glow consultation with the Switch it Up Gallery experts.
            </h2>
            <p className="text-base text-muted">
              Share your skin story and we will tailor a regimen that amplifies
              your natural brilliance. Virtual and in-person atelier sessions
              available.
            </p>
          </div>

          <form className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur">
            <div className="grid gap-6">
              <label className="flex flex-col gap-2 text-sm font-medium text-foreground/80">
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="rounded-full border border-foreground/10 bg-white/90 px-5 py-3 text-sm font-normal text-foreground/90 shadow-sm outline-none transition focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-foreground/80">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="rounded-full border border-foreground/10 bg-white/90 px-5 py-3 text-sm font-normal text-foreground/90 shadow-sm outline-none transition focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-foreground/80">
                Skin Goals
                <textarea
                  name="message"
                  placeholder="Share what you would like to transform or enhance..."
                  rows={3}
                  className="rounded-3xl border border-foreground/10 bg-white/90 px-5 py-3 text-sm font-normal text-foreground/90 shadow-sm outline-none transition focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10"
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-lg transition hover:bg-foreground/90"
            >
              Reserve Consultation
            </button>
            <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.3em] text-muted">
              Response within 24 hours
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
