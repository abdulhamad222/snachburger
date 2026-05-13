import Image from "next/image";

export default function PromoSection() {
  return (
    <section
      id="promo"
      className="grid grid-cols-1 md:grid-cols-3"
    >
      
      <div className="bg-[#254b95] p-10 relative overflow-hidden min-h-[300px] flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Chicha Burger
        </h1>

        <button className="bg-white text-[#254b95] px-6 py-3 rounded-full w-fit">
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

      <div className="bg-[#3f66b4] p-10 relative overflow-hidden min-h-[300px] flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Friend Burger
        </h1>

        <button className="bg-white text-[#254b95] px-6 py-3 rounded-full w-fit">
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

      <div className="bg-[#1d3c79] p-10 relative overflow-hidden min-h-[300px] flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Grill Thrill
        </h1>

        <button className="bg-white text-[#254b95] px-6 py-3 rounded-full w-fit">
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
    </section>
  );
}