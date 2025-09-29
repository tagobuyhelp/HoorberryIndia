import Link from 'next/link';

// Generate static params for all possible product slugs
export async function generateStaticParams() {
  // Define all possible product slugs for static generation
  const productSlugs = [
    'celebright-advanced-skin-brightening-cream',
    'vitamin-c-serum',
    'hydrating-face-mask',
    'anti-aging-night-cream',
    'gentle-exfoliating-scrub',
    'premium-foundation',
    'luxury-lipstick',
    'designer-dress',
    'casual-shirt',
    'formal-blazer'
  ];

  return productSlugs.map((slug) => ({
    slug: slug,
  }));
}

// Sample product data - in real app, this would come from API/database
const sampleProduct = {
  id: 1,
  name: "Hoorberry Celebright Advanced — Skin Brightening Cream",
  slug: "celebright-advanced-skin-brightening-cream",
  price: 2499,
  originalPrice: 3299,
  discount: 24,
  image: "/cosmetic.jpg",
  shortDescription: "Luxury skin-brightening cream with Glutathione, Kojic Acid & Peptides for radiant, even-toned skin.",
  inStock: true,
  stockCount: 15,
  category: "Cosmetics",
  description: "Transform your skin with our premium Celebright Advanced formula. This luxurious cream combines the power of Glutathione, Kojic Acid, and advanced Peptides to deliver visible brightening results. Clinically tested and dermatologist-approved, this cream helps reduce dark spots, evens skin tone, and promotes a natural, healthy glow.",
  keyIngredients: [
    "Glutathione - Powerful antioxidant for skin brightening",
    "Kojic Acid - Helps reduce dark spots and hyperpigmentation",
    "Hyaluronic Acid - Deep hydration and plumping effect",
    "Niacinamide - Improves skin texture and minimizes pores",
    "Peptides - Promotes collagen production and skin renewal"
  ],
  howToUse: [
    "Cleanse your face thoroughly with a gentle cleanser",
    "Apply a small amount of cream to clean, dry skin",
    "Gently massage in upward circular motions until absorbed",
    "Use twice daily - morning and evening for best results",
    "Always follow with SPF during daytime use"
  ],
  shippingInfo: {
    freeShipping: "Free shipping on orders above ₹1999",
    deliveryTime: "2-5 business days",
    returns: "30-day easy returns policy",
    warranty: "100% authentic products guaranteed"
  }
};

// Sample reviews data
const sampleReviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    comment: "Amazing results! My skin looks brighter and more even-toned after just 2 weeks of use. Highly recommend!",
    date: "December 10, 2024"
  },
  {
    id: 2,
    name: "Anita Gupta",
    rating: 4,
    comment: "Great product quality. The texture is luxurious and it doesn't feel heavy on the skin. Seeing gradual improvement.",
    date: "December 8, 2024"
  },
  {
    id: 3,
    name: "Meera Patel",
    rating: 5,
    comment: "Worth every penny! The packaging is elegant and the cream works wonderfully. My dark spots are fading.",
    date: "December 5, 2024"
  }
];

// Recommended products data
const recommendedProducts = [
  {
    id: 2,
    name: "Vitamin C Serum",
    price: 1899,
    image: "/product_image.jpg",
    slug: "vitamin-c-serum"
  },
  {
    id: 3,
    name: "Hydrating Face Mask",
    price: 1299,
    image: "/cosmetic.jpg",
    slug: "hydrating-face-mask"
  },
  {
    id: 4,
    name: "Anti-Aging Night Cream",
    price: 2799,
    image: "/product_image.jpg",
    slug: "anti-aging-night-cream"
  },
  {
    id: 5,
    name: "Gentle Exfoliating Scrub",
    price: 1599,
    image: "/cosmetic.jpg",
    slug: "gentle-exfoliating-scrub"
  }
];

