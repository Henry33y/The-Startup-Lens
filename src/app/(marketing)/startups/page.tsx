import type { Metadata } from "next";
import StartupsDirectory from "@/components/startups/StartupsDirectory";

export const metadata: Metadata = {
  title: "Startup Directory • The Stories Shaping Africa | The Startup Lens",
  description:
    "Discover the human grit, everyday realities, and relatable problems African founders are tackling across Accra, Lagos, Nairobi, Tunis, and Kigali.",
  openGraph: {
    title: "Startup Directory • Stories from the Ground | The Startup Lens",
    description:
      "Discover the human stories, everyday realities, and relatable problems African founders are tackling before everyone else catches on.",
    url: "https://thestartuplens.com/startups",
    siteName: "The Startup Lens",
    images: [
      {
        url: "/logos/TheStartUPLens-Logo-white.png",
        width: 1200,
        height: 630,
        alt: "The Startup Lens — Startups Directory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Directory • The Startup Lens",
    description: "Discover the human grit and everyday realities behind African startups.",
    images: ["/logos/TheStartUPLens-Logo-white.png"],
  },
};

export default function StartupsPage() {
  return (
    <main className="min-h-screen bg-[#07080B] text-slate-100">
      <StartupsDirectory />
    </main>
  );
}
