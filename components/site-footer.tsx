import { Instagram, Linkedin, Star, MapPin } from "lucide-react";

const links = [
  {
    href: "https://www.instagram.com/manuelarealty",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/in/manuela-schinagl-67975631",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.ratemyagent.com/real-estate-agent/manuela-schinagl-azzgvy/sales/overview",
    label: "Rate My Agent",
    icon: Star,
  },
  {
    href: "https://www.google.com/maps/search/?api=1&query=140+Seaview+Ct,+Marco+Island,+FL+34145",
    label: "Google Maps",
    icon: MapPin,
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 px-6 py-10 text-white/70 md:px-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg text-white">
            Manuela Schinagl — Manuela Realty International
          </p>
          <p className="mt-1 text-sm">
            140 Seaview Ct #206S, The Admiralty, Marco Island, FL 34145 &middot;
            License #BK3216655
          </p>
        </div>

        <div className="flex gap-4">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-emerald-300 hover:text-emerald-300"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} Manuela Realty International. All
        information deemed reliable but not guaranteed.
      </p>
    </footer>
  );
}
