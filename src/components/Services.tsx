import { Search, MapPin, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Aerial Inspections",
    description: "Comprehensive drone-based inspections for roofs, infrastructure, and industrial assets. Identify damage, wear, and safety hazards with millimeter precision.",
    features: ["Roof & Building Inspections", "Infrastructure Assessment", "Safety Compliance Audits"],
  },
  {
    icon: MapPin,
    title: "Land Surveying",
    description: "High-accuracy topographic mapping and land surveys using advanced LiDAR and photogrammetry. Get precise measurements for any terrain.",
    features: ["Topographic Mapping", "Boundary Surveys", "Volume Calculations"],
  },
  {
    icon: Shield,
    title: "Insurance Claims",
    description: "Fast, accurate damage assessment for insurance claims. We provide detailed reports with visual evidence to expedite claim processing.",
    features: ["Storm Damage Assessment", "Property Documentation", "Claims Support Reports"],
  },
  {
    icon: Zap,
    title: "Asset Monitoring",
    description: "Regular aerial monitoring of assets and properties. Track changes over time with automated comparison and alert systems.",
    features: ["Progress Tracking", "Change Detection", "Scheduled Flyovers"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 gradient-radial">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Aerial <span className="text-gradient">Survey Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From precision inspections to large-scale mapping, we deliver the data you need to make informed decisions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
