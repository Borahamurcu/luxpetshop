import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block focus-visible:outline-none"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-beige">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-charcoal/0 transition-colors duration-500 group-hover:ring-charcoal/10" />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-bronze">
            {product.category}
          </p>
          <h3 className="mt-1 font-display text-lg text-charcoal transition-colors duration-300 group-hover:text-bronze">
            {product.name}
          </h3>
        </div>
        <p className="whitespace-nowrap pt-0.5 text-sm text-charcoal/70">
          {formatPrice(product.price, product.currency)}
        </p>
      </div>
    </Link>
  );
}
