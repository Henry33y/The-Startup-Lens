import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import WhatWereNot from "@/components/about/WhatWereNot";
import WhatWeAre from "@/components/about/WhatWeAre";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import HowWeDoIt from "@/components/about/HowWeDoIt";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import PlatformVision from "@/components/about/PlatformVision";
import WhyAfrica from "@/components/about/WhyAfrica";
import AboutJoinLens from "@/components/about/AboutJoinLens";

export const metadata: Metadata = {
  title: "The Startup Lens | About",
  description:
    "Discover what The Startup Lens is, why it exists, and how we're helping make Africa's builders more visible.",
  openGraph: {
    title: "The Startup Lens | About",
    description:
      "Discover what The Startup Lens is, why it exists, and how we're helping make Africa's builders more visible.",
    url: "https://thestartuplens.com/about",
    siteName: "The Startup Lens",
    images: [
      {
        url: "/logos/TheStartUPLens-Logo-white.png",
        width: 1200,
        height: 630,
        alt: "The Startup Lens — About",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Startup Lens | About",
    description:
      "Discover what The Startup Lens is, why it exists, and how we're helping make Africa's builders more visible.",
    images: ["/logos/TheStartUPLens-Logo-white.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white">
      {/* 1. HERO */}
      <AboutHero />

      {/* 2. WHAT WE'RE NOT */}
      <WhatWereNot />

      {/* 3. WHAT WE ARE */}
      <WhatWeAre />

      {/* 4 & 5. MISSION & VISION */}
      <MissionVisionSection />

      {/* 6. HOW WE DO IT */}
      <HowWeDoIt />

      {/* 7. WHAT MAKES US DIFFERENT */}
      <WhatMakesUsDifferent />

      {/* 8. WHAT WE'RE BUILDING */}
      <PlatformVision />

      {/* 9. WHY AFRICA */}
      <WhyAfrica />

      {/* 10. JOIN THE LENS */}
      <AboutJoinLens />
    </main>
  );
}
