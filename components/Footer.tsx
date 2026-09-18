import Link from "next/link";
import { getAllCategories } from "@/data/products";

export default function Footer() {
  const categories = getAllCategories();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ivory/10 bg-charcoal text-ivory/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div className="lg:col-span-2">
          <p className="font-display text-lg tracking-[0.2em] text-ivory">
            YIER
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
            Deri ürünler, kaşmir ve el işçiliğiyle tamamlanmış mobilyalar —
            evinizin geri kalanıyla aynı standartlarda üretilmiş bir lüks
            evcil hayvan markası.
          </p>
        </div>

        <div>
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-bronze-soft">
            Mağaza
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/products?category=${encodeURIComponent(category)}`}
                  className="text-ivory/60 transition-colors hover:text-ivory"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-bronze-soft">
            Kurumsal
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link
                href="/#story"
                className="text-ivory/60 transition-colors hover:text-ivory"
              >
                Hikayemiz
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-ivory/60 transition-colors hover:text-ivory"
              >
                Tüm Koleksiyon
              </Link>
            </li>
            <li>
              <a
                href="mailto:atolye@yier.example.com"
                className="text-ivory/60 transition-colors hover:text-ivory"
              >
                Müşteri İletişimi
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-ivory/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© {year} YIER. Tüm hakları saklıdır.</p>
          <p>Her ürün, satın alma işlemi için ortak butiklerimize yönlendirilerek tamamlanır.</p>
        </div>
      </div>
    </footer>
  );
}
