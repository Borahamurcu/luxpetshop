import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import PromoSection from "@/components/PromoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <FeaturedProducts />
      <Categories />
      <PromoSection />
    </>
  );
}
