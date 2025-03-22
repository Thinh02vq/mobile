import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const SuccessScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[350px] text-center">
        <button className="absolute top-4 left-4 text-gray-500">
          <FaArrowLeft size={20} />
        </button>
        
        <div className="flex justify-center mb-4">
          <img src="/success-icon.png" alt="Success" className="w-32" />
        </div>
        
        <h2 className="text-lg font-semibold">Payment Success, Yayy!</h2>
        <p className="text-gray-500 text-sm mt-2">
          We will send order details and invoice to your contact no. and registered email.
        </p>
        
        <button className="text-blue-600 font-semibold mt-4 flex items-center justify-center gap-1">
          Check Details →
        </button>
        
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-4 shadow-md">
          Download Invoice
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
