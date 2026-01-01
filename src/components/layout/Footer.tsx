import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold">
                {language === "bn" ? "মুনজু ফাউন্ডেশন" : "Munzu Foundation"}
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {[
                { name: t.nav.about, path: "/about" },
                { name: t.nav.programs, path: "/programs" },
                { name: t.nav.projects, path: "/projects" },
                { name: t.nav.gallery, path: "/gallery" },
                { name: t.nav.news, path: "/news" },
                { name: t.nav.contact, path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t.footer.getInvolved}</h4>
            <ul className="space-y-3">
              {[
                { name: t.nav.donateNow, path: "/donate" },
                { name: t.cta.becomeVolunteer, path: "/volunteer" },
                { name: t.footer.partnerWithUs, path: "/contact" },
                { name: t.footer.corporateGiving, path: "/donate" },
                { name: t.footer.fundraise, path: "/donate" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t.footer.contactUs}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70">
                  {language === "bn" ? "১২৩ ফাউন্ডেশন স্ট্রিট, ঢাকা, বাংলাদেশ" : "123 Foundation Street, Dhaka, Bangladesh"}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+8801234567890" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  +880 1234 567 890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@munzufoundation.org" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  info@munzufoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors">
              {t.footer.termsConditions}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
