import { useState } from 'react';

const Payment = ({ total, onClose, onPaymentComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    name: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (paymentMethod === 'card') {
      if (!paymentDetails.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!paymentDetails.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!paymentDetails.cvv) newErrors.cvv = 'CVV is required';
      if (!paymentDetails.name) newErrors.name = 'Name is required';
    } else if (paymentMethod === 'upi') {
      if (!paymentDetails.upiId) newErrors.upiId = 'UPI ID is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate payment processing
      setTimeout(() => {
        onPaymentComplete();
      }, 1500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Payment Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-800">
            Total Amount: <span className="text-indigo-600">${total.toFixed(2)}</span>
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex space-x-4">
            <button
              className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all duration-200 ${
                paymentMethod === 'card'
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                  : 'border-gray-200 hover:border-indigo-600'
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              Credit/Debit Card
            </button>
            <button
              className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all duration-200 ${
                paymentMethod === 'upi'
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                  : 'border-gray-200 hover:border-indigo-600'
              }`}
              onClick={() => setPaymentMethod('upi')}
            >
              UPI
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {paymentMethod === 'card' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={paymentDetails.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentDetails.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="1234 5678 9012 3456"
                  maxLength="16"
                />
                {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={paymentDetails.expiryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="MM/YY"
                    maxLength="5"
                  />
                  {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="password"
                    name="cvv"
                    value={paymentDetails.cvv}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="123"
                    maxLength="3"
                  />
                  {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                </div>
              </div>
            </>
          )}

          {paymentMethod === 'upi' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                UPI ID
              </label>
              <input
                type="text"
                name="upiId"
                value={paymentDetails.upiId}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="username@upi"
              />
              {errors.upiId && <p className="text-red-500 text-sm mt-1">{errors.upiId}</p>}
            </div>
          )}

          {paymentMethod && (
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold
              hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Pay ${total.toFixed(2)}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Payment;
