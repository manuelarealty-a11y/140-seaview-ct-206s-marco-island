"use client";

import { useEffect } from "react";

// Meta Pixel – loads ONLY after the visitor accepts cookies in the banner.
const PIXEL_ID = "1702488940844943";
const CONSENT_KEY = "listing_cookie_consent";
const CONSENT_EVENT = "cookie-consent-updated";

function hasConsent(): boolean {
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

function loadPixel() {
  const w = window as any;
  if (w.__metaPixelLoaded) {
    w.fbq("consent", "grant");
    return;
  }
  w.__metaPixelLoaded = true;
  if (!w.fbq) {
    const n: any = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!w._fbq) w._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    w.fbq = n;
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://connect.facebook.net/en_US/fbevents.js";
    const first = document.getElementsByTagName("script")[0];
    if (first && first.parentNode) first.parentNode.insertBefore(s, first);
    else document.head.appendChild(s);
  }
  w.fbq("init", PIXEL_ID);
  w.fbq("track", "PageView");
}

function revokePixel() {
  const w = window as any;
  if (w.__metaPixelLoaded && w.fbq) w.fbq("consent", "revoke");
}

export function MetaPixel() {
  useEffect(() => {
    const apply = () => (hasConsent() ? loadPixel() : revokePixel());
    apply();
    window.addEventListener(CONSENT_EVENT, apply);
    return () => window.removeEventListener(CONSENT_EVENT, apply);
  }, []);
  return null;
}
