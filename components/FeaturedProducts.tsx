import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

export default function FeaturedProducts() {
  const products = getFeaturedProducts(4);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-bronze">
            Öne Çıkanlar
          </p>
          <h2 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl">
            Bu Sezonun Seçkisi
          </h2>
        </div>
        <Link
          href="/products"
          className="text-[13px] font-medium uppercase tracking-[0.15em] text-charcoal/70 transition-colors hover:text-bronze"
        >
          Tüm Koleksiyonu Görüntüle →
        </Link>
      </div>

      <div className="mt-14">
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
