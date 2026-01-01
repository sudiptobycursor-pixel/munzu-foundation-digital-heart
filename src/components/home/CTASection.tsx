import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const CTASection = () => {
  const { t } = useLanguage();

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
            <h3 className="heading-section text-foreground">{t.cta.donateTitle}</h3>
            <p className="text-muted-foreground mb-8">
              {t.cta.donateText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/donate">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  {t.nav.donateNow}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {t.cta.learnHow}
                </Button>
              </Link>
            </div>
          </div>

          {/* Volunteer Card */}
          <div className="card-elevated p-8 md:p-12 text-center lg:text-left bg-primary text-primary-foreground">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="heading-section">{t.cta.volunteerTitle}</h3>
            <p className="text-primary-foreground/80 mb-8">
              {t.cta.volunteerText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/volunteer">
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  {t.cta.becomeVolunteer}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {t.cta.meetTeam}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
