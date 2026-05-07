import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 min-h-[500px]">
      
      <div className="flex flex-col justify-center px-10 bg-[#f5f5f5]">
        <h1 className="text-6xl font-bold text-gray-800 mb-5">
          Single Patty
        </h1>

        <p className="text-gray-500 max-w-md mb-8">
          Delicious juicy burgers made with fresh ingredients.
        </p>

        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full w-fit">
          ORDER NOW
        </button>
      </div>

      <div className="bg-red-500 relative flex justify-center items-center">
        
        <div className="absolute top-10 left-10 bg-white w-28 h-28 rounded-full flex items-center justify-center text-3xl font-bold text-red-500">
          $7.99
        </div>

        <Image
          src="/burger1.png"
          width={450}
          height={450}
          alt="burger"
          className="drop-shadow-2xl hover:scale-110 duration-300"
        />

        <h1 className="absolute right-0 text-[130px] font-bold text-red-300 rotate-90 opacity-30">
          Burger
        </h1>
      </div>
    </div>
  );
}