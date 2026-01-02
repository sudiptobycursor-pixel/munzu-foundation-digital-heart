import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import galleryChildren from "@/assets/gallery-children.jpg";
import galleryEducation from "@/assets/gallery-education.jpg";
import sliderEducation from "@/assets/slider-education.jpg";
import sliderFood from "@/assets/slider-food.jpg";
import sliderWomen from "@/assets/slider-women.jpg";
import sliderMedical from "@/assets/slider-medical.jpg";
import communityTogether from "@/assets/community-together.jpg";
import parallaxVillage from "@/assets/parallax-village.jpg";

const images = [
  { src: galleryChildren, alt: "Children playing" },
  { src: galleryEducation, alt: "Education program" },
  { src: sliderEducation, alt: "Students learning" },
  { src: sliderFood, alt: "Food distribution" },
  { src: sliderWomen, alt: "Women empowerment" },
  { src: sliderMedical, alt: "Medical camp" },
  { src: communityTogether, alt: "Community gathering" },
  { src: parallaxVillage, alt: "Village landscape" },
];

export const GalleryPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {t.gallery.badge}
          </span>
          <h2 className="heading-section text-foreground">
            {t.gallery.title} <span className="text-primary">{t.gallery.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.slice(0, 8).map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button variant="outline" size="lg" className="group">
              {t.gallery.all} {t.gallery.titleHighlight}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
