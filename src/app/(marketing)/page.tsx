import Hero from "@/components/hero/Hero";
import BrandStatement from "@/components/brand/BrandStatement";
import TheLens from "@/components/home/TheLens";
import OnTheRadar from "@/components/home/OnTheRadar";
import BeforeTheSuccessStory from "@/components/home/BeforeTheSuccessStory";
import AfricaBuilding from "@/components/ecosystem/AfricaBuilding";
import JoinTheLens from "@/components/cta/JoinTheLens";

function SectionDivider() {
  return (
    <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-8 sm:py-12 flex items-center justify-center pointer-events-none">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-tsl-dark-grey/70 to-transparent relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-tsl-black border border-tsl-blue/50 rotate-45" />
      </div>
    </div>
  );
}

export default function MarketingHomePage() {
  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white">
      {/* 1. HERO */}
      <Hero />

      {/* 2. POSITIONING */}
      <BrandStatement />

      {/* 3. THE LENS (Featured Story + Supporting Founder Drop) */}
      <TheLens />

      {/* 4. ON THE RADAR (Curated Builders & Startups Preview with Toggle) */}
      <OnTheRadar />

      {/* 5. BEFORE THE SUCCESS STORY (Compact Visual Timeline) */}
      <BeforeTheSuccessStory />

      {/* 6. AFRICA IS BUILDING (Continental Momentum & Discovery CTA) */}
      <AfricaBuilding />

      {/* Spacing & Accent Transition before Final Conversion */}
      <SectionDivider />

      {/* 7. JOIN THE LENS (Primary Conversion Moment) */}
      <JoinTheLens />
    </main>
  );
}
