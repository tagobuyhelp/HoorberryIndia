"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartModal from "./CartModal";
import CartMobileMenu from "./CartMobileMenu";
import AccountModal from "./AccountModal";
import AccountMobileMenu from "./AccountMobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isCartMobileMenuOpen, setIsCartMobileMenuOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isAccountMobileMenuOpen, setIsAccountMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const openCartMobileMenu = () => {
    setIsCartMobileMenuOpen(true);
  };

  const closeCartMobileMenu = () => {
    setIsCartMobileMenuOpen(false);
  };

  const openAccountModal = () => {
    setIsAccountModalOpen(true);
  };

  const closeAccountModal = () => {
    setIsAccountModalOpen(false);
  };

  const openAccountMobileMenu = () => {
    setIsAccountMobileMenuOpen(true);
  };

  const closeAccountMobileMenu = () => {
    setIsAccountMobileMenuOpen(false);
  };

  const handleCartClick = () => {
    // Show desktop modal on large screens, mobile menu on small screens
    if (window.innerWidth >= 1024) {
      openCartModal();
    } else {
      openCartMobileMenu();
    }
  };

  const handleAccountClick = () => {
    // Show desktop modal on large screens, mobile menu on small screens
    if (window.innerWidth >= 1024) {
      openAccountModal();
    } else {
      openAccountMobileMenu();
    }
  };

  const navigationItems = [
    { 
      name: "Home", 
      href: "/",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: "Cosmetics", 
      href: "/cosmetics",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V6l-1-1z" />
        </svg>
      )
    },
    { 
      name: "Clothing", 
      href: "/clothing",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    { 
      name: "About", 
      href: "/about",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: "Blog", 
      href: "/blog",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    { 
      name: "Contact", 
      href: "/contact",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <>
    <header className="sticky top-0 z-40 bg-black border-b border-gray-800 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gold group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#C5A880] to-[#D4B896] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold bg-gradient-to-r from-[#C5A880] to-[#D4B896] bg-clip-text text-transparent group-hover:from-white group-hover:to-gray-200 transition-all duration-300">
                Hoorberry
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link flex items-center space-x-2 group"
              >
                <span className="text-gold group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Search Icon - Hidden on very small screens */}
            <button
              className="hidden xs:block p-2 sm:p-2.5 text-white hover:text-gold transition-all duration-300 rounded-lg hover:bg-gray-800 group relative"
              aria-label="Search"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C5A880] to-[#D4B896] rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>

            {/* Cart Icon */}
            <button
              onClick={handleCartClick}
              className="p-2 sm:p-2.5 text-white hover:text-gold transition-all duration-300 relative rounded-lg hover:bg-gray-800 group"
              aria-label="Shopping Cart"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
              {/* Cart Badge */}
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#C5A880] to-[#D4B896] text-black text-xs rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center font-bold text-[10px] sm:text-xs shadow-lg animate-pulse">
                3
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C5A880] to-[#D4B896] rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>

            {/* Account Icon */}
            <button
              onClick={handleAccountClick}
              className="p-2 sm:p-2.5 text-white hover:text-gold transition-all duration-300 rounded-lg hover:bg-gray-800 group relative"
              aria-label="Account"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C5A880] to-[#D4B896] rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="p-2 sm:p-2.5 text-white hover:text-gold transition-all duration-300 rounded-lg hover:bg-gray-800 group relative"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">
                  {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
                </span>
                <div className="relative">
                  {!isMobileMenuOpen ? (
                    <svg
                      className="block h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-300 rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#C5A880] to-[#D4B896] rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "max-h-96 opacity-100" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 sm:px-6 pt-3 pb-4 space-y-2 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800 shadow-lg">
          {/* Mobile Navigation */}
          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 text-white hover:text-gold transition-all duration-300 font-medium group rounded-xl hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 border border-transparent hover:border-[#C5A880]/20 transform hover:scale-[1.02]"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'slideInFromLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                <span className="text-gold group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform">
                  {item.icon}
                </span>
                <span className="font-semibold">{item.name}</span>
                <svg className="w-4 h-4 ml-auto text-gray-400 group-hover:text-gold transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>
        </div>
      </div>

    </header>

    {/* Cart Modal for Desktop - Outside header to avoid overflow issues */}
    <CartModal isOpen={isCartModalOpen} onClose={closeCartModal} />

    {/* Cart Mobile Menu - Outside header to avoid overflow issues */}
    <CartMobileMenu isOpen={isCartMobileMenuOpen} onClose={closeCartMobileMenu} />

    {/* Account Modal for Desktop - Outside header to avoid overflow issues */}
    <AccountModal isOpen={isAccountModalOpen} onClose={closeAccountModal} />

    {/* Account Mobile Menu - Outside header to avoid overflow issues */}
    <AccountMobileMenu isOpen={isAccountMobileMenuOpen} onClose={closeAccountMobileMenu} />
  </>
  );
}
