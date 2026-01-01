import { useEffect, useRef, useState } from "react";
import { Users, Home, HeartHandshake, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration, start]);

  return count;
};

export const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: 15000, suffix: "+", label: t.impact.peopleHelped, color: "text-primary" },
    { icon: Home, value: 50, suffix: "+", label: t.impact.projectsCompleted, color: "text-accent" },
    { icon: HeartHandshake, value: 200, suffix: "+", label: t.impact.activeVolunteers, color: "text-primary" },
    { icon: Briefcase, value: 12, suffix: "", label: t.impact.districtsCovered, color: "text-accent" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-primary-foreground text-sm font-medium mb-4">
            {t.impact.badge}
          </span>
          <h2 className="heading-section text-primary-foreground">
            {t.impact.title}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            {t.impact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, 2000, isVisible);
            return (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-500 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <stat.icon className={`w-8 h-8 ${stat.color === "text-primary" ? "text-accent" : "text-primary-foreground"}`} />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {count.toLocaleString()}{stat.suffix}
                </p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
