import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Users, Heart, Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const volunteerRoles = [
  { icon: GraduationCap, title: "Teaching", description: "Share your knowledge with underprivileged children" },
  { icon: Heart, title: "Healthcare", description: "Support our medical camps and health programs" },
  { icon: Briefcase, title: "Professional Skills", description: "Offer legal, financial, or technical expertise" },
  { icon: Users, title: "Community Outreach", description: "Help with events, campaigns, and awareness" },
];

const benefits = [
  "Make a real difference in people's lives",
  "Gain valuable experience and skills",
  "Connect with like-minded individuals",
  "Receive training and support",
  "Get a certificate of appreciation",
  "Be part of a meaningful community",
];

const VolunteerPage = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted! 🎉",
      description: "Thank you for your interest in volunteering. Our team will contact you within 48 hours.",
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
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10 text-center text-primary-foreground">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4 animate-fade-in-down">
            Join Our Team
          </span>
          <h1 className="heading-display mb-6 animate-fade-in-up">
            Become a <span className="text-accent">Volunteer</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Your time and skills can transform lives. Join our community of dedicated volunteers making a difference.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                Why Volunteer?
              </span>
              <h2 className="heading-section text-foreground">
                Make a Difference That Matters
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Volunteering with Munzu Foundation is more than just giving your time – it's about being part of a movement that creates lasting change. Whether you have a few hours a week or can commit to regular service, we have a place for you.
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
            <div className="grid sm:grid-cols-2 gap-6">
              {volunteerRoles.map((role, index) => (
                <div key={index} className="card-elevated p-6 text-center group">
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <role.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {role.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                Register Now
              </span>
              <h2 className="heading-section text-foreground">Volunteer Application Form</h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will get in touch with you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="card-elevated p-8 md:p-12 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
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
                  <Label htmlFor="email">Email *</Label>
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
                  <Label htmlFor="phone">Phone *</Label>
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
                  <Label htmlFor="occupation">Occupation</Label>
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
                <Label htmlFor="skills">Skills & Expertise</Label>
                <Input
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Teaching, Healthcare, IT, Languages, etc."
                />
              </div>

              <div>
                <Label htmlFor="availability">Availability *</Label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md text-foreground"
                  required
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays (Mon-Fri)</option>
                  <option value="weekends">Weekends (Sat-Sun)</option>
                  <option value="both">Both weekdays and weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <Label htmlFor="motivation">Why do you want to volunteer? *</Label>
                <Textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Tell us what motivates you to volunteer with Munzu Foundation..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                Submit Application
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center text-primary-foreground">
          <h2 className="heading-section mb-6">Can't Volunteer? You Can Still Help!</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            If your schedule doesn't allow for volunteering, consider making a donation. Every contribution counts!
          </p>
          <Button variant="gold" size="xl" asChild>
            <a href="/donate">
              Make a Donation
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default VolunteerPage;
