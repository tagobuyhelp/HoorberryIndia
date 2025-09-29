"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NotFound() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden flex items-center justify-center px-4">
            {/* Animated background elements - optimized for mobile */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-700/10 animate-pulse"></div>

            {/* Floating particles - reduced size on mobile */}
            <div
                className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-500/5 rounded-full blur-3xl animate-bounce"
                style={{ animationDuration: "6s" }}
            ></div>
            <div
                className="absolute bottom-1/4 right-1/4 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-purple-500/5 rounded-full blur-3xl animate-bounce"
                style={{ animationDelay: "2s", animationDuration: "8s" }}
            ></div>
            <div
                className="absolute top-1/2 left-1/2 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-indigo-500/5 rounded-full blur-2xl animate-bounce"
                style={{ animationDelay: "4s", animationDuration: "10s" }}
            ></div>

            {/* Main content */}
            <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
                {/* 404 Number with responsive sizing */}
                <div className="relative mb-6 sm:mb-8">
                    <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse select-none leading-none">
                        404
                    </h1>
                    <div className="absolute inset-0 text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-blue-400/20 animate-ping leading-none">
                        404
                    </div>
                </div>

                {/* Error message - mobile optimized */}
                <div className="mb-6 sm:mb-8 px-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-2 leading-relaxed">
                        The page you're looking for seems to have vanished into the digital void.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                        Don't worry, even the best developers encounter 404s!
                    </p>
                </div>

                {/* Animated icon - mobile responsive */}
                <div className="mb-6 sm:mb-8 flex justify-center">
                    <div className="relative">
                        <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-spin-slow">
                            <svg
                                className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </div>
                        <div className="absolute inset-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full animate-ping"></div>
                    </div>
                </div>

                {/* Navigation buttons - mobile stack layout */}
                <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 w-full">
                    <Link
                        href="/"
                        className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
                    >
                        <svg
                            className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        Back to Home
                    </Link>

                    <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    >
                        <svg
                            className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        Get Help
                    </Link>
                </div>

                {/* Quick links - mobile optimized */}
                <div className="text-center mb-6 sm:mb-8">
                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Or explore these popular pages:</p>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-4">
                        <div className="flex justify-center items-center gap-2 sm:gap-4">
                            <Link
                                href="/about"
                                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 text-sm sm:text-base"
                            >
                                About Me
                            </Link>
                            <span className="text-gray-600 hidden sm:inline">•</span>
                        </div>
                        <div className="flex justify-center items-center gap-2 sm:gap-4">
                            <Link
                                href="/services"
                                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 text-sm sm:text-base"
                            >
                                Services
                            </Link>
                            <span className="text-gray-600 hidden sm:inline">•</span>
                        </div>
                        <Link
                            href="/blog"
                            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 text-sm sm:text-base"
                        >
                            Blog
                        </Link>
                    </div>
                </div>

                {/* Fun fact - mobile optimized */}
                <div className="p-4 sm:p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-600/30 mx-2 sm:mx-0">
                    <div className="flex items-start sm:items-center justify-center mb-3 flex-col sm:flex-row">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 mx-auto sm:mx-0">
                            <span className="text-sm">💡</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-white text-center sm:text-left">Did you know?</h3>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        The HTTP 404 error was named after room 404 at CERN, where the original web servers were located.
                        When a file couldn't be found, users were told it was "not found in room 404"!
                    </p>
                </div>
            </div>

            {/* Additional floating elements - hidden on small mobile */}
            <div
                className="absolute top-10 right-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-cyan-400/10 rounded-full blur-xl animate-ping hidden sm:block"
                style={{ animationDuration: "3s" }}
            ></div>
            <div
                className="absolute bottom-20 left-10 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-pink-400/10 rounded-full blur-lg animate-ping hidden sm:block"
                style={{ animationDelay: "1s", animationDuration: "4s" }}
            ></div>
        </div>
    );
}