import Hero from "@/components/hero/Hero";
import BrandStatement from "@/components/brand/BrandStatement";
import FeaturedStory from "@/components/stories/FeaturedStory";
import BuildersRadar from "@/components/builders/BuildersRadar";
import StartupsShowcase from "@/components/startups/StartupsShowcase";
import FounderDrop from "@/components/founder-drops/FounderDrop";
import BuilderJourney from "@/components/journey/BuilderJourney";
import Discovery from "@/components/discovery/Discovery";
import AfricaBuilding from "@/components/ecosystem/AfricaBuilding";
import JoinTheLens from "@/components/cta/JoinTheLens";
import Newsletter from "@/components/newsletter/Newsletter";

function SectionDivider() {
  return (
    <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-8 sm:py-14 flex items-center justify-center pointer-events-none">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-tsl-dark-grey to-transparent relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-tsl-black border border-tsl-blue/50 rotate-45" />
      </div>
    </div>
  );
}

export default function MarketingHomePage() {
  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pb-20 sm:pb-32">
      <Hero />
      <SectionDivider />
      <BrandStatement />
      <SectionDivider />
      <FeaturedStory />
      <SectionDivider />
      <BuildersRadar />
      <SectionDivider />
      <StartupsShowcase />
      <SectionDivider />
      <FounderDrop />
      <SectionDivider />
      <BuilderJourney />
      <SectionDivider />
      <Discovery />
      <SectionDivider />
      <AfricaBuilding />
      <SectionDivider />
      <JoinTheLens />
      <SectionDivider />
      <Newsletter />
    </main>
  );
}
