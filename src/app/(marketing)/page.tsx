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

export default function MarketingHomePage() {
  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white">
      <Hero />
      <BrandStatement />
      <FeaturedStory />
      <BuildersRadar />
      <StartupsShowcase />
      <FounderDrop />
      <BuilderJourney />
      <Discovery />
      <AfricaBuilding />
      <JoinTheLens />
      <Newsletter />
    </main>
  );
}
