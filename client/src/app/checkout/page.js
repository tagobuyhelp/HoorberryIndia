'use client';

import { useState } from 'react';

// Sample order data (would come from cart/context in real app)
const sampleOrderItems = [
  {
    id: 1,
    name: "CeleBright Advanced Skin Brightening Cream",
    variant: "50ml",
    price: 2499,
    quantity: 1,
    image: "/cosmetic.jpg"
  },
  {
    id: 2,
    name: "Luxury Silk Evening Dress",
    variant: "Size M, Black",
    price: 8999,
    quantity: 1,
    image: "/luxury_Clothing.jpg"
  }
];

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    // Customer Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Shipping Address
    shippingAddress1: '',
    shippingAddress2: '',
    shippingCity: '',
    shippingState: '',
    shippingPincode: '',
    shippingCountry: 'India',
    
    // Billing Address
    sameAsShipping: true,
    billingAddress1: '',
    billingAddress2: '',
    billingCity: '',
    billingState: '',
    billingPincode: '',
    billingCountry: 'India',
    
    // Payment
    paymentMethod: 'razorpay'
  });

  const [promoCode, setPromoCode] = useState('');

  // Calculate totals
  const subtotal = sampleOrderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 500; // Sample discount
  const shipping = subtotal > 2000 ? 0 : 150;
  const tax = Math.round(subtotal * 0.18);
  const grandTotal = subtotal - discount + shipping + tax;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission
    console.log('Order submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 py-6 xs:py-8 sm:py-12">
        
        {/* Page Title */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-serif text-[#C5A880] mb-3 xs:mb-4">
            Checkout
          </h1>
          <p className="text-sm xs:text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Complete your order with our secure checkout process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xs:gap-8 lg:gap-12">
          
          {/* Main Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 xs:space-y-8">
              
              {/* Customer Information */}
              <div className="bg-gray-900 rounded-lg p-4 xs:p-6 border border-[#C5A880]">
                <h2 className="text-lg xs:text-xl sm:text-2xl font-serif text-[#C5A880] mb-4 xs:mb-6">
                  Customer Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6">
                  <div>
                    <label className="block text-[#C5A880] font-serif text-sm xs:text-base mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#C5A880] font-serif text-sm xs:text-base mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base"
                      placeholder="Enter last name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#C5A880] font-serif text-sm xs:text-base mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="block text-[#C5A880] font-serif text-sm xs:text-base mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-gray-900 rounded-lg p-4 xs:p-6 border border-[#C5A880]">
                <h2 className="text-lg xs:text-xl sm:text-2xl font-serif text-[#C5A880] mb-4 xs:mb-6">
                  Shipping Address
                </h2>
                <div className="space-y-4 xs:space-y-6">
                  <div>
                    <label className="block text-[#C5A880] font-serif text-sm xs:text-base mb-2">
                      Address Line 1 *
                    </label>
                    <input
                      type="text"
                      name="shippingAddress1"
                      value={formData.shippingAddress1}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base"
                      placeholder="Street address, P.O. Box, company name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#C5A880] font-serif text-sm xs:text-base mb-2">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      name="shippingAddress2"
                      value={formData.shippingAddress2}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base"
                      placeholder="Apartment, suite, unit, building, floor, etc."
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xs:gap-6">
                    <div>
                      <label className="block text-[#C5A880] font-serif text-sm xs:text-base mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="shippingCity"
                        value={formData.shippingCity}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-[#C5A880] font-serif text-sm xs:text-base mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        name="shippingState"
                        value={formData.shippingState}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base"
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <label className="block text-[#C5A880] font-serif text-sm xs:text-base mb-2">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="shippingPincode"
                        value={formData.shippingPincode}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base"
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div className="bg-gray-900 rounded-lg p-4 xs:p-6 border border-[#C5A880]">
                <h2 className="text-lg xs:text-xl sm:text-2xl font-serif text-[#C5A880] mb-4 xs:mb-6">
                  Billing Address
                </h2>
                <div className="mb-4 xs:mb-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="sameAsShipping"
                      checked={formData.sameAsShipping}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#C5A880] bg-black border-[#C5A880] rounded focus:ring-[#C5A880] focus:ring-2"
                    />
                    <span className="text-white text-sm xs:text-base">Same as shipping address</span>
                  </label>
                </div>
                
                {!formData.sameAsShipping && (
                  <div className="space-y-4 xs:space-y-6">
                    <div>
                      <label className="block text-[#C5A880] font-serif text-sm xs:text-base mb-2">
                        Address Line 1 *
                      </label>
                      <input
                        type="text"
                        name="billingAddress1"
                        value={formData.billingAddress1}
                        onChange={handleInputChange}
                        required={!formData.sameAsShipping}
                        className="w-full bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base"
                        placeholder="Street address, P.O. Box, company name"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xs:gap-6">
                      <div>
                        <label className="block text-[#C5A880] font-serif text-sm xs:text-base mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="billingCity"
                          value={formData.billingCity}
                          onChange={handleInputChange}
                          required={!formData.sameAsShipping}
                          className="w-full bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label className="block text-[#C5A880] font-serif text-sm xs:text-base mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          name="billingState"
                          value={formData.billingState}
                          onChange={handleInputChange}
                          required={!formData.sameAsShipping}
                          className="w-full bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base"
                          placeholder="State"
                        />
                      </div>
                      <div>
                        <label className="block text-[#C5A880] font-serif text-sm xs:text-base mb-2">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          name="billingPincode"
                          value={formData.billingPincode}
                          onChange={handleInputChange}
                          required={!formData.sameAsShipping}
                          className="w-full bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base"
                          placeholder="Pincode"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Options */}
              <div className="bg-gray-900 rounded-lg p-4 xs:p-6 border border-[#C5A880]">
                <h2 className="text-lg xs:text-xl sm:text-2xl font-serif text-[#C5A880] mb-4 xs:mb-6">
                  Payment Method
                </h2>
                <div className="space-y-3 xs:space-y-4">
                  <label className="flex items-center gap-3 p-3 xs:p-4 border border-gray-700 rounded-lg cursor-pointer hover:border-[#C5A880] transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="razorpay"
                      checked={formData.paymentMethod === 'razorpay'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#C5A880] bg-black border-[#C5A880] focus:ring-[#C5A880] focus:ring-2"
                    />
                    <div>
                      <div className="text-white font-medium text-sm xs:text-base">Credit/Debit Card, UPI, Net Banking</div>
                      <div className="text-gray-400 text-xs xs:text-sm">Secure payment via Razorpay</div>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 xs:p-4 border border-gray-700 rounded-lg cursor-pointer hover:border-[#C5A880] transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#C5A880] bg-black border-[#C5A880] focus:ring-[#C5A880] focus:ring-2"
                    />
                    <div>
                      <div className="text-white font-medium text-sm xs:text-base">Cash on Delivery</div>
                      <div className="text-gray-400 text-xs xs:text-sm">Pay when you receive your order</div>
                    </div>
                  </label>
                </div>
              </div>

            </form>
          </div>

          {/* Order Summary - Sticky on Desktop */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-4 xs:p-6 border border-[#C5A880] lg:sticky lg:top-4">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-serif text-[#C5A880] mb-4 xs:mb-6">
                Order Summary
              </h2>
              
              {/* Order Items */}
              <div className="space-y-3 xs:space-y-4 mb-4 xs:mb-6">
                {sampleOrderItems.map((item) => (
                  <div key={item.id} className="flex gap-3 xs:gap-4 p-2 xs:p-3 bg-black rounded-lg border border-gray-700">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 xs:w-16 h-12 xs:h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium text-xs xs:text-sm truncate">{item.name}</h3>
                      <p className="text-gray-400 text-xs">{item.variant}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-gray-400 text-xs">Qty: {item.quantity}</span>
                        <span className="text-[#C5A880] font-medium text-xs xs:text-sm">₹{item.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="mb-4 xs:mb-6">
                <label className="block text-[#C5A880] font-serif text-xs xs:text-sm mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 bg-black border border-[#C5A880] rounded-lg px-3 xs:px-4 py-2 xs:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent text-sm xs:text-base min-h-[40px] xs:min-h-[44px]"
                  />
                  <button className="bg-[#C5A880] text-black px-3 xs:px-4 py-2 xs:py-3 rounded-lg hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-200 font-medium min-h-[40px] xs:min-h-[44px] text-xs xs:text-sm whitespace-nowrap">
                    Apply
                  </button>
                </div>
              </div>

              {/* Summary Details */}
              <div className="space-y-2 xs:space-y-3 mb-4 xs:mb-6">
                <div className="flex justify-between text-gray-300 text-sm xs:text-base">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-green-400 text-sm xs:text-base">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300 text-sm xs:text-base">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-gray-300 text-sm xs:text-base">
                  <span>Tax (GST 18%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-700 pt-2 xs:pt-3">
                  <div className="flex justify-between text-white font-semibold text-base xs:text-lg">
                    <span>Grand Total</span>
                    <span>₹{grandTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Estimated Delivery */}
              <div className="mb-4 xs:mb-6 p-2 xs:p-3 bg-black rounded-lg border border-gray-700">
                <p className="text-[#C5A880] text-xs xs:text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707L16 7.586A1 1 0 0015.414 7H14z"/>
                  </svg>
                  Estimated Delivery
                </p>
                <p className="text-gray-300 text-xs xs:text-sm">3–5 Business Days</p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2 xs:space-y-3 mb-4 xs:mb-6">
                <button 
                  type="submit"
                  form="checkout-form"
                  className="w-full bg-[#C5A880] text-black py-3 xs:py-4 rounded-lg font-semibold text-base xs:text-lg hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-200 min-h-[48px] xs:min-h-[50px]"
                >
                  Place Order
                </button>
                <button 
                  type="button"
                  onClick={() => window.history.back()}
                  className="w-full border border-[#C5A880] text-[#C5A880] py-3 xs:py-4 rounded-lg font-semibold hover:bg-[#C5A880] hover:text-black transition-all duration-200 min-h-[48px] xs:min-h-[50px] text-base xs:text-lg"
                >
                  Back to Cart
                </button>
              </div>

              {/* Trust Signals */}
              <div className="pt-4 xs:pt-6 border-t border-gray-700">
                <div className="grid grid-cols-1 gap-2 xs:gap-3 text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-300 text-xs xs:text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-300 text-xs xs:text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707L16 7.586A1 1 0 0015.414 7H14z"/>
                    </svg>
                    <span>Nationwide Delivery</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-300 text-xs xs:text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                    </svg>
                    <span>Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sticky Buttons Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-[#C5A880]/30 p-4 z-50 lg:hidden">
        <div className="flex gap-3 max-w-md mx-auto">
          <button 
            type="button"
            onClick={() => window.history.back()}
            className="flex-1 border border-[#C5A880] text-[#C5A880] px-4 py-3 rounded-lg font-semibold hover:bg-[#C5A880] hover:text-black transition-all duration-200"
          >
            Back to Cart
          </button>
          <button 
            type="submit"
            form="checkout-form"
            className="flex-1 bg-[#C5A880] text-black px-4 py-3 rounded-lg font-semibold hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-200"
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Add bottom padding to prevent content overlap with sticky bar */}
      <div className="h-20 lg:hidden"></div>
    </div>
  );
}