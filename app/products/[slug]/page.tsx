import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatPrice,
  getAllProducts,
  getProductBySlug,
} from "@/data/products";

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

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden bg-beige lg:sticky lg:top-28 lg:h-fit">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-bronze">
            {product.category}
          </p>
          <h1 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl text-charcoal">
            {formatPrice(product.price, product.currency)}
          </p>

          <p className="mt-8 text-base leading-relaxed text-charcoal/70">
            {product.description}
          </p>

          <a
            href={product.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center border border-bronze bg-bronze px-8 py-4 text-[13px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-transparent hover:text-bronze sm:w-auto"
          >
            Ürünü Görüntüle
          </a>
          <p className="mt-3 text-xs text-charcoal/50">
            Satın alma işlemini tamamlamak için ortak butiğimize yönlendirir.
          </p>

          <div className="mt-12 border-t border-charcoal/10 pt-8">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
              Özellikler
            </h2>
            <dl className="mt-6 divide-y divide-charcoal/10">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between gap-6 py-3 text-sm"
                >
                  <dt className="text-charcoal/50">{spec.label}</dt>
                  <dd className="text-right text-charcoal">{spec.value}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-6 py-3 text-sm">
                <dt className="text-charcoal/50">Malzemeler</dt>
                <dd className="text-right text-charcoal">{product.materials}</dd>
              </div>
              <div className="flex justify-between gap-6 py-3 text-sm">
                <dt className="text-charcoal/50">Menşei</dt>
                <dd className="text-right text-charcoal">{product.origin}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
