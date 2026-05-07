import { FaShoppingBasket } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-6">
      <h1 className="text-2xl font-bold">
        BUR<span className="text-red-500">GER</span>
      </h1>

      <ul className="hidden md:flex gap-8 text-sm font-semibold">
        <li className="hover:text-red-500 cursor-pointer">HOME</li>
        <li className="hover:text-red-500 cursor-pointer">ORDER NOW</li>
        <li className="hover:text-red-500 cursor-pointer">MENU</li>
        <li className="hover:text-red-500 cursor-pointer">LOCATION</li>
      </ul>

      <div className="flex items-center gap-5">
        <p className="font-semibold">+1 650-547-9864</p>

        <div className="bg-black text-white p-3 rounded-full">
          <FaShoppingBasket />
        </div>
      </div>
    </div>
  );
}