import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";
import heroImage from "@/assets/hero-aerial.jpg";

const Hero = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      {showDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-[90vw] h-[85vh] rounded-lg overflow-hidden border border-border shadow-2xl">
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <iframe
              src="/drone-demo.html"
              className="w-full h-full border-0"
              title="Drone Inspection Demo"
            />
          </div>
        </div>
      )}
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Aerial drone surveying landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Precision Aerial Intelligence</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Transforming <span className="text-gradient">Aerial Data</span> Into Actionable Insights
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Industry-leading drone surveying and inspection services for insurance, construction, agriculture, and utilities. Accurate data. Faster decisions. Lower costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Request a Demo
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => setShowDemo(true)}>
              <Play className="mr-2" />
              Watch How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap gap-8 items-center opacity-60">
              <span className="text-lg font-semibold text-foreground">Insurance Co.</span>
              <span className="text-lg font-semibold text-foreground">AgriTech Ltd.</span>
              <span className="text-lg font-semibold text-foreground">PowerGrid Inc.</span>
              <span className="text-lg font-semibold text-foreground">BuildWell</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
    </>
  );
};

export default Hero;
