import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleLogin = (email, password) => {
    // Here you can add actual authentication logic
    // For now, we'll just simulate a successful login
    setIsLoggedIn(true);
  };

  const addToCart = (product) => {
    const newItem = { ...product, id: Date.now() };
    setCart([...cart, newItem]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar cartCount={cart.length} toggleCart={toggleCart} />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {showCart ? (
            <Cart items={cart} removeFromCart={removeFromCart} toggleCart={toggleCart} />
          ) : (
            <ProductList addToCart={addToCart} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
