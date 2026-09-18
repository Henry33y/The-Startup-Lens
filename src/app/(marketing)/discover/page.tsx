import type { Metadata } from "next";
import { DEMO_BUILDERS } from "@/data/demo/builders";
import { DEMO_STARTUPS } from "@/data/demo/startups";
import { DEMO_STORIES } from "@/data/demo/stories";
import DiscoveryClient from "@/components/discovery/DiscoveryClient";

export const metadata: Metadata = {
  title: "Discovery | The Startup Lens — Look Closer",
  description:
    "Discover the builders, startups, stories and ideas shaping Africa. Explore emerging African founders and raw startup progress before everyone else catches on.",
  openGraph: {
    title: "Discovery | The Startup Lens — Look Closer",
    description:
      "Discover the builders, startups, stories and ideas shaping Africa. Explore emerging African founders and raw startup progress.",
    url: "https://thestartuplens.com/discover",
    siteName: "The Startup Lens",
    images: [
      {
        url: "/logos/TheStartUPLens-Logo-white.png",
        width: 1200,
        height: 630,
        alt: "The Startup Lens — Discovery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discovery | The Startup Lens — Look Closer",
    description:
      "Discover the builders, startups, stories and ideas shaping Africa.",
    images: ["/logos/TheStartUPLens-Logo-white.png"],
  },
};

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white">
      <DiscoveryClient
        builders={DEMO_BUILDERS}
        startups={DEMO_STARTUPS}
        stories={DEMO_STORIES}
      />
    </main>
  );
}
