import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  { name: "UNICEF", logo: "🌍" },
  { name: "World Vision", logo: "🌐" },
  { name: "BRAC", logo: "🏛️" },
  { name: "Save the Children", logo: "👶" },
  { name: "ActionAid", logo: "💪" },
  { name: "CARE Bangladesh", logo: "❤️" },
];

export const PartnersSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-muted/50 border-y border-border">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-lg font-medium text-muted-foreground">
            {language === "bn" ? "আমাদের অংশীদার" : "Our Partners"}
          </h3>
        </div>

        {/* Partners Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 items-center justify-center flex-wrap md:flex-nowrap">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-3xl">{partner.logo}</span>
                <span className="font-medium text-foreground whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
