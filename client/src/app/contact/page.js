import Link from 'next/link';

export const metadata = {
  title: 'Contact Hoorberry India | Luxury Cosmetics & Designer Clothing',
  description: 'Get in touch with Hoorberry India. Customer support, product inquiries, partnerships & nationwide delivery assistance.',
  keywords: 'Contact Hoorberry India, Luxury cosmetics brand support, Designer clothing customer service India',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-8 md:py-16 lg:py-24 px-4 md:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#C5A880] mb-4 md:mb-6 lg:mb-8 font-bold leading-tight">
          Contact Hoorberry India
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed px-2">
          We'd love to hear from you. Whether you need help choosing the right product, tracking your order, 
          or exploring a collaboration, the <span className="text-[#C5A880] font-semibold">Hoorberry India customer care team</span> is here to assist you.
        </p>
      </section>

      {/* Two-Column Layout: Contact Details & Form */}
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            
            {/* Left Column - Contact Details */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#C5A880] mb-6 md:mb-8">
                Customer Care
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#C5A880] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <div>
                    <p className="text-[#C5A880] font-semibold text-base md:text-lg">Email</p>
                    <a href="mailto:contact@hoorberryindia.com" className="text-white hover:text-[#C5A880] transition-colors text-sm md:text-base break-all">
                      contact@hoorberryindia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#C5A880] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <div>
                    <p className="text-[#C5A880] font-semibold text-base md:text-lg">Phone</p>
                    <p className="text-white text-sm md:text-base">+91 XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#C5A880] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <div>
                    <p className="text-[#C5A880] font-semibold text-base md:text-lg">Working Hours</p>
                    <p className="text-white text-sm md:text-base">Monday – Saturday</p>
                    <p className="text-white text-sm md:text-base">10:00 AM – 6:00 PM (IST)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-4 md:p-6 rounded-lg border border-gray-800">
                <p className="text-[#E0E0E0] italic text-sm md:text-base">
                  We usually respond to all queries within 24–48 hours.
                </p>
              </div>

              {/* Business Address */}
              <div className="mt-6 md:mt-8">
                <h3 className="text-xl md:text-2xl font-serif text-[#C5A880] mb-3 md:mb-4">Our Location</h3>
                <p className="text-white leading-relaxed text-sm md:text-base">
                  Hoorberry India operates primarily as an online luxury brand with nationwide delivery.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gray-900 p-4 md:p-6 lg:p-8 rounded-lg border border-gray-800 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#C5A880] mb-6 md:mb-8">
                Send us a Message
              </h2>
              
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-[#C5A880] font-semibold mb-2 text-sm md:text-base">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#C5A880] focus:outline-none focus:ring-2 focus:ring-[#C5A880]/20 transition-colors text-sm md:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#C5A880] font-semibold mb-2 text-sm md:text-base">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#C5A880] focus:outline-none focus:ring-2 focus:ring-[#C5A880]/20 transition-colors text-sm md:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#C5A880] font-semibold mb-2 text-sm md:text-base">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-[#C5A880] focus:outline-none focus:ring-2 focus:ring-[#C5A880]/20 transition-colors text-sm md:text-base"
                  >
                    <option value="">Select a subject</option>
                    <option value="order-support">Order Support</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#C5A880] font-semibold mb-2 text-sm md:text-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#C5A880] focus:outline-none focus:ring-2 focus:ring-[#C5A880]/20 transition-colors resize-vertical text-sm md:text-base"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C5A880] text-black font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#C5A880] mb-4 md:mb-6">
            Stay Connected
          </h2>
          <p className="text-base md:text-lg text-white mb-6 md:mb-8 leading-relaxed px-2">
            Subscribe to our newsletter for exclusive updates, new launches, and luxury style tips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#C5A880] focus:outline-none focus:ring-2 focus:ring-[#C5A880]/20 transition-colors text-sm md:text-base"
            />
            <button className="bg-[#C5A880] text-black font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-300 whitespace-nowrap text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#C5A880] mb-4 md:mb-6">
            Follow Us
          </h2>
          <p className="text-base md:text-lg text-white mb-6 md:mb-8 px-2">
            Stay connected with us for updates, launches & style tips:
          </p>
          
          <div className="flex justify-center space-x-4 md:space-x-8">
            <a href="#" className="group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#C5A880] transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#C5A880] group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.402-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </div>
            </a>
            
            <a href="#" className="group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#C5A880] transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#C5A880] group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </div>
            </a>
            
            <a href="#" className="group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#C5A880] transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#C5A880] group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </div>
            </a>
            
            <a href="#" className="group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#C5A880] transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#C5A880] group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 text-center bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-6 md:mb-8 px-2">
            "Your journey with <span className="text-[#C5A880] font-semibold">luxury beauty & fashion</span> begins here. Reach out, and let's connect."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md mx-auto">
            <Link 
              href="/cosmetics" 
              className="bg-[#C5A880] text-black font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-black hover:text-[#C5A880] hover:border hover:border-[#C5A880] transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Shop Cosmetics
            </Link>
            <Link 
              href="/clothing" 
              className="bg-transparent border-2 border-[#C5A880] text-[#C5A880] font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-[#C5A880] hover:text-black transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Explore Clothing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}