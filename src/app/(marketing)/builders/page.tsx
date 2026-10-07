import type { Metadata } from "next";
import { DEMO_BUILDERS } from "@/data/demo/builders";
import BuildersDirectoryClient from "@/components/builders/BuildersDirectoryClient";

export const metadata: Metadata = {
  title: "Builders on Radar | The Startup Lens",
  description:
    "Discover emerging African founders, engineers, and operators building the next generation of technological infrastructure before everyone else catches on.",
  openGraph: {
    title: "Builders on Radar | The Startup Lens",
    description:
      "Discover emerging African founders, engineers, and operators building the next generation of tech.",
    url: "https://thestartuplens.com/builders",
    siteName: "The Startup Lens",
    images: [
      {
        url: "/logos/TheStartUPLens-Logo-white.png",
        width: 1200,
        height: 630,
        alt: "The Startup Lens — Builders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Builders on Radar | The Startup Lens",
    description: "Discover emerging African founders and operators.",
    images: ["/logos/TheStartUPLens-Logo-white.png"],
  },
};

export default function BuildersPage() {
  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white">
      <BuildersDirectoryClient initialBuilders={DEMO_BUILDERS} />
    </main>
  );
}
