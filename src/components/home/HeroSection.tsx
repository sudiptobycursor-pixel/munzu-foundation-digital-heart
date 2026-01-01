import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Volunteers working together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="animate-fade-in-down">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              🌱 Creating Hope, Changing Lives
            </span>
          </div>

          {/* Heading */}
          <h1 className="heading-display animate-fade-in-up delay-100" style={{ textShadow: "var(--text-shadow)" }}>
            Empowering Communities,{" "}
            <span className="text-accent">Building Futures</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Munzu Foundation is dedicated to creating sustainable change through education, healthcare, and community development programs across Bangladesh.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Link to="/donate">
              <Button variant="hero" size="xl" className="group animate-pulse-glow">
                Donate Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Watch Our Story
              </Button>
            </Link>
          </div>

          {/* Stats Preview */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-400">
            {[
              { value: "15K+", label: "Lives Impacted" },
              { value: "50+", label: "Projects Completed" },
              { value: "200+", label: "Volunteers" },
              { value: "12", label: "Districts Reached" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-fade-in-up" />
        </div>
      </div>
    </section>
  );
};
