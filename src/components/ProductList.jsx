const products = [
  // Men's T-Shirts
  { name: "Classic White T-Shirt", price: 29.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", category: "men-tshirt" },
  { name: "Black Essential Tee", price: 24.99, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500", category: "men-tshirt" },
  { name: "Striped Polo Shirt", price: 34.99, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500", category: "men-tshirt" },
  { name: "Graphic Print T-Shirt", price: 27.99, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500", category: "men-tshirt" },

  // Men's Shirts
  { name: "Blue Oxford Shirt", price: 59.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500", category: "men-shirt" },
  { name: "White Dress Shirt", price: 54.99, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500", category: "men-shirt" },
  { name: "Denim Casual Shirt", price: 49.99, image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=500", category: "men-shirt" },
  { name: "Plaid Flannel Shirt", price: 44.99, image: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=500", category: "men-shirt" },

  // Men's Pants
  { name: "Classic Blue Jeans", price: 69.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500", category: "men-pants" },
  { name: "Black Slim Fit Pants", price: 64.99, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500", category: "men-pants" },
  { name: "Khaki Chinos", price: 54.99, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500", category: "men-pants" },
  { name: "Gray Dress Pants", price: 74.99, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500", category: "men-pants" },

  // Women's Dresses
  { name: "Floral Summer Dress", price: 79.99, image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500", category: "women-dress" },
  { name: "Little Black Dress", price: 89.99, image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500", category: "women-dress" },
  { name: "Maxi Dress", price: 94.99, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500", category: "women-dress" },
  { name: "Cocktail Dress", price: 99.99, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500", category: "women-dress" },

  // Shoes
  { name: "Men's Leather Sneakers", price: 89.99, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500", category: "shoes" },
  { name: "Women's High Heels", price: 79.99, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500", category: "shoes" },
  { name: "Running Shoes", price: 99.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", category: "shoes" },
  { name: "Casual Sneakers", price: 69.99, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500", category: "shoes" },

  // Accessories
  { name: "Classic Watch", price: 149.99, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", category: "accessories" },
  { name: "Leather Belt", price: 39.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", category: "accessories" },
  { name: "Sunglasses", price: 59.99, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", category: "accessories" },
  { name: "Silver Necklace", price: 79.99, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500", category: "accessories" },
];

const ProductList = ({ addToCart }) => {
  const categories = {
    "men-tshirt": "Men's T-Shirts",
    "men-shirt": "Men's Shirts",
    "men-pants": "Men's Pants",
    "women-dress": "Women's Dresses",
    "shoes": "Footwear",
    "accessories": "Accessories"
  };

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Fashion Collection
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Discover our extensive collection of premium fashion items
        </p>

        {Object.entries(categories).map(([categoryKey, categoryName]) => (
          <div key={categoryKey} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pl-4 border-l-4 border-indigo-600">
              {categoryName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products
                .filter(product => product.category === categoryKey)
                .map((product, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
                      </div>

                      <button
                        onClick={() => addToCart(product)}
                        className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium 
                        hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
