import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import sliderEducation from "@/assets/slider-education.jpg";
import sliderFood from "@/assets/slider-food.jpg";
import sliderMedical from "@/assets/slider-medical.jpg";

const news = [
  {
    image: sliderEducation,
    date: "2024-12-15",
    titleBn: "নতুন শিক্ষা কেন্দ্র উদ্বোধন",
    titleEn: "New Education Center Inauguration",
    excerptBn: "গ্রামীণ শিশুদের জন্য আধুনিক শিক্ষা সুবিধা নিয়ে নতুন কেন্দ্র চালু।",
    excerptEn: "New center launched with modern education facilities for rural children.",
  },
  {
    image: sliderFood,
    date: "2024-12-10",
    titleBn: "শীতকালীন খাদ্য বিতরণ অভিযান",
    titleEn: "Winter Food Distribution Campaign",
    excerptBn: "হাজারো পরিবারে পৌঁছে গেছে শীতকালীন খাদ্য সহায়তা।",
    excerptEn: "Winter food assistance reached thousands of families.",
  },
  {
    image: sliderMedical,
    date: "2024-12-05",
    titleBn: "বিনামূল্যে স্বাস্থ্য শিবির সম্পন্ন",
    titleEn: "Free Health Camp Completed",
    excerptBn: "৫০০ জনেরও বেশি গ্রামবাসী বিনামূল্যে চিকিৎসা সেবা পেয়েছেন।",
    excerptEn: "More than 500 villagers received free medical services.",
  },
];

export const NewsPreview = () => {
  const { language, t } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === "bn"
      ? date.toLocaleDateString("bn-BD", { day: "numeric", month: "long", year: "numeric" })
      : date.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {t.news.badge}
          </span>
          <h2 className="heading-section text-foreground">
            {t.news.title} <span className="text-primary">{t.news.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.news.subtitle}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={language === "bn" ? item.titleBn : item.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    <Calendar className="w-3 h-3" />
                    {formatDate(item.date)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {language === "bn" ? item.titleBn : item.titleEn}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {language === "bn" ? item.excerptBn : item.excerptEn}
                </p>
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                >
                  {t.news.readMore}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link to="/news">
            <Button variant="outline" size="lg" className="group">
              {t.programs.viewAll} {t.news.titleHighlight}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
