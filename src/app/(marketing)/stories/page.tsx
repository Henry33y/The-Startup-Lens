import type { Metadata } from "next";
import { DEMO_STORIES } from "@/data/demo/stories";
import StoriesHero from "@/components/stories/StoriesHero";
import FeaturedStory from "@/components/stories/FeaturedStory";
import StoryFeed from "@/components/stories/StoryFeed";
import StoriesJoinCTA from "@/components/stories/StoriesJoinCTA";

export const metadata: Metadata = {
  title: "Stories from the Build | The Startup Lens",
  description:
    "The people, ideas, experiments and lessons behind Africa's emerging startups. Read authentic accounts of building early-stage companies across the continent.",
  openGraph: {
    title: "Stories from the Build | The Startup Lens",
    description:
      "The people, ideas, experiments and lessons behind Africa's emerging startups.",
    url: "https://thestartuplens.com/stories",
    siteName: "The Startup Lens",
    images: [
      {
        url: "/logos/TheStartUPLens-Logo-white.png",
        width: 1200,
        height: 630,
        alt: "The Startup Lens — Stories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories from the Build | The Startup Lens",
    description:
      "The people, ideas, experiments and lessons behind Africa's emerging startups.",
    images: ["/logos/TheStartUPLens-Logo-white.png"],
  },
};

export default function StoriesListingPage() {
  const featuredStory = DEMO_STORIES.find((s) => s.featured) || DEMO_STORIES[0];
  const latestStories = DEMO_STORIES.filter((s) => s.id !== featuredStory.id);

  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white">
      {/* 1. HERO */}
      <StoriesHero />

      {/* 2. FEATURED STORY (Magazine Centerpiece) */}
      <FeaturedStory story={featuredStory} />

      {/* 3 & 4. STORY CATEGORIES & LATEST STORIES (Varied Editorial Grid) */}
      <StoryFeed stories={latestStories} />

      {/* 5. JOIN THE LENS CTA */}
      <StoriesJoinCTA />
    </main>
  );
}
