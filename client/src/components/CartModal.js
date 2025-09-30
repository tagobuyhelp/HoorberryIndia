"use client";

import { useState, useEffect } from "react";

// Sample cart data - in real app, this would come from state management or API
const sampleCartItems = [
    {
        id: 1,
        name: "CeleBright Advanced Skin Brightening Cream",
        description: "Premium anti-aging formula with natural ingredients",
        image: "/cosmetic.jpg",
        price: 2499,
        quantity: 2,
        variant: "50ml",
        category: "cosmetics",
        subtotal: 4998,
    },
    {
        id: 2,
        name: "Luxury Silk Evening Dress",
        description: "Elegant black silk dress with gold embellishments",
        image: "/luxury_Clothing.jpg",
        price: 8999,
        quantity: 1,
        variant: "Size M",
        category: "clothing",
        subtotal: 8999,
    },
    {
        id: 3,
        name: "Premium Gold Serum",
        description: "24K gold infused anti-aging serum",
        image: "/product_image.jpg",
        price: 3999,
        quantity: 1,
        variant: "30ml",
        category: "cosmetics",
        subtotal: 3999,
    },
];

const CartModal = ({ isOpen, onClose }) => {
    const [cartItems, setCartItems] = useState(sampleCartItems);

    const subtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
    const discount = 500; // Sample discount
    const shipping = subtotal > 5000 ? 0 : 199; // Free shipping over ₹5000
    const tax = Math.round(subtotal * 0.18); // 18% GST
    const grandTotal = subtotal - discount + shipping + tax;

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeItem(id);
            return;
        }

        setCartItems((items) =>
            items.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: newQuantity,
                        subtotal: item.price * newQuantity,
                    }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed right-0 top-0 h-full w-full sm:w-96 md:w-[28rem] max-w-md bg-black border-l border-[#C5A880] z-[70] transform transition-transform duration-300 ease-in-out overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-black">
                    <div className="flex items-center space-x-2">
                        <div className="p-1.5 bg-[#C5A880] rounded-full">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                                <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z"/>
                            </svg>
                        </div>
                        <h2 className="text-[#C5A880] font-serif text-lg sm:text-xl font-semibold">
                            Shopping Cart
                        </h2>
                        {cartItems.length > 0 && (
                            <span className="bg-[#C5A880] text-black text-xs px-2 py-0.5 rounded-full font-medium">
                                {cartItems.length}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1.5 sm:p-2 text-gray-400 hover:text-[#C5A880] hover:bg-gray-800 rounded-full transition-all duration-200"
                        aria-label="Close cart"
                    >
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Cart Content */}
                <div className="flex flex-col h-full">
                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-3 sm:p-4">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-8 sm:py-12">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                                    Your cart is empty
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm mb-4">
                                    Add some luxury items to get started
                                </p>
                                <button 
                                    onClick={onClose}
                                    className="inline-flex items-center space-x-2 bg-[#C5A880] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#B8975C] transition-colors duration-200 text-sm"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M8 11v6h8v-6M8 11H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-2" />
                                    </svg>
                                    <span>Continue Shopping</span>
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-3 sm:space-y-4">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-gray-900 rounded-lg p-3 sm:p-4 border border-gray-800"
                                    >
                                        <div className="flex gap-2 sm:gap-3">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg bg-black flex-shrink-0"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-[#C5A880] font-serif text-xs sm:text-sm font-medium mb-1 line-clamp-2">
                                                    {item.name}
                                                </h3>
                                                <p className="text-gray-400 text-[10px] sm:text-xs mb-1 sm:mb-2 line-clamp-1">
                                                    {item.description}
                                                </p>
                                                <p className="text-[#C5A880] text-[10px] sm:text-xs mb-1 sm:mb-2">
                                                    {item.variant}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="text-white font-medium text-xs sm:text-sm">
                                                        ₹{item.price.toLocaleString()}
                                                    </div>
                                                    <div className="flex items-center gap-1 sm:gap-2">
                                                        {/* Quantity Selector */}
                                                        <div className="flex items-center border border-[#C5A880] rounded-lg overflow-hidden">
                                                            <button
                                                                onClick={() =>
                                                                    updateQuantity(item.id, item.quantity - 1)
                                                                }
                                                                className="px-2 sm:px-2.5 py-1 sm:py-1.5 text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-all duration-200 text-xs sm:text-sm flex items-center justify-center"
                                                            >
                                                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                                </svg>
                                                            </button>
                                                            <span className="px-2 sm:px-3 py-1 sm:py-1.5 text-white text-xs sm:text-sm min-w-[2rem] sm:min-w-[2.5rem] text-center bg-gray-800">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() =>
                                                                    updateQuantity(item.id, item.quantity + 1)
                                                                }
                                                                className="px-2 sm:px-2.5 py-1 sm:py-1.5 text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-all duration-200 text-xs sm:text-sm flex items-center justify-center"
                                                            >
                                                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between mt-1.5 sm:mt-2 pt-1.5 sm:pt-2 border-t border-gray-700">
                                                    <div className="flex items-center space-x-1">
                                                        <span className="text-gray-400 text-[10px] sm:text-xs">Subtotal:</span>
                                                        <div className="text-white font-semibold text-xs sm:text-sm">
                                                            ₹{item.subtotal.toLocaleString()}
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors duration-200 text-[10px] sm:text-xs group"
                                                    >
                                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                        <span>Remove</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Order Summary & Actions */}
                    {cartItems.length > 0 && (
                        <div className="border-t border-gray-800 p-3 sm:p-4 bg-gradient-to-b from-gray-900 to-black">
                            {/* Summary */}
                            <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                                <div className="flex justify-between items-center text-gray-300 text-xs sm:text-sm">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                                        </svg>
                                        <span>Subtotal</span>
                                    </div>
                                    <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-green-400 text-xs sm:text-sm">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                                        </svg>
                                        <span>Discount</span>
                                    </div>
                                    <span className="font-medium">-₹{discount.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-300 text-xs sm:text-sm">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                                            <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1H3zM9 5a2 2 0 012-2h7a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V5z"/>
                                        </svg>
                                        <span>Shipping</span>
                                    </div>
                                    <span className="font-medium">{shipping === 0 ? <span className="text-green-400">FREE</span> : `₹${shipping}`}</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-300 text-xs sm:text-sm">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd"/>
                                        </svg>
                                        <span>Tax (GST 18%)</span>
                                    </div>
                                    <span className="font-medium">₹{tax.toLocaleString()}</span>
                                </div>
                                <div className="border-t border-gray-700 pt-2 sm:pt-3 mt-3">
                                    <div className="flex justify-between items-center text-white font-bold text-sm sm:text-base">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A880]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                                            </svg>
                                            <span>Total</span>
                                        </div>
                                        <span className="text-[#C5A880]">₹{grandTotal.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-2.5">
                                <button
                                    onClick={() => {
                                        onClose();
                                        window.location.href = "/checkout";
                                    }}
                                    className="w-full bg-gradient-to-r from-[#C5A880] to-[#D4B896] text-black py-3 sm:py-3.5 rounded-lg font-bold hover:from-black hover:to-gray-900 hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] hover-lift hover-glow group"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                                    </svg>
                                    <span>Proceed to Checkout</span>
                                </button>
                                <button
                                    onClick={() => {
                                        onClose();
                                        window.location.href = "/cart";
                                    }}
                                    className="w-full border-2 border-[#C5A880] text-[#C5A880] py-3 sm:py-3.5 rounded-lg font-semibold hover:bg-[#C5A880] hover:text-black transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2 hover:shadow-lg transform hover:scale-[1.02] hover-lift group"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                    </svg>
                                    <span>View Full Cart</span>
                                </button>
                            </div>

                            {/* Trust Signals */}
                            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700">
                                <div className="flex justify-center gap-3 sm:gap-4 text-gray-400 text-[10px] sm:text-xs">
                                    <div className="flex items-center gap-1">
                                        <svg
                                            className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>Secure</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <svg
                                            className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707L16 7.586A1 1 0 0015.414 7H14z" />
                                        </svg>
                                        <span>Fast Delivery</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <svg
                                            className="w-3 h-3"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                                clipRule="evenodd"
                                            />
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

export default CartModal;
