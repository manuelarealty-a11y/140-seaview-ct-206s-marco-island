import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://admiralty206s.com";
const title =
  "140 Seaview Ct #206S, Marco Island, FL | Admiralty Beachfront Condo For Sale";
const description =
  "Turnkey 2 bed, 2 bath beachfront condo at the Admiralty, 140 Seaview Ct #206S, Marco Island. Impact windows & doors, pool, tennis, covered parking. $659,000. MLS #2261033.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "140 Seaview Ct Marco Island",
    "Admiralty Marco Island condo",
    "Marco Island beachfront condo for sale",
    "Marco Island real estate",
    "Manuela Schinagl",
  ],
  authors: [{ name: "Manuela Schinagl" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "140 Seaview Ct #206S, The Admiralty",
    images: [
      {
        url: "https://g.tlcdn.com/view/cf93e4640de441e4874b6bb3a2451998.jpg",
        width: 4200,
        height: 2363,
        alt: "140 Seaview Ct #206S — Admiralty aerial waterfront view",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://g.tlcdn.com/view/cf93e4640de441e4874b6bb3a2451998.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Marco Island",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: "140 Seaview Ct #206S, Admiralty, Marco Island, FL",
    description,
    url: siteUrl,
    image: "https://g.tlcdn.com/view/cf93e4640de441e4874b6bb3a2451998.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "140 Seaview Ct #206S",
      addressLocality: "Marco Island",
      addressRegion: "FL",
      postalCode: "34145",
      addressCountry: "US",
    },
    numberOfRooms: 2,
    numberOfBathroomsTotal: 2,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Direct beach access", value: true },
      { "@type": "LocationFeatureSpecification", name: "Community pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Tennis / sports courts", value: true },
      { "@type": "LocationFeatureSpecification", name: "Impact windows and storm shutters", value: true },
    ],
    additionalProperty: [
      { "@type": "PropertyValue", name: "MLS Number", value: "2261033" },
      { "@type": "PropertyValue", name: "Price", value: "$659,000" },
    ],
    broker: {
      "@type": "RealEstateAgent",
      name: "Manuela Schinagl",
      worksFor: "Manuela Realty International",
      telephone: "+1-239-450-5622",
      email: "manuelarealty@gmail.com",
      url: "https://www.naplesrealestate.sale",
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
