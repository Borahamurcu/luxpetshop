import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(199,168,118,0.25), transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center sm:py-36 lg:py-44">
        <p className="text-[12px] font-medium uppercase tracking-[0.35em] text-bronze-soft">
          Seçkin dostlar için kurulmuştur
        </p>
        <h1 className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
          Seçkin bir yaşama
          <br className="hidden sm:block" /> yakışan ürünler
        </h1>
        <div className="mt-8 h-px w-16 bg-bronze" />
        <p className="mt-8 max-w-xl text-balance text-base leading-relaxed text-ivory/70 sm:text-lg">
          Deri ürünler, kaşmir ve el işçiliğiyle tamamlanmış mobilyalar —
          sahipleri kadar iyi yaşayan evcil hayvanlar için sınırlı sayıda
          üretilir.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/products"
            className="border border-bronze bg-bronze px-8 py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-charcoal transition-colors hover:bg-transparent hover:text-bronze-soft"
          >
            Koleksiyonu Keşfedin
          </Link>
          <Link
            href="/#story"
            className="border border-ivory/30 px-8 py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-ivory transition-colors hover:border-ivory hover:bg-ivory/5"
          >
            Hikayemiz
          </Link>
        </div>
      </div>
    </section>
  );
}
