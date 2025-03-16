import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const Navbar = ({ cartCount, toggleCart }) => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold tracking-tight">
              Fashion<span className="text-pink-300">Store</span>
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative p-2 text-white/90 hover:text-white transition-colors group"
            >
              <ShoppingBagIcon className="h-7 w-7 transform group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
