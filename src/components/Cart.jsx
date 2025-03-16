import { useState } from 'react';
import Payment from './Payment';

const Cart = ({ items, removeFromCart, toggleCart }) => {
  const [showPayment, setShowPayment] = useState(false);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handlePaymentComplete = () => {
    alert('Payment successful! Thank you for shopping with us.');
    toggleCart();
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Shopping Cart
          </h2>
          <button
            onClick={toggleCart}
            className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
          >
            Continue Shopping
          </button>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500 mb-4">Your cart is empty</p>
            <button
              onClick={toggleCart}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium 
              hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                      <p className="text-gray-500 text-sm uppercase tracking-wide">{item.category}</p>
                      <p className="text-indigo-600 font-bold mt-1">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium px-4 py-2 rounded-lg 
                    hover:bg-red-50 transition-all duration-200"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center text-2xl font-bold mb-6">
                <span className="text-gray-900">Total:</span>
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  ${total.toFixed(2)}
                </span>
              </div>
              <button
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg
                hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setShowPayment(true)}
              >
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>

      {showPayment && (
        <Payment
          total={total}
          onClose={() => setShowPayment(false)}
          onPaymentComplete={handlePaymentComplete}
        />
      )}
    </>
  );
};

export default Cart;
