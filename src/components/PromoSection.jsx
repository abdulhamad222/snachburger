import Image from "next/image";

export default function PromoSection() {
  return (
    <div className="grid md:grid-cols-3">
      
      <div className="bg-red-400 p-10 relative overflow-hidden">
        <h1 className="text-3xl font-bold text-white mb-4">
          Chicha Burger
        </h1>

        <button className="bg-white text-red-500 px-6 py-2 rounded-full">
          ORDER NOW
        </button>

        <Image
          src="/burger1.png"
          width={220}
          height={220}
          alt=""
          className="absolute right-0 bottom-0"
        />
      </div>

      <div className="bg-yellow-400 p-10 relative overflow-hidden">
        <h1 className="text-3xl font-bold text-white mb-4">
          Friend Burger
        </h1>

        <button className="bg-white text-red-500 px-6 py-2 rounded-full">
          ORDER NOW
        </button>

        <Image
          src="/burger2.png"
          width={220}
          height={220}
          alt=""
          className="absolute right-0 bottom-0"
        />
      </div>

      <div className="bg-orange-400 p-10 relative overflow-hidden">
        <h1 className="text-3xl font-bold text-white mb-4">
          Grill Thrill
        </h1>

        <button className="bg-white text-red-500 px-6 py-2 rounded-full">
          ORDER NOW
        </button>

        <Image
          src="/burger3.png"
          width={220}
          height={220}
          alt=""
          className="absolute right-0 bottom-0"
        />
      </div>
    </div>
  );
}