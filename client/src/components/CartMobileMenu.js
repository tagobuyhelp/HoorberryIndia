"use client";

import { useState, useEffect } from 'react';

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

const CartMobileMenu = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState(sampleCartItems);
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  const discount = 500; // Sample discount
  const shipping = subtotal > 5000 ? 0 : 199; // Free shipping over ₹5000
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const grandTotal = subtotal - discount + shipping + tax;

  // Close modal on escape key and handle body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: newQuantity, subtotal: item.price * newQuantity }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-[60] transition-opacity duration-300 lg:hidden"
        onClick={onClose}
      />
      
      {/* Mobile Menu */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-black border-l border-[#C5A880] z-[70] transform transition-transform duration-300 ease-in-out overflow-hidden lg:hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
          <h2 className="text-[#C5A880] font-serif text-lg font-semibold">Your Cart</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-[#C5A880] transition-colors duration-200 -mr-2"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="text-5xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold text-white mb-3">Your cart is empty</h3>
                <p className="text-gray-400 text-sm mb-6">Add some luxury items to get started</p>
                <button 
                  onClick={onClose}
                  className="bg-[#C5A880] text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-200"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="p-3 space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-gray-900 rounded-lg p-3 border border-gray-800">
                    <div className="flex gap-3 mb-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg bg-black flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[#C5A880] font-serif text-sm font-medium mb-1 line-clamp-2 leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-gray-400 text-xs mb-1 line-clamp-1">{item.description}</p>
                        <p className="text-[#C5A880] text-xs">{item.variant}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-white font-medium text-sm">₹{item.price.toLocaleString()}</div>
                      <div className="flex items-center gap-2">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-[#C5A880] rounded">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-colors duration-200 text-sm min-w-[32px] min-h-[32px] flex items-center justify-center"
                          >
                            −
                          </button>
                          <span className="px-3 py-1 text-white text-sm min-w-[2.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-colors duration-200 text-sm min-w-[32px] min-h-[32px] flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                      <div className="text-white font-semibold text-sm">₹{item.subtotal.toLocaleString()}</div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-[#C5A880] hover:text-white transition-colors duration-200 text-xs underline min-h-[32px] flex items-center"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary & Actions */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-800 bg-gray-900">
              {/* Summary */}
              <div className="p-4 space-y-2">
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-green-400 text-sm">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Tax (GST 18%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-700 pt-2">
                  <div className="flex justify-between text-white font-semibold text-base">
                    <span>Total</span>
                    <span>₹{grandTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 space-y-3">
                <button 
                  onClick={() => {
                    onClose();
                    window.location.href = '/checkout';
                  }}
                  className="w-full bg-[#C5A880] text-black py-3 rounded-lg font-semibold hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-200 min-h-[48px]"
                >
                  Proceed to Checkout
                </button>
                <button 
                  onClick={() => {
                    onClose();
                    window.location.href = '/cart';
                  }}
                  className="w-full border border-[#C5A880] text-[#C5A880] py-3 rounded-lg font-semibold hover:bg-[#C5A880] hover:text-black transition-all duration-200 min-h-[48px]"
                >
                  View Full Cart
                </button>
                <button 
                  onClick={onClose}
                  className="w-full text-gray-400 py-2 text-sm hover:text-[#C5A880] transition-colors duration-200"
                >
                  Continue Shopping
                </button>
              </div>

              {/* Trust Signals */}
              <div className="px-4 pb-4">
                <div className="flex justify-center gap-4 text-gray-400 text-xs pt-3 border-t border-gray-700">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707L16 7.586A1 1 0 0015.414 7H14z"/>
                    </svg>
                    <span>Fast Delivery</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                    </svg>
                    <span>Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartMobileMenu;