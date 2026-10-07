import type { Metadata } from "next";
import StartupsShowcase from "@/components/startups/StartupsShowcase";

export const metadata: Metadata = {
  title: "Startup Index | The Startup Lens",
  description:
    "Explore early-stage African technological ventures across AI, Fintech, Health, Agriculture, Climate, and EdTech before everyone else catches on.",
  openGraph: {
    title: "Startup Index | The Startup Lens",
    description:
      "Explore early-stage African technological ventures across AI, Fintech, Health, Agriculture, Climate, and EdTech.",
    url: "https://thestartuplens.com/startups",
    siteName: "The Startup Lens",
    images: [
      {
        url: "/logos/TheStartUPLens-Logo-white.png",
        width: 1200,
        height: 630,
        alt: "The Startup Lens — Startups",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Index | The Startup Lens",
    description: "Explore early-stage African technological ventures.",
    images: ["/logos/TheStartUPLens-Logo-white.png"],
  },
};

export default function StartupsPage() {
  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white">
      <StartupsShowcase />
    </main>
  );
}
