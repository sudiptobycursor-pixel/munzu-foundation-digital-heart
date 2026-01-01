import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Users, CheckCircle, Target } from "lucide-react";
import educationImage from "@/assets/education-program.jpg";
import foodImage from "@/assets/food-distribution.jpg";
import medicalImage from "@/assets/medical-assistance.jpg";
import womenImage from "@/assets/women-development.jpg";

const ongoingProjects = [
  {
    title: "School for All Initiative",
    location: "Sylhet Division",
    date: "2024 - Ongoing",
    beneficiaries: "500+ children",
    image: educationImage,
    progress: 65,
    description: "Building 5 new schools in remote villages to provide quality education access.",
  },
  {
    title: "Community Health Centers",
    location: "Chittagong Hill Tracts",
    date: "2024 - Ongoing",
    beneficiaries: "2,000+ patients",
    image: medicalImage,
    progress: 40,
    description: "Establishing permanent health centers for maternal and child healthcare.",
  },
];

const completedProjects = [
  {
    title: "Clean Water Project",
    location: "Rajshahi Division",
    date: "2023",
    beneficiaries: "1,500+ families",
    image: foodImage,
    result: "Installed 50 tube wells providing safe drinking water",
  },
  {
    title: "Women Empowerment Program",
    location: "Rangpur District",
    date: "2023",
    beneficiaries: "300 women",
    image: womenImage,
    result: "Trained women in tailoring, now earning sustainable income",
  },
];

const successStories = [
  {
    name: "Fatima Begum",
    story: "After receiving tailoring training, I now run my own small business and can afford my children's education.",
    image: womenImage,
  },
  {
    name: "Rahim Ahmed",
    story: "The scholarship from Munzu Foundation helped me complete my studies. Now I'm a teacher, giving back to my community.",
    image: educationImage,
  },
];

const ProjectsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10 text-center text-primary-foreground">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4 animate-fade-in-down">
            Projects & Impact
          </span>
          <h1 className="heading-display mb-6 animate-fade-in-up">
            Real Stories, <span className="text-accent">Real Impact</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Every project we undertake is a step towards a more equitable world. See the difference your support makes.
          </p>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Active Initiatives
            </span>
            <h2 className="heading-section text-foreground">Ongoing Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Current initiatives where your support can make an immediate impact.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {ongoingProjects.map((project, index) => (
              <div key={index} className="card-elevated overflow-hidden">
                <div className="relative h-56 img-zoom">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-foreground rounded-full text-sm font-medium">
                    {project.progress}% Complete
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-primary" />
                      {project.beneficiaries}
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 mb-4">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <Link to="/donate">
                    <Button variant="hero" className="w-full">
                      Support This Project
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Achievements
            </span>
            <h2 className="heading-section text-foreground">Completed Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Past initiatives that have created lasting change in communities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <div key={index} className="card-elevated overflow-hidden flex flex-col md:flex-row">
                <div className="relative w-full md:w-48 h-48 md:h-auto shrink-0 img-zoom">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Completed</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                    <span>{project.date}</span>
                  </div>
                  <p className="text-foreground font-medium text-sm">
                    <Target className="w-4 h-4 inline mr-1 text-accent" />
                    {project.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="heading-section text-foreground">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from the people whose lives have been transformed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <div key={index} className="card-elevated p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground italic mb-4">"{story.story}"</p>
                <p className="font-serif font-semibold text-foreground">{story.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center text-primary-foreground">
          <h2 className="heading-section mb-6">Be Part of the Change</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Your contribution helps us continue creating impact. Join us in building a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button variant="gold" size="xl">
                Donate Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="heroOutline" size="xl">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
