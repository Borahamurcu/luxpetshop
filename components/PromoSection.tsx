import Link from "next/link";

export default function PromoSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(50% 60% at 80% 20%, rgba(199,168,118,0.3), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-12 lg:py-28">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-bronze-soft">
            Sipariş Üzerine
          </p>
          <h2 className="mt-4 max-w-lg font-display text-3xl leading-snug sm:text-4xl">
            Deri ürünleri el işi kazıma ve monogramla kişiselleştirin
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/70">
            Tasmalar, gezdirme kayışları ve künyeler, ek ücret ödemeden elle
            işlenmiş bir monogram veya kazımayla tamamlanabilir — atölyelerimizin
            her parça atölyeden çıkmadan önce elle tamamladığı bir detay.
          </p>
        </div>
        <div className="flex lg:justify-end">
          <Link
            href={`/products?category=${encodeURIComponent("Köpek Aksesuarları")}`}
            className="inline-flex border border-bronze px-8 py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-bronze-soft transition-colors hover:bg-bronze hover:text-charcoal"
          >
            Kişiselleştirilmiş Ürünleri İncele
          </Link>
        </div>
      </div>
    </section>
  );
}
