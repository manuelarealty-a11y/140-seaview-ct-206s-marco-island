import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { Gallery, photos } from "@/components/gallery";

const heroPhotos = [
  photos[0], // Amazing waterfront aerial view
  photos[1], // Wide Marco Island beach view
  photos[2], // Great room (living room)
  photos[6], // Comfortable floor plan / great room (living room)
  photos[7], // Kitchen with desk area
  photos[8], // Kitchen
  photos[3], // Admiralty building aerial
];

const features = [
  "2 Bedrooms / 2 Bathrooms",
  "Turnkey — Move-In Ready",
  "Impact Windows, Doors & Storm Shutters",
  "2nd Floor, South Side, End Unit (Cross-Ventilation)",
  "Direct Beach Access",
  "Community Pool & Covered Parking",
  "Tennis / Sports Courts",
  "Established Seasonal Rental History",
];

export default function ListingPage() {
  return (
    <main>
      {/* Hero: CSS-only crossfade slideshow, no JS/video needed */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-slate-950 text-white">
        {heroPhotos.map((photo, i) => (
          <div
            key={photo.src}
            className="hero-slide absolute inset-0"
            style={{ animationDelay: `${i * 4}s` }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/80" />

        <div className="relative z-10 flex h-full flex-col justify-between px-6 py-10 md:px-14">
          <span className="text-sm font-light tracking-[0.3em] drop-shadow-md">
            MANUELA REALTY INTERNATIONAL
          </span>

          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-emerald-300 drop-shadow-md">
              MARCO ISLAND, FLORIDA · THE ADMIRALTY
            </p>
            <h1 className="font-serif text-4xl leading-tight drop-shadow-lg sm:text-5xl">
              140 Seaview Ct, Unit #206S
            </h1>
            <p className="mt-4 text-lg text-white drop-shadow-md">
              Turnkey 2BR/2BA beachfront condo — $659,000
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#gallery"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
              >
                View Photos
              </a>
              <a
                href="tel:+12394505622"
                className="rounded-full border border-white/70 bg-black/20 px-6 py-3 text-sm font-semibold backdrop-blur-sm hover:bg-white/10"
              >
                Call 239-450-5622
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-slide {
          opacity: 0;
          animation-name: heroFade;
          animation-iteration-count: infinite;
          animation-duration: ${heroPhotos.length * 4}s;
        }
        @keyframes heroFade {
          0% { opacity: 0; }
          4% { opacity: 1; }
          20% { opacity: 1; }
          24% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>

      {/* Details */}
      <section className="bg-slate-50 px-6 py-16 md:px-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Property Details
            </p>
            <h2 className="mt-2 font-serif text-3xl text-slate-900 md:text-4xl">
              An exceptional beachfront opportunity
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Significant price improvement! Access the beach from this
              inviting second-floor unit on the desirable south side of the
              Admiralty building. Watch the sunrise from the balcony in this
              2-bedroom, 2-bath residence, which offers impact doors and
              windows plus additional shutters for double protection and
              extra peace of mind.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Only the end units benefit from excellent cross-ventilation
              thanks to opposite-facing windows. Sold turnkey, it is
              move-in ready or ideal as a hassle-free investment, with
              repeat seasonal rentals already in place that the buyer can
              seamlessly take over.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Residents enjoy a sparkling swimming pool, covered parking,
              and an extra storage area for beach gear or personal items.
              With its rental history, secure features, and easy access to
              the sand and surf, this unit is a fantastic opportunity for
              both personal use and investment.
            </p>
            <p className="mt-6 text-sm text-slate-400">MLS #2261033</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f}
                className="rounded-2xl bg-white p-5 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-slate-100"
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      {/* Contact */}
      <section
        id="contact"
        className="bg-slate-950 px-6 py-16 text-center text-white md:px-14"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
          Private Showings & Inquiries
        </p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">
          Ready to see #206S in person?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/75">
          Contact Manuela Schinagl of Manuela Realty International for
          current availability and a private showing.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+12394505622"
            className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
          >
            239-450-5622
          </a>
          <a
            href="mailto:manuelarealty@gmail.com"
            className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold hover:bg-white/10"
          >
            manuelarealty@gmail.com
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
