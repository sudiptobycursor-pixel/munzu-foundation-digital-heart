import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Donate Card */}
          <div className="card-elevated p-8 md:p-12 text-center lg:text-left">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="heading-section text-foreground">Make a Donation</h3>
            <p className="text-muted-foreground mb-8">
              Your generosity can transform lives. Every contribution, no matter the size, helps us continue our mission of creating lasting change in communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/donate">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Donate Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn How Your Gift Helps
                </Button>
              </Link>
            </div>
          </div>

          {/* Volunteer Card */}
          <div className="card-elevated p-8 md:p-12 text-center lg:text-left bg-primary text-primary-foreground">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="heading-section">Join Our Team</h3>
            <p className="text-primary-foreground/80 mb-8">
              Become a volunteer and be part of something bigger. Share your skills, time, and passion to help those in need and make a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/volunteer">
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  Become a Volunteer
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
