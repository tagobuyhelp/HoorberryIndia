'use client';

import { useState } from 'react';

export default function ProductInteractive({ product, sampleReviews, recommendedProducts }) {
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-[#C5A880]' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 xl:gap-16">
      {/* Product Image */}
      <div className="relative order-1 lg:order-1">
        <div 
          className={`relative overflow-hidden rounded-lg border-2 border-[#C5A880] shadow-2xl shadow-[#C5A880]/20 transition-all duration-300 ${isImageZoomed ? 'scale-105' : ''}`}
          onMouseEnter={() => setIsImageZoomed(true)}
          onMouseLeave={() => setIsImageZoomed(false)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
          {product.discount && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              {product.discount}% OFF
            </div>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="order-2 lg:order-2 space-y-4 xs:space-y-6">
        <div>
          <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 xs:mb-4 leading-tight">
            {product.name}
          </h1>
          <p className="text-gray-300 text-base xs:text-lg mb-4 xs:mb-6 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
          <span className="text-3xl xs:text-4xl md:text-5xl font-bold text-[#C5A880]">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-xl xs:text-2xl text-gray-500 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2 mb-4 xs:mb-6">
          <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className={`text-sm xs:text-base font-medium ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
            {product.inStock ? `In Stock (${product.stockCount} available)` : 'Out of Stock'}
          </span>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-6 xs:mb-8">
          <span className="text-white font-medium text-base xs:text-lg">Quantity:</span>
          <div className="flex items-center border border-[#C5A880] rounded-lg overflow-hidden">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 xs:px-4 py-2 bg-[#C5A880] text-black font-bold hover:bg-[#B8975A] transition-colors"
            >
              -
            </button>
            <span className="px-4 xs:px-6 py-2 bg-black text-white font-medium min-w-[60px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 xs:px-4 py-2 bg-[#C5A880] text-black font-bold hover:bg-[#B8975A] transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 mb-6 xs:mb-8">
          <button className="flex-1 bg-gradient-to-r from-[#C5A880] to-[#B8975A] text-black font-bold py-3 xs:py-4 px-6 xs:px-8 rounded-lg hover:from-[#B8975A] hover:to-[#A68B4A] transition-all duration-300 transform hover:scale-105 shadow-lg text-base xs:text-lg">
            Add to Cart
          </button>
          <button className="flex-1 bg-transparent border-2 border-[#C5A880] text-[#C5A880] font-bold py-3 xs:py-4 px-6 xs:px-8 rounded-lg hover:bg-[#C5A880] hover:text-black transition-all duration-300 text-base xs:text-lg">
            Buy Now
          </button>
        </div>

        {/* Shipping Info */}
        <div className="bg-gray-900 rounded-lg p-4 xs:p-6 space-y-2 xs:space-y-3">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#C5A880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="text-green-400 font-medium text-sm xs:text-base">{product.shippingInfo.freeShipping}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#C5A880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-300 text-sm xs:text-base">{product.shippingInfo.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#C5A880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-300 text-sm xs:text-base">{product.shippingInfo.returns}</span>
          </div>
        </div>
      </div>
    </div>
  );
}