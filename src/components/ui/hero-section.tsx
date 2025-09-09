import { Button } from "./button";
import { MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/cafe-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cozy coffee shop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
          Where Coffee Meets
          <span className="block text-accent">Community</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Experience the perfect blend of artisan coffee, fresh pastries, and genuine connections 
          in the heart of your neighborhood.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="btn-hero text-lg px-8 py-4">
            Explore Our Menu
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg">
            Our Story
          </Button>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80">
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span className="font-medium">Downtown Heritage District</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span className="font-medium">Open Daily 6:30 AM - 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;