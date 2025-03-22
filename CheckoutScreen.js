import React from "react";
import { FaApple } from "react-icons/fa";
import { BsCreditCard2Back } from "react-icons/bs";

const CheckoutScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[350px]">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          Checkout <BsCreditCard2Back />
        </h2>
        <p className="text-green-500 text-xl font-bold mt-2">₹ 1,527</p>
        <p className="text-gray-500 text-sm">Including GST (18%)</p>
        
        <div className="flex gap-2 mt-4">
          <button className="flex-1 py-2 bg-green-500 text-white rounded-lg flex items-center justify-center gap-2 font-semibold shadow">
            <BsCreditCard2Back /> Credit card
          </button>
          <button className="flex-1 py-2 bg-gray-200 rounded-lg flex items-center justify-center gap-2 font-semibold">
            <FaApple size={18} /> Apple Pay
          </button>
        </div>
        
        <div className="mt-4">
          <label className="text-sm text-gray-600">Card number</label>
          <input type="text" placeholder="5261 4141 0151 8472" className="w-full p-2 border rounded-lg mt-1" />
        </div>
        
        <div className="mt-2">
          <label className="text-sm text-gray-600">Cardholder name</label>
          <input type="text" placeholder="Christie Doe" className="w-full p-2 border rounded-lg mt-1" />
        </div>
        
        <div className="flex gap-2 mt-2">
          <div className="flex-1">
            <label className="text-sm text-gray-600">Expiry date</label>
            <input type="text" placeholder="06 / 2024" className="w-full p-2 border rounded-lg mt-1" />
          </div>
          <div className="flex-1">
            <label className="text-sm text-gray-600">CVV / CVC</label>
            <input type="text" placeholder="915" className="w-full p-2 border rounded-lg mt-1" />
          </div>
        </div>
        
        <p className="text-xs text-gray-500 mt-2">
          We will send you an order details to your email after the successful payment
        </p>
        
        <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold mt-4 shadow-md">
          Pay for the order
        </button>
      </div>
    </div>
  );
};

export default CheckoutScreen;
