import Image from "next/image";
import { FaShoppingBasket } from "react-icons/fa";

const burgers = [
  {
    title: "Classic Burger",
    image: "/burger1.png",
    price: "$7.99",
  },
  {
    title: "Cheese Burger",
    image: "/burger2.png",
    price: "$8.49",
  },
  {
    title: "Double Patty",
    image: "/burger3.png",
    price: "$9.99",
  },
  {
    title: "Chicken Burger",
    image: "/burger1.png",
    price: "$7.49",
  },
  {
    title: "Smoky Burger",
    image: "/burger2.png",
    price: "$8.99",
  },
  {
    title: "Beef Burger",
    image: "/burger3.png",
    price: "$10.99",
  },
  {
    title: "Special Burger",
    image: "/burger1.png",
    price: "$11.49",
  },
  {
    title: "Mega Burger",
    image: "/burger2.png",
    price: "$12.99",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 px-4 sm:px-6 md:px-10">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h3 className="text-[#254b95] font-semibold tracking-[3px] uppercase mb-3">
          Our Special Menu
        </h3>

        <h1 className="text-5xl font-extrabold text-[#254b95]">
          Dine In + Delivery
        </h1>
      </div>

      {/* 4x4 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {burgers.map((burger, index) => (
          <div
            key={index}
            className="bg-white rounded-[30px] p-6 shadow-md hover:shadow-2xl hover:-translate-y-3 duration-300 group"
          >
            
            {/* Burger Image */}
            <div className="flex justify-center mb-5">
              <Image
                src={burger.image}
                width={180}
                height={180}
                alt={burger.title}
                className="group-hover:scale-110 duration-300 drop-shadow-xl"
              />
            </div>

            {/* Burger Title */}
            <h1 className="text-2xl font-bold text-[#254b95] text-center">
              {burger.title}
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-center text-sm mt-3 mb-5">
              Fresh grilled burger with premium cheese and crispy veggies.
            </p>

            {/* Price */}
            <h2 className="text-center text-2xl font-extrabold text-[#254b95] mb-5">
              {burger.price}
            </h2>

            {/* Buttons */}
            <div className="flex items-center justify-between gap-3">
              
              <button className="bg-[#254b95] hover:bg-[#1d3c79] duration-300 text-white p-3 rounded-full shadow-lg">
                <FaShoppingBasket />
              </button>

              <button className="border-2 border-[#254b95] text-[#254b95] hover:bg-[#254b95] hover:text-white duration-300 px-5 py-2 rounded-full font-semibold w-full">
                ORDER NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}