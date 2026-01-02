import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Building, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import communityTogether from "@/assets/community-together.jpg";

export const JoinUsSection = () => {
  const { t, language } = useLanguage();

  const actions = [
    {
      icon: Heart,
      titleBn: "নিয়মিত দান",
      titleEn: "Regular Giving",
      color: "bg-accent",
      link: "/donate",
    },
    {
      icon: Users,
      titleBn: "স্বেচ্ছাসেবক ও দলে যোগ দিন",
      titleEn: "Volunteer & Join Team",
      color: "bg-primary",
      link: "/volunteer",
    },
    {
      icon: Building,
      titleBn: "কর্পোরেট",
      titleEn: "Corporate",
      color: "bg-purple-600",
      link: "/contact",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <img
          src={communityTogether}
          alt="Community together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-primary-foreground/20">
              💚 {language === "bn" ? "আমাদের সাথে যুক্ত হোন" : "Join With Us"}
            </span>
            <h2 className="heading-section mb-6" style={{ textShadow: "var(--text-shadow)" }}>
              {language === "bn" 
                ? "আমাদের সাথে যুক্ত হয়ে পরিবর্তনের অংশ হন" 
                : "Be Part of the Change with Us"}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              {t.common.readyText}
            </p>
            <Link to="/volunteer">
              <Button variant="hero" size="xl" className="group">
                {t.cta.becomeVolunteer}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Action Cards */}
          <div className="space-y-4">
            {actions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className="block group"
              >
                <div className="flex items-center gap-6 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 hover:translate-x-2">
                  <div className={`w-16 h-16 ${action.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary-foreground">
                      {language === "bn" ? action.titleBn : action.titleEn}
                    </h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary-foreground/60 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
