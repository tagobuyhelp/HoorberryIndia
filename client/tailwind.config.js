/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Open Sans", "Lato", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Cinzel", "Georgia", "serif"],
        heading: ["Playfair Display", "Cinzel", "serif"],
      },
      colors: {
        // Luxury Black & Gold Theme
        black: "#000000",
        gold: {
          DEFAULT: "#C5A880",
          50: "#F5F1E8",
          100: "#EBE2D1",
          200: "#D7C5A3",
          300: "#C5A880",
          400: "#B8985D",
          500: "#A6864A",
          600: "#8B6F3A",
          700: "#6F582B",
          800: "#52411C",
          900: "#362A0E",
        },
        luxury: {
          black: "#000000",
          gold: "#C5A880",
          white: "#FFFFFF",
          gray: "#E0E0E0",
          "dark-gray": "#1A1A1A",
        },
        primary: {
          DEFAULT: "#C5A880",
          hover: "#B8985D",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#000000",
          hover: "#1A1A1A",
          foreground: "#FFFFFF",
        },
      },
      backgroundColor: {
        'luxury-black': '#000000',
        'luxury-gold': '#C5A880',
      },
      textColor: {
        'luxury-gold': '#C5A880',
        'luxury-white': '#FFFFFF',
        'luxury-gray': '#E0E0E0',
      },
      borderColor: {
        'luxury-gold': '#C5A880',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'luxury': '0 10px 25px rgba(197, 168, 128, 0.1)',
        'luxury-hover': '0 15px 35px rgba(197, 168, 128, 0.2)',
      },
    },
  },
  plugins: [],
};
