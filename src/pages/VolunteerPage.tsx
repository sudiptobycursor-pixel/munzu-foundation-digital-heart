import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Users, Heart, Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import PageHero from "@/components/PageHero";
import heroVolunteerImage from "@/assets/hero-volunteer.jpg";

const VolunteerPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    skills: "",
    availability: "",
    motivation: "",
  });
  const { toast } = useToast();

  const volunteerRoles = [
    { icon: GraduationCap, title: t.volunteer.teaching, description: t.volunteer.teachingDesc },
    { icon: Heart, title: t.volunteer.healthcare, description: t.volunteer.healthcareDesc },
    { icon: Briefcase, title: t.volunteer.professionalSkills, description: t.volunteer.professionalSkillsDesc },
    { icon: Users, title: t.volunteer.communityOutreach, description: t.volunteer.communityOutreachDesc },
  ];

  const benefits = [
    t.volunteer.benefit1,
    t.volunteer.benefit2,
    t.volunteer.benefit3,
    t.volunteer.benefit4,
    t.volunteer.benefit5,
    t.volunteer.benefit6,
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t.volunteer.applicationSubmitted,
      description: t.volunteer.applicationSubmittedDesc,
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      occupation: "",
      skills: "",
      availability: "",
      motivation: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <PageHero
        badge={t.volunteer.badge}
        title={t.volunteer.title}
        titleHighlight={t.volunteer.titleHighlight}
        subtitle={t.volunteer.subtitle}
        backgroundImage={heroVolunteerImage}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                  {t.volunteer.whyBadge}
                </span>
                <h2 className="heading-section text-foreground">
                  {t.volunteer.whyTitle}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t.volunteer.whyText}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-6">
              {volunteerRoles.map((role, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div className="card-elevated p-6 text-center group h-full">
                    <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <role.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {role.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{role.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                  {t.volunteer.formBadge}
                </span>
                <h2 className="heading-section text-foreground">{t.volunteer.formTitle}</h2>
                <p className="text-muted-foreground">
                  {t.volunteer.formSubtitle}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <form onSubmit={handleSubmit} className="card-elevated p-8 md:p-12 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">{t.volunteer.fullName} *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t.contact.email} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">{t.contact.phone} *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXXXXX"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="occupation">{t.volunteer.occupation}</Label>
                    <Input
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="Student, Professional, etc."
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="skills">{t.volunteer.skillsExpertise}</Label>
                  <Input
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="Teaching, Healthcare, IT, Languages, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="availability">{t.volunteer.availability} *</Label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md text-foreground"
                    required
                  >
                    <option value="">{t.volunteer.selectAvailability}</option>
                    <option value="weekdays">{t.volunteer.weekdays}</option>
                    <option value="weekends">{t.volunteer.weekends}</option>
                    <option value="both">{t.volunteer.both}</option>
                    <option value="flexible">{t.volunteer.flexible}</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="motivation">{t.volunteer.motivation} *</Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    placeholder={t.volunteer.motivationPlaceholder}
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full">
                  {t.volunteer.submitApplication}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <ScrollReveal>
          <div className="container-custom text-center text-primary-foreground">
            <h2 className="heading-section mb-6">{t.volunteer.cantVolunteer}</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              {t.volunteer.cantVolunteerText}
            </p>
            <Button variant="gold" size="xl" asChild>
              <a href="/donate">
                {t.nav.donateNow}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default VolunteerPage;