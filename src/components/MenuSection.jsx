import Image from "next/image";
import { FaShoppingBasket } from "react-icons/fa";

const burgers = [
  {
    title: "Burger Thief",
    image: "/burger1.png",
  },
  {
    title: "Burger Magic",
    image: "/burger2.png",
  },
  {
    title: "Pika N Burger",
    image: "/burger3.png",
  },
  {
    title: "Burger Thief",
    image: "/burger1.png",
  },
  {
    title: "Burger Magic",
    image: "/burger2.png",
  },
  {
    title: "Pika N Burger",
    image: "/burger3.png",
  },
];

export default function MenuSection() {
  return (
    <div className="py-20 px-10">
      <h3 className="text-red-500 text-center mb-3">
        Our Special
      </h3>

      <h1 className="text-5xl font-bold text-center mb-16">
        Dine In + Delivery
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {burgers.map((burger, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-3 duration-300"
          >
            <div className="flex justify-center">
              <Image
                src={burger.image}
                width={180}
                height={180}
                alt="burger"
              />
            </div>

            <h1 className="text-2xl font-bold text-red-500 mt-5">
              {burger.title}
            </h1>

            <p className="text-gray-500 my-4">
              Delicious burger with extra cheese.
            </p>

            <div className="flex items-center justify-between">
              <button className="bg-red-500 text-white p-3 rounded-full">
                <FaShoppingBasket />
              </button>

              <button className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white duration-300">
                ORDER NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}