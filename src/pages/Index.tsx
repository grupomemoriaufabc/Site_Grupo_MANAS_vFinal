import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ResearchAreas from "@/components/ResearchAreas";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ResearchAreas />
      <Footer />
    </div>
  );
};

export default Index;
