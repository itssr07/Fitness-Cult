import React, { useState } from 'react';

function Cart() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex items-center bg-black justify-center py-8">
        <button onClick={() => setShow(!show)} className="py-2 px-10 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
          Continue To Checkout
        </button>
      </div>
      {show && (
        <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
          <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
            <div className="flex md:flex-row flex-col justify-end" id="cart">
              <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  <p className="text-sm pl-2 leading-none">Back</p>
                </div>
                <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Bag</p>
                {/* Product List */}
                {[1, 2, 3].map((item) => (
                  <div key={item} className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                    <div className="w-1/4">
                      <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller1.png" alt="Product" className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">Product Name</p>
                        <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                        </select>
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                      <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                      <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex items-center">
                          <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                          <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">$9,000</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                  <div>
                    <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                    <div className="flex items-center justify-between pt-16">
                      <p className="text-base leading-none text-gray-800">Subtotal</p>
                      <p className="text-base leading-none text-gray-800">$9,000</p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">Shipping</p>
                      <p className="text-base leading-none text-gray-800">$30</p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">Tax</p>
                      <p className="text-base leading-none text-gray-800">$35</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                      <p className="text-2xl leading-normal text-gray-800">Total</p>
                      <p className="text-2xl font-bold leading-normal text-right text-gray-800">$10,240</p>
                    </div>
                    <button onClick={() => setShow(!show)} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
