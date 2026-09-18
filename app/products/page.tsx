import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllCategories,
  getAllProducts,
  getProductsByCategory,
  type Category,
} from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Koleksiyonu Keşfedin",
  description:
    "YIER'in tüm koleksiyonuna göz atın — seçkin dostlar için deri ürünler, kaşmir, mobilya ve seyahat parçaları.",
};

function isCategory(value: string, categories: Category[]): value is Category {
  return (categories as string[]).includes(value);
}

export default async function ProductsPage({
  searchParams,
}: PageProps<"/products">) {
  const params = await searchParams;
  const categories = getAllCategories();
  const requested = typeof params.category === "string" ? params.category : undefined;
  const activeCategory =
    requested && isCategory(requested, categories) ? requested : undefined;

  const products = activeCategory
    ? getProductsByCategory(activeCategory)
    : getAllProducts();

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div className="max-w-2xl">
        <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-bronze">
          Koleksiyon
        </p>
        <h1 className="mt-4 font-display text-4xl text-charcoal">
          {activeCategory ?? "Tüm Ürünler"}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal/70">
          {activeCategory
            ? `${activeCategory} kategorisindeki ürünlerimize daha yakından bakın.`
            : "Zamanla genişleyecek şekilde tasarlanmış YIER kataloğunun tamamı."}
        </p>
      </div>

      <nav
        aria-label="Kategoriye göre filtrele"
        className="mt-10 flex flex-wrap gap-3 border-b border-charcoal/10 pb-10"
      >
        <Link
          href="/products"
          className={`px-4 py-2 text-[12px] font-medium uppercase tracking-[0.1em] transition-colors ${
            !activeCategory
              ? "bg-charcoal text-ivory"
              : "border border-charcoal/15 text-charcoal/70 hover:border-bronze hover:text-bronze"
          }`}
        >
          Tümü
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            href={`/products?category=${encodeURIComponent(category)}`}
            className={`px-4 py-2 text-[12px] font-medium uppercase tracking-[0.1em] transition-colors ${
              activeCategory === category
                ? "bg-charcoal text-ivory"
                : "border border-charcoal/15 text-charcoal/70 hover:border-bronze hover:text-bronze"
            }`}
          >
            {category}
          </Link>
        ))}
      </nav>

      <div className="mt-14">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
