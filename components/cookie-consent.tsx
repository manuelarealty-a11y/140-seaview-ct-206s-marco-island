"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { MetaPixel } from "./meta-pixel";

const STORAGE_KEY = "listing_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const existing = window.localStorage.getItem(STORAGE_KEY);
      if (!existing) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(value: "accepted" | "rejected") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage errors (private browsing, etc.)
    }
    window.dispatchEvent(new Event("cookie-consent-updated"));
    setVisible(false);
  }

  if (!visible) return <MetaPixel />;

  return (
    <>
      <MetaPixel />
      <div className="fixed inset-x-0 bottom-0 z-50 p-2 sm:p-6">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 p-3 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="hidden sm:block h-5 w-5 text-amber-300 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-white/80 leading-snug sm:leading-relaxed">
              We use a minimal set of cookies to keep this site running smoothly.
              With your consent we also use the Meta (Facebook) advertising pixel
              to measure and improve our ads. No tracking or advertising cookies
              are used without your consent. See our{" "}
              <a
                href="https://naplesrealestate.sale/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-amber-300"
              >
                Privacy Policy
              </a>{" "}
              for details.
            </p>
          </div>
          <div className="flex gap-2 sm:gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={() => decide("rejected")}
              className="flex-1 sm:flex-none text-sm border border-white/30 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="flex-1 sm:flex-none text-sm bg-amber-400 text-slate-900 font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-amber-300 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
