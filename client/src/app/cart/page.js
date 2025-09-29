import { Metadata } from 'next';

export const metadata = {
  title: 'Your Shopping Cart - Hoorberry India | Luxury Beauty & Fashion',
  description: 'Review your selected luxury cosmetics and clothing items. Secure checkout with nationwide delivery and easy returns.',
  keywords: 'shopping cart, luxury cosmetics, premium clothing, secure checkout, Hoorberry India',
  openGraph: {
    title: 'Your Shopping Cart - Hoorberry India',
    description: 'Review your selected luxury items and proceed to secure checkout.',
    type: 'website',
  },
};

// Sample cart data - in real app, this would come from state management or API
const sampleCartItems = [
  {
    id: 1,
    name: 'CeleBright Advanced Skin Brightening Cream',
    description: 'Premium anti-aging formula with natural ingredients',
    image: '/cosmetic.jpg',
    price: 2499,
    quantity: 2,
    variant: '50ml',
    category: 'cosmetics',
    subtotal: 4998
  },
  {
    id: 2,
    name: 'Luxury Silk Evening Dress',
    description: 'Elegant black silk dress with gold embellishments',
    image: '/luxury_Clothing.jpg',
    price: 8999,
    quantity: 1,
    variant: 'Size M',
    category: 'clothing',
    subtotal: 8999
  },
  {
    id: 3,
    name: 'Premium Gold Serum',
    description: '24K gold infused anti-aging serum',
    image: '/product_image.jpg',
    price: 3999,
    quantity: 1,
    variant: '30ml',
    category: 'cosmetics',
    subtotal: 3999
  }
];

