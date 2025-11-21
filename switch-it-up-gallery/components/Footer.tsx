const footerLinks = [
  { name: "Privacy", href: "#" },
  { name: "Terms", href: "#" },
  { name: "Shipping", href: "#" },
  { name: "Press", href: "#" },
];

export function Footer() {
  return (
    <footer className="mx-auto mt-28 w-full max-w-6xl px-6 pb-12 md:px-8 lg:px-12">
      <div className="rounded-3xl border border-white/50 bg-white/70 px-8 py-10 shadow-lg backdrop-blur">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Switch it Up Gallery
            </p>
            <p className="text-sm text-muted">
              Luxury skincare crafted to unveil your radiance, day and night.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-white/60 pt-6 text-center text-xs text-muted md:text-left">
          © {new Date().getFullYear()} Switch it Up Gallery. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
