import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X, Play } from "lucide-react";
import educationImage from "@/assets/education-program.jpg";
import foodImage from "@/assets/food-distribution.jpg";
import medicalImage from "@/assets/medical-assistance.jpg";
import womenImage from "@/assets/women-development.jpg";
import heroImage from "@/assets/hero-image.jpg";

const categories = ["All", "Education", "Healthcare", "Food Distribution", "Women Empowerment", "Events"];

const galleryItems = [
  { id: 1, image: educationImage, category: "Education", title: "Classroom Session" },
  { id: 2, image: foodImage, category: "Food Distribution", title: "Weekly Food Drive" },
  { id: 3, image: medicalImage, category: "Healthcare", title: "Medical Camp" },
  { id: 4, image: womenImage, category: "Women Empowerment", title: "Skills Training" },
  { id: 5, image: heroImage, category: "Events", title: "Community Gathering" },
  { id: 6, image: educationImage, category: "Education", title: "Book Distribution" },
  { id: 7, image: medicalImage, category: "Healthcare", title: "Health Checkup" },
  { id: 8, image: womenImage, category: "Women Empowerment", title: "Sewing Workshop" },
  { id: 9, image: foodImage, category: "Food Distribution", title: "Ramadan Program" },
  { id: 10, image: heroImage, category: "Events", title: "Volunteer Meet" },
  { id: 11, image: educationImage, category: "Education", title: "Digital Learning" },
  { id: 12, image: medicalImage, category: "Healthcare", title: "Vaccination Drive" },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10 text-center text-primary-foreground">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4 animate-fade-in-down">
            Our Gallery
          </span>
          <h1 className="heading-display mb-6 animate-fade-in-up">
            Moments of <span className="text-accent">Impact</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Browse through images from our events, programs, and campaigns. Each photo tells a story of hope and transformation.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-square img-zoom animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
                    <p className="font-serif text-lg font-semibold mb-1">{item.title}</p>
                    <p className="text-sm text-white/80">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Watch Our Story
            </span>
            <h2 className="heading-section text-foreground">Videos From the Field</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer"
              >
                <img
                  src={heroImage}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-2xl"
            />
            <div className="text-center mt-4 text-white">
              <p className="font-serif text-xl font-semibold">{selectedImage.title}</p>
              <p className="text-white/70">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default GalleryPage;
