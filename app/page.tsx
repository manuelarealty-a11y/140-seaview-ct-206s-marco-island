import Image from "next/image";

const photos = [
  { src: "https://g.tlcdn.com/view/ac93c1101d874040922e26e1302b00d0.jpg", alt: "Admiralty building aerial view, Marco Island beachfront" },
  { src: "https://g.tlcdn.com/view/097ecf128bb54e26b9b3117c3fc5ecc2.jpg", alt: "Wide Marco Island beach view" },
  { src: "https://g.tlcdn.com/view/12ab236328ae4c3dab1fa4eaa1af1f04.jpg", alt: "Great room" },
  { src: "https://g.tlcdn.com/view/54e0528dbb1e44e0b1ad7d32044a7e0d.jpg", alt: "View from front" },
  { src: "https://g.tlcdn.com/view/4a890f4733e248cd833c97aa20f0dc80.jpg", alt: "Kitchen with desk area" },
  { src: "https://g.tlcdn.com/view/65a9734ee4de423eb57b221fb346d4cc.jpg", alt: "Kitchen" },
  { src: "https://g.tlcdn.com/view/78ecf9df05f64a39aa21e51d345bbc83.jpg", alt: "Kitchen view 2" },
  { src: "https://g.tlcdn.com/view/e0a169f96dc6493999db1c9be72b1d8e.jpg", alt: "Dining area and kitchen" },
  { src: "https://g.tlcdn.com/view/e3857932f43d483da46180cbc52809b0.jpg", alt: "Custom mirror wall" },
  { src: "https://g.tlcdn.com/view/9e61a5afb1b847e68fb361c011928ade.jpg", alt: "Great room, second view" },
  { src: "https://g.tlcdn.com/view/20804224b7554ec2b70f7bd1eb26ab03.jpg", alt: "Primary bedroom" },
  { src: "https://g.tlcdn.com/view/d00c9dd77d60463d84d6ff8fc909f342.jpg", alt: "Primary bedroom, second view" },
  { src: "https://g.tlcdn.com/view/6e25269875264e24a51bad3124218fd2.jpg", alt: "Primary bathroom" },
  { src: "https://g.tlcdn.com/view/899ee6fd59dc4a2fa91ea8cbe9ecbef3.jpg", alt: "Guest bedroom" },
  { src: "https://g.tlcdn.com/view/cfd8bb50779f41fa81eb7535164e38f4.jpg", alt: "Guest bedroom, second view" },
  { src: "https://g.tlcdn.com/view/7a7e6d2343e14360991899620feb02a3.jpg", alt: "Guest bathroom" },
  { src: "https://g.tlcdn.com/view/c10a701078e448059bf8aeb9e7659ef2.jpg", alt: "Community pool" },
  { src: "https://g.tlcdn.com/view/f8ee15a8473e4f89af92b48628686967.jpg", alt: "Beachside picnic areas" },
  { src: "https://g.tlcdn.com/view/c5f8b4273f0a437ea386d210ff8b4bab.jpg", alt: "Tennis and sports courts" },
  { src: "https://g.tlcdn.com/view/06e1906bbc6b48feb97a6ee20583181c.jpg", alt: "Admiralty building located right on the beach" },
];

const heroPhotos = photos.slice(0, 5);

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
        .hero-slide { opacity: 0; animation: heroFade 20s infinite; }
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

      {/* Gallery */}
      <section id="gallery" className="bg-white px-6 py-16 md:px-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Photo Gallery
          </p>
          <h2 className="mt-2 font-serif text-3xl text-slate-900 md:text-4xl">
            See the Admiralty and unit #206S
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="relative h-32 w-full overflow-hidden rounded-xl sm:h-40"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 280px, 45vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
        <p className="mt-10 text-xs text-white/40">
          &copy; {new Date().getFullYear()} Manuela Realty International.
          All information deemed reliable but not guaranteed.
        </p>
      </section>
    </main>
  );
}
