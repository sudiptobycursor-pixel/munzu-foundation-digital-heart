import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import educationImage from "@/assets/education-program.jpg";
import foodImage from "@/assets/food-distribution.jpg";
import medicalImage from "@/assets/medical-assistance.jpg";
import womenImage from "@/assets/women-development.jpg";

const newsArticles = [
  {
    id: 1,
    title: "Munzu Foundation Launches New Education Center in Sylhet",
    excerpt: "A new learning center was inaugurated, providing free education to over 200 children in rural Sylhet.",
    image: educationImage,
    date: "December 15, 2024",
    author: "Admin",
    category: "Education",
    featured: true,
  },
  {
    id: 2,
    title: "Record-Breaking Food Distribution During Winter",
    excerpt: "Over 5,000 families received warm meals and winter supplies in our largest distribution event yet.",
    image: foodImage,
    date: "December 10, 2024",
    author: "Admin",
    category: "Food Security",
    featured: true,
  },
  {
    id: 3,
    title: "Free Medical Camp Benefits 500+ Patients",
    excerpt: "Our monthly medical camp provided free consultations and medicines to underserved communities.",
    image: medicalImage,
    date: "December 5, 2024",
    author: "Admin",
    category: "Healthcare",
    featured: false,
  },
  {
    id: 4,
    title: "Women Empowerment Workshop Graduates First Batch",
    excerpt: "25 women completed vocational training and are now earning sustainable income.",
    image: womenImage,
    date: "November 28, 2024",
    author: "Admin",
    category: "Empowerment",
    featured: false,
  },
  {
    id: 5,
    title: "Partnership with Local Schools Expands",
    excerpt: "We've partnered with 10 more schools to provide educational materials and support.",
    image: educationImage,
    date: "November 20, 2024",
    author: "Admin",
    category: "Education",
    featured: false,
  },
  {
    id: 6,
    title: "Annual Report 2024: A Year of Impact",
    excerpt: "Reflecting on our achievements and the lives we've touched throughout the year.",
    image: foodImage,
    date: "November 15, 2024",
    author: "Admin",
    category: "Updates",
    featured: false,
  },
];

const NewsPage = () => {
  const featuredArticles = newsArticles.filter((a) => a.featured);
  const regularArticles = newsArticles.filter((a) => !a.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10 text-center text-primary-foreground">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4 animate-fade-in-down">
            News & Updates
          </span>
          <h1 className="heading-display mb-6 animate-fade-in-up">
            Latest <span className="text-accent">News</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Stay updated with our activities, press coverage, and impact stories from the field.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <article
                key={article.id}
                className="card-elevated overflow-hidden group"
              >
                <div className="relative h-64 img-zoom">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-foreground rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {article.category}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Link to={`/news/${article.id}`} className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Regular Articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <article
                key={article.id}
                className="card-elevated overflow-hidden group"
              >
                <div className="relative h-48 img-zoom">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="px-2 py-0.5 bg-secondary rounded text-xs">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{article.excerpt}</p>
                  <Link to={`/news/${article.id}`} className="inline-flex items-center text-primary text-sm font-medium">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-section text-foreground mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest updates on our programs, events, and impact stories delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="hero" size="lg">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
