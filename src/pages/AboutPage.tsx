import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import PageHero from "@/components/PageHero";
import founderImage from "@/assets/founder.jpg";
import heroAboutImage from "@/assets/hero-about.jpg";

const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: t('about.compassion'), description: t('about.compassionDesc') },
    { icon: Target, title: t('about.impactValue'), description: t('about.impactDesc') },
    { icon: Users, title: t('about.community'), description: t('about.communityDesc') },
    { icon: Award, title: t('about.integrity'), description: t('about.integrityDesc') },
  ];

  const team = [
    { name: "Mohammad Rahman", role: t('about.founderTitle'), image: founderImage },
    { name: "Fatima Ahmed", role: "Program Director", image: founderImage },
    { name: "Kamal Hossain", role: "Operations Head", image: founderImage },
    { name: "Nasreen Begum", role: "Community Lead", image: founderImage },
  ];

  const goals = [
    t('about.goal1'),
    t('about.goal2'),
    t('about.goal3'),
    t('about.goal4'),
    t('about.goal5'),
  ];

  return (
    <Layout>
      {/* Hero with Background Image */}
      <PageHero
        badge={t('about.badge')}
        title={t('about.title')}
        titleHighlight={t('about.titleHighlight')}
        subtitle={t('about.subtitle')}
        backgroundImage={heroAboutImage}
      />

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div className="space-y-6">
                <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                  {t('about.beginningBadge')}
                </span>
                <h2 className="heading-section text-foreground">
                  {t('about.beginningTitle')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.beginningText1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.beginningText2')}
                </p>
                <div className="flex gap-4">
                  <Link to="/projects">
                    <Button size="lg">{t('about.viewProjects')}</Button>
                  </Link>
                  <Link to="/volunteer">
                    <Button variant="outline" size="lg">{t('about.joinTeam')}</Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl img-zoom">
                  <img
                    src={founderImage}
                    alt="Founder"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-serif text-xl font-semibold">Mohammad Rahman</p>
                    <p className="text-white/80">{t('about.founderTitle')}</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-2xl flex items-center justify-center animate-float shadow-xl">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">9+</p>
                    <p className="text-xs text-foreground/80">{t('about.years')}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal animation="fade-up">
              <div className="card-elevated p-8 md:p-12 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">{t('about.visionTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.visionText')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="card-elevated p-8 md:p-12 bg-primary text-primary-foreground h-full">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{t('about.missionTitle')}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {t('about.missionText')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                {t('about.valuesBadge')}
              </span>
              <h2 className="heading-section text-foreground">{t('about.valuesTitle')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('about.valuesSubtitle')}
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="card-elevated text-center p-8 group h-full">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold mb-3 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                {t('about.teamBadge')}
              </span>
              <h2 className="heading-section text-foreground">{t('about.teamTitle')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('about.teamSubtitle')}
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} animation="scale" delay={index * 100}>
                <div className="card-elevated overflow-hidden group">
                  <div className="relative h-64 img-zoom">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="font-serif text-lg font-semibold text-foreground">
                      {member.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                  {t('about.goalsBadge')}
                </span>
                <h2 className="heading-section text-foreground">{t('about.goalsTitle')}</h2>
              </div>
            </ScrollReveal>
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <ScrollReveal key={index} animation="fade-right" delay={index * 100}>
                  <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <p className="text-foreground font-medium">{goal}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
