"use client";

import { useState, useEffect } from "react";
import { initializeGA } from "../lib/gtag";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("ga_consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "granted") {
      // Initialize GA if consent was previously granted
      initializeGA();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ga_consent", "granted");
    setShowBanner(false);

    // Initialize GA
    initializeGA();

    // Track the current page
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: window.location.pathname,
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem("ga_consent", "denied");
    setShowBanner(false);

    // Ensure GA is not initialized
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            We use cookies to analyze website traffic and optimize your
            experience. By accepting our use of cookies, your data will be
            aggregated with all other user data.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm border border-gray-600 rounded hover:bg-gray-800 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
