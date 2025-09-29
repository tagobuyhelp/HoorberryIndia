import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Hero carousel slides with luxury theme
  const heroSlides = [
    {
      type: 'hero',
      title: 'Redefining Luxury in Beauty & Fashion',
      description: 'Premium skincare. Designer clothing. Crafted with elegance, powered by science.',
      backgroundImage: '/cosmetic.jpg',
      primaryText: 'Shop Cosmetics',
      primaryLink: '/cosmetics',
      secondaryText: 'Explore Clothing',
      secondaryLink: '/clothing'
    }
  ];

  // Enhanced product data for best sellers
  const bestSellers = [
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
      name: "Luxury Silk Evening Dress",
      description: "Handcrafted silk dress with intricate embroidery.",
      price: 4999,
      originalPrice: 6999,
      image: "/luxury_Clothing.jpg",
      category: "Fashion",
      rating: 4.9,
      reviews: 156,
      badge: "Premium"
    },
    {
      id: 3,
      name: "Anti-Aging Night Cream",
      description: "Intensive repair cream with retinol and peptides.",
      price: 1299,
      originalPrice: 1799,
      image: "/cosmetic.jpg",
      category: "Skincare",
      rating: 4.7,
      reviews: 289,
      badge: "New"
    }
  ];

  // Collection cards data
  const collections = [
    {
      id: 1,
      title: "Cosmetics",
      description: "Premium skincare and beauty products crafted with the finest ingredients.",
      image: "/cosmetic.jpg",
      link: "/cosmetics"
    },
    {
      id: 2,
      title: "Clothing",
      description: "Designer fashion pieces that embody elegance and sophistication.",
      image: "/luxury_Clothing.jpg",
      link: "/clothing"
    },
    {
      id: 3,
      title: "New Arrivals",
      description: "Discover our latest collection of luxury beauty and fashion items.",
      image: "/Luxury_Clothing2.jpg",
      link: "/new-arrivals"
    }
  ];

  // Why Hoorberry benefits
  const benefits = [
    {
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Premium Quality",
      description: "Only the finest ingredients and materials"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75S7 8 17 8z"/>
        </svg>
      ),
      title: "Natural & Organic",
      description: "Sustainably sourced, eco-friendly products"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      ),
      title: "Free Shipping",
      description: "Complimentary delivery on orders over ₹999"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 2l2 2h8l2-2 2 2-2 2v1.5l-2 2-2-2V7H8v1.5l-2 2-2-2V6l-2-2 2-2zm6 6c-3.31 0-6 2.69-6 6 0 4.5 6 8 6 8s6-3.5 6-8c0-3.31-2.69-6-6-6zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
      ),
      title: "Luxury Experience",
      description: "Exceptional service and premium packaging"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      title: "Science-Backed",
      description: "Clinically tested formulations for proven results"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cosmetic.jpg"
            alt="Luxury Beauty & Fashion"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gold mb-4 sm:mb-6 leading-tight px-2">
              Redefining Luxury in Beauty & Fashion
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-gray mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Premium skincare. Designer clothing. Crafted with elegance, powered by science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link href="/cosmetics" className="btn-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[200px]">
                Shop Cosmetics
              </Link>
              <Link href="/clothing" className="btn-secondary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[200px]">
                Explore Clothing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Cards Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-4 sm:mb-6 px-2">
              Our Collections
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-luxury-gray max-w-2xl mx-auto px-4">
              Discover our curated selection of premium beauty and fashion essentials
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {collections.map((collection) => (
              <div key={collection.id} className="card group cursor-pointer">
                <div className="relative h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover product-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-gold mb-3 sm:mb-4 px-2">
                  {collection.title}
                </h3>
                <p className="text-sm sm:text-base text-luxury-gray mb-4 sm:mb-6 leading-relaxed px-2">
                  {collection.description}
                </p>
                <Link href={collection.link} className="btn-primary w-full justify-center text-sm sm:text-base">
                  Explore Collection
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="section-padding bg-black">
        <div className="section-divider"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-4 sm:mb-6 px-2">
              Best Sellers
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-luxury-gray max-w-2xl mx-auto px-4">
              Our most loved products, chosen by customers worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {bestSellers.map((product) => (
              <div key={product.id} className="product-card group">
                <div className="relative h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover product-image"
                  />
                  {product.badge && (
                    <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gold text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {product.badge}
                    </span>
                  )}
                </div>
                
                <div className="space-y-3 sm:space-y-4 px-2">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-gold">
                    {product.name}
                  </h3>
                  <p className="text-luxury-gray text-xs sm:text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <div className="flex text-gold">
                      {'★'.repeat(Math.floor(product.rating))}
                    </div>
                    <span className="text-luxury-gray">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl font-bold text-gold">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-base sm:text-lg text-luxury-gray line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <button className="btn-primary w-full justify-center text-sm sm:text-base">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hoorberry Section */}
      <section className="section-padding bg-luxury-dark">
        <div className="section-divider"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-4 sm:mb-6 px-2">
              Why Choose Hoorberry?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-luxury-gray max-w-3xl mx-auto px-4">
              Experience the perfect blend of tradition and innovation in every product
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gold rounded-full flex items-center justify-center text-black text-2xl sm:text-3xl font-bold">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-gold mb-3 sm:mb-4 px-2">
                  {benefit.title}
                </h3>
                <p className="text-luxury-gray text-sm sm:text-base leading-relaxed px-2">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-black">
        <div className="section-divider"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-4 sm:mb-6 px-2">
              Stay in Touch
            </h2>
            <p className="text-base sm:text-lg text-luxury-gray max-w-2xl mx-auto px-4">
              Subscribe to our newsletter for exclusive offers and beauty tips
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-luxury-dark border border-gold/30 rounded-lg text-white placeholder-luxury-gray focus:outline-none focus:border-gold transition-colors text-sm sm:text-base"
              />
              <button
                type="submit"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 whitespace-nowrap text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