const CartPage = () => {
  const subtotal = sampleCartItems.reduce((sum, item) => sum + item.subtotal, 0);
  const discount = 500; // Sample discount
  const shipping = subtotal > 5000 ? 0 : 199; // Free shipping over ₹5000
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const grandTotal = subtotal - discount + shipping + tax;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Page Title */}
      <div className="container mx-auto px-3 xs:px-4 py-6 xs:py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-[#C5A880] mb-3 xs:mb-4 sm:mb-6 leading-tight">
            Your Shopping Cart
          </h1>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2 xs:px-0">
            Review your selected luxury items and proceed to secure checkout
          </p>
        </div>

        {/* Main Cart Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xs:gap-6 lg:gap-8 xl:gap-12">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <div className="space-y-3 xs:space-y-4 sm:space-y-6">
              {sampleCartItems.map((item) => (
                <div key={item.id} className="bg-gray-900 rounded-lg p-3 xs:p-4 sm:p-6 border border-gray-800 hover:border-[#C5A880] transition-colors duration-300">
                  {/* Mobile Layout - Stacked */}
                  <div className="block sm:hidden">
                    <div className="flex gap-3 xs:gap-4 mb-3 xs:mb-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 xs:w-20 h-16 xs:h-20 object-cover rounded-lg bg-black flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[#C5A880] font-serif text-base xs:text-lg mb-1 leading-tight truncate">{item.name}</h3>
                        <p className="text-gray-400 text-xs xs:text-sm mb-2 leading-relaxed line-clamp-2">{item.description}</p>
                        <p className="text-[#C5A880] text-xs xs:text-sm">{item.variant}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-white font-medium text-sm xs:text-base">₹{item.price.toLocaleString()}</div>
                      <div className="flex items-center gap-2 xs:gap-3">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-[#C5A880] rounded-lg">
                          <button className="px-2 xs:px-3 py-2 text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-colors duration-200 text-base xs:text-lg min-h-[40px] xs:min-h-[44px] min-w-[40px] xs:min-w-[44px] flex items-center justify-center">
                            −
                          </button>
                          <span className="px-3 xs:px-4 py-2 text-white min-w-[2.5rem] xs:min-w-[3rem] text-center text-sm xs:text-base">{item.quantity}</span>
                          <button className="px-2 xs:px-3 py-2 text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-colors duration-200 text-base xs:text-lg min-h-[40px] xs:min-h-[44px] min-w-[40px] xs:min-w-[44px] flex items-center justify-center">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 xs:pt-4 border-t border-gray-700">
                      <div className="text-white font-semibold text-sm xs:text-base">₹{item.subtotal.toLocaleString()}</div>
                      <button className="text-[#C5A880] hover:text-white transition-colors duration-200 text-xs xs:text-sm underline min-h-[44px] flex items-center">
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Desktop Layout - Two Column */}
                  <div className="hidden sm:block">
                    <div className="flex gap-6">
                      {/* Left Side - Product Info */}
                      <div className="flex gap-4 flex-1">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-24 h-24 lg:w-28 lg:h-28 object-cover rounded-lg bg-black"
                        />
                        <div className="flex-1">
                          <h3 className="text-[#C5A880] font-serif text-lg lg:text-xl mb-2">{item.name}</h3>
                          <p className="text-gray-400 text-sm lg:text-base mb-2 leading-relaxed">{item.description}</p>
                          <p className="text-[#C5A880] text-sm lg:text-base">{item.variant}</p>
                          <p className="text-white font-medium text-lg mt-2">₹{item.price.toLocaleString()}</p>
                        </div>
                      </div>

                      {/* Right Side - Quantity & Actions */}
                      <div className="flex flex-col items-end gap-4 min-w-[200px]">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-[#C5A880] rounded-lg">
                          <button className="px-4 py-2 text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-colors duration-200 text-lg min-h-[44px]">
                            −
                          </button>
                          <span className="px-6 py-2 text-white min-w-[4rem] text-center">{item.quantity}</span>
                          <button className="px-4 py-2 text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-colors duration-200 text-lg min-h-[44px]">
                            +
                          </button>
                        </div>

                        {/* Subtotal */}
                        <div className="text-white font-semibold text-xl">₹{item.subtotal.toLocaleString()}</div>

                        {/* Remove Button */}
                        <button className="text-[#C5A880] hover:text-white transition-colors duration-200 underline">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-3 xs:p-4 sm:p-6 border border-[#C5A880] lg:sticky lg:top-4">
              <h2 className="text-[#C5A880] font-serif text-lg xs:text-xl sm:text-2xl mb-4 xs:mb-6">Order Summary</h2>
              
              {/* Promo Code Input */}
              <div className="mb-4 xs:mb-6">
                <label className="block text-[#C5A880] font-serif text-xs xs:text-sm mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
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
              <div className="space-y-2 xs:space-y-3">
                <button className="w-full bg-[#C5A880] text-black py-3 xs:py-4 rounded-lg font-semibold text-base xs:text-lg hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-200 min-h-[48px] xs:min-h-[50px]">
                  Proceed to Checkout
                </button>
                <button className="w-full border border-[#C5A880] text-[#C5A880] py-3 xs:py-4 rounded-lg font-semibold hover:bg-[#C5A880] hover:text-black transition-all duration-200 min-h-[48px] xs:min-h-[50px] text-base xs:text-lg">
                  Continue Shopping
                </button>
              </div>

              {/* Trust Signals */}
              <div className="mt-4 xs:mt-6 pt-4 xs:pt-6 border-t border-gray-700">
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

        {/* Empty Cart State (hidden when items exist) */}
        {sampleCartItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🛒</div>
            <h3 className="text-2xl font-bold text-white mb-4">Your cart is empty</h3>
            <p className="text-gray-300 mb-8">Add some luxury items to get started</p>
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300">
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      {/* Bottom Sticky Buttons Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-yellow-600/30 p-4 z-50 lg:hidden">
        <div className="flex gap-3 max-w-md mx-auto">
          <button className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-600">
            Continue Shopping
          </button>
          <button className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-4 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300">
            Checkout
          </button>
        </div>
      </div>

      {/* Add bottom padding to prevent content overlap with sticky bar */}
      <div className="h-20 lg:hidden"></div>
    </div>
  );
};

export default CartPage;