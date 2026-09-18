import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-bronze">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl">
        Bu ürün artık mevcut değil
      </h1>
      <p className="mt-4 text-base leading-relaxed text-charcoal/70">
        Aradığınız ürün koleksiyondan kaldırılmış olabilir. Bunun yerine
        güncel kataloğumuzu keşfedin.
      </p>
      <Link
        href="/products"
        className="mt-10 inline-flex border border-bronze bg-bronze px-8 py-3 text-[13px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-transparent hover:text-bronze"
      >
        Koleksiyona Dön
      </Link>
    </div>
  );
}
