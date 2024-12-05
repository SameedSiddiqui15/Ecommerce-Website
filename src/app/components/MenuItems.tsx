import { FaShoppingCart } from "react-icons/fa";

const MenuItems = () => {
  const shoes = [
    {
      image: "https://m.media-amazon.com/images/I/71XwJHQn9KL._AC_SY1000_.jpg",
      category: "Sneakers",
      name: "Air Max Runner",
      price: 29,
      originalPrice: 49,
    },
    {
      image: "https://m.media-amazon.com/images/I/81RpIWXSO8L._AC_SY1000_.jpg",
      category: "Formal",
      name: "Classic Leather",
      price: 34,
      originalPrice: 39,
    },
    {
      image: "https://m.media-amazon.com/images/I/71DnHOscZWL._AC_SY1000_.jpg",
      category: "Casual",
      name: "Everyday Comfort",
      price: 24,
      originalPrice: 29,
    },
    {
      image: "https://m.media-amazon.com/images/I/71y+P7WJK1L._AC_SY1000_.jpg",
      category: "Sports",
      name: "Pro Speed",
      price: 49,
      originalPrice: 59,
    },
    {
      image: "https://m.media-amazon.com/images/I/71SFPQqJUML._AC_SY1000_.jpg",
      category: "Boots",
      name: "Winter Warrior",
      price: 44,
      originalPrice: 49,
    },
    {
      image: "https://m.media-amazon.com/images/I/71QEP05krXL._AC_SY1000_.jpg",
      category: "Loafers",
      name: "Urban Classic",
      price: 39,
      originalPrice: 44,
    },
  ];

  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          background: `url("https://i.pinimg.com/736x/f1/52/8f/f1528f06b755658edab9a6d61a528293.jpg")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: 0.07,
        }}
      />
      <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">Most Requested Shoes</h1>
      <h1 className="text-3xl text-white z-10 relative">Explore Our Exclusive Collection</h1>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-6 gap-x-14 mt-10 mb-5"
      >
        {shoes.map((shoe, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="/" className="">
              <img
                src={shoe.image}
                alt={`Product ${index + 1}`}
                className="w-72 h-80 object-contain rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-slate-500 mr-3 uppercase text-xs">{shoe.category}</span>
                <p className="text-lg font-bold text-red-500 truncate block capitalize">{shoe.name}</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">${shoe.price}</p>
                  <del>
                    <br />
                    <p className="text-md font-semibold text-blue-800 cursor-auto ml-2">
                      ${shoe.originalPrice}
                    </p>
                  </del>
                  <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MenuItems;
