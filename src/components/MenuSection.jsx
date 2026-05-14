const menuData = {
  beefBurgers: [
    { name: "Black Beast", price: "***/Rs" },
    { name: "Shroom Melt", price: "***/Rs" },
    { name: "Onion Bomb", price: "***/Rs" },
    { name: "The OG", price: "***/Rs" },
    { name: "Pink Panther", price: "***/Rs" },
    { name: "Mini Thief Gang", price: "***/Rs" },
  ],

  chickenBurgers: [
    { name: "The Great Robbery", price: "**/Rs" },
    { name: "Undercover Fillet", price: "**/Rs" },
  ],

  wraps: [
    { name: "Chicken Messy", price: "**/Rs" },
    { name: "Beef Messy", price: "**/Rs" },
  ],

  fries: [
    { name: "Plain Fries", price: "***/Rs" },
    { name: "Curly Fries", price: "***/Rs" },
    { name: "Chicken Messy Fries", price: "***/Rs" },
    { name: "Beef Messy Fries", price: "***/Rs" },
  ],

  drinks: [
    { name: "Coke", price: "***/Rs" },
    { name: "Sprite", price: "***/Rs" },
    { name: "Sparkling Water", price: "***/Rs" },
  ],
};

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="py-20 px-4 sm:px-6 md:px-10"
      style={{ fontFamily: "cursive" }}
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h3 className="text-[#254b95] uppercase tracking-[5px] text-sm font-bold mb-4">
          Highly Snatchable
        </h3>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-black text-[#254b95]"
          
        >
          Our Menu
        </h1>
      </div>

      {/* Beef Burgers */}
      <div className="mb-20">
        <h2
          className="text-3xl sm:text-3xl font-black text-[#254b95] mb-10 underline"
          
        >
          Beef Burgers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.beefBurgers.map((item, index) => (
            <div
              key={index}
              className="border-2 border-[#254b95] rounded-xl bg-[#fffaf0] p-8 hover:-translate-y-0.5 duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <h1
                  className="text-2xl font-bold text-[#254b95]"
                  
                >
                  {item.name}
                </h1>

                <span className="text-xl font-bold text-[#254b95]">
                  {item.price}
                </span>
              </div>

              <p className="text-[#254b95] mb-8" >
                Fresh grilled beef burger with signature sauces and premium ingredients.
              </p>

              <button className="w-full bg-[#254b95] hover:bg-[#1d3c79] duration-300 text-white py-3 rounded-full font-semibold line-through">
                ORDER NOW
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Chicken Burgers */}
      <div className="mb-20">
        <h2
          className="text-3xl sm:text-3xl font-black text-[#254b95] mb-10 underline"
          
        >
          Chicken Burgers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.chickenBurgers.map((item, index) => (
            <div
              key={index}
              className="border-2 border-[#254b95] rounded-xl bg-[#fffaf0] p-8"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
                <h1
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-[#254b95] break-words leading-tight"
                  
                >
                  {item.name}
                </h1>

                <span className="text-xl font-bold text-[#254b95]">
                  {item.price}
                </span>
              </div>

              <button className="w-full bg-[#254b95] text-white py-3 rounded-full line-through">
                ORDER NOW
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Wraps + Fries + Drinks */}
      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* Wraps */}
        <div className="border-2 border-[#254b95] rounded-xl p-8 bg-[#fffaf0]">
          <h2
            className="text-4xl font-black text-[#254b95] mb-8"
            
          >
            Wraps
          </h2>

          <div className="space-y-6">
            {menuData.wraps.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-[#254b95] text-xl"
              >
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fries */}
        <div className="border-2 border-[#254b95] rounded-xl p-8 bg-[#fffaf0]">
          <h2
            className="text-4xl font-black text-[#254b95] mb-8"
            
          >
            Fries
          </h2>

          <div className="space-y-6">
            {menuData.fries.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-[#254b95] text-xl"
              >
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Drinks */}
        <div className="border-2 border-[#254b95] rounded-xl p-8 bg-[#fffaf0]">
          <h2
            className="text-4xl font-black text-[#254b95] mb-8"
            
          >
            Drinks
          </h2>

          <div className="space-y-6">
            {menuData.drinks.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-[#254b95] text-xl"
              >
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}