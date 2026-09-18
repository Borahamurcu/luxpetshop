export type Category =
  | "Köpek Aksesuarları"
  | "Kedi Aksesuarları"
  | "Giyim"
  | "Kaplar & Beslenme"
  | "Yatak & Mobilya"
  | "Seyahat"
  | "Bakım";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  /** Kartlarda ve meta açıklamasında gösterilen kısa tanıtım cümlesi. */
  tagline: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  category: Category;
  specs: ProductSpec[];
  materials: string;
  origin: string;
  externalUrl: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "aurelian-leather-dog-collar",
    name: "Aurelian Deri Tasma",
    tagline: "Masif pirinç aksamla tamamlanmış tam tane deri tasma.",
    description:
      "İtalyan bitkisel tabaklanmış derinin tek bir parçasından el ile kesilen Aurelian Tasma, kenarları yakılarak işlenir ve zamanla doğal bir patina kazanan masif pirinç aksamla tamamlanır. Sade ve dayanıklı yapısıyla, sıradan görünmeden her gün kullanılmak üzere tasarlanmıştır.",
    image: "/products/aurelian-leather-dog-collar.svg",
    price: 148,
    currency: "TRY",
    category: "Köpek Aksesuarları",
    specs: [
      { label: "Malzeme", value: "Tam tane İtalyan derisi" },
      { label: "Aksam", value: "Masif pirinç" },
      { label: "Bedenler", value: "S – XL, ayarlanabilir" },
      { label: "Bakım", value: "Kuru bezle silin" },
    ],
    materials: "Tam tane deri, masif pirinç aksam",
    origin: "Floransa, İtalya'da el yapımı",
    externalUrl: "https://example.com/shop/aurelian-leather-dog-collar",
    featured: true,
  },
  {
    id: 2,
    slug: "chalet-cashmere-dog-sweater",
    name: "Chalet Kaşmir Kazak",
    tagline: "Soğuk havalarda şıklık için saf kaşmir örgü.",
    description:
      "%100 Moğol kaşmirinden örülen Chalet Kazak, küçük ırkları hareket özgürlüğünden ödün vermeden sıcak tutar. Fitilli yaka ve bacak açıklıkları rahat, kalıplı bir kesim sağlarken sade renk paleti her tasma veya gezdirme kayışıyla kolayca uyum sağlar.",
    image: "/products/chalet-cashmere-dog-sweater.svg",
    price: 210,
    currency: "TRY",
    category: "Giyim",
    specs: [
      { label: "Malzeme", value: "%100 Moğol kaşmiri" },
      { label: "Bedenler", value: "XS – L" },
      { label: "Kapama", value: "Esnek geçmeli" },
      { label: "Bakım", value: "Soğuk suda elde yıkayın, düz sererek kurutun" },
    ],
    materials: "%100 kaşmir",
    origin: "İskoçya'da örülmüştür",
    externalUrl: "https://example.com/shop/chalet-cashmere-dog-sweater",
    featured: true,
  },
  {
    id: 3,
    slug: "vellum-leather-cat-harness",
    name: "Vellum Deri Kedi Göğüs Tasması",
    tagline: "Rahat, güvenli yürüyüşler için tüy gibi hafif göğüs tasması.",
    description:
      "Özellikle kedi anatomisi için tasarlanan Vellum Göğüs Tasması, yumuşak süet astarıyla göğüs üzerindeki baskıyı eşit şekilde dağıtır. Hafif deri gövde şık bir siluet sunarken gizli yan kilit toka giydirmeyi kolaylaştırır.",
    image: "/products/vellum-leather-cat-harness.svg",
    price: 132,
    currency: "TRY",
    category: "Kedi Aksesuarları",
    specs: [
      { label: "Malzeme", value: "Napa deri, süet astar" },
      { label: "Kapama", value: "Yan kilit toka" },
      { label: "Bedenler", value: "XS – M" },
      { label: "Bakım", value: "Kuru bezle silin" },
    ],
    materials: "Napa deri, süet astar",
    origin: "Floransa, İtalya'da el yapımı",
    externalUrl: "https://example.com/shop/vellum-leather-cat-harness",
  },
  {
    id: 4,
    slug: "marchetti-walnut-feeding-stand",
    name: "Marchetti Ceviz Mama Standı",
    tagline: "El yapımı seramik kaplarla masif ceviz stand.",
    description:
      "Yükseltilmiş bir yemek deneyimi, tam anlamıyla. Marchetti Stand, masif Amerikan ceviz gövdeyi el yapımı iki taş çömlek kaseyle birleştirir; evcil hayvanınızın yemek yeme yüksekliğini artırarak daha iyi duruş ve sindirimi destekler, aynı zamanda mobilya kalitesindeki işçiliğiyle her yemek köşesine zarafet katar.",
    image: "/products/marchetti-walnut-feeding-stand.svg",
    price: 286,
    currency: "TRY",
    category: "Kaplar & Beslenme",
    specs: [
      { label: "Malzeme", value: "Masif Amerikan cevizi, taş çömlek" },
      { label: "Yükseklik", value: "18 cm" },
      { label: "Kase kapasitesi", value: "2 × 550 ml" },
      { label: "Bakım", value: "Kaseler bulaşık makinesinde yıkanabilir" },
    ],
    materials: "Masif ceviz, sırlı taş çömlek",
    origin: "Vermont, ABD'de üretilmiştir",
    externalUrl: "https://example.com/shop/marchetti-walnut-feeding-stand",
    featured: true,
  },
  {
    id: 5,
    slug: "ombre-velvet-pet-bed",
    name: "Ombre Kadife Evcil Hayvan Yatağı",
    tagline: "Elle boyanmış kadife ile kaplanmış heykelsi bir yatak.",
    description:
      "Ombre Yatak, evcil hayvan mobilyalarına couture bir anlayış getirir. Her kılıf, ince bir renk geçişi oluşturmak için elle boyanır, ardından destekleyici bir hafıza köpüğü tabanının üzerine kaplanır. Gizli bir fermuar, iç dolguyu bozmadan kılıfın çıkarılıp temizlenmesine olanak tanır.",
    image: "/products/ombre-velvet-pet-bed.svg",
    price: 340,
    currency: "TRY",
    category: "Yatak & Mobilya",
    specs: [
      { label: "Malzeme", value: "Elle boyanmış kadife, hafıza köpüğü" },
      { label: "Bedenler", value: "M – XL" },
      { label: "Kılıf", value: "Çıkarılabilir, elde yıkanır" },
      { label: "Taban", value: "Kaymaz süet alt yüzey" },
    ],
    materials: "Kadife, hafıza köpüğü",
    origin: "Porto, Portekiz'de üretilmiştir",
    externalUrl: "https://example.com/shop/ombre-velvet-pet-bed",
    featured: true,
  },
  {
    id: 6,
    slug: "sterling-silver-id-tag",
    name: "Sterlin Gümüş Künye",
    tagline: "Sipariş üzerine el ile kazınan masif sterlin gümüş künye.",
    description:
      "Masif sterlin gümüşten dökülen ve elle işlenen bu künye, evcil hayvanınızın adı ve bir iletişim numarasıyla sipariş üzerine kazınır. Ağırlığı ve sessiz parlaklığıyla standart bir künyeden çok ince bir mücevhere yakın hissettirir.",
    image: "/products/sterling-silver-id-tag.svg",
    price: 95,
    currency: "TRY",
    category: "Köpek Aksesuarları",
    specs: [
      { label: "Malzeme", value: "Sterlin gümüş (925)" },
      { label: "Kazıma", value: "3 satıra kadar, dahildir" },
      { label: "Ölçüler", value: "30 × 22 mm" },
      { label: "Bakım", value: "Gümüş beziyle parlatın" },
    ],
    materials: "Sterlin gümüş",
    origin: "Londra, İngiltere'de el yapımı",
    externalUrl: "https://example.com/shop/sterling-silver-id-tag",
  },
  {
    id: 7,
    slug: "cashmere-travel-carrier",
    name: "Kaşmir Seyahat Çantası",
    tagline: "Fırçalanmış kaşmirle astarlanmış, uçuşa hazır taşıma çantası.",
    description:
      "Yapılandırılmış bir deri iskelet üzerine inşa edilen ve fırçalanmış kaşmirle astarlanan bu taşıma çantası, konfordan ödün vermeden çoğu havayolu koltuğunun altına sığacak boyuttadır. Havalandırmalı yan paneller ve dolgulu, ayarlanabilir bir kayış, onu günlük işler için de seyahat için de pratik hale getirir.",
    image: "/products/cashmere-travel-carrier.svg",
    price: 460,
    currency: "TRY",
    category: "Seyahat",
    specs: [
      { label: "Dış yüzey", value: "Tam tane deri" },
      { label: "İç astar", value: "Fırçalanmış kaşmir astar" },
      { label: "Ölçüler", value: "43 × 24 × 28 cm" },
      { label: "Uygunluk", value: "Çoğu havayolu koltuk altı şartına uyar" },
    ],
    materials: "Deri, kaşmir astar",
    origin: "Floransa, İtalya'da el yapımı",
    externalUrl: "https://example.com/shop/cashmere-travel-carrier",
    featured: true,
  },
  {
    id: 8,
    slug: "hand-stitched-leather-leash",
    name: "El Dikişli Deri Gezdirme Kayışı",
    tagline: "Bir ömür boyu yürüyüş için eyer dikişli kayış.",
    description:
      "Balmumlu keten iplikle elle eyer dikişi yapılan bu kayış, tasmalarımızla aynı bitkisel tabaklanmış deriden kesilir, böylece ikisi birlikte güzelce yıpranır. Rahat bir halka kulp ve döner pirinç mandal, trendlerden daha uzun ömürlü olması için tasarlanan bu kayışı tamamlar.",
    image: "/products/hand-stitched-leather-leash.svg",
    price: 118,
    currency: "TRY",
    category: "Köpek Aksesuarları",
    specs: [
      { label: "Malzeme", value: "Tam tane İtalyan derisi" },
      { label: "Uzunluk", value: "120 cm" },
      { label: "Aksam", value: "Masif pirinç, döner mandal" },
      { label: "Dikiş", value: "Elle eyer dikişi, keten iplik" },
    ],
    materials: "Tam tane deri, pirinç aksam",
    origin: "Floransa, İtalya'da el yapımı",
    externalUrl: "https://example.com/shop/hand-stitched-leather-leash",
  },
  {
    id: 9,
    slug: "porcelain-feeding-bowl-set",
    name: "Porselen Mama Kabı Seti",
    tagline: "Bronz bir tepsi üzerinde elle sırlanmış iki porselen kase.",
    description:
      "Bu set, elle sırlanmış iki porselen kaseyi, dökülmeleri önlemek ve zemini korumak için tasarlanmış ince bronz kaplamalı bir tepsiyle eşleştirir. Sır gıdayla temasa uygundur ve bulaşık makinesinde yıkanabilirken tepsinin mat kaplaması parmak izlerine ve günlük kullanıma dayanıklıdır.",
    image: "/products/porcelain-feeding-bowl-set.svg",
    price: 165,
    currency: "TRY",
    category: "Kaplar & Beslenme",
    specs: [
      { label: "Malzeme", value: "Sırlı porselen, bronz kaplamalı tepsi" },
      { label: "Kase kapasitesi", value: "2 × 400 ml" },
      { label: "Tepsi", value: "38 × 22 cm" },
      { label: "Bakım", value: "Kaseler bulaşık makinesinde yıkanabilir" },
    ],
    materials: "Porselen, pirinç alaşımlı tepsi",
    origin: "Limoges, Fransa'da üretilmiştir",
    externalUrl: "https://example.com/shop/porcelain-feeding-bowl-set",
  },
  {
    id: 10,
    slug: "alpaca-wool-cat-bed",
    name: "Alpaka Yünü Kedi Yatağı",
    tagline: "Boyanmamış alpaka yününden elle keçeleştirilmiş bir koza yatak.",
    description:
      "Boyanmamış bebek alpaka yününden elle keçeleştirilen bu yatak, nefes alabilir ve hipoalerjenik kalırken sıcaklığı doğal olarak korur. Kapalı, koza benzeri formu kedilerin yuva yapma içgüdüsüne hitap eder ve doğal lif tonları her iç mekanla uyum sağlar.",
    image: "/products/alpaca-wool-cat-bed.svg",
    price: 225,
    currency: "TRY",
    category: "Kedi Aksesuarları",
    specs: [
      { label: "Malzeme", value: "%100 bebek alpaka yünü" },
      { label: "Ölçüler", value: "45 × 40 × 30 cm" },
      { label: "Bakım", value: "Lekeleri silin, havada kurutun" },
      { label: "Menşei", value: "Elle keçeleştirilmiş, tek parça yapım" },
    ],
    materials: "%100 alpaka yünü",
    origin: "And Dağları, Peru'da el yapımı",
    externalUrl: "https://example.com/shop/alpaca-wool-cat-bed",
  },
  {
    id: 11,
    slug: "rosewood-grooming-brush",
    name: "Gül Ağacı Bakım Fırçası",
    tagline: "Masif gül ağacı sapa yerleştirilmiş yaban domuzu kıllı fırça.",
    description:
      "Masif gül ağacından torna edilen ve doğal yaban domuzu kıllarıyla donatılan bu fırça, tüy yağlarını eşit şekilde dağıtarak daha pürüzsüz ve parlak bir görünüm sağlar. Ağırlıklı sap elde rahatça durur ve günlük rutini küçük bir ritüele dönüştürür.",
    image: "/products/rosewood-grooming-brush.svg",
    price: 88,
    currency: "TRY",
    category: "Bakım",
    specs: [
      { label: "Malzeme", value: "Masif gül ağacı, yaban domuzu kılı" },
      { label: "En uygun", value: "Kısa ve orta uzunlukta tüyler için" },
      { label: "Uzunluk", value: "19 cm" },
      { label: "Bakım", value: "Kullanımdan sonra sapı kuru bezle silin" },
    ],
    materials: "Gül ağacı, doğal yaban domuzu kılı",
    origin: "Kyoto, Japonya'da el yapımı",
    externalUrl: "https://example.com/shop/rosewood-grooming-brush",
  },
  {
    id: 12,
    slug: "reversible-cashmere-blanket",
    name: "Çift Taraflı Kaşmir Battaniye",
    tagline: "Kaşmir ve merinos yünden çift taraflı bir örtü.",
    description:
      "Bir yüzü kaşmir, diğer yüzü merinos yünden dokunan bu çift taraflı battaniye mevsime göre uyum sağlar. Kontrast tonlu kırbaç dikişli kenarlar terzi işi bir bitiş katar; koltukta olduğu kadar bir kafeste veya taşıma çantasında kullanım için de uygundur.",
    image: "/products/reversible-cashmere-blanket.svg",
    price: 198,
    currency: "TRY",
    category: "Yatak & Mobilya",
    specs: [
      { label: "Malzeme", value: "Kaşmir yüz, merinos yün ters yüz" },
      { label: "Ölçüler", value: "90 × 70 cm" },
      { label: "Kenar", value: "Kırbaç dikişi, kontrast iplik" },
      { label: "Bakım", value: "Sadece kuru temizleme" },
    ],
    materials: "Kaşmir, merinos yün",
    origin: "İskoçya'da dokunmuştur",
    externalUrl: "https://example.com/shop/reversible-cashmere-blanket",
  },
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getFeaturedProducts(limit = 4): Product[] {
  const featured = PRODUCTS.filter((product) => product.featured);
  return (featured.length ? featured : PRODUCTS).slice(0, limit);
}

export function getProductsByCategory(category: Category): Product[] {
  return PRODUCTS.filter((product) => product.category === category);
}

export function getAllCategories(): Category[] {
  return Array.from(new Set(PRODUCTS.map((product) => product.category)));
}

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  "Köpek Aksesuarları": "Deri tasmalar, kayışlar ve günlük aksesuarlar.",
  "Kedi Aksesuarları": "Kedi konforuna özel göğüs tasmaları ve temel ürünler.",
  Giyim: "Serin günler için kaşmir ve yün örgüler.",
  "Kaplar & Beslenme": "Seramik, porselen ve ceviz ağacından yemek parçaları.",
  "Yatak & Mobilya": "Ev için döşemeli yataklar ve örtüler.",
  Seyahat: "Yolculuk için tasarlanmış yapılandırılmış çantalar.",
  Bakım: "Doğal ahşap ve kıldan yapılmış aletler.",
};

export function formatPrice(price: number, currency = "TRY"): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
