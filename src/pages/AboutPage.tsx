import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, CheckCircle } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const values = [
  { icon: Heart, title: "Compassion", description: "We approach every challenge with empathy and care." },
  { icon: Target, title: "Impact", description: "We focus on creating measurable, lasting change." },
  { icon: Users, title: "Community", description: "We believe in the power of collective action." },
  { icon: Award, title: "Integrity", description: "We maintain transparency and accountability." },
];

const team = [
  { name: "Mohammad Rahman", role: "Founder & CEO", image: founderImage },
  { name: "Fatima Ahmed", role: "Program Director", image: founderImage },
  { name: "Kamal Hossain", role: "Operations Head", image: founderImage },
  { name: "Nasreen Begum", role: "Community Lead", image: founderImage },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10 text-center text-primary-foreground">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4 animate-fade-in-down">
            About Us
          </span>
          <h1 className="heading-display mb-6 animate-fade-in-up">
            Our Story of <span className="text-accent">Hope</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Since 2015, Munzu Foundation has been dedicated to transforming lives and building stronger communities across Bangladesh.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                Our Beginning
              </span>
              <h2 className="heading-section text-foreground">
                How It All Started
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Munzu Foundation was established in 2015 by Mohammad Rahman, who witnessed firsthand the struggles faced by underprivileged communities in rural Bangladesh. What began as a small initiative to provide educational supplies to local schools has grown into a comprehensive organization serving thousands.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we operate across 12 districts, running programs in education, healthcare, food security, and women empowerment. Our journey has been fueled by the belief that every person deserves access to basic necessities and opportunities for growth.
              </p>
              <div className="flex gap-4">
                <Link to="/projects">
                  <Button size="lg">View Our Projects</Button>
                </Link>
                <Link to="/volunteer">
                  <Button variant="outline" size="lg">Join Our Team</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={founderImage}
                  alt="Founder"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-serif text-xl font-semibold">Mohammad Rahman</p>
                  <p className="text-white/80">Founder & CEO</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-2xl flex items-center justify-center animate-float shadow-xl">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">9+</p>
                  <p className="text-xs text-foreground/80">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elevated p-8 md:p-12">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every individual, regardless of their background, has access to education, healthcare, and opportunities to thrive. We envision sustainable communities where no one is left behind.
              </p>
            </div>
            <div className="card-elevated p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To empower underprivileged communities through comprehensive programs in education, healthcare, nutrition, and skills development, creating pathways to self-sufficiency and dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="heading-section text-foreground">What Drives Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every action we take.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-elevated text-center p-8 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="heading-section text-foreground">Meet the Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated individuals working tirelessly to make our vision a reality.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card-elevated overflow-hidden group"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                Looking Ahead
              </span>
              <h2 className="heading-section text-foreground">Our 2030 Goals</h2>
            </div>
            <div className="space-y-6">
              {[
                "Reach 100,000 beneficiaries across Bangladesh",
                "Establish 50 community learning centers",
                "Provide clean water access to 200 villages",
                "Train 10,000 women in vocational skills",
                "Launch healthcare mobile units in 20 districts",
              ].map((goal, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-secondary rounded-xl"
                >
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
