export function Header() {
  const navigation = [
    { name: "Rituals", href: "#rituals" },
    { name: "Collections", href: "#collections" },
    { name: "Story", href: "#story" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="mx-auto w-full max-w-6xl px-6 pt-8 md:px-8 lg:px-12">
      <div className="flex items-center justify-between rounded-full border border-white/40 bg-white/70 px-6 py-4 shadow-sm backdrop-blur-2xl transition md:px-8">
        <div className="flex items-center gap-2">
          <span className="h-10 w-10 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.95),rgba(217,183,133,0.45))] shadow-inner" />
          <p className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
            Switch it Up Gallery
          </p>
        </div>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <a
          href="#collections"
          className="inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-sm transition hover:bg-foreground/90"
        >
          Shop Collection
        </a>
      </div>
    </header>
  );
}
