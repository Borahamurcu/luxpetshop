import Link from "next/link";
import {
  CATEGORY_DESCRIPTIONS,
  getAllCategories,
  getProductsByCategory,
} from "@/data/products";
import { CATEGORY_ICONS } from "@/components/icons";

export default function Categories() {
  const categories = getAllCategories();

  return (
    <section
      id="categories"
      className="scroll-mt-20 border-y border-charcoal/10 bg-beige/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-bronze">
            Kategoriye Göre Alışveriş
          </p>
          <h2 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl">
            İyi döşenmiş bir yaşamın her köşesi
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = CATEGORY_ICONS[category];
            const count = getProductsByCategory(category).length;
            return (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className="group flex flex-col justify-between border border-charcoal/10 bg-ivory p-8 transition-colors duration-300 hover:border-bronze"
              >
                <Icon className="h-9 w-9 text-bronze transition-transform duration-300 group-hover:scale-110" />
                <div className="mt-8">
                  <h3 className="font-display text-lg text-charcoal">
                    {category}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                    {CATEGORY_DESCRIPTIONS[category]}
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.15em] text-charcoal/40">
                    {count > 0 ? `${count} parça` : "Yakında"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
