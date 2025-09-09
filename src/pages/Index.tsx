import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import MenuSection from "@/components/ui/menu-section";
import AboutSection from "@/components/ui/about-section";
import LocationSection from "@/components/ui/location-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
