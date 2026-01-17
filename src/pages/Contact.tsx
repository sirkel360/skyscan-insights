import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MapPin } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get a <span className="text-primary">Quote</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Contact our regional teams for personalized aerial surveying solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Southern California */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Southern California</h2>
              <p className="text-muted-foreground mb-6">
                Serving Los Angeles, San Diego, Orange County, and surrounding areas
              </p>
              <a href="tel:+18188233924" className="inline-flex items-center gap-3 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                <Phone className="w-6 h-6" />
                (818) 823-3924
              </a>
            </div>

            {/* Midwest Region */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Midwest Region</h2>
              <p className="text-muted-foreground mb-6">Serving Missouri, Kansas, and surrounding states</p>
              <a href="tel:+19292315479" className="inline-flex items-center gap-3 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                <Phone className="w-6 h-6" />
                (929) 231-5479
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Not sure which region covers your area?{" "}
              <a href="mailto:info@onyxview.com" className="text-primary hover:underline">
                Email us
              </a>{" "}
              and we'll connect you with the right team.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Contact;