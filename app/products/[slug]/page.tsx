import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Ürün Bulunamadı" };
  }

  return {
    title: product.name,
    description: product.tagline,
    openGraph: {
      title: product.name,
      description: product.tagline,
      type: "website",
      images: [{ url: product.image, width: 1200, height: 1500, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.tagline,
      images: [product.image],
    },
    other: {
      "product:price:amount": product.price.toString(),
      "product:price:currency": product.currency,
      "product:category": product.category,
    },
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <nav aria-label="Gezinme yolu" className="mb-10 text-[12px] uppercase tracking-[0.1em] text-charcoal/50">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/products" className="transition-colors hover:text-bronze">
              Mağaza
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={`/products?category=${encodeURIComponent(product.category)}`}
              className="transition-colors hover:text-bronze"
            >
              {product.category}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-charcoal/80">{product.name}</li>
        </ol>
      </nav>

      <ProductDetail product={product} />
    </div>
  );
}
