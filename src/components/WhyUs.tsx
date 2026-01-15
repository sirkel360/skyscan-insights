import { CheckCircle, Clock, Target, Award, Users, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Precision Accuracy",
    description: "Sub-centimeter accuracy with advanced GPS and LiDAR technology for reliable data every time.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Get your survey data and reports within 24-48 hours. Rush delivery available for urgent projects.",
  },
  {
    icon: Award,
    title: "Certified Pilots",
    description: "FAA Part 107 certified pilots with extensive experience across all industry applications.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "A dedicated project manager for every engagement to ensure seamless communication.",
  },
  {
    icon: CheckCircle,
    title: "Compliance Guaranteed",
    description: "Full regulatory compliance with all local, state, and federal aviation requirements.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Availability",
    description: "Emergency response capability for storm damage, accidents, and time-sensitive inspections.",
  },
];

const stats = [
  { value: "10K+", label: "Surveys Completed" },
  { value: "99.9%", label: "Accuracy Rate" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "24hrs", label: "Avg. Turnaround" },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 gradient-radial">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="text-gradient">Trusted Partner</span> for Aerial Intelligence
          </h2>
          <p className="text-muted-foreground text-lg">
            Industry leaders choose us for our commitment to accuracy, speed, and exceptional service.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
