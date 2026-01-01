import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Utensils, Stethoscope, Users } from "lucide-react";
import educationImage from "@/assets/education-program.jpg";
import foodImage from "@/assets/food-distribution.jpg";
import medicalImage from "@/assets/medical-assistance.jpg";
import womenImage from "@/assets/women-development.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const ProgramsPreview = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: GraduationCap,
      title: t.programs.education,
      description: t.programs.educationDesc,
      image: educationImage,
      color: "bg-blue-500",
    },
    {
      icon: Utensils,
      title: t.programs.food,
      description: t.programs.foodDesc,
      image: foodImage,
      color: "bg-orange-500",
    },
    {
      icon: Stethoscope,
      title: t.programs.medical,
      description: t.programs.medicalDesc,
      image: medicalImage,
      color: "bg-red-500",
    },
    {
      icon: Users,
      title: t.programs.women,
      description: t.programs.womenDesc,
      image: womenImage,
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {t.programs.badge}
          </span>
          <h2 className="heading-section text-foreground">{t.programs.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.programs.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Link
              key={index}
              to="/programs"
              className="group card-elevated overflow-hidden hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 img-zoom">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 ${program.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  <program.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  {t.programs.learnMore}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/programs">
            <Button variant="outline" size="lg">
              {t.programs.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
