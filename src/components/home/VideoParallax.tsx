import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import parallaxVillage from "@/assets/parallax-village.jpg";

export const VideoParallax = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / window.innerHeight;
        setScrollY(scrollProgress * 50);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] md:h-[80vh] overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] transition-transform duration-100"
        style={{ transform: `translateY(${scrollY}px)` }}
      >
        <img
          src={parallaxVillage}
          alt="Bangladesh village landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Decorative Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-8 h-8 text-accent" />
          </div>
        </div>

        {/* Title */}
        <h2
          className="heading-section text-primary-foreground mb-4 max-w-3xl"
          style={{ textShadow: "var(--text-shadow)" }}
        >
          {t.gallery.videoBadge}
        </h2>

        <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
          {t.gallery.videoTitle}
        </p>

        {/* Video Play Button */}
        <Button
          variant="hero"
          size="xl"
          className="group"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5" />
              {language === "bn" ? "বিরতি" : "Pause"}
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              {t.hero.watchStory}
            </>
          )}
        </Button>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float delay-500" />
    </section>
  );
};
