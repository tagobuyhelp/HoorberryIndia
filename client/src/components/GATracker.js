"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "../lib/gtag";

export default function GATracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if consent is granted before tracking
    const consent = localStorage.getItem("ga_consent");
    if (consent === "granted") {
      pageview(pathname);
    }
  }, [pathname]);

  return null;
}
