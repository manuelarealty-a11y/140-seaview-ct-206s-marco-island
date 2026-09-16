"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const photos = [
  { src: "https://g.tlcdn.com/view/cf93e4640de441e4874b6bb3a2451998.jpg", alt: "Amazing waterfront aerial view of the Admiralty" },
  { src: "https://g.tlcdn.com/view/4c521b6e98a94055ba2565f5666ba9a4.jpg", alt: "Wide Marco Island beach view" },
  { src: "https://g.tlcdn.com/view/429f4ba7ab3548a7a1f06ccbe36a2156.jpg", alt: "Great room" },
  { src: "https://g.tlcdn.com/view/b8fdfe5fbc76463c8a006788af334c45.jpg", alt: "Admiralty building located right on the beach" },
  { src: "https://g.tlcdn.com/view/bd89d5b9200c423d83d937cd5bac6659.jpg", alt: "Primary bedroom" },
  { src: "https://g.tlcdn.com/view/c3b1f78e749742daa19cb42e2ddfced0.jpg", alt: "Primary bedroom, second view" },
  { src: "https://g.tlcdn.com/view/bd3af9c8687f438e842a791e5fda7145.jpg", alt: "Comfortable floor plan / great room" },
  { src: "https://g.tlcdn.com/view/470d4915b46249c49f089b12b16422db.jpg", alt: "Kitchen with desk area" },
  { src: "https://g.tlcdn.com/view/65744e14d4b04ad5b4d18e679d5778e0.jpg", alt: "Kitchen" },
  { src: "https://g.tlcdn.com/view/42ec0bdfcc43436e9fa6982595b4f3cb.jpg", alt: "Lanai off of main living area" },
  { src: "https://g.tlcdn.com/view/f9c72093ae9c4c5cb825e53f710e2d01.jpg", alt: "Lanai off of primary bedroom" },
  { src: "https://g.tlcdn.com/view/7ade6a186e2e41b8b53ef9efb42a8707.jpg", alt: "Guest bedroom" },
  { src: "https://g.tlcdn.com/view/be02de96ab444391a8961dd907962fa8.jpg", alt: "Guest bathroom" },
  { src: "https://g.tlcdn.com/view/457bb8029a7a4e478970855928cf2dfd.jpg", alt: "Community pool" },
  { src: "https://g.tlcdn.com/view/d5ce4a52b4a5474f98d81726ed6203e9.jpg", alt: "Tennis and sports courts" },
];

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <section id="gallery" className="bg-white px-6 py-16 md:px-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Photo Gallery
        </p>
        <h2 className="mt-2 font-serif text-3xl text-slate-900 md:text-4xl">
          See the Admiralty and unit #206S
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setOpenIndex(i)}
              className="relative h-32 w-full overflow-hidden rounded-xl sm:h-40"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 280px, 45vw"
                className="object-cover transition duration-300 hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
          onClick={close}
        >
          <button
            className="absolute right-6 top-6 text-white"
            onClick={close}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            className="absolute left-4 text-white md:left-10"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <div className="relative h-[85vh] w-[90vw]">
            <Image
              src={photos[openIndex].src}
              alt={photos[openIndex].alt}
              fill
              sizes="90vw"
              className="rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            className="absolute right-4 text-white md:right-10"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </section>
  );
}
