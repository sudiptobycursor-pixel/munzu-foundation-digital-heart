import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Utensils, Stethoscope, Users, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import PageHero from "@/components/PageHero";
import educationImage from "@/assets/education-program.jpg";
import foodImage from "@/assets/food-distribution.jpg";
import medicalImage from "@/assets/medical-assistance.jpg";
import womenImage from "@/assets/women-development.jpg";
import heroProgramsImage from "@/assets/hero-programs.jpg";

const ProgramsPage = () => {
  const { t } = useLanguage();

  const programs = [
    {
      id: "education",
      icon: GraduationCap,
      title: t.programs.education,
      subtitle: "Building Futures Through Knowledge",
      description: t.programs.educationDesc,
      image: educationImage,
      color: "bg-blue-500",
      features: [
        "Scholarships for deserving students",
        "Free school supplies and books",
        "After-school tutoring programs",
        "Digital literacy training",
        "Career counseling sessions",
      ],
      stats: { value: "5,000+", label: "Students Supported" },
    },
    {
      id: "food",
      icon: Utensils,
      title: t.programs.food,
      subtitle: "Nourishing Communities",
      description: t.programs.foodDesc,
      image: foodImage,
      color: "bg-orange-500",
      features: [
        "Weekly food distribution drives",
        "Community kitchen programs",
        "Nutrition education workshops",
        "Emergency food relief",
        "Ramadan food packages",
      ],
      stats: { value: "50,000+", label: "Meals Served" },
    },
    {
      id: "medical",
      icon: Stethoscope,
      title: t.programs.medical,
      subtitle: "Healthcare for All",
      description: t.programs.medicalDesc,
      image: medicalImage,
      color: "bg-red-500",
      features: [
        "Free medical checkup camps",
        "Medicine distribution",
        "Health awareness workshops",
        "Maternal health support",
        "Emergency medical aid",
      ],
      stats: { value: "10,000+", label: "Patients Treated" },
    },
    {
      id: "women",
      icon: Users,
      title: t.programs.women,
      subtitle: "Empowering the Future",
      description: t.programs.womenDesc,
      image: womenImage,
      color: "bg-purple-500",
      features: [
        "Vocational training programs",
        "Women's self-help groups",
        "Child protection initiatives",
        "Early childhood education",
        "Financial literacy training",
      ],
      stats: { value: "2,000+", label: "Women Trained" },
    },
  ];

  return (
    <Layout>
      <PageHero
        badge={t.programs.badge}
        title="Creating"
        titleHighlight="Impact"
        titleEnd="That Lasts"
        subtitle={t.programs.subtitle}
        backgroundImage={heroProgramsImage}
      />

      <section className="section-padding bg-background">
        <div className="container-custom space-y-24">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <ScrollReveal animation={index % 2 === 0 ? "fade-right" : "fade-left"}>
                <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl img-zoom">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className={`inline-block px-4 py-2 ${program.color} text-white rounded-full text-sm font-medium`}>
                        {program.stats.value} {program.stats.label}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation={index % 2 === 0 ? "fade-left" : "fade-right"} delay={200}>
                <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                    <program.icon className="w-7 h-7" />
                  </div>
                  <h2 className="heading-section text-foreground">{program.title}</h2>
                  <p className="text-accent font-medium mb-4">{program.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <Link to="/donate">
                      <Button variant="hero" size="lg">
                        Support This Program
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link to="/projects">
                      <Button variant="outline" size="lg">
                        {t.about.viewProjects}
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-primary">
        <ScrollReveal>
          <div className="container-custom text-center text-primary-foreground">
            <h2 className="heading-section mb-6">{t.common.readyToMakeDifference}</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              {t.common.readyText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button variant="gold" size="xl">
                  {t.nav.donateNow}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/volunteer">
                <Button variant="heroOutline" size="xl">
                  {t.cta.becomeVolunteer}
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default ProgramsPage;