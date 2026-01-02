import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import sliderEducation from "@/assets/slider-education.jpg";
import sliderFood from "@/assets/slider-food.jpg";
import sliderWomen from "@/assets/slider-women.jpg";
import sliderMedical from "@/assets/slider-medical.jpg";

const slides = [
  {
    image: sliderEducation,
    titleKey: "education" as const,
    subtitleKey: "educationDesc" as const,
  },
  {
    image: sliderFood,
    titleKey: "food" as const,
    subtitleKey: "foodDesc" as const,
  },
  {
    image: sliderWomen,
    titleKey: "women" as const,
    subtitleKey: "womenDesc" as const,
  },
  {
    image: sliderMedical,
    titleKey: "medical" as const,
    subtitleKey: "medicalDesc" as const,
  },
];

export const HeroSlider = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={t.programs[slide.titleKey]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/80" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container-custom flex items-center min-h-screen py-32">
        <div className="max-w-3xl space-y-8">
          {/* Badge */}
          <div
            className={`transition-all duration-700 ${
              !isTransitioning ? "animate-fade-in-down" : "opacity-0"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium border border-primary-foreground/20 text-primary-foreground">
              {t.hero.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`heading-display text-primary-foreground transition-all duration-700 delay-100 ${
              !isTransitioning ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
            style={{ textShadow: "var(--text-shadow)" }}
          >
            {t.programs[slides[currentSlide].titleKey]}
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg md:text-xl text-primary-foreground/80 max-w-2xl transition-all duration-700 delay-200 ${
              !isTransitioning ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            {t.programs[slides[currentSlide].subtitleKey]}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
              !isTransitioning ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <Link to="/donate">
              <Button variant="hero" size="xl" className="group animate-pulse-glow">
                {t.nav.donateNow}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="heroOutline" size="xl">
                {t.programs.viewAll}
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-400 ${
              !isTransitioning ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {[
              { value: "15K+", label: t.hero.livesImpacted },
              { value: "50+", label: t.hero.projectsCompleted },
              { value: "200+", label: t.hero.volunteers },
              { value: "12", label: t.hero.districtsReached },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 800);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-accent"
                : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-primary-foreground">
          <pattern id="hero-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
            <circle cx="10" cy="10" r="1.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
    </section>
  );
};
