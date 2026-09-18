import Link from "next/link";

const links = [
  { href: "/products", label: "Mağaza" },
  { href: "/#categories", label: "Kategoriler" },
  { href: "/#story", label: "Hikayemiz" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-display text-lg tracking-[0.2em] text-charcoal"
        >
          YIER
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-10 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.15em] text-charcoal/70 transition-colors hover:text-bronze"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/products"
          className="text-[13px] font-medium uppercase tracking-[0.15em] text-charcoal/70 transition-colors hover:text-bronze sm:hidden"
        >
          Mağaza
        </Link>
      </div>
    </header>
  );
}
