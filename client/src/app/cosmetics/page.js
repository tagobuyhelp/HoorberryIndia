import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Luxury Cosmetics in India | Hoorberry Skincare & Beauty",
  description: "Shop Hoorberry luxury cosmetics — advanced skin brightening creams, premium skincare, and elegant beauty solutions for radiant skin.",
  keywords: "luxury cosmetics India, premium skincare India, skin brightening cream India, hyaluronic acid serum India, peptide skincare India",
};

export default function Cosmetics() {
  // Sample cosmetics products data
  const cosmeticsProducts = [
    {
      id: 1,
      name: "Vitamin C Brightening Serum",
      description: "Advanced formula with 20% Vitamin C for radiant, youthful skin.",
      price: 899,
      originalPrice: 1199,
      image: "/cosmetic.jpg",
      category: "Skincare",
      rating: 4.8,
      reviews: 324,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Anti-Aging Night Cream",
      description: "Intensive repair cream with retinol and peptides for overnight rejuvenation.",
      price: 1299,
      originalPrice: 1799,
      image: "/cosmetic.jpg",
      category: "Skincare",
      rating: 4.7,
      reviews: 289,
      badge: "New"
    },
    {
      id: 3,
      name: "Hyaluronic Acid Moisturizer",
      description: "Deep hydration formula with pure hyaluronic acid for plump, smooth skin.",
      price: 1099,
      originalPrice: 1499,
      image: "/cosmetic.jpg",
      category: "Skincare",
      rating: 4.9,
      reviews: 412,
      badge: "Premium"
    },
    {
      id: 4,
      name: "Luxury Matte Lipstick",
      description: "Long-lasting matte finish with rich, vibrant colors that stay all day.",
      price: 599,
      originalPrice: 799,
      image: "/cosmetic.jpg",
      category: "Makeup",
      rating: 4.6,
      reviews: 156,
      badge: "Trending"
    },
    {
      id: 5,
      name: "Premium Foundation",
      description: "Full coverage foundation with natural finish and 12-hour wear.",
      price: 1599,
      originalPrice: 2199,
      image: "/cosmetic.jpg",
      category: "Makeup",
      rating: 4.8,
      reviews: 203,
      badge: "Best Seller"
    },
    {
      id: 6,
      name: "Luxury Perfume",
      description: "Elegant fragrance with notes of jasmine, vanilla, and sandalwood.",
      price: 2499,
      originalPrice: 3299,
      image: "/cosmetic.jpg",
      category: "Fragrance",
      rating: 4.9,
      reviews: 89,
      badge: "Exclusive"
    }
  ];

  // Categories data
  const categories = [
    {
      id: 1,
      title: "Skincare",
      description: "Brightening creams, hydrating serums, daily essentials powered by science.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      link: "/cosmetics?category=skincare"
    },
    {
      id: 2,
      title: "Makeup",
      description: "Luxury lipsticks, foundations, and essentials for timeless looks.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      link: "/cosmetics?category=makeup"
    },
    {
      id: 3,
      title: "Fragrances",
      description: "Premium perfumes and mists that last all day with elegant notes.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2v11h3v9l4-12h-3l4-8z"/>
        </svg>
      ),
      link: "/cosmetics?category=fragrances"
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Clinically Proven Actives",
      description: "Powered by Glutathione, Kojic Acid, Niacinamide, and Hyaluronic Acid"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75S7 8 17 8z"/>
        </svg>
      ),
      title: "Gentle & Dermatologist-Tested",
      description: "Safe for all skin types with rigorous testing and quality assurance"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
        </svg>
      ),
      title: "Elegant Black & Gold Packaging",
      description: "Luxurious presentation that reflects the premium quality within"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      ),
      title: "Nationwide Delivery",
      description: "Fast & secure shipping across India with premium packaging"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Cruelty-Free & Authentic",
      description: "Ethically sourced ingredients with no animal testing, 100% authentic"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Title and Intro */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cosmetic.jpg"
            alt="Luxury Cosmetics Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-4 sm:mb-6 leading-tight">
              Luxury Cosmetics Collection in India
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              At <strong>Hoorberry India</strong>, cosmetics are not just skincare — they are an experience of elegance. Our range is powered by <strong>Glutathione, Kojic Acid, Niacinamide, and Hyaluronic Acid</strong> to ensure visible radiance and hydration. Whether you're looking for brightening creams, restorative serums, or premium fragrances, each Hoorberry product is crafted to deliver results with luxury aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Product Grid Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-3 sm:mb-4">
              Shop Our Best Cosmetics
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our premium collection of luxury cosmetics designed for radiant, healthy skin
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {cosmeticsProducts.map((product) => (
              <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-gold text-black text-xs font-semibold px-2 py-1 rounded">
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="mb-2">
                    <span className="text-gold text-xs font-medium uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-gold text-base sm:text-lg font-bold">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-400 text-xs sm:text-sm line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="text-gray-300 text-xs sm:text-sm">{product.rating}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gold text-black font-semibold py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg hover:bg-black hover:text-gold hover:border hover:border-gold transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-3 sm:mb-4">
              Explore by Category
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Find the perfect products for your beauty routine
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {categories.map((category) => (
              <Link key={category.id} href={category.link}>
                <div className="bg-black border-2 border-gold rounded-lg p-4 sm:p-6 md:p-8 text-center hover:bg-gold hover:text-black transition-all duration-300 group cursor-pointer">
                  <div className="text-gold group-hover:text-black mb-4 sm:mb-6 flex justify-center">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="font-playfair text-lg sm:text-xl md:text-2xl font-bold text-gold group-hover:text-black mb-3 sm:mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-black mb-4 sm:mb-6 text-sm sm:text-base">
                    {category.description}
                  </p>
                  <span className="inline-block bg-gold text-black px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base group-hover:bg-black group-hover:text-gold group-hover:border group-hover:border-gold transition-all duration-300">
                    View {category.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Hoorberry Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-3 sm:mb-4">
              Why Choose Hoorberry Cosmetics?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              Experience the perfect blend of tradition and innovation in every product
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-4 sm:p-6">
                <div className="text-gold mb-4 sm:mb-6 flex justify-center">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="font-playfair text-base sm:text-lg md:text-xl font-semibold text-gold mb-3 sm:mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}