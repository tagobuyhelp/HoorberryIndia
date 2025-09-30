"use client";

import { useState } from "react";

const AccountMobileMenu = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login"); // "login" or "signup"
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login logic
    setIsLoggedIn(true);
    console.log("Login attempted with:", { email: formData.email, password: formData.password });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Mock signup logic
    setIsLoggedIn(true);
    console.log("Signup attempted with:", formData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: ""
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-[60] transition-opacity duration-300 lg:hidden"
        onClick={onClose}
      />
      
      {/* Mobile Menu */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-black border-l border-[#C5A880] z-[70] transform transition-transform duration-300 ease-in-out overflow-hidden lg:hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
          <h2 className="text-[#C5A880] font-serif text-lg font-semibold flex items-center gap-2">
            <svg className="w-5 h-5 text-[#C5A880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{isLoggedIn ? "My Account" : "Account"}</span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-[#C5A880] transition-colors duration-200 -mr-2"
            aria-label="Close account menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {isLoggedIn ? (
            // Logged In State
            <div className="space-y-6">
              {/* User Info */}
              <div className="text-center pb-4 border-b border-gray-800">
                <div className="w-20 h-20 bg-[#C5A880] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-xl">Welcome back!</h3>
                <p className="text-gray-400 text-sm mt-1">{formData.email || "user@example.com"}</p>
              </div>

              {/* Account Options */}
              <div className="space-y-2">
                <button className="w-full flex items-center space-x-4 p-4 text-left text-white hover:bg-gray-900 rounded-lg transition-colors duration-200">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#C5A880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Profile Settings</span>
                    <p className="text-gray-400 text-sm">Manage your personal information</p>
                  </div>
                </button>

                <button className="w-full flex items-center space-x-4 p-4 text-left text-white hover:bg-gray-900 rounded-lg transition-colors duration-200">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#C5A880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Order History</span>
                    <p className="text-gray-400 text-sm">View your past orders</p>
                  </div>
                </button>

                <button className="w-full flex items-center space-x-4 p-4 text-left text-white hover:bg-gray-900 rounded-lg transition-colors duration-200">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#C5A880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Wishlist</span>
                    <p className="text-gray-400 text-sm">Your saved items</p>
                  </div>
                </button>

                <button className="w-full flex items-center space-x-4 p-4 text-left text-white hover:bg-gray-900 rounded-lg transition-colors duration-200">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#C5A880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Addresses</span>
                    <p className="text-gray-400 text-sm">Manage delivery addresses</p>
                  </div>
                </button>

                <button className="w-full flex items-center space-x-4 p-4 text-left text-white hover:bg-gray-900 rounded-lg transition-colors duration-200">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#C5A880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Settings</span>
                    <p className="text-gray-400 text-sm">App preferences</p>
                  </div>
                </button>
              </div>

              {/* Logout Button */}
              <div className="pt-4 border-t border-gray-800">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center space-x-3 p-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>
          ) : (
            // Login/Signup State
            <div>
              {/* Tab Navigation */}
              <div className="flex mb-6 bg-gray-900 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab("login")}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === "login"
                      ? "bg-[#C5A880] text-black"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveTab("signup")}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === "signup"
                      ? "bg-[#C5A880] text-black"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Login Form */}
              {activeTab === "login" && (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C5A880] transition-colors duration-200"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </span>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C5A880] transition-colors duration-200"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-700 text-[#C5A880] focus:ring-[#C5A880]" />
                      <span className="ml-2 text-sm text-gray-300">Remember me</span>
                    </label>
                    <button type="button" className="text-sm text-[#C5A880] hover:underline">
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C5A880] text-black py-3 px-4 rounded-lg font-medium hover:bg-[#B8975C] transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span>Login</span>
                  </button>
                </form>
              )}

              {/* Signup Form */}
              {activeTab === "signup" && (
                <form onSubmit={handleSignup} className="space-y-3">
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">First Name</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </span>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C5A880] transition-colors duration-200"
                          placeholder="First name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Last Name</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </span>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C5A880] transition-colors duration-200"
                          placeholder="Last name"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C5A880] transition-colors duration-200"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone Number</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.25 3 9V7a2 2 0 012-2z" /></svg>
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C5A880] transition-colors duration-200"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      </span>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C5A880] transition-colors duration-200"
                        placeholder="Create a password"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Confirm Password</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      </span>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C5A880] transition-colors duration-200"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 rounded border-gray-700 text-[#C5A880] focus:ring-[#C5A880]" required />
                    <span className="ml-3 text-sm text-gray-300">
                      I agree to the <button type="button" className="text-[#C5A880] hover:underline">Terms & Conditions</button> and <button type="button" className="text-[#C5A880] hover:underline">Privacy Policy</button>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C5A880] text-black py-3 px-4 rounded-lg font-medium hover:bg-[#B8975C] transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span>Create Account</span>
                  </button>
                </form>
              )}

              {/* Social Login */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <p className="text-center text-gray-400 text-sm mb-4">Or continue with</p>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-3 p-4 border border-gray-700 rounded-lg text-white hover:bg-gray-900 transition-colors duration-200">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-3 p-4 border border-gray-700 rounded-lg text-white hover:bg-gray-900 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Continue with Facebook</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AccountMobileMenu;