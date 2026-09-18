import Image from "next/image";

const stats = [
  { label: "Kuruluş", value: "2014" },
  { label: "Üretim", value: "Sınırlı üretim" },
  { label: "Malzemeler", value: "Tam tane deri & doğal lif" },
];

export default function BrandIntro() {
  return (
    <section id="story" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 aspect-[4/5] overflow-hidden lg:order-1">
          <Image
            src="/brand/atelier-story.svg"
            alt="YIER atölyesini temsil eden bir amblem"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-bronze">
            Hikayemiz
          </p>
          <h2 className="mt-4 font-display text-3xl leading-snug text-charcoal sm:text-4xl">
            Kaliteli ürünlerin her zaman yapıldığı şekilde üretildi
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/70">
            YIER, basit bir fikre adanmış küçük bir deri atölyesi olarak
            başladı: sevgili bir evcil hayvanla paylaştığımız evlerimizdeki
            eşyalar, sahip olduğumuz her şey kadar aynı malzeme, orantı ve
            özeni hak eder. Her parça, İtalya, İskoçya ve Japonya&apos;daki
            küçük bir atölye grubuyla birlikte sınırlı sayıda üretilir.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70">
            Yalnızca zamanla güzelce yıpranan doğal malzemelerle çalışıyoruz —
            bitkisel tabaklanmış deri, kaşmir, alpaka yünü ve masif ahşap — ve
            her koleksiyon mevsimlik değil, yıllarca her gün kullanılmak
            üzere tasarlanır.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-charcoal/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[11px] uppercase tracking-[0.15em] text-charcoal/50">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-lg text-charcoal">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
