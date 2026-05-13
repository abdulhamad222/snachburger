import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Navbar from "@/components/Navbar";
import PromoSection from "@/components/PromoSection";
import SocialSection from "@/components/SocialSection";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <MenuSection />
      <PromoSection />
      <SocialSection />
      <Footer />
    </main>
  );
}