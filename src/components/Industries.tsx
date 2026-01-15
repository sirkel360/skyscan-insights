import { Building, Tractor, Zap, Shield, Construction, Waves } from "lucide-react";

const industries = [
  {
    icon: Shield,
    name: "Insurance",
    description: "Fast claims processing with accurate damage documentation and risk assessment.",
  },
  {
    icon: Construction,
    name: "Construction",
    description: "Site surveys, progress monitoring, and volume calculations for construction projects.",
  },
  {
    icon: Tractor,
    name: "Agriculture",
    description: "Crop health monitoring, irrigation planning, and yield optimization through aerial analysis.",
  },
  {
    icon: Zap,
    name: "Utilities",
    description: "Power line inspection, pipeline monitoring, and infrastructure assessment.",
  },
  {
    icon: Building,
    name: "Real Estate",
    description: "Property surveys, 3D modeling, and marketing imagery for real estate professionals.",
  },
  {
    icon: Waves,
    name: "Environmental",
    description: "Wetland mapping, erosion monitoring, and environmental impact assessments.",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tailored Solutions for <span className="text-gradient">Every Sector</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We understand the unique requirements of each industry and deliver specialized aerial data solutions.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center hover:glow-sm"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
              <p className="text-muted-foreground text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
