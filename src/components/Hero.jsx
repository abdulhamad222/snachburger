import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid md:grid-cols-2 gap-5 min-h-screen px-4 sm:px-6 md:px-10 py-10"
    >
      
      {/* Left */}
      <div className="flex flex-col justify-center bg-[#f5f5f5] rounded-3xl p-8 md:p-14">
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#254b95] mb-5 leading-tight">
          Single Patty Burger
        </h1>

        <p className="text-[#254b95] max-w-lg mb-8 text-sm sm:text-base">
          Delicious juicy burgers made with fresh ingredients and premium quality meat.
        </p>

        <button className="bg-[#254b95] hover:bg-[#1d3c79] transition text-white px-8 py-4 rounded-full w-fit">
          ORDER NOW
        </button>
      </div>

      {/* Right */}
      <div className="bg-[#254b95] rounded-3xl relative flex justify-center items-center min-h-[500px] overflow-hidden">

        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 bg-white w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-[#254b95] shadow-xl">
          $7.99
        </div>

        <Image
          src="/burger1.png"
          width={450}
          height={450}
          alt="burger"
          className="drop-shadow-2xl hover:scale-110 duration-300 w-[280px] sm:w-[350px] lg:w-[450px] h-auto"
        />

        <h1 className="absolute right-[-60px] text-[70px] sm:text-[120px] font-bold text-white rotate-90 opacity-10">
          Burger
        </h1>
      </div>
    </section>
  );
}