import type { Metadata } from "next";
import AboutScrollProgress from "@/components/about/AboutScrollProgress";
import AboutHero from "@/components/about/AboutHero";
import WhatWereNot from "@/components/about/WhatWereNot";
import WhatWeAre from "@/components/about/WhatWeAre";
import MissionSection from "@/components/about/MissionSection";
import VisionSection from "@/components/about/VisionSection";
import HowWeOperate from "@/components/about/HowWeOperate";
import LensSection from "@/components/about/LensSection";
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
    <main className="min-h-screen bg-tsl-black text-tsl-white relative">
      {/* Scroll Reading Progress & Mobile Sticky CTA */}
      <AboutScrollProgress />

      {/* 1. HERO */}
      <AboutHero />

      {/* 2. WHAT WE'RE NOT */}
      <WhatWereNot />

      {/* 3. WHAT WE ARE */}
      <WhatWeAre />

      {/* 4. OUR MISSION */}
      <MissionSection />

      {/* 5. OUR VISION */}
      <VisionSection />

      {/* 6. HOW WE OPERATE */}
      <HowWeOperate />

      {/* 7. THE LENS */}
      <LensSection />

      {/* 8. WHAT WE'RE BUILDING */}
      <PlatformVision />

      {/* 9. WHY AFRICA */}
      <WhyAfrica />

      {/* 10. JOIN THE LENS */}
      <AboutJoinLens />
    </main>
  );
}
