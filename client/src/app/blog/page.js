import Link from 'next/link';

export const metadata = {
  title: 'Hoorberry Insights — Luxury Blog | Beauty & Fashion Tips',
  description: 'Discover luxury beauty secrets, fashion trends, and style inspiration from Hoorberry India. Expert insights on cosmetics, designer clothing, and lifestyle.',
  keywords: 'Luxury beauty blog, Fashion blog India, Cosmetics tips, Designer clothing trends, Hoorberry insights',
};

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Art of Luxury Skincare: Building Your Perfect Routine",
    excerpt: "Discover the secrets to radiant skin with our curated selection of premium skincare products. Learn how to create a routine that transforms your daily ritual into a luxurious experience.",
    image: "/cosmetic.jpg",
    date: "December 15, 2024",
    category: "Beauty",
    slug: "luxury-skincare-routine"
  },
  {
    id: 2,
    title: "Timeless Elegance: Designer Clothing Trends for 2025",
    excerpt: "Explore the upcoming fashion trends that define luxury and sophistication. From classic silhouettes to modern interpretations, discover what makes designer clothing truly timeless.",
    image: "/luxury_Clothing.jpg",
    date: "December 12, 2024",
    category: "Fashion",
    slug: "designer-clothing-trends-2025"
  },
  {
    id: 3,
    title: "Color Psychology in Makeup: Choosing Your Perfect Palette",
    excerpt: "Understanding how colors affect your mood and appearance is key to creating stunning makeup looks. Learn to select shades that enhance your natural beauty and express your personality.",
    image: "/product_image.jpg",
    date: "December 10, 2024",
    category: "Beauty",
    slug: "color-psychology-makeup"
  },
  {
    id: 4,
    title: "Sustainable Luxury: The Future of Conscious Fashion",
    excerpt: "Luxury and sustainability can coexist beautifully. Discover how premium brands are embracing eco-friendly practices without compromising on quality or elegance.",
    image: "/Luxury_Clothing2.jpg",
    date: "December 8, 2024",
    category: "Lifestyle",
    slug: "sustainable-luxury-fashion"
  },
  {
    id: 5,
    title: "The Science Behind Premium Cosmetics",
    excerpt: "What makes luxury cosmetics worth the investment? Dive deep into the research, ingredients, and technology that set premium beauty products apart from the rest.",
    image: "/cosmetic.jpg",
    date: "December 5, 2024",
    category: "Beauty",
    slug: "science-premium-cosmetics"
  },
  {
    id: 6,
    title: "Building a Capsule Wardrobe with Designer Pieces",
    excerpt: "Learn how to create a versatile, timeless wardrobe with carefully selected designer pieces. Quality over quantity is the key to effortless luxury dressing.",
    image: "/luxury_Clothing.jpg",
    date: "December 3, 2024",
    category: "Fashion",
    slug: "capsule-wardrobe-designer-pieces"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-28 px-4 md:px-8 text-center">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#C5A880] mb-4 sm:mb-6 md:mb-8 lg:mb-12 font-bold leading-tight">
          Hoorberry Insights
        </h1>
        <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#C5A880] mb-6 sm:mb-8 md:mb-12 font-light italic">
          — Luxury Blog
        </p>
      </section>

      {/* Intro Text Section */}
      <section className="py-6 sm:py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2">
            Welcome to our world of luxury beauty and fashion. Discover expert insights, 
            trending styles, and the stories behind our curated collections.
          </p>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-[#E0E0E0] leading-relaxed px-2">
            From skincare secrets to fashion forecasts, explore content crafted for those who 
            appreciate the finer things in life.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-[#C5A880] transition-all duration-300 hover:shadow-2xl hover:shadow-[#C5A880]/10 group"
              >
                {/* Featured Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 xs:h-48 sm:h-56 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 xs:top-4 left-3 xs:left-4">
                    <span className="bg-[#C5A880] text-black px-2 xs:px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 xs:p-4 sm:p-6 md:p-6 lg:p-8">
                  <div className="mb-2 xs:mb-3 md:mb-4">
                    <time className="text-[#C5A880] text-xs font-medium">
                      {post.date}
                    </time>
                  </div>
                  
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif text-[#C5A880] mb-2 xs:mb-3 md:mb-4 leading-tight group-hover:text-white transition-colors duration-300">
                    {post.title}
                  </h2>
                  
                  <p className="text-white text-sm xs:text-sm sm:text-base leading-relaxed mb-3 xs:mb-4 md:mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center bg-[#C5A880] text-black font-semibold py-2.5 xs:py-3 px-4 xs:px-5 md:px-6 rounded-lg hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-300 transform hover:scale-105 text-sm font-medium group min-h-[44px] justify-center"
                  >
                    Read More
                    <svg 
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-serif text-[#C5A880] mb-3 xs:mb-4 md:mb-6">
            Stay Inspired
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white mb-4 xs:mb-6 md:mb-8 leading-relaxed px-2">
            Subscribe to receive our latest insights, exclusive content, and luxury lifestyle tips directly in your inbox.
          </p>
          
          <div className="flex flex-col gap-3 max-w-sm xs:max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 xs:px-4 py-3 xs:py-3.5 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#C5A880] focus:outline-none focus:ring-2 focus:ring-[#C5A880]/20 transition-colors text-sm xs:text-base min-h-[44px]"
            />
            <button className="w-full bg-[#C5A880] text-black font-semibold py-3 xs:py-3.5 px-4 xs:px-6 rounded-lg hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-300 text-sm xs:text-base min-h-[44px]">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-4 xs:mb-6 md:mb-8 px-2">
            "Discover the stories behind luxury. Explore our collections and find your perfect style."
          </p>
          
          <div className="flex flex-col gap-3 max-w-sm xs:max-w-md mx-auto">
            <Link 
              href="/cosmetics" 
              className="w-full bg-[#C5A880] text-black font-semibold py-3 xs:py-3.5 px-6 xs:px-8 rounded-lg hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-300 transform hover:scale-105 text-sm xs:text-base min-h-[44px] flex items-center justify-center"
            >
              Shop Cosmetics
            </Link>
            <Link 
              href="/clothing" 
              className="w-full bg-transparent border-2 border-[#C5A880] text-[#C5A880] font-semibold py-3 xs:py-3.5 px-6 xs:px-8 rounded-lg hover:bg-[#C5A880] hover:text-black transition-all duration-300 transform hover:scale-105 text-sm xs:text-base min-h-[44px] flex items-center justify-center"
            >
              Explore Clothing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}