import type { Metadata } from "next";
import "./globals.css";

const title =
  "140 Seaview Ct #206S, Marco Island, FL | Admiralty Beachfront Condo For Sale";
const description =
  "Turnkey 2 bed, 2 bath beachfront condo at the Admiralty, 140 Seaview Ct #206S, Marco Island. Impact windows & doors, pool, tennis, covered parking. $659,000. MLS #2261033.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "140 Seaview Ct Marco Island",
    "Admiralty Marco Island condo",
    "Marco Island beachfront condo for sale",
    "Marco Island real estate",
    "Manuela Schinagl",
  ],
  openGraph: {
    title,
    description,
    images: [
      "https://g.tlcdn.com/view/ac93c1101d874040922e26e1302b00d0.jpg",
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://g.tlcdn.com/view/ac93c1101d874040922e26e1302b00d0.jpg"],
  },
  robots: { index: true, follow: true },
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
    image: "https://g.tlcdn.com/view/ac93c1101d874040922e26e1302b00d0.jpg",
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
    additionalProperty: [
      { "@type": "PropertyValue", name: "MLS Number", value: "2261033" },
      { "@type": "PropertyValue", name: "Price", value: "$659,000" },
    ],
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
