import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full px-4 sm:px-6 md:px-10 pb-6 pt-24 md:pb-4 md:pt-24"
    >
      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        
        <Image
          src="/images/snach-banner.png"
          alt="Snach Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

      </div>
    </section>
  );
}