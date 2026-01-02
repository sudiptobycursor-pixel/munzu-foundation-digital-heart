import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import PageHero from "@/components/PageHero";
import educationImage from "@/assets/education-program.jpg";
import foodImage from "@/assets/food-distribution.jpg";
import medicalImage from "@/assets/medical-assistance.jpg";
import womenImage from "@/assets/women-development.jpg";
import heroGalleryImage from "@/assets/hero-gallery.jpg";
import communityImage from "@/assets/community-together.jpg";
import galleryChildrenImage from "@/assets/gallery-children.jpg";
import galleryEducationImage from "@/assets/gallery-education.jpg";

const GalleryPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const categories = [
    t.gallery.all, 
    t.gallery.education, 
    t.gallery.healthcare, 
    t.gallery.foodDistribution, 
    t.gallery.womenEmpowerment, 
    t.gallery.events
  ];

  const galleryItems = [
    { id: 1, image: educationImage, category: t.gallery.education, title: "Classroom Session" },
    { id: 2, image: foodImage, category: t.gallery.foodDistribution, title: "Weekly Food Drive" },
    { id: 3, image: medicalImage, category: t.gallery.healthcare, title: "Medical Camp" },
    { id: 4, image: womenImage, category: t.gallery.womenEmpowerment, title: "Skills Training" },
    { id: 5, image: communityImage, category: t.gallery.events, title: "Community Gathering" },
    { id: 6, image: galleryEducationImage, category: t.gallery.education, title: "Book Distribution" },
    { id: 7, image: galleryChildrenImage, category: t.gallery.healthcare, title: "Health Checkup" },
    { id: 8, image: womenImage, category: t.gallery.womenEmpowerment, title: "Sewing Workshop" },
    { id: 9, image: foodImage, category: t.gallery.foodDistribution, title: "Ramadan Program" },
    { id: 10, image: communityImage, category: t.gallery.events, title: "Volunteer Meet" },
    { id: 11, image: galleryEducationImage, category: t.gallery.education, title: "Digital Learning" },
    { id: 12, image: medicalImage, category: t.gallery.healthcare, title: "Vaccination Drive" },
  ];

  const filteredItems = activeCategory === t.gallery.all
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      <PageHero
        badge={t.gallery.badge}
        title={t.gallery.title}
        titleHighlight={t.gallery.titleHighlight}
        subtitle={t.gallery.subtitle}
        backgroundImage={heroGalleryImage}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
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
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <ScrollReveal key={item.id} animation="scale" delay={index * 50}>
                <div
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-square img-zoom"
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                {t.gallery.videoBadge}
              </span>
              <h2 className="heading-section text-foreground">{t.gallery.videoTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[communityImage, galleryChildrenImage, galleryEducationImage].map((img, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 150}>
                <div className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer">
                  <img
                    src={img}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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