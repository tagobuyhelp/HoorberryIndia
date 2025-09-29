import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "About Hoorberry India | Luxury Cosmetics & Designer Clothing",
  description: "Hoorberry India is a luxury lifestyle brand offering premium cosmetics and designer clothing. Discover our story, mission, and promise of elegance.",
  keywords: "About Hoorberry India, luxury fashion brand India, premium cosmetics company India, designer clothing and skincare brand",
};

export default function About() {
  // Mission points data
  const missionPoints = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Quality",
      description: "Only the best ingredients and materials"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Authenticity",
      description: "Ethical sourcing, cruelty-free cosmetics"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Design",
      description: "Premium black-and-gold identity with elegance in every detail"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.58 10.76C10.22 10.54 9.81 10.4 9.37 10.4L4.93 10.93L10.07 16.07L11.35 15.93C11.35 15.93 11.84 15.87 12.37 15.87C13.1 15.87 13.87 16.19 14 16.19C14 16.19 15.3 14.9 16.58 13.62C17.85 12.35 19.12 11.07 20.4 9.8L21 9Z"/>
        </svg>
      ),
      title: "Accessibility",
      description: "Nationwide delivery so luxury is within reach"
    }
  ];

  // Promise values data
  const promiseValues = [
    {
      title: "Quality",
      description: "Premium, dermatologist-tested skincare solutions",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Authenticity",
      description: "Designer clothing that blends modern trends with timeless classics",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: "Design",
      description: "A consistent commitment to luxury, trust, and innovation",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ];

  // Sustainability points data
  const sustainabilityPoints = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75S7 8 17 8z"/>
        </svg>
      ),
      title: "Eco-conscious packaging",
      description: "Sustainable materials that protect both products and planet"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Cruelty-free manufacturing",
      description: "Ethical practices ensuring no animal testing"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.58 10.76C10.22 10.54 9.81 10.4 9.37 10.4L4.93 10.93L10.07 16.07L11.35 15.93C11.35 15.93 11.84 15.87 12.37 15.87C13.1 15.87 13.87 16.19 14 16.19C14 16.19 15.3 14.9 16.58 13.62C17.85 12.35 19.12 11.07 20.4 9.8L21 9Z"/>
        </svg>
      ),
      title: "Local craftsmanship support",
      description: "Supporting artisans and local communities"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Full-Width Banner */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury_Clothing.jpg"
            alt="Hoorberry India luxury black and gold background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-4 sm:mb-6 leading-tight">
              About Hoorberry India
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              At <strong>Hoorberry India</strong>, we believe luxury is not just about looking good — it's about <strong>feeling confident, empowered, and authentic</strong>. We set out to create a brand that merges <strong>advanced cosmetics and designer clothing</strong> under one name, delivering a lifestyle that reflects <strong>elegance and refinement</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-6 sm:mb-8">
              Our Story
            </h2>
            <div className="text-white leading-loose text-sm sm:text-base md:text-lg space-y-6 sm:space-y-8">
              <p className="mb-6 sm:mb-8">
                Founded with a vision to redefine <strong>luxury in India</strong>, Hoorberry was born from the idea that true elegance comes from <strong>attention to detail and commitment to quality</strong>. Our cosmetics are powered by science-backed ingredients, while our clothing line is crafted with timeless tailoring.
              </p>
              <p>
                Together, they create a brand that celebrates <strong>modern sophistication</strong> while honoring India's rich heritage of beauty and fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-4 sm:mb-6">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gold font-semibold mb-6 sm:mb-8">
              To empower confidence through beauty and style.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed">
              We aim to offer customers <strong>products that deliver visible results and timeless appeal</strong>. Every cream, serum, dress, and accessory reflects our dedication to:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {missionPoints.map((point, index) => (
              <div key={index} className="text-center p-4 sm:p-6">
                <div className="text-gold mb-4 sm:mb-6 flex justify-center">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    {point.icon}
                  </div>
                </div>
                <h3 className="font-playfair text-base sm:text-lg md:text-xl font-semibold text-gold mb-3 sm:mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-4 sm:mb-6">
              Our Promise
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed">
              When you choose Hoorberry, you're not just buying a product — you're embracing a lifestyle. We promise:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {promiseValues.map((value, index) => (
              <div key={index} className="bg-gray-900 border-2 border-gold rounded-lg p-6 sm:p-8 text-center hover:bg-gold hover:text-black transition-all duration-300 group">
                <div className="text-gold group-hover:text-black mb-6 flex justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12">
                    {value.icon}
                  </div>
                </div>
                <h3 className="font-playfair text-lg sm:text-xl md:text-2xl font-bold text-gold group-hover:text-black mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 group-hover:text-black leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-4 sm:mb-6">
              Sustainability
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed">
              We believe true luxury respects the planet. Hoorberry strives to:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {sustainabilityPoints.map((point, index) => (
              <div key={index} className="text-center p-4 sm:p-6">
                <div className="text-gold mb-4 sm:mb-6 flex justify-center">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    {point.icon}
                  </div>
                </div>
                <h3 className="font-playfair text-base sm:text-lg md:text-xl font-semibold text-gold mb-3 sm:mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement & CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-6 sm:mb-8">
              Luxury Meets Responsibility
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              At <strong>Hoorberry India</strong>, luxury meets responsibility. Whether you're enhancing your beauty routine or upgrading your wardrobe, we're here to help you shine — inside and out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link href="/cosmetics">
                <button className="w-full sm:w-auto bg-gold text-black font-semibold py-3 px-6 sm:px-8 text-sm sm:text-base rounded-lg hover:bg-black hover:text-gold hover:border hover:border-gold transition-all duration-300">
                  Shop Cosmetics
                </button>
              </Link>
              <Link href="/clothing">
                <button className="w-full sm:w-auto bg-gold text-black font-semibold py-3 px-6 sm:px-8 text-sm sm:text-base rounded-lg hover:bg-black hover:text-gold hover:border hover:border-gold transition-all duration-300">
                  Explore Clothing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}