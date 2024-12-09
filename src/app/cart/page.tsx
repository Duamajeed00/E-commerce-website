
import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-5xl mx-auto">
        {/* Cart Header */}
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section: Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="/pic13.png"
                    alt="Gradient Graphic T-shirt"
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-medium">Gradient Graphic T-shirt</h2>
                    <p className="text-sm text-gray-500">Size: Large</p>
                    <p className="text-sm text-gray-500">Color: White</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <p className="text-lg font-bold">$145</p>
                  <div className="flex items-center border rounded-md">
                    <button className="p-2 text-gray-600 hover:text-black">-</button>
                    <span className="px-4 border-l border-r">1</span>
                    <button className="p-2 text-gray-600 hover:text-black">+</button>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 8a1 1 0 00-1 1v4a1 1 0 102 0V9a1 1 0 00-1-1zM5 9a1 1 0 011-1h8a1 1 0 011 1v1H5V9z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="/Frame 34.png"
                    alt="Checkered Shirt"
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-medium">Checkered Shirt</h2>
                    <p className="text-sm text-gray-500">Size: Medium</p>
                    <p className="text-sm text-gray-500">Color: Red</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <p className="text-lg font-bold">$180</p>
                  <div className="flex items-center border rounded-md">
                    <button className="p-2 text-gray-600 hover:text-black">-</button>
                    <span className="px-4 border-l border-r">1</span>
                    <button className="p-2 text-gray-600 hover:text-black">+</button>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 8a1 1 0 00-1 1v4a1 1 0 102 0V9a1 1 0 00-1-1zM5 9a1 1 0 011-1h8a1 1 0 011 1v1H5V9z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="/Frame 33.png"
                    alt="Skinny Fit Jeans"
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-medium">Skinny Fit Jeans</h2>
                    <p className="text-sm text-gray-500">Size: Large</p>
                    <p className="text-sm text-gray-500">Color: Blue</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <p className="text-lg font-bold">$240</p>
                  <div className="flex items-center border rounded-md">
                    <button className="p-2 text-gray-600 hover:text-black">-</button>
                    <span className="px-4 border-l border-r">1</span>
                    <button className="p-2 text-gray-600 hover:text-black">+</button>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 8a1 1 0 00-1 1v4a1 1 0 102 0V9a1 1 0 00-1-1zM5 9a1 1 0 011-1h8a1 1 0 011 1v1H5V9z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$565</span>
            </div>
            <div className="flex justify-between mb-2 text-red-600">
              <span>Discount (-20%)</span>
              <span>-$113</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Fee</span>
              <span>$15</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>$467</span>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full px-4 py-2 border rounded-lg mb-4"
              />
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                Apply
              </button>
              <button className="w-full bg-black text-white py-2 rounded-lg mt-4 hover:bg-gray-800">
                Go to Checkout →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;