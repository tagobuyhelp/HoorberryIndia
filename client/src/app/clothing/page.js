import Link from 'next/link';

export default function ClothingPage() {
  // Sample clothing products data (replace with actual API call)
  const clothingProducts = [
    {
      id: 1,
      title: "Hoorberry Luxe Black Blazer",
      image: "/luxury_Clothing.jpg",
      shortDescription: "Elegant tailored blazer with gold accents",
      price: 8999,
      discountPrice: 6999,
      slug: "luxe-black-blazer"
    },
    {
      id: 2,
      title: "Designer Evening Dress",
      image: "/Luxury_Clothing2.jpg",
      shortDescription: "Sophisticated evening wear for special occasions",
      price: 12999,
      discountPrice: 9999,
      slug: "designer-evening-dress"
    },
    {
      id: 3,
      title: "Premium Silk Scarf",
      image: "/product_image.jpg",
      shortDescription: "Handcrafted silk accessory with luxury finish",
      price: 2999,
      discountPrice: 2299,
      slug: "premium-silk-scarf"
    },
    {
      id: 4,
      title: "Luxury Men's Shirt",
      image: "/luxury_Clothing.jpg",
      shortDescription: "Premium cotton shirt with modern cut",
      price: 4999,
      discountPrice: 3999,
      slug: "luxury-mens-shirt"
    },
    {
      id: 5,
      title: "Designer Women's Saree",
      image: "/Luxury_Clothing2.jpg",
      shortDescription: "Traditional elegance with contemporary design",
      price: 15999,
      discountPrice: 12999,
      slug: "designer-womens-saree"
    },
    {
      id: 6,
      title: "Leather Belt Collection",
      image: "/product_image.jpg",
      shortDescription: "Handcrafted leather accessories",
      price: 3999,
      discountPrice: 2999,
      slug: "leather-belt-collection"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#C5A880] mb-4 md:mb-6 tracking-wide">
            Hoorberry Clothing
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-white leading-relaxed max-w-3xl mx-auto px-2">
            Discover our exquisite collection of luxury clothing that combines timeless elegance with contemporary style. 
            From sophisticated formal wear to casual chic pieces, each garment is crafted with premium materials and 
            attention to detail that defines true luxury fashion.
          </p>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#C5A880] text-center mb-8 md:mb-12">
            Featured Products
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {clothingProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-black border border-[#C5A880] rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-[#D4B896]"
              >
                <div className="aspect-square bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <span className="text-xs md:text-sm text-gray-400">Product Image</span>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-sm md:text-lg font-semibold text-white mb-2">{product.title}</h3>
                  <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4 line-clamp-2">{product.shortDescription}</p>
                  
                  <div className="flex justify-between items-center mb-3 md:mb-4">
                    <span className="text-lg md:text-xl font-bold text-[#C5A880]">₹{product.discountPrice.toLocaleString()}</span>
                    <span className="text-xs md:text-sm text-gray-400 line-through">₹{product.price.toLocaleString()}</span>
                  </div>
                  
                  <button className="w-full bg-[#C5A880] text-black py-2 md:py-3 px-4 rounded-lg font-semibold hover:bg-[#D4B896] transition-colors duration-300 text-sm md:text-base">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#C5A880] text-center mb-8 md:mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-black p-6 md:p-8 rounded-lg border border-[#C5A880] text-center hover:shadow-xl transition-all duration-300">
              <div className="mb-4 md:mb-6 flex justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16 text-[#C5A880]">
                  <path d="M12 2L13.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Women's Wear</h3>
              <p className="text-xs md:text-sm text-gray-300 mb-4 md:mb-6">Elegant dresses, blouses, and formal wear</p>
              <button className="bg-[#C5A880] text-black px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#D4B896] transition-colors duration-300 text-sm md:text-base">
                Shop Now
              </button>
            </div>

            <div className="bg-black p-6 md:p-8 rounded-lg border border-[#C5A880] text-center hover:shadow-xl transition-all duration-300">
              <div className="mb-4 md:mb-6 flex justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16 text-[#C5A880]">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V6C15 7.1 14.1 8 13 8H11C9.9 8 9 7.1 9 6V5.5L3 7V9L9 10.5V22H11V16H13V22H15V10.5L21 9Z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Men's Wear</h3>
              <p className="text-xs md:text-sm text-gray-300 mb-4 md:mb-6">Sophisticated suits, shirts, and casual wear</p>
              <button className="bg-[#C5A880] text-black px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#D4B896] transition-colors duration-300 text-sm md:text-base">
                Shop Now
              </button>
            </div>

            <div className="bg-black p-6 md:p-8 rounded-lg border border-[#C5A880] text-center hover:shadow-xl transition-all duration-300">
              <div className="mb-4 md:mb-6 flex justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16 text-[#C5A880]">
                  <path d="M10 2L8.5 3.5L4 8H2V10H4L8.5 14.5L10 16L11.5 14.5L16 10H18V8H16L11.5 3.5L10 2ZM10 5.83L13.17 9H6.83L10 5.83ZM5 11V13H7V11H5ZM17 11V13H19V11H17ZM9 15V17H11V15H9ZM13 15V17H15V15H13Z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Accessories</h3>
              <p className="text-xs md:text-sm text-gray-300 mb-4 md:mb-6">Luxury bags, jewelry, and fashion accessories</p>
              <button className="bg-[#C5A880] text-black px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#D4B896] transition-colors duration-300 text-sm md:text-base">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Hoorberry Clothing Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#C5A880] text-center mb-8 md:mb-12">
            Why Choose Hoorberry Clothing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 md:p-6">
              <div className="mb-3 md:mb-4 flex justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12 text-[#C5A880]">
                  <path d="M12 2L13.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Premium Quality</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Crafted from the finest fabrics with attention to every detail
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="mb-3 md:mb-4 flex justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12 text-[#C5A880]">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Expert Craftsmanship</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Handcrafted by skilled artisans with years of experience
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="mb-3 md:mb-4 flex justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12 text-[#C5A880]">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Timeless Style</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Classic designs that never go out of fashion
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="mb-3 md:mb-4 flex justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12 text-[#C5A880]">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Global Shipping</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Worldwide delivery with secure packaging
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="mb-3 md:mb-4 flex justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12 text-[#C5A880]">
                  <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"/>
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Fast Delivery</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Quick and reliable shipping to your doorstep
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="mb-3 md:mb-4 flex justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12 text-[#C5A880]">
                  <path d="M12 2L13.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Luxury Experience</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Premium shopping experience from start to finish
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#C5A880] text-center mb-8 md:mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-black p-6 md:p-8 rounded-lg border border-[#C5A880]">
              <div className="flex items-center gap-1 mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6 text-[#C5A880]">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white mb-3 md:mb-4 italic leading-relaxed text-sm md:text-base">
                "I wore the Hoorberry black dress at an event and everyone asked where it was from! The quality and fit are exceptional."
              </p>
              <p className="text-[#C5A880] font-semibold text-sm md:text-base">— Ananya, Kolkata</p>
            </div>

            <div className="bg-black p-6 md:p-8 rounded-lg border border-[#C5A880]">
              <div className="flex items-center gap-1 mb-3 md:mb-4">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6 text-[#C5A880]">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white mb-3 md:mb-4 italic leading-relaxed text-sm md:text-base">
                "Perfect fit and luxurious feel. The blazer has become my go-to for important meetings. Worth every rupee."
              </p>
              <p className="text-[#C5A880] font-semibold text-sm md:text-base">— Rohan, Mumbai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#C5A880] mb-3 md:mb-4">
            Stay Updated
          </h2>
          <p className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 px-2">
            Subscribe to our newsletter for exclusive offers and new collection updates
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 md:py-3 rounded-lg bg-gray-800 border border-[#C5A880] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C5A880] text-sm md:text-base"
            />
            <button className="bg-[#C5A880] text-black px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#D4B896] transition-colors duration-300 text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}