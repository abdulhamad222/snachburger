const menuData = {
  beefBurgers: [
    { name: "Black Beast", singleprice: "690/Rs", doubleprice: "970/Rs", description:"Fresh grilled beef burger with signature sauces and premium ingredients." },
    { name: "Shroom Melt", singleprice: "740/Rs", doubleprice: "1020/Rs", description:"Fresh grilled beef burger with signature sauces and premium ingredients." },
    { name: "Onion Bomb", singleprice: "690/Rs", doubleprice: "970/Rs", description:"Fresh grilled beef burger with signature sauces and premium ingredients." },
    { name: "The OG", singleprice: "690/Rs", doubleprice: "970/Rs", description:"Fresh grilled beef burger with signature sauces and premium ingredients." },
    { name: "Pink Panther", singleprice: "690/Rs", doubleprice: "970/Rs", description:"Fresh grilled beef burger with signature sauces and premium ingredients." },
    { name: "Mini Thief Gang", singleprice: "990/Rs", description:"Fresh grilled beef burger with signature sauces and premium ingredients." },
  ],

  chickenBurgers: [
    { name: "Snach Mighty", price: "670/Rs", description:"Fresh grilled beef burger with signature sauces and premium ingredients." },
    { name: "Undercover Fillet", price: "580/Rs", description:"Fresh grilled beef burger with signature sauces and premium ingredients." },
  ],

  wraps: [
    { name: "Chicken Messy", price: "800/Rs" },
    { name: "Beef Messy", price: "1000/Rs" },
  ],

  fries: [
    { name: "Plain Fries", price: "200/Rs" },
    { name: "Curly Fries", price: "300/Rs" },
    { name: "Chicken Messy Fries", price: "720/Rs" },
    { name: "Beef Messy Fries", price: "840Rs" },
  ],

  sips: [
    { name: "Blue Lagoon", price: "249/Rs" },
    { name: "Passion Fruit", price: "249/Rs" },
    { name: "Peach", price: "249/Rs" },
    { name: "Strawberry", price: "249/Rs" },
    { name: "Kiwi", price: "249/Rs" },
  ],

  drinks: [
    { name: "Coke", price: "100/Rs" },
    { name: "Sprite", price: "100/Rs" },
    { name: "Mineral Water", price: "70/Rs" },
  ],
};

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="py-10 px-4 sm:px-6 md:px-10"
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
                  className="font-mono text-2xl font-bold text-[#254b95]"
                  
                >
                  {item.name}
                </h1>
                
              </div>

              <p className="text-[#254b95] md:text-xl mb-8" >
                {item.description}
              </p>
              <p className="text-xl font-bold text-center text-[#254b95]">
                <span className="text-sm">SINGLE PATTY</span> {item.singleprice}
              </p>
              {item.doubleprice && (
                <p className="text-xl font-bold text-center text-[#254b95]">
                  <span className="text-sm">DOUBLE PATTY</span> {item.doubleprice}
                </p>
              )}
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
                  className="font-mono text-2xl font-bold text-[#254b95]"
                  
                >
                  {item.name}
                </h1>

                
              </div>
              
              <p className="text-[#254b95] md:text-xl mb-8">
                {item.description}
              </p>
              <p className="text-xl font-bold text-center text-[#254b95]">
                {item.price}
              </p>
              <button className="w-full bg-[#254b95] text-white py-3 rounded-full line-through">
                ORDER NOW
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Wraps + Fries + Sips + Drinks */}
      <div className="grid lg:grid-cols-2 gap-10">
        
        {/* Wraps */}
        <div className="border-2 border-[#254b95] rounded-xl p-8 bg-[#fffaf0]">
          <h2
            className="font-mono text-3xl font-black text-[#254b95] mb-8"
            
          >
            Wraps
          </h2>

          <div className="space-y-6">
            {menuData.wraps.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-[#254b95] text-2xl"
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
            className="font-mono text-3xl font-black text-[#254b95] mb-8"
            
          >
            Fries
          </h2>

          <div className="space-y-6">
            {menuData.fries.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-[#254b95] text-2xl"
              >
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sips */}
        <div className="border-2 border-[#254b95] rounded-xl p-8 bg-[#fffaf0]">
          <h2
            className="font-mono text-3xl font-black text-[#254b95] mb-8"
            
          >
            Sips
          </h2>

          <div className="space-y-6">
            {menuData.sips.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-[#254b95] text-2xl"
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
            className="font-mono text-3xl font-black text-[#254b95] mb-8"
            
          >
            Drinks
          </h2>

          <div className="space-y-6">
            {menuData.drinks.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-[#254b95] text-2xl"
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