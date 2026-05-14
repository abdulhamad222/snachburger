import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LocationSection from "@/components/Location";
import MenuSection from "@/components/MenuSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <MenuSection />
      <LocationSection />
      <Footer />
    </main>
  );
}