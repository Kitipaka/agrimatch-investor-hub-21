import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MoroccoFloodImpactSection from "@/components/MoroccoFloodImpactSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductSection from "@/components/ProductSection";
import EcosystemSection from "@/components/EcosystemSection";
import WhyNowSection from "@/components/WhyNowSection";
import MarketSection from "@/components/MarketSection";
import BusinessModelSection from "@/components/BusinessModelSection";
import TractionSection from "@/components/TractionSection";
import CompetitionSection from "@/components/CompetitionSection";
import TeamSection from "@/components/TeamSection";
import VisionSection from "@/components/VisionSection";
import FundraisingSection from "@/components/FundraisingSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <MoroccoFloodImpactSection />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <ProductSection />
    <EcosystemSection />
    <WhyNowSection />
    <MarketSection />
    <BusinessModelSection />
    <TractionSection />
    <CompetitionSection />
    <TeamSection />
    <VisionSection />
    <FundraisingSection />
    <Footer />
  </div>
);

export default Index;