export default function ProductDetailPage({ params }) {
  const product = sampleProduct; // In real app, fetch by params.slug

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
    <div className="min-h-screen bg-black text-white">
      {/* Product Hero Section */}
      <section className="py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 px-3 xs:px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 xl:gap-16">
            {/* Product Image */}
            <div className="relative order-1 lg:order-1">
              <div className="relative overflow-hidden rounded-lg border-2 border-[#C5A880] shadow-2xl shadow-[#C5A880]/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 xs:h-80 sm:h-96 md:h-[450px] lg:h-[500px] xl:h-[600px] object-cover"
                />
                {product.discount && (
                  <div className="absolute top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4">
                    <span className="bg-[#C5A880] text-black px-2 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-bold">
                      {product.discount}% OFF
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center space-y-4 xs:space-y-5 sm:space-y-6 order-2 lg:order-2">
              <div>
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-serif text-[#C5A880] mb-3 xs:mb-4 leading-tight">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-3 xs:space-x-4 mb-3 xs:mb-4">
                  <span className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-white">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg xs:text-xl text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <p className="text-sm xs:text-base sm:text-lg text-[#E0E0E0] leading-relaxed mb-4 xs:mb-5 sm:mb-6">
                  {product.shortDescription}
                </p>

                {/* Stock Status */}
                <div className="mb-4 xs:mb-5 sm:mb-6">
                  {product.inStock ? (
                    <span className="text-[#C5A880] font-semibold text-sm xs:text-base">
                      ✓ In Stock ({product.stockCount} available)
                    </span>
                  ) : (
                    <span className="text-red-500 font-semibold text-sm xs:text-base">
                      ✗ Out of Stock
                    </span>
                  )}
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-3 xs:space-x-4 mb-6 xs:mb-7 sm:mb-8">
                  <label className="text-white font-medium text-sm xs:text-base">Quantity:</label>
                  <div className="flex items-center border border-gray-600 rounded-lg">
                    <span className="px-3 xs:px-4 py-2 xs:py-3 text-white min-w-[50px] text-center">1</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col xs:flex-col sm:flex-row gap-3 xs:gap-4 mb-6 xs:mb-7 sm:mb-8">
                  <button className="flex-1 bg-[#C5A880] text-black font-bold py-3 xs:py-4 px-4 xs:px-6 rounded-lg hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-300 transform hover:scale-105 min-h-[48px] text-sm xs:text-base">
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-transparent border-2 border-[#C5A880] text-[#C5A880] font-bold py-3 xs:py-4 px-4 xs:px-6 rounded-lg hover:bg-[#C5A880] hover:text-black transition-all duration-300 transform hover:scale-105 min-h-[48px] text-sm xs:text-base">
                    Buy Now
                  </button>
                </div>

                {/* Trust Signals */}
                <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-3 gap-3 xs:gap-4 text-xs xs:text-sm text-[#E0E0E0]">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 xs:w-5 h-4 xs:h-5 text-[#C5A880] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 xs:w-5 h-4 xs:h-5 text-[#C5A880] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    <span>Nationwide Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 xs:w-5 h-4 xs:h-5 text-[#C5A880] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    <span>Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-700 mb-6 xs:mb-8 overflow-x-auto">
            <button className="px-3 xs:px-4 py-3 xs:py-4 font-medium whitespace-nowrap min-h-[48px] text-sm xs:text-base text-[#C5A880] border-b-2 border-[#C5A880]">
              Description
            </button>
            <button className="px-3 xs:px-4 py-3 xs:py-4 font-medium whitespace-nowrap min-h-[48px] text-sm xs:text-base text-gray-400">
              Key Ingredients
            </button>
            <button className="px-3 xs:px-4 py-3 xs:py-4 font-medium whitespace-nowrap min-h-[48px] text-sm xs:text-base text-gray-400">
              How to Use
            </button>
            <button className="px-3 xs:px-4 py-3 xs:py-4 font-medium whitespace-nowrap min-h-[48px] text-sm xs:text-base text-gray-400">
              Shipping & Returns
            </button>
          </div>

          {/* Tab Content - Description */}
          <div className="min-h-[250px] xs:min-h-[300px]">
            <div>
              <h3 className="text-xl xs:text-2xl font-serif text-[#C5A880] mb-3 xs:mb-4">Product Description</h3>
              <p className="text-white leading-relaxed text-sm xs:text-base sm:text-lg">{product.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center mb-6 xs:mb-8 gap-4 xs:gap-0">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-serif text-[#C5A880]">What Customers Say</h2>
            <button className="bg-[#C5A880] text-black font-semibold py-2 xs:py-3 px-4 xs:px-6 rounded-lg hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-300 min-h-[44px] text-sm xs:text-base">
              Add Review
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
            {sampleReviews.map((review) => (
              <div key={review.id} className="bg-gray-900 p-4 xs:p-6 rounded-lg border border-gray-800">
                <div className="flex items-center space-x-1 mb-3">
                  {renderStars(review.rating)}
                </div>
                <p className="text-white mb-4 leading-relaxed text-sm xs:text-base">{review.comment}</p>
                <div className="flex justify-between items-center text-xs xs:text-sm">
                  <span className="text-[#C5A880] font-medium">{review.name}</span>
                  <span className="text-gray-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 md:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-serif text-[#C5A880] mb-6 xs:mb-8 text-center">You May Also Like</h2>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
            {recommendedProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`}>
                <div className="bg-black rounded-lg overflow-hidden border border-gray-800 hover:border-[#C5A880] transition-all duration-300 hover:shadow-xl hover:shadow-[#C5A880]/10 group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 xs:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-3 xs:p-4">
                    <h3 className="text-white font-medium mb-2 group-hover:text-[#C5A880] transition-colors text-sm xs:text-base line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-[#C5A880] font-bold text-base xs:text-lg mb-3">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <button className="w-full bg-[#C5A880] text-black font-semibold py-2 xs:py-3 px-3 xs:px-4 rounded-lg hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-300 text-xs xs:text-sm min-h-[40px]">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}