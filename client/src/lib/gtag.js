export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XJYLES9DKF";

export const pageview = (url) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
    anonymize_ip: true,
  });
  if (localStorage.getItem("ga_debug") === "1") {
    console.log("[GA] pageview", url);
  }
};

export const event = (action, params) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", action, params);
  if (localStorage.getItem("ga_debug") === "1") {
    console.log("[GA] event", action, params);
  }
};

export const onCtaClick = (label, location = "unknown") => {
  event("cta_click", {
    label,
    location,
    event_category: "engagement",
    event_label: `${location}_${label}`,
  });
};

export const initializeGA = () => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  // Set consent and configure GA
  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    anonymize_ip: true,
  });
  window.gtag("set", "anonymize_ip", true);
};
